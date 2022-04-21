---
layout: docs
title: Tags
description: Use tags to convey information, apply filters or display a selection of items.
group: components
toc: true
---

## Examples

A tag is basically a rounded container that can contain some elements. It can be clickable and have a close button.

{{< callout warning >}}
You shouldn't mix tags versions in the same region, since they look the same and have different behaviors.
{{< /callout >}}

{{< example class="d-flex gap-2 align-items-center" >}}
<span class="tag">Label</span>
<button class="tag">Label</button>
<span class="tag">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close"><span class="visually-hidden">Close</span></button>
</span>
{{< /example >}}

## With icon

A tag can be build with an icon (img or svg).

{{< example class="d-flex gap-2" >}}
<div class="tag">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</div>
{{< /example >}}

## Actionable

A tag can be actionable either when builded with a `<button>` tag or with a close button inside.

{{< example class="d-flex gap-2 align-items-center" >}}
<button class="tag">Label</button>
<button class="tag">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</button>
<span class="tag">
  Label
  <button class="close"><span class="visually-hidden">Close</span></button>
</span>
<span class="tag">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close"><span class="visually-hidden">Close</span></button>
</span>
{{< /example >}}

## Dark variant

Tags come with a dark variant: `.tag-dark`.

{{< example class="d-flex gap-2 align-items-center bg-dark" >}}
<span class="tag tag-dark">Label</span>
<button class="tag tag-dark">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</button>
<span class="tag tag-dark">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close"><span class="visually-hidden">Close</span></button>
</span>
{{< /example >}}

## Sizes

Tags come with a small variant: `.tag-sm`.

{{< example class="d-flex gap-2 align-items-center" >}}
<span class="tag tag-sm">Label</span>
<button class="tag tag-sm">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</button>
<span class="tag tag-sm">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close"><span class="visually-hidden">Close</span></button>
</span>
{{< /example >}}

## Disabled state

Tags come with a disabled state: `.disabled`. Don't forget to add `aria-disabled` to the `<span>` and `disabled` attribute to the `<button>` where needed.

{{< example class="d-flex gap-2 align-items-center" >}}
<span class="tag disabled" aria-disabled="true">Label</span>
<button class="tag" disabled>
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</button>
<span class="tag disabled" aria-disabled="true">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close" disabled><span class="visually-hidden">Close</span></button>
</span>
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
