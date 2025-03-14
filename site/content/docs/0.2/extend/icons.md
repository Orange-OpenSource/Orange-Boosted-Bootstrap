---
layout: docs
title: Icons
description: Guidance and suggestions for using Solaris icons library with OUDS Web.
group: extend
aliases:
  - "/docs/extend/icons/"
toc: true
---

While OUDS Web doesn't include an icon set by default, Orange does have its own comprehensive icon library called Solaris. While most icon sets include multiple file formats, we prefer SVG implementations for their improved accessibility and vector support.

[Solaris icons library]({{< param icons >}}) is a growing library of icons that are designed by [Orange Design System design team](https://system.design.orange.com/). It features an icon search tool based on categories and keywords, and allows icons to be downloaded in various formats for use in design and development. Please refer to the Solaris icons library [usage documentation]({{< param icons_usage >}}) for full design guidelines and to the Solaris icons library [develop documentation]({{< param icons_develop >}}) for full development guidelines.

They are not open-source though and should only be used for Orange projects. Please refer to the [icons license file]({{< param icons_license >}}) for legal information.

## Icons rendering

Icons are designed within a square layout to preserve consistency. Within this square, there exists a designated safety zone to guarantee that icons can be used in various sizes and contexts while maintaining alignment as intended by the designers. The dimensions of the icons encompass this safety zone, ensuring adaptability and consistency across diverse applications.

<svg width="8em" height="8em" class="bg-body-secondary" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#info"/>
</svg>
<svg width="8em" height="8em" class="bg-body-secondary" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#download"/>
</svg>
<svg width="8em" height="8em" class="bg-body-secondary" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#tick"/>
</svg>

## Use Solaris icons

There are many ways to use Solaris icons in a web page:
- Bundled, if you have several icons in your project:
  - [SVG sprite]({{< docsref "extend/icons#svg-sprite" >}}) (preferred choice for flexibility, performance and accessibility)
  - [Web font]({{< docsref "extend/icons#web-font" >}})
- Individually, if you have only few icons to render:
  - [Inline SVG]({{< docsref "extend/icons#inline-svg" >}})
  - [SVG external image]({{< docsref "extend/icons#svg-external-image" >}})
  - [CSS background SVG]({{< docsref "extend/icons#css-background-svg" >}})

See Solaris icons library [develop documentation]({{< param icons_develop >}}) for complete information about the different formats and their pros and cons.

<!-- todo All icons can be retrieved easily in any of these formats in the Solaris icons finder, except for the specific case of [warning icon]({{< docsref "extend/icons#warning-icon" >}}) which can be copied below. -->

### SVG sprite

This technique is the preferred choice for flexibility, performance and accessibility.

Using the [Solaris icons finder]({{< param icons >}}), you can generate an SVG sprite—a single SVG file containing all your icons—and insert an icon through the `<use>` element. This is similar to an `<img>` element, but with the power of `currentColor` for easy theming: see in this example how some icons inherit their color from the parent's light or dark theme, whereas some others get their color from [text Orange's colors utilities]({{< docsref "/utilities/colors#colors" >}}) or local style.

{{< example >}}
<p class="p-2 bg-primary" data-bs-theme="light">
  <svg width="2em" height="2em" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#settings"/>
  </svg>
  <svg width="2em" height="2em" class="text-brand-primary" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#settings"/>
  </svg>
</p>
<p class="p-2 bg-emphasized" data-bs-theme="dark">
  <svg width="2em" height="2em" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#settings"/>
  </svg>
  <svg width="2em" height="2em" class="text-brand-primary" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#settings"/>
  </svg>
</p>
{{< /example >}}

To speed up loading, the sprite file can be preloaded in the `<head>` of the page:
```html
<link rel="preload" href="/path/to/your/sprite.svg" as="image" type="image/svg+xml">
```

### Web font
Web font is not the preferred solution. Since it's not used in OUDS Web, it won't be documented here. However, for websites needing more than 20 icons, you may consider using a Web font instead of an SVG sprite.

Using the [Solaris icons finder]({{< param icons >}}), you can generate a Web font containing all your icons and use it like a classic font.
Web font icons can be styled through CSS properties like `font-size` and `color`.

{{< callout warning >}}
Note that with this technique, you cannot have multicolor icons, so you cannot render the [warning icon]({{< docsref "extend/icons#warning-icon" >}}).
{{< /callout >}}

### Inline SVG
This technique should only be used if you have few icons to render, and if this icon is used only once in your website.

You can embed your icons directly within the HTML of your page (as opposed to an external image file). This way to use SVGs can benefit of the power of `currentColor` for easy theming.

{{< example class="mt-0" >}}
<svg fill="currentColor" width="2em" height="2em" viewBox="0 0 1000 1000" aria-hidden="true">
<path d="M656.7 422.409a229.96 229.96 0 0 1-315.39.008A224.95 224.95 0 0 0 224.064 615H224v210a100 100 0 0 0 100 100h450V620a224.94 224.94 0 0 0-117.3-197.591M679 255A180 180 0 1 1 499 75a180 180 0 0 1 180 180" style="fill-rule:evenodd"/>
</svg>
{{< /example >}}

