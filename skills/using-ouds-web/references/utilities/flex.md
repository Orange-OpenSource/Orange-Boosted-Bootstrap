# Flex

Full suite of responsive flexbox utilities. All flex utilities support responsive variants with breakpoint prefixes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`.

## Enable flex

```html
<div class="d-flex">...</div>
<div class="d-inline-flex">...</div>
```

Responsive: `{breakpoint}:d-flex`, `{breakpoint}:d-inline-flex`

## Direction

- `.flex-row`, `.flex-row-reverse`
- `.flex-column`, `.flex-column-reverse`

Responsive: `{breakpoint}:flex-row`, `{breakpoint}:flex-column`, etc.

## Justify content

- `.justify-content-start`
- `.justify-content-end`
- `.justify-content-center`
- `.justify-content-between`
- `.justify-content-around`
- `.justify-content-evenly`

Responsive: `{breakpoint}:justify-content-{value}`

## Align items

- `.align-items-start`
- `.align-items-end`
- `.align-items-center`
- `.align-items-baseline`
- `.align-items-stretch`

Responsive: `{breakpoint}:align-items-{value}`

## Align self

- `.align-self-start`
- `.align-self-end`
- `.align-self-center`
- `.align-self-baseline`
- `.align-self-stretch`

Responsive: `{breakpoint}:align-self-{value}`

## Fill

`.flex-fill` — forces sibling elements to widths equal to their content while using all available space.

Responsive: `{breakpoint}:flex-fill`

## Grow and shrink

- `.flex-grow-0`, `.flex-grow-1`
- `.flex-shrink-0`, `.flex-shrink-1`

Responsive: `{breakpoint}:flex-grow-{0|1}`, `{breakpoint}:flex-shrink-{0|1}`

## Auto margins

Use `.me-auto` or `.ms-auto` on flex items to push siblings:

```html
<div class="d-flex">
  <div class="me-auto">Pushed right</div>
  <div>Item</div>
</div>
```

Combine with `align-items` and `flex-column` for vertical auto-margin:

```html
<div class="d-flex align-items-start flex-column" style="height: 200px">
  <div class="mb-auto">Top item</div>
  <div>Bottom item</div>
</div>
```

## Wrap

- `.flex-nowrap` (browser default)
- `.flex-wrap`
- `.flex-wrap-reverse`

Responsive: `{breakpoint}:flex-nowrap`, `{breakpoint}:flex-wrap`, `{breakpoint}:flex-wrap-reverse`

## Order

- `.order-0` through `.order-5`
- `.order-first` (`order: -1`), `.order-last` (`order: 6`)

Responsive: `{breakpoint}:order-{0-5}`, `{breakpoint}:order-first`, `{breakpoint}:order-last`

## Align content

For multi-line flex containers (requires `flex-wrap`):

- `.align-content-start`
- `.align-content-end`
- `.align-content-center`
- `.align-content-between`
- `.align-content-around`
- `.align-content-stretch`

Responsive: `{breakpoint}:align-content-{value}`
