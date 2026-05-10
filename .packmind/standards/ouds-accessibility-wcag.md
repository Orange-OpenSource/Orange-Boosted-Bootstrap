---
name: ouds-accessibility-wcag
description: >
  WCAG 2.1 Level AA compliance requirements for OUDS Web components.
  Covers focus management, keyboard navigation, ARIA patterns, color contrast, RTL, motion, and touch targets.
scope: "All HTML markup, SCSS component files, JavaScript component files"
applyTo: "**/*.{scss,js,html,mdx}"
---

# OUDS Web — Accessibility (WCAG 2.1 AA)

## Scope

All HTML markup, SCSS component files, JavaScript interactive components, and MDX documentation examples.

---

## Rules

### Accessibility is non-negotiable — target WCAG 2.1 Level AA minimum

Every component, every PR, and every contribution must meet WCAG 2.1 Level AA. Accessibility is enforced through Pa11y-CI (automated), VNU HTML validation, unit tests with ARIA assertions, Stylelint, and a mandatory human review gate on every PR.

### Always provide visible focus indicators — never remove `:focus-visible` styles

Use the OUDS dual-ring focus indicator via the `focus-visible()` mixin. Never write `outline: none` or `outline: 0` without providing a visible focus alternative.

```scss
// Good
&:focus-visible {
  @include focus-visible();
}

// Bad
&:focus {
  outline: none;   // Stylelint violation + accessibility failure
}
```

### Use `@include focus-visible()` for custom focus states — not raw outline/box-shadow

```scss
// Good
@include focus-visible($color, $width, $offset, $box-width, $box-color);

// Bad
outline: 3px solid black;
box-shadow: 0 0 0 2px white;
```

### Modal and Offcanvas components must trap focus

Use `js/src/util/focustrap.js`. Escape must always close the trap. Focus must restore to the trigger element on close (WCAG 2.4.3).

### All interactive elements must be operable by keyboard alone

`<button>`, `<a>`, `<input>`, `<select>`, `<textarea>` are natively keyboard-accessible. Never create custom interactive elements with `<div>` or `<span>`.

```html
<!-- Good -->
<button type="button" class="btn">Action</button>
<a href="/destination">Link</a>

<!-- Bad -->
<div role="button" onclick="...">Action</div>
<span onclick="...">Link</span>
```

### Use correct ARIA attributes on every interactive component

| Pattern            | Required ARIA                                          |
| ------------------ | ------------------------------------------------------ |
| Decorative icons   | `aria-hidden="true"` on `<svg>`                        |
| Close buttons      | `aria-labelledby` referencing button + closed element  |
| Toggle states      | `aria-pressed="true"` on active toggle buttons         |
| Expandable content | `aria-expanded="true/false"` on trigger                |
| Form validation    | `aria-invalid="true"` on invalid inputs                |
| Form helpers       | `aria-describedby` linking inputs to helper/error text |
| Disabled state     | `aria-disabled="true"` (do not rely on `disabled` alone) |
| Loading states     | `aria-busy="true"` on skeleton/loading containers      |
| Lists/groups       | `aria-label` on `<ul>` or `role="group"` containers    |

### Use `.visually-hidden` for screen-reader-only content — never `display: none`

`display: none` hides content from screen readers. Use `.visually-hidden` class for content that should be announced but not visible.

```html
<!-- Good — icon with screen-reader label -->
<div class="alert-icon">
  <p class="visually-hidden">Error</p>
</div>

<!-- Bad — hides from assistive technology too -->
<div class="alert-icon">
  <p style="display: none">Error</p>
</div>
```

### Enforce color contrast: 4.5:1 for text, 3:1 for UI components

- Use OUDS color tokens — they are validated at Sass compile time via `color-contrast()`.
- Never hardcode color values; the token system enforces `$min-contrast-ratio: 4.5`.
- For UI components (borders, icons, focus rings): minimum 3:1.

### Respect `prefers-reduced-motion` — use the `transition()` mixin

The `@include transition()` mixin automatically injects `prefers-reduced-motion: reduce` media queries. Do not write raw `transition:` declarations.

```scss
// Good — automatically respects reduced motion
@include transition(opacity 0.15s linear);

// Bad — ignores reduced motion preference
transition: opacity 0.15s linear;
```

### Minimum touch target size: 44×44px

Use the `target-size()` mixin from `scss/_target-size.scss` for all interactive elements. This implements WCAG 2.5.8.

```scss
// Good
@include target-size();

// Bad — too small, no minimum size enforcement
width: 24px;
height: 24px;
```

### RTL layout support — no physical directional hardcoding

RTL layout is handled automatically by `rtlcss` during the CSS build. Do not hardcode `left`, `right`, `margin-left`, `padding-right`, etc. when logical equivalents exist. Use `rtl:ignore` annotations only when absolutely necessary.

```scss
// Let rtlcss handle direction automatically — no annotation needed
margin-inline-start: $ouds-space-fixed-small;

// Only suppress rtlcss when direction must remain fixed
stroke-dashoffset: 107 #{"/* rtl:ignore */"};
```

### Use semantic HTML for accessible document structure

- Use correct heading hierarchy (`<h1>` → `<h2>` → ...), never skip levels.
- Use `<nav>` for navigation, `<main>` for main content, `<aside>` for complementary.
- Use `role="alert"` for auto-announced alert messages; `role="status"` for polite announcements.
- Use `aria-live="polite"` on toast containers.

```html
<!-- Good — semantically structured alert -->
<div class="alert alert-info" role="alert">
  <div class="alert-icon"><p class="visually-hidden">Info</p></div>
  <p>Informational message.</p>
  <button class="btn-close" data-bs-dismiss="alert" aria-labelledby="btn-close-alert alert-heading">
    <span class="visually-hidden">Close</span>
  </button>
</div>
```

---

## Examples

### Good — accessible form input with validation

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

### Bad — form input without accessibility attributes

```html
<div>
  <input type="email" class="form-control error" />
  <p style="color: red">Please enter a valid email.</p>
</div>
```

### Good — accessible modal with focus management

```html
<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="dialog" aria-modal="true">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="myModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">Content here.</div>
    </div>
  </div>
</div>
```