The `fill="currentColor"` attribute is required if you want to change the icons color on the fly, and that the foreground color changes in dark/light mode.

### SVG external image

You can use it when:
- you only have few icons to render
- you don't need to change the icons colors. For that reason, **we do not recommend to use that technique**, and it won't be documented here.

### CSS background SVG

CSS background icons should be used when you can't or don't want to refer to an external image, or if you want to include the icon in a CSS `::before` or `::after` pseudo-element.

You can use the SVG code within your CSS (be sure to escape any characters with [our internal `escape-svg()` function]({{< docsref "/customize/sass" >}}#escape-svg)).

When no dimensions are specified via `width` and `height` on the `<svg>`, the icon will fill the available space.
Note that the `xmlns` attribute is required.

{{< example class="mt-0" >}}
<span class="icon-home"></span>
{{< /example >}}

Using:

{{< scss-docs name="icon-home" file="site/assets/scss/_component-examples.scss" >}}

## Modify icons color

To color icons, you can:
- use [text color utilities classes]({{< docsref "utilities/colors" >}}) like `.text-status-positive` that change current color value
- specify a color using CSS variables like `style="color: var(--bs-success)"`

For SVGs, we recommend setting `fill="currentColor"` on the `<svg>` tag: it will make the icon inherit color from itself or its parent containers.


### Functional icons

The following color utilities are meant to be used only with functional icons and not with texts.

{{< example >}}
<div class="d-flex justify-content-center gap-md-tall">
  <div class="p-medium bg-primary border border-default" data-bs-theme="light">
    <p>
      <svg width="2em" height="2em" class="text-status-info" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#info"/>
      </svg> Info
    </p>
    <p>
      <svg width="2em" height="2em" class="text-status-positive" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#tick-confirmation"/>
      </svg> Success
    </p>
    <p>
      <svg width="2em" height="2em" class="text-status-warning" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#important"/>
      </svg> Warning
    </p>
    <p>
      <svg width="2em" height="2em" class="text-status-negative" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#error-severe"/>
      </svg> Danger
    </p>
  </div>
  <div class="p-medium bg-emphasized border border-default" data-bs-theme="dark">
    <p>
      <svg width="2em" height="2em" class="text-status-info" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#info"/>
      </svg> Info
    </p>
    <p>
      <svg width="2em" height="2em" class="text-status-positive" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#tick-confirmation"/>
      </svg> Success
    </p>
    <p>
      <svg width="2em" height="2em" class="text-status-warning" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#important"/>
      </svg> Warning
    </p>
    <p>
      <svg width="2em" height="2em" class="text-status-negative" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#error-severe"/>
      </svg> Danger
    </p>
  </div>
</div>
{{< /example >}}

Here are [the normal contexts of use of these text color utilities](https://unified-design-system.orange.com/472794e18/p/217ac6-colour/t/9b95834c2e).

{{< bs-table >}}
| Color utility | Context of use |
| --- | --- |
| `.text-status-info` | Use to communicate a feedback. It's more important than a neutral color. |
| `.text-status-positive` | Use to communicate a positive action, a confirmation or a positive feedback. |
| `.text-status-warning` | Use to display an information that requires more attention, or an action from the user. |
| `.text-status-negative` | Use to communicate something negative. It can be a destructive action, an error state, or a negative feedback. |
{{< /bs-table >}}

### Other icons
<!-- todo -->

## Icons accessibility

{{< callout info >}}
For more details, **Orange Accessibility Guidelines** provides [a deep-dive article regarding SVG accessibility](https://a11y-guidelines.orange.com/en/articles/accessible-svg/).
{{< /callout >}}

#### Decorative icons
Purely **decorative icons** (like repeating information of an adjacent text) must be hidden to assistive technologies:
- for `<svg>` or `<span>` tags, use the attribute `aria-hidden="true"`
- for `<img>`, use an empty `alt` attribute
- CSS background images are intended to be decorative

#### Informative/meaningful icons
If the icon is **meaningful**, e.g. only content of a button, you have to provide an appropriate alternative text: for example, the description of the icon or the description of the action triggered. The best way to do this is to keep the icon hidden to assistive technologies (see above) and add a visually hidden label (which will be perceived by assistive technologies) by using the `.visually-hidden` class. For external images, you can also fill the `alt` attribute directly.

<!-- todo add tooltip when available -->
{{< example class="mt-0" >}}
<button type="button" class="btn btn-icon btn-default">
  <svg width="1rem" height="1rem" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#trash"/>
  </svg>
  <span class="visually-hidden">Delete</span>
</button>
<button type="button" class="btn btn-icon btn-strong">
  <span class="icon si si-settings" aria-hidden="true"></span>
  <span class="visually-hidden">Open settings</span>
</button>
<button type="button" class="btn btn-icon btn-minimal">
  <img src="/docs/{{< param docs_version >}}/assets/img/heart-recommend.png" alt="" width="32" height="32">
  <span class="visually-hidden">Add to favorites</span>
</button>
<button type="button" class="btn btn-icon btn-minimal">
  <img src="/docs/{{< param docs_version >}}/assets/img/heart-recommend.png" alt="Add to favorites" width="32" height="32">
</button>
{{< /example >}}

<!-- TODO
## Warning icon

For accessibility reasons, the warning icon, which should always be used with functional yellow, has a black exclamation point inside, regardless of the background color. It can be colored with `.text-status-warning` class.

### SVG sprite
SVG symbol to insert into your SVG sprite:
```xml
<symbol fill="currentColor" viewBox="0 0 1000 1000" id="warning-important-accessible">
  <path d="M500.497 125a93.94 93.94 0 0 1 81.09 46.517l328.62 562.5-.008.005a93.709 93.709 0 0 1-81.09 140.983H171.887a93.71 93.71 0 0 1-81.09-140.983l.765-1.326.036-.062 327.8-561.117C436.254 142.707 467.122 125 500.497 125Z"/>
  <path fill="#000" d="M501.507 680.005c-26.233-.002-47.5 21.262-47.502 47.495s21.26 47.5 47.493 47.505a47.5 47.5 0 0 0 47.507-47.5c0-26.233-21.265-47.5-47.498-47.5m-.01-380.007c-26.238 0-47.507 21.27-47.507 47.507 0 .967.037 1.918.094 2.867l15.74 258.716.004.52c.288 17.092 14.355 23.53 31.667 23.53 17.486 0 31.662-6.568 31.67-24.05l15.7-258.121.057-.86a44 44 0 0 0 .082-2.602c0-26.238-21.27-47.507-47.507-47.507"/>
</symbol>
```

Then use it like this:

{{< example class="mt-0" >}}
<svg width="1.875em" height="1.875em" class="text-status-warning" aria-hidden="true">
<use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#warning-important-accessible"/>
</svg>
{{< /example >}}

### Web font
Please note that this icon cannot be used in a Web font, due to its two colors.

### Inline SVG
SVG code for an inline SVG:

{{< example class="mt-0" >}}
<svg fill="currentColor" width="1.875em" height="1.875em" class="solaris-icon text-status-warning" viewBox="0 0 1000 1000" aria-hidden="true">
<path d="M500.497 125a93.94 93.94 0 0 1 81.09 46.517l328.62 562.5-.008.005a93.709 93.709 0 0 1-81.09 140.983H171.887a93.71 93.71 0 0 1-81.09-140.983l.765-1.326.036-.062 327.8-561.117C436.254 142.707 467.122 125 500.497 125Z"/>
<path fill="#000" d="M501.507 680.005c-26.233-.002-47.5 21.262-47.502 47.495s21.26 47.5 47.493 47.505a47.5 47.5 0 0 0 47.507-47.5c0-26.233-21.265-47.5-47.498-47.5m-.01-380.007c-26.238 0-47.507 21.27-47.507 47.507 0 .967.037 1.918.094 2.867l15.74 258.716.004.52c.288 17.092 14.355 23.53 31.667 23.53 17.486 0 31.662-6.568 31.67-24.05l15.7-258.121.057-.86a44 44 0 0 0 .082-2.602c0-26.238-21.27-47.507-47.507-47.507"/>
</svg>
{{< /example >}}

### SVG external image
Code to copy in an external SVG file:
```xml
<svg xmlns='http://www.w3.org/2000/svg' fill="currentColor" viewBox="0 0 1000 1000">
  <path fill="#fc0" d="M500.497 125a93.94 93.94 0 0 1 81.09 46.517l328.62 562.5-.008.005a93.709 93.709 0 0 1-81.09 140.983H171.887a93.71 93.71 0 0 1-81.09-140.983l.765-1.326.036-.062 327.8-561.117C436.254 142.707 467.122 125 500.497 125Z"/>
  <path fill="#000" d="M501.507 680.005c-26.233-.002-47.5 21.262-47.502 47.495s21.26 47.5 47.493 47.505a47.5 47.5 0 0 0 47.507-47.5c0-26.233-21.265-47.5-47.498-47.5m-.01-380.007c-26.238 0-47.507 21.27-47.507 47.507 0 .967.037 1.918.094 2.867l15.74 258.716.004.52c.288 17.092 14.355 23.53 31.667 23.53 17.486 0 31.662-6.568 31.67-24.05l15.7-258.121.057-.86a44 44 0 0 0 .082-2.602c0-26.238-21.27-47.507-47.507-47.507"/>
</svg>
```

Then use it like this:

{{< example class="mt-0" >}}
<img src="/docs/{{< param docs_version >}}/assets/img/boosted-warning.svg" alt="" width="32" height="32">
{{< /example >}}

### CSS background SVG
CSS code for background SVG image:

{{< example class="mt-0" >}}
<span class="icon-warning"></span>
{{< /example >}}

Using:

{{< scss-docs name="icon-warning" file="site/assets/scss/_component-examples.scss" >}}
-->
