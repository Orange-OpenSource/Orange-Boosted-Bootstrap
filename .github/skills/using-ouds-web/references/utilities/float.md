# Float

Responsive float utilities using the CSS `float` property. All include `!important`. Float utilities have no effect on flex items.

## Classes

- `.float-start`, `.float-end`, `.float-none`

## Responsive variants

`.float-{breakpoint}-{start|end|none}`

> **Not Bootstrap:** OUDS Web breakpoints are `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`. Bootstrap uses `sm`, `md`, `lg`, `xl`, `xxl`.

```html
<div class="float-start">Float start on all viewport sizes</div>
<div class="float-md-end">Float end on md and wider</div>
<div class="float-none">Don't float</div>
```

## Clearing floats

Use `.d-flow-root` on the parent element (not `.clearfix`).
