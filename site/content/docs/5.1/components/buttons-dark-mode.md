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

## Default theme

{{< example >}}
<div data-bs-theme="default">
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

## Yellow theme

{{< example >}}
<div data-bs-theme="yellow">
  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Red theme

{{< example >}}
<div data-bs-theme="red">
  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Blue theme

{{< example >}}
<div data-bs-theme="blue">
  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Pink theme

{{< example >}}
<div data-bs-theme="pink">
  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}