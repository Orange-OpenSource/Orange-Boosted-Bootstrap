---
layout: docs
title: Shadows
description: Add or remove shadows to elements with box-shadow utilities.
group: utilities
aliases:
  - "/docs/utilities/shadows/"
toc: true
---

{{< callout info >}}
Box-shadow styles are referred to as 'elevation' within the design system.
{{< /callout >}}

## Examples

<!-- While shadows on components are disabled by default in OUDS Web and can be enabled via `$enable-shadows`, -->
You can <!--also -->quickly add or remove a shadow with our `box-shadow` utility classes. Includes support for `.shadow-none` and new semantic helpers.

{{< example class="overflow-hidden" >}}
<div class="shadow-none p-medium mb-spacious bg-body-tertiary">No shadow</div>
<div class="shadow-raised p-medium mb-spacious bg-body-tertiary">Raised shadow</div>
<div class="shadow-drag p-medium mb-spacious bg-body-tertiary">Drag shadow</div>
<div class="shadow-overlay-default p-medium mb-spacious bg-body-tertiary">Overlay default shadow</div>
<div class="shadow-overlay-emphasized p-medium mb-spacious bg-body-tertiary">Overlay emphasized shadow</div>
<div class="shadow-sticky-default p-medium mb-spacious bg-body-tertiary">Sticky default shadow</div>
<div class="shadow-sticky-emphasized p-medium mb-spacious bg-body-tertiary">Sticky emphasized shadow</div>
<div class="shadow-sticky-navigation-scrolled p-medium mb-spacious bg-body-tertiary">Sticky navigation shadow</div>
{{< /example >}}

{{< bootstrap-compatibility >}}

Includes support for three default sizes (which have associated variables to match).

{{< example class="overflow-hidden" >}}
<div class="shadow-none p-3 mb-5 bg-body-tertiary">No shadow</div>
<div class="shadow-sm p-3 mb-5 bg-body-tertiary">Small shadow</div>
<div class="shadow p-3 mb-5 bg-body-tertiary">Regular shadow</div>
<div class="shadow-lg p-3 mb-5 bg-body-tertiary">Larger shadow</div>
{{< /example >}}

{{< /bootstrap-compatibility >}}

## CSS

### Sass tokens

#### Raw tokens

Shadow raw tokens as Sass variables. **Not to be used as-is**.

{{< scss-docs name="ouds-raw-elevation" file="scss/tokens/_raw.scss" >}}

#### Semantic tokens

Shadow semantic tokens as Sass variables.

{{< scss-docs name="ouds-semantic-elevation" file="scss/tokens/_semantic.scss" >}}

#### Composite tokens

Shadow composite tokens are defined as Sass variables.

{{< scss-docs name="ouds-composite-elevation" file="scss/tokens/_composite.scss" >}}

### Sass variables

{{< scss-docs name="box-shadow-variables" file="scss/_variables.scss" >}}

### Sass maps

{{< scss-docs name="ouds-maps-elevations" file="scss/_maps.scss" >}}

### Sass utilities API

Shadow utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-shadow-ouds" file="scss/_utilities.scss" >}}

{{< bootstrap-compatibility false >}}

{{< scss-docs name="utils-shadow" file="scss/_utilities.scss" >}}

{{< /bootstrap-compatibility >}}
