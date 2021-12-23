---
layout: docs
title: Orange sticker
description: Use Boosted's custom stickers to inform people about new offers.
group: components
toc: true
---

## Overview

Stickers have their own relative sizes with `rem` units. They also have their own pattern.

## With flexboxes

{{< example >}}

<div class="sticker sticker-lg">
  <span class="sticker-text-xl">New</span>
</div>

<div class="sticker sticker-lg justify-content-center">
  <svg class="sticker-icon-lg"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#5G"></use></svg>
</div>

<div class="sticker sticker-lg">
  <span class="sticker-text-md-multiline">Free delivery</span>
</div>

<div class="sticker sticker-lg">
  <svg class="sticker-icon"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delivery"></use></svg>
  <span class="sticker-text-md-multiline">Free delivery</span>
</div>

<!--

<div class="row align-items-center my-5">
  <div class="col col-12 col-lg-5 text-center">
    <div class="sticker sticker-lg">
      <svg class="sticker-icon-md"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delivery"></use></svg>
      <div class="sticker-text-lg pb-3">Free<br>delivery</div>
    </div>
  </div>

  <div class="col col-12 col-md-6 col-lg-4 text-center">
    <div class="sticker">
      <svg class="sticker-icon-md"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delivery"></use></svg>
      <div class="sticker-text-lg pb-2">Free<br>delivery</div>
    </div>
  </div>

  <div class="col col-12 col-md-6 col-lg-3 text-center">
    <div class="sticker sticker-sm">
      <svg class="sticker-icon-md"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delivery"></use></svg>
      <div class="sticker-text-lg pb-2">Free<br>delivery</div>
    </div>
  </div>
</div>


<div class="row align-items-center my-5">
  <div class="col col-12 col-lg-5 text-center">
    <div class="sticker sticker-lg">
      <div class="sticker-text-xl pt-3">39,99€</div>
      <div class="sticker-text-sm">Per month</div>
    </div>
  </div>

  <div class="col col-12 col-md-6 col-lg-4 text-center">
    <div class="sticker">
      <div class="sticker-text-xl pt-2">39,99€</div>
      <div class="sticker-text-sm">Per month</div>
    </div>
  </div>

  <div class="col col-12 col-md-6 col-lg-3 text-center">
    <div class="sticker sticker-sm">
      <div class="sticker-text-xl pt-2">39,99€</div>
      <div class="sticker-text-sm">Per month</div>
    </div>
  </div>
</div>


<div class="row align-items-center my-5">
  <div class="col col-12 col-lg-5 text-center">
    <div class="sticker sticker-lg">
      <div class="sticker-text-md text-decoration-line-through">69,99€</div>
      <div class="sticker-text-xl">39,99€</div>
      <div class="sticker-text-sm">Per month</div>
    </div>
  </div>

  <div class="col col-12 col-md-6 col-lg-4 text-center">
    <div class="sticker">
      <div class="sticker-text-md text-decoration-line-through">69,99€</div>
      <div class="sticker-text-xl">39,99€</div>
      <div class="sticker-text-sm">Per month</div>
    </div>
  </div>

  <div class="col col-12 col-md-6 col-lg-3 text-center">
    <div class="sticker sticker-sm">
      <div class="sticker-text-md text-decoration-line-through">69,99€</div>
      <div class="sticker-text-xl">39,99€</div>
      <div class="sticker-text-sm">Per month</div>
    </div>
  </div>
</div>


<div class="row align-items-center my-5">
  <div class="col col-12 col-lg-5 text-center">
    <div class="sticker sticker-lg">
      <div class="sticker-text-sm pb-2">Bonus</div>
      <div class="sticker-text-xl">90 mins</div>
      <div class="sticker-text-sm pb-3">Per month</div>
    </div>
  </div>

  <div class="col col-12 col-md-6 col-lg-4 text-center">
    <div class="sticker">
      <div class="sticker-text-sm pb-2">Bonus</div>
      <div class="sticker-text-xl">90 mins</div>
      <div class="sticker-text-sm pb-2">Per month</div>
    </div>
  </div>

  <div class="col col-12 col-md-6 col-lg-3 text-center">
    <div class="sticker sticker-sm">
      <div class="sticker-text-sm pb-1">Bonus</div>
      <div class="sticker-text-xl">90 mins</div>
      <div class="sticker-text-sm pb-1">Per month</div>
    </div>
  </div>
</div>


