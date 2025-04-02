---
layout: docs
title: Buttons
description: Use OUDS Web's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
group: components
aliases:
  - "/docs/components/buttons/"
toc: true
---

{{< callout info >}}
You can find here the [OUDS Button design guidelines](https://unified-design-system.orange.com/472794e18/p/48a788-button).
{{< /callout >}}

## Base class

OUDS Web has a base `.btn` class that sets up basic styles such as padding and content alignment. By default, `.btn` controls have a transparent border and background color, but still defines basic focus and hover styles.

{{< example >}}
<button type="button" class="btn">Base class</button>
{{< /example >}}

The `.btn` class is intended to be used in conjunction with our button variants, or to serve as a basis for your own custom styles.

<!-- OUDS mod: no warning callout about `:focus`/`:focus-visible` since OUDS Web provides a default visible focus for each focusable element -->

## Standard variants

OUDS Web includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control. Please follow the [Button design specifications](https://unified-design-system.orange.com/472794e18/p/48a788-button/t/5c95fb0c27) to choose the right button for the right action.

{{< example class="bd-btn-example">}}
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-strong">Strong</button>
<button type="button" class="btn btn-minimal">Minimal</button>
<button type="button" class="btn btn-negative">Negative</button>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< example class="bd-btn-example">}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
{{< /example >}}
{{< /bootstrap-compatibility >}}

<!-- OUDS mod: no accessibility tip callout about colored buttons since OUDS Web does not provide such buttons -->

<!-- OUDS mod: Variants on colored background added -->

## Variants on colored background

OUDS Web offers a few variations to use on [colored backgrounds]({{< docsref "/utilities/background#colored-background" >}}). Their accessibility (readability) is ensured by suitable semi-opaque backgrounds.

{{< callout warning >}}
**Heads up!**
- Background utilities used to make colored backgrounds, should always be used with the appropriate color theme (see an example below). Please refer to [colored backgrounds documentation]({{< docsref "/utilities/background/#colored-backgrounds" >}}).
- Negative buttons should never be used on colored background.
{{< /callout >}}

{{< example class="p-none bd-btn-example">}}
<div class="bg-brand-primary p-tall">
  <div data-bs-theme="light" class="d-flex gap-shorter flex-wrap">
    <button type="button" class="btn btn-default btn-on-colored-bg">Default</button>
    <button type="button" class="btn btn-strong btn-on-colored-bg">Strong</button>
    <button type="button" class="btn btn-minimal btn-on-colored-bg">Minimal</button>
    <!-- BEWARE: `.btn-negative` should never be used on colored backgrounds! -->
  </div>
</div>
<div class="bg-status-negative-emphasized p-tall">
  <div data-bs-theme="root-inverted" class="d-flex gap-shorter flex-wrap">
    <button type="button" class="btn btn-default btn-on-colored-bg">Default</button>
    <button type="button" class="btn btn-strong btn-on-colored-bg">Strong</button>
    <button type="button" class="btn btn-minimal btn-on-colored-bg">Minimal</button>
    <!-- BEWARE: `.btn-negative` should never be used on colored backgrounds! -->
  </div>
</div>
{{< /example >}}

<!-- OUDS mod: With icon added -->

## With icon

{{< callout info >}}
The recommended way of using an icon in a button is through an [SVG sprite file]({{< docsref "/extend/icons/#svg-sprite" >}}). You need to fill it using `currentColor` to respect the button color scheme (can be set directly inside the SVG sprite).

When icons are purely decorative, they should be hidden from assistive technologies using `aria-hidden="true"`, as we've done in our text and icon examples. For icon only, we chose to keep the icon hidden from assistive technologies and add a visually hidden label. See [icons accessibility]({{< docsref "/extend/icons/#icons-accessibility" >}}) for more info.
{{< /callout >}}

### Text and icon

The recommended way of using an icon in a button is an embedded SVG<!-- ({{< docsref "/extend/icons" >}}) -->. You need to fill it using `currentColor` to respect button color scheme (which can be done inside the SVG sprite file).

You don't need to apply any spacing utility on the icon to get consistent spacing, as the margin is already handled by OUDS Web.

Please note that if you experience a problem with a cropped SVG, we recommend using the `.overflow-visible` utility on the SVG to fix its rendering.

If really needed, you can use a font icon associated to the `.icon` class to set correct parameters for the `font-size` and `line-height`.

We strongly advise not using an `<img>`, in particular because the icon will not benefit from dynamic color changes on states (hover, focus, active) and the color mode system won't work.

{{< example class="p-none bd-btn-example">}}
<div class="p-tall d-flex gap-shorter flex-wrap">
  <button type="button" class="btn btn-default">
    <svg aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
    Default
  </button>
  <button type="button" class="btn btn-strong">
    <svg aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
    Strong
  </button>
  <button type="button" class="btn btn-minimal">
    <svg aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
    Minimal
  </button>
  <button type="button" class="btn btn-negative">
    <svg aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
    Negative
  </button>

  <button type="button" class="btn btn-default">
    <span class="icon si si-settings" aria-hidden="true"></span>
    Default
  </button>
</div>

<div class="bg-brand-primary p-tall">
  <div data-bs-theme="light" class="d-flex gap-shorter flex-wrap">
    <button type="button" class="btn btn-default btn-on-colored-bg">
      <svg aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
      </svg>
      Default
    </button>
    <button type="button" class="btn btn-strong btn-on-colored-bg">
      <svg aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
      </svg>
      Strong
    </button>
    <button type="button" class="btn btn-minimal btn-on-colored-bg">
      <svg aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
      </svg>
      Minimal
    </button>

    <button type="button" class="btn btn-default btn-on-colored-bg">
      <span class="icon si si-settings" aria-hidden="true"></span>
      Default
    </button>
  </div>
</div>
{{< /example >}}

### Icon only

Add `.btn-icon` to get a squared button, meant to only contain an icon. Make sure to provide an accessible name to your button, either using a `.visually-hidden` content or an `aria-label` attribute.

<!-- TODO: Add a paragraph about tooltip and/or title -->

{{< example class="p-none bd-btn-example">}}
<div class="p-tall d-flex gap-shorter flex-wrap">
  <button type="button" class="btn btn-icon btn-default">
    <svg aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
    <span class="visually-hidden">Default</span>
  </button>
  <button type="button" class="btn btn-icon btn-strong">
    <svg aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
    <span class="visually-hidden">Strong</span>
  </button>
  <button type="button" class="btn btn-icon btn-minimal">
    <svg aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
    <span class="visually-hidden">Minimal</span>
  </button>
  <button type="button" class="btn btn-icon btn-negative">
    <svg aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
    <span class="visually-hidden">Negative</span>
  </button>

  <button type="button" class="btn btn-icon btn-default">
    <span class="icon si si-settings" aria-hidden="true"></span>
    <span class="visually-hidden">Default</span>
  </button>
</div>

<div class="bg-brand-primary p-tall">
  <div data-bs-theme="light" class="d-flex gap-shorter flex-wrap">
    <button type="button" class="btn btn-icon btn-default btn-on-colored-bg">
      <svg aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
      </svg>
      <span class="visually-hidden">Default</span>
    </button>
    <button type="button" class="btn btn-icon btn-strong btn-on-colored-bg">
      <svg aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
      </svg>
      <span class="visually-hidden">Strong</span>
    </button>
    <button type="button" class="btn btn-icon btn-minimal btn-on-colored-bg">
      <svg aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
      </svg>
      <span class="visually-hidden">Minimal</span>
    </button>

    <button type="button" class="btn btn-icon btn-default btn-on-colored-bg">
      <span class="icon si si-settings" aria-hidden="true"></span>
      <span class="visually-hidden">Default</span>
    </button>
  </div>
</div>
{{< /example >}}

<!-- OUDS mod: Social buttons not implemented for now -->

## Disable text wrapping

If you don't want the button text to wrap, you can add the `.text-nowrap` class to the button. In Sass, you can set `$btn-white-space: nowrap` to disable text wrapping for each button.

## Button tags

The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.

{{< example class="bd-btn-example">}}
<a class="btn btn-default" href="#" role="button">Link</a>
<button class="btn btn-strong" type="submit">Button</button>
<input class="btn btn-minimal" type="button" value="Input">
<input class="btn btn-negative" type="submit" value="Submit">
<input class="btn btn-default" type="reset" value="Reset">
{{< /example >}}

## Outline buttons

{{< bootstrap-compatibility false >}}

{{< markdown >}}
In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the `.btn-outline-*` ones to remove all background images and colors on any button.
{{< /markdown >}}

{{< example class="bd-btn-example">}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-outline-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
{{< /example >}}

{{< /bootstrap-compatibility >}}

<!-- OUDS mod: Sizes not implemented for now -->

## Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element. Disabled buttons have `pointer-events: none` applied to, preventing hover and active states from triggering.

<!-- OUDS mod: no outline buttons-->
{{< example class="p-none bd-btn-example" >}}
<div class="p-tall d-flex gap-shorter flex-wrap">
  <button type="button" class="btn btn-default" disabled>Default</button>
  <button type="button" class="btn btn-strong" disabled>Strong</button>
  <button type="button" class="btn btn-minimal" disabled>Minimal</button>
  <button type="button" class="btn btn-negative" disabled>Negative</button>
</div>

<div class="bg-brand-primary p-tall">
  <div data-bs-theme="light" class="d-flex gap-shorter flex-wrap">
    <button type="button" class="btn btn-default btn-on-colored-bg" disabled>Default</button>
    <button type="button" class="btn btn-strong btn-on-colored-bg" disabled>Strong</button>
    <button type="button" class="btn btn-minimal btn-on-colored-bg" disabled>Minimal</button>
  </div>
</div>
{{< /example >}}

Disabled buttons using the `<a>` element behave a bit different:

- Disabled buttons using `<a>` must include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies and to make it visually appear disabled.
- Disabled buttons using `<a>` *should not* include the `href` attribute. In case you need to keep the `href`, please refer to [disabled link accessibility warning](/docs/{{< param docs_version >}}/components/links#disabled-link-accessibility-warning).
- Some future-friendly styles are included to disable all `pointer-events` on anchor buttons.

{{< example class="p-none bd-btn-example" >}}
<div class="p-tall d-flex gap-shorter flex-wrap">
  <a class="btn btn-default" role="button" aria-disabled="true">Default link</a>
  <a class="btn btn-strong" role="button" aria-disabled="true">Strong link</a>
</div>
<div class="bg-brand-primary p-tall">
  <div data-bs-theme="light" class="d-flex gap-shorter flex-wrap">
    <a class="btn btn-default btn-on-colored-bg" role="button" aria-disabled="true">Default link</a>
    <a class="btn btn-strong btn-on-colored-bg" role="button" aria-disabled="true">Strong link</a>
  </div>
</div>
{{< /example >}}

<!-- OUDS mod: Loading state added -->

## Loading state

The loading state of a button indicates that an action is currently processing or taking place. This state provides feedback to users, enhancing user experience.

To make an animated loading state button, you will add in your standard button:
- An animated `<svg>`: the animation will differ whether the loading time is known or not.
- A status message `<span>`: the message must be updated regularly in order to be vocalized by screen readers; if the loading time is defined, you should indicate the progression.

For example, before loading, your button could be like this:

{{< example >}}
<button type="button" class="btn btn-default" id="loading-btn-0">
  Download file
  <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
    <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
  </svg>
  <span role="status" id="loading-btn-msg-0" class="visually-hidden d-none"></span>
</button>
{{< /example >}}

When the loading starts, you will have to:
- Add the class `.loading-indeterminate` (for an unknown loading time) or `.loading-determinate` (for a known loading time) to the button to provide the appropriate styles and animation.
- For a known loading time, provide a CSS variable `--bs-btn-loading-time` to set the loading time. For example, add `style="--bs-btn-loading-time: 5s;"` to the button, for a 5 seconds loading.
- Set the disabled state on the button to avoid any unwanted interactions (in case you use a `<a>` tag, this can be done by setting `aria-disabled="true"` and removing the `href` attribute).
- Remove the `.d-none` from the status message `<span>`.
- Update regularly the status message `<span>` containing the loading message.

At the end of the loading, you should:

- Remove the disabled state on the button to restore its interactivity.
- Remove the class `.loading-indeterminate` or `.loading-determinate` to restore the button's look.
- Set a final status message in `<span>`, indicating the loading has ended (so we don't add again `.d-none` on this status message).
- Put the focus back on the button to ensure similar behavior across browsers and not lose the user after changes.

You can see it live and find a JavaScript example on our [loading buttons live example]({{< docsref "/examples/loading-buttons" >}}).

{{< example class="p-none bd-btn-example" >}}
<div class="p-tall d-flex gap-shorter flex-wrap">
  <button type="button" class="btn btn-default loading-indeterminate" id="loading-btn-1" disabled>
    Download file 1
    <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
      <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
    </svg>
    <span role="status" id="loading-btn-msg-1" class="visually-hidden">Downloading file 1</span>
  </button>
  <button type="button" class="btn btn-strong loading-indeterminate" id="loading-btn-2" disabled>
    Download file 2
    <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
      <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
    </svg>
    <span role="status" id="loading-btn-msg-2" class="visually-hidden">Downloading file 2</span>
  </button>
  <button type="button" class="btn btn-minimal loading-indeterminate" id="loading-btn-3" disabled>
    Download file 3
    <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
      <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
    </svg>
    <span role="status" id="loading-btn-msg-3" class="visually-hidden">Downloading file 3</span>
  </button>
  <button type="button" class="btn btn-negative loading-indeterminate" id="loading-btn-4" disabled>
    Download file 4
    <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
      <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
    </svg>
    <span role="status" id="loading-btn-msg-4" class="visually-hidden">Downloading file 4</span>
  </button>
</div>

<div class="p-tall d-flex gap-shorter flex-wrap">
  <button type="button" class="btn btn-default loading-determinate" id="loading-btn-5" disabled style="--bs-btn-loading-time: 5s;">
    Download file 5
    <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
      <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
    </svg>
    <span role="status" id="loading-btn-msg-5" class="visually-hidden">Downloading file 5: xx%</span>
  </button>
  <button type="button" class="btn btn-strong loading-determinate" id="loading-btn-6" disabled style="--bs-btn-loading-time: 5s;">
    Download file 6
    <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
      <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
    </svg>
    <span role="status" id="loading-btn-msg-6" class="visually-hidden">Downloading file 6: xx%</span>
  </button>
  <button type="button" class="btn btn-minimal loading-determinate" id="loading-btn-7" disabled style="--bs-btn-loading-time: 5s;">
    Download file 7
    <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
      <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
    </svg>
    <span role="status" id="loading-btn-msg-7" class="visually-hidden">Downloading file 7: xx%</span>
  </button>
  <button type="button" class="btn btn-negative loading-determinate" id="loading-btn-8" disabled style="--bs-btn-loading-time: 5s;">
    Download file 8
    <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
      <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
    </svg>
    <span role="status" id="loading-btn-msg-8" class="visually-hidden">Downloading file 8: xx%</span>
  </button>
</div>

<div class="bg-brand-primary p-tall">
  <div data-bs-theme="light" class="d-flex gap-shorter flex-wrap">
    <button type="button" class="btn btn-default btn-on-colored-bg loading-indeterminate" id="loading-btn-9" disabled>
      Download file 9
      <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
        <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
      </svg>
      <span role="status" id="loading-btn-msg-9" class="visually-hidden">Downloading file 9</span>
    </button>
    <button type="button" class="btn btn-strong btn-on-colored-bg loading-indeterminate" id="loading-btn-10" disabled>
      Download file 10
      <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
        <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
      </svg>
      <span role="status" id="loading-btn-msg-10" class="visually-hidden">Downloading file 10</span>
    </button>
    <button type="button" class="btn btn-minimal btn-on-colored-bg loading-indeterminate" id="loading-btn-11" disabled>
      Download file 11
      <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
        <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
      </svg>
      <span role="status" id="loading-btn-msg-11" class="visually-hidden">Downloading file 11</span>
    </button>
  </div>
</div>

<div class="bg-brand-primary p-tall">
  <div data-bs-theme="light" class="d-flex gap-shorter flex-wrap">
    <button type="button" class="btn btn-default btn-on-colored-bg loading-determinate" id="loading-btn-12" disabled style="--bs-btn-loading-time: 5s;">
      Download file 12
      <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
        <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
      </svg>
      <span role="status" id="loading-btn-msg-12" class="visually-hidden">Downloading file 12: xx%</span>
    </button>
    <button type="button" class="btn btn-strong btn-on-colored-bg loading-determinate" id="loading-btn-13" disabled style="--bs-btn-loading-time: 5s;">
      Download file 13
      <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
        <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
      </svg>
      <span role="status" id="loading-btn-msg-13" class="visually-hidden">Downloading file 13: xx%</span>
    </button>
    <button type="button" class="btn btn-minimal btn-on-colored-bg loading-determinate" id="loading-btn-14" disabled style="--bs-btn-loading-time: 5s;">
      Download file 14
      <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
        <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
      </svg>
      <span role="status" id="loading-btn-msg-14" class="visually-hidden">Downloading file 14: xx%</span>
    </button>
  </div>
</div>
{{< /example >}}

Loading state can also be combined with all kind of buttons, including icons.

{{< example class="bd-btn-example">}}
<div class="p-tall d-flex gap-shorter flex-wrap">
  <button type="button" class="btn btn-icon btn-default loading-indeterminate" id="loading-btn-15" disabled>
    <svg aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#download"/>
    </svg>
    <span class="visually-hidden">Downloading file 15</span>
    <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
      <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
    </svg>
    <span role="status" id="loading-btn-msg-15" class="visually-hidden">Downloading file 15</span>
  </button>
  <button type="button" class="btn btn-icon btn-default loading-determinate" id="loading-btn-16" disabled style="--bs-btn-loading-time: 5s;">
    <svg aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#download"/>
    </svg>
    <span class="visually-hidden">Downloading file 16</span>
    <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
      <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
    </svg>
    <span role="status" id="loading-btn-msg-16" class="visually-hidden">Downloading file 16: xx%</span>
  </button>
  <button type="button" class="btn btn-strong loading-indeterminate" id="loading-btn-17" disabled>
    <svg aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#download"/>
    </svg>
    Download file 17
    <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
      <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
    </svg>
    <span role="status" id="loading-btn-msg-17" class="visually-hidden">Downloading file 17</span>
  </button>
  <button type="button" class="btn btn-strong loading-determinate" id="loading-btn-18" disabled style="--bs-btn-loading-time: 5s;">
    <svg aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#download"/>
    </svg>
    Download file 18
    <svg viewbox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
      <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
    </svg>
    <span role="status" id="loading-btn-msg-18" class="visually-hidden">Downloading file 18</span>
  </button>
</div>

{{< /example >}}

## Block buttons

Create responsive stacks of full-width, "block buttons" with a mix of our display and gap utilities. By using utilities instead of button-specific classes, we have much greater control over spacing, alignment, and responsive behaviors.

Please note that these **full-width** buttons should not be used on desktop screens. <!-- OUDS mod -->

{{< example class="bd-btn-example">}}
<div class="d-grid gap-short">
  <button class="btn btn-default" type="button">Button</button>
  <button class="btn btn-default" type="button">Button</button>
</div>
{{< /example >}}

Here we create a responsive variation, starting with vertically stacked buttons until the `md` breakpoint, where `.d-md-block` replaces the `.d-grid` class, thus nullifying the `gap-short` utility. Resize your browser to see them change.

{{< example class="bd-btn-example">}}
<div class="d-grid gap-short d-md-block">
  <button class="btn btn-default" type="button">Button</button>
  <button class="btn btn-default" type="button">Button</button>
</div>
{{< /example >}}

You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use `.col-6`. Center it horizontally with `.mx-auto`, too.

{{< example class="bd-btn-example">}}
<div class="d-grid gap-short col-6 mx-auto">
  <button class="btn btn-default" type="button">Button</button>
  <button class="btn btn-default" type="button">Button</button>
</div>
{{< /example >}}

Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right-align the buttons when they're no longer stacked.

{{< example class="bd-btn-example">}}
<div class="d-grid gap-short d-md-flex justify-content-md-end">
  <button class="btn btn-default me-md-shorter" type="button">Button</button>
  <button class="btn btn-default" type="button">Button</button>
</div>
{{< /example >}}

<!-- OUDS mod: no Button plugin -->
