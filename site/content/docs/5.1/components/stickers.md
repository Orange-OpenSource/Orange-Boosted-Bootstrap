---
layout: docs
title: Stickers
description: Use Boosted's custom stickers to inform people about new offers.
group: components
toc: true
---

## Overview



## Examples

### Test avec des svg

{{< example >}}
<div class="row align-items-center my-5">
  <div class="col col-12 col-lg-5 text-lg-start">
    <svg class="sticker-lg sticker-one-line">
      <title>Sticker</title>
      <circle></circle>
      <text x="50%" y="50%">New</text>
    </svg>
  </div>

  <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
    <svg class="sticker-md sticker-one-line">
      <circle></circle>
      <text x="50%" y="50%">New</text>
    </svg>
  </div>

  <div class="col col-12 col-md-6 col-lg-3 text-end">
    <svg class="sticker-sm sticker-one-line">
      <circle></circle>
      <text x="50%" y="50%">New</text>
    </svg>
  </div>
</div>


<div class="row align-items-center my-5">
  <div class="col col-12 col-lg-5 text-lg-start">
    <svg class="sticker-lg sticker-icon">
      <title></title>
      <circle></circle>
      <image x="50%" y="50%" xlink:href="/docs/5.1/assets/5G.svg" />
    </svg>
  </div>

  <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
    <svg class="sticker-md sticker-icon">
      <circle></circle>
      <image x="50%" y="50%" xlink:href="/docs/5.1/assets/5G.svg" />
    </svg>
  </div>

  <div class="col col-12 col-md-6 col-lg-3 text-end">
    <svg class="sticker-sm sticker-icon">
      <circle></circle>
      <image x="50%" y="50%" xlink:href="/docs/5.1/assets/5G.svg" />
    </svg>
  </div>
</div>
{{< /example >}}

## Sizing

Add `.sticker-{sm|md|lg}` to the svg in order to have the sticker of the good size.

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg class="sticker-sm sticker-one-line">
        <circle></circle>
        <text x="50%" y="50%">New</text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg class="sticker-md sticker-one-line">
        <circle></circle>
        <text x="50%" y="50%">New</text>
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg class="sticker-lg sticker-one-line">
        <title>Sticker</title>
        <circle></circle>
        <text x="50%" y="50%">New</text>
      </svg>
    </div>
  </div>
</div>

```html
<svg class="sticker-sm sticker-one-line">
  <circle></circle>
  <text x="50%" y="50%">New</text>
</svg>

<svg class="sticker-md sticker-one-line">
  <circle></circle>
  <text x="50%" y="50%">New</text>
</svg>

<svg class="sticker-lg sticker-one-line">
  <circle></circle>
  <text x="50%" y="50%">New</text>
</svg>
```

## Styles

### Sticker on one line

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg class="sticker-sm sticker-one-line">
        <circle></circle>
        <text x="50%" y="50%">New</text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg class="sticker-md sticker-one-line">
        <circle></circle>
        <text x="50%" y="50%">New</text>
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg class="sticker-lg sticker-one-line">
        <title>Sticker</title>
        <circle></circle>
        <text x="50%" y="50%">New</text>
      </svg>
    </div>
  </div>
</div>

```html
<svg class="sticker-sm sticker-one-line">
  <circle></circle>
  <text x="50%" y="50%">New</text>
</svg>

<svg class="sticker-md sticker-one-line">
  <circle></circle>
  <text x="50%" y="50%">New</text>
</svg>

<svg class="sticker-lg sticker-one-line">
  <circle></circle>
  <text x="50%" y="50%">New</text>
</svg>
```

### Sticker with an icon

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg class="sticker-sm sticker-icon">
        <circle></circle>
        <image x="50%" y="50%" xlink:href="/docs/5.1/assets/5G.svg" />
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg class="sticker-md sticker-icon">
        <circle></circle>
        <image x="50%" y="50%" xlink:href="/docs/5.1/assets/5G.svg" />
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg class="sticker-lg sticker-icon">
        <title>Sticker</title>
        <circle></circle>
        <image x="50%" y="50%" xlink:href="/docs/5.1/assets/5G.svg" />
      </svg>
    </div>
  </div>
