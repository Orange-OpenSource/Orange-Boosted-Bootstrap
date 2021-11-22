---
layout: docs
title: Stickers
description: Use Boosted's custom stickers to inform people about new offers.
group: components
toc: true
---

## Overview

General usage of the stickers. (Ask to the designers ?)

## Examples

{{< example >}}
<div class="row align-items-center my-5">
  <div class="col col-12 col-lg-5 text-lg-start">
    <svg viewBox="0 0 140 140" class="sticker-lg sticker-one-line" aria-hidden="true" focusable="false">
      <circle r="70" cx="70" cy="70"></circle>
      <text x="50%" y="50%">New</text>
    </svg>
  </div>

  <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
    <svg viewBox="0 0 140 140" class="sticker-md sticker-icon" aria-hidden="true" focusable="false">
      <circle r="70" cx="70" cy="70"></circle>
      <image x="50%" y="50%" height="80" width="80" xlink:href="/docs/{{< param docs_version >}}/assets/img/5G.svg" />
    </svg>
  </div>

  <div class="col col-12 col-md-6 col-lg-3 text-end">
    <svg viewBox="0 0 140 140" class="sticker-sm sticker-icon-two-lines" aria-hidden="true" focusable="false">
      <circle r="70" cx="70" cy="70"></circle>
      <image x="50%" y="30%" height="35" width="35" xlink:href="/docs/{{< param docs_version >}}/assets/img/Delivery.svg" />
      <text x="50%" y="60%">
        <tspan x="50%" dy="-.6em">Free</tspan><tspan x="50%" dy="1em">delivery</tspan>
      </text>
    </svg>
  </div>
</div>
{{< /example >}}

## Accessibility

For the remaining page, the accessibility of the stickers will be set and considered as a decorating image aka : `aria-hidden="true" focusable="false"`.

