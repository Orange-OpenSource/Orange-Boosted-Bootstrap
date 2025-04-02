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
    <li class="breadcrumb-item active" aria-current="page"><span tabindex="0">Library<span></li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Very long subcategory to test responsive</a></li>
    <li class="breadcrumb-item active" aria-current="page">Long current page to test responsive</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Category 1</a></li>
    <li class="breadcrumb-item"><a href="#">Sub category B</a></li>
    <li class="breadcrumb-item"><a href="#">Sub sub category IV</a></li>
    <li class="breadcrumb-item active" aria-current="page">Products</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Very long subcategory to test responsive</a></li>
    <li class="breadcrumb-item"><a href="#">Very long subcategory to test responsive 1</a></li>
    <li class="breadcrumb-item"><a href="#">Sub sub category IV</a></li>
    <li class="breadcrumb-item active" aria-current="page">Long current pa Long current paLong current page to test responsive</li>
  </ol>
</nav>
{{< /example >}}
