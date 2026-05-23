const sources = [
  {
    title: "Nilgiris district: Dolphin's Nose",
    url: "https://nilgiris.nic.in/tourist-place/dolphins-nose-coonoor/",
    note: "Official district page confirming Dolphin's Nose and Catherine Falls views."
  },
  {
    title: "Tamil Nadu Tourism: Coonoor",
    url: "https://www.tamilnadutourism.com/attractions/coonoor.php",
    note: "Coonoor attractions, trekking base, Sim's Park, Lamb's Rock, Dolphin's Nose, toy train context."
  },
  {
    title: "Trek Tamil Nadu: Longwood Shola",
    url: "https://www.trektamilnadu.com/trail/long-wood-shola",
    note: "Longwood Shola listed as an easy 3 km, roughly 2 hour forest trail."
  },
  {
    title: "Kotagiri travel guide",
    url: "https://ootymade.com/pages/explore-kotagiri-weather-tourist-places-resorts-and-travel-guide",
    note: "Kotagiri places, quieter character, route notes, Kodanad, Catherine Falls, Longwood Shola."
  },
  {
    title: "Nilgiris e-pass guide",
    url: "https://ootymade.com/pages/how-to-apply-for-ooty-e-pass-online-latest-updates-news",
    note: "Current vehicle e-pass practical notes and official portal reference."
  },
  {
    title: "June weather baseline",
    url: "https://www.weather-atlas.com/en/india/kotagiri-weather-june",
    note: "June rain and temperature averages used for monsoon-aware pacing."
  },
  {
    title: "Sim's Park timings check",
    url: "https://traveltriangle.com/tamil-nadu-tourism/coonoor/places-to-visit/sims-park/timings",
    note: "Current public timing reference. Reconfirm locally before finalizing."
  },
  {
    title: "Highfield Tea Factory overview",
    url: "https://www.makemytrip.com/tripideas/attractions/tea-tasting-at-high-field-tea-factory",
    note: "Factory tour, tea tasting, eucalyptus oil, tea/chocolate shopping context."
  }
];

const games = [
  "Secret itinerary auction: everyone gets 100 imaginary points to bid on tomorrow's choices.",
  "Tea tasting scorecard: buy 4 local teas and rank aroma, strength, and comfort.",
  "Family travel awards: funniest moment, best photo, best snack, calmest person.",
  "Monsoon Pictionary: Nilgiris places, foods, family inside jokes.",
  "Two truths and a travel lie: each person tells three trip stories.",
  "Baby-led playlist night: each adult chooses one song the baby must react to."
];

