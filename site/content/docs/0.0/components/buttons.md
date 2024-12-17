---
layout: docs
title: Buttons
description: Use OUDS Web's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
group: components
aliases:
  - "/docs/components/buttons/"
toc: true
---

## Base class

OUDS Web has a base `.btn` class that sets up basic styles such as padding and content alignment. By default, `.btn` controls have a transparent border and background color, but still defines basic focus and hover styles.

{{< example >}}
<button type="button" class="btn">Base class</button>
{{< /example >}}

The `.btn` class is intended to be used in conjunction with our button variants, or to serve as a basis for your own custom styles.

<!-- OUDS mod: no warning callout about `:focus`/`:focus-visible` since OUDS Web provides a default visible focus for each focusable element -->

## Standard variants

OUDS Web includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.

{{< example >}}
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-strong">Strong</button>
<button type="button" class="btn btn-minimal">Minimal</button>
<button type="button" class="btn btn-negative">Negative</button>
{{< /example >}}
<!-- <button type="button" class="btn btn-link">Link</button> will be implemented with links -->

{{< bootstrap-compatibility >}}
{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}

<!-- <button type="button" class="btn btn-link">Link</button> -->
{{< /example >}}
{{< /bootstrap-compatibility >}}

<!-- OUDS mod: no accessibility tip callout about colored buttons since OUDS Web does not provide such buttons -->

<!-- OUDS mod: variants on colored background -->
## Variants on colored background

OUDS Web proposes some variants to be used on colorful backgrounds (not primary, secondary, tertiary or emphasized).

{{< example class="bg-primary">}} <!-- TODO change background-color -->
<button type="button" class="btn btn-default-on-colored-bg">Default</button>
<button type="button" class="btn btn-strong-on-colored-bg">Strong</button>
<button type="button" class="btn btn-minimal-on-colored-bg">Minimal</button>
{{< /example >}}

<!-- OUDS mod: with icon -->
## With icon

### Text and icon

The recommended way of using an icon in a button is an embedded SVG<!-- ({{< docsref "/extend/icons" >}}) -->. You need to:

- set its dimensions to default `1rem` size, the icon will adapt automatically,
- fill it using `currentColor` to respect button color scheme.

You don't need to apply `.me-shorter` class on the icon to get consistent spacing, as the margin is already handled by OUDS Web.

Please note that if you experience a problem with a cropped SVG, we recommend using the `.overflow-visible` utility on the SVG to fix its rendering.

If really needed, you can use a font icon associated the `.icon` class to set correct parameters for the `font-size` and `line-height`.

We strongly advise not using a `<img>`, in particular because the icon will not benefit from dynamic color changes on states (hover, focus, active) and the color mode system won't work.

{{< example >}}
<button type="button" class="btn btn-default">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  Default
</button>
<button type="button" class="btn btn-strong">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  Strong
</button>
<button type="button" class="btn btn-minimal">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  Minimal
</button>
<button type="button" class="btn btn-negative">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  Negative
</button>

<button type="button" class="btn btn-default">
  <span class="icon si si-settings" aria-hidden="true"></span>Default
</button>
{{< /example >}}

{{< example class="bg-primary">}}
<button type="button" class="btn btn-default-on-colored-bg">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  Default
</button>
<button type="button" class="btn btn-strong-on-colored-bg">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  Strong
</button>
<button type="button" class="btn btn-minimal-on-colored-bg">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  Minimal
</button>

<button type="button" class="btn btn-default-on-colored-bg">
  <span class="icon si si-settings" aria-hidden="true"></span>
  Default
</button>
{{< /example >}}

### Icon only

Add `.btn-icon` to get a squared button, meant to only contain an icon. Make sure to provide an accessible name to your button, either using a `.visually-hidden` content or a `aria-label` attribute.

{{< example >}}
<button type="button" class="btn btn-icon btn-default">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  <span class="visually-hidden">Default</span>
</button>
<button type="button" class="btn btn-icon btn-strong">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  <span class="visually-hidden">Strong</span>
</button>
<button type="button" class="btn btn-icon btn-minimal">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  <span class="visually-hidden">Minimal</span>
</button>
<button type="button" class="btn btn-icon btn-negative">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  <span class="visually-hidden">Negative</span>
</button>

<button type="button" class="btn btn-icon btn-default">
  <span class="icon si si-settings" aria-hidden="true"></span>
  <span class="visually-hidden">Default</span>
</button>
{{< /example >}}

{{< example class="bg-primary">}}
<button type="button" class="btn btn-icon btn-default-on-colored-bg">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  <span class="visually-hidden">Default</span>
</button>
<button type="button" class="btn btn-icon btn-strong-on-colored-bg">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  <span class="visually-hidden">Strong</span>
</button>
<button type="button" class="btn btn-icon btn-minimal-on-colored-bg">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  <span class="visually-hidden">Minimal</span>
</button>

