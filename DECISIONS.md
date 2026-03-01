# Hispanosphere — Architectural Decision Log

> Structured records of significant engineering decisions made during development.
> Format inspired by Architecture Decision Records (ADRs).

---

## Decision 1 — MongoDB Atlas + Mongoose for Data Persistence

**Date:** 2025
**Status:** Accepted

**Decision:**
Use MongoDB Atlas (cloud-hosted) as the database, with Mongoose 8 as the ODM.

**Context:**
The app stores semi-structured country data with nested subtopics. Each country has the same
six subtopic slots, but individual fields within a subtopic vary (e.g., music has `songTitle`
and `artist`; funFacts uses a `list` array instead). A document database is a natural fit.

**Alternatives Considered:**

| Option | Reason Not Chosen |
|--------|-------------------|
| PostgreSQL + Sequelize | Relational model adds overhead for nested, variable-shape subtopics |
| SQLite | No cloud hosting; not appropriate for Atlas-style deployment |
| Firebase Firestore | Vendor lock-in; less control over schema; pricing at scale |

**Rationale:**
MongoDB handles nested document structures naturally. Mongoose adds schema validation, which
enforces required fields and catches data integrity bugs during development.

**Tradeoffs Accepted:**
- Mongoose strict mode silently drops fields not declared in the schema (see Decision 2)
- Schema migrations require manual re-seeding for structural changes

---

## Decision 2 — CountrySchema Must Declare All Fields (Strict Mode Discovery)

**Date:** 2025
**Status:** Accepted

**Decision:**
All fields stored in MongoDB (`lat`, `lng`, `flag`, `official`) must be explicitly declared in
`CountrySchema`. They cannot be added only in seed data.

**Context:**
During initial development, `lat`, `lng`, `flag`, and `official` were included in seed data but
not in the Mongoose schema. Mongoose strict mode (enabled by default) silently dropped these
fields on save. The map rendered all markers at `[undefined, undefined]`, producing a blank
black screen with no console errors.

**Alternatives Considered:**

| Option | Reason Not Chosen |
|--------|-------------------|
| Set `strict: false` on schema | Would suppress all schema validation, masking future bugs |
| Store lat/lng on the client only | Coordinates belong in the data layer, not hardcoded in UI |

**Rationale:**
The correct fix is to declare every field in the schema. This surfaces bugs early and keeps the
schema as the single source of truth for the data shape.

**Tradeoffs Accepted:**
- Schema changes require re-seeding; cannot add new fields to existing documents without migration

---

## Decision 3 — react-leaflet v5: center + zoom Over bounds

**Date:** 2025
**Status:** Accepted

**Decision:**
Always initialize `<MapContainer>` with `center` and `zoom` props, not `bounds`.

**Context:**
react-leaflet v5 requires either `center` + `zoom` or `bounds` to be present on the initial
render. When `bounds` was computed from country coordinates fetched asynchronously, the
component mounted before the data arrived, causing a crash (`L.latLngBounds` called with
undefined coordinates) that produced a blank map with no error in the browser console.

**Alternatives Considered:**

| Option | Reason Not Chosen |
|--------|-------------------|
| Compute bounds from fetched data | Race condition — bounds undefined on first render |
| Delay render until data loaded | Still requires a fallback center; adds complexity |
| Downgrade to react-leaflet v3/v4 | Avoids the problem by regression; not acceptable |

**Rationale:**
A fixed `center={[15, -30]}` with `zoom={2}` shows the full Atlantic / Americas view and covers
all 26 countries without requiring dynamic computation.

**Tradeoffs Accepted:**
- The initial viewport is hardcoded; future countries outside this default view may need
  a zoom adjustment

---

## Decision 4 — Leaflet Popup Keyboard Focus: Double requestAnimationFrame

**Date:** 2025
**Status:** Accepted

**Decision:**
In the `popupopen` event handler, use a double `requestAnimationFrame` to move focus to the
popup's "Explore" link — not `setTimeout`, not a single `requestAnimationFrame`.

**Context:**
Leaflet intercepts the Tab key within the map container, making popup links unreachable by
keyboard. The solution is to programmatically focus the link when the popup opens. However,
Leaflet's own popup open logic also calls `.focus()` on the popup close button. A single
`requestAnimationFrame` ran before Leaflet's internal focus call, so focus was immediately
stolen back by the close button. `setTimeout(fn, 50)` sometimes worked but was unreliable
depending on machine speed.

**Alternatives Considered:**

| Option | Reason Not Chosen |
|--------|-------------------|
| `setTimeout(fn, 50)` | Race condition — unreliable across machines and browsers |
| Single `requestAnimationFrame` | Runs before Leaflet's internal `.focus()` call |
| Custom keyboard event listener on map | Complex; requires tracking popup state manually |

**Rationale:**
The double `requestAnimationFrame` schedules focus after the current paint frame **and** after
any microtasks/callbacks queued by Leaflet during that frame. It is the idiomatic solution to
"run after the browser's next two render cycles."

