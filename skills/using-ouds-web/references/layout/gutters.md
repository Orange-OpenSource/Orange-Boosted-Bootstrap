# Gutters

Padding between columns, used to responsively space and align content.

> **Not Bootstrap:** Gutter classes use OUDS spacing token names (`none`, `3xsmall`...`5xlarge`), not Bootstrap's numeric scale (0-5).

## Gutter Scale

Values: `none`, `3xsmall`, `2xsmall`, `xsmall`, `small`, `medium`, `large`, `xlarge`, `2xlarge`, `3xlarge`, `4xlarge`, `5xlarge`.

## Classes

| Class   | Direction                    |
| ------- | ---------------------------- |
| `.gx-*` | Horizontal gutters           |
| `.gy-*` | Vertical gutters             |
| `.g-*`  | Both horizontal and vertical |

## Horizontal Gutters

```html
<div class="container-fluid px-large text-center">
  <div class="row gx-5xlarge">
    <div class="col"><div class="p-large">Column</div></div>
    <div class="col"><div class="p-large">Column</div></div>
  </div>
</div>
```

Alternatively, wrap with `.overflow-hidden`:

```html
<div class="container-fluid overflow-hidden">
  <div class="row gx-5xlarge">...</div>
</div>
```

## Vertical Gutters

```html
<div class="container-fluid overflow-hidden">
  <div class="row gy-5xlarge">
    <div class="col-6"><div class="p-large">Column</div></div>
    <div class="col-6"><div class="p-large">Column</div></div>
    <div class="col-6"><div class="p-large">Column</div></div>
    <div class="col-6"><div class="p-large">Column</div></div>
  </div>
</div>
```

## Both Directions

```html
<div class="row g-small">
  <div class="col-6"><div class="p-large">Column</div></div>
  <div class="col-6"><div class="p-large">Column</div></div>
</div>
```

## Responsive Gutters

```html
<div class="row lg:row-cols-5 g-small lg:g-medium">
  <div class="col"><div class="p-large">Column</div></div>
  ...
</div>
```

## No Gutters

```html
<div class="row g-none">
  <div class="sm:col-6 md:col-8">No gutter</div>
  <div class="col-6 md:col-4">No gutter</div>
</div>
```

For edge-to-edge: drop `.container-fluid`, add `.mx-none` to `.row`.

## Nesting

Nested `.row`s reset their gutters to follow the main grid gutters.