<button type="button" class="btn btn-icon btn-default-on-colored-bg">
  <span class="icon si si-settings" aria-hidden="true"></span>
  <span class="visually-hidden">Default</span>
</button>
{{< /example >}}

<!-- not implemented for now
### Social buttons

Use `.btn-social` to get a rounded button meant to display contact points links or actions. Use one of our modifier to specify a network. Make sure to provide an accessible name to your button, either using a `.visually-hidden` content or a `aria-label` attribute.

{{< example >}}
<a href="#" class="btn btn-icon btn-social btn-twitter"><span class="visually-hidden">Twitter</span></a>
<a href="#" class="btn btn-icon btn-social btn-facebook"><span class="visually-hidden">Facebook</span></a>
<a href="#" class="btn btn-icon btn-social btn-instagram"><span class="visually-hidden">Instagram</span></a>
<a href="#" class="btn btn-icon btn-social btn-whatsapp"><span class="visually-hidden">Whatsapp</span></a>
<a href="#" class="btn btn-icon btn-social btn-linkedin"><span class="visually-hidden">LinkedIn</span></a>
<a href="#" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a>
<a href="#" class="btn btn-icon btn-social btn-snapchat"><span class="visually-hidden">Snapchat</span></a>
<a href="#" class="btn btn-icon btn-social btn-pinterest"><span class="visually-hidden">Pinterest</span></a>
<a href="#" class="btn btn-icon btn-social btn-mail"><span class="visually-hidden">Mail</span></a>
<a href="#" class="btn btn-icon btn-social btn-tiktok"><span class="visually-hidden">TikTok</span></a>
<a href="#" class="btn btn-icon btn-social btn-x"><span class="visually-hidden">X</span></a>
{{< /example >}}

Supported social networks are declared in a dedicated Sass map—meaning you're able to [add or remove a network from the following map]({{< docsref "/customize/sass#maps-and-loops" >}}).

{{< scss-docs name="social-buttons" file="scss/_variables.scss" >}}
-->

## Disable text wrapping

If you don't want the button text to wrap, you can add the `.text-nowrap` class to the button. In Sass, you can set `$btn-white-space: nowrap` to disable text wrapping for each button.

## HTML button tags

The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.

{{< example >}}
<a class="btn btn-default" href="#" role="button">Link</a>
<button class="btn btn-strong" type="submit">Button</button>
<input class="btn btn-minimal" type="button" value="Input">
<input class="btn btn-negative" type="submit" value="Submit">
<input class="btn btn-default" type="reset" value="Reset">
{{< /example >}}

## Outline buttons

{{< bootstrap-compatibility >}}

In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the `.btn-outline-*` ones to remove all background images and colors on any button.

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-outline-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
{{< /example >}}

{{< /bootstrap-compatibility >}}

<!-- not implemented for now
## Sizes

Fancy larger or smaller buttons? Add `.btn-lg` or `.btn-sm` for additional sizes.

{{< example >}}
<button type="button" class="btn btn-default btn-lg">Large button</button>
<button type="button" class="btn btn-strong btn-lg">Large button</button>
{{< /example >}}

{{< example >}}
<button type="button" class="btn btn-default btn-sm">Small button</button>
<button type="button" class="btn btn-strong btn-sm">Small button</button>
{{< /example >}}

You can even roll your own custom sizing with CSS variables:

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
This variant should not be used because it does not respect the Orange Design System specifications.