const itineraries = {
  kotagiri: {
    title: "Kotagiri Base",
    summary: [
      ["Best For", "Quieter stay, tea estates, easy forest walks, slow villa rhythm."],
      ["Coonoor Limit", "Only 2 Coonoor-side days: 22 June and 24 June."],
      ["Food Mood", "Local cafes, tea/chocolate stops, villa dinners, one special meal."],
      ["Pace", "One strong activity each morning, one flexible afternoon, calm nights."]
    ],
    days: [
      day("Sat", "20 Jun", "Arrival and settling in", "Keep the first day light after the ghat drive.", [
        slot("Morning", "kotagiri-20-morning", "Leave Coimbatore early and arrive with buffer.", [
          opt("kotagiri-20-morning-a", "Direct drive to Kotagiri", ["Travel", "Low noise"], "Coimbatore to Mettupalayam to Kotagiri. Aim to leave by 6:30 AM, stop once for breakfast, and reach before lunch.", ["Approx. 2.5 to 3 hours with stops", "Baby-friendly if you stop before the ghat", "Best if villa check-in is flexible"]),
          opt("kotagiri-20-morning-b", "Slow breakfast halt", ["Food", "Gentle"], "Add a relaxed Mettupalayam breakfast and tea break so everyone arrives less rushed.", ["Adds 45 to 60 minutes", "Good for parents and baby", "Useful if check-in is later"]),
          opt("kotagiri-20-morning-c", "Scenic arrival photo stops", ["Nature", "Views"], "Take only safe lay-by stops on the Kotagiri ghat for mist, tea slopes, and family photos.", ["Weather dependent", "Avoid stopping on curves", "Keep it short"])
        ]),
        slot("Afternoon", "kotagiri-20-afternoon", "Check in, eat, and keep the first outing optional.", [
          opt("kotagiri-20-afternoon-a", "Villa lunch and nap reset", ["Rest", "Baby rhythm"], "Settle rooms, feed the baby, unpack, and protect the holiday mood from day-one overplanning.", ["Best default choice", "No travel after lunch", "Works even in rain"]),
          opt("kotagiri-20-afternoon-b", "Kotagiri town and market", ["Shopping", "Local"], "A short first look at town for tea, fruit, snacks, basic supplies, and local browsing for the moms.", ["30 to 60 minutes out", "Keep cash handy", "Good if everyone feels fresh"]),
          opt("kotagiri-20-afternoon-c", "John Sullivan Memorial", ["History", "Quiet"], "A low-key heritage stop connected to early Nilgiris history near Kotagiri.", ["Confirm opening locally", "Short visit", "Good rain fallback"])
        ]),
        slot("Night", "kotagiri-20-night", "First night should feel like arrival, not an agenda.", [
          opt("kotagiri-20-night-a", "Open-air meditation and early dinner", ["Meditation", "Calm"], "Do 15 minutes outside before dinner, then an early night.", ["Best after travel", "Baby wind-down friendly", "No logistics"]),
          opt("kotagiri-20-night-b", "Local-style villa dinner", ["Food", "Local"], "Ask the villa cook or host for a simple Nilgiris-style dinner using local vegetables.", ["Arrange in advance", "Great for parents", "Low noise"]),
          opt("kotagiri-20-night-c", "Tea tasting and family cards", ["Games", "Food"], "Buy two local teas and play cards or Uno while everyone votes on the next day.", ["Easy indoor fallback", "Low effort", "Good in rain"])
        ])
      ]),
      day("Sun", "21 Jun", "Kotagiri nature day", "A proper nature morning with a soft afternoon.", [
        slot("Morning", "kotagiri-21-morning", "Choose one nature anchor.", [
          opt("kotagiri-21-morning-a", "Kodanad View Point early", ["Nature", "Beginner"], "Panoramic valley views, Moyar side, and a gentle outing if clouds stay high.", ["Start by 7:30 AM", "Minimal walking", "Clear-weather priority"]),
          opt("kotagiri-21-morning-b", "Longwood Shola easy trail", ["Hike", "Forest"], "A guided easy forest walk through shola ecosystem. This is the most meditative nature option.", ["Book/confirm access", "Easy 3 km trail", "Shoes with grip"]),
          opt("kotagiri-21-morning-c", "Catherine Falls viewpoint", ["Waterfall", "Views"], "A scenic waterfall-view morning without trying to make it a hard trek.", ["Avoid slippery trails", "Carry rain layer", "Do not push if visibility is poor"])
        ]),
        slot("Afternoon", "kotagiri-21-afternoon", "Good food, shopping, or nothing.", [
          opt("kotagiri-21-afternoon-a", "Cafe lunch and cake stop", ["Food", "Cafe"], "A relaxed cafe lunch around Kotagiri with tea, cake, and snacks rather than a long lunch drive.", ["Good after a walk", "Baby-friendly break", "Keep it unhurried"]),
          opt("kotagiri-21-afternoon-b", "Local tea and snack shopping", ["Shopping", "Local"], "Tea, homemade chocolates, spices, oils, and fruit shopping for the villa.", ["Moms' pick", "60 to 90 minutes", "Easy rain fallback"]),
          opt("kotagiri-21-afternoon-c", "Villa rest block", ["Rest", "Slow"], "A protected rest block for naps, reading, massage, and balcony time.", ["Strongly recommended", "No travel", "Sets up a better evening"])
        ]),
        slot("Night", "kotagiri-21-night", "Keep the night social but gentle.", [
          opt("kotagiri-21-night-a", "Travel story circle", ["Games", "Family"], "Each person shares one childhood holiday memory and one thing they want from this trip.", ["No equipment", "Great with parents", "Low energy"]),
          opt("kotagiri-21-night-b", "Monsoon Pictionary", ["Games", "Indoor"], "Team game with places, foods, and family references from the trip.", ["Paper and pens", "Works in rain", "Good laughs"]),
          opt("kotagiri-21-night-c", "Quiet fire or balcony tea", ["Calm", "Meditation"], "If the villa allows it, sit outside quietly with tea. Otherwise do balcony time.", ["Confirm fire rules", "Low noise", "Early finish"])
        ])
      ]),
      day("Mon", "22 Jun", "Coonoor side trip 1", "First Coonoor day: gardens, tea, and one viewpoint.", [
        slot("Morning", "kotagiri-22-morning", "Pick the main Coonoor experience.", [
          opt("kotagiri-22-morning-a", "Sim's Park slow walk", ["Garden", "Baby-friendly"], "Terraced botanical garden, easy paths, and enough shade for a family walk.", ["Leave Kotagiri by 8:00 AM", "Confirm timing", "Good with stroller/carrier"]),
          opt("kotagiri-22-morning-b", "Highfield Tea Factory", ["Factory", "Shopping"], "Tea processing, tasting, eucalyptus oil, and a useful shopping stop.", ["Factory access can vary", "Good rain fallback", "Buy tea at source"]),
          opt("kotagiri-22-morning-c", "Lamb's Rock viewpoint", ["Views", "Short walk"], "Classic Coonoor valley views with a short walk from the parking area.", ["Wear grip shoes", "Skip in heavy rain", "Do before mist builds"])
        ]),
        slot("Afternoon", "kotagiri-22-afternoon", "Do one more stop or return early.", [
          opt("kotagiri-22-afternoon-a", "Bedford lunch and shopping", ["Food", "Shopping"], "Lunch in Coonoor and browsing around Bedford for snacks, chocolates, tea, and small finds.", ["Moms' friendly", "Easy logistics", "Crowds possible"]),
          opt("kotagiri-22-afternoon-b", "Dolphin's Nose if clear", ["Views", "Nature"], "Go only if the driver says visibility is good. Otherwise it becomes a long misty drive.", ["Narrow road", "View dependent", "Pair with Lamb's Rock"]),
          opt("kotagiri-22-afternoon-c", "Return for villa nap", ["Rest", "Smart pace"], "Head back after lunch and keep the baby and parents fresh.", ["Best monsoon default", "Avoid evening traffic", "Protects next day"])
        ]),
        slot("Night", "kotagiri-22-night", "Post-trip comfort.", [
          opt("kotagiri-22-night-a", "Simple dinner and photo voting", ["Games", "Family"], "Everyone submits two photos from the day and votes on favorites.", ["Phone-based", "Easy", "Creates memories"]),
          opt("kotagiri-22-night-b", "Chef's comfort meal", ["Food", "Rest"], "Ask for rasam, rice, vegetables, or whatever feels restorative after the drive.", ["Low effort", "Good after Coonoor", "Early sleep"]),
          opt("kotagiri-22-night-c", "Name that tea blind tasting", ["Games", "Food"], "Taste teas bought during the day and guess flavor, strength, and price.", ["Fun after factory", "Indoor", "Low noise"])
        ])
      ]),
      day("Tue", "23 Jun", "Slow Kotagiri and local life", "A quieter local day with history, food, and optional walking.", [
        slot("Morning", "kotagiri-23-morning", "Stay close to base.", [
          opt("kotagiri-23-morning-a", "Tea estate walk and meditation", ["Nature", "Meditation"], "A gentle tea-side walk near the villa followed by 15 minutes of silence outdoors.", ["Ask host for safe route", "Beginner", "Best before breakfast"]),
          opt("kotagiri-23-morning-b", "John Sullivan Memorial", ["History", "Museum"], "Nilgiris history without a noisy tourist circuit.", ["Confirm opening", "Short drive", "Good for parents"]),
          opt("kotagiri-23-morning-c", "Sleep-in brunch", ["Rest", "Holiday"], "No apology needed: let the trip breathe and make this a balcony morning.", ["Best if rain is steady", "Baby-led", "Zero travel"])
        ]),
        slot("Afternoon", "kotagiri-23-afternoon", "Local experiences and villa time.", [
          opt("kotagiri-23-afternoon-a", "Local cooking or snack session", ["Food", "Local"], "Ask the villa team for a small cooking demo: tea-time snacks, local vegetables, chutneys, or dessert.", ["Arrange ahead", "Great intergenerational activity", "Indoor fallback"]),
          opt("kotagiri-23-afternoon-b", "Kotagiri shopping loop", ["Shopping", "Local"], "A dedicated moms' shopping window for tea, spices, oils, fruit, bakery items, and gifts.", ["60 to 90 minutes", "Keep it flexible", "Good if weather turns"]),
          opt("kotagiri-23-afternoon-c", "Catherine/Elk Falls drive", ["Nature", "Flexible"], "A light scenic drive only if roads and visibility are good.", ["Avoid slippery paths", "Driver's call matters", "Keep baby carrier ready"])
        ]),
        slot("Night", "kotagiri-23-night", "Villa games night.", [
          opt("kotagiri-23-night-a", "Itinerary auction", ["Games", "Voting"], "Everyone gets 100 imaginary points to bid on 24 June choices.", ["Works with polls", "Lively but seated", "No prep"]),
          opt("kotagiri-23-night-b", "Family playlist dinner", ["Food", "Music"], "Each adult chooses one dinner song and one memory attached to it.", ["Low noise volume", "Warm family night", "Easy"]),
          opt("kotagiri-23-night-c", "Guided yoga nidra", ["Meditation", "Rest"], "A 20-minute wind-down session in the living room or balcony.", ["Great before travel day", "Baby can be nearby", "No gear"])
        ])
      ]),
      day("Wed", "24 Jun", "Coonoor side trip 2 or boating option", "Use the last full day for one priority, not a checklist.", [
        slot("Morning", "kotagiri-24-morning", "Choose between heritage rail, boating, or staying local.", [
          opt("kotagiri-24-morning-a", "Toy train short ride", ["History", "Rail"], "Drive to Coonoor and take a short Nilgiri Mountain Railway ride toward Ooty if tickets work out.", ["Book ahead on IRCTC", "Train timings can change", "Heritage experience"]),
          opt("kotagiri-24-morning-b", "Boating priority: Ooty Lake", ["Boating", "Family"], "If boating matters most, pair the train/drive with Ooty Lake boating, accepting that it may be busier.", ["Expect crowds", "Keep it short", "Weather dependent"]),
          opt("kotagiri-24-morning-c", "Stay local: Longwood or tea walk", ["Nature", "Slow"], "Skip Coonoor/Ooty and repeat the calmest nature experience from the trip.", ["Best for relaxation", "No long drive", "Baby-friendly"])
        ]),
        slot("Afternoon", "kotagiri-24-afternoon", "Finish strong but not exhausted.", [
          opt("kotagiri-24-afternoon-a", "Wellington MRC museum attempt", ["History", "Museum"], "If access is allowed, visit the Madras Regimental Centre museum or do a respectful outer-view halt.", ["Carry ID", "Access can change", "Photography restricted"]),
          opt("kotagiri-24-afternoon-b", "Final tea/chocolate shopping", ["Shopping", "Gifts"], "Use Coonoor or Kotagiri for final tea, chocolate, oils, and snacks to take home.", ["Good last-day errand", "Moms' friendly", "Keep luggage space"]),
          opt("kotagiri-24-afternoon-c", "Return early and pack slowly", ["Rest", "Practical"], "Get back before evening, pack, settle bills, and avoid a rushed departure.", ["Best with baby", "Protects 25 June", "Low stress"])
        ]),
        slot("Night", "kotagiri-24-night", "Final night.", [
          opt("kotagiri-24-night-a", "Farewell dinner at villa", ["Food", "Family"], "A special but relaxed last dinner with local tea/chocolate dessert.", ["Arrange ahead", "No driving", "Best default"]),
          opt("kotagiri-24-night-b", "Awards and photo slideshow", ["Games", "Memories"], "Hand out family awards and watch the best photos on TV or laptop.", ["Low prep", "Sweet ending", "Indoor"]),
          opt("kotagiri-24-night-c", "Early sleep pact", ["Rest", "Travel"], "Everyone agrees to wind down early for the Coimbatore drive.", ["Very sensible", "Baby-friendly", "No shame"])
        ])
      ]),
      day("Thu", "25 Jun", "Early return to Coimbatore", "Leave early; no sightseeing pressure.", [
        slot("Morning", "kotagiri-25-morning", "Departure style.", [
          opt("kotagiri-25-morning-a", "Direct early departure", ["Travel", "Practical"], "Leave by 6:00 AM with packed breakfast and one planned stop after the ghat.", ["Best for flights/trains", "Avoid traffic", "Low stress"]),
          opt("kotagiri-25-morning-b", "Breakfast stop after descent", ["Food", "Travel"], "Carry snacks for the baby and stop properly once the ghat section is done.", ["Safer than hill stop", "Good for elders", "Adds buffer"]),
          opt("kotagiri-25-morning-c", "Slow checkout if no rush", ["Rest", "Flexible"], "Only choose this if your Coimbatore schedule is late and weather is stable.", ["Avoid if flights are early", "Confirm checkout", "Rain buffer needed"])
        ])
      ])
    ]
  },
  coonoor: {
    title: "Coonoor Base",
    summary: [
      ["Best For", "Easier access to Sim's Park, tea factory, toy train, Wellington, and viewpoints."],
      ["Kotagiri Limit", "Only 2 Kotagiri-side days: 21 June and 23 June."],
      ["Food Mood", "More cafe choice, Bedford browsing, tea/chocolate shopping, villa meals."],
      ["Pace", "Coonoor local days are easier; Kotagiri days start early and return early."]
    ],
    days: [
      day("Sat", "20 Jun", "Arrival in Coonoor", "Make the drive the main event and keep the afternoon light.", [
        slot("Morning", "coonoor-20-morning", "Coimbatore to Coonoor with one good stop.", [
          opt("coonoor-20-morning-a", "Direct drive to Coonoor", ["Travel", "Practical"], "Leave Coimbatore early via Mettupalayam and Burliar/Coonoor ghat.", ["Approx. 2.5 to 3.5 hours", "Start by 6:30 AM", "Keep e-pass ready"]),
          opt("coonoor-20-morning-b", "Breakfast before the ghat", ["Food", "Baby rhythm"], "Stop before the climb so the baby and parents are comfortable for the hill section.", ["Adds 45 minutes", "Good default", "Avoid heavy breakfast"]),
          opt("coonoor-20-morning-c", "Train station arrival peek", ["History", "Rail"], "If timing aligns, make a tiny halt near Coonoor station for the heritage rail atmosphere.", ["Do not overpack arrival", "Parking may be tricky", "Short stop only"])
        ]),
        slot("Afternoon", "coonoor-20-afternoon", "Settle and choose a very easy outing.", [
          opt("coonoor-20-afternoon-a", "Villa lunch and nap reset", ["Rest", "Baby rhythm"], "Unpack, eat, nap, and let everyone arrive properly.", ["Best default", "No noise", "Works in rain"]),
          opt("coonoor-20-afternoon-b", "Sim's Park first look", ["Garden", "Gentle"], "A short botanical garden walk if everyone is fresh.", ["Confirm closing time", "Keep it under 90 minutes", "Easy paths"]),
          opt("coonoor-20-afternoon-c", "Bedford browsing", ["Shopping", "Local"], "Pick up tea, snacks, bread, fruit, and chocolates for the villa.", ["Moms' friendly", "Easy first outing", "Crowds possible"])
        ]),
        slot("Night", "coonoor-20-night", "First night comfort.", [
          opt("coonoor-20-night-a", "Early dinner and balcony meditation", ["Meditation", "Rest"], "A short open-air sit, simple dinner, and early sleep.", ["Best after travel", "Baby-friendly", "Low noise"]),
          opt("coonoor-20-night-b", "Local comfort dinner", ["Food", "Family"], "Ask for a villa meal or nearby simple dinner rather than a long restaurant evening.", ["Avoid night driving", "Low effort", "Good for elders"]),
          opt("coonoor-20-night-c", "Family cards and tea", ["Games", "Indoor"], "Keep it playful but seated with cards, tea, and next-day voting.", ["No prep", "Works in rain", "Low energy"])
        ])
      ]),
      day("Sun", "21 Jun", "Kotagiri side trip 1", "Use Sunday for an early Kotagiri nature day.", [
        slot("Morning", "coonoor-21-morning", "Pick one Kotagiri nature anchor.", [
          opt("coonoor-21-morning-a", "Kodanad View Point", ["Nature", "Views"], "Leave early for a wide valley-view morning and return before afternoon mist.", ["45 to 60 min each way", "Minimal walking", "Clear-weather priority"]),
          opt("coonoor-21-morning-b", "Longwood Shola trail", ["Hike", "Forest"], "An easy guided shola walk that suits your nature and meditation preferences.", ["Book/confirm access", "Easy 3 km", "Shoes with grip"]),
          opt("coonoor-21-morning-c", "Catherine Falls viewpoint", ["Waterfall", "Flexible"], "A scenic waterfall-view option if roads and visibility are good.", ["Avoid risky wet trails", "Driver's call", "Morning best"])
        ]),
        slot("Afternoon", "coonoor-21-afternoon", "Return with a light stop.", [
          opt("coonoor-21-afternoon-a", "Kotagiri cafe and tea shopping", ["Food", "Shopping"], "Lunch or snacks in Kotagiri plus tea/chocolate shopping before returning.", ["Moms' friendly", "Do before tiredness", "Keep it short"]),
          opt("coonoor-21-afternoon-b", "Return to Coonoor for nap", ["Rest", "Smart pace"], "Head back after the morning anchor and protect the rest of the day.", ["Best with baby", "Avoid Sunday crowds", "Low stress"]),
          opt("coonoor-21-afternoon-c", "John Sullivan Memorial", ["History", "Museum"], "Add a compact history stop if the group wants context and the baby is settled.", ["Confirm opening", "Short visit", "Good rain fallback"])
        ]),
        slot("Night", "coonoor-21-night", "Gentle villa night.", [
          opt("coonoor-21-night-a", "Photo voting", ["Games", "Family"], "Everyone chooses two photos from the day; vote for the family album cover.", ["Phone-based", "Easy", "Memorable"]),
          opt("coonoor-21-night-b", "Tea tasting scorecard", ["Food", "Games"], "Taste tea bought in Kotagiri and rate it like a tiny judging panel.", ["Indoor", "Low noise", "Fun for parents"]),
          opt("coonoor-21-night-c", "Quiet reading and early sleep", ["Rest", "Calm"], "Let Sunday end softly after the cross-town drive.", ["Best recovery", "Baby-friendly", "No prep"])
        ])
      ]),
      day("Mon", "22 Jun", "Coonoor gardens, tea, and viewpoints", "A local day with no long cross-drive.", [
        slot("Morning", "coonoor-22-morning", "Choose one classic Coonoor start.", [
          opt("coonoor-22-morning-a", "Sim's Park slow walk", ["Garden", "Baby-friendly"], "A calm garden morning with shade, flowers, and easy family pacing.", ["Start early", "Confirm timing", "Good photos"]),
          opt("coonoor-22-morning-b", "Highfield Tea Factory", ["Factory", "Shopping"], "Tea manufacturing, tasting, eucalyptus oil, chocolates, and gifts.", ["Factory access can vary", "Rain-friendly", "Good local experience"]),
          opt("coonoor-22-morning-c", "Lamb's Rock viewpoint", ["Views", "Short walk"], "A short viewpoint outing before mist builds.", ["Grip shoes", "Skip in heavy rain", "Pair with tea stop"])
        ]),
        slot("Afternoon", "coonoor-22-afternoon", "Add one nearby layer or rest.", [
          opt("coonoor-22-afternoon-a", "Dolphin's Nose if clear", ["Views", "Nature"], "Only worth it if visibility is good. Otherwise swap for lunch and rest.", ["Narrow road", "Clear-weather priority", "Avoid rushing"]),
          opt("coonoor-22-afternoon-b", "Bedford lunch and shopping", ["Food", "Shopping"], "Cafe lunch and local browsing for tea, chocolate, oils, and bakery items.", ["Moms' friendly", "Easy logistics", "Good fallback"]),
          opt("coonoor-22-afternoon-c", "Villa rest block", ["Rest", "Slow"], "Nap, read, feed the baby, and do nothing for a full afternoon.", ["Strong default", "No travel", "Holiday mode"])
        ]),
        slot("Night", "coonoor-22-night", "Coonoor comfort night.", [
          opt("coonoor-22-night-a", "Monsoon Pictionary", ["Games", "Indoor"], "Draw trip clues: tea factory, toy train, Kodanad, baby carrier, and family jokes.", ["Paper and pens", "Works in rain", "Light energy"]),
          opt("coonoor-22-night-b", "Open-air meditation", ["Meditation", "Calm"], "A 15 minute silent sit outside followed by simple dinner.", ["Low noise", "Good reset", "No prep"]),
          opt("coonoor-22-night-c", "Local dessert night", ["Food", "Family"], "Try local chocolates, bakery items, or cake after dinner.", ["Easy", "Good for all ages", "Indoor"])
        ])
      ]),
      day("Tue", "23 Jun", "Kotagiri side trip 2", "Second and final Kotagiri-side day.", [
        slot("Morning", "coonoor-23-morning", "Choose a quieter local-history or hike morning.", [
          opt("coonoor-23-morning-a", "John Sullivan Memorial", ["History", "Museum"], "A Nilgiris history stop without making the day touristy.", ["Confirm opening", "Short visit", "Good for parents"]),
          opt("coonoor-23-morning-b", "Tea estate walk near Kotagiri", ["Nature", "Meditation"], "Ask the host/driver for a safe tea-side walking stretch and do a quiet outdoor sit.", ["Beginner", "Avoid private estate trespass", "Best early"]),
          opt("coonoor-23-morning-c", "Longwood Shola repeat/backup", ["Hike", "Forest"], "Choose this if 21 June got rained out or if the family votes for forest over sightseeing.", ["Book/confirm access", "Easy 3 km", "Rain gear"])
        ]),
        slot("Afternoon", "coonoor-23-afternoon", "A slow finish to the Kotagiri side.", [
          opt("coonoor-23-afternoon-a", "Kotagiri shopping and snacks", ["Shopping", "Food"], "Final Kotagiri shopping window for tea, snacks, fruit, oils, and gifts.", ["Moms' pick", "60 to 90 minutes", "Cash useful"]),
          opt("coonoor-23-afternoon-b", "Catherine Falls scenic attempt", ["Waterfall", "Nature"], "Try only if the weather is clear and roads are comfortable.", ["No slippery heroics", "Driver's call", "Flexible"]),
          opt("coonoor-23-afternoon-c", "Return early to Coonoor", ["Rest", "Smart pace"], "Come back for naps and avoid making this a long cross-town day.", ["Best with baby", "Low stress", "Protects 24 June"])
        ]),
        slot("Night", "coonoor-23-night", "Villa games night.", [
          opt("coonoor-23-night-a", "Itinerary auction", ["Games", "Voting"], "Use imaginary points to decide the last full day priorities.", ["Fun debate", "Works with polls", "No prep"]),
          opt("coonoor-23-night-b", "Family playlist dinner", ["Food", "Music"], "Each adult chooses one song and one memory.", ["Keep volume low", "Warm", "Easy"]),
          opt("coonoor-23-night-c", "Yoga nidra wind-down", ["Meditation", "Rest"], "A guided 20 minute wind-down before the last full day.", ["Indoor or balcony", "Baby nearby", "Low energy"])
        ])
      ]),
      day("Wed", "24 Jun", "Rail, boating, or quiet Coonoor", "Last full day: choose one hero experience.", [
        slot("Morning", "coonoor-24-morning", "Pick the final-day mood.", [
          opt("coonoor-24-morning-a", "Nilgiri Mountain Railway short ride", ["History", "Rail"], "Take a short Coonoor to Ooty heritage train ride if tickets and timings align.", ["Book ahead on IRCTC", "Timings can change", "Great for family"]),
          opt("coonoor-24-morning-b", "Boating priority: Ooty Lake", ["Boating", "Family"], "Drive or train toward Ooty and do a short boating session, accepting crowds.", ["Busy but classic", "Weather dependent", "Keep it short"]),
          opt("coonoor-24-morning-c", "Quiet Coonoor redo", ["Slow", "Nature"], "Repeat the winning local activity: Sim's Park, tea factory, or a tea estate walk.", ["Most relaxed", "No long day", "Good if rain"])
        ]),
        slot("Afternoon", "coonoor-24-afternoon", "History, shopping, or packing.", [
          opt("coonoor-24-afternoon-a", "Wellington MRC museum attempt", ["History", "Museum"], "Try the Madras Regimental Centre museum or a respectful outer view if access is limited.", ["Carry ID", "Photography restricted", "Access can change"]),
          opt("coonoor-24-afternoon-b", "Final Bedford shopping", ["Shopping", "Gifts"], "Tea, chocolate, bakery, oils, and snacks for home.", ["Moms' friendly", "Easy", "Leave luggage room"]),
          opt("coonoor-24-afternoon-c", "Pack slowly at villa", ["Rest", "Practical"], "Return early, pack, settle bills, and make departure calm.", ["Best with baby", "Low stress", "Sensible"])
        ]),
        slot("Night", "coonoor-24-night", "Final night.", [
          opt("coonoor-24-night-a", "Farewell villa dinner", ["Food", "Family"], "A special last dinner without needing another drive.", ["Arrange ahead", "No night travel", "Best default"]),
          opt("coonoor-24-night-b", "Awards and slideshow", ["Games", "Memories"], "Family awards and the best trip photos on TV or laptop.", ["Low prep", "Sweet ending", "Indoor"]),
          opt("coonoor-24-night-c", "Early sleep pact", ["Rest", "Travel"], "End early for the Coimbatore drive.", ["Practical", "Baby-friendly", "No guilt"])
        ])
      ]),
      day("Thu", "25 Jun", "Early return to Coimbatore", "Leave early; keep breakfast practical.", [
        slot("Morning", "coonoor-25-morning", "Departure style.", [
          opt("coonoor-25-morning-a", "Direct early departure", ["Travel", "Practical"], "Leave by 6:00 AM with packed breakfast and one planned stop after the ghat.", ["Avoid traffic", "Best for flights/trains", "Low stress"]),
          opt("coonoor-25-morning-b", "Breakfast after descent", ["Food", "Travel"], "Do snacks in the car and a proper breakfast after descending toward Mettupalayam.", ["Safer stop", "Good with baby", "Adds buffer"]),
          opt("coonoor-25-morning-c", "Slow checkout if no rush", ["Rest", "Flexible"], "Only choose this if your Coimbatore schedule is late and rain risk is low.", ["Confirm checkout", "Avoid if flights are early", "Keep route buffer"])
        ])
      ])
    ]
  }
};

