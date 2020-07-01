---
layout: guidelines
title: Colors
description: This design kit contains the essential UI elements for designing, prototyping and building Orange products and services on the web.
group: guidelines
subgroup: Core elements
toc: true
---

## Core colors

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Core colors" }}
<div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 align-items-center my-3">
  {{- range $color := .colors }}
    <figure class="col" aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" width="100" height="100"/>
      </svg>
      <figcaption class="py-1">
        <strong>{{ $color.name }}</strong>
        <br/>
        <code>{{ $color.hex }}</code>
      </figcaption>
    </figure>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

## Supporting colors

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Supporting colors" }}
<div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 align-items-center my-3">
  {{- range $color := .colors }}
    <figure aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" width="100" height="100"/>
      </svg>
      <figcaption class="py-1">
        <strong>{{ $color.name }}</strong>
        <br/>
        <code>{{ $color.hex }}</code>
      </figcaption>
    </figure>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

## OBS Grey

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "OBS Grey" }}
<div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 align-items-center my-3">
  {{- range $color := .colors }}
    <figure aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" width="100" height="100"/>
      </svg>
      <figcaption class="py-1">
        <strong>{{ $color.name }}</strong>
        <br/>
        <code>{{ $color.hex }}</code>
      </figcaption>
    </figure>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

## Functionnal colors

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Functionnal colors" }}
<div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 align-items-center my-3">
  {{- range $color := .colors }}
    <figure aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" width="100" height="100"/>
      </svg>
      <figcaption class="py-1">
        <strong>{{ $color.name }}</strong>
        <br/>
        <code>{{ $color.hex }}</code>
      </figcaption>
    </figure>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

## Greys

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Greys" }}
<div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 align-items-center my-3">
  {{- range $color := .colors }}
    <figure aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" width="100" height="100"/>
      </svg>
      <figcaption class="py-1">
        <strong>{{ $color.name }}</strong>
        <br/>
        <code>{{ $color.hex }}</code>
      </figcaption>
    </figure>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}
