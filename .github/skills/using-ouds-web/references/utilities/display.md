# Display

Responsive display utility classes to toggle the CSS `display` property.

## Notation

- `.d-{value}` — applies from `2xs` (min-width: 0) and up
- `.d-{breakpoint}-{value}` — applies from that breakpoint up

> **Not Bootstrap:** OUDS Web breakpoints are `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl` (the base `2xs` has no abbreviation). Bootstrap uses `sm`, `md`, `lg`, `xl`, `xxl`.

## Values

`none`, `inline`, `inline-block`, `block`, `grid`, `inline-grid`, `table`, `table-cell`, `table-row`, `flex`, `inline-flex`

## Clearfix replacement

> **Not Bootstrap:** No `.clearfix` helper. Use `.d-flow-root` instead, which creates a new block formatting context.

```html
<div class="d-flow-root">
  <button class="float-start">Left</button>
  <button class="float-end">Right</button>
</div>
```

## Hiding elements

| Goal                | Classes                          |
| ------------------- | -------------------------------- |
| Hidden on all       | `.d-none`                        |
| Visible on all      | `.d-block`                       |
| Hidden only on 2xs  | `.d-none .d-xs-block`            |
| Hidden only on xs   | `.d-xs-none .d-sm-block`         |
| Hidden only on sm   | `.d-sm-none .d-md-block`         |
| Hidden only on md   | `.d-md-none .d-lg-block`         |
| Hidden only on lg   | `.d-lg-none .d-xl-block`         |
| Hidden only on xl   | `.d-xl-none .d-2xl-block`        |
| Hidden only on 2xl  | `.d-2xl-none .d-3xl-block`       |
| Hidden only on 3xl  | `.d-3xl-none`                    |
| Visible only on 2xs | `.d-block .d-xs-none`            |
| Visible only on md  | `.d-none .d-md-block .d-lg-none` |

## Print display

- `.d-print-none`, `.d-print-inline`, `.d-print-inline-block`, `.d-print-block`
- `.d-print-grid`, `.d-print-inline-grid`, `.d-print-table`, `.d-print-table-row`, `.d-print-table-cell`
- `.d-print-flex`, `.d-print-inline-flex`

Combine print and responsive classes:

```html
<div class="d-none d-lg-block d-print-block">
  Hide up to large on screen, always show on print
</div>
```
