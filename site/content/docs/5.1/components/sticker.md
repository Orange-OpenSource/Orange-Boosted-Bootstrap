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
  <span class="display-3 mb-1">39,99€</span>
  <span>Per month</span>
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
  <span class="display-1 mb-0">New</span>
</div>
{{< /example >}}

{{< example >}}
<div class="sticker sticker-sm">
  <span class="h2 mb-0">New</span>
</div>
{{< /example >}}

## Accessibility

Since stickers only provide a container, accessibility becomes specific to the sticker content:
* [Showing and vocalizing prices](https://a11y-guidelines.orange.com/en/web/components-examples/price-vocalization) can help when stickers contain prices.
* [Accessibility and SVGs](https://a11y-guidelines.orange.com/en/articles/accessible-svg) can help with the SVGs.

### Focus on one use case

{{< example >}}
<div class="sticker">
  <span class="h3 mb-0 text-decoration-line-through" aria-hidden="true">69.99 €</span>
  <span class="display-3 mb-0" aria-hidden="true">39.99 €</span>
  <span class="mb-1" aria-hidden="true">Per month</span>
  <span class="visually-hidden">39.99 € per month instead of 69.99 €</span>
</div>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="sticker" file="scss/_variables.scss" >}}
