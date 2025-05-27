---
layout: docs
title: Bullet list
description: List allows users to view individual, but related, text items grouped together.
group: components
aliases:
  - "/docs/components/bullet-list/"
toc: true
---

{{< callout info >}}
You can find here the [OUDS Bullet list design guidelines](https://unified-design-system.orange.com/472794e18/p/48a788-button).
{{< /callout >}}

## Unordered lists

Add a `.bullet-list` class to an `ul` element to display an unordered list, this will display a custom icon as the list marker.

### Default display

{{< example >}}
<ul class="bullet-list">
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
</ul>
{{< /example >}}

### Nested unordered lists

The marker depends on the level of nesting.

{{< example >}}
<ul class="bullet-list">
    <li>Bullet lists</li>
    <li>Can have:
      <ul>
        <li>Nested lists</li>
        <li>With:
          <ul>
            <li>Another marker</li>
            <li>Each</li>
          </ul>
      </ul>
    </li>
    <li>That's all</li>
</ul>
{{< /example >}}

### Marker color

Add the class `.list-default-color` to switch to the default body color for the marker.

{{< example >}}
<ul class="bullet-list bullet-list-default-color">
    <li>Item</li>
    <li>Item
      <ul>
        <li>Sub item</li>
        <li>Sub item</li>
      </ul>
    </li>
</ul>
{{< /example >}}

### Custom marker

The list marker can be customized either by creating a CSS class defining the `--bs-bullet-list-custom-marker` custom property or by passing an inline SVG in the `ul` style attribute with this property. When customizing the marker this way, it will be the same for every levels of the list.

#### CSS class

Define a CSS class with the desired SVG inside the `--bs-bullet-list-custom-marker` custom property. This will avoid repeating the SVG code if you plan to have several bullet lists with this same marker.

{{< example >}}
<style>
  .bullet-list-arrow {
    --bs-bullet-list-custom-marker: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000'><path d='M525 700H175a75.22 75.22 0 0 1-75-75V375a75.22 75.22 0 0 1 75-75h350V75l347.862 357.138A98.06 98.06 0 0 1 900 500a98.061 98.061 0 0 1-27.142 67.857L525 925V700Z'/></svg>")
  }
</style>

<ul class="bullet-list bullet-list-arrow">
    <li>Task</li>
    <li>Task
      <ul>
        <li>Sub task</li>
        <li>Sub task</li>
      </ul>
    </li>
</ul>
{{< /example >}}

#### Inline SVG in `ul`

{{< callout info >}}
**Inlined SVG requires properly escaped characters.** Some reserved characters, such as `<`, `>` and `#`, must be URL-encoded or escaped. When customizing the CSS variable, you must handle this yourself.
{{< /callout >}}

{{< example >}}
<ul class="bullet-list" style="--bs-bullet-list-custom-marker: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.474 9.514 10 15.577 4.526 9.514l-.002-.003A2.868 2.868 0 0 1 8.69 5.572l.838.796.472.455.472-.455.838-.796.008-.008a2.868 2.868 0 0 1 4.159 3.947zm1.251-5.302A4.78 4.78 0 0 0 10 4.18a4.78 4.78 0 0 0-6.815 6.7L10 18.393l6.815-7.514a4.78 4.78 0 0 0-.09-6.667'/%3E%3C/svg%3E&#34;);">
    <li>Favorite</li>
    <li>Favorite</li>
    <li>Favorite</li>
</ul>
{{< /example >}}

### Tick marker

#### Using SCSS

The tick marker is not shipped by default in the OUDS Web CSS, you can set the [`$enable-bullet-list-tick` variable]({{< docsref "/customize/options" >}}) to `true` if you are plan using it with OUDS Web Sass source files.

{{< example >}}
<!-- 
  // in your style.scss file before importing OUDS Web source code
  $enable-bullet-list-tick: true;
-->

<ul class="bullet-list bullet-list-tick">
    <li>Task</li>
    <li>Task
      <ul>
        <li>Sub task</li>
        <li>Sub task</li>
      </ul>
    </li>
</ul>
{{< /example >}}

#### Using a custom marker

Create a CSS class to define the `--bs-bullet-list-custom-marker` custom property with the tick SVG. This way, compiling the Sass source is not necessary.

{{< example >}}
<style>
  .bullet-with-tick {
    --bs-bullet-list-custom-marker: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill-rule='evenodd' d='m16.615 6.308-7.587 8.75c-.217.25-.55.41-.925.41s-.708-.16-.926-.41l-3.793-4.375a1.038 1.038 0 0 1-.26-.683c0-.302.133-.575.348-.773l.474-.438c.214-.198.51-.32.838-.32.294 0 .564.1.771.263l2.31 2.362 7.013-6.267c.212-.183.498-.296.811-.296.655 0 1.185.49 1.185 1.094 0 .259-.097.496-.26.683Z' clip-rule='evenodd'/></svg>")
  }
</style>

<ul class="bullet-list bullet-with-tick">
    <li>Task</li>
    <li>Task
      <ul>
        <li>Sub task</li>
        <li>Sub task</li>
      </ul>
    </li>
</ul>
{{< /example >}}


## Ordered lists

Add a `.bullet-list` class to an `ol` element to display an ordered list.

### Default display

{{< example >}}

<ol class="bullet-list">
    <li>Step</li>
    <li>Step</li>
    <li>Step</li>
    <li>Step</li>
    <li>Step</li>
    <li>Step</li>
</ol>

{{< /example >}}


### Nested ordered lists

{{< example >}}
<ol class="bullet-list">
    <li>Category</li>
    <li>Category
      <ol>
        <li>Subcategory</li>
        <li>Subcategory
          <ol>
            <li>Sub subcategory</li>
          </ol>
        </li>
      </ol>
    </li>
    <li>Other category</li>
</ol>
{{< /example >}}

## Mixed lists

It's possible to mix ordered and unordered lists, in this case adding the `.bullet-list` to the nested `<ul>` or `<ol>` is necessary.

{{< example >}}
<ol class="bullet-list">
    <li>This is an ordered list</li>
    <li>With a nested
      <ul class="bullet-list">
        <li>Unordered</li>
        <li>List</li>
      </ul>
    </li>
</ol>

<ul class="bullet-list">
    <li>This is an unordered list</li>
    <li>With a nested
      <ol class="bullet-list">
        <li>Ordered</li>
        <li>List</li>
      </ol>
    </li>
</ul>
{{< /example >}}

## Bare lists

{{< callout warning >}}
Do not confuse this style with the `.list-unstyled` utility that removes all styles from the list, see [below](#unstyled)
{{< /callout >}}

{{< example >}}
<ul class="bullet-list bullet-list-bare">
    <li>Bare bullet lists</li>
    <li>Do not have a marker
      <ul>
        <li>They still</li>
        <li>Have indentation</li>
      </ul>
    </li>
</ul>
{{< /example >}}

## Text style

### Body medium

Add `.fs-bm` to the top `ul` to use body medium font size.

{{< example >}}
<ul class="bullet-list fs-bm">
    <li>This is a list</li>
    <li>With a smaller font size</li>
</ul>
{{< /example >}}

### Font weight normal

Add `.fw-normal` to the top `ul` to use a normal font weight.

{{< example >}}
<ul class="bullet-list fw-normal">
    <li>This is a list</li>
    <li>With a normal font weight, you can put <a href="#">links</a> and long texts in here, adding some words just to show how this will wrap</li>
</ul>
{{< /example >}}

## Native list

{{< callout warning >}}
Only use this where you can not add a class to `<ul>` and `<ol>`.
{{< /callout >}}

All lists—`<ul>`, `<ol>`, and `<dl>`—have their `margin-top` removed and a `margin-bottom: 1rem`. Nested lists have no `margin-bottom`. We've also reset the `padding-left` on `<ul>` and `<ol>` elements.

<div class="bd-example">
{{< markdown >}}
* All lists have their top margin removed
* And their bottom margin normalized
* Nested lists have no bottom margin
  * This way they have a more even appearance
  * Particularly when followed by more list items
    * This way they have a more even appearance
    * Particularly when followed by more list items
* The left padding has also been reset

1. Here's an ordered list
2. With a few list items
3. It has the same overall look
4. As the previous unordered list
{{< /markdown >}}
</div>

## Utilities

### Unstyled

Remove the default `list-style` and left margin on list items (immediate children only). **This only applies to immediate children list items**, meaning you will need to add the class for any nested lists as well.

{{< example >}}
<ul class="list-unstyled">
  <li>This is a list.</li>
  <li>It appears completely unstyled.</li>
  <li>Structurally, it's still a list.</li>
  <li>However, this style only applies to immediate child elements.</li>
  <li>Nested lists:
    <ul>
      <li>are unaffected by this style</li>
      <li>will still show a bullet</li>
      <li>and have appropriate left margin</li>
    </ul>
  </li>
  <li>This may still come in handy in some situations.</li>
</ul>
{{< /example >}}

### Inline

Remove a list's bullets and apply some light `margin` with a combination of two classes, `.list-inline` and `.list-inline-item`.

{{< example >}}
<ul class="list-inline">
  <li class="list-inline-item">This is a list item.</li>
  <li class="list-inline-item">And another one.</li>
  <li class="list-inline-item">But they're displayed inline.</li>
</ul>
{{< /example >}}