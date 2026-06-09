# Color Palette

Summary of all existing and useable colors in OUDS Web.

## Palette Variables

- Sass variables follow pattern: `$core-ouds-color-{category}-{shade}` and `$core-{brand}-color-{category}-{shade}`
- These are **raw color values** — not meant to be used directly in code
- None of these variables depend on the theme (they are static)

## Usage Guidelines

- Prefer **semantic color tokens** via CSS variables (e.g. `var(--bs-color-bg-primary)`) over raw palette variables
- Avoid using raw Sass color variables directly (e.g. `$ouds-color-decorative-amethyst-600`)
- Use Color and Background utility classes for setting `color` and `background-color`

### Sass Example

```scss
// GOOD: use CSS variables
.alpha {
  color: var(--bs-color-action-visited);
}
.beta {
  background-color: var(--bs-color-bg-primary);
}

// AVOID: raw palette variables
.gamma {
  color: $ouds-color-decorative-sun-100;
} // Only if no CSS variable exists
```

## Bootstrap Palette Mapping

Bootstrap defines its own color palette. OUDS Web provides a mapping between OUDS colors and Bootstrap colors for compatibility with Bootstrap-based plugins.

> With `$enable-bootstrap-compatibility: true`, Bootstrap color classes are available but may not fully comply with OUDS design specifications.
