---
name: ouds-accessibility-wcag
description: >
  WCAG 2.2 Level AAA compliance target for OUDS Web components, with documented fallback to Level AA for specific constraints (e.g., certain color contrasts).
  Covers focus management, keyboard navigation, ARIA patterns, color contrast, RTL, motion, touch targets, and cognitive accessibility.
scope: "All HTML markup, SCSS component files, JavaScript component files"
applyTo: "**/*.{scss,js,html,mdx}"
---

# OUDS Web — Accessibility (WCAG 2.2 AAA with AA fallback)

## Scope

All HTML markup, SCSS component files, JavaScript interactive components, and MDX documentation examples.

---

## Compliance Philosophy

OUDS Web targets **WCAG 2.2 Level AAA** as the primary accessibility standard. All new components and contributions should aim for AAA compliance. When AAA compliance is not feasible due to brand constraints (e.g., specific color palettes) or technical limitations, **Level AA is accepted as a documented fallback** with explicit justification and compensatory measures (e.g., enhanced ARIA labels, visual cues, or alternative UI patterns).

### Tiered Compliance

- **AAA Target (Default)**: All rules marked as AAA must be followed unless explicitly documented as an AA fallback case.
- **AA Fallback (Exception)**: Specific scenarios where AA is acceptable are clearly identified with justification and compensatory accessibility features.

---

## Rules

### Accessibility is non-negotiable — target WCAG 2.2 Level AAA, minimum AA

Every component, every PR, and every contribution must meet WCAG 2.2 Level AAA where possible, and Level AA as a minimum. Accessibility is enforced through Pa11y-CI (automated), VNU HTML validation, unit tests with ARIA assertions, Stylelint, and a mandatory human review gate on every PR.

### Always provide visible focus indicators — never remove `:focus-visible` styles (WCAG 2.4.11, 2.4.12 AAA, 2.4.13 AAA)

Use the OUDS dual-ring focus indicator via the `focus-visible()` mixin. Never write `outline: none` or `outline: 0` without providing a visible focus alternative.

**WCAG 2.2 Enhancement**: Focus indicators must have sufficient contrast (minimum 3:1 against background) and be at least 2px thick (AAA: 3–4px recommended). The `focus-visible()` mixin implements this automatically.

```scss
// Good — AAA compliant focus indicator
&:focus-visible {
  @include focus-visible();
}

// Bad — removes focus without alternative
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

### Enforce color contrast: AAA target 7:1 for text, 4.5:1 for UI — AA fallback 4.5:1 / 3:1 when needed (WCAG 1.4.6 AAA, 1.4.11 AA)

**AAA Target (Default)**:
- **Text content**: minimum 7:1 contrast ratio (WCAG 1.4.6 AAA)
- **UI components** (borders, icons, focus rings): minimum 4.5:1 (WCAG 1.4.11 AA already exceeds minimum)

**AA Fallback (Exception with Justification)**:
- **Secondary UI elements** (disabled states, placeholder text, decorative borders): minimum 4.5:1 for text, 3:1 for UI components
- **Brand-specific constraints**: when brand color palettes cannot achieve 7:1, maintain 4.5:1 minimum and compensate with:
  - Enhanced visual hierarchy (larger font size, bold weight)
  - Redundant cues (icons, borders, not color alone)
  - ARIA labels for critical information

**Implementation**:
- Use OUDS color tokens — they are validated at Sass compile time via `color-contrast()`.
- Never hardcode color values; the token system enforces `$min-contrast-ratio: 4.5` (current baseline).
- Document any AA fallback cases in component SCSS with `// OUDS mod: AA fallback - [justification]`.

```scss
// Good — AAA: 7:1 contrast for primary text
color: var(--#{$prefix}color-content-primary);
background-color: var(--#{$prefix}color-bg-primary);

// Acceptable AA fallback — brand constraint, documented
// OUDS mod: AA fallback - Orange brand secondary color maintains 4.5:1, compensated with bold weight
color: var(--#{$prefix}color-content-secondary);
font-weight: var(--#{$prefix}font-weight-bold);
```

