---
layout: docs
title: Opacity
description: Control the opacity of elements.
group: utilities
added:
  version: "5.1"
aliases:
  - "/docs/utilities/opacity/"
---

The `opacity` property sets the opacity level for an element.

The opacity level describes the semantic transparency level, where `opaque` is not transparent at all, `emphasis` to `weaker` are various levels of transparency, and `transparent` is completely transparent.

Set the opacity of an element using `.opacity-{value}` utilities.

<!--TODO-->

<div class="bd-example d-sm-flex">
  <div class="opacity-opaque p-3 m-2 bg-primary fw-bold"></div>
  <div class="opacity-emphasis p-3 m-2 bg-primary fw-bold"></div>
  <div class="opacity-medium p-3 m-2 bg-primary fw-bold"></div>
  <div class="opacity-weak p-3 m-2 bg-primary fw-bold"></div>
  <div class="opacity-weaker p-3 m-2 bg-primary fw-bold"></div>
  <div class="opacity-transparent p-3 m-2 bg-primary fw-bold"></div>
</div>

```html
<div class="opacity-opaque">...</div>
<div class="opacity-emphasis">...</div>
<div class="opacity-medium">...</div>
<div class="opacity-weak">...</div>
<div class="opacity-weaker">...</div>
<div class="opacity-transparent">...</div>
```

<details style="border: 1px dashed black" class="p-2 mb-4">
<summary>Bootstrap <span class="tag tag-sm float-end"><code>$enable-bootstrap-specificities: true</code></span></summary>

<div class="alert alert-info alert-sm mt-2 mb-4" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Info</span></span>
  <p>This part is enabled only with `$enable-bootstrap-specificities`</p>
</div>

The `opacity` property sets the opacity level for an element.

The opacity level describes the transparency level, where `1` is not transparent at all, `.5` is 50% visible, and `0` is completely transparent.

Set the `opacity` of an element using `.opacity-{value}` utilities.

<!--
  Boosted mod:
  - Removed .text-light and .rounded classes
  - Removed div text content to avoid a11y issue with semi-transparent text
-->
<div class="bd-example d-sm-flex">
  <div class="opacity-100 p-3 m-2 bg-primary fw-bold"></div>
  <div class="opacity-75 p-3 m-2 bg-primary fw-bold"></div>
  <div class="opacity-50 p-3 m-2 bg-primary fw-bold"></div>
  <div class="opacity-25 p-3 m-2 bg-primary fw-bold"></div>
  <div class="opacity-0 p-3 m-2 bg-primary fw-bold"></div>
</div>

```html
<div class="opacity-100">...</div>
<div class="opacity-75">...</div>
<div class="opacity-50">...</div>
<div class="opacity-25">...</div>
<div class="opacity-0">...</div>
```
</details>

## CSS

### Sass maps

Opacity utilities are declared via Sass map and then generated with our utilities API.

{{< scss-docs name="opacities-variables-maps" file="scss/tokens/_semantic.scss" >}}

### Sass utilities API

Opacity utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-opacity-uds" file="scss/_utilities.scss" >}}

<details style="border: 1px dashed black" class="p-2 mb-4">
<summary>Bootstrap <span class="tag tag-sm float-end"><code>$enable-bootstrap-specificities: true</code></span></summary>

<div class="alert alert-info alert-sm mt-2 mb-4" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Info</span></span>
  <p>This part is enabled only with `$enable-bootstrap-specificities`</p>
</div>
{{< scss-docs name="utils-opacity" file="scss/_utilities.scss" >}}
</details>
