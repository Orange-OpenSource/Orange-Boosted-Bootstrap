---
layout: docs
title: Icons
description: Guidance and suggestions for using Solaris icons library with OUDS Web.
group: extend
aliases:
  - "/docs/extend/icons/"
toc: true
---

{{< callout info >}}
You can find here the [Iconography design guidelines](https://unified-design-system.orange.com/472794e18/p/275963-iconography).
{{< /callout >}}

While OUDS Web doesn't include an icon set by default, Orange does have its own comprehensive icon library called Solaris. While most icon sets include multiple file formats, we prefer SVG implementations for their improved accessibility and vector support.

[Solaris icons library]({{< param icons >}}) is a growing library of icons that are designed by OUDS design team. It features an icon search tool based on categories and keywords, and allows icons to be downloaded in various formats for use in design and development. They are not open-source though and should only be used for Orange projects. Please refer to the [icons license file]({{< param icons_license >}}) for legal information.

If you need guidance to use Solaris icons, please refer to the paragraph [use Solaris icons]({{< docsref "extend/icons#use-solaris-icons" >}}).

## Icons rendering

Icons are designed within a square layout to preserve consistency. Within this square, there exists a designated safety zone to guarantee that icons can be used in various sizes and contexts while maintaining alignment as intended by the designers. The dimensions of the icons encompass this safety zone, ensuring adaptability and consistency across diverse applications.

<svg width="8em" height="8em" class="bg-body-secondary" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#info"/>
</svg>
<svg width="8em" height="8em" class="bg-body-secondary" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#download"/>
</svg>
<svg width="8em" height="8em" class="bg-body-secondary" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#tick"/>
</svg>

## Icons color

To color icons, you can:
- use [color utilities classes]({{< docsref "utilities/colors#colors" >}}) like `.text-brand-primary`, `.text-disabled` or `.text-status-positive` that change current color value.
- specify a color using CSS variables like `--bs-color-content-brand-primary`, `--bs-color-content-disabled` or `--bs-color-content-status-positive`.

For SVGs (SVG sprites, inline SVGs or CSS mask image SVGs), the `fill="currentColor"` attribute is required on the `<svg>` or `<symbol>` tag, if you want to change the icons color on the fly: it will make the icon inherit color from itself or its parent containers. It is set on the icons downloaded from Solaris icons finder. For CSS mask image SVGs, the `background-color: currentColor` CSS property should be set.

### Functional icons

The following color utilities and CSS variables are intended for use only with functional icons, not with text, and icons should not be used on their own, but only alongside text, as functional colors do not provide sufficient contrast to ensure readability.

Here are [the normal contexts of use of these functional colors](https://unified-design-system.orange.com/472794e18/p/217ac6-colour/t/9b95834c2e).

{{< bs-table >}}
| Color utility | Color CSS variable | Context of use |
| --- | --- | --- |
| `.text-status-info` | `--bs-color-content-status-info` | Use to communicate a feedback. It's more important than a neutral color. |
| `.text-status-positive` | `--bs-color-content-status-positive` | Use to communicate a positive action, a confirmation or a positive feedback. |
| `.text-status-warning` | `--bs-color-content-status-warning` | Use to display an information that requires more attention, or an action from the user. |
| `.text-status-negative` | `--bs-color-content-status-negative` | Use to communicate something negative. It can be a destructive action, an error state, or a negative feedback. |
{{< /bs-table >}}

{{< example >}}
<div class="d-flex justify-content-center gap-md-tall">
  <div class="p-md bg-primary border border-default" data-bs-theme="light">
    <p>
      <svg class="text-status-info decorative-sm-icon" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#info"/>
      </svg> Info
    </p>
    <p>
      <svg class="text-status-positive decorative-sm-icon" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#tick-confirmation"/>
      </svg> Success
    </p>
    <p>
      <svg class="text-status-warning decorative-sm-icon" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#important"/>
      </svg> Warning
    </p>
    <p>
      <svg class="text-status-negative decorative-sm-icon" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#error-severe"/>
      </svg> Danger
    </p>
  </div>
  <div class="p-md bg-emphasized border border-default" data-bs-theme="dark">
    <p>
      <svg class="decorative-sm-icon" style="color: var(--bs-color-content-status-info)" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#info"/>
      </svg> Info
    </p>
    <p>
      <svg class="decorative-sm-icon" style="color: var(--bs-color-content-status-positive)" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#tick-confirmation"/>
      </svg> Success
    </p>
    <p>
      <svg class="decorative-sm-icon" style="color: var(--bs-color-content-status-warning)" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#important"/>
      </svg> Warning
    </p>
    <p>
      <svg class="decorative-sm-icon" style="color: var(--bs-color-content-status-negative)" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#error-severe"/>
      </svg> Danger
    </p>
  </div>
</div>
{{< /example >}}


### Other icons

Here are some examples of other [color utilities]({{< docsref "utilities/colors#colors" >}}) and CSS variables used with icons.

{{< example class="d-inline-flex flex-column">}}
<p class="p-2 bg-primary d-inline-flex align-items-center gap-xs" data-bs-theme="light">
  <svg class="decorative-sm-icon" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  <svg class="decorative-sm-icon text-default" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#delete"/>
  </svg>
  <svg class="decorative-sm-icon text-primary" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#download"/>
  </svg>
  <svg class="decorative-sm-icon text-disabled" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#trash"/>
  </svg>
  <span class="icon si si-settings text-muted decorative-sm-icon" aria-hidden="true"></span>
</p>
<p class="p-2 bg-emphasized d-inline-flex align-items-center gap-xs" data-bs-theme="dark">
  <svg class="decorative-sm-icon" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  <svg class="decorative-sm-icon" style="color: var(--bs-color-content-default)" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#delete"/>
  </svg>
  <svg class="decorative-sm-icon" style="color: var(--bs-color-content-brand-primary)" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#download"/>
  </svg>
  <svg class="decorative-sm-icon" style="color: var(--bs-color-content-disabled)" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#trash"/>
  </svg>
  <span class="icon si si-settings decorative-sm-icon" style="color: var(--bs-color-content-muted)" aria-hidden="true"></span>
</p>
{{< /example >}}

## Icons size

Icons' size depends on where they are placed in the page content, so please make sure to either use our utilities provided in this page or follow the design. Icons size utility classes are designed to be used upon `<img>`, `<svg>` or even icon font, wherever the icon is.

Every icon size utility class presented in here has the common following code:

{{< scss-docs name="ouds-font-icon-common" file="scss/helpers/_icon.scss" >}}

### Headings

Here are the rules to follow for headings. These icons' sizes are responsive.

<details class="mb-md">
  <summary>See the <strong>sizes</strong> associated to classes</summary>

{{< bs-table >}}
| Icon class | Values from `2xs` to `sm` | Values from `md` to `lg` | Values for `xl` and upper |
| --- | --- | --- | --- |
| `.hxl-lg-icon` | `3.25rem` (52px) | `4rem` (64px) | `4rem` (64px) |
| `.hxl-md-icon` | `3rem` (48px) | `3.5rem` (56px) | `3.75rem` (60px) |
| `.hxl-sm-icon` | `2.75rem` (44px) | `3.25rem` (52px) | `3.5rem` (56px) |
| `.hl-lg-icon` | `3rem` (48px) | `3.25rem` (52px) | `3.5rem` (56px) |
| `.hl-md-icon` | `2.75rem` (44px) | `3rem` (48px) | `3.25rem` (52px) |
| `.hl-sm-icon` | `2.5rem` (40px) | `2.75rem` (44px) | `3rem` (48px) |
| `.hm-lg-icon` | `2.75rem` (44px) | `3rem` (48px) | `3.25rem` (52px) |
| `.hm-md-icon` | `2.5rem` (40px) | `2.75rem` (44px) | `3rem` (48px) |
| `.hm-sm-icon` | `2rem` (32px) | `2.5rem` (40px) | `2.75rem` (44px) |
| `.hs-lg-icon` | `2.75rem` (44px) | `2.75rem` (44px) | `3rem` (48px) |
| `.hs-md-icon` | `2.5rem` (40px) | `2.5rem` (40px) | `2.75rem` (44px) |
| `.hs-sm-icon` | `2rem` (32px) | `2rem` (32px) | `2.5rem` (40px) |
| `.bl-lg-icon` | `1.75rem` (28px) | `1.75rem` (28px) | `2.75rem` (44px) |
| `.bl-md-icon` | `1.5rem` (24px) | `1.5rem` (24px) | `2.5rem` (40px) |
| `.bl-sm-icon` | `1.25rem` (20px) | `1.25rem` (20px) | `2rem` (32px) |
| `.bm-lg-icon` | `1.5rem` (24px) | `1.5rem` (24px) | `1.75rem` (28px) |
| `.bm-md-icon` | `1.25rem` (20px) | `1.25rem` (20px) | `1.5rem` (24px) |
| `.bm-sm-icon` | `1rem` (16px) | `1rem` (16px) | `1.25rem` (20px) |
{{< /bs-table >}}

</details>

{{< example >}}
<!-- h1 uses heading-xlarge font reference like all related classes as `.h1`, `.fs-hxl`, etc... -->
<div class="d-flex align-items-center mb-md">
  <svg class="hxl-lg-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h1 class="mb-none">H1 with large icon</h1>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="hxl-md-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h1 class="mb-none">H1 with medium icon</h1>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="hxl-sm-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h1 class="mb-none">H1 with small icon</h1>
</div>

<hr>

<!-- h2 uses heading-large font reference like all related classes as `.h2`, `.fs-hl`, etc... -->
<div class="d-flex align-items-center mb-md">
  <svg class="hl-lg-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h2 class="mb-none">H2 with large icon</h2>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="hl-md-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h2 class="mb-none">H2 with medium icon</h2>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="hl-sm-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h2 class="mb-none">H2 with small icon</h2>
</div>

<hr>

<!-- h3 uses heading-medium font reference like all related classes as `.h3`, `.fs-hm`, etc... -->
<div class="d-flex align-items-center mb-md">
  <svg class="hm-lg-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h3 class="mb-none">H3 with large icon</h3>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="hm-md-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h3 class="mb-none">H3 with medium icon</h3>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="hm-sm-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h3 class="mb-none">H3 with small icon</h3>
</div>

<hr>

<!-- h4 uses heading-small font reference like all related classes as `.h4`, `.fs-hs`, etc... -->
<div class="d-flex align-items-center mb-md">
  <svg class="hs-lg-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h4 class="mb-none">H4 with large icon</h4>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="hs-md-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h4 class="mb-none">H4 with medium icon</h4>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="hs-sm-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h4 class="mb-none">H4 with small icon</h4>
</div>

<hr>

<!-- h5 uses body-large font reference like all related classes as `.h5`, `.fs-bl`, etc... -->
<div class="d-flex align-items-center mb-md">
  <svg class="bl-lg-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h5 class="mb-none">H5 with large icon</h5>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="bl-md-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h5 class="mb-none">H5 with medium icon</h5>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="bl-sm-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h5 class="mb-none">H5 with small icon</h5>
</div>

<hr>

<!-- h6 uses body-medium font reference like all related classes as `.h6`, `.fs-bm`, etc... -->
<div class="d-flex align-items-center mb-md">
  <svg class="bm-lg-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h6 class="mb-none">H6 with lg icon</h6>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="bm-md-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h6 class="mb-none">H6 with medium icon</h6>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="bm-sm-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h6 class="mb-none">H6 with small icon</h6>
</div>
{{< /example >}}

### Display headings

You should not use any icon with our `.display-*` font sizes, because we prefer to keep the place for the text.

### Regular texts

Here are the rules to follow for regular texts. These icons' sizes are responsive.

<details class="mb-md">
  <summary>See the <strong>sizes</strong> associated to classes</summary>

{{< bs-table >}}
| Icon class | Values from `2xs` to `sm` | Values from `md` to `lg` | Values for `xl` and upper |
| --- | --- | --- | --- |
| `.bl-lg-icon` | `1.75rem` (28px) | `1.75rem` (28px) | `2.75rem` (44px) |
| `.bl-md-icon` | `1.5rem` (24px) | `1.5rem` (24px) | `2.5rem` (40px) |
| `.bl-sm-icon` | `1.25rem` (20px) | `1.25rem` (20px) | `2rem` (32px) |
| `.bm-lg-icon` | `1.5rem` (24px) | `1.5rem` (24px) | `1.75rem` (28px) |
| `.bm-md-icon` | `1.25rem` (20px) | `1.25rem` (20px) | `1.5rem` (24px) |
| `.bm-sm-icon` | `1rem` (16px) | `1rem` (16px) | `1.25rem` (20px) |
| `.bs-lg-icon` | `1.25rem` (20px) | `1.25rem` (20px) | `1.5rem` (24px) |
| `.bs-md-icon` | `1rem` (16px) | `1rem` (16px) | `1.25rem` (20px) |
| `.bs-sm-icon` | `.75rem` (12px) | `.75rem` (12px) | `1rem` (16px) |
{{< /bs-table >}}

</details>

{{< example >}}
<!-- .lead uses body-large font reference like all related classes as `.lead`, `.fs-bl`, etc... -->
<div class="d-flex align-items-center mb-md">
  <svg class="bl-lg-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="lead mb-none">
    Lead paragraph with large icon
  </p>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="bl-md-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="lead mb-none">
    Lead paragraph with medium icon
  </p>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="bl-sm-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="lead mb-none">
    Lead paragraph with small icon
  </p>
</div>

<hr>

<!-- default paragraph uses body-medium font reference like all related classes as `.fs-bm`, etc... -->
<div class="d-flex align-items-center mb-md">
  <svg class="bm-lg-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="mb-none">
    Default paragraph with large icon
  </p>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="bm-md-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="mb-none">
    Default paragraph with medium icon
  </p>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="bm-sm-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="mb-none">
    Default paragraph with small icon
  </p>
</div>

<hr>

<!-- .small paragraph uses body-small font reference like all related classes as `.small`, `.fs-bs`, etc... -->
<div class="d-flex align-items-center mb-md">
  <svg class="bs-lg-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="small mb-none">
    Small paragraph with large icon
  </p>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="bs-md-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="small mb-none">
    Small paragraph with medium icon
  </p>
</div>
<div class="d-flex align-items-center mb-md">
  <svg class="bs-sm-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="small mb-none">
    Small paragraph with small icon
  </p>
</div>
{{< /example >}}

### Decorative

Here are the rules to follow for decorative icons. Be careful using these icons' sizes because they are not responsive. Check out for [more information about accessibility in our documentation]({{< docsref "/extend/icons#icons-accessibility" >}}).

<details class="mb-md">
  <summary>See the <strong>sizes</strong> associated to classes</summary>

{{< bs-table >}}
| Icon class | Value |
| --- | --- |
| `.decorative-2xs-icon` | `1rem` (16px) |
| `.decorative-xs-icon` | `1.5rem` (24px) |
| `.decorative-sm-icon` | `2rem` (32px) |
| `.decorative-md-icon` | `2.5rem` (40px) |
| `.decorative-lg-icon` | `3rem` (48px) |
| `.decorative-xl-icon` | `3.5rem` (56px) |
| `.decorative-2xl-icon` | `4.5rem` (72px) |
{{< /bs-table >}}

</details>

<div class="bd-example">
  <div class="d-flex mb-md">
    <div class="bg-emphasized d-inline-flex align-items-center justify-content-center me-md flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-2xs-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true" data-bs-theme="dark">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-2xs fw-bold">2x-small decorative icon</p>
      <p class="mb-none">coreGlobalDimension200 (<code>1rem</code> or <code>16px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-md">
    <div class="bg-emphasized d-inline-flex align-items-center justify-content-center me-md flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-xs-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true" data-bs-theme="dark">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-2xs fw-bold">X-small decorative icon</p>
      <p class="mb-none">coreGlobalDimension300 (<code>1.5rem</code> or <code>24px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-md">
    <div class="bg-emphasized d-inline-flex align-items-center justify-content-center me-md flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-sm-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true" data-bs-theme="dark">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-2xs fw-bold">Small decorative icon</p>
      <p class="mb-none">coreGlobalDimension400 (<code>2rem</code> or <code>32px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-md">
    <div class="bg-emphasized d-inline-flex align-items-center justify-content-center me-md flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-md-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true" data-bs-theme="dark">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-2xs fw-bold">Medium decorative icon</p>
      <p class="mb-none">coreGlobalDimension500 (<code>2.5rem</code> or <code>40px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-md">
    <div class="bg-emphasized d-inline-flex align-items-center justify-content-center me-md flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-lg-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true" data-bs-theme="dark">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-2xs fw-bold">Large decorative icon</p>
      <p class="mb-none">coreGlobalDimension600 (<code>3rem</code> or <code>48px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-md">
    <div class="bg-emphasized d-inline-flex align-items-center justify-content-center me-md flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-xl-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true" data-bs-theme="dark">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-2xs fw-bold">X-large decorative icon</p>
      <p class="mb-none">coreGlobalDimension700 (<code>3.5rem</code> or <code>56px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-md">
    <div class="bg-emphasized d-inline-flex align-items-center justify-content-center me-md flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-2xl-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true" data-bs-theme="dark">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-2xs fw-bold">2x-large decorative icon</p>
      <p class="mb-none">coreGlobalDimension900 (<code>4.5rem</code> or <code>72px</code> at zoom 100%)</p>
    </div>
  </div>
</div>

```html
<svg class="decorative-2xs-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-xs-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-sm-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-md-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-lg-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-xl-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-2xl-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
```

### Multiple lines

Sometimes you need a different structure to handle larger titles, or paragraphs that wrap over several lines. Here are some examples to handle these use cases. We've set arbitrary spacings, but align them with your design.

#### Centered on text block

This is the default behavior of our DOM.

{{< example >}}
<div class="d-flex align-items-center">
  <svg class="hxl-lg-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h1 class="mb-none">H1 with large icon and a very long title to see how it behaves while being wrapped</h1>
</div>
{{< /example >}}

{{< example >}}
<div class="d-flex align-items-center">
  <svg class="bm-lg-icon me-scaled-sm text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="mb-none">
    Default long paragraph with large icon. It stands here in order for you to see how the icon should behave when it's placed next to a long paragraph. Whenever the paragraph stands on multiple lines please prefer using a block element and not an inline element so there will no strange behaviors.
  </p>
</div>
{{< /example >}}

#### Above text block

You can also have the icon above the text block.

{{< example >}}
<div>
  <svg class="hxl-lg-icon mb-scaled-xs text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h1 class="mb-none">H1 with large icon and a very long title to see how it behaves while being wrapped</h1>
</div>
{{< /example >}}

{{< example >}}
<div>
  <svg class="bm-lg-icon mb-scaled-2xs text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="mb-none">
    Default long paragraph with large icon. It stands here in order for you to see how the icon should behave when it's placed next to a long paragraph. Whenever the paragraph stands on multiple lines please prefer using a block element and not an inline element so there will no strange behaviors.
  </p>
</div>
{{< /example >}}

### `<img>` and font icon

SVG Sprite is the preferred choice for flexibility, performance and accessibility, and this is why all our examples use this method but there are other ways to display icons. They should all behave the same thanks to our CSS. If you are experimenting any trouble, feel free to search or fill in a new [Github discussion](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/discussions) or contact [our team]({{< docsref "/about/team" >}}). <!-- Check out for more information in [our documentation]({{< docsref "/extend/icons" >}}). -->

{{< example >}}
<div class="d-flex align-items-center mb-md">
  <img class="hxl-lg-icon me-sm" alt="" src="/docs/{{< param docs_version >}}/assets/img/vite.svg">
  <h1 class="mb-none">H1 with large icon</h1>
</div>
<div class="d-flex align-items-center mb-md">
  <span class="hxl-lg-icon me-sm si si-settings" aria-hidden="true"></span>
  <h1 class="mb-none">H1 with large icon</h1>
</div>
{{< /example >}}

## Icons accessibility

{{< callout info >}}
For more details, **Orange Accessibility Guidelines** provides [a deep-dive article regarding SVG accessibility](https://a11y-guidelines.orange.com/en/articles/accessible-svg/).
{{< /callout >}}

#### Decorative icons
Purely **decorative icons** (like repeating information of an adjacent text) must be hidden to assistive technologies:
- for `<svg>` or `<span>` tags, use the attribute `aria-hidden="true"`
- for `<img>`, use an empty `alt` attribute
- CSS background images are intended to be decorative

#### Informative/meaningful icons

If the icon is **meaningful** with no visible adjacent text, e.g. indication in a table or only content of a button, you have to provide an appropriate alternative text with the description of the icon or the description of the action triggered.

The best way to do this is to keep the icon hidden to assistive technologies (see above) and add a visually hidden label which will be perceived by assistive technologies, by using the `.visually-hidden` class. You can also use an `aria-label` on the containing interactive element to provide an accessible name. For external images within the `<img>` tag, you can also fill the `alt` attribute directly.

Remember that you cannot use external images inside interactive elements because the color won't change with the element's status (hover, active, focus...), see [SVG external image]({{< docsref "extend/icons#svg-external-image" >}}).

<!-- todo add tooltip on buttons and explanation when available -->
{{< example class="mt-0 bd-btn-example">}}
<button type="button" class="btn btn-icon btn-default">
  <svg width="1rem" height="1rem" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#trash"/>
  </svg>
  <span class="visually-hidden">Delete</span>
</button>
<button type="button" class="btn btn-icon btn-default" aria-label="Delete">
  <svg width="1rem" height="1rem" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#trash"/>
  </svg>
</button>
<button type="button" class="btn btn-icon btn-default">
  <span class="icon si si-settings" aria-hidden="true"></span>
  <span class="visually-hidden">Open settings</span>
</button>
<button type="button" class="btn btn-icon btn-default" aria-label="Open settings">
  <span class="icon si si-settings" aria-hidden="true"></span>
</button>
<div class="d-inline-block bg-always-white">
  <img src="/docs/{{< param docs_version >}}/assets/img/heart-recommend.svg" alt="Favorite" width="32" height="32">
</div>
{{< /example >}}

## Use Solaris icons

There are many ways to use Solaris icons in a web page:
- Bundled, if you have several icons in your project:
  - [SVG sprite]({{< docsref "extend/icons#svg-sprite" >}}) (preferred choice for flexibility, performance and accessibility)
  - [Web font]({{< docsref "extend/icons#web-font" >}})
- Individually, if you have only few icons to render:
  - [Inline SVG]({{< docsref "extend/icons#inline-svg" >}})
  - [SVG external image]({{< docsref "extend/icons#svg-external-image" >}})
  - [CSS mask image SVG]({{< docsref "extend/icons#css-mask-image-svg" >}})

All icons can be retrieved easily in any of these formats in the Solaris icons finder. See Solaris icons library [develop documentation]({{< param icons_develop >}}) for complete development guidelines for the different formats, and their pros and cons.

### SVG sprite

This technique is the <strong>preferred choice</strong> for flexibility, performance and accessibility.

Using the [Solaris icons finder]({{< param icons >}}), you can generate an SVG sprite, a single SVG file containing all your icons in `<symbol>` elements, and then insert an icon through a `<use>` element. With SVG sprites, you can benefit of the power of `currentColor` for easy coloring and theming.

SVG sprite file example:

{{< example lang="svg" show_preview="false" >}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
  <symbol id="settings" fill="currentColor">
    <path d="..." style="fill-rule:evenodd"/>
  </symbol>
  <symbol id="trash" fill="currentColor" viewBox="0 0 1000 1000">
    <path d="..." style="fill-rule:evenodd"/>
  </symbol>
</svg>
{{< /example >}}

SVG sprite usage:

{{< example >}}
<svg width="3rem" height="3rem" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#settings"/>
</svg>
<svg width="3rem" height="3rem" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#trash"/>
</svg>
{{< /example >}}

To speed up loading, the SVG sprite file can be preloaded in the `<head>` of the page:

{{< example lang="html" show_preview="false" >}}
<link rel="preload" href="/path/to/your/sprite.svg" as="image" type="image/svg+xml">
{{< /example >}}

### Web font

Web font is not the preferred solution. However, for websites needing more than 20 icons, you may consider using a Web font instead of an SVG sprite.

Using the [Solaris icons finder]({{< param icons >}}), you can generate a Web font containing all your icons and use it like a classic font. Web font icons can be styled through CSS properties like `font-size` and `color`. please keep in mind that adding or removing icons from the font afterward can be complicated.

{{< example >}}
<span class="si si-settings" aria-hidden="true" style="font-size: 3rem"></span>
{{< /example >}}


<!--{{< callout warning >}}
Note that with this technique, you cannot have multicolor icons, so you cannot render the [warning icon]({{< docsref "extend/icons#warning-icon" >}}).
{{< /callout >}}-->

### Inline SVG

This technique should only be used if you have few icons to render, and if they are used only once in your website.

You can embed your icons directly within the HTML of your page (as opposed to an external image file). This way to use SVGs can benefit of the power of `currentColor` for easy coloring and theming.

{{< example class="mt-0" >}}
<svg fill="currentColor" class="decorative-sm-icon" viewBox="0 0 1000 1000" aria-hidden="true">
  <path d="M656.7 422.409a229.96 229.96 0 0 1-315.39.008A224.95 224.95 0 0 0 224.064 615H224v210a100 100 0 0 0 100 100h450V620a224.94 224.94 0 0 0-117.3-197.591M679 255A180 180 0 1 1 499 75a180 180 0 0 1 180 180" style="fill-rule:evenodd"/>
</svg>
{{< /example >}}

### SVG external image

You can use SVG through an `<img>` tag when:
- you only have few icons to render
- you don't need to change the icons colors. For that reason, **we do not recommend to use that technique**, so it won't be documented here.

### CSS mask image SVG

CSS mask image icons should be used when you can't or don't want to refer to an external image, or if you want to include the icon in a CSS `::before` or `::after` pseudo-element.

You should use the `mask-image` property instead of `background-image` to benefit from the coloring and theming system, by setting `background-color` property to `currentColor`. You can use the SVG code within your CSS (be sure to escape any characters with [our internal `escape-svg()` function]({{< docsref "/customize/sass" >}}#escape-svg)). When no dimensions are specified via `width` and `height` on the `<svg>`, the icon will fill the available space. Mask images can also be styled through CSS properties like `width` or `height`. Note that the `xmlns` attribute is required.

{{< example class="mt-0" >}}
<span class="icon-home"></span>
{{< /example >}}

Using:

{{< scss-docs name="icon-home" file="site/assets/scss/_component-examples.scss" >}}
