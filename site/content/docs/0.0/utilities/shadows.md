---
layout: docs
title: Shadows
description: Add or remove shadows to elements with box-shadow utilities.
group: utilities
aliases:
  - "/docs/utilities/shadows/"
toc: true
---

<!--{{< markdown >}}
{{< flex.inline >}}
{{- range $index := (seq 1 6) -}}
<div class="row mb-5">
  {{- range (seq 1 6) -}}
    <div class="col-2">
      <div class="d-flex align-items-center justify-content-center ratio ratio-1x1 rounded-circle bg-body shadow-{{ $index }}-{{ . }}00">{{ $index }}-{{ . }}00</div>
    </div>
  {{- end -}}
</div>
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}-->

## Examples

While shadows on components are disabled by default in OUDS Web and can be enabled via `$enable-shadows`, you can also quickly add or remove a shadow with our `box-shadow` utility classes. Includes support for `.shadow-none` and three default sizes (which have associated variables to match).

{{< callout danger >}}
The `.shadow-raised` and `.shadow-drag` utilities must not be used in any other context than drag and drop.
{{< /callout >}}

{{< example class="overflow-hidden" >}}
<div class="shadow-none p-3 mb-3 bg-body-tertiary rounded">No shadow</div>
<div class="shadow-raised p-3 mb-3 bg-body-tertiary rounded">Raised shadow</div>
<div class="shadow-drag p-3 mb-3 bg-body-tertiary rounded">Drag shadow</div>
{{< /example >}}

{{< bootstrap-compatibility >}}
{{< example class="overflow-hidden" >}}
<div class="shadow-none p-3 mb-3 bg-body-tertiary rounded">No shadow</div>
<div class="shadow-sm p-3 mb-3 bg-body-tertiary rounded">Small shadow</div>
<div class="shadow p-3 mb-3 bg-body-tertiary rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-3 bg-body-tertiary rounded">Larger shadow</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## CSS

### Sass tokens

#### Raw tokens

Shadow tokens<!-- generated via StyleDictionary--> as Sass variables. **Not to be used as-is**.

{{< scss-docs name="ouds-raw-shadow" file="scss/tokens/_raw.scss" >}}

#### Semantic tokens

Shadow semantic tokens as variables and Sass map. Shadow utilities are declared via a Sass map and then generated with our utilities API.

{{< scss-docs name="ouds-sem-shadow" file="scss/tokens/_semantic.scss" >}}

### Sass variables

{{< scss-docs name="box-shadow-variables" file="scss/_variables.scss" >}}

### Sass utilities API

Shadow utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-shadow-ouds" file="scss/_utilities.scss" >}}

{{< bootstrap-compatibility false >}}

{{< scss-docs name="utils-shadow" file="scss/_utilities.scss" >}}

{{< /bootstrap-compatibility >}}
