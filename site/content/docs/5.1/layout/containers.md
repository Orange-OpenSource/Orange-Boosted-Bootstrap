---
layout: docs
title: Containers
description: Containers are a fundamental building block of Boosted that contain, pad, and align your content within a given device or viewport.
group: layout
toc: true
---

## How they work

Containers are the most basic layout element in Boosted and are **required when using our default grid system**. Containers are used to contain, pad, and (sometimes) center the content within them. While containers *can* be nested, most layouts do not require a nested container.

Boosted comes with three different containers:

- `.container`, which sets a static `max-width` between each responsive breakpoint
- `.container-fluid`, which sets the `width: 100%` and overrides `max-width: 100vw - $breakpoint_margin` at all breakpoints
- `.container-{breakpoint}`, which follow the `.container-fluid` behavior until the specified breakpoint, then it follows the `.container` one
  - **`.container-xxl` is the one to use for Orange sites in order to be compliant with the Orange brand**

The table below illustrates how each container's `max-width` compares to the original `.container` and `.container-fluid` across each breakpoint.

See them in action and compare them in our [Grid example]({{< docsref "/examples/grid#containers" >}}).

Please note that we apply an extra-padding on our containers (see [our mixins](#mixins))

<table class="table">
  <thead>
    <tr>
      <td class="border-dark"></td>
      <th scope="col">
        Extra small<br>
        <span class="fw-normal">&lt;480px</span>
      </th>
      <th scope="col">
        Small<br>
        <span class="fw-normal">&ge;480px</span>
      </th>
      <th scope="col">
        Medium<br>
        <span class="fw-normal">&ge;768px</span>
      </th>
      <th scope="col">
        Large<br>
        <span class="fw-normal">&ge;1024px</span>
      </th>
      <th scope="col">
        X-Large<br>
        <span class="fw-normal">&ge;1280px</span>
      </th>
      <th scope="col">
        XX-Large<br>
        <span class="fw-normal">&ge;1440px</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="fw-normal"><code>.container</code></th>
      <td>312px</td>
      <td>468px</td>
      <td>744px</td>
      <td>960px</td>
      <td>1200px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-sm</code></th>
      <td class="text-muted">100vw -<br/>(2 * 4px)</td>
      <td>468px</td>
      <td>744px</td>
      <td>960px</td>
      <td>1200px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-md</code></th>
      <td class="text-muted">100vw -<br/>(2 * 4px)</td>
      <td class="text-muted">100vw -<br/>(2 * 6px)</td>
      <td>744px</td>
      <td>960px</td>
      <td>1200px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-lg</code></th>
      <td class="text-muted">100vw -<br/>(2 * 4px)</td>
      <td class="text-muted">100vw -<br/>(2 * 6px)</td>
      <td class="text-muted">100vw -<br/>(2 * 12px)</td>
      <td>960px</td>
      <td>1140px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-xl</code></th>
      <td class="text-muted">100vw -<br/>(2 * 4px)</td>
      <td class="text-muted">100vw -<br/>(2 * 6px)</td>
      <td class="text-muted">100vw -<br/>(2 * 12px)</td>
      <td class="text-muted">100vw -<br/>(2 * 32px)</td>
      <td>1140px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-xxl</code></th>
      <td class="text-muted">100vw -<br/>(2 * 4px)</td>
      <td class="text-muted">100vw -<br/>(2 * 6px)</td>
      <td class="text-muted">100vw -<br/>(2 * 12px)</td>
      <td class="text-muted">100vw -<br/>(2 * 32px)</td>
      <td class="text-muted">100vw -<br/>(2 * 40px)</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-fluid</code></th>
      <td class="text-muted">100vw -<br/>(2 * 4px)</td>
      <td class="text-muted">100vw -<br/>(2 * 6px)</td>
      <td class="text-muted">100vw -<br/>(2 * 12px)</td>
      <td class="text-muted">100vw -<br/>(2 * 32px)</td>
      <td class="text-muted">100vw -<br/>(2 * 40px)</td>
      <td class="text-muted">100vw -<br/>(2 * 60px)</td>
    </tr>
  </tbody>
</table>

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

## Sass

### Variables

As shown above, Boosted generates a series of predefined container classes to help you build the layouts you desire. You may customize these predefined container classes by modifying the Sass map (found in `_variables.scss`) that powers them:

{{< scss-docs name="container-max-widths" file="scss/_variables.scss" >}}

### Mixins

In addition to customizing the Sass, you can also create your own containers with our Sass mixin.

{{< scss-docs name="container-mixins" file="scss/mixins/_container.scss" >}}

```scss
// Usage
.custom-container {
  @include make-container();
}
```

For more information and examples on how to modify our Sass maps and variables, please refer to [the Sass section of the Grid documentation]({{< docsref "/layout/grid#sass" >}}).
