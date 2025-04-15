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

Use OUDS Web `.link` class to set up styles such as padding and content alignment to display standalone links. Standalone links should not be used inline within a sentence or a paragraph. In that case, use only a `<a>` tag as described in the [reboot page]({{< docsref "/content/reboot/#links" >}}).

By default, `.link` defines focus, hover and active styles similar to the `<a>` tag.

{{< example >}}
<a class="link" href="#">This is an example of link</a>
{{< /example >}}

`:visited` standalone links don't have any specific styling.

## Variants on colored background

OUDS Web offers a few variations to use on [colored backgrounds]({{< docsref "/utilities/background#colored-background" >}}). Their accessibility (readability) is ensured by suitable semi-opaque backgrounds.

{{< callout warning >}}
**Heads up!** Background utilities used to make colored backgrounds, should always be used with the appropriate color theme (see an example below). Please refer to [colored backgrounds documentation]({{< docsref "/utilities/background/#colored-backgrounds" >}}).
{{< /callout >}}

{{< example class="p-none">}}
<div class="bg-brand-primary p-tall">
  <div data-bs-theme="light">
    <a class="link link-on-colored-bg" href="#">This is an example of link</a>
  </div>
</div>
<div class="bg-status-negative-emphasized p-tall">
  <div data-bs-theme="root-inverted">
    <a class="link link-on-colored-bg" href="#">This is an example of link</a>
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

{{< callout info >}}
The recommended way of using an icon in a link is through an [SVG sprite file]({{< docsref "/extend/icons/#svg-sprite" >}}). You need to fill it using `currentColor` to respect the link color scheme (can be set directly inside the SVG sprite).
{{< /callout >}}

The `.icon-link` class modifies the default link styles to enhance their appearance and quickly align any pairing of icon and text. Alignment is set via inline flexbox styling and a default `gap` value. We style the underline with a custom offset and color. Icons are automatically sized to `1em` to best match their associated text's `font-size`.

If really needed, you can use a font icon associated to the `.icon` class to set correct parameters for the `font-size` and `line-height`.

{{< callout >}}
When icons are purely decorative, they should be hidden from assistive technologies using `aria-hidden="true"`, as we've done in our links examples. See [icons accessibility]({{< docsref "/extend/icons/#icons-accessibility" >}}) for more info.
{{< /callout >}}

Take a regular `<a>` element, add `.icon-link`, and insert an icon on the left of your link text. The icon is automatically sized, placed, and colored.

{{< example >}}
<div>
  <a class="link icon-link" href="#">
    <svg aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
    This is an example of a link with an SVG icon
  </a>
</div>
<div>
  <a class="link icon-link" href="#">
    <span class="icon si si-settings" aria-hidden="true"></span>
    This is an example of a link with an icon font
  </a>
</div>
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

## Sizes

Links are available in two sizes. Add `.link-sm` for small size.

{{< example >}}
<div><a class="link" href="#">This is an example of a link</a></div>
<div><a class="link link-sm" href="#">This is an example of a small link</a></div>
{{< /example >}}

## Link tags

The `.link` classes are designed to be used with the `<a>` element. However, you can also use these classes on `<button>` elements.

{{< example >}}
<div><button class="link link" type="submit">Button link</button></div>
<div><button class="link link-chevron" type="reset">Button link chevron</button></div>
<div>
  <button class="link link-sm icon-link" type="button">
  <svg aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg> Small button link icon
  </button>
</div>
{{< /example >}}

## Disabled state

Make links look inactive by adding the `aria-disabled="true"` attribute to any `<a>` element. Disabled links have `pointer-events: none` applied to, preventing hover and active states from triggering.

Disabled links using `<a>` *should not* include the `href` attribute. In case you need to keep the `href`, please refer to [disabled link accessibility warning](#disabled-link-accessibility-warning).

{{< example >}}
<div><a class="link" aria-disabled="true">This is an example of a disabled link</a></div>
<div><a class="link link-chevron" aria-disabled="true">This is an example of a disabled link with chevron</a></div>
<div><a class="link icon-link" aria-disabled="true">
  <svg aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  This is an example of a link with an icon
</a>
</div>
{{< /example >}}

### Disabled link accessibility warning

To cover cases where you have to keep the `href` attribute on a disabled link, the style on `[aria-disabled="true"]` uses `pointer-events: none` to try to disable the link functionality of `<a>`s. Note that this CSS property is not yet standardized for HTML, but all modern browsers support it. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. 

If the disabled link does not convey any useful information, you can include a `tabindex="-1"` attribute in addition to `aria-disabled="true"` on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether.
However, if the disabled link conveys useful information for users, it must remain focusable and you should not add the `tabindex="-1"` attribute to keep it accessible to keyboard navigation.

{{< example >}}
<div><a href="#" class="link" tabindex="-1" aria-disabled="true">Disabled link without any useful information</a></div>
<div><a href="#" class="link" aria-disabled="true">Keyboard focusable disabled link</a></div>
{{< /example >}}