let activePlan = "kotagiri";
let state = { profiles: [], votes: {}, comments: {} };
let activeProfileId = window.localStorage.getItem("activeProfileId") || "";

function day(label, date, title, note, slots) {
  return { label, date, title, note, slots };
}

function slot(title, id, note, options) {
  return { title, id, note, options };
}

function opt(id, title, tags, description, meta) {
  return { id, title, tags, description, meta };
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

async function api(path, payload) {
  const response = await fetch(path, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error || "Something went wrong");
  return body;
}

async function loadState() {
  const response = await fetch("/api/state");
  state = await response.json();
  if (!state.profiles.some(profile => profile.id === activeProfileId)) {
    activeProfileId = state.profiles[0]?.id || "";
  }
  renderAll();
}

function connectEvents() {
  const stream = new EventSource("/api/events");
  stream.onmessage = event => {
    state = JSON.parse(event.data);
    if (!state.profiles.some(profile => profile.id === activeProfileId)) {
      activeProfileId = state.profiles[0]?.id || "";
    }
    renderAll();
  };
}

function profileName(id) {
  return state.profiles.find(profile => profile.id === id)?.name || "Family";
}

function getSlotVotes(slotId) {
  return state.votes[slotId] || {};
}

function votersFor(slotId, optionId) {
  return Object.entries(getSlotVotes(slotId))
    .filter(([, votedOptionId]) => votedOptionId === optionId)
    .map(([profileId]) => profileId);
}

function renderProfiles() {
  const select = document.querySelector("#activeProfile");
  const list = document.querySelector("#profileList");
  select.innerHTML = "";
  list.innerHTML = "";

  if (!state.profiles.length) {
    const option = document.createElement("option");
    option.textContent = "Add a family member";
    option.value = "";
    select.append(option);
    list.append(el("p", "note-list", "No one added yet."));
    return;
  }

  for (const profile of state.profiles) {
    const option = document.createElement("option");
    option.value = profile.id;
    option.textContent = `${profile.name}, ${profile.age}`;
    option.selected = profile.id === activeProfileId;
    select.append(option);

    const pill = el("div", "profile-pill");
    pill.append(document.createTextNode(profile.name));
    pill.append(el("span", "", `${profile.age} yrs`));
    list.append(pill);
  }
}

function renderGames() {
  const list = document.querySelector("#gamesList");
  list.innerHTML = "";
  games.forEach(game => list.append(el("div", "game-item", game)));
}

function renderSources() {
  const list = document.querySelector("#sourcesList");
  list.innerHTML = "";
  for (const source of sources) {
    const card = el("div", "source-card");
    const link = el("a", "", source.title);
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    card.append(link);
    card.append(el("span", "", source.note));
    list.append(card);
  }
}

function renderPlan() {
  const plan = itineraries[activePlan];
  document.querySelector("#planTitle").textContent = plan.title;

  document.querySelectorAll(".base-tab").forEach(button => {
    button.classList.toggle("active", button.dataset.plan === activePlan);
  });

  renderBasePoll();

  const summary = document.querySelector("#planSummary");
  summary.innerHTML = "";
  plan.summary.forEach(([label, text]) => {
    const tile = el("div", "summary-tile");
    tile.append(el("strong", "", label));
    tile.append(el("span", "", text));
    summary.append(tile);
  });

  const days = document.querySelector("#days");
  days.innerHTML = "";
  const template = document.querySelector("#dayTemplate");

  plan.days.forEach((dayItem, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const head = node.querySelector(".day-card__head");
    head.querySelector("span").textContent = `${dayItem.label} ${dayItem.date}`;
    head.querySelector("strong").textContent = dayItem.title;
    head.querySelector("small").textContent = dayItem.note;

    const body = node.querySelector(".day-card__body");
    dayItem.slots.forEach(slotItem => body.append(renderSlot(slotItem)));

    if (index > 0) {
      body.hidden = true;
    }

    head.addEventListener("click", () => {
      body.hidden = !body.hidden;
    });

    days.append(node);
  });
}

function renderBasePoll() {
  const poll = document.querySelector("#basePoll");
  poll.innerHTML = "";
  [
    {
      id: "base-kotagiri",
      plan: "kotagiri",
      title: "Vote: Stay in Kotagiri",
      text: "Quieter base, closer to Longwood Shola, Kodanad, tea walks, and slower villa days."
    },
    {
      id: "base-coonoor",
      plan: "coonoor",
      title: "Vote: Stay in Coonoor",
      text: "More convenient for Sim's Park, tea factories, toy train, Wellington, cafes, and shopping."
    }
  ].forEach(choice => {
    const card = el("article", "base-choice");
    card.classList.toggle("active", activePlan === choice.plan);
    card.append(el("h3", "", choice.title));
    card.append(el("p", "", choice.text));
    card.append(renderVoteArea({ id: "base-choice" }, { id: choice.id }));
    poll.append(card);
  });
}

function renderSlot(slotItem) {
  const section = el("section", "slot");
  const head = el("div", "slot__head");
  const titleWrap = el("div");
  titleWrap.append(el("h3", "", slotItem.title));
  titleWrap.append(el("p", "", slotItem.note));
  head.append(titleWrap);
  section.append(head);

  const grid = el("div", "option-grid");
  slotItem.options.forEach(option => {
    grid.append(renderOption(slotItem, option));
  });
  section.append(grid);
  return section;
}

function renderOption(slotItem, option) {
  const card = el("article", "option-card");
  const currentVote = getSlotVotes(slotItem.id)[activeProfileId];
  card.classList.toggle("selected", currentVote === option.id);

  const top = el("div", "option-card__top");
  const heading = el("h4", "", option.title);
  top.append(heading);
  card.append(top);

  const tagRow = el("div", "tag-row");
  option.tags.forEach(tag => tagRow.append(el("span", "chip", tag)));
  card.append(tagRow);

  card.append(el("p", "", option.description));

  const meta = el("div", "meta-list");
  option.meta.forEach(item => meta.append(el("span", "", item)));
  card.append(meta);

  card.append(renderVoteArea(slotItem, option));
  card.append(renderComments(option));
  return card;
}

function renderVoteArea(slotItem, option) {
  const area = el("div", "vote-area");
  const slotVotes = getSlotVotes(slotItem.id);
  const total = Object.keys(slotVotes).length;
  const optionVoters = votersFor(slotItem.id, option.id);
  const percent = total ? Math.round((optionVoters.length / total) * 100) : 0;

  const button = el("button", "vote-btn", "Choose this");
  button.type = "button";
  button.addEventListener("click", async () => {
    if (!activeProfileId) {
      alert("Add/select a family member first.");
      return;
    }
    try {
      state = await api("/api/vote", {
        profileId: activeProfileId,
        slotId: slotItem.id,
        optionId: option.id
      });
      renderAll();
    } catch (error) {
      alert(error.message);
    }
  });

  const line = el("div", "vote-line");
  const bar = el("div", "bar");
  const fill = el("span");
  fill.style.width = `${percent}%`;
  bar.append(fill);
  line.append(bar);
  line.append(el("strong", "", `${optionVoters.length}/${state.profiles.length || 6}`));

  const voters = el("div", "voters", optionVoters.length ? optionVoters.map(profileName).join(", ") : "No votes yet");
  area.append(button, line, voters);
  return area;
}

function renderComments(option) {
  const wrap = el("div", "comments");
  const form = el("form", "comment-form");
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Add a comment";
  input.maxLength = 500;
  const button = el("button", "comment-btn", "Post");
  button.type = "submit";
  form.append(input, button);

  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (!activeProfileId) {
      alert("Add/select a family member first.");
      return;
    }
    try {
      state = await api("/api/comment", {
        profileId: activeProfileId,
        optionId: option.id,
        text: input.value
      });
      input.value = "";
      renderAll();
    } catch (error) {
      alert(error.message);
    }
  });

  wrap.append(form);
  (state.comments[option.id] || []).slice(-3).forEach(comment => {
    const item = el("div", "comment");
    item.innerHTML = `<strong>${escapeHtml(profileName(comment.profileId))}:</strong> ${escapeHtml(comment.text)}`;
    wrap.append(item);
  });
  return wrap;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderAll() {
  renderProfiles();
  renderPlan();
}

document.querySelector("#profileForm").addEventListener("submit", async event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  try {
    state = await api("/api/profile", {
      name: form.get("name"),
      age: form.get("age")
    });
    activeProfileId = state.profiles.at(-1).id;
    window.localStorage.setItem("activeProfileId", activeProfileId);
    event.currentTarget.reset();
    renderAll();
  } catch (error) {
    alert(error.message);
  }
});

document.querySelector("#activeProfile").addEventListener("change", event => {
  activeProfileId = event.target.value;
  window.localStorage.setItem("activeProfileId", activeProfileId);
  renderAll();
});

document.querySelectorAll(".base-tab").forEach(button => {
  button.addEventListener("click", () => {
    activePlan = button.dataset.plan;
    renderPlan();
  });
});

renderGames();
renderSources();
loadState();
connectEvents();
