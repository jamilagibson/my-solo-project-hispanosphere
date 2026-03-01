# Hispanosphere — CLAUDE.md

> Engineering reference for Claude Code. Last updated: March 2026.

---

## Project Overview

**Hispanosphere** is a full-stack educational web app for exploring the culture, history, music,
food, slang, and fun facts of 26 Spanish-speaking countries and territories.

**Author:** Jamila Gibson
**Type:** Solo project — designed, built, and shipped independently
**Status:**
- Phase 1 (Demo Ready) ✅
- Phase 2 (Portfolio Polish) ✅
- Phase 3 (Future Features) 🗓 Planned — see ROADMAP.md

---

## Tech Stack

### Frontend

| Tool | Version | Notes |
|------|---------|-------|
| React | 19 | Latest stable |
| Vite | 6 | Build tool & dev server |
| React Router | v7 | SPA routing |
| Tailwind CSS | v4 | `@tailwindcss/vite` plugin, no config file |
| react-leaflet | v5 | Interactive map component layer |
| Leaflet | 1.9.4 | Map rendering engine |
| Axios | 1.8 | HTTP client |

### Backend

| Tool | Version | Notes |
|------|---------|-------|
| Node.js | LTS | Runtime |
| Express | 5 | Web framework |
| Mongoose | 8 | MongoDB ODM |
| MongoDB Atlas | Cloud | Database |
| dotenv | 16 | Environment variable management |
| cors | 2.8 | CORS middleware |
| nodemon | 3 | Dev auto-restart |

---

## Architecture

### Directory Structure

```
hispanosphere/
├── client/                    # React frontend (Vite)
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx         # Global navigation bar
│       │   ├── HomePage.jsx       # Landing page with CTA buttons
│       │   ├── HispanosphereMap.jsx  # Leaflet map with markers + popups
│       │   ├── CountryList.jsx    # Grid list with map/list toggle
│       │   ├── ExploreCountry.jsx # Cultural deep-dive page per country
│       │   └── Spinner.jsx        # Reusable loading spinner
│       ├── App.jsx                # Router + Navbar wrapper
│       ├── App.css                # Global layout overrides
│       └── index.css              # Base styles + Tailwind import
└── server/                    # Express backend
    ├── models/
    │   └── Country.js             # Mongoose schema
    ├── routes/
    │   └── countryRoutes.js       # GET / and GET /:code
    ├── seeders/
    │   └── seedAllCountries.js    # Seeds all 26 countries
    └── server.js                  # Express entry point
```

### Frontend Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Landing page with bilingual welcome and CTAs |
| `/map` | HispanosphereMap | Interactive Leaflet map of all 26 countries |
| `/countries` | CountryList | Grid of all countries with list/map toggle |
| `/explore/:code` | ExploreCountry | Cultural deep-dive for a single country |

### Backend API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/countries` | Returns all 26 countries |
| GET | `/api/countries/:code` | Returns one country by ISO code (uppercase) |

### MongoDB Schema

```js
// SubtopicSchema (embedded document)
{
  title: String,
  content: String,
  songTitle: String,
  artist: String,
  url: String,
  list: [String],
}

// CountrySchema
{
  name: String (required),
  code: String (required),        // ISO 2-letter, uppercase
  lat: Number (required),         // Map marker latitude
  lng: Number (required),         // Map marker longitude
  flag: String,                   // Emoji flag character
  official: Boolean,              // true = official Spanish-speaking country
  subtopics: {
    funFacts: SubtopicSchema,
    popCulture: SubtopicSchema,
    music: SubtopicSchema,
    food: SubtopicSchema,
    slang: SubtopicSchema,
    history: SubtopicSchema,
  }
}
```

---

## Commands

### Start Development

```bash
# Backend — from /server
npm run dev       # nodemon server.js, runs on port 8080

# Frontend — from /client
npm run dev       # Vite dev server, runs on port 5173
```

### Seed the Database

```bash
# From /server
node seeders/seedAllCountries.js
```

> ⚠️ The seed script runs `Country.deleteMany({})` first. It wipes and replaces all country data.

### Build for Production

```bash
# From /client
npm run build
```

---

## Engineering Decision Log

See DECISIONS.md for full ADR-formatted records. Key decisions summarized:

1. **Mongoose strict mode** — `lat`, `lng`, `flag`, and `official` must be declared in `CountrySchema`
   or Mongoose silently drops them on save. This caused map markers to render at `undefined, undefined`
   until the schema was corrected.

2. **react-leaflet v5 MapContainer** — Requires `center` + `zoom` **or** `bounds`, never both.
   Always use `center` + `zoom` for unconditional rendering to avoid blank map bugs.

3. **Leaflet popup keyboard focus** — The Tab key is intercepted by the Leaflet map container.
   Popup links require a double `requestAnimationFrame` after `popupopen` to move focus after
   Leaflet's own internal focus management runs (which targets the close button).

4. **popupclose focus return** — Leaflet does not return focus to the source marker on popup close.
   Use `e.popup._source?.getElement()` in a `popupclose` handler to manually restore focus.

5. **World map no-repeat** — Set `maxBounds={[[-90,-180],[90,180]]}` and `maxBoundsViscosity={1.0}`
   on `MapContainer`; set `noWrap={true}` on `TileLayer`.

6. **Tailwind v4 hybrid** — Uses `@tailwindcss/vite` plugin (no `tailwind.config.js`). Brand colors
   (`#ff5f5f`, `#ffbc42`, `#1e2a47`, `#162033`) are hardcoded as inline styles. Tailwind utilities
   used for spacing, animation (`animate-spin`), and typography.

7. **Body layout** — Removed `display: flex; place-items: center` from `body` in `index.css`.
   That Vite scaffold default was collapsing the full-viewport map layout to a centered dot.

---

## Notes for Claude

- API base URL is hardcoded as `http://localhost:8080` in all components. See ROADMAP.md Technical
  Debt section — extract to `VITE_API_URL` env var before production deployment.
- Seed files live in `server/seeders/`. Always run from the `server/` directory.
- The `server/.env` file is gitignored. It contains `MONGODB_URI` and `PORT`.
- Do **not** add "Generated with Claude Code" footers to commits or PR descriptions.
- User workflow: one feature branch off `main` per task → PR into `main` → merge → new branch.
  Always pull main before branching.
- See ROADMAP.md for Phase 3 planned features.
- See DECISIONS.md for full architectural decision records.
- See ACCESSIBILITY.md for WCAG 2.1 AA compliance log.
- See PERSONAS.md for target user personas.
