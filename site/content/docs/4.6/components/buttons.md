---
layout: docs
title: Buttons
description: Use Boosted's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
group: components
toc: true
---

## Examples

Boosted includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
{{- if not (or (eq .name "light") (eq .name "dark")) }}
<button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
{{- end }}
{{- end }}
<button type="button" class="btn btn-link">Link</button>
<button type="button" class="btn btn-secondary btn-icon">
    <span class="sr-only">Icon</span>
    <span class="icon icon-settings" aria-hidden="true"></span>
</button>
<br>
{{- range (index $.Site.Data "theme-colors") }}
{{- if not (or (eq .name "light") (eq .name "dark")) }}
<button type="button" class="btn btn-{{ .name }}">
  <span class="icon icon-settings" aria-hidden="true"></span>
  {{ .name | title }}
</button>
{{- end }}
{{- end }}
{{< /buttons.inline >}}
{{< /example >}}

{{< callout warning >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

<!-- Boosted mod -->
### Dark backgrounds

To get the inversed button behavior, simply add `.btn-inverse` class to your `<button>` or `<a>` tag.

{{< example class="bg-dark" >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
{{- if not (or (eq .name "light") (eq .name "dark")) }}
<button type="button" class="btn btn-inverse btn-{{ .name }}">{{ .name | title }}</button>
{{- end }}
{{- end }}
<button type="button" class="btn btn-inverse btn-link">Link</button>
<button type="button" class="btn btn-inverse btn-secondary btn-icon">
    <span class="sr-only">Icon</span>
    <span class="icon icon-settings" aria-hidden="true"></span>
</button>
<br>
{{- range (index $.Site.Data "theme-colors") }}
{{- if not (or (eq .name "light") (eq .name "dark")) }}
<button type="button" class="btn btn-inverse btn-{{ .name }}">
  <span class="icon icon-settings" aria-hidden="true"></span>
  {{ .name | title }}
</button>
{{- end }}
{{- end }}
{{< /buttons.inline >}}
{{< /example >}}

## Social buttons

In need of a social media button? Some helper classes are designed to be used along with the `.btn` element, starting with the `.btn-social` variant.

{{< example >}}
<a class="btn btn-social btn-twitter" href="#"><span class="sr-only">Twitter</span></a>
<a class="btn btn-social btn-facebook" href="#"><span class="sr-only">Facebook</span></a>
<a class="btn btn-social btn-instagram" href="#"><span class="sr-only">Instagram</span></a>
<a class="btn btn-social btn-whatsapp" href="#"><span class="sr-only">Whatsapp</span></a>
<a class="btn btn-social btn-linkedin" href="#"><span class="sr-only">Linkedin</span></a>
<a class="btn btn-social btn-youtube" href="#"><span class="sr-only">YouTube</span></a>
<a class="btn btn-social btn-snapchat" href="#"><span class="sr-only">Snapchat</span></a>
<a class="btn btn-social btn-pinterest" href="#"><span class="sr-only">Pinterest</span></a>
<a class="btn btn-social btn-mail" href="#"><span class="sr-only">Mail</span></a>
{{< /example >}}

{{< example class="bg-dark" >}}
<a class="btn btn-inverse btn-social btn-twitter" href="#"><span class="sr-only">Twitter</span></a>
<a class="btn btn-inverse btn-social btn-facebook" href="#"><span class="sr-only">Facebook</span></a>
<a class="btn btn-inverse btn-social btn-instagram" href="#"><span class="sr-only">Instagram</span></a>
<a class="btn btn-inverse btn-social btn-whatsapp" href="#"><span class="sr-only">Whatsapp</span></a>
<a class="btn btn-inverse btn-social btn-linkedin" href="#"><span class="sr-only">Linkedin</span></a>
<a class="btn btn-inverse btn-social btn-youtube" href="#"><span class="sr-only">YouTube</span></a>
<a class="btn btn-inverse btn-social btn-snapchat" href="#"><span class="sr-only">Snapchat</span></a>
<a class="btn btn-inverse btn-social btn-pinterest" href="#"><span class="sr-only">Pinterest</span></a>
<a class="btn btn-inverse btn-social btn-mail" href="#"><span class="sr-only">Mail</span></a>
{{< /example >}}

Social buttons are compatibles with [dark backgrounds variant](#dark-backgrounds) and [sizing utilities](#sizes).

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

<!-- Boosted mod: no btn-outline-* -->

## Sizes

Fancy larger or smaller buttons? Add `.btn-lg` or `.btn-sm` for additional sizes.

<!-- Boosted mod: include medium size, to please Orange brand -->
**Medium button** is the standard button size.

{{< example >}}
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-primary">Medium button</button>
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<div class="bg-dark p-3 mt-3">
  <button type="button" class="btn btn-primary btn-inverse btn-sm">Small button</button>
  <button type="button" class="btn btn-primary btn-inverse">Medium button</button>
  <button type="button" class="btn btn-primary btn-inverse btn-lg">Large button</button>
</div>
{{< /example >}}

{{< example >}}
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary">Medium button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
<div class="bg-dark p-3 mt-3">
  <button type="button" class="btn btn-secondary btn-inverse btn-sm">Small button</button>
  <button type="button" class="btn btn-secondary btn-inverse">Medium button</button>
  <button type="button" class="btn btn-secondary btn-inverse btn-lg">Large button</button>
</div>
{{< /example >}}

{{< example >}}
<button type="button" class="btn btn-secondary btn-icon btn-sm">
  <span class="sr-only">Icon</span>
  <span class="icon icon-settings" aria-hidden="true"></span>
</button>
<button type="button" class="btn btn-secondary btn-icon">
  <span class="sr-only">Icon</span>
  <span class="icon icon-settings" aria-hidden="true"></span>
</button>
<button type="button" class="btn btn-secondary btn-icon btn-lg">
  <span class="sr-only">Icon</span>
  <span class="icon icon-settings" aria-hidden="true"></span>
</button>
<div class="bg-dark p-3 mt-3">
  <button type="button" class="btn btn-secondary btn-icon btn-inverse btn-sm">
    <span class="sr-only">Icon</span>
    <span class="icon icon-settings" aria-hidden="true"></span>
  </button>
  <button type="button" class="btn btn-secondary btn-icon btn-inverse">
    <span class="sr-only">Icon</span>
    <span class="icon icon-settings" aria-hidden="true"></span>
  </button>
  <button type="button" class="btn btn-secondary btn-icon btn-inverse btn-lg">
    <span class="sr-only">Icon</span>
    <span class="icon icon-settings" aria-hidden="true"></span>
  </button>
</div>
{{< /example >}}

<!-- Boosted mod: no btn-block -->

## Active state

Buttons will appear pressed when active with a darker background, darker border, and, when shadows are enabled, an inset shadow. **There's no need to add a class to `<button>`s as they use a pseudo-class**. However, you can still force the same active appearance with `.active` (and include the <code>aria-pressed="true"</code> attribute) should you need to replicate the state programmatically.

{{< example >}}
<a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
<div class="bg-dark p-3 mt-3">
  <a href="#" class="btn btn-primary btn-inverse btn-lg active" role="button" aria-pressed="true">Primary link</a>
  <a href="#" class="btn btn-secondary btn-inverse btn-lg active" role="button" aria-pressed="true">Link</a>
</div>
{{< /example >}}

## Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.

{{< example >}}
<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
<div class="bg-dark p-3 mt-3">
    <button type="button" class="btn btn-primary btn-inverse btn-lg" disabled>Primary button</button>
    <button type="button" class="btn btn-secondary btn-inverse btn-lg" disabled>Button</button>
</div>
{{< /example >}}

Disabled buttons using the `<a>` element behave a bit different:

- `<a>`s don't support the `disabled` attribute, so you must add the `.disabled` class to make it visually appear disabled.
- Some future-friendly styles are included to disable all `pointer-events` on anchor buttons. In browsers which support that property, you won't see the disabled cursor at all.
- Disabled buttons using `<a>` should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.
- Disabled buttons using `<a>` *should not* include the `href` attribute.

{{< example >}}
<a class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</a>
<a class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Link</a>
{{< /example >}}

### Link functionality caveat

To cover cases where you have to keep the `href` attribute on a disabled link, the `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s. Note that this CSS property is not yet standardized for HTML, but all modern browsers support it. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, in addition to `aria-disabled="true"`, also include a `tabindex="-1"` attribute on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether.

{{< example >}}
<a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
{{< /example >}}

## Button plugin

Do more with buttons. Control button states or create groups of buttons for more components like toolbars.

### Toggle states

Add `data-toggle="button"` to toggle a button's `active` state. If you're pre-toggling a button, you must manually add the `.active` class **and** `aria-pressed="true"` to the `<button>`.

{{< example >}}
<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">
  Single toggle
</button>
{{< /example >}}

### Checkbox and radio buttons

Boosted's `.button` styles can be applied to other elements, such as `<label>`s, to provide checkbox or radio style button toggling. Add `data-toggle="buttons"` to a `.btn-group` containing those modified buttons to enable their toggling behavior via JavaScript and add `.btn-group-toggle` to style the `<input>`s within your buttons. **Note that you can create single input-powered buttons or groups of them.**

The checked state for these buttons is **only updated via `click` event** on the button. If you use another method to update the input—e.g., with `<input type="reset">` or by manually applying the input's `checked` property—you'll need to toggle `.active` on the `<label>` manually.

Note that pre-checked buttons require you to manually add the `.active` class to the input's `<label>`.

<!-- Boosted mod: do not show checkbox toggle example -->

{{< example >}}
<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> Active
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off"> Radio
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option3" autocomplete="off"> Radio
  </label>
</div>
<div class="bg-dark p-3">
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <label class="btn btn-secondary btn-inverse active">
        <input type="radio" name="options-dark" id="option4" autocomplete="off" checked> Active
      </label>
      <label class="btn btn-secondary btn-inverse">
        <input type="radio" name="options-dark" id="option5" autocomplete="off"> Radio
      </label>
      <label class="btn btn-secondary btn-inverse">
        <input type="radio" name="options-dark" id="option6" autocomplete="off"> Radio
      </label>
    </div>
</div>
{{< /example >}}

<!-- Boosted mod: icons-only example -->

#### Toggle buttons with icon

{{< example >}}
<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary btn-icon active">
    <input type="radio" name="options-icons" id="option7" autocomplete="off" checked>
    <span class="sr-only">Active</span>
    <span class="icon icon-calendar-day" aria-hidden="true"></span>
  </label>
  <label class="btn btn-secondary btn-icon">
    <input type="radio" name="options-icons" id="option8" autocomplete="off">
    <span class="sr-only">Radio</span>
    <span class="icon icon-calendar-week" aria-hidden="true"></span>
  </label>
  <label class="btn btn-secondary btn-icon">
    <input type="radio" name="options-icons" id="option9" autocomplete="off">
    <span class="sr-only">Radio</span>
    <span class="icon icon-calendar-month" aria-hidden="true"></span>
  </label>
</div>
<div class="bg-dark p-3">
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <label class="btn btn-secondary btn-inverse btn-icon active">
        <input type="radio" name="options-dark-icons" id="option10" autocomplete="off" checked>
        <span class="sr-only">Active</span>
        <span class="icon icon-calendar-day" aria-hidden="true"></span>
      </label>
      <label class="btn btn-secondary btn-inverse btn-icon">
        <input type="radio" name="options-dark-icons" id="option11" autocomplete="off">
        <span class="sr-only">Radio</span>
        <span class="icon icon-calendar-week" aria-hidden="true"></span>
      </label>
      <label class="btn btn-secondary btn-inverse btn-icon">
        <input type="radio" name="options-dark-icons" id="option12" autocomplete="off">
        <span class="sr-only">Radio</span>
        <span class="icon icon-calendar-month" aria-hidden="true"></span>
      </label>
    </div>
</div>
{{< /example >}}

<!-- End mod -->

### Methods

| Method | Description |
| --- | --- |
| `$().button('toggle')` | Toggles push state. Gives the button the appearance that it has been activated. |
| `$().button('dispose')` | Destroys an element's button. |
