---
layout: docs
title: Colors
description: Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.
group: utilities
toc: true
---


<!-- Boosted mod -->
## Accessibility

When using `.text-*` and `.bg-*` utilities, **contrasts are locked to ensure they're sufficient** by defining `color` and `background-color` altogether.
Please refer to [accessibility's color contrast section]({{< docsref "/getting-started/accessibility#color-contrast" >}}) to have a full preview of Boosted color palette's contrast ratios. 

<!-- End mod -->

{{< callout info >}}
#### Dealing with specificity

Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` with the class.
{{< /callout >}}

{{< callout warning >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Color

<!-- Boosted mod -->
`.text-*` utilities are meant to modify text color, but also **set a `background-color` to ensure contrasts**.

{{< example >}}
<!-- Boosted mod: no need for .bg-* utilities -->
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
{{- if (not (or (eq .name "success") (eq .name "warning") (eq .name "danger") (eq .name "info"))) -}}
<p class="text-{{ .name }}">.text-{{ .name }}</p>
{{- end -}}
{{- end -}}
{{< /colors.inline >}}
<p class="text-body">.text-body</p>
<p class="text-muted">.text-muted</p>
<p class="text-white">.text-white</p>
<!-- End mod -->
{{< /example >}}

Contextual text classes also work well on anchors with the provided hover and focus states. **Note that the `.text-white` and `.text-muted` class has no additional link styling beyond underline.**

Boosted also handle color variation on hover (lighten or darken) **depending on contrast ratio**.

{{< example >}}
<!-- Boosted mod: no need for .bg-* utilities -->
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
{{- if (not (or (eq .name "success") (eq .name "warning") (eq .name "danger") (eq .name "info"))) -}}
<p><a href="#" class="text-{{ .name }}">{{ .name | title }} link</a></p>
{{- end -}}
{{- end -}}
{{< /colors.inline >}}
<p><a href="#" class="text-muted">Muted link</a></p>
<p><a href="#" class="text-white">White link</a></p>
<!-- End mod -->
{{< /example >}}

<!-- End mod -->

## Background color

<!-- Boosted mod -->
Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken or lighten on hover, just like the text classes.

<!-- Boosted mod: inconsistent color naming -->
{{< example >}}
<!-- Boosted mod: no need for .text-* utilities -->
<div class="p-3 mb-2 bg-primary">.bg-primary</div>
<div class="p-3 mb-2 bg-secondary">.bg-secondary</div>
<div class="p-3 mb-2 bg-supporting-green">.bg-supporting-green</div>
<div class="p-3 mb-2 bg-supporting-blue">.bg-supporting-blue</div>
<div class="p-3 mb-2 bg-supporting-yellow">.bg-supporting-yellow</div>
<div class="p-3 mb-2 bg-supporting-pink">.bg-supporting-pink</div>
<div class="p-3 mb-2 bg-supporting-purple">.bg-supporting-purple</div>
<div class="p-3 mb-2 bg-light">.bg-light</div>
<div class="p-3 mb-2 bg-white">.bg-white</div>
<div class="p-3 mb-2 bg-transparent">.bg-transparent</div>
<!-- end mod -->
{{< /example >}}

{{< callout >}}
### Color naming

Since [Orange brand distinguishes functional colors from supporting colors]({{< docsref "/about/brand#color-palette" >}}) and Bootstrap doesn't, naming can be somewhat inconsistent.
Bootstrap's `background-color` utilities are supported in Boosted, but will result in our core `.bg-supporting-*` utilities—making `.bg-danger` inconsistent with `.btn-danger` color, for example.
{{< /callout >}}

<!-- Boosted mod: no gradient -->
