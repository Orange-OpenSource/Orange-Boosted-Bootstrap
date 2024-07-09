---
layout: docs
title: Title bars
description: Documentation and examples for OUDS Web's exclusive Brand responsive title bars.
group: components
aliases:
  - "/docs/components/title-bars/"
toc: true
---

## How it works

A title bar is designed to display the title of a page and shall be placed right below an [Orange navbar]({{<docsref "/components/orange-navbar">}}).

Being based on spacing and backgrounds utilities, title bars were designed to take `100vw` width.

See them in action in our [examples page]({{<docsref "/examples/title-bars">}}).

## Background color

To change the appearance of a title bar, use our [background utilities]({{<docsref "/utilities/background">}}) such as `.bg-supporting-*`.

When using title bars with the default background color, illustrations can be included as an option, but it's not mandatory.

Supporting colors can also be used as the background color for title bars, but not the supporting light and dark tint colors. When using one of the supporting colors, illustrations must be used.

The image should not overlap on title and the title shouldn't wrap. If this happens, please transform your title bar into a title bar with the default background color without any image.

{{< example class="p-0">}}
<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Title</h1>
  </div>
</div>

<div class="mt-3"></div>

<div class="bg-supporting-green title-bar" data-bs-theme="light">
  <div class="container-xxl">
    <h1 class="display-1">Title</h1>
    <picture>
      <source media="(min-width:1440px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1440.png">
      <source media="(min-width:1280px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1280.png">
      <source media="(min-width:1024px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1024.png">
      <source media="(min-width:768px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-768.png">
      <source media="(min-width:480px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-480.png">
      <source media="(min-width:320px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-320.png">
      <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-320.png" alt="">
    </picture>
  </div>
</div>
{{</ example >}}

## Images

Several options are available to add an image in a title bar.

### `srcset` attribute

We **strongly recommend** to use `srcset` attribute as it is [well supported](https://caniuse.com/srcset) by browsers and allows you to load an image depending on the user's device. However, it might introduce a delay to display the image while resizing.

{{< example class="p-0">}}
<div class="bg-supporting-pink title-bar" data-bs-theme="light">
  <div class="container-xxl">
    <h1 class="display-1">Title</h1>
    <picture>
      <source media="(min-width:1440px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1440.png">
      <source media="(min-width:1280px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1280.png">
      <source media="(min-width:1024px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1024.png">
      <source media="(min-width:768px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-768.png">
      <source media="(min-width:480px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-480.png">
      <source media="(min-width:320px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-320.png">
      <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-320.png" alt="">
    </picture>
  </div>
</div>
{{</ example >}}

### HTML `<svg>` tag

{{< example class="p-0">}}
<div class="bg-supporting-purple title-bar" data-bs-theme="light">
  <div class="container-xxl">
    <h1 class="display-1">Title</h1>
    <svg aria-hidden="true" focusable="false" width="1.8em"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#file-document"/></svg>
  </div>
</div>
{{</ example >}}

### HTML `<img>` tag

{{< example class="p-0">}}
<div class="bg-supporting-green title-bar" data-bs-theme="light">
  <div class="container-xxl">
    <h1 class="display-1">Title</h1>
    <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-320.png" alt="" class="d-sm-none">
    <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-480.png" alt="" class="d-none d-sm-block d-md-none">
    <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-768.png" alt="" class="d-none d-md-block d-lg-none">
    <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1024.png" alt="" class="d-none d-lg-block d-xl-none">
    <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1280.png" alt="" class="d-none d-xl-block d-xxl-none">
    <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1440.png" alt="" class="d-none d-xxl-block">
  </div>
</div>
{{</ example >}}

### Background image

{{< callout info >}}
To include a background image in a title bar, it is required to use the `background` shorthand CSS property in some extra CSS that you can see on our [examples page]({{<docsref "/examples/title-bars">}}).
{{< /callout >}}

## CSS

### Variables

Title bars use local CSS variables on `.title-bar` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="title-bar-css-vars" file="scss/_title-bars.scss" >}}

### Sass variables

{{< scss-docs name="title-bars-variables" file="scss/_variables.scss" >}}