<div class="row align-items-center my-5">
  <div class="col col-12 col-lg-5 text-center">
    <div class="sticker sticker-lg">
      <div class="sticker-text-sm pb-3">Bonus</div>
      <div class="sticker-text-xl">250%</div>
      <div class="sticker-text-sm pb-2">With Orange<br>Money</div>
    </div>
  </div>

  <div class="col col-12 col-md-6 col-lg-4 text-center">
    <div class="sticker">
      <div class="sticker-text-sm pb-2">Bonus</div>
      <div class="sticker-text-xl">250%</div>
      <div class="sticker-text-sm pb-1">With Orange<br>Money</div>
    </div>
  </div>

  <div class="col col-12 col-md-6 col-lg-3 text-center">
    <div class="sticker sticker-sm">
      <div class="sticker-text-sm pb-1">Bonus</div>
      <div class="sticker-text-xl">250%</div>
      <div class="sticker-text-sm pb-1">With Orange<br>Money</div>
    </div>
  </div>
</div>


<div class="row align-items-center my-5">
  <div class="col col-12 col-lg-5 text-center">
    <div class="sticker sticker-lg">
      <div class="sticker-text-xl pb-1">+<br>90 mins</div>
      <div class="sticker-text-sm pb-4">Per month</div>
    </div>
  </div>

  <div class="col col-12 col-md-6 col-lg-4 text-center">
    <div class="sticker">
      <div class="sticker-text-xl pb-1">+<br>90 mins</div>
      <div class="sticker-text-sm pb-3">Per month</div>
    </div>
  </div>

  <div class="col col-12 col-md-6 col-lg-3 text-center">
    <div class="sticker sticker-sm">
      <div class="sticker-text-xl">+<br>90 mins</div>
      <div class="sticker-text-sm pb-2">Per month</div>
    </div>
  </div>
</div>


<div class="row align-items-center my-5">
  <div class="col col-12 col-lg-5 text-center">
    <div class="sticker sticker-lg">
      <div class="sticker-text-xl pb-1">+<br>250%</div>
      <div class="sticker-text-sm pb-4">With Orange<br>Money</div>
    </div>
  </div>

  <div class="col col-12 col-md-6 col-lg-4 text-center">
    <div class="sticker">
      <div class="sticker-text-xl pb-1">+<br>250%</div>
      <div class="sticker-text-sm pb-3">With Orange<br>Money</div>
    </div>
  </div>

  <div class="col col-12 col-md-6 col-lg-3 text-center">
    <div class="sticker sticker-sm">
      <div class="sticker-text-xl">+<br>250%</div>
      <div class="sticker-text-sm pb-3">With Orange<br>Money</div>
    </div>
  </div>
  
</div>-->
{{< /example >}}

<!-- ## Examples

<div class="row align-items-center my-5">
  <div class="col col-12 col-lg-5 text-start">
    <svg viewBox="0 0 140 140" class="sticker-lg sticker-one-line" aria-hidden="true" focusable="false">
      <circle r="70" cx="70" cy="70"></circle>
      <text x="50%" y="50%">New</text>
    </svg>
  </div>

  <div class="col col-12 col-md-6 col-lg-4 text-center">
    <svg viewBox="0 0 140 140" class="sticker-md sticker-icon" aria-hidden="true" focusable="false">
      <circle r="70" cx="70" cy="70"></circle>
      <use x="50%" y="50%" height="80" width="80" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#5G"></use>
    </svg>
  </div>

  <div class="col col-12 col-md-6 col-lg-3 text-end">
    <svg viewBox="0 0 140 140" class="sticker-sm sticker-icon-two-lines" aria-hidden="true" focusable="false">
      <circle r="70" cx="70" cy="70"></circle>
      <use x="50%" y="27%" height="35" width="35" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delivery"></use>
      <text>
        <tspan x="50%" y="51%">Free</tspan><tspan x="50%" y="65%">delivery</tspan>
      </text>
    </svg>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-lg sticker-one-line" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%" dy=".2rem">New</text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-md sticker-icon" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <use x="50%" y="50%" height="80" width="80" xlink:href="/path/to/svg"></use>
</svg>

<svg viewBox="0 0 140 140" class="sticker-sm sticker-icon-two-lines" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <use x="50%" y="27%" height="35" width="35" xlink:href="/path/to/svg"></use>
  <text x="50%" y="60%">
    <tspan x="50%" dy="-.9rem">Free</tspan><tspan x="50%" dy="1.25em">delivery</tspan>
  </text>
