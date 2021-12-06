---
layout: single
title: Logos
description: The Master logo is our most important and valuable identity element. It’s the mark of assurance that appears on almost everything we do.
group: guidelines
subgroup: Core elements
#aliases:
#  - "/guidelines/"
#  - "/docs/5.1/guidelines/"
toc: true
---

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

<hr class="d-none"><!-- Boosted mod: to prevent following paragraphs to be styled like docs links -->

Boosted uses —and recommends to use— **a single SVG file for both logos**, since it's lightweight and easily made responsive. Here is the unminified SVG content:

{{< svg-docs >}}

## Orange Business Services logo

<div class="row row-cols-1 row-cols-md-2 gy-5 pt-2 mb-5">
  <div class="col">
    <div class="ratio ratio-16x9">
      <figure class="figure d-flex bg-dark">
        <div class="figure-img m-auto d-inline-flex align-items-baseline">
          <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="" aria-hidden="true" loading="lazy">
          <span class="h5 ms-2 mb-0 align-self-end">
            <span class="visually-hidden">Orange </span>
            Business<br>Services
          </span>
        </div>
        <figcaption class="figure-caption fw-bold text-body position-absolute">OBS logo left-aligned with white descriptor</figcaption>
      </figure>
    </div>
  </div>
  <div class="col">
    <div class="ratio ratio-16x9">
      <figure class="figure d-flex border border-1">
        <div class="figure-img m-auto d-inline-flex align-items-baseline">
          <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="" aria-hidden="true" loading="lazy">
          <span class="h5 ms-2 mb-0 align-self-end">
            <span class="visually-hidden">Orange </span>
            Business<br>Services
          </span>
        </div>
        <figcaption class="figure-caption fw-bold text-body position-absolute">OBS logo left-aligned with black descriptor</figcaption>
      </figure>
    </div>
  </div>
  <div class="col">
    <div class="ratio ratio-16x9">
      <figure class="figure d-flex bg-dark">
        <div class="figure-img m-auto d-inline-flex align-items-baseline">
          <span class="h5 me-2 mb-0 align-self-end text-end">
            <span class="visually-hidden">Orange </span>
            Business<br>Services
          </span>
          <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="" aria-hidden="true" loading="lazy">
        </div>
        <figcaption class="figure-caption fw-bold text-body position-absolute">OBS logo left-aligned with white descriptor</figcaption>
      </figure>
    </div>
  </div>
  <div class="col">
    <div class="ratio ratio-16x9">
      <figure class="figure d-flex border border-1">
        <div class="figure-img m-auto d-inline-flex align-items-baseline">
          <span class="h5 me-2 mb-0 align-self-end text-end">
            <span class="visually-hidden">Orange </span>
            Business<br>Services
          </span>
          <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="" aria-hidden="true" loading="lazy">
        </div>
        <figcaption class="figure-caption fw-bold text-body position-absolute">OBS logo left-aligned with black descriptor</figcaption>
      </figure>
    </div>
  </div>
</div>

### Using semantic markup

<hr class="d-none"><!-- Boosted mod: to prevent following paragraphs to be styled like docs links -->

Boosted [flex]({{< docsref "/utilities/flex" >}}) and [spacing]({{< docsref "/utilities/spacing" >}}) utilities allows to use semantic markup to implement Orange Business Services' logo.

{{< example show_preview="false" >}}
<div class="d-inline-flex align-items-baseline">
  <img id="obs" src="orange-logo.svg" width="50" height="50" alt="" aria-hidden="true" loading="lazy">
  <span class="h5 ms-2 mb-0 align-self-end">
    <span class="visually-hidden">Orange </span>
    Business<br>Services
  </span>
</div>
{{< /example >}}

A single CSS property is required for proper alignment:

{{< example show_preview="false" lang="scss" >}}
#obs {
  margin-bottom: $spacer / 10;
}
{{< /example >}}
