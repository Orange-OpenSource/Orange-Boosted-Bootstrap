---
layout: docs
title: Tags
description: Use tags to convey information, apply filters or display a selection of items.
group: components
aliases:
  - "/docs/components/tags/"
toc: true
added:
  version: "5.2"
---

## Examples

A tag is basically a rounded `<span>` that can contain text, and optionally an image and/or a close button. Please **adapt the HTML** to be semantically correct. Here are some hints to build [accessible tags](https://a11y-guidelines.orange.com/en/web/components-examples/tags/).

There are some built-in examples that you can find on [our tags example page]({{< docsref "/examples/tags" >}})

{{< callout warning >}}
You shouldn't mix the different tags versions in the same area since they look the same and have different behaviors.
{{< /callout >}}

### Informative

Informative tags are built on top of `<span>` and are usually used to display categories. They have no specific interaction.

For a list of tags of an article, for example, add a heading (`<h1>–<h6>`) to explain that we are in a tags list and use `<ul>` or `<ol>` depending on the use case.

{{< example >}}
<ul class="list-unstyled m-0 d-flex gap-2 flex-wrap m-0">
  <li><span class="tag">Bird</span></li>
  <li>
    <span class="tag">
      <svg xmlns='http://www.w3.org/2000/svg' fill="currentColor" viewBox='0 0 32 32'><path d='M32 7a13 13 0 01-3.8 1.1 6.6 6.6 0 003-3.6c-1.4.7-2.8 1.3-4.3 1.6a6.6 6.6 0 00-11.1 6A18.6 18.6 0 012.2 5a6.6 6.6 0 002 8.9c-1 0-2-.4-3-.9v.1c0 3.2 2.4 5.9 5.4 6.5a6.6 6.6 0 01-3 0 6.6 6.6 0 006.1 4.6A13.2 13.2 0 010 27.1a18.6 18.6 0 0028.7-16.6C30 9.5 31.1 8.4 32 7z'/></svg>
      Twitter
    </span>
  </li>
</ul>
{{< /example >}}

### Filter

A tag can be actionable either when built on top of a `<button>` or a `<label>`. These `<label>`s are based on either checkboxes or radios `<input>`. These tags are usually used as filters and have an `.active` state.

Most of the time, tags must be inside a list (`<ul>` or `<ol>`).

{{< example >}}
<ul class="list-unstyled d-flex gap-2 flex-wrap m-0">
  <li>
    <input type="checkbox" class="btn-check" id="btncheck-mobile" autocomplete="off">
    <label class="tag" for="btncheck-mobile"><span class="visually-hidden">Filter by</span>Mobile</label>
  </li>
  <li>
    <input type="checkbox" class="btn-check" id="btncheck-tv" autocomplete="off" checked>
    <label class="tag" for="btncheck-tv">
      <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true">
        <path fill="currentColor" d="M75,200V720H225v80H775V720H925V200H75ZM500,755a30,30,0,1,1,30-30A30,30,0,0,1,500,755Zm365-95H135V260H865V660Z"></path>
      </svg>
      <span class="visually-hidden">Filter by</span>TV
    </label>
  </li>
</ul>
{{< /example >}}

If the tag filter triggers some action, you should use the version built on top of a `<button>`.
The text of the button must be clear enough to explain the function.

{{< example >}}
<ul class="list-unstyled d-flex gap-2 flex-wrap m-0">
  <li><button class="tag"><span class="visually-hidden">Filter by</span>Mobile</button></li>
  <li>
    <button class="tag active">
      <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true">
        <path fill="currentColor" d="M75,200V720H225v80H775V720H925V200H75ZM500,755a30,30,0,1,1,30-30A30,30,0,0,1,500,755Zm365-95H135V260H865V660Z"></path>
      </svg>
      <span class="visually-hidden">Filter by</span>TV
    </button>
  </li>
</ul>
{{< /example >}}

### Navigation

Another way to build actionable tags is to build them on top of `<a>`. These kind of tags are usually used as anchor links.

Put an explicit heading to add semantics. The text of the link must be clear enough to explain the destination of the tag.
Most of the time, tags must be inside a list (`<ul>` or `<ol>`).

{{< example >}}
<ol class="list-unstyled d-flex gap-2 flex-wrap m-0">
  <li><a class="tag" href="#">1. Introduction</a></li>
  <li><a class="tag" href="#">2. Exposure</a></li>
</ol>
{{< /example >}}

### Input

This kind of tags are built on `<span>`.

For a list of selected items use `<ul>` or `<ol>`.

Here is an [accessible example](https://a11y-guidelines.orange.com/en/web/components-examples/tags/examples/filter-by-brand/) of a component that can be built on top of this variant.

{{< example class="d-flex gap-2 align-items-center" >}}
<ul class="list-unstyled d-flex gap-2 flex-wrap m-0">
  <li><span class="tag" id="labelTag1">
    Dismissible tag
    <button class="close" aria-labelledby="labelTag1"><span class="visually-hidden">Close</span></button>
  </span></li>
  <li><span class="tag" id="labelTag2">
    <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
    </svg>
    Dismissible tag
    <button class="close" aria-labelledby="labelTag2"><span class="visually-hidden">Close</span></button>
  </span></li>
</ul>
{{< /example >}}

## Dark variant

{{< deprecated-in "5.3.3" >}}

{{< callout-deprecated-dark-variants "tag" >}}

## Sizes

{{< callout info >}}
We add an extra `<p>` around the `<span>` here for accessibility concerns.
{{< /callout >}}

Add `.tag-sm` to the `.tag` for a small variant.

{{< example class="d-flex flex-wrap gap-2 align-items-center" >}}
<h3 class="visually-hidden">Small tag variant</h3>
<p class="mb-0"><span class="tag tag-sm">Informative</span></p>
<button class="tag tag-sm">Filter</button>
<a class="tag tag-sm" href="#">Navigation</a>
<p><span class="tag tag-sm" id="labelTag4">
  <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Input
  <button class="close" aria-labelledby="labelTag4"><span class="visually-hidden">Close</span></button>
</span></p>
{{< /example >}}

## Disabled state

{{< callout info >}}
We add an extra `<p>` around the `<span>` here for accessibility concerns.
{{< /callout >}}

Add `.disabled` to the `.tag` for a disabled variant. Don't forget to add `aria-disabled` to `<span>` and `disabled` attribute to `<button>`.

Disabled tags using the `<a>` element behave a bit different:

- `<a>`s don't support the `disabled` attribute, so you must add the `.disabled` class to make it visually appear disabled.
- Some future-friendly styles are included to disable all `pointer-events` on anchor tags.
- Disabled tags using `<a>` should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.
- Disabled tags using `<a>` *should not* include the `href` attribute.

{{< example class="d-flex flex-wrap gap-2 align-items-center" >}}
<h3 class="visually-hidden">Disabled tags for the different variants</h3>
<p class="mb-0"><span class="tag disabled" aria-disabled="true">Informative</span></p>
<button class="tag" disabled>Filter</button>
<a class="tag disabled" aria-disabled="true">Navigation</a>
<p><span class="tag disabled" id="labelTag5" aria-disabled="true">
  <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Input
  <button class="close" aria-labelledby="labelTag5" disabled><span class="visually-hidden">Close</span></button>
</span></p>
{{< /example >}}

## CSS

### Variables

Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="tag-css-vars" file="scss/_tags.scss" >}}

Customization through CSS variables can be seen on the `.tag-sm` class where we override specific values without adding duplicate CSS selectors.

{{< scss-docs name="tag-sm-css-vars" file="scss/_tags.scss" >}}

### Sass Variables

Variables for all tags:

{{< scss-docs name="tag-variables" file="scss/_variables.scss" >}}

Variables for the [small tag](#sizes):

{{< scss-docs name="tag-sm-variables" file="scss/_variables.scss" >}}