If the sticker stands for a functionality of the site and not as a decorative element, please read the examples below in order to have a good idea of what is needed for stickers. See [more](https://a11y-guidelines.orange.com/fr/articles/svg-accessibles/).

{{< example >}}
<div class="row align-items-center my-5">
  <div class="col col-12 col-lg-5 text-lg-start">
    <svg viewBox="0 0 140 140" class="sticker-lg sticker-one-line" role="img" lang="en" aria-labelledby="StickersTitle1 StickersDesc1" tabindex="0">
      <title id="StickersTitle1" lang="en">Sticker utility</title>
      <desc id="StickersDesc1" lang="en">Sticker description if needed</desc>
      <circle r="70" cx="70" cy="70"></circle>
      <text x="50%" y="50%" aria-hidden="true">New</text>
    </svg>
  </div>

  <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
    <svg viewBox="0 0 140 140" class="sticker-md sticker-icon" role="img" lang="en" aria-labelledby="StickersTitle2 StickersDesc2" tabindex="0">
      <title id="StickersTitle2" lang="en">Sticker utility</title>
      <desc id="StickersDesc2" lang="en">Sticker description if needed</desc>
      <circle r="70" cx="70" cy="70"></circle>
      <image x="50%" y="50%" height="80" width="80" xlink:href="/docs/{{< param docs_version >}}/assets/img/5G.svg" />
    </svg>
  </div>

  <div class="col col-12 col-md-6 col-lg-3 text-end">
    <svg viewBox="0 0 140 140" class="sticker-sm sticker-icon-two-lines" role="img" lang="en" aria-labelledby="StickersTitle3 StickersDesc3" tabindex="0">
      <title id="StickersTitle3" lang="en">Sticker utility</title>
      <desc id="StickersDesc3" lang="en">Sticker description if needed</desc>
      <circle r="70" cx="70" cy="70"></circle>
      <image x="50%" y="30%" height="35" width="35" xlink:href="/docs/{{< param docs_version >}}/assets/img/Delivery.svg" />
      <text x="50%" y="60%" aria-hidden="true">
        <tspan x="50%" dy="-.55em">Free</tspan><tspan x="50%" dy="1.1em">delivery</tspan>
      </text>
    </svg>
  </div>
</div>
{{< /example >}}

## Size

### Standard sizing

Add `.sticker-{sm|md|lg}` to the svg tag in order to give the sticker the good size. Only these sizes should be used, however the size can be modified by setting the height and the width of the svg up.

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg viewBox="0 0 140 140" class="sticker-sm sticker-one-line" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">New</text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg viewBox="0 0 140 140" class="sticker-md sticker-one-line" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">New</text>
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg viewBox="0 0 140 140" class="sticker-lg sticker-one-line" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">New</text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-sm" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">New</text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-md" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">New</text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-lg" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">New</text>
</svg>
```

## Styles

Choose one and only one class below in order to apply an architecture to the sticker.

### Sticker on one line

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg viewBox="0 0 140 140" class="sticker-sm sticker-one-line" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">New</text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg viewBox="0 0 140 140" class="sticker-md sticker-one-line" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">New</text>
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg viewBox="0 0 140 140" class="sticker-lg sticker-one-line" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">New</text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-sm sticker-one-line" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">New</text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-md sticker-one-line" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">New</text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-lg sticker-one-line" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">New</text>
</svg>
```

### Sticker with an icon

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg viewBox="0 0 140 140" class="sticker-sm sticker-icon" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
      <image x="50%" y="50%" height="80" width="80" xlink:href="/docs/{{< param docs_version >}}/assets/img/5G.svg" />
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg viewBox="0 0 140 140" class="sticker-md sticker-icon" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
      <image x="50%" y="50%" height="80" width="80" xlink:href="/docs/{{< param docs_version >}}/assets/img/5G.svg" />
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg viewBox="0 0 140 140" class="sticker-lg sticker-icon" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
      <image x="50%" y="50%" height="80" width="80" xlink:href="/docs/{{< param docs_version >}}/assets/img/5G.svg" />
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-sm sticker-icon" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <image x="50%" y="50%" height="80" width="80" xlink:href="/path/to/svg.svg" />
</svg>

<svg viewBox="0 0 140 140" class="sticker-md sticker-icon" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <image x="50%" y="50%" height="80" width="80" xlink:href="/path/to/svg.svg" />
</svg>

<svg viewBox="0 0 140 140" class="sticker-lg sticker-icon" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <image x="50%" y="50%" height="80" width="80" xlink:href="/path/to/svg.svg" />
</svg>
```

### Sticker on two lines

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg viewBox="0 0 140 140" class="sticker-sm sticker-two-lines" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-.5em">Free</tspan><tspan x="50%" dy="1em">delivery</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg viewBox="0 0 140 140" class="sticker-md sticker-two-lines" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-.5em">Free</tspan><tspan x="50%" dy="1em">delivery</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg viewBox="0 0 140 140" class="sticker-lg sticker-two-lines" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-.5em">Free</tspan><tspan x="50%" dy="1em">delivery</tspan>
        </text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-sm sticker-two-lines" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-.5em">Free</tspan><tspan x="50%" dy="1em">delivery</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-md sticker-two-lines" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-.5em">Free</tspan><tspan x="50%" dy="1em">delivery</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-lg sticker-two-lines" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-.5em">Free</tspan><tspan x="50%" dy="1em">delivery</tspan>
  </text>
</svg>
```

Here the `<tspan>`s are inlined, otherwise it adds a white space that shifts the center effect.

### Sticker with an icon and two lines

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg viewBox="0 0 140 140" class="sticker-sm sticker-icon-two-lines" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
      <image x="50%" y="40" height="35" width="35" xlink:href="/docs/{{< param docs_version >}}/assets/img/Delivery.svg" />
        <text x="50%" y="60%">
          <tspan x="50%" dy="-.6em">Free</tspan><tspan x="50%" dy="1em">delivery</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg viewBox="0 0 140 140" class="sticker-md sticker-icon-two-lines" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
      <image x="50%" y="30%" height="35" width="35" xlink:href="/docs/{{< param docs_version >}}/assets/img/Delivery.svg" />
        <text x="50%" y="60%">
          <tspan x="50%" dy="-.6em">Free</tspan><tspan x="50%" dy="1em">delivery</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg viewBox="0 0 140 140" class="sticker-lg sticker-icon-two-lines" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
      <image x="50%" y="30%" height="35" width="35" xlink:href="/docs/{{< param docs_version >}}/assets/img/Delivery.svg" />
        <text x="50%" y="60%">
          <tspan x="50%" dy="-.6em">Free</tspan><tspan x="50%" dy="1em">delivery</tspan>
        </text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-sm sticker-icon-two-lines" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <image x="50%" y="30%" height="35" width="35" xlink:href="/path/to/svg.svg" />
  <text x="50%" y="60%">
    <tspan x="50%" dy="-.6em">Free</tspan><tspan x="50%" dy="1em">delivery</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-md sticker-icon-two-lines" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <image x="50%" y="30%" height="35" width="35" xlink:href="/path/to/svg.svg" />
  <text x="50%" y="60%">
    <tspan x="50%" dy="-.6em">Free</tspan><tspan x="50%" dy="1em">delivery</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-lg sticker-icon-two-lines" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <image x="50%" y="30%" height="35" width="35" xlink:href="/path/to/svg.svg" />
  <text x="50%" y="60%">
    <tspan x="50%" dy="-.6em">Free</tspan><tspan x="50%" dy="1em">delivery</tspan>
  </text>
</svg>
```

Here the `<tspan>`s are inlined, otherwise it adds a white space that shifts the center effect.

### Sticker price

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg viewBox="0 0 140 140" class="sticker-sm sticker-price" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" y="50%">39,99€</tspan><tspan x="50%" dy="1.6em">Per month</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg viewBox="0 0 140 140" class="sticker-md sticker-price" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" y="50%">39,99€</tspan><tspan x="50%" dy="1.6em">Per month</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg viewBox="0 0 140 140" class="sticker-lg sticker-price" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" y="50%">39,99€</tspan><tspan x="50%" dy="1.6em">Per month</tspan>
        </text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-sm sticker-price" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" y="50%">39,99€</tspan><tspan x="50%" dy="1.6em">Per month</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-md sticker-price" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" y="50%">39,99€</tspan><tspan x="50%" dy="1.6em">Per month</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-lg sticker-price" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" y="50%">39,99€</tspan><tspan x="50%" dy="1.6em">Per month</tspan>
  </text>
</svg>
```

Here the `<tspan>`s are inlined, otherwise it adds a white space that shifts the center effect.

### Sticker with old and new price

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg viewBox="0 0 140 140" class="sticker-sm sticker-old-and-new-price" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-1.4em">69,99€</tspan><tspan x="50%" y="53%">39,99€</tspan><tspan x="50%" dy="1.625em">Per month</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg viewBox="0 0 140 140" class="sticker-md sticker-old-and-new-price" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-1.4em">69,99€</tspan><tspan x="50%" y="53%">39,99€</tspan><tspan x="50%" dy="1.625em">Per month</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg viewBox="0 0 140 140" class="sticker-lg sticker-old-and-new-price" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-1.4em">69,99€</tspan><tspan x="50%" y="53%">39,99€</tspan><tspan x="50%" dy="1.625em">Per month</tspan>
        </text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-sm sticker-old-and-new-price" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-1.4em">69,99€</tspan><tspan x="50%" y="53%">39,99€</tspan><tspan x="50%" dy="1.625em">Per month</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-md sticker-old-and-new-price" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-1.4em">69,99€</tspan><tspan x="50%" y="53%">39,99€</tspan><tspan x="50%" dy="1.625em">Per month</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-lg sticker-old-and-new-price" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-1.4em">69,99€</tspan><tspan x="50%" y="53%">39,99€</tspan><tspan x="50%" dy="1.625em">Per month</tspan>
  </text>
</svg>
```

Here the `<tspan>`s are inlined, otherwise it adds a white space that shifts the center effect.

### Sticker for bonus minutes

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg viewBox="0 0 140 140" class="sticker-sm sticker-bonus-min" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-1.8em">Bonus</tspan><tspan x="50%" y="53%">90mins</tspan><tspan x="50%" dy="1.625em">Per month</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg viewBox="0 0 140 140" class="sticker-md sticker-bonus-min" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-1.8em">Bonus</tspan><tspan x="50%" y="53%">90mins</tspan><tspan x="50%" dy="1.625em">Per month</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg viewBox="0 0 140 140" class="sticker-lg sticker-bonus-min" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-1.8em">Bonus</tspan><tspan x="50%" y="53%">90mins</tspan><tspan x="50%" dy="1.625em">Per month</tspan>
        </text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-sm sticker-bonus-min" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-1.8em">Bonus</tspan><tspan x="50%" y="53%">90mins</tspan><tspan x="50%" dy="1.625em">Per month</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-md sticker-bonus-min" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-1.8em">Bonus</tspan><tspan x="50%" y="53%">90mins</tspan><tspan x="50%" dy="1.625em">Per month</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-lg sticker-bonus-min" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-1.8em">Bonus</tspan><tspan x="50%" y="53%">90mins</tspan><tspan x="50%" dy="1.625em">Per month</tspan>
  </text>
</svg>
```

Here the `<tspan>`s are inlined, otherwise it adds a white space that shifts the center effect.

### Sticker for bonus offer

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg viewBox="0 0 140 140" class="sticker-sm sticker-bonus-offer" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-2.5em">Bonus</tspan><tspan x="50%" y="50%">250%</tspan><tspan x="50%" dy="1.625em">With Orange</tspan><tspan x="50%" dy="1.1em">Money</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg viewBox="0 0 140 140" class="sticker-md sticker-bonus-offer" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-2.5em">Bonus</tspan><tspan x="50%" y="50%">250%</tspan><tspan x="50%" dy="1.625em">With Orange</tspan><tspan x="50%" dy="1.1em">Money</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg viewBox="0 0 140 140" class="sticker-lg sticker-bonus-offer" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-2.5em">Bonus</tspan><tspan x="50%" y="50%">250%</tspan><tspan x="50%" dy="1.625em">With Orange</tspan><tspan x="50%" dy="1.1em">Money</tspan>
        </text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-sm sticker-bonus-offer" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-2.5em">Bonus</tspan><tspan x="50%" y="50%">250%</tspan><tspan x="50%" dy="1.625em">With Orange</tspan><tspan x="50%" dy="1.1em">Money</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-md sticker-bonus-offer" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-2.5em">Bonus</tspan><tspan x="50%" y="50%">250%</tspan><tspan x="50%" dy="1.625em">With Orange</tspan><tspan x="50%" dy="1.1em">Money</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-lg sticker-bonus-offer" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-2.5em">Bonus</tspan><tspan x="50%" y="50%">250%</tspan><tspan x="50%" dy="1.625em">With Orange</tspan><tspan x="50%" dy="1.1em">Money</tspan>
  </text>
</svg>
```

Here the `<tspan>`s are inlined, otherwise it adds a white space that shifts the center effect.

### Sticker for additional minutes

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg viewBox="0 0 140 140" class="sticker-sm sticker-add-min" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-1em">+</tspan><tspan x="50%" y="50%">90mins</tspan><tspan x="50%" dy="1.75em">Per month</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg viewBox="0 0 140 140" class="sticker-md sticker-add-min" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-1em">+</tspan><tspan x="50%" y="50%">90mins</tspan><tspan x="50%" dy="1.75em">Per month</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg viewBox="0 0 140 140" class="sticker-lg sticker-add-min" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-1em">+</tspan><tspan x="50%" y="50%">90mins</tspan><tspan x="50%" dy="1.75em">Per month</tspan>
        </text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-sm sticker-add-min" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-1em">+</tspan><tspan x="50%" y="50%">90mins</tspan><tspan x="50%" dy="1.75em">Per month</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-md sticker-add-min" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-1em">+</tspan><tspan x="50%" y="50%">90mins</tspan><tspan x="50%" dy="1.75em">Per month</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-lg sticker-add-min" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-1em">+</tspan><tspan x="50%" y="50%">90mins</tspan><tspan x="50%" dy="1.75em">Per month</tspan>
  </text>
</svg>
```

Here the `<tspan>`s are inlined, otherwise it adds a white space that shifts the center effect.

### Sticker for additional offer

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg viewBox="0 0 140 140" class="sticker-sm sticker-add-offer" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-1.25em">+</tspan><tspan x="50%" y="45%">250%</tspan><tspan x="50%" dy="2em">With Orange</tspan><tspan x="50%" dy="1.1em">Money</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-lg-center">
      <svg viewBox="0 0 140 140" class="sticker-md sticker-add-offer" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-1.25em">+</tspan><tspan x="50%" y="45%">250%</tspan><tspan x="50%" dy="2em">With Orange</tspan><tspan x="50%" dy="1.1em">Money</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg viewBox="0 0 140 140" class="sticker-lg sticker-add-offer" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-1.25em">+</tspan><tspan x="50%" y="45%">250%</tspan><tspan x="50%" dy="2em">With Orange</tspan><tspan x="50%" dy="1.1em">Money</tspan>
        </text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-sm sticker-add-offer" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-1.25em">+</tspan><tspan x="50%" y="45%">250%</tspan><tspan x="50%" dy="1.625em">With Orange</tspan><tspan x="50%" dy="1.1em">Money</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-md sticker-add-offer" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-1.25em">+</tspan><tspan x="50%" y="45%">250%</tspan><tspan x="50%" dy="1.625em">With Orange</tspan><tspan x="50%" dy="1.1em">Money</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-lg sticker-add-offer" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-1.25em">+</tspan><tspan x="50%" y="45%">250%</tspan><tspan x="50%" dy="1.625em">With Orange</tspan><tspan x="50%" dy="1.1em">Money</tspan>
  </text>
</svg>
```

Here the `<tspan>`s are inlined, otherwise it adds a white space that shifts the center effect.

## Sass

### Variables

{{< scss-docs name="stickers-variables" file="scss/_variables.scss" >}}
