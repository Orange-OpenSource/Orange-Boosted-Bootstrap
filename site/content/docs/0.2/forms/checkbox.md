---
layout: docs
title: Checkbox
description: Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.
group: forms
aliases:
  - "/docs/forms/checks/"
  - "/docs/0.2/forms/checks/"
  - "/docs/forms/checks-radios/"
toc: true
---

<!-- TODO: Remove this part before merging -->

{{< example >}}
<input class="form-check-input" type="checkbox" value="" id="checkDefault-2">
<label for="checkDefault-2">Not empty</label>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault-1">
  <label for="checkDefault-1">Not empty</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault0">
  <label class="form-check-label" for="checkDefault0">Not empty</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault1">
  <label class="form-check-label" for="checkDefault1">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <label class="form-check-label ms-auto" for="checkDefault2">
    Default checkbox
  </label>
  <input class="form-check-input" type="checkbox" value="" id="checkDefault2">
</div>

<div class="checkbox-item">
  <div class="checkbox-item-indicator-container">
    <input class="checkbox-indicator" type="checkbox" value="" id="checkDefault3">
  </div>
  <div class="checkbox-item-text">
    <label class="checkbox-label" for="checkDefault3">Label</label>
    <span class="checkbox-helper">Helper text</span>
  </div>
  <div class="checkbox-item-icon-container">
    <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
  </div>
</div>

<div class="checkbox-item">
  <div class="checkbox-item-indicator-container">
    <input class="checkbox-indicator" type="checkbox" value="" id="checkDefault4">
  </div>
  <div class="checkbox-item-text">
    <label class="checkbox-label" for="checkDefault4">zeofn ez eof izeof ,zefo kz,eofk ,zeof k,zeof k,zoef k,zoe fk,zoe fk,zoef k,zoe fk,zoek ,fzok e,fozk ,efok ,zeof k,zeo fk,zeofk ,zoekf,zoe kf,zk, zeofn ez eof izeof ,zefo kz,eofk ,zeof k,zeof k,zoef k,zoe fk,zoe fk,zoef k,zoe fk,zoek ,fzok e,fozk ,efok ,zeof k,zeo fk,zeofk ,zoekf,zoe kf,zk, zeofn ez eof izeof ,zefo kz,eofk ,zeof k,zeof k,zoef k,zoe fk,zoe fk,zoef k,zoe fk,zoek ,fzok e,fozk ,efok ,zeof k,zeo fk,zeofk ,zoekf,zoe kf,zk,</label>
    <span class="checkbox-helper">Helper text</span>
  </div>
  <div class="checkbox-item-icon-container">
    <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
  </div>
</div>

<label class="checkbox-standalone">
  <input class="checkbox-indicator" type="checkbox" value="">
  <span class="visually-hidden">Label</span>
</label>
{{< /example >}}

## Approach

Browser default checkboxes and radios are replaced with the help of `.form-check`, a series of classes for both input types that improve the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Structurally, our `<input>`s and `<label>`s are sibling elements as opposed to an `<input>` within a `<label>`. This is slightly more verbose as you must specify `id` and `for` attributes to relate the `<input>` and `<label>`. We use the future friendly child check selector (`:has`) for all our `<input>` states, like `:checked` or `:disabled`. When combined with the `.form-check-label` class, we can easily style the text for each item based on the `<input>`'s state.

`.form-check-label` extend their clickable area until a `position: relative;` is found in the page hierarchy. It permits to have a more consistent approach, whatever the DOM is. Nonetheless, it means that none of the elements next to the label should be interactive.

`.form-check-input` are based on `svg`s that are controlled by design tokens directly.

Our checks use custom OUDS icons to indicate checked or indeterminate states.

## Checks

<!-- TODO: Add control-item using checkbox -->

{{< bootstrap-compatibility false >}}
{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault">
  <label class="form-check-label" for="checkDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkChecked" checked>
  <label class="form-check-label" for="checkChecked">
    Checked checkbox
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

### Indeterminate

<!-- TODO: Add control-item using checkbox -->

{{< bootstrap-compatibility false >}}
{{< markdown >}}
Checkboxes can utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).
{{< /markdown >}}

{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkIndeterminate">
  <label class="form-check-label" for="checkIndeterminate">
    Indeterminate checkbox
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

### Disabled

<!-- TODO: Add control-item using checkbox -->

{{< bootstrap-compatibility false >}}
{{< markdown >}}
Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.
{{< /markdown >}}

{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkIndeterminateDisabled" disabled>
  <label class="form-check-label" for="checkIndeterminateDisabled">
    Disabled indeterminate checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDisabled" disabled>
  <label class="form-check-label" for="checkDisabled">
    Disabled checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkCheckedDisabled" checked disabled>
  <label class="form-check-label" for="checkCheckedDisabled">
    Disabled checked checkbox
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## Default (stacked)

<!-- TODO: Add control-item using checkbox -->

{{< bootstrap-compatibility false >}}
{{< markdown >}}
By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with `.form-check`.
{{< /markdown >}}

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
  <label class="form-check-label" for="defaultCheck2">
    Disabled checkbox
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

<!-- OUDS mod: no Inline -->

## Reverse

{{< bootstrap-compatibility false >}}
{{< markdown >}}
Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.
{{< /markdown >}}

{{< example >}}
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck1">
  <label class="form-check-label" for="reverseCheck1">
    Reverse checkbox
  </label>
</div>
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck2" disabled>
  <label class="form-check-label" for="reverseCheck2">
    Disabled reverse checkbox
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## Without labels

Omit the wrapping `.form-check` for checkboxes and radios that have no label text. Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`). See the [forms overview accessibility]({{< docsref "/forms/overview#accessibility" >}}) section for details.

{{< callout warning >}}
They are commonly used to build custom component, and shouldn't be used alone. You might need to complete the behavior of this by adding a gray background on `:hover`, `:focus-visible` and `:active`, and handling the `:focus-visible` by yourself.
{{< /callout >}}

{{< example >}}
<div>
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>
{{< /example >}}
