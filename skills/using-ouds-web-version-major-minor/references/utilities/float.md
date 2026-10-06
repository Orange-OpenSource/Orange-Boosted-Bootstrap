# Float

Responsive float utilities using the CSS `float` property. All include `!important`. Float utilities have no effect on flex items.

## Classes

- `.float-start`, `.float-end`, `.float-none`

## Responsive variants

`{breakpoint}:float-{start|end|none}`

> **Not Bootstrap:** OUDS Web breakpoints are `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`. Bootstrap uses `sm`, `md`, `lg`, `xl`, `xxl`.

> **Not Tailwind:** the utility name is `float-start`/`float-end` (Bootstrap-style, logical directions), not Tailwind's `float-left`/`float-right`. See [Breakpoints](../layout/breakpoints.md#not-tailwind).

```html
<div class="float-start">Float start on all viewport sizes</div>
<div class="md:float-end">Float end on md and wider</div>
<div class="float-none">Don't float</div>
```

## Clearing floats

Use `.d-flow-root` on the parent element (not `.clearfix`).
