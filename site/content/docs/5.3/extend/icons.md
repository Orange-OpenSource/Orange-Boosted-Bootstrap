---
layout: docs
title: Icons
description: Guidance and suggestions for using Solaris icon libraries with Boosted.
group: extend
aliases:
  - "/docs/extend/icons/"
toc: true
---

While Boosted doesn't include an icon set by default, Orange does have its own comprehensive icon library called Solaris. While most icon sets include multiple file formats, we prefer SVG implementations for their improved accessibility and vector support.

## Solaris

Solaris is a growing library of SVG icons that are designed by [Orange's Global Design Language Team](https://design.orange.com/).

They are not open-source though and should only be used for Orange branded projects. Please refer to our [`NOTICE.txt` file for legal information]({{< param repo >}}/blob/v{{< param current_version >}}/NOTICE.txt).

[Learn more about Solaris]({{< param icons >}}).

### Use Solaris icons

<!-- NOTE: this is partially copied from bootstrap Icons homepage → https://icons.getbootstrap.com -->
Solaris provides both PNGs and SVGs, but we strongly recommend to use SVGs. There are quite a few ways to include SVG icons into your HTML—depending on how your project is setup.

<div class="row my-4">
  <div class="col-md-4">

#### Embedded

Embed your icons within the HTML of your page (as opposed to an external image file). We recommend you use `em` unit for dimensions to ease resizing via `font-size`.

  </div>
  <div class="col-md-8">

{{< example class="mt-0" >}}
<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 9 14" role="img" aria-label="Left arrow"><path d="M9 2L7 0 0 7l7 7 2-2-5-5 5-5z"/></svg>
{{< /example >}}
  </div>
</div>

<div class="row my-4">
  <div class="col-md-4">

#### Sprite

You may use an external SVG sprite—a single SVG file containing all your icons—and insert an icon through the `<use>` element.

SVG sprites allow you to reference an external file similar to an `<img>` element, but with the power of `currentColor` for easy theming: see in this example how icons inherit their color from the parent's `.text-primary` class, whereas the second icon get grayed out by `.text-body-secondary`.

  </div>
  <div class="col-md-8">

{{< example class="mt-0 text-primary" >}}
<svg width="2em" height="2em" fill="currentColor" aria-hidden="true" focusable="false">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
</svg>
<svg width="2em" height="2em" class="text-body-secondary" aria-hidden="true">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#info"/>
</svg>
<svg width="2em" height="2em" fill="currentColor" aria-hidden="true" focusable="false">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#warning"/>
</svg>
<svg width="2em" height="2em" fill="currentColor" aria-hidden="true" focusable="false">
  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#danger"/>
</svg>
{{< /example >}}
  </div>
</div>

<div class="row my-4">
  <div class="col-md-4">

#### External image

Copy the Solaris icons SVGs to your directory of choice and reference them like normal images with the `<img>` element.

  </div>
  <div class="col-md-8">

{{< example class="mt-0" >}}
<img src="/docs/{{< param docs_version >}}/assets/img/boosted-cross.svg" alt="" aria-hidden="true" width="32" height="32">
{{< /example >}}
  </div>
</div>

<div class="row my-4">
  <div class="col-md-4">

#### CSS

You can also use the SVG within your CSS (be sure to escape any characters with [our internal `escape-svg()` function]({{< docsref "/customize/sass" >}}#escape-svg)).

When no dimensions are specified via `width` and `height` on the `<svg>`, the icon will fill the available space.

The `viewBox` attribute is required if you wish to resize icons with `background-size`. Note that the `xmlns` attribute is required.

  </div>
  <div class="col-md-8">

```css
.icon-warning::before {
  display: inline-block;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath fill='%23fc0' d='M15 0a15 15 0 100 30 15 15 0 000-30zm.15 5.39h.01c1.12 0 2 .95 1.92 2.06l-.63 10.43c0 .7-.58.97-1.29.97-.72 0-1.28-.27-1.28-.97l-.63-10.46c-.06-1.09.8-2.01 1.9-2.03zm-.3 15.33c.11 0 .21 0 .31.02 2.19.35 2.19 3.5 0 3.84-2.77.44-3.1-3.86-.3-3.86z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 1.625rem;
}
```
  </div>
</div>


### Working with SVGs

SVGs are awesome to work with, but they do have some known quirks to work around. Given the numerous ways in which SVGs can be used, we haven’t included these attributes and workarounds in our code.

Known issues include:

* **Focus handling is broken in Internet Explorer and Edge Legacy.** When embedding your SVGs, add `focusable="false"` to the `<svg>` element. [Learn more on Stack Overflow](https://stackoverflow.com/questions/18646111/disable-onfocus-event-for-svg-element).
* **Browsers inconsistently announce SVGs as `<img>` tags with voice assistance.** Include `role="img"` when possible to avoid any issues. [See this article for details](https://simplyaccessible.com/article/7-solutions-svgs/#acc-heading-2).
* **Safari skips `aria-label` when used non-focusable SVGs.** As such, use `aria-hidden="true"` when embedding the `<svg>` file and use CSS to visually hide an equivalent label. [More details here](https://simplyaccessible.com/article/7-solutions-svgs/#acc-heading-6).
* **External SVG sprites may not function correctly in Internet Explorer.** Use the [svg4everybody](https://github.com/jonathantneal/svg4everybody) polyfill as needed.

<!-- Boosted mod: link to Orange Accessibility Guidelines -->
**Orange Accessibility Guidelines** provides [a deep-dive article regarding SVG accessibility](https://a11y-guidelines.orange.com/en/articles/accessible-svg/).

### Icon font

You can also embed Solaris icons in an icon font by using [IcoMoon App](https://icomoon.io/app/).

#### Create your own project

Go to the top left menu and select `Manage Projects`:

<img class="img-thumbnail mb-3" width="300" src="/docs/{{< param docs_version >}}/assets/img/icomoon-manage-projects.png" alt="IcoMoon - Manage Projects menu" loading="lazy">

Create a `New Project` and click on `Load`:

<img class="img-thumbnail mb-3" src="/docs/{{< param docs_version >}}/assets/img/icomoon-new-project.png" alt="IcoMoon - New Project" loading="lazy">

#### Select your icons

By default there is no icon in this new project.

Click on `Import icons` and import icons in SVG.

{{< callout warning >}}
SVG icons must be within a square layout to preserve icons consistency. Otherwise you will have some surprises!
{{< /callout >}}

<img class="img-thumbnail mb-3" width="300" src="/docs/{{< param docs_version >}}/assets/img/icomoon-import-icons.png" alt="IcoMoon - Import Icons" loading="lazy">

By default there is no selected icon. Check that you are in selection mode (third icon in the top bar, after `Import Icons` and the icon library) and then click on the icons to embed in your font. When an icon is selected, its border becomes yellow.

<img class="img-thumbnail mb-3" width="300" src="/docs/{{< param docs_version >}}/assets/img/icomoon-select-icons.png" alt="IcoMoon - Select Icons" loading="lazy">

#### Download and adapt your font

Now you can create your font. Click on `Generate Font` at the bottom right of the page. Depending of the number of selected icons, it can take some time!

<img class="img-thumbnail mb-3" src="/docs/{{< param docs_version >}}/assets/img/icomoon-generate-font.png" alt="IcoMoon - Generate Font" loading="lazy">

Now you have a `Download` button at the bottom right of the page but **WAIT!**.

##### Setting your font preferences

You need to make some changes into `Preferences` to name your font with a name dedicated to your project.

1. Click on `Preferences` on the top menu bar.
2. The default font name is `icomoon`. Rename it for you project (e.g. `myproject-icons`) and customize the class prefix by adding your project name to create a unique CSS selector.
3. You can also change the version, get SCSS variables, etc.
4. Don't forget to **uncheck IE8 support**!

<img class="img-thumbnail mb-3" src="/docs/{{< param docs_version >}}/assets/img/icomoon-preferences.png" alt="IcoMoon - Preferences" loading="lazy">

##### Download your font

Close the preferences modal.

You are now ready to download your font with the button at the bottom right of the page.

<img class="img-thumbnail mb-3" src="/docs/{{< param docs_version >}}/assets/img/icomoon-download-font.png" alt="IcoMoon - Download Font" loading="lazy">

The zip file will be named in function of what has been defined in the preferences modal (e.g. `myproject-icons-v1.0.zip`).

Unzip it:
* `demo.html` and `demo-files` fold offer a sample page displaying the icons — they are not mandatory for your project.
* `fonts` folder contains `myproject-icons.woff`. You can create the `woff2` corresponding file by using [Everything Fonts](https://everythingfonts.com/).
* `style.css` contains all the CSS classes. Rename it to `myproject-icons.css` and adapt it for SCSS if needed.
