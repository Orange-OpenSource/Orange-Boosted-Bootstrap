# Accessibility

OUDS Web is designed to fulfill WCAG 2.2 (A/AA/AAA), Section 508, and similar accessibility standards.

## Key features

### Visually hidden content

Use `.visually-hidden` for screen-reader-only content:

```html
<span class="visually-hidden">Danger: </span>
```

Use `.visually-hidden-focusable` for skip links (visible on focus):

```html
<a class="visually-hidden-focusable" href="#content">Skip to main content</a>
```

**Do not combine** `.visually-hidden` and `.visually-hidden-focusable`.

### Color contrast

Ensure WCAG 2.2 compliance:

- Text: minimum 4.5:1 contrast ratio
- Non-text: minimum 3:1 contrast ratio

### Reduced motion

OUDS Web respects `prefers-reduced-motion` media query. Most CSS transitions are disabled, animations slowed.

### Focus visibility

All `:focus-visible` elements get an outer outline and inner box shadow. Colors switch in dark mode. The `focus-visible()` mixin is available for custom components.

### Minimum target size

The `target-size()` mixin adds a centered pseudo-element with minimum 44px size (WCAG 2.5.8 compliance).

### Maximum line length

80-character max line length applied by default on all elements for readability (WCAG C20 technique).

## ARIA guidelines

- Use proper semantic elements (`<button>` for actions, `<a>` for navigation)
- Add `aria-label` to `<nav>` elements
- Use `aria-hidden="true"` on decorative icons
- Provide text alternatives for non-text content
