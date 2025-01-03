---
layout: docs
title: Colored links
description: Colored links with hover states
group: helpers
aliases:
  - "/docs/helpers/colored-links/"
toc: true
---

## Link colors

You can use the `.link-*` classes to colorize links. Unlike the [`.text-*` classes]({{< docsref "/utilities/colors" >}}), these classes have a `:hover` and `:focus` state. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.

{{< example >}}
<p class="p-short"><a href="#" class="link-brand-primary">Brand primary link</a></p>
<p class="p-short"><a href="#" class="link-default">Default link</a></p>
<p class="p-short"><a href="#" class="link-disabled">Disabled link</a></p>
<p class="p-short"><a href="#" class="link-muted">Muted link</a></p>
<p class="p-short"><a href="#" class="link-status-info">Status info link</a></p>
<p class="p-short"><a href="#" class="link-status-negative">Status negative link</a></p>
<p class="p-short"><a href="#" class="link-status-positive">Status positive link</a></p>
<p class="p-short"><a href="#" class="link-status-warning">Status warning link</a></p>
<p class="p-short"><a href="#" class="link-always-black">Always black link</a></p>
<p class="p-short"><a href="#" class="link-always-white">Always white link</a></p>
<p class="bg-brand-primary p-short"><a href="#" class="link-on-brand-primary">On brand primary link</a></p>
<p class="bg-status-info-emphasized p-short"><a href="#" class="link-on-status-emphasized">On status emphasized link</a></p>
<p class="bg-status-neutral-emphasized p-short"><a href="#" class="link-on-status-emphasized-alt">On status emphasized alternated link</a></p>
<p class="bg-status-info-muted p-short"><a href="#" class="link-on-status-muted">On status muted link</a></p>
<p class="bg-always-black p-short"><a href="#" class="link-always-on-black">Always on black link</a></p>
<p class="bg-always-white p-short"><a href="#" class="link-always-on-white">Always on white link</a></p>
<p class="p-short"><a href="#" class="link-reset">Reset link</a></p>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

{{< bootstrap-compatibility >}}
{{< callout info >}}
**Heads up!** `.link-body-emphasis` is currently the only colored link that adapts to color modes. It's treated as a special case until v6 arrives and we can more thoroughly rebuild our theme colors for color modes. Until then, it's a unique, high-contrast link color with custom `:hover` and `:focus` styles. However, it still responds to the new link utilities.
{{< /callout >}}

{{< example >}}
{{< colored-links.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<p><a href="#" class="link-{{ .name }}">{{ .name | title }} link</a></p>
{{- end -}}
{{< /colored-links.inline >}}
<p><a href="#" class="link-body-emphasis">Emphasis link</a></p>
{{< /example >}}
{{< /bootstrap-compatibility >}}

<!-- ## Link utilities -->
