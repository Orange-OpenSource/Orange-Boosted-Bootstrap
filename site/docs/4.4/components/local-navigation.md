---
layout: docs
title: Local navigation
description: Local navigation is used as a secondary level navigation.
group: components
toc: true
---

## Default local navigation

Use `<ul>` element with the `.container` (or `.container-fluid`) class, wrapped in a `<nav>` tag with `.o-nav-local` class.
You also **need to choose a color scheme** by setting `.navbar-light` or `.navbar-dark` on your `<nav>` element.

{% capture callout %}
### Accessibility

In addition to the `.active` class, you must use `aria-current="page"` attribute to represent the current item within the navigation group. This is to ensure a better accessibility to assistive technologies (such as screenreaders, screen magnifiers…) that support it by informing the user about the current element.
{% endcapture %}
{% include callout.html content=callout %}

{% capture example %}
<nav role="navigation" class="o-nav-local navbar-light">
    <ul class="container nav">
        <li class="nav-item"><a class="nav-link active" href="#" aria-current="page">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Messages</a></li>
    </ul>
</nav>
{% endcapture %} {% include example.html content=example %}

## Dark background

Simply switch `.navbar-light` to `.navbar-dark` class to your `.o-nav-local` parent `<nav>` container.

{% capture example %}
<div class="bg-dark pt-3 px-3 pb-1">
    <nav role="navigation" class="o-nav-local navbar-dark">
        <ul class="container nav">
            <li class="nav-item"><a class="nav-link active" href="#" aria-current="page">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Messages</a></li>
        </ul>
    </nav>
</div>
{% endcapture %} {% include example.html content=example %}
