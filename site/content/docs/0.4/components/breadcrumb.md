---
layout: docs
title: Breadcrumb
description: Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.
group: components
aliases:
  - "/docs/components/breadcrumb/"
toc: true
---

## Example

Use an ordered or unordered list with linked list items to create a minimally styled breadcrumb.

{{< example >}}
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page"><a href="#">Library</a></li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Category 1</a></li>
    <li class="breadcrumb-item"><a href="#">Sub category B</a></li>
    <li class="breadcrumb-item"><a href="#">Sub sub category IV</a></li>
    <li class="breadcrumb-item active" aria-current="page"><a href="#">Products</a></li>
  </ol>
</nav>
{{< /example >}}


## Responsive behavior

Breadcrumb will not wrap, the number of displayed items depends on the available width, the final two items will always be shown.

{{< example >}}
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Very long subcategory to test responsive</a></li>
    <li class="breadcrumb-item active" aria-current="page"><a href="#">Long current page to test responsive</a></li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Very long subcategory to test responsive</a></li>
    <li class="breadcrumb-item"><a href="#">Very long subcategory to test responsive 1</a></li>
    <li class="breadcrumb-item"><a href="#">Very long subcategory to test responsive A</a></li>
    <li class="breadcrumb-item active" aria-current="page"><a href="#">Very long page to show off responsiveness behavior</a></li>
  </ol>
</nav>
{{< /example >}}
