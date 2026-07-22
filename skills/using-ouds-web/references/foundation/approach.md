# Approach

Guiding principles for building with OUDS Web.

## Core Principles

- **Mobile-first responsive** — use `min-width` media queries; styles apply from a breakpoint and up
- **Base + modifier classes** — e.g. `.btn` (base) + `.btn-strong` (modifier)
- **HTML/CSS over JS** — use `data` attributes for JS plugins instead of writing JavaScript
- **Utilities over custom styles** — use utility classes to reduce CSS bloat
- **Flexible HTML** — single-class selectors, avoid child selectors (`>`)

## Bootstrap Compatibility

OUDS Web uses design tokens that differ from Bootstrap naming. The option `$enable-bootstrap-compatibility` (default `false`) keeps Bootstrap elements alongside OUDS Web elements.

- Recommend **not** enabling it for new projects
- Only useful when integrating external Bootstrap-based libraries/plugins with OUDS Web CSS

## Class Architecture

- Base class: common, non-overridable properties (e.g. `.btn` for `display`, `padding`, `border-width`)
- Modifier class: variant-specific properties (e.g. `.btn-strong` for `color`, `background-color`)
- Only create modifiers when multiple properties change across variants

## Code Conventions

- [Code Guide](https://codeguide.co/) for HTML/CSS style
- [Stylelint](https://stylelint.io/) for Sass/CSS enforcement
- [vnu-jar](https://www.npmjs.com/package/vnu-jar) for HTML validation
