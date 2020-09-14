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
<span class="border-right"></span>
<span class="border-bottom"></span>
<span class="border-left"></span>
{{< /example >}}

### Subtractive

{{< example class="bd-example-border-utils bd-example-border-utils-0" >}}
<span class="border-0"></span>
<span class="border-top-0"></span>
<span class="border-right-0"></span>
<span class="border-bottom-0"></span>
<span class="border-left-0"></span>
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

### Border-width

{{< example class="bd-example-border-utils" >}}
<span class="border border-1"></span>
<span class="border border-2"></span>
<span class="border border-3"></span>
<span class="border border-4"></span>
<span class="border border-5"></span>
{{< /example >}}

## Border-radius

Add classes to an element to easily round its corners.

{{< example >}}
{{< placeholder width="75" height="75" class="rounded-circle" title="Example rounded image" >}}
{{< placeholder width="150" height="75" class="rounded-pill" title="Rounded pill image" >}}
{{< /example >}}

<!-- Boosted mod -->
## Border-width

Switch to `1px` wide border by using `border-width` utility.

{{< example class="bd-example-border-utils" >}}
<span class="border border-1"></span>
{{< /example >}}
<!-- End mod -->