### Respect `prefers-reduced-motion` — use the `transition()` mixin (WCAG 2.3.3 AAA)

The `@include transition()` mixin automatically injects `prefers-reduced-motion: reduce` media queries. Do not write raw `transition:` declarations.

**WCAG 2.2 Enhancement**: All motion and animation must be disabled or significantly reduced when `prefers-reduced-motion: reduce` is set. This includes CSS transitions, animations, and parallax effects.

```scss
// Good — automatically respects reduced motion
@include transition(opacity 0.15s linear);

// Bad — ignores reduced motion preference
transition: opacity 0.15s linear;
```

### Minimum touch target size: 44×44px (WCAG 2.5.8 AAA)

Use the `target-size()` mixin from `scss/_target-size.scss` for all interactive elements. This implements WCAG 2.5.8 Level AAA.

**WCAG 2.2 Note**: Target size of 44×44px ensures touchscreen users can reliably activate controls without accidentally triggering adjacent elements.

```scss
// Good — AAA compliant touch target
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

## WCAG 2.2 Specific Requirements

### Consistent Help (WCAG 3.2.6 A)

When help mechanisms (e.g., contact links, help icons, chatbots) are repeated across multiple pages, they must appear in the same relative order.

```html
<!-- Good — consistent footer help placement across all pages -->
<footer>
  <nav aria-label="Help">
    <a href="/contact">Contact</a>
    <a href="/faq">FAQ</a>
    <a href="/support">Support</a>
  </nav>
</footer>
```

### Accessible Authentication (WCAG 3.3.8 AA, 3.3.9 AAA)

**Level AA**: Authentication must not rely solely on cognitive function tests (e.g., remembering passwords or solving puzzles) unless alternative methods are provided.

**Level AAA Target**: Provide object recognition or personal content identification as alternatives to text-based passwords.

```html
<!-- Good — AA compliant: password manager support -->
<input type="password" autocomplete="current-password" id="password" />

<!-- Better — AAA target: biometric or magic link options provided -->
<button type="button" id="use-passkey">Sign in with Passkey</button>
<button type="button" id="email-magic-link">Email me a sign-in link</button>
```

### Dragging Movements (WCAG 2.5.7 AA)

All functionality that uses dragging must have a single-pointer alternative (e.g., click-to-select, keyboard alternatives).

```html
<!-- Good — draggable with keyboard alternative -->
<div draggable="true" role="listitem" tabindex="0"
     aria-label="Item 1. Press Space to grab, arrow keys to move, Space to drop">
  Item 1
</div>
<!-- Provide button controls as alternative -->
<button type="button" aria-label="Move item 1 up">↑</button>
<button type="button" aria-label="Move item 1 down">↓</button>
```

### Focus Not Obscured (WCAG 2.4.11 AA, 2.4.12 AAA)

**Level AA**: When a component receives focus, it must not be entirely hidden by author-created content (e.g., sticky headers, cookie banners).

**Level AAA Target**: Focused components should not be obscured at all, or only minimally.

```scss
// Good — ensure sticky headers don't obscure focus
.sticky-header {
  // Use scroll-padding-top to account for sticky header height
  scroll-padding-top: var(--#{$prefix}header-height);
}

// Ensure modals and overlays manage z-index properly
.modal {
  z-index: var(--#{$prefix}zindex-modal);
}
```

### Redundant Entry (WCAG 3.3.7 A)

Information previously entered by the user in the same process should be auto-populated or selectable, not require re-entry.

```html
<!-- Good — use autocomplete for redundant entry prevention -->
<input type="text" name="billing-address" autocomplete="street-address" />
<label>
  <input type="checkbox" id="same-as-billing" />
  Shipping address same as billing
</label>
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
