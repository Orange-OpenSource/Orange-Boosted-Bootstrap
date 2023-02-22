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

<!--Boosted mod: feature limited to primary and light, we don't loop over "theme-colors"-->
{{< example >}}
<p><a href="#" class="link-primary">Primary link</a></p>
<p><a href="#" class="link-light">Light link</a></p>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Link utilities

{{< added-in "5.3.0" >}}

Colored links can also be modified by [our link utilities]({{< docsref "/utilities/link/" >}}).

{{< example >}}
<p><a href="#" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Primary link</a></p>
<p><a href="#" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Light link</a></p>
{{< /example >}}
