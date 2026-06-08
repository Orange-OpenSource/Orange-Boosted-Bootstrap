# Sass

## File structure

```text
your-project/
├── scss/
│   └── custom.scss
└── node_modules/
    └── @ouds/
        ├── web-common/
        │   ├── js/
        │   └── scss/
        └── web-orange/
            └── scss/
```

## Importing

### Option A: Include all

```scss
@import "../node_modules/@ouds/web-orange/scss/ouds-web";
```

### Option B: Include parts

```scss
// 1. Functions first
@import "../node_modules/@ouds/web-common/scss/config";
@import "../node_modules/@ouds/web-common/scss/functions";

// 2. Brand tokens
@import "../node_modules/@ouds/web-orange/scss/tokens";

// 3. Your variable overrides here

// 4. Required stylesheets
@import "../node_modules/@ouds/web-common/scss/variables";
@import "../node_modules/@ouds/web-common/scss/variables-dark";

// 5. Map overrides here

// 6. Required parts
@import "../node_modules/@ouds/web-common/scss/maps";
@import "../node_modules/@ouds/web-common/scss/mixins";
@import "../node_modules/@ouds/web-common/scss/root";

// 7. Optional partials
@import "../node_modules/@ouds/web-common/scss/utilities";
@import "../node_modules/@ouds/web-common/scss/reboot";
@import "../node_modules/@ouds/web-common/scss/type";
@import "../node_modules/@ouds/web-common/scss/images";
@import "../node_modules/@ouds/web-common/scss/containers";
@import "../node_modules/@ouds/web-common/scss/grid";
@import "../node_modules/@ouds/web-common/scss/helpers";

// 8. Utilities API last
@import "../node_modules/@ouds/web-common/scss/utilities/api";

// 9. Custom code here
```

## Variable defaults

All variables use `!default`. Override before import:

```scss
@import "../node_modules/@ouds/web-common/scss/config";
@import "../node_modules/@ouds/web-common/scss/functions";
@import "../node_modules/@ouds/web-orange/scss/tokens";

// Overrides
$body-bg: #000;
$body-color: #111;

@import "../node_modules/@ouds/web-common/scss/variables";
// ... rest of imports
```

## Maps

### Modify

```scss
$primary: #0074d9;
```

### Add to map

```scss
$custom-colors: (
  "custom-color": #900,
);
$theme-colors: map-merge($theme-colors, $custom-colors);
```

### Remove from map

```scss
// After variables import, before maps import:
$theme-colors: map-remove($theme-colors, "info", "light", "dark");
```

## Functions

- `tint-color($color, $weight)`: lighten with white
- `shade-color($color, $weight)`: darken with black
- `shift-color($color, $weight)`: tint if negative, shade if positive
- `color-contrast($color)`: returns `#fff` or `#000` for WCAG compliance
- `escape-svg($string)`: escape `<`, `>`, `#` for SVG data URIs

## Mixins

### Color scheme

```scss
.custom-element {
  @include color-scheme(light) {
    /* light styles */
  }
  @include color-scheme(dark) {
    /* dark styles */
  }
}
```
