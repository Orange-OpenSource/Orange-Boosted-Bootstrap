---
layout: docs
title: Sticker
description: Use Boosted's custom stickers to inform people about new offers.
group: components
toc: true
---

## Example

{{< example >}}
<div class="sticker">
  <p class="mb-0">
    <span class="display-3 mb-0 d-block">39.99 €</span>
    <span>Per month</span>
  </p>
</div>
{{< /example >}}

## How it works

A **sticker** is basically a rounded container. All its content is centered horizontally and vertically.

A max width is set for this content so that it fits easily within the circle.

We provide [a set of stickers examples]({{< docsref "/examples/stickers" >}}) representing several use cases.

{{< callout warning >}}
This flexibility means that the stickers can vary from the design specifications regarding the vertical positioning of content.

For a better rendering you can use our margin utilities or even CSS.
{{< /callout >}}

## Sizes

Fancy larger or smaller stickers? Add `.sticker-lg` or `.sticker-sm` for additional sizes.

**Don't forget to adjust the size of the content.**

{{< example >}}
<div class="sticker sticker-lg">
  <p class="mb-0">
    <span class="display-1">New</span>
  </p>
</div>
{{< /example >}}

{{< example >}}
<div class="sticker sticker-sm">
  <p class="mb-0">
    <span class="h2">New</span>
  </p>
</div>
{{< /example >}}

## Accessibility

Since stickers only provide a container, accessibility becomes specific to the sticker content:
* [Showing and vocalizing prices](https://a11y-guidelines.orange.com/en/web/components-examples/price-vocalization) can help when stickers contain prices.
* [Accessibility and SVGs](https://a11y-guidelines.orange.com/en/articles/accessible-svg) can help with the SVGs.
* You must semantize the informative content in context with HTML elements, such as `<p>` (as shown in our examples), `<h1>` to `<h6>`, etc. 

### Focus on one use case

{{< example >}}
<div class="sticker">
  <p class="mb-1">
    <span class="h3 mb-0 d-block text-decoration-line-through" aria-hidden="true">69.99 €</span>
    <span class="display-3 mb-0 d-block" aria-hidden="true">39.99 €</span>
    <span aria-hidden="true">Per month</span>
    <span class="visually-hidden">39.99 € per month instead of 69.99 €</span>
  </p>
</div>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="sticker" file="scss/_variables.scss" >}}
