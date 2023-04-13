---
layout: docs
title: Stepped process
description: Stepped process bar used for multiple steps forms process
group: components
aliases:
  - "/docs/components/stepped-process/"
toc: true
---

## How to use

Use a `nav` element with `.stepped-process` class, containing an ordered list `<ol>` with `.stepped-process-item` class on list items.

Use short labels for each step, otherwise they will be cut off to preserve inline layout. More information can be carried on the `title` attribute of the `.stepped-process-link`.

Add `.active` to a `.stepped-process-item` to indicate the current step, alongside `aria-current="step"` to convey the active state to assistive technologies.

{{< callout info >}}
**Using more than 5 items in a row?** You can easily customize this by changing `$stepped-process-max-items` Sass variable.
{{< /callout >}}

## Example

{{< example >}}
<nav class="stepped-process" aria-label="Checkout process">
  <p class="float-start mt-2 me-2 fw-bold d-sm-none">Step</p>
  <ol>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="1. Sign in">Sign in</a>
    </li>
    <li class="stepped-process-item active">
      <a class="stepped-process-link" title="2. Review" aria-current="step">Review</a>
    </li>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="3. Delivery">Delivery</a>
    </li>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="4. Payment">Payment</a>
    </li>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="5. Place order">Place order</a>
    </li>
  </ol>
</nav>
{{< /example >}}

## Dark variant

{{< added-in "5.2.1" >}}

Add `.stepped-process-dark` to the `.stepped-process` for a dark variant.

{{< example class="bg-dark" >}}
<nav class="stepped-process stepped-process-dark" aria-label="Checkout process">
  <p class="float-start mt-2 me-2 fw-bold d-sm-none">Step</p>
  <ol>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="1. Sign in">Sign in</a>
    </li>
    <li class="stepped-process-item active">
      <a class="stepped-process-link" title="2. Review" aria-current="step">Review</a>
    </li>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="3. Delivery">Delivery</a>
    </li>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="4. Payment">Payment</a>
    </li>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="5. Place order">Place order</a>
    </li>
  </ol>
</nav>
{{< /example >}}

## CSS

### Variables

{{< added-in "5.2.0" >}}

As part of Boosted's evolving CSS variables approach, stepped processes now use local CSS variables on `.stepped-process` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="stepped-process-css-vars" file="scss/_stepped-process.scss" >}}

Customization through CSS variables can be seen on the `.stepped-process-dark` modifier class where we override specific values without adding duplicate CSS selectors.

{{< scss-docs name="stepped-process-dark-css-vars" file="scss/_stepped-process.scss" >}}

### Sass variables

Variables for all stepped processes:

{{< scss-docs name="stepped-process" file="scss/_variables.scss" >}}

Variables for the [dark stepped process](#dark-variant):

{{< scss-docs name="stepped-process-dark-variables" file="scss/_variables.scss" >}}