**Tradeoffs Accepted:**
- Relies on undocumented timing behavior of Leaflet internals; could break on Leaflet upgrades

---

## Decision 5 — popupclose: Manually Return Focus to Source Marker

**Date:** 2025
**Status:** Accepted

**Decision:**
In the `popupclose` event handler, explicitly call `.focus()` on the marker element that owned
the closed popup, using `e.popup._source?.getElement()`.

**Context:**
When a popup was closed (via the X button or Escape), Leaflet did not return focus to the
originating marker. Focus jumped to the map's zoom controls (the `+` button), forcing the user
to Shift+Tab multiple times to return to the markers.

**Alternatives Considered:**

| Option | Reason Not Chosen |
|--------|-------------------|
| Let Leaflet manage focus | Default behavior places focus on zoom controls |
| Focus the map container on close | Loses the user's position among markers |

**Rationale:**
Returning focus to the source marker maintains the user's spatial context in the map and
satisfies WCAG 2.4.3 (Focus Order).

**Tradeoffs Accepted:**
- `e.popup._source` accesses a private Leaflet property; could change in a Leaflet upgrade

---

## Decision 6 — Tailwind CSS v4: Hybrid Inline + Utility Approach

**Date:** 2025
**Status:** Accepted

**Decision:**
Use Tailwind CSS v4 via the `@tailwindcss/vite` plugin (no `tailwind.config.js`), but apply
brand colors and layout styles as inline styles, not Tailwind utility classes.

**Context:**
Tailwind v4 eliminates the config file and relies on CSS custom properties for theming. Brand
colors (`#ff5f5f`, `#ffbc42`, `#1e2a47`, `#162033`) are non-standard and would require
`@theme` block configuration in CSS to use as Tailwind utilities. The project also uses
heavy inline styles from early prototyping.

**Alternatives Considered:**

| Option | Reason Not Chosen |
|--------|-------------------|
| Full Tailwind utility classes | Requires `@theme` config for custom brand colors |
| Tailwind v3 with config file | Older API; v4 is the current standard |
| Plain CSS modules | More files; no utility benefits |

**Rationale:**
The hybrid approach ships fast. Tailwind handles animation (`animate-spin`), spacing utilities,
and responsive helpers. Inline styles handle brand-specific colors and complex layouts.

**Tradeoffs Accepted:**
- Inconsistent styling approach — some elements use utilities, others use inline styles
- Refactoring to pure Tailwind would require authoring a `@theme` block (see ROADMAP.md)

---

## Decision 7 — Seed Strategy: deleteMany + create in a Single Script

**Date:** 2025
**Status:** Accepted

**Decision:**
The seed script (`seedAllCountries.js`) runs `Country.deleteMany({})` before inserting all
26 countries in a single `Country.create([...])` call.

**Context:**
Early development used individual seed files per country (e.g., `seedEquatorialGuinea.js`).
This was impractical for maintaining all 26 countries and made it easy to have partial,
inconsistent data in the database.

**Alternatives Considered:**

| Option | Reason Not Chosen |
|--------|-------------------|
| Upsert per country (findOneAndUpdate) | More complex; still risks partial data if script fails mid-way |
| Separate seed files per country | 26 files to maintain; easy to get out of sync |
| Migration system (e.g., migrate-mongo) | Overkill for a solo project at this stage |

**Rationale:**
Wipe-and-reseed is simple, deterministic, and guarantees the database always matches the seed
file. It is the right tradeoff for a solo project where data migrations are not a concern yet.

**Tradeoffs Accepted:**
- Running the seed script destroys all existing data — must be run intentionally
- Not appropriate once user-generated data exists (see ROADMAP.md Phase 3.8)

---

## Decision 8 — ExploreCountry: funFacts Rendered Separately, Others Dynamically

**Date:** 2025
**Status:** Accepted

**Decision:**
In `ExploreCountry.jsx`, render `funFacts` in its own dedicated section first, then loop over
all remaining subtopics using `Object.entries(country.subtopics).filter(([key]) => key !== 'funFacts')`.

**Context:**
`funFacts` uses a `list: [String]` field (a bullet list), while all other subtopics use a
`content: String` field (a paragraph). Rendering them with the same template would have broken
the `funFacts` display. Rendering `funFacts` twice (once in the static section, once in the
dynamic loop) was also a bug discovered after initial implementation.

**Alternatives Considered:**

| Option | Reason Not Chosen |
|--------|-------------------|
| Add a `type` field to SubtopicSchema | Adds schema complexity for a distinction handled in the UI |
| Render all subtopics identically | Can't render both a `list` and a `content` field with one template |

**Rationale:**
Explicit first + filtered loop is the simplest solution that handles the structural difference
without schema changes.

**Tradeoffs Accepted:**
- `funFacts` rendering logic is duplicated (static section + filter) — must update two places
  if the funFacts display style changes
