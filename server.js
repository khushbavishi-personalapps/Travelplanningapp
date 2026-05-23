const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const PORT = process.env.PORT || 4173;
const HOST = process.env.HOST || (process.env.PORT ? "0.0.0.0" : "127.0.0.1");
const ROOT = __dirname;
const PUBLIC_DIR = path.join(ROOT, "public");
const DATA_DIR = path.join(ROOT, "data");
const STATE_FILE = path.join(DATA_DIR, "state.json");

const clients = new Set();

const defaultState = {
  profiles: [],
  votes: {},
  comments: {}
};

async function ensureState() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    const raw = await fs.readFile(STATE_FILE, "utf8");
    return JSON.parse(raw);
  } catch {
    await fs.writeFile(STATE_FILE, JSON.stringify(defaultState, null, 2));
    return { ...defaultState };
  }
}

async function saveState(state) {
  await fs.writeFile(STATE_FILE, JSON.stringify(state, null, 2));
}

function sendJson(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(payload)
  });
  res.end(payload);
}

function broadcast(state) {
  const message = `data: ${JSON.stringify(state)}\n\n`;
  for (const res of clients) {
    res.write(message);
  }
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error("Request body too large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

function cleanText(value, maxLength) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

async function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = path.normalize(path.join(PUBLIC_DIR, pathname));

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    const file = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const types = {
      ".html": "text/html; charset=utf-8",
      ".css": "text/css; charset=utf-8",
      ".js": "application/javascript; charset=utf-8",
      ".json": "application/json; charset=utf-8",
      ".svg": "image/svg+xml"
    };
    res.writeHead(200, { "content-type": types[ext] || "application/octet-stream" });
    res.end(file);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}

async function handleApi(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "GET" && url.pathname === "/api/state") {
    sendJson(res, 200, await ensureState());
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/events") {
    res.writeHead(200, {
      "content-type": "text/event-stream",
      "cache-control": "no-cache",
      connection: "keep-alive"
    });
    clients.add(res);
    res.write(`data: ${JSON.stringify(await ensureState())}\n\n`);
    req.on("close", () => clients.delete(res));
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/profile") {
    const body = await parseBody(req);
    const name = cleanText(body.name, 40);
    const age = Number.parseInt(body.age, 10);
    if (!name || Number.isNaN(age) || age < 0 || age > 120) {
      sendJson(res, 400, { error: "Please enter a name and a valid age." });
      return;
    }

    const state = await ensureState();
    const profile = {
      id: crypto.randomUUID(),
      name,
      age,
      createdAt: new Date().toISOString()
    };
    state.profiles.push(profile);
    await saveState(state);
    broadcast(state);
    sendJson(res, 200, state);
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/vote") {
    const body = await parseBody(req);
    const profileId = cleanText(body.profileId, 80);
    const slotId = cleanText(body.slotId, 120);
    const optionId = cleanText(body.optionId, 120);
    const state = await ensureState();

    if (!state.profiles.some(profile => profile.id === profileId) || !slotId || !optionId) {
      sendJson(res, 400, { error: "Choose a profile before voting." });
      return;
    }

    state.votes[slotId] = state.votes[slotId] || {};
    state.votes[slotId][profileId] = optionId;
    await saveState(state);
    broadcast(state);
    sendJson(res, 200, state);
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/comment") {
    const body = await parseBody(req);
    const profileId = cleanText(body.profileId, 80);
    const optionId = cleanText(body.optionId, 120);
    const text = cleanText(body.text, 500);
    const state = await ensureState();

    if (!state.profiles.some(profile => profile.id === profileId) || !optionId || !text) {
      sendJson(res, 400, { error: "Choose a profile and write a comment." });
      return;
    }

    state.comments[optionId] = state.comments[optionId] || [];
    state.comments[optionId].push({
      id: crypto.randomUUID(),
      profileId,
      text,
      createdAt: new Date().toISOString()
    });
    await saveState(state);
    broadcast(state);
    sendJson(res, 200, state);
    return;
  }

  sendJson(res, 404, { error: "Unknown API route" });
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.url.startsWith("/api/")) {
      await handleApi(req, res);
      return;
    }
    await serveStatic(req, res);
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Server error" });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Nilgiris dashboard running on http://${HOST}:${PORT}`);
});
