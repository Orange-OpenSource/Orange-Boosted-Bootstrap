---
layout: docs
title: Tags
description: Use tags to convey information, apply filters or display a selection of items.
group: components
toc: true
---

## Examples

A tag is basically a rounded container that can contain some elements. Please adapt the html `<tag>` to be semantically correct. It can be clickable and have a close button.

{{< callout warning >}}
You shouldn't mix tags versions in the same region, since they look the same and have different behaviors.
{{< /callout >}}

{{< example class="d-flex gap-2 align-items-center" >}}
<p class="tag">Label</p>
<button class="tag">Label</button>
<div class="tag" role="group">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close"><span class="visually-hidden">Close</span></button>
</div>
{{< /example >}}

## With icon

A tag can be build with an icon (img or svg).

{{< example class="d-flex gap-2" >}}
<span class="tag">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</span>
{{< /example >}}

## Actionable

A tag can be actionable either when builded with a `<button>` tag or with a close button inside.

{{< example class="d-flex gap-2 align-items-center" >}}
<a href="#" class="tag">Label</a>
<button class="tag">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</button>
<p class="tag" role="group">
  Label
  <button class="close"><span class="visually-hidden">Close</span></button>
</p>
<p class="tag" role="group">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close"><span class="visually-hidden">Close</span></button>
</p>
{{< /example >}}

## Dark variant

Tags come with a dark variant: `.tag-dark`.

{{< example class="d-flex gap-2 align-items-center bg-dark" >}}
<p class="tag tag-dark">Label</p>
<button class="tag tag-dark">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</button>
<p class="tag tag-dark" role="group">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close"><span class="visually-hidden">Close</span></button>
</p>
{{< /example >}}

## Sizes

Tags come with a small variant: `.tag-sm`.

{{< example class="d-flex gap-2 align-items-center" >}}
<p class="tag tag-sm">Label</p>
<button class="tag tag-sm">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</button>
<p class="tag tag-sm" role="group">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close"><span class="visually-hidden">Close</span></button>
</p>
{{< /example >}}

## Disabled state

Tags come with a disabled state: `.disabled`. Don't forget to add `aria-disabled` to the `<span>` and `disabled` attribute to the `<button>` where needed.

{{< example class="d-flex gap-2 align-items-center" >}}
<p class="tag disabled" aria-disabled="true">Label</p>
<button class="tag" disabled>
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</button>
<p class="tag disabled" role="group" aria-disabled="true">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close" disabled><span class="visually-hidden">Close</span></button>
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
