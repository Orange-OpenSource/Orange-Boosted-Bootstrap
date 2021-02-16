---
layout: guidelines
title: Colors
description: Orange is a black, white and orange brand. In digital, orange is used as a highlight or focus color. Core colors should always dominate.
group: guidelines
subgroup: Core elements
toc: true
---

Color palette is used throughout Boosted in multiple ways, either in components or as [utilities for both `background-color` and `color`]({{< docsref "/utilities/colors" >}}).

## Core colors

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Core colors" }}
<div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 my-3">
  {{- range $color := .colors }}
    <figure class="col" aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" width="100" height="100"/>
      </svg>
      <figcaption class="py-1">
        <strong>{{ $color.name }}</strong>
        <br/>
        <code>{{ $color.hex }}</code>
        <hr class="my-2 bg-transparent border-top {{ if eq $color.class "secondary" "primary" }}border-{{ $color.class }}"{{ else }}" style="border-color:{{ $color.hex }} !important"{{ end }}/>
        <var>{{- $color.variable -}}</var>
      </figcaption>
    </figure>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

## Supporting colors

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Supporting colors" }}
<div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 my-3">
  {{- range $color := .colors }}
    <figure aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" width="100" height="100"/>
      </svg>
      <figcaption class="py-1">
        <strong>{{ $color.name }}</strong>
        <br/>
        <code>{{ $color.hex }}</code>
        <hr class="my-2 bg-transparent border-top" style="border-color:{{ $color.hex }} !important"/>
        <var>{{- $color.variable -}}</var>
      </figcaption>
    </figure>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

## Functional colors

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Functional colors" }}
<div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 my-3">
  {{- range $color := .colors }}
    <figure aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" width="100" height="100"/>
      </svg>
      <figcaption class="py-1">
        <strong>{{ $color.name }}</strong>
        <br/>
        <code>{{ $color.hex }}</code>
        <hr class="my-2 bg-transparent border-top" style="border-color:{{ $color.hex }} !important"/>
        <var>{{- $color.variable -}}</var>
      </figcaption>
    </figure>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

## Grays

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Grays" }}
<div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 my-3">
  {{- range $color := .colors }}
    <figure aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" width="100" height="100"/>
      </svg>
      <figcaption class="py-1">
        <strong>{{ $color.name }}</strong>
        <br/>
        <code>{{ $color.hex }}</code>
        <hr class="my-2 bg-transparent border-top" style="border-color:{{ $color.hex }} !important"/>
        <var>{{- $color.variable -}}</var>
      </figcaption>
    </figure>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

## OBS Gray

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "OBS Gray" }}
<div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 my-3">
  {{- range $color := .colors }}
    <figure aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" width="100" height="100"/>
      </svg>
      <figcaption class="py-1">
        <strong>{{ $color.name }}</strong>
        <br/>
        <code>{{ $color.hex }}</code>
        <hr class="my-2 bg-transparent border-top" style="border-color:{{ $color.hex }} !important"/>
        <var>{{- $color.variable -}}</var>
      </figcaption>
    </figure>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

## Usage

<div class="row row-cols-1 row-cols-lg-2">
    <p class="col-lg-12">
        Boosted sets an additional layer to use Orange Brand's color tokens names—defined first and mapped to Bootstrap core variables.
        Boosted core uses Bootstrap's naming for maintenance ease, but <strong>you're encouraged to use Orange color tokens when it comes to custom code</strong>.
    </p>
    <div class="col">
        <h4>Orange color tokens</h4>
        {{< scss-docs name="brand-colors" file="scss/_variables.scss" >}}
    </div>
    <div class="col">
        <h4>Bootstrap core variables</h4>
        {{< scss-docs name="color-variables" file="scss/_variables.scss" >}}
    </div>
</div>

