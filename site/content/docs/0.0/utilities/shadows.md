---
layout: docs
title: Shadows
description: Add or remove shadows to elements with box-shadow utilities.
group: utilities
aliases:
  - "/docs/utilities/shadows/"
toc: true
---

## Examples

While shadows on components are disabled by default in Boosted and can be enabled via `$enable-shadows`, you can also quickly add or remove a shadow with our `box-shadow` utility classes. Includes support for `.shadow-none` and three default sizes (which have associated variables to match).

{{< example class="overflow-hidden" >}}
<div class="shadow-none p-3 mb-5 bg-body-tertiary">No shadow</div>
<div class="shadow-sm p-3 mb-5 bg-body-tertiary">Small shadow</div>
<div class="shadow p-3 mb-5 bg-body-tertiary">Regular shadow</div>
<div class="shadow-lg p-3 mb-5 bg-body-tertiary">Larger shadow</div>
{{< /example >}}

## CSS

### Sass variables

{{< scss-docs name="box-shadow-variables" file="scss/_variables.scss" >}}

### Sass utilities API

Shadow utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-shadow" file="scss/_utilities.scss" >}}
