# Columns

Alignment, ordering, and offsetting via the flexbox grid system.

## Alignment

### Vertical Alignment (on row)

```html
<div class="row align-items-start">...</div>
<div class="row align-items-center">...</div>
<div class="row align-items-end">...</div>
```

### Vertical Alignment (per column)

```html
<div class="row">
  <div class="col align-self-start">...</div>
  <div class="col align-self-center">...</div>
  <div class="col align-self-end">...</div>
</div>
```

### Horizontal Alignment

```html
<div class="row justify-content-start">...</div>
<div class="row justify-content-center">...</div>
<div class="row justify-content-end">...</div>
<div class="row justify-content-around">...</div>
<div class="row justify-content-between">...</div>
<div class="row justify-content-evenly">...</div>
```

### Column Wrapping

More than 12 columns wrap to a new line. Force breaks with:

```html
<div class="w-100"></div>
<!-- Force column break -->
<div class="w-100 d-none d-md-block"></div>
<!-- Break at md+ only -->
```

## Reordering

### Order Classes

`.order-1` through `.order-5`, responsive: `.order-{breakpoint}-{1-5}`.

```html
<div class="col order-5">Second in DOM, visually last</div>
<div class="col order-1">Third in DOM, visually first</div>
```

Special: `.order-first` (`order: -1`), `.order-last` (`order: 6`).

### Offsetting

```html
<div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
```

Reset offsets: `.offset-md-0`.

### Margin Utilities

```html
<div class="col-md-4 ms-auto">Push right with margin</div>
```

## Standalone Column Classes

`.col-*` classes work outside `.row` (paddings omitted):

```html
<div class="col-3 p-large">width: 25%</div>
<div class="col-sm-9 p-large">width: 75% above sm</div>
```
