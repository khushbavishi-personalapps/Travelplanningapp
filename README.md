# Kotagiri & Coonoor Family Itinerary Dashboard

Interactive family dashboard for the 20 June to 25 June 2026 Kotagiri/Coonoor trip.

## Run Locally

```bash
node server.js
```

Open `http://127.0.0.1:4173`.

## Real-Time Across Different Homes or Mobile Networks

For family members using their own mobile networks, the app must be hosted on the internet. Deploy this folder to a Node host such as Render, Railway, Fly.io, or a VPS.

The app already uses server-sent events, so votes and comments update live for everyone connected to the hosted URL.

### Render Quick Deploy

1. Push this folder to a GitHub repository.
2. In Render, create a new Blueprint or Web Service from the repository.
3. Use `render.yaml` or set:
   - Build command: `npm install --omit=dev`
   - Start command: `node server.js`
4. Share the Render URL with the family.

## Persistence Note

Votes and comments are saved in `data/state.json` on the server. On free hosts, file storage can reset when the app redeploys or restarts. For a final family poll, use a host with persistent disk/volume support or avoid redeploying after voting starts.
