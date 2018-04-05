---
layout: docs
title: Stepbar
description: Step process bar used for multiple steps forms process
group: components
toc: true
---

## Default stepbar

Declare a `.o-stepbar` nav tag contaning the stepbar. Within a `<ol>`ordered list delcare `.stepbar-item` elements up to 5. Fill the `.step-number`and `.step-title` accordingly.


Be careful to choose short labels when using 5 steps process, otherwise label will be cut to preserve inline layout. More information can be carried on the `title`attributle of the `<a>`link.

Fill a correct description on each `.stepbar-link` `title` attributes.
Use `.done` and `.current` classes in correct order. There is only one `.current` item.

{% capture callout %}
### Accessibility

In addition to this `.current` class, you must use `aria-current="step"` state to represent the current step within the process. This is to ensure a better accessibility to assistive technologies (as screenreaders , screen magnifiers...) that can support it by warning the user of the current element position and type, here it's a step.
{% endcapture %}

{% capture example %}
<nav class="o-stepbar">
    <ol>
        <li class="done stepbar-item">
            <a class="stepbar-link" href="#" title="Step 1 : Voluptatem">
                <span class="step-number">1</span>
                <span class="step-title">Voluptatem</span>
            </a>
        </li>
        <li class="stepbar-item current">
            <a class="stepbar-link" href="#" title="Step 2 : Aperiam" aria-current="step">
                <span class="step-number">2</span>
                <span class="step-title">Aperiam</span>
            </a>
        </li>
        <li class="stepbar-item next">
            <a class="stepbar-link" href="#" title="Step 3 : Accusantinum">
                <span class="step-number">3</span>
                <span class="step-title">Accusantinum</span>
            </a>
        </li>
        <li class="stepbar-item next">
            <a class="stepbar-link" href="#" title="Step 4 : Ipsam">
                <span class="step-number">4</span>
                <span class="step-title">Ipsam</span>
            </a>
        </li>
        <li class="stepbar-item next">
            <a class="stepbar-link" href="#" title="Step 5 : Aspernatur">
                <span class="step-number">5</span>
                <span class="step-title">Aspernatur</span>
            </a>
        </li>
    </ol>
</nav>
{% endcapture %} {% include example.html content=example %}

## Mobile stepbar

For mobile view, two classes depending on what you wish to display.

### with numbers

Use `.xs-numbers` class to display step numbers and current step label. You can have up to 4 steps. Further steps will collapse onto new line.

{% capture example %}
<nav class="o-stepbar xs-numbers">
    <ol>
        <li class="current stepbar-item">
            <a class="stepbar-link" href="#" title="Step 1 : Sign in" aria-current="step">
                <span class="step-number">1</span>
                <span class="step-title">Sign in</span>
            </a>
        </li>
        <li class="stepbar-item next">
            <div class="stepbar-link" title="Step 2 : Review">
                <span class="step-number">2</span>
                <span class="step-title">Review</span>
            </div>
        </li>
        <li class="stepbar-item next">
            <div class="stepbar-link" title="Step 3 : Delivery">
                <span class="step-number">3</span>
                <span class="step-title">Delivery</span>
            </div>
        </li>
        <li class="stepbar-item next">
            <div class="stepbar-link" title="Step 4 : Payment">
                <span class="step-number">4</span>
                <span class="step-title">Payment</span>
            </div>
        </li>
    </ol>
</nav>
{% endcapture %} {% include example.html content=example %}

### with labels

Use `.xs-labels` class to display step labels without number. You can have up to 3 steps. Further steps will collapse onto new line.

{% capture example %}
<nav class="o-stepbar xs-labels">
    <ol>
        <li class="current stepbar-item">
            <a class="stepbar-link" href="#" title="Step 1 : Sign in"  aria-current="step">
                <span class="step-number">1</span>
                <span class="step-title">Sign in</span>
            </a>
        </li>
        <li class="stepbar-item next">
            <div class="stepbar-link" title="Step 2 : Review">
                <span class="step-number">2</span>
                <span class="step-title">Review</span>
            </div>
        </li>
        <li class="stepbar-item next">
            <div class="stepbar-link" title="Step 3 : Delivery">
                <span class="step-number">3</span>
                <span class="step-title">Delivery</span>
            </div>
        </li>
    </ol>
</nav>
{% endcapture %} {% include example.html content=example %}
