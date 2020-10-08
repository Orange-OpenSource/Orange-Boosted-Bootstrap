---
layout: docs
title: Breadcrumb
description: Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.
group: components
---

## Example

{% capture example %}
<nav role="navigation" aria-labelledby="breadcrumb-intro">
  <p class="sr-only" id="breadcrumb-intro">You are here:</p>
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="location">Home</li>
  </ol>
</nav>

<nav role="navigation" aria-labelledby="breadcrumb-intro-2">
  <p class="sr-only" id="breadcrumb-intro-2">You are here:</p>
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="location">Library</li>
  </ol>
</nav>

<nav role="navigation" aria-labelledby="breadcrumb-intro-3">
  <p class="sr-only" id="breadcrumb-intro-3">You are here:</p>
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="location">Data</li>
  </ol>
</nav>
{% endcapture %}
{% include example.html content=example %}

## Changing the separator

[comment]: # Boosted mod

Separators are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) as an inlined SVG in a `background-image`, passed through Boosted's `escape-svg()` function.

In order to change the breadcrumb divider, you can replace inlined `<svg>` in `$breadcrumb-divider` and `$breadcrumb-divider-dark`.

```scss
$breadcrumb-divider: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 14'><path d='M9 2L7 0 0 7l7 7 2-2-5-5 5-5z'/></svg>");
```

The separator can be removed by setting `$breadcrumb-divider` to `none`:

```scss
$breadcrumb-divider: none;
```

[comment]: #Boosted mod
## Backgrounds

To customize breadcrumb, simply use our [background utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/colors/#background-color).

{% capture example %}
<nav role="navigation" aria-labelledby="breadcrumb-intro-4">
  <p class="sr-only" id="breadcrumb-intro-4">You are here:</p>
  <ol class="breadcrumb bg-dark pl-3">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="location">Data</li>
  </ol>
</nav>

<nav role="navigation" aria-labelledby="breadcrumb-intro-5">
  <p class="sr-only" id="breadcrumb-intro-5">You are here:</p>
  <ol class="breadcrumb bg-success pl-3">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="location">Data</li>
  </ol>
</nav>
{% endcapture %}
{% include example.html content=example %}

## Accessibility

Since breadcrumbs provide a navigation, it's a good idea to add **a meaningful label** such as `<p class="sr-only" id="breadcrumb-title">You are here:</p>` to describe the type of navigation provided in the `<nav aria-labelledby="breadcrumb-title">` element 
— please notice the `id` attribute on `<p>`, then referenced in `aria-labelledby` on `<nav>` — as well as applying an `aria-current="location"` to the last item of the set to **indicate the current page**.

For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).
