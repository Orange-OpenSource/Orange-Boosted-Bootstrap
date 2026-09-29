---
name: 'accessibility'
description: 'WCAG 2.2 accessibility rules for OUDS Web. Use this skill when creating or editing interactive components, writing HTML templates, adding ARIA attributes, handling focus states, or reviewing accessibility. Covers WCAG 2.2 Level AAA target (AA fallback), ARIA patterns for every component type, focus-visible mixin, color contrast (7:1 AAA / 4.5:1 AA), 44×44px touch targets, reduced motion, RTL, focus trapping, and cognitive accessibility. Always invoke this skill for any work touching user interaction or markup structure.'
---

# Accessibility (WCAG 2.2)

## Compliance target

**WCAG 2.2 Level AAA** primary, with **Level AA as documented fallback** when brand constraints make AAA infeasible. Every component meets at least AA.

---

## ARIA patterns (quick reference)

| Pattern | Required ARIA |
|---|---|
| Decorative icons | `aria-hidden="true"` on `<svg>` |
| Close buttons | `aria-label="Close"` or `aria-labelledby` |
| Toggles | `aria-pressed="true/false"` |
| Expandable | `aria-expanded` + `aria-controls="id"` |
| Form validation | `aria-invalid="true"` + `aria-describedby` |
| Disabled | `aria-disabled="true"` |
| Loading | `aria-busy="true"` |
| Icon-only buttons | `aria-label="Action"` + `aria-hidden` on icon |

---

## Focus management

- Use `@include focus-visible()` mixin — never `outline: none` without alternative
- Focus indicators: 3:1 contrast minimum, 2px thick (AAA: 3-4px)
- Modal/offcanvas: trap focus via `focustrap.js`, Escape closes, focus returns to trigger
- Focused elements must not be obscured by sticky headers or overlays

---

## Color contrast

| Content | AAA target | AA fallback |
|---|---|---|
| Text | 7:1 | 4.5:1 |
| UI components | 4.5:1 | 3:1 |

When AA fallback needed: use larger/bolder text, redundant visual cues (never color alone), document with `// OUDS mod: AA fallback — [reason]`.

---

## Touch targets (WCAG 2.5.8)

Minimum 44×44px on all interactive elements. Use `@include target-size()` mixin.

---

## Reduced motion (WCAG 2.3.3)

All animation respects `prefers-reduced-motion: reduce`. The `@include transition()` mixin handles this — which is why direct `transition:` is forbidden.

---

## Semantic HTML

- `<button>` for actions, `<a>` for navigation — never `<div>`/`<span>` as interactive
- Heading hierarchy: `<h1>` → `<h2>` → `<h3>` (never skip)
- `role="alert"` for auto-announced; `role="status"` for polite
- `.visually-hidden` for SR content — never `display: none`

---

## Color modes

Use `data-bs-theme` attribute, never `prefers-color-scheme` media queries.

---

## WCAG 2.2 specifics

| Criterion | Requirement |
|---|---|
| Consistent Help (3.2.6) | Help mechanisms in same order across pages |
| Accessible Auth (3.3.8/9) | Support `autocomplete`, offer passkey/magic-link |
| Dragging (2.5.7) | Click/keyboard alternative to all drag |
| Redundant Entry (3.3.7) | Auto-populate previously entered data |
| Focus Not Obscured (2.4.11/12) | Never fully hidden by sticky elements |
