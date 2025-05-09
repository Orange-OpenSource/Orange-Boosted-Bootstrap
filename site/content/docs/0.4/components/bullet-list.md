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

OUDS Web removes the default styling on `ul` elements and replaces it with a Solaris icon for each level of nesting.

### Default display

{{< example >}}
<ul>
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
</ul>
{{< /example >}}

### Nested lists

The marker depends on the level of nesting.

{{< example >}}
<ul>
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
</ul>
{{< /example >}}

### Marker color

Add the class `.list-default-color` to switch to the default body color for the marker.

{{< example >}}
<ul class="list-default-color">
    <li>Item</li>
    <li>Item
      <ul>
        <li>Sub item</li>
        <li>Sub item</li>
      </ul>
    </li>
</ul>
{{< /example >}}

### Tick marker

Add the class `.list-tick` to switch to a tick marker, in this case the marker will always be a tick no matter the level.

{{< example >}}
<ul class="list-tick">
    <li>Task</li>
    <li>Task
      <ul>
        <li>Sub task</li>
        <li>Sub task</li>
      </ul>
    </li>
</ul>
{{< /example >}}

### Custom marker

It's also possible to use an **embedded SVG icon** to change the marker, you can apply it via our CSS custom property. The marker will then be the same for every levels.

{{< callout info >}}
**Inlined SVG requires properly escaped characters.** Some reserved characters, such as `<`, `>` and `#`, must be URL-encoded or escaped. When customizing the CSS variable, you must handle this yourself.
{{< /callout >}}

{{< example >}}
<ul style="--bs-bullet-list-custom-marker: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.4736 9.51371L9.99987 15.5765L4.52643 9.51371L4.52363 9.51066C3.46358 8.33406 3.55828 6.52092 4.73488 5.46086C5.86857 4.4399 7.60326 4.48484 8.6821 5.56369C8.6849 5.56674 8.68769 5.56953 8.69048 5.57232L9.52761 6.36807L9.99987 6.82256L10.4721 6.36832L11.3095 5.57232C11.3121 5.56953 11.3151 5.56674 11.3179 5.56369C11.8547 5.02414 12.5846 4.72199 13.3456 4.72402C14.9292 4.72402 16.2132 6.00752 16.2135 7.59138C16.2135 8.30029 15.9509 8.98406 15.4764 9.51066L15.4736 9.51371ZM16.7254 4.21217C14.8698 2.35688 11.8692 2.34622 9.99992 4.17891C8.13091 2.34622 5.13025 2.35688 3.27471 4.21217C1.43897 6.04817 1.40876 9.00617 3.18508 10.8787L9.99992 18.3926L16.815 10.8787C18.5911 9.00617 18.5611 6.04817 16.7254 4.21217Z'/%3E%3C/svg%3E&#34;">
    <li>Favorite</li>
    <li>Favorite</li>
    <li>Favorite
      <ul>
        <li>Sub favorite</li>
      </ul>
    </li>
</ul>
{{< /example >}}


## Ordered lists

### Default display

{{< example >}}

<ol>
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
<ol>
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
</ol>
{{< /example >}}

## Mixed lists

It's possible to mix ordered and unordered lists.

{{< example >}}
<ol>
    <li>This is an ordered list</li>
    <li>With a nested
      <ul>
        <li>Unordered</li>
        <li>List</li>
      </ul>
    </li>
</ol>

<ul>
    <li>This is an unordered list</li>
    <li>With a nested
      <ol>
        <li>Ordered</li>
        <li>List</li>
      </ol>
    </li>
</ul>
{{< /example >}}

## Bare lists

{{< callout >}}
Do not confuse this style with the `.list-unstyled` utility that remove all styles from the list, see [below](#unstyled)
{{< /callout >}}

{{< example >}}
<ul class="list-bare">
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
<ul class="fs-bm">
    <li>This is a list</li>
    <li>With a smaller font size</li>
</ul>
{{< /example >}}

### Font weight normal

Add `.fw-normal` to the top `ul` to use a normal font weight.

{{< example >}}
<ul class="fw-normal">
    <li>This is a list</li>
    <li>With a normal font weight</li>
</ul>
{{< /example >}}

## Native list utilities

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