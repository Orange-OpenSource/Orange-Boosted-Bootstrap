# Spacing

Responsive margin, padding, and gap utilities.

> **Not Bootstrap:** OUDS Web uses named spacing tokens instead of Bootstrap's numeric `0`-`5` scale. Two systems exist: **fixed** (pixel-based, constant across breakpoints) and **scaled** (responsive, changes per breakpoint).

## Fixed spacing

Format: `{property}{sides}-{size}` (base) or `{breakpoint}:{property}{sides}-{size}` (responsive)

**Property:** `m` (margin), `p` (padding)

**Sides:** `t` (top), `b` (bottom), `s` (start/left), `e` (end/right), `x` (inline), `y` (block), blank (all)

**Sizes:** `none`, `3xsmall`, `2xsmall`, `xsmall`, `small`, `medium`, `large`, `xlarge`, `2xlarge`, `3xlarge`, `4xlarge`, `5xlarge`, `auto` (margin only)

```html
<div class="mt-none">No top margin</div>
<div class="p-large">Large padding all sides</div>
<div class="mx-auto" style="width: 200px;">Horizontally centered</div>
<div class="px-small">Small horizontal padding</div>
<div class="mb-medium lg:mb-xlarge">Medium bottom margin, xlarge from LG</div>
```

## Scaled spacing

Format: `{property}{sides}-scaled-{size}` — automatically responsive, no breakpoint needed.

**Sizes:** `none`, `3xsmall`, `2xsmall`, `xsmall`, `small`, `medium`, `large`, `xlarge`, `2xlarge`, `3xlarge`

Values change across three ranges: mobile (2xs-sm), tablet (md-lg), desktop (xl+).

```html
<div class="mx-scaled-large">Large scaled horizontal margin</div>
<div class="p-scaled-medium">Medium scaled padding</div>
```

Do not mix scaled and fixed classes on the same property — fixed overrides scaled.

## Negative margins

Disabled by default (enable with `$enable-negative-margins: true`). Prefix size with `n`:

```html
<div class="mt-nsmall">Negative small top margin</div>
```

Scaled negative: `{property}{sides}-scaled-n{size}`.

## Gap

Use with `display: grid` or `display: flex`. Uses fixed spacing tokens.

```html
<div class="d-grid gap-large" style="grid-template-columns: 1fr 1fr;">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

Variants: `gap-{size}`, `row-gap-{size}`, `column-gap-{size}`

Scaled gap: `gap-scaled-{size}`, `row-gap-scaled-{size}`, `column-gap-scaled-{size}`

## Grid measures

Two special sizes based on grid layout: `gridgap` and `gridmargin` (responsive via CSS custom properties `--bs-grid-gap` and `--bs-grid-margin`).

```html
<div class="px-gridgap">Grid-gap padding</div>
<div class="mt-gridmargin">Grid-margin top margin</div>
```

### Edge-to-edge containers

Use negative `gridmargin` margin (always available regardless of `$enable-negative-margins`):

```html
<div class="mx-ngridmargin lg:mx-none px-gridmargin py-small lg:px-small">
  Edge to edge container on smaller breakpoints
</div>
```
