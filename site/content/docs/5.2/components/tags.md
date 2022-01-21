---
layout: docs
title: Tags
description: Documentation and examples for tag component.
group: components
toc: true
---

## Standard

{{< example >}}
<span class="tag" tabindex="0">Label</span>
{{< /example >}}

## With icon

{{< example >}}
<span class="tag tag-icon" tabindex="0">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</span>
{{< /example >}}

## With remove icon

{{< example >}}
<span class="tag tag-remove" tabindex="0">
  Label
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible remove">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
  </svg>
</span>
{{< /example >}}

## With icon and remove icon

{{< example >}}
<span class="tag tag-icon tag-remove" tabindex="0">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible remove">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
  </svg>
</span>
{{< /example >}}

## Disabled state

{{< example >}}
<span class="tag disabled">Label</span>
{{< /example >}}

## Sizes

Fancy larger buttons? Add `.tag-lg` for additional size.

{{< example >}}
<span class="tag" tabindex="0">Label</span>
<span class="tag tag-lg" tabindex="0">Label</span>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="tag-variables" file="scss/_variables.scss" >}}
