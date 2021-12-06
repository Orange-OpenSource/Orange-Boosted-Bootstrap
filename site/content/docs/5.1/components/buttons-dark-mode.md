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
<div data-bs-theme="theme-default">
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
<div data-bs-theme="theme-dark">
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
<div data-bs-theme="theme-yellow">
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
<div data-bs-theme="theme-red">
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
<div data-bs-theme="theme-blue">
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
<div data-bs-theme="theme-pink">
  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}