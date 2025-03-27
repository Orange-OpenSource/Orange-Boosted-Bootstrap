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
    <li class="breadcrumb-item"><a href="#" class="breadcrumb-link">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#" class="breadcrumb-link">Home</a></li>
    <li class="breadcrumb-item"><a href="#" class="breadcrumb-link">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
{{< /example >}}