</svg>
```

## Accessibility

For the remaining page, the accessibility of the stickers will be set and considered as decorating images : `aria-hidden="true" focusable="false"`.

If the sticker stands for a functionality of the site and not as a decorative element, please read the examples below in order to have a good idea of what is needed for stickers. See [more](https://a11y-guidelines.orange.com/fr/articles/svg-accessibles/).

<div class="row align-items-center my-5">
  <div class="col col-12 col-lg-5 text-start">
    <svg viewBox="0 0 140 140" class="sticker-lg sticker-one-line" role="img" lang="en" aria-labelledby="StickersTitle1 StickersDesc1" tabindex="0">
      <title id="StickersTitle1" lang="en">Sticker utility</title>
      <desc id="StickersDesc1" lang="en">Sticker description if needed</desc>
      <circle r="70" cx="70" cy="70"></circle>
      <text x="50%" y="50%" dy=".2rem" aria-hidden="true">New</text>
    </svg>
  </div>

  <div class="col col-12 col-md-6 col-lg-4 text-center">
    <svg viewBox="0 0 140 140" class="sticker-md sticker-icon" role="img" lang="en" aria-labelledby="StickersTitle2 StickersDesc2" tabindex="0">
      <title id="StickersTitle2" lang="en">Sticker utility</title>
      <desc id="StickersDesc2" lang="en">Sticker description if needed</desc>
      <circle r="70" cx="70" cy="70"></circle>
      <use x="50%" y="50%" height="80" width="80" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#5G"></use>
    </svg>
  </div>

  <div class="col col-12 col-md-6 col-lg-3 text-end">
    <svg viewBox="0 0 140 140" class="sticker-sm sticker-icon-two-lines" role="img" lang="en" aria-labelledby="StickersTitle3 StickersDesc3" tabindex="0">
      <title id="StickersTitle3" lang="en">Sticker utility</title>
      <desc id="StickersDesc3" lang="en">Sticker description if needed</desc>
      <circle r="70" cx="70" cy="70"></circle>
      <use x="50%" y="27%" height="35" width="35" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delivery"></use>
      <text x="50%" y="60%" aria-hidden="true">
        <tspan x="50%" dy="-.9rem">Free</tspan><tspan x="50%" dy="1.25rem">delivery</tspan>
      </text>
    </svg>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-lg sticker-one-line" role="img" lang="en" aria-labelledby="StickersTitle1 StickersDesc1" tabindex="0">
  <title id="StickersTitle1" lang="en">Sticker utility</title>
  <desc id="StickersDesc1" lang="en">Sticker description if needed</desc>
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%" dy=".2rem" aria-hidden="true">New</text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-md sticker-icon" role="img" lang="en" aria-labelledby="StickersTitle2 StickersDesc2" tabindex="0">
  <title id="StickersTitle2" lang="en">Sticker utility</title>
  <desc id="StickersDesc2" lang="en">Sticker description if needed</desc>
  <circle r="70" cx="70" cy="70"></circle>
  <use x="50%" y="50%" height="80" width="80" xlink:href="/path/to/svg"></use>
</svg>

<svg viewBox="0 0 140 140" class="sticker-sm sticker-icon-two-lines" role="img" lang="en" aria-labelledby="StickersTitle3 StickersDesc3" tabindex="0">
  <title id="StickersTitle3" lang="en">Sticker utility</title>
  <desc id="StickersDesc3" lang="en">Sticker description if needed</desc>
  <circle r="70" cx="70" cy="70"></circle>
  <use x="50%" y="27%" height="35" width="35" xlink:href="/path/to/svg"></use>
  <text x="50%" y="60%" aria-hidden="true">
    <tspan x="50%" dy="-.9rem">Free</tspan><tspan x="50%" dy="1.25rem">delivery</tspan>
  </text>
</svg>
```

## Sizes

### Standard sizing

Add `.sticker-{sm|md|lg}` to the svg tag in order to apply a size. Only these sizes should be used, however the size can be modified by setting the height and the width of the svg up. Default size is `md`.

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 col-lg-3 text-start">
      <svg viewBox="0 0 140 140" class="sticker-sm sticker-one-line" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%" dy=".2rem">New</text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 col-lg-4 text-center">
      <svg viewBox="0 0 140 140" class="sticker-md sticker-one-line" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%" dy=".2rem">New</text>
      </svg>
    </div>
    <div class="col col-12 col-lg-5 text-end">
      <svg viewBox="0 0 140 140" class="sticker-lg sticker-one-line" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%" dy=".2rem">New</text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-sm sticker-one-line" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%" dy=".2rem">New</text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-md sticker-one-line" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%" dy=".2rem">New</text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-lg sticker-one-line" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%" dy=".2rem">New</text>
</svg>
```

## Patterns

Choose one and only one class below in order to apply a pattern to the sticker.

{{< callout info >}}
`<tspan>`s are inlined, otherwise it adds white space that shifts the center effect.
{{< /callout >}}

### Text stickers

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 text-center">
      <svg viewBox="0 0 140 140" class="sticker-one-line" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%" dy=".2rem">New</text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 text-center">
      <svg viewBox="0 0 140 140" class="sticker-two-lines" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-.65rem">Free</tspan><tspan x="50%" dy="1.25rem">delivery</tspan>
        </text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-one-line" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%" dy=".2rem">New</text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-two-lines" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-.65rem">Free</tspan><tspan x="50%" dy="1.25rem">delivery</tspan>
  </text>
</svg>
```

