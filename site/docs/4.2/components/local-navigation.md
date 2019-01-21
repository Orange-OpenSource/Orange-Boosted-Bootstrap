---
layout: docs
title: Local navigation
description: Local navigation is used as a secondary level navigation.
group: components
toc: true
---

## Default local navigation

Wrap your `<ul>` list in a `<nav>` tag within a `.container` block. Wrap the whole in a `.o-nav-local` block.

{% capture callout %}
#### Accessibility

In addition to the `.active` class, you must use `aria-current="page"` state to represent the current location within the local navigation. This is to ensure a better accessibility to assistive technologies (as screenreaders , screen magnifiers...) that can support it by warning the user of the current element position and type, here it's the current page.
{% endcapture %}

{% capture example %}
<div class="o-nav-local">
    <nav class="container">
        <ul class="nav">
            <li class="nav-item"><a class="nav-link active" href="#" aria-current="page">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Messages</a></li>
        </ul>
    </nav>
</div>
{% endcapture %} {% include example.html content=example %}

## Inverse local navigation

Simply add `.inverse` class to your `.o-nav-local` container.

{% capture example %}
<div style="margin: 2rem 0; padding: 2rem 0;" class="bg-dark">
    <div class="o-nav-local inverse">
        <nav class="container">
            <ul class="nav">
                <li class="nav-item"><a class="nav-link active" href="#" aria-current="page">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Messages</a></li>
            </ul>
        </nav>
    </div>
</div>
{% endcapture %} {% include example.html content=example %}
