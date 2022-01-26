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
<button class="tag">Label</button>
<button class="tag tag-icon">
  <svg fill="currentColor" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</button>
<button class="tag tag-remove">
  Label
  <div role="button" class="remove" tabindex="0">
    <span class="visually-hidden">Close</span>
  </div>
</button>
<button class="tag tag-icon tag-remove">
  <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <div role="button" class="remove" tabindex="0">
    <span class="visually-hidden">Close</span>
  </div>
</button>
{{< /example >}}

## With icon

To add icon to your tag, add `.tag-icon`.

{{< example class="d-flex gap-2" >}}
<button class="tag tag-icon">
  <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</button>
{{< /example >}}

## Dismissing

Tags come with an embedded close icon : `.tag-remove`.

{{< example class="d-flex gap-2" >}}
<button class="tag tag-remove">
  Label
  <div role="button" class="remove" tabindex="0">
    <span class="visually-hidden">Close</span>
  </div>
</button>
{{< /example >}}

## Dark variant

Tags come with a dark variant : `.tag-dark`.

{{< example class="bg-dark d-flex gap-2" >}}
<button class="tag tag-dark tag-icon tag-remove">
  <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <div role="button" class="remove" tabindex="0">
    <span class="visually-hidden">Close</span>
  </div>
</button>
{{< /example >}}

## Disabled state

Tags come with a disabled state. Add `.disabled` or even the attribute `disabled`.

{{< example class="d-flex gap-2" >}}
<button class="tag disabled" tabindex="-1">Label</button>
<button class="tag tag-icon tag-remove" disabled>
  <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <div role="button" class="remove">
    <span class="visually-hidden">Close</span>
  </div>
</button>
{{< /example >}}

## Sizes

Fancy smaller tags ? Add `.tag-sm` for additional size.

{{< example >}}
<button class="tag me-1">Label</button>
<button class="tag tag-sm">Label</button>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="tag-variables" file="scss/_variables.scss" >}}

### Mixin

{{< scss-docs name="tag-mixin" file="scss/mixins/_tags.scss" >}}
