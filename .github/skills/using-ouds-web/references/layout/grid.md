# Grid System

12-column flexbox grid with 8 responsive tiers.

## Basic Example

```html
<div class="container-fluid text-center">
  <div class="row">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```

## How It Works

- **8 responsive breakpoints**: 2xs, xs, sm, md, lg, xl, 2xl, 3xl
- **Container**: use `.container-fluid` (required)
- **Rows**: wrappers for columns, use negative margins to offset gutter padding
- **12 columns** per row (e.g. `col-4` spans 4 of 12)
- **Gutters**: responsive, use `.gx-*`, `.gy-*`, `.g-*` classes with OUDS spacing tokens
- **Class prefix per breakpoint**: `.col-`, `.col-xs-`, `.col-sm-`, `.col-md-`, `.col-lg-`, `.col-xl-`, `.col-2xl-`, `.col-3xl-`

With `$enable-bootstrap-compatibility: true`, `.col-xxl-*` is also available.

## Auto-Layout Columns

### Equal-width

```html
<div class="row">
  <div class="col">1 of 3</div>
  <div class="col">2 of 3</div>
  <div class="col">3 of 3</div>
</div>
```

### Setting One Column Width

```html
<div class="row">
  <div class="col">Auto</div>
  <div class="col-6">Fixed 6-col</div>
  <div class="col">Auto</div>
</div>
```

### Variable Width Content

```html
<div class="row">
  <div class="col col-lg-2">Fixed</div>
  <div class="col-md-auto">Variable width content</div>
  <div class="col col-lg-2">Fixed</div>
</div>
```

## Responsive Classes

### Mix and Match

```html
<div class="row">
  <div class="col-md-8">.col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
```

### Row Columns

Control number of columns per row:

```html
<div class="row row-cols-2">
  <div class="col">Column</div>
  <div class="col">Column</div>
  <div class="col">Column</div>
  <div class="col">Column</div>
</div>

<!-- Responsive -->
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
  <div class="col">Column</div>
  <div class="col">Column</div>
  <div class="col">Column</div>
  <div class="col">Column</div>
</div>
```

## Nesting

```html
<div class="row">
  <div class="col-sm-3">Level 1</div>
  <div class="col-sm-9">
    <div class="row">
      <div class="col-8 col-sm-6">Level 2</div>
      <div class="col-4 col-sm-6">Level 2</div>
    </div>
  </div>
</div>
```

## Sass Mixins

```scss
.example-container {
  @include make-container();
  width: 800px;
}
.example-row {
  @include make-row();
}
.example-col {
  @include make-col-ready();
  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(8);
  }
}
```

## Column Width Guidelines

For smaller breakpoints (`2xs`, `xs`, `sm`): use columns in **multiples of 3**.
For medium+ (`md`, `lg`): use columns in **multiples of 2**.