Please refer to the [Buttons guidelines](https://system.design.orange.com/0c1af118d/p/278ebc-buttons-standard/b/247486) on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
<button type="button" class="btn btn-default"
style="-bs-btn-padding-y: .25rem; -bs-btn-padding-x: .5rem; -bs-btn-font-size: .75rem;">
Custom button
</button>
{{< /example >}}
</details>
-->

## Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element. Disabled buttons have `pointer-events: none` applied to, preventing hover and active states from triggering.

<!--Boosted mod: no outline buttons-->
{{< example >}}
<button type="button" class="btn btn-default" disabled>Default</button>
<button type="button" class="btn btn-strong" disabled>Strong</button>
<button type="button" class="btn btn-minimal" disabled>Minimal</button>
<button type="button" class="btn btn-negative" disabled>Negative</button>
{{< /example >}}

{{< example class="bg-primary">}}
<button type="button" class="btn btn-default-on-colored-bg" disabled>Default</button>
<button type="button" class="btn btn-strong-on-colored-bg" disabled>Strong</button>
<button type="button" class="btn btn-minimal-on-colored-bg" disabled>Minimal</button>
{{< /example >}}

Disabled buttons using the `<a>` element behave a bit different:

- `<a>`s don't support the `disabled` attribute, so you must add the `.disabled` class to make it visually appear disabled.
- Some future-friendly styles are included to disable all `pointer-events` on anchor buttons.
- Disabled buttons using `<a>` should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.
- Disabled buttons using `<a>` *should not* include the `href` attribute.

{{< example >}}
<div class="row">
  <div class="col p-medium">
    <a class="btn btn-default disabled" role="button" aria-disabled="true">Default link</a>
    <a class="btn btn-strong disabled" role="button" aria-disabled="true">Strong link</a>
  </div>
  <div class="col bg-primary p-medium">
    <a class="btn btn-default-on-colored-bg disabled" role="button" aria-disabled="true">Default link</a>
    <a class="btn btn-strong-on-colored-bg disabled" role="button" aria-disabled="true">Strong link</a>
  </div>
</div>
{{< /example >}}

### Link functionality caveat

To cover cases where you have to keep the `href` attribute on a disabled link, the `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s. Note that this CSS property is not yet standardized for HTML, but all modern browsers support it. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, in addition to `aria-disabled="true"`, also include a `tabindex="-1"` attribute on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether.

{{< example >}}
<a href="#" class="btn btn-default disabled" tabindex="-1" role="button" aria-disabled="true">Default link</a>
<a href="#" class="btn btn-strong disabled" tabindex="-1" role="button" aria-disabled="true">Strong link</a>
{{< /example >}}

<!-- OUDS mod: skeleton state -->
## Skeleton state

The skeleton state is to be used while some important elements of the page are still loading, before they can be fully displayed. This state improves the perceived loading time by providing a visual cue of where elements will appear once fully loaded.
The `.skeleton` class must be used with the `disabled` attribute to prevent any interaction. This state shouldn't be used on colored backgrounds.

 If the whole page is still loading, you may use a status message to indicate it to users with assistive technologies.

{{< example >}}
<button class="btn btn-default skeleton" disabled>Default</button>
{{< /example >}}

<!-- OUDS mod: loading state -->
## Loading state

The loading state of a button indicates that an action is currently processing or taking place. This state provides feedback to users, enhancing user experience.

When the loading starts, you will have to:
- Add the `disabled` attribute to the button to avoid any unwanted interactions.
- Add the class `.loading-indeterminate` (for an indeterminate loading time) or `.loading-determinate` (for a defined loading time); this will provide an animation corresponding to the current state.
- Update regularly the `<span>` containing the loading message in order to be vocalized by screen readers; if the loading time is defined, you should indicate the progression.

At the end of the loading, you should:
- Remove the `disabled` attribute to the button to restore its interactivity.
- Remove the class `.loading-indeterminate` or `.loading-determinate` to restore its look.
- Set a final status message, indicating the loading has ended.

See the buttons un cation in our [loading buttons live example]({{< docsref "/examples/loading-buttons" >}}).

{{< example >}}
<div class="p-short">
  <button type="button" class="btn btn-default loading-indeterminate" id="loading-btn1" disabled>
    Download file 1
    <span role="status">
      <span id="loading-btn-msg1" class="visually-hidden">Downloading file 1</span>
    </span>
  </button>
  <button type="button" class="btn btn-default loading-determinate" id="loading-btn2" disabled>
    Download file 2
    <span role="status">
      <span id="loading-btn-msg2" class="visually-hidden">Downloading file 2</span>
    </span>
  </button>
</div>
<div class="bg-primary p-short">
  <button type="button" class="btn btn-default-on-colored-bg loading-indeterminate" id="loading-btn3" disabled>
    Download file 3
    <span role="status">
      <span id="loading-btn-msg3" class="visually-hidden">Downloading file 3</span>
    </span>
  </button>
  <button type="button" class="btn btn-default-on-colored-bg loading-determinate" id="loading-btn4" disabled>
    Download file 4
    <span role="status">
      <span id="loading-btn-msg4" class="visually-hidden">Downloading file 4</span>
    </span>
  </button>
</div>
{{< /example >}}

## Block buttons

Create responsive stacks of full-width, "block buttons" with a mix of our display and gap utilities. By using utilities instead of button-specific classes, we have much greater control over spacing, alignment, and responsive behaviors.

Please note that these **full-width** buttons should not be used on desktop screens. <!-- OUDS mod -->

{{< example >}}
<div class="d-grid gap-short">
  <button class="btn btn-default" type="button">Button</button>
  <button class="btn btn-default" type="button">Button</button>
</div>
{{< /example >}}

Here we create a responsive variation, starting with vertically stacked buttons until the `md` breakpoint, where `.d-md-block` replaces the `.d-grid` class, thus nullifying the `gap-short` utility. Resize your browser to see them change.

{{< example >}}
<div class="d-grid gap-short d-md-block">
  <button class="btn btn-default" type="button">Button</button>
  <button class="btn btn-default" type="button">Button</button>
</div>
{{< /example >}}

You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use `.col-6`. Center it horizontally with `.mx-auto`, too.

{{< example >}}
<div class="d-grid gap-short col-6 mx-auto">
  <button class="btn btn-default" type="button">Button</button>
  <button class="btn btn-default" type="button">Button</button>
</div>
{{< /example >}}

Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right-align the buttons when they're no longer stacked.

{{< example >}}
<div class="d-grid gap-short d-md-flex justify-content-md-end">
  <button class="btn btn-default me-md-shorter" type="button">Button</button>
  <button class="btn btn-default" type="button">Button</button>
</div>
{{< /example >}}

## Button plugin

The button plugin allows you to create simple on/off toggle buttons.

{{< callout info >}}
Visually, these toggle buttons are identical to the [checkbox toggle buttons]({{< docsref "/forms/checks-radios#checkbox-toggle-buttons" >}}). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas these toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.
{{< /callout >}}

<!-- not implemented yet
### Toggle states

Add `data-bs-toggle="button"` to toggle a button's `active` state. If you're pre-toggling a button, you must manually add the `.active` class **and** `aria-pressed="true"` to ensure that it is conveyed appropriately to assistive technologies.

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These variants with only **one toggle button** should not be used because they do not respect the Orange Design System specifications. From the Orange Design System point of view and for usability reasons, a toggle button should not be used alone.

Instead, consider using our [Checks component]({{< docsref "/forms/checks-radios#checks" >}}), [Radios component]({{< docsref "/forms/checks-radios#radios" >}}) or [Radio toggle buttons component]({{< docsref "/forms/checks-radios#radio-toggle-buttons" >}}).
{{< /design-callout-alert >}}

{{< example >}}
<button type="button" class="btn btn-default" data-bs-toggle="button">Toggle button</button>
<button type="button" class="btn btn-default active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
<button type="button" class="btn btn-default" disabled data-bs-toggle="button">Disabled toggle button</button>
{{< /example >}}

{{< example >}}
<a href="#" class="btn btn-default" role="button" data-bs-toggle="button">Toggle link</a>
<a href="#" class="btn btn-default active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
<a class="btn btn-default disabled" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a>
{{< /example >}}
</details>

### Methods

You can create a button instance with the button constructor, for example:


```js
const bsButton = new boosted.Button('#myButton')
```

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's button. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the button instance associated with a DOM element, you can use it like this: `boosted.Button.getInstance(element)`. |
| `getOrCreateInstance` | Static method which returns a button instance associated with a DOM element or creates a new one in case it wasn't initialized. You can use it like this: `boosted.Button.getOrCreateInstance(element)`. |
| `toggle` | Toggles push state. Gives the button the appearance that it has been activated. |
{{< /bs-table >}}

For example, to toggle all buttons

```js
document.querySelectorAll('.btn').forEach(buttonElement => {
  const button = boosted.Button.getOrCreateInstance(buttonElement)
  button.toggle()
})
```
-->

## CSS

### Variables

As part of OUDS Web's evolving CSS variables approach, buttons now use local CSS variables on `.btn` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="btn-css-vars" file="scss/_buttons.scss" >}}

<!--Boosted mod: no outline variant-->
Each `.btn-*` modifier class updates the appropriate CSS variables to minimize additional CSS rules with our `button-variant()` and `button-size()` mixins.

<!-- OUDS mod: no custom `.btn-*` modifier class-->

### Sass variables

{{< scss-docs name="btn-variables" file="scss/_variables.scss" >}}

### Sass mixins

There are four mixins for buttons: button and button outline variant mixins (both based on `$theme-colors`).

{{< scss-docs name="btn-variant-mixin" file="scss/mixins/_buttons.scss" >}}

<!-- OUDS mod: button-outline-variant mixin -->

<!-- OUDS mod: no button-size mixin for now  -->

<!-- OUDS mod: button-icon mixin is not documented for now -->
<!-- {{< scss-docs name="btn-icon" file="scss/mixins/_buttons.scss" >}} -->

### Sass loops

Button variants (for regular and outline buttons) use their respective mixins with our `$theme-colors` map to generate the modifier classes in `scss/_buttons.scss`.

{{< scss-docs name="btn-variant-loops" file="scss/_buttons.scss" >}}
