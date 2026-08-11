---
name: 'scss-conventions'
description: 'SCSS coding conventions for OUDS Web. Use this skill whenever writing, editing, or reviewing SCSS files. Covers variable naming ($component-state-property-size formula), required !default flag, mandatory mixins (border-radius, transition), forbidden patterns (hardcoded values, raw tokens, lighten/darken, border:none), color-mode mixin usage, and OUDS mod markers. Invoke this skill for any SCSS work — even small edits can violate token or mixin rules.'
---

# SCSS Conventions

## Why these rules exist

OUDS Web uses token-driven multi-brand theming. Strict SCSS conventions ensure that token variables resolve correctly across 3 brands, dark mode works via CSS custom properties, RTL is handled by rtlcss, and Stylelint catches violations in CI.

---

## Variable naming

Formula: `$component-state-property-size`

```scss
$nav-link-disabled-color
$modal-content-box-shadow-xs
$btn-padding-y
```

Every module-scope variable requires `!default` (allows consumer overrides). Local variables in mixins/functions are exempt.

---

## Token usage

Always use semantic or component tokens. Never use raw tokens or hardcoded values.

```scss
// ✓ semantic token
padding: $ouds-space-padding-block-medium;

// ✓ component token (preferred when exists)
@include border-radius($ouds-button-border-radius-default);

// ✓ CSS custom property for colors (dark mode)
color: var(--#{$prefix}color-content-default);

// ✗ raw token
padding: $core-ouds-dimension-200;

// ✗ hardcoded
padding: 16px;
```

---

## Required mixins

| Instead of | Use | Why |
|---|---|---|
| `border-radius: X` | `@include border-radius($val)` | Stylelint-enforced; consistent logical directions |
| `transition: X` | `@include transition(X)` | Auto-injects `prefers-reduced-motion` |
| `border-top-left-radius` | `@include border-top-start-radius($val)` | Logical (RTL-compatible) |

---

## Forbidden patterns

| Pattern | Fix |
|---|---|
| `border: none` | `border: 0` |
| `lighten()` / `darken()` | Use lighter/darker token variant |
| `$core-ouds-*` in components | Use `$ouds-*` semantic token |
| `$core-orange-*` / `$core-sosh-*` | Use semantic/component token |
| `:root { }` | `#{$ouds-root-selector} { }` |
| `@media (prefers-color-scheme)` | `@include color-mode(dark)` |
| `[data-bs-theme="light"]` raw | `@include color-mode(light, true)` |

---

## Color mode declarations

```scss
@include color-mode(light, true) {
  --#{$prefix}color-action-enabled: #{$ouds-color-action-enabled-light};
}
@include color-mode(dark) {
  --#{$prefix}color-action-enabled: #{$ouds-color-action-enabled-dark};
}
```

---

## Bootstrap override markers

```scss
display: flex; // OUDS mod: instead of `inline-block`

// OUDS mod: loading buttons
.btn.loading-indeterminate { ... }
// End mod
```

---

## File formatting

UTF-8, LF, 2-space indent, final newline, no trailing whitespace.
