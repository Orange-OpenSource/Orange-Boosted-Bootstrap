---
layout: docs
title: Tags
description: Documentation and examples for tag component.
group: components
toc: true
---

## Examples

{{< example class="d-flex gap-2" >}}
<div role="button" class="tag" tabindex="0">Label</div>
<div role="button" class="tag tag-icon" tabindex="0">
  <svg fill="currentColor" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</div>
<div role="button" class="tag tag-remove" tabindex="0">
  Label
  <button class="remove">
    <span class="visually-hidden">Close</span>
  </button>
</div>
<div role="button" class="tag tag-icon tag-remove" tabindex="0">
  <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="remove">
    <span class="visually-hidden">Close</span>
  </button>
</div>
{{< /example >}}

{{< example class="d-flex gap-2" >}}
<div role="button" class="tag tag-lg" tabindex="0">Label</div>
<div role="button" class="tag tag-lg tag-icon" tabindex="0">
  <svg fill="currentColor" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</div>
<div role="button" class="tag tag-lg tag-remove" tabindex="0">
  Label
  <button class="remove">
    <span class="visually-hidden">Close</span>
  </button>
</div>
<div role="button" class="tag tag-lg tag-icon tag-remove" tabindex="0">
  <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="remove">
    <span class="visually-hidden">Close</span>
  </button>
</div>
{{< /example >}}

{{< example class="bg-dark d-flex gap-2" >}}
<div role="button" class="tag tag-dark" tabindex="0">Label</div>
<div role="button" class="tag tag-dark tag-icon" tabindex="0">
  <svg fill="currentColor" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</div>
<div role="button" class="tag tag-dark tag-remove" tabindex="0">
  Label
  <button class="remove">
    <span class="visually-hidden">Close</span>
  </button>
</div>
<div role="button" class="tag tag-dark tag-icon tag-remove" tabindex="0">
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

{{< example >}}
<div role="button" class="tag disabled">Label</div>
{{< /example >}}

## Sizes

Fancy larger buttons? Add `.tag-lg` for additional size.

{{< example >}}
<div role="button" class="tag" tabindex="0">Label</div>
<div role="button" class="tag tag-lg" tabindex="0">Label</div>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="tag-variables" file="scss/_variables.scss" >}}
