---
layout: docs
title: Borders
description: Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
group: utilities
toc: true
---

## Border

Use border utilities to add or remove an element's borders. Choose from all borders or one at a time.

### Additive

{{< example class="bd-example-border-utils" >}}
<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>
{{< /example >}}

### Subtractive

{{< example class="bd-example-border-utils bd-example-border-utils-0" >}}
<span class="border-0"></span>
<span class="border-top-0"></span>
<span class="border-end-0"></span>
<span class="border-bottom-0"></span>
<span class="border-start-0"></span>
{{< /example >}}

## Border color

Change the border color using utilities built on our theme colors.

{{< example class="bd-example-border-utils" >}}
{{< border.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="border border-{{ .name }}"></span>
{{- end -}}
{{< /border.inline >}}
<span class="border border-white"></span>
{{< /example >}}

## Border-width

{{< example class="bd-example-border-utils" >}}
<span class="border border-0"></span>
<span class="border border-1"></span>
<span class="border border-2"></span>
{{< /example >}}

## Border-radius

Add classes to an element to easily round its corners.

{{< example >}}
{{< placeholder width="75" height="75" class="rounded-circle" title="Example rounded image" >}}
{{< placeholder width="150" height="75" class="rounded-pill" title="Rounded pill image" >}}
{{< /example >}}

## Dividers

{{< example >}}
<div class="bg-dark p-1">
  <div class="border-top border-white my-3"></div>
  <hr>
</div>
<div class="border-top border-light my-3"></div>
<div class="border-top border-light border-1 my-3"></div>
<div class="border-top border-dark my-3"></div>
<div class="border-top border-dark border-1 my-3"></div>
<div class="border-top my-3"></div>
<hr class="text-light">
<hr class="text-muted">
<hr>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="border-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="border-radius-variables" file="scss/_variables.scss" >}}

### Mixins

{{< scss-docs name="border-radius-mixins" file="scss/mixins/_border-radius.scss" >}}

### Utilities API

Border utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-borders" file="scss/_utilities.scss" >}}

{{< scss-docs name="utils-border-radius" file="scss/_utilities.scss" >}}
