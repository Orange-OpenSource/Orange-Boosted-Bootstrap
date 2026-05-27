---
name: scss-conventions
description: >
  SCSS coding conventions for OUDS Web. Covers variable naming, required mixins,
  forbidden patterns, token usage, and file formatting. Applied whenever working
  on any SCSS file in the project.
applyTo: "**/*.scss"
---

# SCSS Conventions

## Why these rules exist

OUDS Web is a design-system fork of Bootstrap. Strict SCSS conventions ensure that:
- Token-driven theming works across 3 brands without per-brand SCSS overrides
- Dark mode functions correctly via CSS custom properties
- RTL support (via rtlcss) isn't broken by physical directional properties
- Stylelint catches violations early in CI (`lint.yml`)

---

## Variable naming

Use the Bootstrap formula: `$component-state-property-size`

```scss
$nav-link-disabled-color
$modal-content-box-shadow-xs
$btn-padding-y
```

Every SCSS variable at module scope requires `!default`. This allows consumers to override values before import. Local variables inside mixins/functions are exempt.

```scss
// ✓
$btn-padding-y: $ouds-button-space-padding-block !default;

// ✗ — missing !default breaks overridability
$btn-padding-y: 8px;
```

---

## Token usage

Use semantic or component tokens — never raw primitives or hardcoded values. This decouples components from brand-specific values.

```scss
// ✓ semantic token
padding: $ouds-space-padding-block-medium;

// ✓ component token (preferred when available)
@include border-radius($ouds-button-border-radius-default);

// ✓ CSS custom property for colors (enables dark mode)
color: var(--#{$prefix}color-content-default);

// ✗ raw token — couples to primitive layer
padding: $core-ouds-dimension-200;

// ✗ hardcoded value
padding: 16px;
color: #333333;
```

---

## Required mixins

Stylelint forbids direct `border-radius`, `transition`, and corner-radius properties. The mixins handle `prefers-reduced-motion`, logical directions, and vendor consistency.

| Instead of | Use |
|---|---|
| `border-radius: X` | `@include border-radius($value)` |
| `transition: X` | `@include transition(X)` |
| `border-top-left-radius: X` | `@include border-top-start-radius($value)` |
| `border-top-right-radius: X` | `@include border-top-end-radius($value)` |
| `border-bottom-right-radius: X` | `@include border-bottom-end-radius($value)` |
| `border-bottom-left-radius: X` | `@include border-bottom-start-radius($value)` |

---

## Forbidden patterns

| Pattern | Why it's banned | Fix |
|---|---|---|
| `border: none` | Stylelint `declaration-property-value-disallowed-list` | `border: 0` |
| `lighten()` / `darken()` | In `function-disallowed-list`; breaks token system | Use the appropriate lighter/darker token variant |
| `$core-ouds-*` in components | Raw tokens bypass semantic layer | Use `$ouds-*` semantic token |
| `$core-orange-*` / `$core-sosh-*` | Brand-specific raw tokens couple to one brand | Use semantic/component token |
| `:root { }` directly | Breaks multi-brand root selector | Use `#{$ouds-root-selector} { }` |
| `@media (prefers-color-scheme: ...)` | Color modes use `data-bs-theme` attribute | Use `@include color-mode(dark)` |
| `[data-bs-theme="light"]` raw | Fragile to implementation changes | Use `@include color-mode(light, true)` |

---

## Color mode declarations

```scss
// ✓ — mixin handles the selector and specificity
@include color-mode(light, true) {
  --#{$prefix}color-action-enabled: #{$ouds-color-action-enabled-light};
}
@include color-mode(dark) {
  --#{$prefix}color-action-enabled: #{$ouds-color-action-enabled-dark};
}
```

---

## Marking Bootstrap overrides

When modifying upstream Bootstrap code, mark the change so it's visible during upstream merge reviews:

```scss
display: flex; // OUDS mod: instead of `inline-block`

// OUDS mod: loading buttons
.btn.loading-indeterminate { ... }
// End mod
```

---

## File formatting

- UTF-8, LF line endings, 2-space indentation, final newline, no trailing whitespace
- These apply to all file types (SCSS, JS, HTML, JSON, YAML)
