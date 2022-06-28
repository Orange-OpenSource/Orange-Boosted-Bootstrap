---
layout: docs
title: Tags
description: Use tags to convey information, apply filters or display a selection of items.
group: components
toc: true
added: "5.2"
---

## Examples

A tag is basically a rounded container that can contain text, `<img>`/`<svg>` and/or a close button. Please adapt the html `<tag>` to be semantically correct. Here are some hints to build [accessible tags on A11y guidelines Orange](https://a11y-guidelines.orange.com/en/web/components-examples/tags/).

Here is a small sample of the tags that can be built.

{{< callout warning >}}
You shouldn't mix tags versions in the same region, since they look the same and have different behaviors.
{{< /callout >}}

{{< example class="d-flex gap-2 align-items-center" >}}
<h3 class="visually-hidden">List of the different tag variants</h3>
<p class="tag">Informative</p>
<button class="tag">Filter</button>
<p class="tag" id="labelTag1">
  <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Input
  <button class="close close-whole" aria-labelledby="labelTag1"><span class="visually-hidden">Close</span></button>
</p>
{{< /example >}}

## Informative

This kind of tag can be built on top of any `<tag>` and should be semantically correct. For a list of tags of an article, for example, add a heading (`<hn>`) to explain that we are in a tag list and use `<ul>` or `<ol>` (if tags are ordered).

Here is an example with a table.

{{< example >}}
<table class="table">
  <caption class="visually-hidden">Present tags in a table context</caption>
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Associated tags</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Larry</td>
      <td class="p-2">
        <ul class="list-unstyled m-0 d-flex gap-2 flex-wrap">
          <li><p class="tag tag-sm">Bird</p></li>
          <li><p class="tag tag-sm">Twitter</p></li>
          <li><p class="tag tag-sm">NBA</p></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Bootstrap</td>
      <td class="p-2">
        <ul class="list-unstyled m-0 d-flex gap-2 flex-wrap">
          <li><p class="tag tag-sm">Framework</p></li>
          <li><p class="tag tag-sm">Twitter</p></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
{{< /example >}}

## Filter

A tag can be actionable either when builded on top of a `<button>`, a `<label>` and `<input>` or an `<a>` tag. `.actionable-tag` can be used too but it shouldn't since you have to implement semantics too. These tags are usually used as filters.

To add semantics for buttons filter, for example, you should use `<button>` (if it triggers an inside the same page action) or a `<a>` tag (if a new URL is launched) and put an explicit heading. The text of the button or link must be clear enough to explain the function or the destination of the tag.
Most of the time, tags must be inside a list (`<ul>` or `<ol>`).

Mix with other components can be done. Here is an example of tag filtering using [checkboxes]({{< docsref "/components/button-group#checkbox-and-radio-button-groups" >}}) (same can be done with radio buttons). Additional CSS is required here.

{{< example class="d-flex gap-2 align-items-center" >}}
<h2 class="m-0">Choose your tag filters</h2>
<ul class="list-unstyled d-flex gap-2 flex-wrap ms-2">
  <li>
    <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
    <label class="tag" for="btncheck1">Mobile</label>
  </li>
  <li>
    <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
    <label class="tag" for="btncheck2">Computer</label>
  </li>
  <li>
    <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" checked>
    <label class="tag" for="btncheck3">
      <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M75,200V720H225v80H775V720H925V200H75ZM500,755a30,30,0,1,1,30-30A30,30,0,0,1,500,755Zm365-95H135V260H865V660Z"></path>
      </svg>
      TV
    </label>
  </li>
</ul>
{{< /example >}}

```css
.btn-check:checked + .tag {
  color: var(--bs-tag-active-color);
  background-color: var(--bs-tag-active-decoration-color);
  border-color: var(--bs-tag-active-decoration-color);
}
```

The same result could be obtained with additional Javascript and the `.active` class.

{{< example class="d-flex gap-2 align-items-center" >}}
<h2 class="m-0">Choose your tag filters</h2>
<ul class="list-unstyled d-flex gap-2 flex-wrap ms-2">
  <li><button class="tag">Mobile</button></li>
  <li><button class="tag">Computer</button></li>
  <li>
    <button class="tag active">
      <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M75,200V720H225v80H775V720H925V200H75ZM500,755a30,30,0,1,1,30-30A30,30,0,0,1,500,755Zm365-95H135V260H865V660Z"></path>
      </svg>
      TV
    </button>
  </li>
</ul>
{{< /example >}}

Here is an example for an article and its sub-titles anchors.

{{< example >}}
<h2>Article about Larry the bird</h2>
<h3 class="visually-hidden">Links to anchor in an imaginary page</h3>
<ul class="list-unstyled d-flex gap-2 flex-wrap m-0">
  <li>
    <a class="tag" href="#">1. Introduction</a>
  </li>
  <li>
    <a class="tag" href="#">2. Exposure</a>
  </li>
</ul>
{{< /example >}}

## Input

This kind of tag can be built on top of any `<tag>` but `<button>`, `<a>` or `<label>` and you should add semantics to tags. For a list of selected items use `<ul>` or `<ol>` (if tags are ordered). Here is an [accessible example](https://a11y-guidelines.orange.com/en/web/components-examples/tags/examples/filter-by-brand/) of a component that can be built on top of this variant.

<!-- TODO: Add a link to dropdown with multiple selection -->

Closable tags come with a strongly recommended variant `.close-whole`.

{{< example class="d-flex gap-2 align-items-center" >}}
<h3 class="visually-hidden">Different ways to display close button</h3>
<ul class="list-unstyled d-flex gap-2 flex-wrap m-0">
  <li class="tag" id="labelTag2">
    Closable on cross
    <button class="close" aria-labelledby="labelTag2"><span class="visually-hidden">Close</span></button>
  </li>
  <li class="tag" id="labelTag3">
    Closable on tag
    <button class="close close-whole" aria-labelledby="labelTag3"><span class="visually-hidden">Close</span></button>
  </li>
</ul>
{{< /example >}}

## Dark variant

Tags come with a dark variant: `.tag-dark`.

{{< example class="d-flex gap-2 align-items-center bg-dark" >}}
<h3 class="visually-hidden">Dark tag variant</h3>
<p class="tag tag-dark">Informative</p>
<button class="tag tag-dark">
  <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Filter
</button>
<p class="tag tag-dark" id="labelTag4">
  <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Input
  <button class="close close-whole" aria-labelledby="labelTag4"><span class="visually-hidden">Close</span></button>
</p>
{{< /example >}}

## Sizes

Tags come with a small variant: `.tag-sm`.

{{< example class="d-flex gap-2 align-items-center" >}}
<h3 class="visually-hidden">Small tag variant</h3>
<p class="tag tag-sm">Informative</p>
<button class="tag tag-sm">
  <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Filter
</button>
<p class="tag tag-sm" id="labelTag5">
  <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Input
  <button class="close close-whole" aria-labelledby="labelTag5"><span class="visually-hidden">Close</span></button>
</p>
{{< /example >}}

## Disabled state

Tags come with a disabled state: `.disabled`. Don't forget to add `aria-disabled` to the `<span>` and `disabled` attribute to the `<button>` where needed.

{{< example class="d-flex gap-2 align-items-center" >}}
<h3 class="visually-hidden">Disabled tags for the different variants</h3>
<p class="tag disabled" aria-disabled="true">Informative</p>
<button class="tag" disabled>
  <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Filter
</button>
<p class="tag disabled" id="labelTag6" aria-disabled="true">
  <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Input
  <button class="close close-whole" aria-labelledby="labelTag6" disabled><span class="visually-hidden">Close</span></button>
</p>
{{< /example >}}

## CSS

### Variables

Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="tag-css-vars" file="scss/_tag.scss" >}}

Customization through CSS variables can be seen on the `.tag-dark` class where we override specific values without adding duplicate CSS selectors.

{{< scss-docs name="tag-dark-css-vars" file="scss/_tag.scss" >}}

Customization through CSS variables can be seen on the `.tag-sm` class where we override specific values without adding duplicate CSS selectors.

{{< scss-docs name="tag-sm-css-vars" file="scss/_tag.scss" >}}

### Sass Variables

{{< scss-docs name="tag-variables" file="scss/_variables.scss" >}}
