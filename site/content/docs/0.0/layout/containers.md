---
layout: docs
title: Containers
description: Containers are a fundamental building block of OUDS Web that contain, pad, and align your content within a given device or viewport.
group: layout
aliases:
  - "/docs/layout/containers/"
toc: true
---

## How they work

Containers are the most basic layout element in OUDS Web and are **required when using our default grid system**. Containers are used to contain, pad, and (sometimes) center the content within them. While containers *can* be nested, most layouts do not require a nested container.

OUDS Web comes with three different containers:

- `.container`, which sets a static `max-width` between each responsive breakpoint
- `.container-{breakpoint}`, which follow the `.container-fluid` behavior until the specified breakpoint, then it follows the `.container` one
  - **`.container-xxl` is the one to use for Orange sites in order to be compliant with the Orange brand**
- `.container-fluid`, which sets the `width: 100%` and overrides `max-width: 100vw - $breakpoint_margin` at all breakpoints

The table below illustrates how each container's `max-width` compares to the original `.container` and `.container-fluid` across each breakpoint.

See them in action and compare them in our [Grid example]({{< docsref "/examples/grid#containers" >}}).

Please note that we apply an extra-padding on our containers (see [our mixins](#mixins))

{{< bs-table "table" >}}
|  | XXX-small<div class="fw-normal">&lt;360px</div> | XX-small<div class="fw-normal">&ge;360px</div> | X-small<div class="fw-normal">&ge;390px</div> | Small<div class="fw-normal">&ge;480px</div> | Medium<div class="fw-normal">&ge;768px</div> | Large<div class="fw-normal">&ge;1024px</div> | X-Large<div class="fw-normal">&ge;1440px</div> | XX-Large<div class="fw-normal">&ge;1680px</div> | XXX-Large<div class="fw-normal">&ge;1920px</div> |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `.container` | ?px | 328px | 342px | 424px | 704px | 944px | 1328px | 1520px | 1696px |
| `.container-2xs` | <span class="text-body-secondary">100vw -<br>(2 * ?px)</span> | 328px | 342px | 424px | 704px | 944px | 1328px | 1520px | 1696px |
| `.container-xs` | <span class="text-body-secondary">100vw -<br>(2 * ?px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 16px)</span> | 342px | 424px | 704px | 944px | 1328px | 1520px | 1696px |
| `.container-sm` | <span class="text-body-secondary">100vw -<br>(2 * ?px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 16px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 24px)</span> | 424px | 704px | 944px | 1328px | 1520px | 1696px |
| `.container-md` | <span class="text-body-secondary">100vw -<br>(2 * ?px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 16px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 24px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 28px)</span> | 704px | 944px | 1328px | 1520px | 1696px |
| `.container-lg` | <span class="text-body-secondary">100vw -<br>(2 * ?px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 16px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 24px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 28px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 32px)</span> | 944px | 1328px | 1520px | 1696px |
| `.container-xl` | <span class="text-body-secondary">100vw -<br>(2 * ?px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 16px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 24px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 28px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 32px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 40px)</span> | 1328px | 1520px | 1696px |
| `.container-2xl` | <span class="text-body-secondary">100vw -<br>(2 * ?px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 16px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 24px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 28px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 32px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 40px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 56px)</span> | 1520px | 1696px |
| `.container-3xl` | <span class="text-body-secondary">100vw -<br>(2 * ?px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 16px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 24px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 28px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 32px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 40px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 56px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 80px)</span> | 1696px |
| `.container-fluid` | <span class="text-body-secondary">100vw -<br>(2 * ?px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 16px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 24px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 28px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 32px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 40px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 56px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 80px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 112px)</span> |
{{< /bs-table >}}

<!--
360px - 16 * 2 = 328
390px - 24 * 2 = 342
480px - 28 * 2 = 424
768px - 32 * 2 = 704
1024px - 40 * 2 = 944
1440px - 56 * 2 = 1328
1680px - 80 * 2 = 1520
1920px - 112 * 2 = 1696
-->

## Default container

Our default `.container` class is a responsive, fixed-width container, meaning its `max-width` changes at each breakpoint.

```html
<div class="container">
  <!-- Content here -->
</div>
```

## Responsive containers

Responsive containers allow you to specify a class that follows the `.container-fluid` behavior until the specified breakpoint is reached, after which we apply `max-width`s for each of the higher breakpoints. For example, `.container-sm` behaves like the `.container-fluid` to start until the `sm` breakpoint is reached, where it will scale up with `md`, `lg`, `xl`, and `xxl`.

```html
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```

## Fluid containers

Use `.container-fluid` for a full width container with minimum margins, spanning almost the entire width of the viewport.

```html
<div class="container-fluid">
  ...
</div>
```

## CSS

### Sass variables

As shown above, OUDS Web generates a series of predefined container classes to help you build the layouts you desire. You may customize these predefined container classes by modifying the Sass map (found in `_variables.scss`) that powers them:

{{< scss-docs name="container-max-widths" file="scss/_variables.scss" >}}

For more information and examples on how to modify our Sass maps and variables, please refer to [the Sass section of the Grid documentation]({{< docsref "/layout/grid#css" >}}).

### Sass mixins

In addition to customizing the Sass, you can also create your own containers with our Sass mixin.

{{< scss-docs name="container-mixins" file="scss/mixins/_container.scss" >}}

```scss
// Usage
.custom-container {
  @include make-container();
}
```
