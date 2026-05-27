---
name: html-accessibility
description: >
  HTML structure and WCAG 2.2 accessibility rules for OUDS Web. Covers ARIA patterns,
  focus management, color contrast, touch targets, keyboard navigation, RTL support,
  and cognitive accessibility. Applied when working on HTML/MDX templates.
applyTo: "**/*.{html,mdx}"
---

# HTML & Accessibility

## Compliance target

OUDS Web targets **WCAG 2.2 Level AAA** as its primary standard, with **Level AA as a documented fallback** when brand constraints make AAA infeasible (e.g., specific color palettes). Every component must meet at least AA.

This dual-target approach means: aim for AAA, document explicitly when falling back to AA with justification and compensatory measures.

---

## Semantic HTML

Use the right element for the job. Semantic elements provide free keyboard navigation, screen reader announcements, and correct ARIA roles.

```html
<!-- ✓ native interactive elements -->
<button type="button" class="btn btn-brand">Submit</button>
<a href="/page">Navigate</a>

<!-- ✗ custom elements lose keyboard/SR support -->
<div onclick="doAction()" class="btn">Submit</div>
<span onclick="navigate()">Go to page</span>
```

- Use `<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`, `<aside>` for landmarks
- Maintain heading hierarchy (`<h1>` → `<h2>` → `<h3>` — never skip levels)
- Use `role="alert"` for auto-announced messages; `role="status"` for polite updates
- Use `aria-live="polite"` on toast containers

---

## ARIA patterns

Every interactive component needs the correct ARIA attributes. Without them, assistive technology users can't understand state changes.

| Component pattern | Required ARIA |
|---|---|
| Decorative icons | `aria-hidden="true"` on `<svg>` |
| Close buttons | `aria-label="Close"` or `aria-labelledby` |
| Toggle states | `aria-pressed="true/false"` |
| Expandable content | `aria-expanded="true/false"` + `aria-controls="id"` |
| Form validation | `aria-invalid="true"` + `aria-describedby` linking to error text |
| Disabled state | `aria-disabled="true"` (don't rely on `disabled` attr alone) |
| Loading/skeleton | `aria-busy="true"` on container |
| Icon-only buttons | `aria-label="Action name"` + `aria-hidden="true"` on icon |

---

## Focus management

### Visible focus indicators (WCAG 2.4.11, 2.4.12, 2.4.13)

The OUDS dual-ring focus system is implemented via `@include focus-visible()`. In HTML, ensure interactive elements can receive focus:

- Never add `tabindex="-1"` to interactive elements that should be reachable
- Use `tabindex="0"` only on custom interactive elements that need it
- Never use `outline: none` without the `focus-visible()` mixin providing an alternative

### Focus trapping (modals, offcanvas)

Modal and offcanvas components must trap focus using `js/src/util/focustrap.js`:
- Escape always closes the trap
- Focus returns to the trigger element on close (WCAG 2.4.3)

### Focus not obscured (WCAG 2.4.11, 2.4.12)

Focused elements must not be hidden by sticky headers, cookie banners, or overlays. Use `scroll-padding-top` to account for fixed-position elements.

---

## Color contrast

| Content type | AAA target | AA fallback |
|---|---|---|
| Text | 7:1 | 4.5:1 |
| UI components (borders, icons) | 4.5:1 | 3:1 |

When AA fallback is used, compensate with:
- Larger/bolder text
- Redundant visual cues (icons + color, not color alone)
- ARIA labels for critical info

Document fallbacks: `<!-- OUDS: AA fallback — [justification] -->`

---

## Touch targets (WCAG 2.5.8 AAA)

All interactive elements must have a minimum 44×44px touch target. The SCSS mixin `@include target-size()` enforces this.

---

## Reduced motion (WCAG 2.3.3)

All motion/animation must respect `prefers-reduced-motion: reduce`. The `@include transition()` mixin handles this automatically — which is why direct `transition:` properties are forbidden.

---

## RTL support

RTL layout is handled by `rtlcss` during the CSS build. In HTML:
- Use `dir="rtl"` on `<html>` for RTL pages
- Avoid inline styles with physical directions (`left`, `right`, `margin-left`)
- Use logical CSS properties (`margin-inline-start`, `padding-inline-end`)

---

## Color modes

Color mode is controlled via the `data-bs-theme` attribute, never via `prefers-color-scheme` media queries.

```html
<!-- ✓ attribute-driven -->
<div data-bs-theme="dark">...</div>

<!-- ✗ media query approach -->
<style>@media (prefers-color-scheme: dark) { ... }</style>
```

---

## WCAG 2.2 specifics

| Criterion | Requirement |
|---|---|
| Consistent Help (3.2.6) | Help mechanisms in same relative order across pages |
| Accessible Auth (3.3.8/9) | Support password managers (`autocomplete`), offer passkey/magic-link |
| Dragging (2.5.7) | Provide click/keyboard alternative to all drag operations |
| Redundant Entry (3.3.7) | Auto-populate previously entered data; offer "same as" checkboxes |

---

## Example: accessible form input

```html
<div class="mb-3">
  <label for="email" class="form-label">Email address</label>
  <input
    type="email"
    class="form-control is-invalid"
    id="email"
    aria-describedby="email-help email-error"
    aria-invalid="true"
  />
  <div id="email-help" class="form-text">We'll never share your email.</div>
  <div id="email-error" class="invalid-feedback">Please enter a valid email.</div>
</div>
```
