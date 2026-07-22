# CSS Grid

Experimental opt-in layout system built on CSS Grid (alternative to the flexbox grid).

## Enable

```scss
$enable-grid-classes: false;
$enable-cssgrid: true;
```

## Key Differences from Flexbox Grid

| Flexbox Grid               | CSS Grid                        |
| -------------------------- | ------------------------------- |
| `.row`                     | `.grid`                         |
| `.col-*`                   | `.g-col-*`                      |
| Gutters via padding        | Gaps via `gap` property         |
| No negative margins needed | Inline styles for customization |

- Flex utilities don't affect CSS Grid columns
- `.grid` has no negative margins
- Customize via CSS variables: `--bs-columns`, `--bs-gap`

## Examples

### Three Equal Columns

```html
<div class="grid text-center">
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
</div>
```

### Responsive

```html
<div class="grid text-center">
  <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
  <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
  <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
</div>
```

### Starts (Offsets)

```html
<div class="grid text-center">
  <div class="g-col-3 g-start-2">.g-col-3 .g-start-2</div>
  <div class="g-col-4 g-start-6">.g-col-4 .g-start-6</div>
</div>
```

### Auto Columns

Without classes, each grid item is automatically 1 column:

```html
<div class="grid text-center">
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <!-- ... up to 12 -->
</div>
```

### Nesting with Custom Columns

```html
<div class="grid" style="--bs-columns: 3;">
  <div>
    First auto-column
    <div class="grid">
      <div>Inherits 3 cols</div>
      <div>Inherits 3 cols</div>
    </div>
  </div>
  <div>
    Second auto-column
    <div class="grid" style="--bs-columns: 12;">
      <div class="g-col-6">6 of 12</div>
      <div class="g-col-4">4 of 12</div>
      <div class="g-col-2">2 of 12</div>
    </div>
  </div>
</div>
```
