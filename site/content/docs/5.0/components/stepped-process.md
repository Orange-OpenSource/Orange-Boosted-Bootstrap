---
layout: docs
title: Stepped process
description: Stepped process bar used for multiple steps forms process
group: components
toc: true
---

## How to use

Use a `nav` element with `.stepped-process` class, containing an ordered list `<ol>` with `.stepped-process-item` class on list items.

Be careful to choose short labels when using multiple steps process, otherwise label will be cut to preserve inline layout. More information can be carried on the `title` attribute of the `.stepped-process-link`.

Add `.active` to a `.stepped-process-item` to indicate the current step, alongside `aria-current="step"` to convey the active state to assistive technologies.

## Example

{{< example >}}
<nav class="stepped-process" aria-label="Checkout process">
  <p class="float-start mt-2 me-2 fw-bold d-sm-none">Step</p>
  <ol>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="1. Sign in">Sign in</a>
    </li>
    <li class="stepped-process-item active">
      <a class="stepped-process-link" href="#" title="2. Review" aria-current="step">Review</a>
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
