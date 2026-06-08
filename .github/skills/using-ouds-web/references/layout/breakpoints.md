# Breakpoints

8 responsive breakpoints for controlling layout across device sizes. Mobile-first with `min-width` media queries.

> **Not Bootstrap:** Bootstrap has 6 breakpoints (`xs` through `xxl`). OUDS Web has 8: `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`.

## Available Breakpoints

| Breakpoint | Class infix | Min-width        |
| ---------- | ----------- | ---------------- |
| 2x-small   | _(none)_    | <320px (default) |
| X-small    | `xs`        | >=320px          |
| Small      | `sm`        | >=480px          |
| Medium     | `md`        | >=736px          |
| Large      | `lg`        | >=1024px         |
| X-large    | `xl`        | >=1320px         |
| 2x-large   | `2xl`       | >=1640px         |
| 3x-large   | `3xl`       | >=1880px         |

With `$enable-bootstrap-compatibility: true`, `xxl` is an alias for `2xl`.

Customizable via `$grid-breakpoints` Sass map in `_variables.scss`.

## Media Query Mixins

### Min-width (mobile-first)

```scss
// No media query needed for 2xs (it's the default)
@include media-breakpoint-up(xs) { ... }
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(2xl) { ... }
@include media-breakpoint-up(3xl) { ... }
```

### Max-width

```scss
@include media-breakpoint-down(xs) { ... }  // <320px
@include media-breakpoint-down(sm) { ... }  // <480px
@include media-breakpoint-down(md) { ... }  // <736px
// etc.
```

Subtracts `.02px` from breakpoint for `max-width` value.

### Single breakpoint

```scss
@include media-breakpoint-only(md) { ... }
// Outputs: @media (min-width: 736px) and (max-width: 1023.98px) { ... }
```

### Between breakpoints

```scss
@include media-breakpoint-between(md, xl) { ... }
// Outputs: @media (min-width: 736px) and (max-width: 1319.98px) { ... }
```
