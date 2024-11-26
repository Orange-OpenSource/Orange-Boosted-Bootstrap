---
layout: docs
title: Icon
description: Quickly see the right icon sizes with a specific typography reference.
group: helpers
aliases:
  - "/docs/helpers/icon/"
toc: true
---

## Approach

The icon classes are done to be used upon `<img>`, `<svg>` or even icon font wherever the icon is. Please make sure to either the rules described in this page or follow the design.

Every icon class presented in here has the common following code:

{{< scss-docs name="ouds-font-icon-common" file="scss/helpers/_icon.scss" >}}

## Headings

Here are the rules to follow for headings. These icons' sizes are responsive.

<details class="mb-medium">
  <summary>See the <strong>sizes</strong> associated to classes</summary>

{{< bs-table >}}
| Icon class | Values from `2xs` to `sm` | Values from `md` to `lg` | Values for `xl` and upper |
| --- | --- | --- | --- |
| `.hxl-tall-icon` | `3.25rem` (52px) | `4rem` (64px) | `4rem` (64px) |
| `.hxl-medium-icon` | `3rem` (48px) | `3.5rem` (56px) | `3.75rem` (60px) |
| `.hxl-short-icon` | `2.75rem` (44px) | `3.25rem` (52px) | `3.5rem` (56px) |
| `.hl-tall-icon` | `3rem` (48px) | `3.25rem` (52px) | `3.5rem` (56px) |
| `.hl-medium-icon` | `2.75rem` (44px) | `3rem` (48px) | `3.25rem` (52px) |
| `.hl-short-icon` | `2.5rem` (40px) | `2.75rem` (44px) | `3rem` (48px) |
| `.hm-tall-icon` | `2.75rem` (44px) | `3rem` (48px) | `3.25rem` (52px) |
| `.hm-medium-icon` | `2.5rem` (40px) | `2.75rem` (44px) | `3rem` (48px) |
| `.hm-short-icon` | `2rem` (32px) | `2.5rem` (40px) | `2.75rem` (44px) |
| `.hs-tall-icon` | `2.75rem` (44px) | `2.75rem` (44px) | `3rem` (48px) |
| `.hs-medium-icon` | `2.5rem` (40px) | `2.5rem` (40px) | `2.75rem` (44px) |
| `.hs-short-icon` | `2rem` (32px) | `2rem` (32px) | `2.5rem` (40px) |
| `.bl-tall-icon` | `1.75rem` (28px) | `1.75rem` (28px) | `2.75rem` (44px) |
| `.bl-medium-icon` | `1.5rem` (24px) | `1.5rem` (24px) | `2.5rem` (40px) |
| `.bl-short-icon` | `1.25rem` (20px) | `1.25rem` (20px) | `2rem` (32px) |
| `.bm-tall-icon` | `1.5rem` (24px) | `1.5rem` (24px) | `1.75rem` (28px) |
| `.bm-medium-icon` | `1.25rem` (20px) | `1.25rem` (20px) | `1.5rem` (24px) |
| `.bm-short-icon` | `1rem` (16px) | `1rem` (16px) | `1.25rem` (20px) |
{{< /bs-table >}}

</details>

{{< example >}}
<h1> <!-- h1 uses heading-xlarge font reference like all related classes as `.h1`, `.fs-hxl`, etc... -->
  <svg class="hxl-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H1 with tall icon
</h1>
<h1> <!-- h1 uses heading-xlarge font reference like all related classes as `.h1`, `.fs-hxl`, etc... -->
  <svg class="hxl-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H1 with medium icon
</h1>
<h1> <!-- h1 uses heading-xlarge font reference like all related classes as `.h1`, `.fs-hxl`, etc... -->
  <svg class="hxl-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H1 with short icon
</h1>

<hr>

<h2> <!-- h2 uses heading-large font reference like all related classes as `.h2`, `.fs-hl`, etc... -->
  <svg class="hl-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H2 with tall icon
</h2>
<h2> <!-- h2 uses heading-large font reference like all related classes as `.h2`, `.fs-hl`, etc... -->
  <svg class="hl-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H2 with medium icon
</h2>
<h2> <!-- h2 uses heading-large font reference like all related classes as `.h2`, `.fs-hl`, etc... -->
  <svg class="hl-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H2 with short icon
</h2>

<hr>

<h3> <!-- h3 uses heading-medium font reference like all related classes as `.h3`, `.fs-hm`, etc... -->
  <svg class="hm-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H3 with tall icon
