# Hispanosphere — Roadmap

## Status

| Phase | Description | Status |
|-------|-------------|--------|
| Phase 1 | Demo Ready | ✅ Complete |
| Phase 2 | Polish for Portfolio | ✅ Complete |
| Phase 3 | Future Features | 🗓 Planned |

---

## Phase 3 — Future Features

### 3.1 — Multilingual Support (EN / ES)

Two-layer implementation:

**Layer 1 — Static UI text**
- Add `LanguageContext` with a toggle button in the Navbar
- Create `en.js` and `es.js` translation objects
- Replace all hardcoded UI strings (navbar, buttons, headings, badges, error messages) with translation lookups

**Layer 2 — Country content**
- Refactor `CountrySchema` to store content per language:
  ```js
  music: {
    en: { title, content, songTitle, artist, url },
    es: { title, content, songTitle, artist, url }
  }
  ```
- Write Spanish translations for all 26 countries × 6 subtopics (156 content blocks)
- Migrate seed data and re-seed
- API returns full document; frontend selects language client-side

Consider extending to French (FR) as a third language using the same architecture.

---

### 3.2 — User Authentication

- JWT-based auth (register / login / logout)
- Protected routes for authenticated features
- Store user data in MongoDB (username, email, hashed password)
- Save favorite countries
- Track which countries have been explored

---

### 3.3 — AI Tour Guide "Sfera"

- Conversational AI agent embedded on each country page
- Powered by Claude API (claude-sonnet model)
- Answers questions about the country's culture, history, and language
- Aware of which country page the user is on (system prompt injection)
- Streaming responses for a natural chat feel

---

### 3.4 — Passport / Progress Tracker

- Visual "passport" UI showing all 26 countries
- Users mark countries as visited/explored
- Unlock stamps or badges per country
- Progress bar showing % of Hispanosphere explored

---

### 3.5 — Bloom's Taxonomy Activities

- Tiered learning activities per country, organized by cognitive level:
  - **Remember** — flashcards, vocabulary matching
  - **Understand** — short answer, summarize a cultural fact
  - **Apply** — translate a slang phrase into context
  - **Analyze** — compare two countries' histories
  - **Evaluate** — opinion prompts with rubric
  - **Create** — write a short cultural profile
- AI grader for short/long answer responses

---

### 3.6 — Language Proficiency Leveling

- ACTFL framework integration (Novice → Intermediate → Advanced → Superior)
- Activities tagged by proficiency level
- Users select or are assessed for their level on signup
- Content and activity difficulty adapts accordingly

---

### 3.7 — Admin Dashboard

- Protected `/admin` route
- Add / edit / delete country content without touching the database directly
- Manage subtopic content per language
- Preview changes before publishing

---

### 3.8 — User-Submitted Cultural Content

- Users can submit cultural facts, slang, or corrections
- Submission queue for admin review before publishing
- Attribution shown on country pages

---

### 3.9 — Paywall / Premium Tier

- Free tier: map, country list, basic cultural overview
- Premium tier: Bloom's activities, AI Tour Guide, progress tracker
- Stripe integration for subscriptions
- JWT claims to gate premium routes

---

## Technical Debt to Address Before Phase 3

- Replace hardcoded `http://localhost:8080` API URLs with an environment variable (`VITE_API_URL`)
- Add ESLint rules and pre-commit hooks
- Write unit tests for API routes (Jest + Supertest)
- Write component tests for key UI flows (Vitest + React Testing Library)
- Set up CI/CD pipeline (GitHub Actions)
- Configure production deployment (e.g. Render for backend, Vercel for frontend)
