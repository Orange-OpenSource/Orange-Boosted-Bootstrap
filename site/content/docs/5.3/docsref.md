---
layout: docs
title: Docs reference
description: Examples of Boosted's documentation-specific components and styles.
aliases: "/docsref/"
toc: true
robots: noindex,follow
sitemap:
  disable: true
---

<!-- Boosted mod: no Buttons section because no `.btn-bd-*` defined -->

## Callouts

{{< callout >}}
  Default callout
{{< /callout >}}

{{< callout warning >}}
  Warning callout
{{< /callout >}}

{{< callout danger >}}
  Danger callout
{{< /callout >}}

## Code example

```scss
.test {
  --color: blue;
}
```

<div class="bd-example">
  The <abbr title="HyperText Markup Language">HTML</abbr> abbreviation element.
</div>

{{< example >}}
<div class="test">This is a test.</div>
{{< /example >}}

{{< scss-docs name="variable-gradient" file="scss/_variables.scss" >}}

{{< js-docs name="live-toast" file="site/assets/js/partials/snippets.js" >}}