</h3>
<h3> <!-- h3 uses heading-medium font reference like all related classes as `.h3`, `.fs-hm`, etc... -->
  <svg class="hm-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H3 with medium icon
</h3>
<h3> <!-- h3 uses heading-medium font reference like all related classes as `.h3`, `.fs-hm`, etc... -->
  <svg class="hm-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H3 with short icon
</h3>

<hr>

<h4> <!-- h4 uses heading-small font reference like all related classes as `.h4`, `.fs-hs`, etc... -->
  <svg class="hs-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H4 with tall icon
</h4>
<h4> <!-- h4 uses heading-small font reference like all related classes as `.h4`, `.fs-hs`, etc... -->
  <svg class="hs-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H4 with medium icon
</h4>
<h4> <!-- h4 uses heading-small font reference like all related classes as `.h4`, `.fs-hs`, etc... -->
  <svg class="hs-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H4 with short icon
</h4>

<hr>

<h5> <!-- h5 uses body-large font reference like all related classes as `.h5`, `.fs-bl`, etc... -->
  <svg class="bl-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H5 with tall icon
</h5>
<h5> <!-- h5 uses body-large font reference like all related classes as `.h5`, `.fs-bl`, etc... -->
  <svg class="bl-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H5 with medium icon
</h5>
<h5> <!-- h5 uses body-large font reference like all related classes as `.h5`, `.fs-bl`, etc... -->
  <svg class="bl-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H5 with short icon
</h5>

<hr>

<h6> <!-- h6 uses body-medium font reference like all related classes as `.h6`, `.fs-bm`, etc... -->
  <svg class="bm-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H6 with tall icon
</h6>
<h6> <!-- h6 uses body-medium font reference like all related classes as `.h6`, `.fs-bm`, etc... -->
  <svg class="bm-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H6 with medium icon
</h6>
<h6> <!-- h6 uses body-medium font reference like all related classes as `.h6`, `.fs-bm`, etc... -->
  <svg class="bm-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H6 with short icon
</h6>
{{< /example >}}

## Display headings

You should not use any icon with our `.display-*` font sizes, because we prefer to keep the place for the text.

## Regular texts

Here are the rules to follow for regular texts. These icons' sizes are responsive.

<details class="mb-medium">
  <summary>See the <strong>sizes</strong> associated to classes</summary>

{{< bs-table >}}
| Icon class | Values from `2xs` to `sm` | Values from `md` to `lg` | Values for `xl` and upper |
| --- | --- | --- | --- |
| `.bl-tall-icon` | `1.75rem` (28px) | `1.75rem` (28px) | `2.75rem` (44px) |
| `.bl-medium-icon` | `1.5rem` (24px) | `1.5rem` (24px) | `2.5rem` (40px) |
| `.bl-short-icon` | `1.25rem` (20px) | `1.25rem` (20px) | `2rem` (32px) |
| `.bm-tall-icon` | `1.5rem` (24px) | `1.5rem` (24px) | `1.75rem` (28px) |
| `.bm-medium-icon` | `1.25rem` (20px) | `1.25rem` (20px) | `1.5rem` (24px) |
| `.bm-short-icon` | `1rem` (16px) | `1rem` (16px) | `1.25rem` (20px) |
| `.bs-tall-icon` | `1.25rem` (20px) | `1.25rem` (20px) | `1.5rem` (24px) |
| `.bs-medium-icon` | `1rem` (16px) | `1rem` (16px) | `1.25rem` (20px) |
| `.bs-short-icon` | `.75rem` (12px) | `.75rem` (12px) | `1rem` (16px) |
{{< /bs-table >}}

</details>

{{< example >}}
<p class="lead"> <!-- .lead uses body-large font reference like all related classes as `.lead`, `.fs-bl`, etc... -->
  <svg class="bl-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Lead paragraph with tall icon
</p>
<p class="lead"> <!-- .lead uses body-large font reference like all related classes as `.lead`, `.fs-bl`, etc... -->
  <svg class="bl-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Lead paragraph with medium icon
</p>
<p class="lead"> <!-- .lead uses body-large font reference like all related classes as `.lead`, `.fs-bl`, etc... -->
  <svg class="bl-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Lead paragraph with short icon
</p>

<hr>

<p> <!-- default paragraph uses body-medium font reference like all related classes as `.fs-bm`, etc... -->
  <svg class="bm-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Default paragraph with tall icon
