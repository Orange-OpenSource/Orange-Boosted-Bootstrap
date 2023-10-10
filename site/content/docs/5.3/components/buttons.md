---
layout: docs
title: Buttons
description: Use Boosted's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
group: components
aliases:
  - "/docs/components/buttons/"
toc: true
---

## Base class

Boosted has a base `.btn` class that sets up basic styles such as padding and content alignment. By default, `.btn` controls have a transparent border and background color, and lack any explicit focus and hover styles.

{{< example >}}
<button type="button" class="btn">Base class</button>
{{< /example >}}

The `.btn` class is intended to be used in conjunction with our button variants, or to serve as a basis for your own custom styles.

<!-- Boosted mod: no warning callout about `:focus`/`:focus-visible` since Boosted provides a default visible focus for each focusable element -->

## Variants

Boosted includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.

{{< design-callout-alert >}}
Warning, info, and light variants should not be used because they do not respect the Orange Design System specifications as they are inherited from Bootstrap.

Please refer to the [Buttons](https://system.design.orange.com/0c1af118d/p/278ebc-buttons-standard/b/247486) guidelines on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}

<button type="button" class="btn btn-link">Link</button>
{{< /example >}}

{{< example class="bg-dark" >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-inverse btn-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}

<button type="button" class="btn btn-link">Link</button>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

<!-- Boosted mod -->
## With icon

The recommended way of using an icon in a button is [an embedded SVG]({{< docsref "/extend/icons" >}}). You need to:

- set its dimensions to `1.25rem` to  match button size—except for `.btn-sm` where you should use `1rem`,
- apply `.me-1` on it to get consistent spacing,
- fill it using `currentColor` to respect button color scheme,
- finally add `.overflow-visible` utility to prevent SVG content from being cropped.

{{< example >}}
<button type="button" class="btn btn-primary btn-sm">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  Primary
</button>
<button type="button" class="btn btn-primary">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  Primary
</button>
<button type="button" class="btn btn-primary btn-lg">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  Primary
</button>
{{< /example >}}

### Icon only

Add `.btn-icon` to get a squared button, meant to only contain an icon. Make sure to provide an accessible name to your button, either using a `.visually-hidden` content or a `aria-label` attribute.

{{< example >}}
<button type="button" class="btn btn-icon btn-secondary btn-sm">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
   <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  <span class="visually-hidden">Secondary</span>
</button>
<button type="button" class="btn btn-icon btn-secondary">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  <span class="visually-hidden">Secondary</span>
</button>
<button type="button" class="btn btn-icon btn-secondary btn-lg">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  <span class="visually-hidden">Secondary</span>
</button>
{{< /example >}}

### No outline

Use `.btn-no-outline` to get a borderless button as default state, and a consistent gray border for other states.

{{< example >}}
<button type="button" class="btn btn-icon btn-no-outline btn-sm">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  <span class="visually-hidden">No outline</span>
</button>
<button type="button" class="btn btn-icon btn-no-outline">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  <span class="visually-hidden">No outline</span>
</button>
<button type="button" class="btn btn-icon btn-no-outline btn-lg">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
   <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  <span class="visually-hidden">No outline</span>
</button>
{{< /example >}}

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
{{< /example >}}

Supported social networks are declared in a dedicated Sass map—meaning you're able to [add or remove a network from the following map]({{< docsref "/customize/sass#maps-and-loops" >}}).

{{< scss-docs name="social-buttons" file="scss/_variables.scss" >}}

## Dark variant

{{< added-in "5.2.0" >}}

Add `.btn-inverse` to the `.btn` for a dark variant.

{{< example class="bg-dark" >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-inverse btn-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}

<button type="button" class="btn btn-inverse btn-link">Link</button>
{{< /example >}}

{{< example class="bg-dark" >}}
<button type="button" class="btn btn-inverse btn-primary">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  Primary
</button>
<button type="button" class="btn btn-icon btn-inverse btn-secondary">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  <span class="visually-hidden">Secondary</span>
</button>
<button type="button" class="btn btn-icon btn-inverse btn-no-outline">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  <span class="visually-hidden">No outline</span>
</button>
{{< /example >}}

{{< example class="bg-dark" >}}
<a href="#" class="btn btn-icon btn-inverse btn-social btn-twitter"><span class="visually-hidden">Twitter</span></a>
<a href="#" class="btn btn-icon btn-inverse btn-social btn-facebook"><span class="visually-hidden">Facebook</span></a>
<a href="#" class="btn btn-icon btn-inverse btn-social btn-instagram"><span class="visually-hidden">Instagram</span></a>
<a href="#" class="btn btn-icon btn-inverse btn-social btn-whatsapp"><span class="visually-hidden">Whatsapp</span></a>
<a href="#" class="btn btn-icon btn-inverse btn-social btn-linkedin"><span class="visually-hidden">LinkedIn</span></a>
<a href="#" class="btn btn-icon btn-inverse btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a>
<a href="#" class="btn btn-icon btn-inverse btn-social btn-snapchat"><span class="visually-hidden">Snapchat</span></a>
<a href="#" class="btn btn-icon btn-inverse btn-social btn-pinterest"><span class="visually-hidden">Pinterest</span></a>
<a href="#" class="btn btn-icon btn-inverse btn-social btn-mail"><span class="visually-hidden">Mail</span></a>
<a href="#" class="btn btn-icon btn-inverse btn-social btn-tiktok"><span class="visually-hidden">TikTok</span></a>
{{< /example >}}
<!-- End mod -->

## Disable text wrapping

If you don't want the button text to wrap, you can add the `.text-nowrap` class to the button. In Sass, you can set `$btn-white-space: nowrap` to disable text wrapping for each button.

## Button tags

The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.

{{< example >}}
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
{{< /example >}}

## Outline buttons

{{< design-callout-alert >}}
The only variant of outline buttons that should be used is the `.btn-outline-secondary` one. The other variants should not be used because they do not respect the Orange Design System specifications as they are inherited from Bootstrap.

Please refer to the [Buttons](https://system.design.orange.com/0c1af118d/p/278ebc-buttons-standard/b/247486) guidelines on the Orange Design System website.
{{< /design-callout-alert >}}

In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the `.btn-outline-*` ones to remove all background images and colors on any button.

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-outline-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
{{< /example >}}

{{< example class="bg-dark" >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-inverse btn-outline-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
{{< /example >}}

{{< callout info >}}
Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.
{{< /callout >}}

## Sizes

Fancy larger or smaller buttons? Add `.btn-lg` or `.btn-sm` for additional sizes.

{{< example >}}
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
{{< /example >}}

{{< example >}}
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
{{< /example >}}

You can even roll your own custom sizing with CSS variables:

{{< design-callout-alert >}}
This variant should not be used because it does not respect the Orange Design System specifications.

Please refer to the [Buttons](https://system.design.orange.com/0c1af118d/p/278ebc-buttons-standard/b/247486) guidelines on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
<button type="button" class="btn btn-primary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
  Custom button
</button>
{{< /example >}}

## Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element. Disabled buttons have `pointer-events: none` applied to, preventing hover and active states from triggering.

<!--Boosted mod: no outline buttons-->
{{< example >}}
<button type="button" class="btn btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary" disabled>Button</button>
{{< /example >}}

Disabled buttons using the `<a>` element behave a bit different:

- `<a>`s don't support the `disabled` attribute, so you must add the `.disabled` class to make it visually appear disabled.
- Some future-friendly styles are included to disable all `pointer-events` on anchor buttons.
- Disabled buttons using `<a>` should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.
- Disabled buttons using `<a>` *should not* include the `href` attribute.

{{< example >}}
<a class="btn btn-primary disabled" role="button" aria-disabled="true">Primary link</a>
<a class="btn btn-secondary disabled" role="button" aria-disabled="true">Link</a>
{{< /example >}}

### Link functionality caveat

To cover cases where you have to keep the `href` attribute on a disabled link, the `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s. Note that this CSS property is not yet standardized for HTML, but all modern browsers support it. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, in addition to `aria-disabled="true"`, also include a `tabindex="-1"` attribute on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether.

{{< example >}}
<a href="#" class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
{{< /example >}}

## Block buttons

Create responsive stacks of full-width, "block buttons" like those in Boosted 4 with a mix of our display and gap utilities. By using utilities instead of button-specific classes, we have much greater control over spacing, alignment, and responsive behaviors.

{{< design-callout-alert >}}
These **full-width** buttons should not be used on desktop screens because they do not respect the Orange Design System specifications.

Please refer to the [Buttons](https://system.design.orange.com/0c1af118d/p/278ebc-buttons-standard/b/247486) guidelines on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

Here we create a responsive variation, starting with vertically stacked buttons until the `md` breakpoint, where `.d-md-block` replaces the `.d-grid` class, thus nullifying the `gap-2` utility. Resize your browser to see them change.

{{< example >}}
<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use `.col-6`. Center it horizontally with `.mx-auto`, too.

{{< example >}}
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right-align the buttons when they're no longer stacked.

{{< example >}}
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

## Button plugin

The button plugin allows you to create simple on/off toggle buttons.

{{< design-callout-alert >}}
These variants with only **one toggle button** should not be used because they do not respect the Orange Design System specifications. From the Orange Design System point of view and for usability reasons, a toggle button should not be used alone.

Instead, consider using our Boosted [Checks]({{< docsref "/forms/checks-radios#checks" >}}), [Radios]({{< docsref "/forms/checks-radios#radios" >}}) or [Radio toggle buttons]({{< docsref "/forms/checks-radios#radio-toggle-buttons" >}}) components.
{{< /design-callout-alert >}}

{{< callout info >}}
Visually, these toggle buttons are identical to the [checkbox toggle buttons]({{< docsref "/forms/checks-radios#checkbox-toggle-buttons" >}}). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas these toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.
{{< /callout >}}

### Toggle states

Add `data-bs-toggle="button"` to toggle a button's `active` state. If you're pre-toggling a button, you must manually add the `.active` class **and** `aria-pressed="true"` to ensure that it is conveyed appropriately to assistive technologies.

{{< example >}}
<button type="button" class="btn btn-primary" data-bs-toggle="button">Toggle button</button>
<button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
<button type="button" class="btn btn-primary" disabled data-bs-toggle="button">Disabled toggle button</button>
{{< /example >}}

{{< example >}}
<a href="#" class="btn btn-primary" role="button" data-bs-toggle="button">Toggle link</a>
<a href="#" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
<a class="btn btn-primary disabled" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a>
{{< /example >}}

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

## CSS

### Variables

{{< added-in "5.2.0" >}}

As part of Boosted's evolving CSS variables approach, buttons now use local CSS variables on `.btn` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="btn-css-vars" file="scss/_buttons.scss" >}}

<!--Boosted mod: no outline variant-->
Each `.btn-*` modifier class updates the appropriate CSS variables to minimize additional CSS rules with our `button-variant()` and `button-size()` mixins.

<!--Boosted mod: no custom `.btn-*` modifier class-->

### Sass variables

{{< scss-docs name="btn-variables" file="scss/_variables.scss" >}}

### Sass mixins

There are four mixins for buttons: button and button outline variant mixins (both based on `$theme-colors`), plus a button size mixin, and a button icon mixin.

{{< scss-docs name="btn-variant-mixin" file="scss/mixins/_buttons.scss" >}}

{{< scss-docs name="btn-outline-variant-mixin" file="scss/mixins/_buttons.scss" >}}

{{< scss-docs name="btn-size-mixin" file="scss/mixins/_buttons.scss" >}}

<!-- Boosted mod: .btn-icon -->
{{< scss-docs name="btn-icon" file="scss/mixins/_buttons.scss" >}}

### Sass loops

Button variants (for regular and outline buttons) use their respective mixins with our `$theme-colors` map to generate the modifier classes in `scss/_buttons.scss`.

{{< scss-docs name="btn-variant-loops" file="scss/_buttons.scss" >}}
