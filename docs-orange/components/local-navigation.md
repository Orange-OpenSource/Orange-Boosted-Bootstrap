---
layout: docs
title: Local navigation
group: components
---

## Default local navigation

Wrap your `<ul>` list in a `<nav>` tag with `.container` class. Use `<hr>` tag on top and bottom outside the de `.container`. Wrap the whole in a `.o-nav-local` container.

{% example html %}
<div class="o-nav-local">
    <hr aria-hidden="true">
    <nav class="container">
        <a class="hidden-sm-up nav-link active local-select" data-toggle="collapse" href="#localNav1" aria-haspopup="true">target</a>
        <ul class="nav nav-inline collapse" id="localNav1">
            <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Messages</a></li>
        </ul>
    </nav>
    <hr aria-hidden="true">
</div>
{% endexample %}

## Inverse local navigation

Simply add `.inverse` class to your `.o-nav-local` container.

{% example html %}
<div style="margin: 2rem 0; padding: 2rem 0; background-color: black;">
    <div class="o-nav-local inverse">
        <hr aria-hidden="true">
        <nav class="container">
            <a class="hidden-sm-up nav-link active local-select" data-toggle="collapse" href="#localNav2" aria-haspopup="true">target</a>
            <ul class="nav nav-inline collapse" id="localNav2">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Messages</a></li>
            </ul>
        </nav>
        <hr aria-hidden="true">
    </div>
</div>
{% endexample %}