</p>
<p> <!-- default paragraph uses body-medium font reference like all related classes as `.fs-bm`, etc... -->
  <svg class="bm-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Default paragraph with medium icon
</p>
<p> <!-- default paragraph uses body-medium font reference like all related classes as `.fs-bm`, etc... -->
  <svg class="bm-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Default paragraph with short icon
</p>

<hr>

<p class="small"> <!-- .small uses body-small font reference like all related classes as `.small`, `.fs-bs`, etc... -->
  <svg class="bs-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Small paragraph with tall icon
</p>
<p class="small"> <!-- .small uses body-small font reference like all related classes as `.small`, `.fs-bs`, etc... -->
  <svg class="bs-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Small paragraph with medium icon
</p>
<p class="small"> <!-- .small uses body-small font reference like all related classes as `.small`, `.fs-bs`, etc... -->
  <svg class="bs-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Small paragraph with short icon
</p>
{{< /example >}}

## Decorative

Here are the rules to follow for decorative icons. Be careful using these icons' sizes because they are not responsive.

<details class="mb-medium">
  <summary>See the <strong>sizes</strong> associated to classes</summary>

{{< bs-table >}}
| Icon class | Value |
| --- | --- |
| `.decorative-shortest-icon` | `1rem` (16px) |
| `.decorative-shorter-icon` | `1.5rem` (24px) |
| `.decorative-short-icon` | `2rem` (32px) |
| `.decorative-medium-icon` | `2.5rem` (40px) |
| `.decorative-tall-icon` | `3rem` (48px) |
| `.decorative-taller-icon` | `3.5rem` (56px) |
| `.decorative-tallest-icon` | `4.5rem` (72px) |
{{< /bs-table >}}

</details>

