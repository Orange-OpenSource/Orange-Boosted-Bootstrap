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

- `.container`, which sets a static `max-width` between each responsive breakpoint. **This container should not be used for Orange sites.**
- `.container-{breakpoint}`, which follow the `.container-fluid` behavior until the specified breakpoint, then it follows the `.container` one.
- `.container-fluid`, which sets the `width: 100%` at all breakpoints. **`.container-fluid` is the container recommended for Orange sites in order to be compliant with the Orange brand. It should be associated to `.max-width-public-website` or `.max-width-specific-tools`** (See [Fluid containers](#fluid-containers) for more information).

The table below illustrates how each container's `max-width` compares to the original `.container` and `.container-fluid` across each breakpoint.

See them in action and compare them in our [Grid example]({{< docsref "/examples/grid#containers" >}}) and [Grid system example]({{< docsref "/examples/grid-system" >}}).

Please note that we apply an extra-padding on our containers (see [our mixin](#sass-mixins)).

{{< bs-table "table" >}}
|  | 2X-small<div class="fw-normal">&lt;390px</div> | X-small<div class="fw-normal">&ge;390px</div> | Small<div class="fw-normal">&ge;480px</div> | Medium<div class="fw-normal">&ge;736px</div> | Large<div class="fw-normal">&ge;1024px</div> | X-Large<div class="fw-normal">&ge;1320px</div> | 2X-Large<div class="fw-normal">&ge;1640px</div> | 3X-Large<div class="fw-normal">&ge;1880px</div> |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `.container` | <span class="text-body-secondary">100% -<br>(2 * 16px)</span> | 342px | 424px | 672px | 944px | 1208px | 1480px | 1656px |
| `.container-xs` | <span class="text-body-secondary">100% -<br>(2 * 16px)</span> | 342px | 424px | 672px | 944px | 1208px | 1480px | 1656px |
| `.container-sm` | <span class="text-body-secondary">100% -<br>(2 * 16px)</span> | <span class="text-body-secondary">100% -<br>(2 * 24px)</span> | 424px | 672px | 944px | 1208px | 1480px | 1656px |
| `.container-md` | <span class="text-body-secondary">100% -<br>(2 * 16px)</span> | <span class="text-body-secondary">100% -<br>(2 * 24px)</span> | <span class="text-body-secondary">100% -<br>(2 * 28px)</span> | 672px | 944px | 1208px | 1480px | 1656px |
| `.container-lg` | <span class="text-body-secondary">100% -<br>(2 * 16px)</span> | <span class="text-body-secondary">100% -<br>(2 * 24px)</span> | <span class="text-body-secondary">100% -<br>(2 * 28px)</span> | <span class="text-body-secondary">100% -<br>(2 * 32px)</span> | 944px | 1208px | 1480px | 1656px |
| `.container-xl` | <span class="text-body-secondary">100% -<br>(2 * 16px)</span> | <span class="text-body-secondary">100% -<br>(2 * 24px)</span> | <span class="text-body-secondary">100% -<br>(2 * 28px)</span> | <span class="text-body-secondary">100% -<br>(2 * 32px)</span> | <span class="text-body-secondary">100% -<br>(2 * 40px)</span> | 1208px | 1480px | 1656px |
| `.container-2xl` | <span class="text-body-secondary">100% -<br>(2 * 16px)</span> | <span class="text-body-secondary">100% -<br>(2 * 24px)</span> | <span class="text-body-secondary">100% -<br>(2 * 28px)</span> | <span class="text-body-secondary">100% -<br>(2 * 32px)</span> | <span class="text-body-secondary">100% -<br>(2 * 40px)</span> | <span class="text-body-secondary">100% -<br>(2 * 56px)</span> | 1480px | 1656px |
| `.container-3xl` | <span class="text-body-secondary">100% -<br>(2 * 16px)</span> | <span class="text-body-secondary">100% -<br>(2 * 24px)</span> | <span class="text-body-secondary">100% -<br>(2 * 28px)</span> | <span class="text-body-secondary">100% -<br>(2 * 32px)</span> | <span class="text-body-secondary">100% -<br>(2 * 40px)</span> | <span class="text-body-secondary">100% -<br>(2 * 56px)</span> | <span class="text-body-secondary">100% -<br>(2 * 80px)</span> | 1656px |
| `.container-fluid` | <span class="text-body-secondary">100% -<br>(2 * 16px)</span> | <span class="text-body-secondary">100% -<br>(2 * 24px)</span> | <span class="text-body-secondary">100% -<br>(2 * 28px)</span> | <span class="text-body-secondary">100% -<br>(2 * 32px)</span> | <span class="text-body-secondary">100% -<br>(2 * 40px)</span> | <span class="text-body-secondary">100% -<br>(2 * 56px)</span> | <span class="text-body-secondary">100% -<br>(2 * 80px)</span> | <span class="text-body-secondary">100% -<br>(2 * 112px)</span> |
{{< /bs-table >}}

{{< bootstrap-compatibility >}}

Includes support for xxl breakpoint, defined like 2xl.

{{< bs-table "table" >}}
|  | 2X-small<div class="fw-normal">&lt;390px</div> | X-small<div class="fw-normal">&ge;390px</div> | Small<div class="fw-normal">&ge;480px</div> | Medium<div class="fw-normal">&ge;736px</div> | Large<div class="fw-normal">&ge;1024px</div> | X-Large<div class="fw-normal">&ge;1320px</div> | 2X-Large<div class="fw-normal">&ge;1640px</div> | 3X-Large<div class="fw-normal">&ge;1880px</div> |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `.container-xxl` | <span class="text-body-secondary">100vw -<br>(2 * 16px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 24px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 28px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 32px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 40px)</span> | <span class="text-body-secondary">100vw -<br>(2 * 56px)</span> | 1480px | 1656px |
{{< /bs-table >}}

{{< /bootstrap-compatibility >}}


## Default container

Our default `.container` class is a responsive, fixed-width container, meaning its `max-width` changes at each breakpoint.

**This container should not be used for Orange sites.**

```html
<div class="container">
  <!-- Content here -->
</div>
```

## Responsive containers

Responsive containers allow you to specify a class that follows the `.container-fluid` behavior until the specified breakpoint is reached, after which we apply `max-width`s for each of the higher breakpoints. For example, `.container-sm` behaves like the `.container-fluid` to start until the `sm` breakpoint is reached, where it will scale up with `md`, `lg`, `xl`, `2xl` and `3xl`.

```html
<div class="container-xs">100% wide until extra small breakpoint</div>
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-2xl">100% wide until extra extra large breakpoint</div>
<div class="container-3xl">100% wide until extra extra extra large breakpoint</div>
```

## Fluid containers

Use `.container-fluid` for a full width container with minimum margins, spanning almost the entire width of the viewport.

**`.container-fluid` is the container recommended for Orange sites in order to be compliant with the Orange brand.**

```html
<div class="container-fluid">
  ...
</div>
```

This container is the default one to use, associated or not with one of the following class:
- `.max-width-public-website` to be used for public websites. After breakpoint `2xl`, this class:
  - limits the container width to 1680px (including margins),
  - limits container margin to 80px each side,
  - limits gutters width to 32px.
- `.max-width-specific-tools` to be used for specific tools which need more horizontal space. After breakpoint `3xl`, this class:
  - limits the container width to 1920px (including margins).

They are defined as follows:

{{< scss-docs name="containers-max" file="scss/_containers.scss" >}}

Comparison between `.container-fluid`, `.container-fluid` width `.max-width-public-website` and `.container-fluid` width `.max-width-specific-tools` can be seen in the following table:

{{< bs-table "table" >}}
|  | X-Large<div class="fw-normal">&ge;1320px</div> | 2X-Large<div class="fw-normal">&ge;1640px</div> | 3X-Large<div class="fw-normal">&ge;1880px</div> |
| --- | --- | --- | --- | --- |
| `.container-fluid` | <ul><li>Width `100% - (2 * 56px)`</li><li>Margin `2 * 56px`</li><li>Gutter `32px`</li></ul> | <ul><li>Width `100% - (2 * 80px)`</li><li>Margin `2 * 80px`</li><li>Gutter `32px`</li></ul> | <ul><li>Width `100% - (2 * 112px)`</li><li>Margin `2 * 112px`</li><li>Gutter `40px`</li></ul> |
| `.container-fluid`<br>with `.max-width-public-website` | <ul><li>Width `100% - (2 * 56px)`</li><li>Margin `2 * 56px`</li><li>Gutter `32px`</li></ul> | <ul><li>Width `100% - (2 * 80px)`</li><li><b>Max-width `1520px`</b></li><li>Margin `2 * 80px`</li><li>Gutter `32px`</li></ul> | <ul><li><b>Width `1520px`</b></li><li><b>Margin `2 * 80px`</b></li><li><b>Gutter `32px`</b></li></ul> |
| `.container-fluid`<br>with `.max-width-specific-tools` | <ul><li>Width `100% - (2 * 56px)`</li><li>Margin `2 * 56px`</li><li>Gutter `32px`</li></ul> | <ul><li>Width `100% - (2 * 80px)`</li><li>Margin `2 * 80px`</li><li>Gutter `32px`</li></ul> | <ul><li>Width `100% - (2 * 112px)`</li><li><b>Max-width `1696px`</b></li><li>Margin `2 * 112px`</li><li>Gutter `40px`</li></ul> |
{{< /bs-table >}}

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
