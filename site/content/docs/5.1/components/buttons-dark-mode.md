---
layout: docs
title: Buttons Dark Mode
description: Demo for theme colors
group: components
toc: true
---

## Basic buttons (without themes)

{{< example >}}
<div>
  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Classic theme

{{< example >}}
<div data-bs-theme="classic">
  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Dark theme

{{< example >}}
<div data-bs-theme="dark">
  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Beach theme

{{< example >}}
<div data-bs-theme="beach">
  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Choco theme

{{< example >}}
<div data-bs-theme="choco">
  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Milk theme

{{< example >}}
<div data-bs-theme="milk">
  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Bowser theme

{{< example >}}
<div data-bs-theme="bowser">
  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Yoshi theme

{{< example >}}
<div data-bs-theme="yoshi">
  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Rainbow theme

{{< example >}}
<div data-bs-theme="rainbow">
  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Lobster theme

{{< example >}}
<div data-bs-theme="lobster">
  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}
