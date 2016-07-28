---
layout: docs
title: Pagination
group: components
---

Provide pagination links for your site or app with the multi-page pagination component.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Overview

Simple pagination inspired by Rdio, great for apps and search results. The large block is hard to miss, easily scalable, and provides large click areas.

{% example html %}
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link prev disabled" href="#" aria-label="Go to previous page"></a>
    </li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Go to page 1">1</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Go to page 2">2</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Go to page 3">3</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Go to page 4">4</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Go to page 5">5</a></li>
    <li class="page-item">
      <a class="page-link next" href="#" aria-label="Go to next page"></a>
    </li>
  </ul>
</nav>
{% endexample %}

{% callout info %}
### Labelling the pagination component

The pagination component should be wrapped in a `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies. In addition, as a page is likely to have more than one such navigation section already (such as the primary navigation in the header, or a sidebar navigation), it is advisable to provide a descriptive `aria-label` for the `<nav>` which reflects its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.
{% endcallout %}

## Disabled and active states

Links are customizable for different circumstances. Use `.disabled` for unclickable links and `.active` to indicate the current page.

{% callout warning %}
#### Link functionality caveat

The `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a `tabindex="-1"` attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.
{% endcallout %}

{% example html %}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item ">
     <a class="page-link prev disabled" href="#" aria-label="Go to previous page"></a>
    </li>
    <li class="page-item ">
      <a class="page-link active" href="#" aria-label="Go to page 1">1 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Go to page 2">2</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Go to page 3">3</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Go to page 4">4</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Go to page 5">5</a></li>
    <li class="page-item">
      <a class="page-link next" href="#" aria-label="Go to next page"></a>
    </li>
  </ul>
</nav>
{% endexample %}

You can optionally swap out active or disabled anchors for `<span>`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.

{% example html %}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item ">
      <span class="page-link prev disabled" aria-label="Go to previous page"></span>
    </li>
    <li class="page-item "><span class="page-link active">1 <span class="sr-only">(current)</span></span></li>
  </ul>
</nav>
{% endexample %}


## Sizing

Fancy larger or smaller pagination? Add `.pagination-lg` or `.pagination-sm` for additional sizes.

{% example html %}
<nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item">
      <a class="page-link prev disabled" href="#" aria-label="Go to previous page"></a>
    </li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Go to page 1">1</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Go to page 2">2</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Go to page 3">3</a></li>
    <li class="page-item">
      <a class="page-link next" href="#" aria-label="Go to next page"></a>
    </li>
  </ul>
</nav>
{% endexample %}

{% example html %}
<nav aria-label="...">
  <ul class="pagination pagination-sm">
    <li class="page-item">
      <a class="page-link prev disabled" href="#" aria-label="Go to previous page"></a>
    </li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Go to page 1">1</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Go to page 2">2</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Go to page 3">3</a></li>
    <li class="page-item">
      <a class="page-link next" href="#" aria-label="Go to next page"></a>
    </li>
  </ul>
</nav>
{% endexample %}
