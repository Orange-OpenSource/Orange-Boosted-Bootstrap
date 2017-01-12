---
layout: docs
title: Orange list
description: Boosted list branded
group: components
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Orange list

### Bullet points

Simply add `o-square-list` class to the root element of a list (`<ul>`). Maximum elements depth is 3.

{% example html %}
<ul class="o-square-list">
    <li>
        <span>first</span>
        <ul>
            <li>
                <span>1.1</span>
                <ul>
                    <li><span>1.1.1</span></li>
                    <li><span>1.1.2</span></li>
                </ul>
            </li>
            <li>
                <span>1.2</span>
            </li>
        </ul>
    </li>
    <li>
        <span>second</span>
    </li>
    <li>
        <span>third</span>
    </li>
    <li>
        <span>fourth</span>
    </li>
</ul>
{% endexample %}
