---
layout: docs
title: Orange stepbar
group: components
---

Indicate the current step within a sequential navigation.

## Default stepbar

Declare a `.o-stepbar` nav tag contaning the stepbar. Within a `<ol>`ordered list delcare `.stepbar-item` elements up to 5. Fill the `.step-number`and `.step-title` accordingly.

Use `.done` and `.current` classes in correct order. There is only one `.current` item. Fill a correct description on each `.stepbar-link` `title`attributes.

In mobile view a `.stepbar-header` is needed before the list, Orange brand labels it "Step".

Be carful to choose short labels when using 5 steps process, otherwise label will be cut to preserve inline layout. More information can be carried on the `title`attributle of the `<a>`link.

{% example html %}
<nav class="o-stepbar">
    <span class="hidden-md-up stepbar-header">Step</span>
    <ol>
        <li class="done stepbar-item">
            <a class="stepbar-link" href="#" title="Step 1 : Voluptatem">
                <span class="step-number">1</span>
                <span class="step-title">Voluptatem</span>
            </a>
        </li>
        <li class="stepbar-item current">
            <a class="stepbar-link" href="#" title="Step 2 : Aperiam">
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
{% endexample %}