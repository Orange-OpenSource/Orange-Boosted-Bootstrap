# Component Architecture

How OUDS Web components are built with base and modifier classes.

## Base-Modifier Pattern

- **Base class**: groups shared properties (e.g. `.btn` for `display`, `padding`, `border-width`)
- **Modifier class**: variant-specific styles (e.g. `.btn-strong` for colors)

```html
<button class="btn btn-strong">Strong button</button>
```

## Responsive Variations

Generated from Sass loops using `$grid-breakpoints` map with media query includes.

## Creating Custom Components

Follow the same base-modifier approach:

```scss
// Base class
.callout {
}

// Modifier classes
.callout-info {
}
.callout-warning {
}
.callout-danger {
}
```

```html
<div class="callout callout-info">...</div>
```
