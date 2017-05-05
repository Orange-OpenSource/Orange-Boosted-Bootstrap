---
layout: docs
title: Breadcrumb
description: Indicate the current page's location within a navigational hierarchy.
group: components
---

Indicate the current page's location within a navigational hierarchy. Separators are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content).

{% callout warning %}
#### Accessibility

In addition to the `.active` class, you must use `aria-current="location"` state to represent the current location within the breadcrumb. This is to ensure a better accessibility to assistive technologies (as screenreaders , screen magnifiers...) that can support it by warning the user of the current element position and type, here it's the location.
{% endcallout %}

{% example html %}
<ol class="breadcrumb">
  <li class="breadcrumb-item active" aria-current="location">Home</li>
</ol>
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item active" aria-current="location">Library</li>
</ol>
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item"><a href="#">Library</a></li>
  <li class="breadcrumb-item active" aria-current="location">Data</li>
</ol>
{% endexample %}

Similar to our navigation components, breadcrumbs work fine with or without the usage of list markup.

{% example html %}
<nav class="breadcrumb">
  <a class="breadcrumb-item" href="#">Home</a>
  <a class="breadcrumb-item" href="#">Library</a>
  <a class="breadcrumb-item" href="#">Data</a>
  <span class="breadcrumb-item active" aria-current="location">Bootstrap</span>
</nav>
{% endexample %}
