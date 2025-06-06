---
layout: docs
title: Breadcrumb
description: Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.
group: components
aliases:
  - "/docs/components/breadcrumb/"
toc: true
---

## Basic example

Use an ordered or unordered list with linked list items to create a minimally styled breadcrumb. It is strongly advised to add `title` attributes on each items if there are long page titles or several levels in the breadcrumb.

{{< example >}}
<nav aria-label="basic breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page"><span>Library</span></li>
  </ol>
</nav>

<nav aria-label="full breadcrumb ">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#" title="Home">Home</a></li>
    <li class="breadcrumb-item"><a href="#" title="Category 1">Category 1</a></li>
    <li class="breadcrumb-item"><a href="#" title="Sub category B">Sub category B</a></li>
    <li class="breadcrumb-item"><a href="#" title="Sub sub category IV">Sub sub category IV</a></li>
    <li class="breadcrumb-item active" aria-current="page"><span title="Products">Products</span></li>
  </ol>
</nav>
{{< /example >}}


## Behavior on smaller viewports

Breadcrumb will not wrap, the number of displayed items depends on the available width, the final two items will always be shown.

{{< callout danger >}}
  *We should not have titles this long* in a breadcrumb, this is only for demonstrating small viewport behavior
{{< /callout >}}

{{< example >}}
<nav aria-label="large breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/" title="Home">Home</a></li>
    <li class="breadcrumb-item"><a href="#" title="Very long subcategory to test responsive">Very long subcategory to test responsive</a></li>
    <li class="breadcrumb-item active" aria-current="page"><span title="Long current page to test responsive">Long current page to test responsive</span></li>
  </ol>
</nav>

<nav aria-label="very large breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#" title="Home">Home</a></li>
    <li class="breadcrumb-item"><a href="#" title="Very long subcategory to test responsive">Very long subcategory to test responsive</a></li>
    <li class="breadcrumb-item"><a href="#" title="Very long subcategory to test responsive 1">Very long subcategory to test responsive 1</a></li>
    <li class="breadcrumb-item"><a href="#" title="Very long subcategory to test responsive A">Very long subcategory to test responsive A</a></li>
    <li class="breadcrumb-item active" aria-current="page"><span title="Very long page to show off responsiveness behavior">Very long page to show off responsiveness behavior</span></li>
  </ol>
</nav>
{{< /example >}}
