---
layout: docs
title: Tags
description: Documentation and examples for tag component.
group: components
toc: true
---

## Examples

A tag is basically a rounded button that can contain some text, an icon and a close button.

{{< example class="d-flex gap-2 align-items-center" >}}
<div class="tag">
  <button>Label</button>
</div>
<div class="tag">
  <button>
    <svg fill="currentColor" aria-hidden="true" focusable="false">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
    </svg>
    Label
  </button>
</div>
<div class="tag tag-remove">
  <button>Label</button>
  <button class="remove">
    <span class="visually-hidden">Close</span>
  </button>
</div>
<div class="tag tag-remove">
  <button>
    <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
    </svg>
    Label
  </button>
  <button class="remove">
    <span class="visually-hidden">Close</span>
  </button>
</div>
{{< /example >}}

## With icon

To add icon to your tag, add `.tag-icon`.

{{< example class="d-flex gap-2" >}}
<div class="tag">
  <button>
    <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
    </svg>
    Label
  </button>
</div>
{{< /example >}}

## Dismissing

Tags come with an embedded close icon : `.tag-remove`.

{{< example class="d-flex gap-2" >}}
<div class="tag tag-remove">
  <button>Label</button>
  <button class="remove">
    <span class="visually-hidden">Close</span>
  </button>
</div>
{{< /example >}}

## Dark variant

Tags come with a dark variant : `.tag-dark`.

{{< example class="bg-dark d-flex gap-2" >}}
<div class="tag tag-dark tag-remove">
  <button>
    <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible" width="1.5rem" height="1.5rem">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
    </svg>
    Label
  </button>
  <button class="remove">
    <span class="visually-hidden">Close</span>
  </button>
</div>
{{< /example >}}

## Disabled state

Tags come with a disabled state. Add `.disabled` or even the attribute `disabled`.

{{< example class="d-flex gap-2" >}}
<div class="tag">
  <button disabled>Label</button>
</div>
<div class="tag tag-remove">
  <button disabled>
    <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
    </svg>
    Label
  </button>
  <button class="remove" disabled>
    <span class="visually-hidden">Close</span>
  </button>
</div>
{{< /example >}}

## Sizes

Fancy smaller tags ? Add `.tag-sm` for additional size.

{{< example >}}
<div class="tag me-1"><button>Label</button></div>
<div class="tag tag-sm"><button>Label</button></div>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="tag-variables" file="scss/_variables.scss" >}}

### Mixin

{{< scss-docs name="tag-mixin" file="scss/mixins/_tags.scss" >}}
