# Display

Responsive display utility classes to toggle the CSS `display` property.

## Notation

- `.d-{value}` — applies from `2xs` (min-width: 0) and up
- `{breakpoint}:d-{value}` — applies from that breakpoint up

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
| Hidden only on 2xs  | `.d-none .xs:d-block`              |
| Hidden only on xs   | `.xs:d-none .sm:d-block`           |
| Hidden only on sm   | `.sm:d-none .md:d-block`           |
| Hidden only on md   | `.md:d-none .lg:d-block`           |
| Hidden only on lg   | `.lg:d-none .xl:d-block`           |
| Hidden only on xl   | `.xl:d-none .2xl:d-block`          |
| Hidden only on 2xl  | `.2xl:d-none .3xl:d-block`         |
| Hidden only on 3xl  | `.3xl:d-none`                      |
| Visible only on 2xs | `.d-block .xs:d-none`              |
| Visible only on md  | `.d-none .md:d-block .lg:d-none`   |

## Print display

- `.d-print-none`, `.d-print-inline`, `.d-print-inline-block`, `.d-print-block`
- `.d-print-grid`, `.d-print-inline-grid`, `.d-print-table`, `.d-print-table-row`, `.d-print-table-cell`
- `.d-print-flex`, `.d-print-inline-flex`

Combine print and responsive classes:

```html
<div class="d-none lg:d-block d-print-block">
  Hide up to large on screen, always show on print
</div>
```
