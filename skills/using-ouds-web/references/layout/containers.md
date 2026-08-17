# Containers

Fundamental layout building block. Required when using the default grid system.

> **Not Bootstrap:** OUDS Web uses `.container-fluid` only (no fixed `.container`). The `.container` class and responsive `.container-{breakpoint}` are only available with `$enable-bootstrap-compatibility: true`.

## Recommended Usage

Use `.container-fluid` with `.container-max-width`:

```html
<div class="container-fluid container-max-width">
  <!-- Content here -->
</div>
```

### `.container-fluid`

- `width: 100%` at all breakpoints
- Responsive margins (padding) per breakpoint

### `.container-max-width`

- Pair with `.container-fluid`
- After `2xl` breakpoint: limits container width to 1680px (including margins), margins to 80px per side, gutters to 32px

## Container Padding

Extra padding applied on containers per breakpoint via Sass mixin. Each breakpoint has its own margin token (e.g. `$ouds-grid-2xs-margin`, `$ouds-grid-xs-margin`, etc.).

## Bootstrap Compatibility Containers

Only with `$enable-bootstrap-compatibility: true`:

```html
<!-- Fixed-width container (NOT recommended for OUDS Web) -->
<div class="container">...</div>

<!-- Responsive containers -->
<div class="container-sm">100% wide until sm breakpoint</div>
<div class="container-md">100% wide until md breakpoint</div>
<div class="container-lg">100% wide until lg breakpoint</div>
<div class="container-xl">100% wide until xl breakpoint</div>
<div class="container-2xl">100% wide until 2xl breakpoint</div>
<div class="container-xxl">100% wide until 2xl breakpoint</div>
```
