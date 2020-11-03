---
layout: docs
title: Colors
description: Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.
group: utilities
toc: true
---

## Accessibility

When using `.text-*` and `.bg-*` utilities, **contrasts are locked to ensure they meet [WCAG 2.0 accessibility standards for color contrast](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)**, by defining `color` and `background-color` altogether. Please refer to [our theme colors]({{< docsref "/customize/color" >}}#all-colors) to have a full preview of Boosted color palette’s reached WCAG level.

{{< callout info >}}
### Dealing with specificity

Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` with the class.
{{< /callout >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Color

Colorize text with color utilities. If you want to colorize links, you can use the [`.link-*` helper classes]({{< docsref "/helpers/colored-links" >}}) which have `:hover` and `:focus` states.

<!-- Boosted mod -->
{{< example >}}
<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-light">.text-light</p>
<p class="text-body">.text-body</p>
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
{{< /example >}}
<!-- End mod -->

## Background color

Similar to the contextual text color classes, easily set the background of an element to any contextual class. Background utilities **do set `color`** to ensure contrasts.

{{< example >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="p-3 mb-2 fw-bold bg-{{ .name }}">.bg-{{ .name }}</div>
{{- end -}}
{{< /colors.inline >}}
<div class="p-3 mb-2 fw-bold bg-pink">.bg-pink</div>
<div class="p-3 mb-2 fw-bold bg-white">.bg-white or .bg-body</div>
<div class="p-3 mb-2 fw-bold bg-transparent">.bg-transparent</div>
{{< /example >}}

<!-- Boosted mod: no background gradient -->
