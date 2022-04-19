---
layout: docs
title: Tags
description: Documentation and examples for tag component.
group: components
toc: true
---

## Examples

A tag is basically a rounded container that can contain some elements.

{{< callout warning >}}
Each tag version shouldn't be used aside another version of a tag.
{{< /callout >}}

{{< example class="d-flex gap-2 align-items-center" >}}
<span class="tag">
  Label
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

{{< callout info >}}
A `<button>` inside a `<button>` is forbidden for accessibility concerns.
{{< /callout >}}

{{< example class="d-flex gap-2 align-items-center" >}}
<button class="tag">
  Label
</button>

<button class="tag">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</button>

<span class="tag">
  Label
  <button class="close">
    <span class="visually-hidden">Close</span>
  </button>
</span>

<span class="tag">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close">
    <span class="visually-hidden">Close</span>
  </button>
</span>
{{< /example >}}

## Dark variant

Tags come with a dark variant : `.tag-dark`.

{{< example class="d-flex gap-2 align-items-center bg-dark" >}}
<span class="tag tag-dark">
  Label
</span>

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
  <button class="close">
    <span class="visually-hidden">Close</span>
  </button>
</span>
{{< /example >}}

## Sizes

Tags come with a small variant : `.tag-sm`.

{{< example class="d-flex gap-2 align-items-center" >}}
<span class="tag tag-sm">
  Label
</span>

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
  <button class="close">
    <span class="visually-hidden">Close</span>
  </button>
</span>
{{< /example >}}

## Disabled state

Tags come with a disabled state. Add `.disabled` and don't forget to add the `disabled` attribute to the button.

{{< example class="d-flex gap-2 align-items-center" >}}
<span class="tag disabled">
  Label
</span>

<button class="tag" disabled>
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</button>

<span class="tag disabled">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close" disabled>
    <span class="visually-hidden">Close</span>
  </button>
</span>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="tag-variables" file="scss/_variables.scss" >}}
