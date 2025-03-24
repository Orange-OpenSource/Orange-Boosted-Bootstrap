---
layout: docs
title: Docs reference
description: Examples of OUDS Web's documentation-specific components and styles.
aliases: "/docsref/"
toc: true
robots: noindex,follow
sitemap:
  disable: true
---

<!-- OUDS mod: no buttons section because no `.btn-bd-*` defined -->

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

{{< example button_label="test doc">}}
<div class="test">This is a test.</div>
{{< /example >}}

{{< scss-docs button_label="scss-docs test" name="variable-gradient" file="scss/_variables.scss" >}}

{{< js-docs button_label="js-docs test" name="live-toast" file="site/assets/js/partials/snippets.js" >}}
