---
layout: docs
title: Tags
description: Documentation and examples for tag component.
group: components
toc: true
---

## Examples

A tag is basically a rounded button that can contain some text, an icon and a close button.

{{< example class="d-flex gap-2" >}}
<div role="button" tabindex="0" class="tag">Label</div>
<div role="button" tabindex="0" class="tag tag-icon">
  <svg fill="currentColor" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</div>
<div role="button" tabindex="0" class="tag tag-remove">
  Label
  <button class="remove">
    <span class="visually-hidden">Close</span>
  </button>
</div>
<div role="button" tabindex="0" class="tag tag-icon tag-remove">
  <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="remove">
    <span class="visually-hidden">Close</span>
  </button>
</div>
{{< /example >}}

## With icon

To add icon to your tag, add `.tag-icon`.

{{< example class="d-flex gap-2" >}}
<div role="button" tabindex="0" class="tag tag-icon">
  <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</div>
{{< /example >}}

## Dismissing

Tags come with an embedded close icon : `.tag-remove`.

{{< example class="d-flex gap-2" >}}
<div role="button" tabindex="0" class="tag tag-remove">
  Label
  <button class="remove">
    <span class="visually-hidden">Close</span>
  </button>
</div>
{{< /example >}}

## Dark variant

Tags come with a dark variant : `.tag-dark`.

{{< example class="bg-dark d-flex gap-2" >}}
<div role="button" tabindex="0" class="tag tag-dark tag-icon tag-remove">
  <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="remove">
    <span class="visually-hidden">Close</span>
  </button>
</div>
{{< /example >}}

## Disabled state

Tags come with a disabled state. Add `.disabled` or even the attribute `disabled`.

{{< example class="d-flex gap-2" >}}
<div role="button" tabindex="-1" class="tag disabled">Label</div>
<div role="button" class="tag tag-icon tag-remove" disabled>
  <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="remove">
    <span class="visually-hidden">Close</span>
  </button>
</div>
{{< /example >}}

## Sizes

Fancy smaller tags ? Add `.tag-sm` for additional size.

{{< example >}}
<div role="button" tabindex="0" class="tag me-1">Label</div>
<div role="button" tabindex="0" class="tag tag-sm">Label</div>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="tag-variables" file="scss/_variables.scss" >}}

### Mixin

{{< scss-docs name="tag-mixin" file="scss/mixins/_tags.scss" >}}
