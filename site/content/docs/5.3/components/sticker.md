---
layout: docs
title: Sticker
description: Use Boosted's custom stickers to inform people about new offers.
group: components
aliases:
  - "/docs/components/sticker/"
toc: true
added: "5.2"
---

## Example

{{< example >}}
<style>
  .sticker-fs-3xl {
    font-size: 2.5rem;
    line-height: 1;
    letter-spacing: -.0625rem;
  }
</style>

<div class="sticker">
  <p class="mb-0">
    <span class="sticker-fs-3xl mb-0 d-block">39.99 €</span>
    <span>Per month</span>
  </p>
</div>
{{< /example >}}

## How it works

A **sticker** is basically a rounded container. All its content is centered horizontally and vertically.

A max width is set for this content so that it fits easily within the circle.

We provide [a set of stickers examples]({{< docsref "/examples/stickers" >}}) representing several use cases.

{{< callout warning >}}
**Positioning**

This flexibility means that the stickers can vary from the design specifications regarding the vertical positioning of content.

For a better rendering you can use our margin utilities or even CSS.
{{< /callout >}}

{{< callout warning >}}
**Font sizes and responsiveness**

All the provided examples use some specific classes to have non-responsive stickers. You may adapt those classes to your needs.

**Please be aware that those examples are not meant to be responsive** because they will always depend on the context. If you do not want this behavior, you could add some responsive rules by using `scale()` CSS function.
{{< /callout >}}

## Sizes

Fancy larger or smaller stickers? Add `.sticker-lg` or `.sticker-sm` for additional sizes.

**Don't forget to adjust the size of the content.**

{{< example >}}
<style>
  .sticker-fs-4xl {
    font-size: 3.75rem;
    line-height: 1;
    letter-spacing: -.125rem;
  }
</style>

<div class="sticker sticker-lg">
  <p class="mb-0">
    <span class="sticker-fs-4xl">New</span>
  </p>
</div>
{{< /example >}}

{{< example >}}
<style>
  .sticker-fs-xl {
    font-size: 1.875rem;
    line-height: calc(32 / 30);
    letter-spacing: -.05rem;
  }
</style>

<div class="sticker sticker-sm">
  <p class="mb-0">
    <span class="sticker-fs-xl">New</span>
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
<style>
  .sticker-fs-3xl {
    font-size: 2.5rem;
    line-height: 1;
    letter-spacing: -.0625rem;
  }

  .sticker-fs-l {
    font-size: 1.5rem;
    line-height: calc(26 / 24);
    letter-spacing: -.03125rem;
  }
</style>

<div class="sticker">
  <p class="mb-1">
    <span class="sticker-fs-l mb-0 d-block text-decoration-line-through" aria-hidden="true">69.99 €</span>
    <span class="sticker-fs-3xl mb-0 d-block" aria-hidden="true">39.99 €</span>
    <span aria-hidden="true">Per month</span>
    <span class="visually-hidden">39.99 € per month instead of 69.99 €</span>
  </p>
</div>
{{< /example >}}

## CSS

### Variables

{{< added-in "5.2.0" >}}

As part of Boosted's evolving CSS variables approach, stickers now use local CSS variables on `.sticker` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="sticker-css-vars" file="scss/_sticker.scss" >}}

Small and large sticker modifier classes are used to update the value of these CSS variables as needed.

{{< scss-docs name="sticker-sm-css-vars" file="scss/_sticker.scss" >}}

{{< scss-docs name="sticker-lg-css-vars" file="scss/_sticker.scss" >}}

### Sass variables

{{< scss-docs name="sticker" file="scss/_variables.scss" >}}
