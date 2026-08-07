# CSS Variables

CSS custom properties for real-time customization without Sass recompilation.

## Prefix

All custom properties are prefixed with `bs-` (configurable via `$prefix` Sass variable):

```css
--bs-color-bg-primary
--bs-body-font-family
```

## Root Variables

Defined in `_root.scss`. Two scopes:

- **Default** (`:root` / light mode) — available everywhere
- **Dark mode** (`[data-bs-theme=dark]`) — scoped overrides

## Component Variables

Local CSS variables on component base classes (e.g. `.breadcrumb`). Used for:

- Reducing compiled CSS size
- Preventing style inheritance in nested elements
- Enabling restyling after Sass compilation

## Deduping Embedded SVGs

CSS variables factorize repeated SVG data URIs to decrease file size:

```css
:root {
  --bs-chevron-icon: url("data:image/svg+xml,...");
}

.back-to-top-link::after {
  background-image: var(--bs-chevron-icon);
}
```

## Usage Example

```css
body {
  font: 1rem/1.5 var(--bs-font-body-family);
}
a {
  color: var(--bs-color-content-brand-primary);
}
```

## Focus Visible Variables

Custom `:focus-visible` styles via Sass and CSS variables. Remove with `outline: 0; box-shadow: none;`. Focus styles are removed for form elements.

## Grid Breakpoints

Grid breakpoints are available as CSS variables (except `2xs`), but **CSS variables do not work in media queries**. Use them in other CSS or JavaScript contexts.