### Icon stickers

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 text-center">
      <svg viewBox="0 0 140 140" class="sticker-icon" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <use x="50%" y="50%" height="80" width="80" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#5G"></use>
      </svg>
    </div>
    <div class="col col-12 col-md-6 text-center">
      <svg viewBox="0 0 140 140" class="sticker-icon-two-lines" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <use x="50%" y="28%" height="35" width="35" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delivery"></use>
        <text x="50%" y="60%">
          <tspan x="50%" dy="-.9rem">Free</tspan><tspan x="50%" dy="1.25rem">delivery</tspan>
        </text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-icon" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <use x="50%" y="50%" height="80" width="80" xlink:href="/path/to/svg"></use>
</svg>

<svg viewBox="0 0 140 140" class="sticker-icon-two-lines" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <use x="50%" y="27%" height="35" width="35" xlink:href="/path/to/svg"></use>
  <text x="50%" y="60%">
    <tspan x="50%" dy="-.9rem">Free</tspan><tspan x="50%" dy="1.25rem">delivery</tspan>
  </text>
</svg>
```

### Price stickers

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 text-center">
      <svg viewBox="0 0 140 140" class="sticker-price" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%" dy="-.1rem">
          <tspan x="50%" y="50%">39,99€</tspan><tspan x="50%" dy="1.3rem">Per month</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 text-center">
      <svg viewBox="0 0 140 140" class="sticker-old-and-new-price" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-1.5rem">69,99€</tspan><tspan x="50%" y="52%">39,99€</tspan><tspan x="50%" dy="1.35rem">Per month</tspan>
        </text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-price" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%" dy="-.1rem">
    <tspan x="50%" y="50%">39,99€</tspan><tspan x="50%" dy="1.3rem">Per month</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-old-and-new-price" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-1.5rem">69,99€</tspan><tspan x="50%" y="52%">39,99€</tspan><tspan x="50%" dy="1.35rem">Per month</tspan>
  </text>
</svg>
```

### Bonus stickers

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 text-center">
      <svg viewBox="0 0 140 140" class="sticker-bonus-min" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-1.9rem">Bonus</tspan><tspan x="50%" y="52%">90mins</tspan><tspan x="50%" dy="1.35rem">Per month</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 text-center">
      <svg viewBox="0 0 140 140" class="sticker-bonus-offer" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-2.25rem">Bonus</tspan><tspan x="50%" y="49%">250%</tspan><tspan x="50%" dy="1.3rem">With Orange</tspan><tspan x="50%" dy=".95rem">Money</tspan>
        </text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-bonus-min" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-1.9rem">Bonus</tspan><tspan x="50%" y="52%">90mins</tspan><tspan x="50%" dy="1.35rem">Per month</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-bonus-offer" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-2.25rem">Bonus</tspan><tspan x="50%" y="49%">250%</tspan><tspan x="50%" dy="1.3rem">With Orange</tspan><tspan x="50%" dy=".95rem">Money</tspan>
  </text>
</svg>
```

### Additional stickers

<div class="bd-example">
  <div class="row align-items-center my-5">
    <div class="col col-12 col-md-6 text-center">
      <svg viewBox="0 0 140 140" class="sticker-add-min" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-2rem">+</tspan><tspan x="50%" y="49%">90mins</tspan><tspan x="50%" dy="1.3rem">Per month</tspan>
        </text>
      </svg>
    </div>
    <div class="col col-12 col-md-6 text-center">
      <svg viewBox="0 0 140 140" class="sticker-add-offer" aria-hidden="true" focusable="false">
        <circle r="70" cx="70" cy="70"></circle>
        <text x="50%" y="50%">
          <tspan x="50%" dy="-2.3rem">+</tspan><tspan x="50%" y="47%">250%</tspan><tspan x="50%" dy="1.35rem">With Orange</tspan><tspan x="50%" dy=".95rem">Money</tspan>
        </text>
      </svg>
    </div>
  </div>
</div>

```html
<svg viewBox="0 0 140 140" class="sticker-add-min" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-2rem">+</tspan><tspan x="50%" y="49%">90mins</tspan><tspan x="50%" dy="1.3rem">Per month</tspan>
  </text>
</svg>

<svg viewBox="0 0 140 140" class="sticker-add-offer" aria-hidden="true" focusable="false">
  <circle r="70" cx="70" cy="70"></circle>
  <text x="50%" y="50%">
    <tspan x="50%" dy="-2.3rem">+</tspan><tspan x="50%" y="47%">250%</tspan><tspan x="50%" dy="1.35rem">With Orange</tspan><tspan x="50%" dy=".95rem">Money</tspan>
  </text>
</svg>
``` -->

## Sass

### Variables

{{< scss-docs name="stickers-variables" file="scss/_variables.scss" >}}
