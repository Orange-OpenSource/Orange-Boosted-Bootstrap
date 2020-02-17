---
layout: docs
title: Pagination
description: Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.
group: components
toc: true
---

## Overview

We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

[comment]: boosted mod
Make sure to use class `.has-label` on previous and next links as shown in the example below to use chevron + label layout.

{% capture example %}
<nav role="navigation" aria-label="Pagination example">
  <!-- boosted mod -->
  <ul class="pagination">
    <li class="page-item"><a class="page-link has-label" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link has-label" href="#">Next</a></li>
  </ul>
  <!-- end mod -->
</nav>
{% endcapture %}
{% include example.html content=example %}

## Working with icons

[comment]: boosted mod
Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with **visually hidden text** and a `title` attribute.

{% capture example %}
<nav role="navigation" aria-label="Pagination example with icons">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" title="Previous">
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" title="Next">
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

## Disabled and active states

Pagination links are customizable for different circumstances. Use `.disabled` for links that appear un-clickable and `.active` to indicate the current page.

While the `.disabled` class uses `pointer-events: none` to _try_ to disable the link functionality of `<a>`s, that CSS property is not yet standardized and doesn't account for keyboard navigation. As such, you should always add `tabindex="-1"` on disabled links and use custom JavaScript to fully disable their functionality.

{% capture example %}
<nav role="navigation" aria-label="Pagination example with disabled item">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true" title="Previous">
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" title="Next">
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

You can optionally swap out active or disabled anchors for `<span>`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.

{% capture example %}
<nav role="navigation" aria-label="Pagination example with active span item">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" title="Previous">
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">2</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" title="Next">
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

[comment]: # Boosted mod

{% capture callout %}
### Accessibility

In addition to the `.active` class, you must use `aria-current="page"` attribute to represent the current item within the pagination. This is to ensure a better accessibility to assistive technologies (such as screenreaders, screen magnifiers…) that support it by informing the user about the current element.
{% endcapture %}
{% include callout.html content=callout type='warning' %}

[comment]: # End mod

[comment]: # Boosted mod: no pagination sizes

## Alignment

Change the alignment of pagination components with [flexbox utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/).

{% capture example %}
<nav role="navigation" aria-label="Pagination example, centered">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" title="Previous">
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" title="Next">
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav role="navigation" aria-label="Pagination example, end aligned">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link" title="Previous">
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" title="Next">
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

[comment]: # Boosted mod

{% capture callout %}
## Responsive behaviour

Despite the fact that Bootstrap does not offer any responsive behaviour for pagination, Boosted does with a very simple behaviour.

1. First things first, pagination is able to **wrap** if needed, to prevent it from overflowing the page.
2. Then on smaller breakpoints, a limited amount of items is displayed — always ensuring the `.active` one is shown, alongside the first and last items:
   - between `sm` and `md` breakpoints (from 480 to 768 px), 8 items are shown;
   - below `sm` breakpoint (from 0 to 480px), only 6 items are shown.
{% endcapture %}
{% include callout.html content=callout %}

[comment]: # end mod
