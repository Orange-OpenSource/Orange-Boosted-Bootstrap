---
layout: docs
title: Orange local headers
description: Documentation and examples for Boosted's exclusive Brand responsive navbars.
group: components
toc: true
---

## Overview

Some examples are available in the [examples' section]({{<docsref "/examples/title-bars">}}). You can also see the [design specifications](https://system.design.orange.com/0c1af118d/p/774477-local-headers/b/743cd0).

{{< callout info >}}
The local navigation will come with [#890]({{<param repo>}}/issues/890).

Branded breadcrumbs will come with [#891]({{<param repo>}}/issues/891).
{{</ callout >}}

## Title bars

Title bars have been built to be used just after a global header to display the title of the page. As they are based on utilities for spacing and backgrounds, title bars were designed to take `100vw` width.

### Background color

Use our [background utilities]({{<docsref "/utilities/background">}}) to change the appearance of a title bar. The ones that are Orange branded are the `.bg-dark .bg-white .bg-supporting-*`. The **colored** ones are supposed to be used only with **images and short title**.

{{< example >}}
<div class="bg-dark title-bar">
  <div class="px-2 px-md-3 px-lg-4 px-xxl-5">
    <div class="px-lg-2 px-xl-3 px-xxl-2 d-flex">
      <div class="pt-3 pt-md-4 pb-2 pb-md-3">
        <h1 class="py-xl-1 m-0">Title</h1>
      </div>
    </div>
  </div>
</div>

<div class="mt-3"></div>

<div class="bg-body title-bar">
  <div class="px-2 px-md-3 px-lg-4 px-xxl-5">
    <div class="px-lg-2 px-xl-3 px-xxl-2 d-flex">
      <div class="pt-3 pt-md-4 pb-2 pb-md-3">
        <h1 class="py-xl-1 m-0">Title</h1>
      </div>
    </div>
  </div>
</div>
{{</ example >}}

### Images

Title bars include a few options to work with images.

We **strongly recommend** to use `srcset` attribute as it is very well supported by browsers and as it allows you to load an image depending on the device of the user. However, it might introduce a delay to display the image while resizing.

{{< callout warning >}}
It doesn't render well here, as the breakpoints for the font-size and for the spacing are screen based. Please see [**our examples on title bars**]({{<docsref "/examples/title-bars">}}).

The background image based title bar requires some extra css that you can see on our example page too.
{{< /callout >}}

```html
<div class="bg-supporting-pink title-bar">
  <div class="px-2 px-md-3 px-lg-4 px-xxl-5">
    <div class="px-lg-2 px-xl-3 px-xxl-2 d-flex">
      <div class="pt-3 pt-md-4 pb-2 pb-md-3">
        <h1 class="py-xl-1 m-0">Srcset based</h1>
      </div>
      <div class="pt-1 pt-md-2 ms-auto mt-auto text-end m-0">
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
  </div>
</div>

<div class="bg-supporting-green title-bar">
  <div class="px-2 px-md-3 px-lg-4 px-xxl-5">
    <div class="px-lg-2 px-xl-3 px-xxl-2 d-flex">
      <div class="pt-3 pt-md-4 pb-2 pb-md-3">
        <h1 class="py-xl-1 m-0">Img based</h1>
      </div>
      <div class="pt-1 pt-md-2 ms-auto mt-auto text-end m-0">
        <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-320.png" alt="" class="d-sm-none" />
        <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-480.png" alt="" class="d-none d-sm-block d-md-none" />
        <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-768.png" alt="" class="d-none d-md-block d-lg-none" />
        <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1024.png" alt="" class="d-none d-lg-block d-xl-none" />
        <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1280.png" alt="" class="d-none d-xl-block d-xxl-none" />
        <img src="/docs/{{< param docs_version >}}/assets/img/title-bars-illustrations/illustration-1440.png" alt="" class="d-none d-xxl-block" />
      </div>
    </div>
  </div>
</div>

<div class="bg-supporting-purple title-bar">
  <div class="px-2 px-md-3 px-lg-4 px-xxl-5">
    <div class="px-lg-2 px-xl-3 px-xxl-2 d-flex">
      <div class="pt-3 pt-md-4 pb-2 pb-md-3">
        <h1 class="py-xl-1 m-0">Svg based</h1>
      </div>
      <div class="pt-1 pt-md-2 ms-auto mt-auto text-end m-0 d-flex gap-2">
        <svg viewBox="0 0 50 50"  aria-hidden="true" focusable="false">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#logo"/>
        </svg>
        <svg viewBox="0 0 50 50" aria-hidden="true" focusable="false">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#logo"/>
        </svg>
        <svg viewBox="0 0 50 50" class="d-none d-sm-block" aria-hidden="true" focusable="false">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#logo"/>
        </svg>
        <svg viewBox="0 0 50 50" class="d-none d-md-block" aria-hidden="true" focusable="false">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#logo"/>
        </svg>
      </div>
    </div>
  </div>
</div>

<div class="bg-supporting-blue title-bar">
  <div class="px-2 px-md-3 px-lg-4 px-xxl-5">
    <div class="px-lg-2 px-xl-3 px-xxl-2 d-flex">
      <div class="pt-3 pt-md-4 pb-2 pb-md-3">
        <h1 class="py-xl-1 m-0 me-3">Bg-image</h1>
      </div>
      <h1 class="mt-auto col m-0 example-title-bar-custom-background"></h1>
    </div>
  </div>
</div>
```

### Customize

In order to customize your css file, here are some clues on how to do it :

**For background images :**
The weird numbers after `bottom/number` are the results, for each breakpoint, of `image width/font-size`.

**For displaying images :**
The max-width are calculated, for each breakpoint, as follow : (`text width + image width + padding + 8`)/(`16`)
