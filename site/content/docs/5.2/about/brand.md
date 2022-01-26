---
layout: docs
title: Orange brand guidelines
description: Documentation and examples for Orange's logo and brand usage guidelines.
group: about
aliases:
  - "/docs/about/brand/"
toc: true
---

{{< callout info >}}
Boosted is based on [Bootstrap]({{< param bootstrap >}}), which has [its own logo and brand usage guidelines]({{< param bootstrap >}}/docs/{{< param docs_version >}}/about/brand/).
{{</ callout >}}

Have a need for Boosted's brand resources? Great! We have only a few guidelines we follow, and in turn ask you to follow as well. These guidelines were published by Orange SA on the [Orange Design System website]({{< param ods.web >}}).

## Orange logo

<div class="row row-cols-md-2 mt-4 mb-5">
  <div class="col">
    <div class="ratio ratio-1x1">
    <figure class="figure d-flex bg-dark">
      <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" class="figure-img img-fluid m-auto" width="220" height="220" role="img" alt="Orange" loading="lazy">
      <figcaption class="figure-caption fw-bold text-body position-absolute">Master logo</figcaption>
    </figure>
    </div>
  </div>
  <div class="col">
    <div class="ratio ratio-1x1">
    <figure class="figure d-flex bg-dark">
      <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" class="figure-img m-auto" width="30" height="30" role="img" alt="Orange" loading="lazy">
      <figcaption class="figure-caption fw-bold text-body position-absolute">Small logo</figcaption>
    </figure>
    </div>
  </div>
</div>

### Responsive SVG

Boosted uses —and recommends to use— **a single SVG file for both logos**, since it's lightweight and easily made responsive. Here is the unminified SVG content:

{{< svg-docs >}}

## Orange Business Services logo

Orange Business Services has its own logo that contains the Orange logo and the "Business Services" text. This set is a logo by itself, must be considered as a single SVG file and must not be built manually by assembling an image and some texts.

<div class="row row-cols-md-2 mt-4 mb-5">
  <div class="col">
    <div class="ratio ratio-1x1">
    <figure class="figure d-flex bg-dark">
      <img src="/docs/{{< param docs_version >}}/assets/brand/OBS-logo.svg" class="figure-img img-fluid m-auto" width="220" height="220" role="img" alt="Orange" loading="lazy">
      <figcaption class="figure-caption fw-bold text-body position-absolute">Orange Business Services logo</figcaption>
    </figure>
    </div>
  </div>
</div>

{{< svg-docs file="img/OBS-logo.svg" >}}

## Build your own logo

If no logo exists as a SVG file Boosted [flex]({{< docsref "/utilities/flex" >}}) and [spacing]({{< docsref "/utilities/spacing" >}}) utilities allows to use semantic markup to implement it.

{{< example show_preview="false" >}}
<div class="d-inline-flex align-items-baseline">
  <img id="example" src="orange-logo.svg" width="50" height="50" alt="" aria-hidden="true" loading="lazy">
  <span class="h5 ms-2 mb-0 align-self-end">
    <span class="visually-hidden">Orange </span>
    Example<br>Service
  </span>
</div>
{{< /example >}}

A single CSS property is required for proper alignment:

{{< example show_preview="false" lang="scss" >}}
#example {
  margin-bottom: $spacer / 10;
}
{{< /example >}}
