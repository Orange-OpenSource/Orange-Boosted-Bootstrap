---
layout: docs
title: Orange local headers
description: Documentation and examples for Boosted's exclusive Brand responsive title bars, breadcrumbs and local navigation bars.
group: components
toc: true
---

## Examples

Below are some examples. For more, please refer to our [examples page]({{<docsref "/examples/title-bars">}}).

### Title bars

#### On black

{{< example class="p-0" >}}
<div class="bg-dark title-bar">
  <div class="container">
    <h1>Title</h1>
  </div>
</div>
{{</ example >}}

#### With image

{{< example class="p-0">}}
<div class="bg-supporting-pink title-bar">
  <div class="container">
    <h1>Title</h1>
    <picture>
      <source media="(min-width:1440px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1440.png">
      <source media="(min-width:1280px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1280.png">
      <source media="(min-width:1024px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1024.png">
      <source media="(min-width:768px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-768.png">
      <source media="(min-width:480px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-480.png">
      <source media="(min-width:320px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-320.png">
      <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-320.png" alt=""/>
    </picture>
  </div>
</div>
{{</ example >}}

### Breadcrumb

{{< callout info >}}
Example will come with issue [#891]({{<param repo>}}/issues/891).
{{</ callout >}}

### Local navigation bar

{{< callout info >}}
Example will come with issue [#890]({{<param repo>}}/issues/890).
{{</ callout >}}

## Title bars

A title bar is designed to display the title of a page and shall be placed right below a global header.

Being based on spacing and backgrounds utilities, title bars were designed to take `100vw` width.

### Background color

To change the appearance of a title bar, use our [background utilities]({{<docsref "/utilities/background">}}). Orange branded background utilities are `.bg-dark`, `.bg-white` and `.bg-supporting-*`.

Background color other than white or black must be used only in title bars containing a **short title** and at least **one image**.

{{< example class="p-0">}}
<div class="bg-white title-bar">
  <div class="container">
    <h1>Title</h1>
  </div>
</div>

<div class="mt-3 bg-light"></div>

<div class="bg-dark title-bar">
  <div class="container">
    <h1>Title</h1>
  </div>
</div>

<div class="mt-3 bg-light"></div>

<div class="bg-supporting-pink title-bar">
  <div class="container">
    <h1>Title</h1>
    <picture>
      <source media="(min-width:1440px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1440.png">
      <source media="(min-width:1280px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1280.png">
      <source media="(min-width:1024px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1024.png">
      <source media="(min-width:768px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-768.png">
      <source media="(min-width:480px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-480.png">
      <source media="(min-width:320px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-320.png">
      <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-320.png" alt=""/>
    </picture>
  </div>
</div>
{{</ example >}}

### Images

Several options are available to add an image in a title bar.

#### Srcset

We **strongly recommend** to use `srcset` attribute as it is very well supported by browsers and allows you to load an image depending on the device of the user. However, it might introduce a delay to display the image while resizing.

{{< example class="p-0">}}
 <div class="bg-supporting-pink title-bar">
    <div class="container">
      <h1>Srcset</h1>
      <picture>
        <source media="(min-width:1440px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1440.png">
        <source media="(min-width:1280px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1280.png">
        <source media="(min-width:1024px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1024.png">
        <source media="(min-width:768px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-768.png">
        <source media="(min-width:480px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-480.png">
        <source media="(min-width:320px)" srcset="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-320.png">
        <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-320.png" alt=""/>
      </picture>
    </div>
  </div>
{{</ example >}}

#### Svg image

{{< example class="p-0">}}
  <div class="bg-supporting-purple title-bar">
    <div class="container">
      <h1>Svg image</h1>
      <svg aria-hidden="true" focusable="false">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#logo"/>
      </svg>
    </div>
  </div>

{{</ example >}}

#### \<img\>

{{< example class="p-0">}}
<div class="bg-supporting-green title-bar">
  <div class="container">
    <h1>img</h1>
    <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-320.png" alt="" class="d-sm-none" />
    <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-480.png" alt="" class="d-none d-sm-block d-md-none" />
    <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-768.png" alt="" class="d-none d-md-block d-lg-none" />
    <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1024.png" alt="" class="d-none d-lg-block d-xl-none" />
    <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1280.png" alt="" class="d-none d-xl-block d-xxl-none" />
    <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1440.png" alt="" class="d-none d-xxl-block" />
  </div>
</div>
{{</ example >}}

#### Background-image

{{< callout warning >}}
The background image based title bar requires some extra css that you can see on our [examples page]({{<docsref "/examples/title-bars">}}) too.
{{< /callout >}}

{{< example class="p-0">}}
<div class="bg-supporting-blue title-bar">
  <div class="container">
    <h1>Background-image</h1>
    <div class="col m-0 example-title-bar-custom-background"></div>
  </div>
</div>
{{</ example >}}

### Customize

The image should not overlap on title and the title shouldn't wrap. If this happens, please transform your title bar into a white one without any image. Here are some information to help you customize your css file:

- **For background images:**
The numbers following `bottom/number` are, for each breakpoint, the result of `image width/font-size`.

- **For displaying images :**
For each breakpoint, max-widths are calculated as follow: `(text width + image width + padding + 8)/(16)`

## Breadcrumb

{{< callout info >}}
Branded breadcrumbs will come with issue [#891]({{<param repo>}}/issues/891).
{{</ callout >}}

## Local navigation bar

{{< callout info >}}
The local navigation bars will come with issue [#890]({{<param repo>}}/issues/890).
{{</ callout >}}
