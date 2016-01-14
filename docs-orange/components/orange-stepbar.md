---
layout: docs
title: Stepbar
group: components
---

Indicate the current step within a sequential navigation.

## Default stepbar

Declare a list, each item need to contain a first `<div>` with class `.arrow` and attribute `aria-hidden="true"`, next add the correct css classes. Add the `o-wizard-step-bar` class on the `ul` element (root of your list). Then, to design steps, add `visited`, `on` or `next` classes if yout want a visited step, the current step or a futur step. These classes are to be added to the list items (`li` tag).
The number of steps can be adjusted using the special attribute `data-step` (present on the `ul` tag of the component). 5 steps max.

{% example html %}
<ul class="o-wizard-step-bar" data-steps="5">
    <li class="visited">
        <div>
            <div><span class="hidden-xs">Step&nbsp;</span> 1</div>
            <div><a href="#" title="Step 1&nbsp;: Voluptatem" class="hidden-xs hidden-sm">Voluptatem</a></div>
        </div>
    </li>
    <li class="visited">
        <div class="arrow" aria-hidden="true"></div>
        <div>
            <div><span class="hidden-xs">Step&nbsp;</span> 2</div>
            <div><a href="#" title="Step 2&nbsp;: Aperiam" class="hidden-xs hidden-sm">Aperiam</a></div>
        </div>
    </li>
    <li class="on">
        <div class="arrow" aria-hidden="true"></div>
        <div>
            <div><span class="hidden-xs">Step&nbsp;</span> 3</div>
            <div><span class="hidden-xs hidden-sm">Accusantinum</span></div>
        </div>
    </li>
    <li class="next">
        <div class="arrow" aria-hidden="true"></div>
        <div>
            <div><span class="hidden-xs">Step&nbsp;</span> 4</div>
            <div><span class="hidden-xs hidden-sm">Ipsam</span></div>
        </div>
    </li>
    <li class="next">
        <div class="arrow" aria-hidden="true"></div>
        <div>
            <div><span class="hidden-xs">Step&nbsp;</span> 5</div>
            <div><span class="hidden-xs hidden-sm">Aspernatur</span></div>
        </div>
    </li>
</ul>
{% endexample %}