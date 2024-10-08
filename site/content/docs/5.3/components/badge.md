---
layout: docs
title: Badges
description: Documentation and examples for badges, our small count and labeling component.
group: components
aliases:
  - "/docs/components/badge/"
toc: true
---

## Examples

Badges scale to match the size of the immediate parent element by using relative font sizing and `em` units. As of v5, badges no longer have focus or hover styles for links.

### Headings

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These variants should not be used because they do not respect the Orange Design System specifications.
{{< /design-callout-alert >}}

{{< example >}}
<h1>Example heading <span class="badge text-bg-secondary">New</span></h1>
<h2>Example heading <span class="badge text-bg-secondary">New</span></h2>
<h3>Example heading <span class="badge text-bg-secondary">New</span></h3>
<h4>Example heading <span class="badge text-bg-secondary">New</span></h4>
<h5>Example heading <span class="badge text-bg-secondary">New</span></h5>
<h6>Example heading <span class="badge text-bg-secondary">New</span></h6>
{{< /example >}}
</details>

### Buttons

Badges can be used as part of links or buttons to provide a counter.

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
This variant should not be used because it does not respect the Orange Design System specifications.
{{< /design-callout-alert >}}

{{< example >}}
<button type="button" class="btn btn-primary">
  Notifications <span class="badge text-bg-dark">4</span>
</button>
{{< /example >}}

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.

Unless the context is clear (as with the "Notifications" example, where it is understood that the "4" is the number of notifications), consider including additional context with a visually hidden piece of additional text.
</details>

### Positioned

<!-- Boosted mod: replace the button with a link with an icon because notifiers are only authorized with icons -->

Use utilities to modify a `.badge` and position it in the corner of a link with an icon.

{{< design-callout-alert >}}
This variant should be used **only** inside a header component.

Please refer to our [Boosted Navbars examples]({{< docsref "/examples/navbars" >}}). You can also refer to the [Global headers guidelines](https://system.design.orange.com/0c1af118d/p/37609b-global-headers/b/366c91) on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
<a href="#" class="position-relative">
  <svg width="2rem" height="2rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  <span class="visually-hidden">Shopping basket</span>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-info">
    99+
    <span class="visually-hidden">shopping basket items</span>
  </span>
</a>
{{< /example >}}

<!-- The example without a count is dropped because not existing in the UI kit -->

<!-- End mod -->

## Background colors

{{< added-in "5.2.0" >}}

Set a `background-color` with contrasting foreground `color` with [our `.text-bg-{color}` helpers]({{< docsref "helpers/color-background" >}}). Previously it was required to manually pair your choice of [`.text-{color}`]({{< docsref "/utilities/colors" >}}) utilities and [`.bg-{color}`]({{< docsref "/utilities/background" >}}) utilities for styling, which you still may use if you prefer.

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These variants should not be used because they do not respect in the Orange Design System specifications.
{{< /design-callout-alert >}}

{{< example >}}
{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge text-bg-{{ .name }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}
</details>

## Pill badges

Use the `.rounded-pill` utility class to make badges more rounded with a larger `border-radius`.

Consider using our [Tags component]({{< docsref "/components/tags" >}}) instead.

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These variants should not be used because they do not respect in the Orange Design System specifications.

Instead, consider using our [Tags component]({{< docsref "/components/tags" >}}). You can also refer to the [Tags guidelines](https://system.design.orange.com/0c1af118d/p/975c09-tags/b/24dde8) on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge rounded-pill text-bg-{{ .name }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
{{< /example >}}
</details>

## CSS

### Variables

{{< added-in "5.2.0" >}}

As part of Boosted's evolving CSS variables approach, badges now use local CSS variables on `.badge` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="badge-css-vars" file="scss/_badge.scss" >}}

### Sass variables

{{< scss-docs name="badge-variables" file="scss/_variables.scss" >}}