<div class="bd-example">
  <div class="d-flex mb-medium">
    <div class="bg-secondary d-inline-flex align-items-center justify-content-center me-medium flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-shortest-icon text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-shortest fw-bold">Shortest decorative icon</p>
      <p class="mb-none">coreGlobalDimension200 (<code>1rem</code> or <code>16px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-medium">
    <div class="bg-secondary d-inline-flex align-items-center justify-content-center me-medium flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-shorter-icon text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-shortest fw-bold">Shorter decorative icon</p>
      <p class="mb-none">coreGlobalDimension300 (<code>1.5rem</code> or <code>24px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-medium">
    <div class="bg-secondary d-inline-flex align-items-center justify-content-center me-medium flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-short-icon text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-shortest fw-bold">Short decorative icon</p>
      <p class="mb-none">coreGlobalDimension400 (<code>2rem</code> or <code>32px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-medium">
    <div class="bg-secondary d-inline-flex align-items-center justify-content-center me-medium flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-medium-icon text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-shortest fw-bold">Medium decorative icon</p>
      <p class="mb-none">coreGlobalDimension500 (<code>2.5rem</code> or <code>40px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-medium">
    <div class="bg-secondary d-inline-flex align-items-center justify-content-center me-medium flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-tall-icon text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-shortest fw-bold">Tall decorative icon</p>
      <p class="mb-none">coreGlobalDimension600 (<code>3rem</code> or <code>48px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-medium">
    <div class="bg-secondary d-inline-flex align-items-center justify-content-center me-medium flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-taller-icon text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-shortest fw-bold">Taller decorative icon</p>
      <p class="mb-none">coreGlobalDimension700 (<code>3.5rem</code> or <code>56px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-medium">
    <div class="bg-secondary d-inline-flex align-items-center justify-content-center me-medium flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-tallest-icon text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-shortest fw-bold">Tallest decorative icon</p>
      <p class="mb-none">coreGlobalDimension900 (<code>4.5rem</code> or <code>72px</code> at zoom 100%)</p>
    </div>
  </div>
</div>

```html
<svg class="decorative-shortest-icon text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-shorter-icon text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-short-icon text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-medium-icon text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-tall-icon text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-taller-icon text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-tallest-icon text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
```

## Multiple lines

Sometimes you need a different structure to handle larger titles, or paragraphs that wrap over several lines. Here are some examples to handle these use cases. We've set arbitrary spacings, but align them your design.

### Centered on the first line

{{< example >}}
<h1>
  <svg class="hxl-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H1 with tall icon and a very long title to see how it behaves while being wrapped
</h1>

<!-- Prefer use this -->
<div class="d-flex">
  <svg class="hxl-tall-icon me-scaled-short text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h1 class="pt-shorter pt-md-short pt-xl-shorter">H1 with tall icon and a very long title to see how it behaves while being wrapped</h1>
</div>
{{< /example >}}

{{< example >}}
<p>
  <svg class="bm-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Default long paragraph with tall icon. It stands here in order for you to see how the icon should behave when it's placed next to a long paragraph. Whenever the paragraph stands on multiple lines please prefer using a block element and not an inline element so there will no strange behaviors.
</p>

<!-- Prefer use this -->
<div class="d-flex">
  <svg class="bm-tall-icon me-scaled-short text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="pt-smash">
    Default long paragraph with tall icon. It stands here in order for you to see how the icon should behave when it's placed next to a long paragraph. Whenever the paragraph stands on multiple lines please prefer using a block element and not an inline element so there will no strange behaviors.
  </p>
</div>
{{< /example >}}

### Centered on text block

{{< example >}}
<h1 class="mb-tallest">
  <svg class="hxl-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H1 with tall icon and a very long title to see how it behaves while being wrapped
</h1>

<!-- Prefer use this -->
<div class="d-flex align-items-center">
  <svg class="hxl-tall-icon me-scaled-short text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h1 class="mb-none">H1 with tall icon and a very long title to see how it behaves while being wrapped</h1>
</div>
{{< /example >}}

{{< example >}}
<p>
  <svg class="bm-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Default long paragraph with tall icon. It stands here in order for you to see how the icon should behave when it's placed next to a long paragraph. Whenever the paragraph stands on multiple lines please prefer using a block element and not an inline element so there will no strange behaviors.
</p>

<!-- Prefer use this -->
<div class="d-flex align-items-center">
  <svg class="bm-tall-icon me-scaled-short text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="mb-none">
    Default long paragraph with tall icon. It stands here in order for you to see how the icon should behave when it's placed next to a long paragraph. Whenever the paragraph stands on multiple lines please prefer using a block element and not an inline element so there will no strange behaviors.
  </p>
</div>
{{< /example >}}

### Above text block

{{< example >}}
<h1 class="mb-tallest">
  <svg class="hxl-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H1 with tall icon and a very long title to see how it behaves while being wrapped
</h1>

<!-- Prefer use this -->
<div>
  <svg class="hxl-tall-icon mb-scaled-shorter text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h1 class="mb-none">H1 with tall icon and a very long title to see how it behaves while being wrapped</h1>
</div>
{{< /example >}}

{{< example >}}
<p class="mb-tallest">
  <svg class="bm-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Default long paragraph with tall icon. It stands here in order for you to see how the icon should behave when it's placed next to a long paragraph. Whenever the paragraph stands on multiple lines please prefer using a block element and not an inline element so there will no strange behaviors.
</p>

<!-- Prefer use this -->
<div>
  <svg class="bm-tall-icon mb-scaled-shortest text-info translate-none" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="mb-none">
    Default long paragraph with tall icon. It stands here in order for you to see how the icon should behave when it's placed next to a long paragraph. Whenever the paragraph stands on multiple lines please prefer using a block element and not an inline element so there will no strange behaviors.
  </p>
</div>
{{< /example >}}

## `<img>` and font icon

SVG Sprite is the preferred choice for flexibility, performance and accessibility, and this is why all our examples use this method but there are other ways to display icons. It should all behave the same due to our CSS. If you are experiencing any trouble, feel free to search or fill in a new [Github discussion](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/discussions) or contact [our team]({{< docsref "/about/team" >}}). <!-- Check out for more information in [our documentation]({{< docsref "/extend/icons" >}}). -->

{{< example >}}
<h1>
  <img class="hxl-tall-icon me-short" alt="" src="/docs/{{< param docs_version >}}/assets/img/vite.svg">
  H1 with tall icon
</h1>
<h1>
  <span class="hxl-tall-icon me-short si si-settings" aria-hidden="true"></span>
  H1 with tall icon
</h1>
{{< /example >}}

## CSS

### Variables

{{< scss-docs name="root-size-scaled-var-ouds" file="scss/_root.scss" >}}

### Sass tokens

#### Raw tokens

Dimension raw tokens as Sass variables. **Not to be used as-is**.

{{< scss-docs name="ouds-raw-dimension" file="scss/tokens/_raw.scss" >}}

#### Semantic tokens

Size semantic tokens are defined as Sass variables.

{{< scss-docs name="ouds-semantic-size" file="scss/tokens/_semantic.scss" >}}
