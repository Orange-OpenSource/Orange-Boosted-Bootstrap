---
layout: docs
title: Icon link
description: Quickly see the icon sizes you should use with a specific typography.
group: helpers
aliases:
  - "/docs/helpers/icon-link/"
toc: true
---

## Core concept

Free to use how you want with img, svg or icon font
Inside or outside of the text element

## Displays

You should not use any icon with our `.display-*` font sizes, because we prefer to keep the place for the text.

## Headings

{{< example >}}
<h1> <!-- h1 uses heading-xlarge font reference so all related classes as `.h1`, `.fs-hxl`, etc... -->
  <svg class="hxl-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H1 with tall icon
</h1>
<h1> <!-- h1 uses heading-xlarge font reference so all related classes as `.h1`, `.fs-hxl`, etc... -->
  <svg class="hxl-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H1 with medium icon
</h1>
<h1> <!-- h1 uses heading-xlarge font reference so all related classes as `.h1`, `.fs-hxl`, etc... -->
  <svg class="hxl-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H1 with short icon
</h1>

<hr>

<h2> <!-- h2 uses heading-large font reference so all related classes as `.h2`, `.fs-hl`, etc... -->
  <svg class="hl-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H2 with tall icon
</h2>
<h2> <!-- h2 uses heading-large font reference so all related classes as `.h2`, `.fs-hl`, etc... -->
  <svg class="hl-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H2 with medium icon
</h2>
<h2> <!-- h2 uses heading-large font reference so all related classes as `.h2`, `.fs-hl`, etc... -->
  <svg class="hl-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H2 with short icon
</h2>

<hr>

<h3> <!-- h3 uses heading-medium font reference so all related classes as `.h3`, `.fs-hm`, etc... -->
  <svg class="hm-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H3 with tall icon
</h3>
<h3> <!-- h3 uses heading-medium font reference so all related classes as `.h3`, `.fs-hm`, etc... -->
  <svg class="hm-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H3 with medium icon
</h3>
<h3> <!-- h3 uses heading-medium font reference so all related classes as `.h3`, `.fs-hm`, etc... -->
  <svg class="hm-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H3 with short icon
</h3>

<hr>

<h4> <!-- h4 uses heading-small font reference so all related classes as `.h4`, `.fs-hs`, etc... -->
  <svg class="hs-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H4 with tall icon
</h4>
<h4> <!-- h4 uses heading-small font reference so all related classes as `.h4`, `.fs-hs`, etc... -->
  <svg class="hs-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H4 with medium icon
</h4>
<h4> <!-- h4 uses heading-small font reference so all related classes as `.h4`, `.fs-hs`, etc... -->
  <svg class="hs-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H4 with short icon
</h4>

<hr>

<h5> <!-- h5 uses body-large font reference so all related classes as `.h5`, `.fs-bl`, etc... -->
  <svg class="bl-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H5 with tall icon
</h5>
<h5> <!-- h5 uses body-large font reference so all related classes as `.h5`, `.fs-bl`, etc... -->
  <svg class="bl-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H5 with medium icon
</h5>
<h5> <!-- h5 uses body-large font reference so all related classes as `.h5`, `.fs-bl`, etc... -->
  <svg class="bl-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H5 with short icon
</h5>

<hr>

<h6> <!-- h6 uses body-medium font reference so all related classes as `.h6`, `.fs-bm`, etc... -->
  <svg class="bm-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H6 with tall icon
</h6>
<h6> <!-- h6 uses body-medium font reference so all related classes as `.h6`, `.fs-bm`, etc... -->
  <svg class="bm-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H6 with medium icon
</h6>
<h6> <!-- h6 uses body-medium font reference so all related classes as `.h6`, `.fs-bm`, etc... -->
  <svg class="bm-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  H6 with short icon
</h6>
{{< /example >}}

## Regular texts

{{< example >}}
<p class="lead"> <!-- .lead uses body-large font reference so all related classes as `.lead`, `.fs-bl`, etc... -->
  <svg class="bl-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Lead paragraph with tall icon
</p>
<p class="lead"> <!-- .lead uses body-large font reference so all related classes as `.lead`, `.fs-bl`, etc... -->
  <svg class="bl-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Lead paragraph with medium icon
</p>
<p class="lead"> <!-- .lead uses body-large font reference so all related classes as `.lead`, `.fs-bl`, etc... -->
  <svg class="bl-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Lead paragraph with short icon
</p>

<hr>

<p> <!-- normal paragraph uses body-medium font reference so all related classes as `.fs-bm`, etc... -->
  <svg class="bm-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Lead paragraph with tall icon
</p>
<p> <!-- normal paragraph uses body-medium font reference so all related classes as `.fs-bm`, etc... -->
  <svg class="bm-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Lead paragraph with medium icon
</p>
<p> <!-- normal paragraph uses body-medium font reference so all related classes as `.fs-bm`, etc... -->
  <svg class="bm-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Lead paragraph with short icon
</p>

<hr>

<p class="small"> <!-- .small uses body-small font reference so all related classes as `.small`, `.fs-bs`, etc... -->
  <svg class="bs-tall-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Small paragraph with tall icon
</p>
<p class="small"> <!-- .small uses body-small font reference so all related classes as `.small`, `.fs-bs`, etc... -->
  <svg class="bs-medium-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Small paragraph with medium icon
</p>
<p class="small"> <!-- .small uses body-small font reference so all related classes as `.small`, `.fs-bs`, etc... -->
  <svg class="bs-short-icon me-short text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  Small paragraph with short icon
</p>
{{< /example >}}

## Decorative

{{< example >}}
<svg class="decorative-shortest-icon text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
</svg>
<svg class="decorative-shorter-icon text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
</svg>
<svg class="decorative-short-icon text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
</svg>
<svg class="decorative-medium-icon text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
</svg>
<svg class="decorative-tall-icon text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
</svg>
<svg class="decorative-taller-icon text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
</svg>
<svg class="decorative-tallest-icon text-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
</svg>
{{< /example >}}
