# Hispanosphere — Accessibility Log

> WCAG 2.1 AA compliance tracking. Guiding principle: if a feature works with a mouse, it works with a keyboard and a screen reader.

---

## Implemented

### 1.4.1 — Use of Color
- Country badges ("Official" / "Spanish Influence") use color + text labels, not color alone
- Active nav link uses both amber color and an underline border for dual visual cue

### 2.1.1 — Keyboard: All functionality available via keyboard
- All nav links and country cards are keyboard focusable (`<NavLink>`, `<button>`)
- Leaflet map markers are keyboard reachable (Leaflet's built-in tab order)
- Map popup "Explore [Country]" link receives programmatic focus on popup open via double
  `requestAnimationFrame` in `MapEventHandler` — compensates for Leaflet intercepting Tab
- Popup close returns focus to the originating map marker via `popupclose` event handler,
  preventing focus from dropping to zoom controls

### 2.4.3 — Focus Order
- `MapEventHandler` component ensures logical focus flow: marker → popup link → marker
- Focus is never lost or dropped to an unrelated element during map interaction

### 2.4.7 — Focus Visible
- All interactive elements show native browser focus rings
- Map markers show Leaflet's default focus indicator

### 4.1.2 — Name, Role, Value
- All `<button>` elements have descriptive `aria-label` attributes
- View toggle buttons have `aria-pressed` to communicate current state
- Toggle button group has `role="group"` with `aria-label="View toggle"`
- `<nav>` has `aria-label="Main navigation"`
- `<MapContainer>` has `aria-label="Interactive map of Spanish-speaking countries and territories"`
- Each `<Marker>` has `alt` and `title` props
- Navbar logo link has `aria-label="Hispanosphere home"`
- All emoji used decoratively are wrapped in `<span aria-hidden="true">`
- Map popup links use `aria-label={`Explore ${country.name}`}` (not generic "here")

### 4.1.3 — Status Messages
- Loading states use `<Spinner>` component with descriptive message prop
- Error states render visible, descriptive error messages with contextual guidance

---

## In Progress

- **Color contrast audit** — Brand colors (#ff5f5f red, #ffbc42 amber, #94a3b8 muted text) have
  not been formally verified against WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large)
- **ExploreCountry keyboard flow** — Back to Map button and subtopic cards need a formal keyboard
  walkthrough; Tailwind utility classes on some elements may not receive visible focus rings

---

## Planned

- Run axe DevTools audit on all four routes (`/`, `/map`, `/countries`, `/explore/:code`)
- Add `<main>` landmark and `<h1>` hierarchy to ensure screen reader page structure
- Verify contrast ratios for all text/background combinations with a tool like coolors.co/contrast-checker
- Add `aria-live="polite"` region for dynamic content updates (e.g., spinner-to-content transition)
- Keyboard test script — tab through every interactive element on every page

---

## How to Run an Accessibility Audit

1. Open Chrome DevTools → Lighthouse → Accessibility
2. Install axe DevTools browser extension → run on each route
3. Use keyboard only (no mouse) to navigate through all four pages
4. Test with macOS VoiceOver: `Cmd + F5` to toggle, `Ctrl + Option + →` to navigate

---

## Guiding Principle

> Accessibility is not a checklist item added at the end. Every interactive element is built with keyboard navigation and screen reader semantics from the start.
