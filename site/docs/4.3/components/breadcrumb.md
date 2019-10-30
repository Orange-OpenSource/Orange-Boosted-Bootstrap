---
layout: docs
title: Breadcrumb
description: Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.
group: components
---

## Example

{% capture example %}
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
{% endcapture %}
{% include example.html content=example %}

## Changing the separator

[comment]: # Boosted mod

Separators are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) as an inlined SVG in a `background-image`, passed through Boosted's `escape-svg()` function.

In order to change the breadcrumb divider, you can replace inlined `<svg>` in `$breadcrumb-divider`.

```scss
$breadcrumb-divider: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 14'><path d='M9 2L7 0 0 7l7 7 2-2-5-5 5-5z'/></svg>");
```

The separator can be removed by setting `$breadcrumb-divider` to `none`:

```scss
$breadcrumb-divider: none;
```

## Accessibility

Since breadcrumbs provide a navigation, it's a good idea to add a meaningful label such as `aria-label="breadcrumb"` to describe the type of navigation provided in the `<nav>` element, as well as applying an `aria-current="page"` to the last item of the set to indicate that it represents the current page.

For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).
