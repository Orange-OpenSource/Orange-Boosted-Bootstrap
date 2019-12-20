---
layout: docs
title: Stepped process
description: Stepped process bar used for multiple steps forms process
group: components
toc: true
---

## How to use

Use a `nav` element with `.o-stepbar` class, containing an ordered list `<ol>`  with `.stepbar-item` class on list items.

Be careful to choose short labels when using multiple steps process, otherwise label will be cut to preserve inline layout. More information can be carried on the `title` attribute of the `.stepbar-link`.

Use `.current` class to define current step, alongwith with `aria-current="step"`.

## Example

{% capture example %}
<nav role="navigation" class="o-stepbar" aria-label="Checkout process">
    <p class="float-left mt-2 mr-2 font-weight-bold d-sm-none">Step</p>
    <ol>
        <li class="stepbar-item">
            <a class="stepbar-link" href="#" title="1. Sign in">Sign in</a>
        </li>
        <li class="stepbar-item current">
            <a class="stepbar-link" href="#" title="2. Review" aria-current="step">Review</a>
        </li>
        <li class="stepbar-item">
            <a class="stepbar-link" href="#" title="3. Delivery">Delivery</a>
        </li>
        <li class="stepbar-item">
            <a class="stepbar-link" href="#" title="4. Payment">Payment</a>
        </li>
        <li class="stepbar-item">
            <a class="stepbar-link" href="#" title="5. Place order">Place order</a>
        </li>
    </ol>
</nav>
{% endcapture %} {% include example.html content=example %}