</div>

```html
<svg class="sticker-sm sticker-icon">
  <circle></circle>
  <image x="50%" y="50%" xlink:href="/docs/5.1/assets/5G.svg" />
</svg>

<svg class="sticker-md sticker-icon">
  <circle></circle>
  <image x="50%" y="50%" xlink:href="/docs/5.1/assets/5G.svg" />
</svg>

<svg class="sticker-lg sticker-icon">
  <circle></circle>
  <image x="50%" y="50%" xlink:href="/docs/5.1/assets/5G.svg" />
</svg>
```

### Sticker on two lines

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg class="sticker-sm sticker-two-lines">
        <circle></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-.55em">Free</tspan>
          <tspan x="50%" dy="1.1em">delivery</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg class="sticker-md sticker-two-lines">
        <circle></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-.55em">Free</tspan>
          <tspan x="50%" dy="1.1em">delivery</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg class="sticker-lg sticker-two-lines">
        <title>Sticker</title>
        <circle></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-.55em">Free</tspan>
          <tspan x="50%" dy="1.1em">delivery</tspan>
        </text>
      </svg>
    </div>
  </div>
</div>

```html
<svg class="sticker-sm sticker-two-lines">
  <circle></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-.55em">Free</tspan>
    <tspan x="50%" dy="1.1em">delivery</tspan>
  </text>
</svg>

<svg class="sticker-md sticker-two-lines">
  <circle></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-.55em">Free</tspan>
    <tspan x="50%" dy="1.1em">delivery</tspan>
  </text>
</svg>

<svg class="sticker-lg sticker-two-lines">
  <circle></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-.55em">Free</tspan>
    <tspan x="50%" dy="1.1em">delivery</tspan>
  </text>
</svg>
```

### Sticker with an icon and two lines

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg class="sticker-sm sticker-icon-two-lines">
        <circle></circle>
        <image x="50%" y="30%" xlink:href="/docs/5.1/assets/Delivery.svg" />
        <text x="50%" y="60%">
          <tspan x="50%" dy="-.55em">Free</tspan><tspan x="50%" dy="1.1em">delivery</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg class="sticker-md sticker-icon-two-lines">
        <circle></circle>
        <image x="50%" y="30%" xlink:href="/docs/5.1/assets/Delivery.svg" />
        <text x="50%" y="60%">
          <tspan x="50%" dy="-.55em">Free</tspan><tspan x="50%" dy="1.1em">delivery</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg class="sticker-lg sticker-icon-two-lines">
        <title>Sticker</title>
        <circle></circle>
        <image x="50%" y="30%" xlink:href="/docs/5.1/assets/Delivery.svg" />
        <text x="50%" y="60%">
          <tspan x="50%" dy="-.55em">Free</tspan><tspan x="50%" dy="1.1em">delivery</tspan>
        </text>
      </svg>
    </div>
  </div>
</div>

```html
<svg class="sticker-sm sticker-icon-two-lines">
  <circle></circle>
  <image x="50%" y="30%" xlink:href="/docs/5.1/assets/Delivery.svg" />
  <text x="50%" y="60%">
    <tspan x="50%" dy="-.55em">Free</tspan><tspan x="50%" dy="1.1em">delivery</tspan>
  </text>
</svg>

<svg class="sticker-md sticker-icon-two-lines">
  <circle></circle>
  <image x="50%" y="30%" xlink:href="/docs/5.1/assets/Delivery.svg" />
  <text x="50%" y="60%">
    <tspan x="50%" dy="-.55em">Free</tspan><tspan x="50%" dy="1.1em">delivery</tspan>
  </text>
</svg>

<svg class="sticker-lg sticker-icon-two-lines">
  <circle></circle>
  <image x="50%" y="30%" xlink:href="/docs/5.1/assets/Delivery.svg" />
  <text x="50%" y="60%">
    <tspan x="50%" dy="-.55em">Free</tspan><tspan x="50%" dy="1.1em">delivery</tspan>
  </text>
</svg>
```
