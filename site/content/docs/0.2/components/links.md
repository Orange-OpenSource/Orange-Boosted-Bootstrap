---
layout: docs
title: Links
description: Use OUDS Web's custom link styles for navigational elements, enabling users to move between pages, sections, or external resources.
group: components
aliases:
  - "/docs/components/links/"
toc: true
---

{{< callout info >}}
You can find here the [OUDS Link design guidelines](https://unified-design-system.orange.com/472794e18/p/31c33b-link).
{{< /callout >}}

## Standard variant

OUDS Web has a standard `.link` class that sets up basic styles such as padding and content alignment to display standalone links. By default, `.link` controls still defines basic focus, hover and active styles similar to the `<a>` tag.

Note that standalone link should be used inline within a sentence or a paragraph. In that case, use only a `<a>` tag as described in the [reboot page]({{< docsref "/content/reboot/#links" >}}).

{{< example >}}
<div><a class="link" href="#">This is an example of link</a></div>
{{< /example >}}

The `.link` class is intended to be used in conjunction with our link variants.

## Sizes

Links are available in two sizes. Add `.link-sm` for small size.

{{< example >}}
<div><a class="link" href="#">This is an example of a link</a></div>
<div><a class="link link-sm" href="#">This is an example of a small link</a></div>
{{< /example >}}

## Visited state

Visited links don't have a specific style by default. The `:visited` status can be styled with the additional `.visited-links` utility class that can be applied to a parent element to style all the child links.

{{< example >}}
<div class="visited-links">
  <a class="link" href=".">This is an example of a visited link</a>
</div>
{{< /example >}}

## Disable state

Make links look inactive by adding the `aria-disabled="true"` attribute to any `<a>` element. Disabled links have `pointer-events: none` applied to, preventing hover and active states from triggering.

Disabled links using `<a>` *should not* include the `href` attribute. In case you need to keep the `href`, please refer to [link functionality caveat](/docs/{{< param docs_version >}}/components/buttons/#link-functionality-caveat).

{{< example >}}
<div><a class="link" aria-disabled="true">This is an example of a disabled link</a></div>
<div><a class="link link-chevron" aria-disabled="true">This is an example of a disabled link with chevron</a></div>
<div><a class="link icon-link" aria-disabled="true">
  <svg class="bi" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  This is an example of a link with an icon
</a>
</div>
{{< /example >}}


## Variants on colored background

OUDS Web offers a few variations to use on [colored backgrounds]({{< docsref "/utilities/background#colored-background" >}}). Their accessibility (readability) is ensured by suitable semi-opaque backgrounds.

{{< callout warning >}}
**Heads up!**
- Background utilities used to make colored backgrounds, should always be used with the appropriate color theme (see an example below). Please refer to [colored backgrounds documentation]({{< docsref "/utilities/background/#colored-backgrounds" >}}).
{{< /callout >}}

{{< example class="p-none">}}
<div class="bg-brand-primary p-tall">
  <div data-bs-theme="light">
    <div><a class="link link-on-colored-bg" href="#">This is an example of a base link</a></div>
    <div class="visited-links">
      <a class="link link-on-colored-bg" href=".">This is an example of a visited link</a>
    </div>
  </div>
</div>
<div class="bg-status-negative-emphasized p-tall">
  <div data-bs-theme="root-inverted">
    <div><a class="link link-on-colored-bg" href="#">This is an example of a base link</a></div>
    <div class="visited-links">
      <a class="link link-on-colored-bg" href=".">This is an example of a visited link</a>
    </div>
  </div>
</div>
{{< /example >}}


## Link chevron

Add `.link-chevron` to enhance your link with a chevron on the right side. Use the additional `.back` class to display the chevron on the left side.

{{< example >}}
<div><a class="link link-chevron" href="#">Link with chevron</a></div>
<div><a class="link link-chevron back" href="#">Link with a back chevron</a></div>
<div style="width:20rem;">
  <div><a class="link link-chevron" href="#">This is an example of a link on multiple lines with chevron</a></div>
  <div><a class="link link-chevron back" href="#">This is an example of a link on multiple lines with a back chevron</a></div>
</div>
{{< /example >}}

## Icon link

The `.icon-link`class modifies the default link styles to enhance their appearance and quickly align any pairing of icon and text. Alignment is set via inline flexbox styling and a default `gap` value. We style the underline with a custom offset and color. Icons are automatically sized to `1em` to best match their associated text's `font-size`.

You should use Solaris icons, either within a SVG sprite (`<symbol>` inside a SVG file), which is the preferred way, or an icon font. You can generate both with [Solaris icons finder](https://oran.ge/icons).

{{< callout >}}
When icons are purely decorative, they should be hidden from assistive technologies using `aria-hidden="true"`, as we've done in our examples. For icons that convey meaning, provide an appropriate text alternative by adding `role="img"` and an appropriate `aria-label="..."` to the SVGs.
{{< /callout >}}

Take a regular `<a>` element, add `.icon-link`, and insert an icon on the left of your link text. The icon is automatically sized, placed, and colored.

{{< example >}}
<a class="link icon-link" href="#">
  <svg class="bi" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  This is an example of a link with an icon
</a>
{{< /example >}}

{{< bootstrap-compatibility >}}
{{< example >}}
<a class="icon-link" href="#">
  <svg class="bi" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  This is an example of link with icon
</a>
{{< /example >}}
{{< /bootstrap-compatibility >}}

### Style on hover

{{< bootstrap-compatibility >}}
Add `.icon-link-hover` to move the icon to the right on hover.

{{< example >}}
<a class="icon-link icon-link-hover" href="#">
  Icon link
  <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
</a>
{{< /example >}}
{{< /bootstrap-compatibility >}}
