---
layout: docs
title: Local navigation
description: Local navigation is used as a secondary level navigation.
group: components
toc: true
---

## Default local navigation

Use `<ul>` element with the `.o-nav-local` class, wrapped in a `<nav>` tag with `.container` class.
You also **need to choose a color scheme** by setting `.navbar-light` or `.navbar-dark` on your container `<nav>` element.

{% capture callout %}
#### Accessibility

In addition to the `.active` class, you must use `aria-current="page"` state to represent the current location within the local navigation. This is to ensure a better accessibility to assistive technologies (as screenreaders , screen magnifiers...) that can support it by warning the user of the current element position and type, here it's the current page.
{% endcapture %}

{% capture example %}
<nav class="container navbar-light">
    <ul class="nav o-nav-local">
        <li class="nav-item"><a class="nav-link active" href="#" aria-current="page">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Messages</a></li>
    </ul>
</nav>
{% endcapture %} {% include example.html content=example %}

## Dark background

Simply switch `.navbar-light` to `.navbar-dark .bg-dark` class to your `.o-nav-local` parent `<nav>` container.

{% capture example %}
<div class="bg-dark pt-3 px-3 pb-1">
    <nav class="container navbar-dark">
        <ul class="nav o-nav-local">
            <li class="nav-item"><a class="nav-link active" href="#" aria-current="page">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Messages</a></li>
        </ul>
    </nav>
</div>
{% endcapture %} {% include example.html content=example %}
