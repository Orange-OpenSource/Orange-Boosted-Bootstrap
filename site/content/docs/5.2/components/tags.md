---
layout: docs
title: Tags
description: Documentation and examples for tag component.
group: components
toc: true
---

## Standard

{{< example >}}
<span class="tag">Label</span>
{{< /example >}}

## With icon

{{< example >}}
<span class="tag tag-icon">

  <div class="d-flex align-items-center">
    <svg width="1rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
    </svg>
    Label
  </div>
</span>
{{< /example >}}

## With remove icon

{{< example >}}
<span class="tag tag-remove">

  <div class="d-flex align-items-center">
    Label
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible remove">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
    </svg>
  </div>
</span>
{{< /example >}}

## With icon and remove icon

{{< example >}}
<span class="tag tag-remove">

  <div class="d-flex align-items-center">
    <svg width="1rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
    </svg>
    Label
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible remove">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
    </svg>
  </div>
</span>
{{< /example >}}

## Disabled state

{{< example >}}
<span class="tag disabled">Label</span>
{{< /example >}}

## Sizes

Fancy larger buttons? Add `.tag-lg` for additional size.

{{< example >}}
<span class="tag">Label</span>
<span class="tag tag-lg">Label</span>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="tag-variables" file="scss/_variables.scss" >}}
