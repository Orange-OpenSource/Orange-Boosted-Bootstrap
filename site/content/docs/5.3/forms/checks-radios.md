---
layout: docs
title: Checks and radios
description: Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.
group: forms
aliases:
  - "/docs/forms/checks/"
  - "/docs/5.3/forms/checks/"
  - "/docs/forms/checks-radios/"
toc: true
---

## Approach

Browser default checkboxes and radios are replaced with the help of `.form-check`, a series of classes for both input types that improves the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Structurally, our `<input>`s and `<label>`s are sibling elements as opposed to an `<input>` within a `<label>`. This is slightly more verbose as you must specify `id` and `for` attributes to relate the `<input>` and `<label>`. We use the sibling selector (`~`) for all our `<input>` states, like `:checked` or `:disabled`. When combined with the `.form-check-label` class, we can easily style the text for each item based on the `<input>`'s state.

Our checks use custom Boosted icons to indicate checked or indeterminate states.

## Checks

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
{{< /example >}}

### Indeterminate

Checkboxes can utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).

{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
  <label class="form-check-label" for="flexCheckIndeterminate">
    Indeterminate checkbox
  </label>
</div>
{{< /example >}}

### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.

{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminateDisabled" disabled>
  <label class="form-check-label" for="flexCheckIndeterminateDisabled">
    Disabled indeterminate checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
  <label class="form-check-label" for="flexCheckDisabled">
    Disabled checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexCheckCheckedDisabled">
    Disabled checked checkbox
  </label>
</div>
{{< /example >}}

## Radios

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>
{{< /example >}}

### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
  <label class="form-check-label" for="flexRadioDisabled">
    Disabled radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexRadioCheckedDisabled">
    Disabled checked radio
  </label>
</div>
{{< /example >}}

## Switches

A switch has the markup of a custom checkbox but uses the `.form-switch` class to render a toggle switch. Consider using `role="switch"` to more accurately convey the nature of the control to assistive technologies that support this role. In older assistive technologies, it will simply be announced as a regular checkbox as a fallback. Switches also support the `disabled` attribute.

{{< example >}}
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled>
  <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div>
{{< /example >}}

## Default (stacked)

By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with `.form-check`.

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

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div>
{{< /example >}}

## Inline

Group checkboxes or radios on the same horizontal row by adding `.form-check-inline` to any `.form-check`.

{{< example >}}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
{{< /example >}}

{{< example >}}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>
{{< /example >}}

## Reverse

Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.

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

<div class="form-check form-switch form-check-reverse">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse">
  <label class="form-check-label" for="flexSwitchCheckReverse">Reverse switch checkbox input</label>
</div>
{{< /example >}}

## Without labels

Omit the wrapping `.form-check` for checkboxes and radios that have no label text. Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`). See the [forms overview accessibility]({{< docsref "/forms/overview#accessibility" >}}) section for details.

{{< example >}}
<div>
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>

<div>
  <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
</div>
{{< /example >}}

## Toggle buttons

Create button-like checkboxes and radio buttons by using `.btn` styles rather than `.form-check-label` on the `<label>` elements. These toggle buttons can further be grouped in a [button group]({{< docsref "/components/button-group" >}}) if needed.

### Checkbox toggle buttons

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
<label class="btn btn-toggle" for="btn-check">Single toggle</label>
{{< /example >}}

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off">
<label class="btn btn-toggle" for="btn-check-2">Checked</label>
{{< /example >}}

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled>
<label class="btn btn-toggle" for="btn-check-3">Disabled</label>
{{< /example >}}

{{< callout info >}}
Visually, these checkbox toggle buttons are identical to the [button plugin toggle buttons]({{< docsref "/components/buttons#button-plugin" >}}). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas the button plugin toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.
{{< /callout >}}

### Radio toggle buttons

<!-- Boosted mod: our radio toggle buttons need a `.btn-group[role="group"]` wrapper. -->

Boosted requires to group its radio toggle buttons in a [button group]({{< docsref "/components/button-group" >}}) to display properly.

{{< example >}}
<div class="btn-group" role="group">
  <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
  <label class="btn btn-toggle" for="option1">Checked</label>

  <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
  <label class="btn btn-toggle" for="option2">Radio</label>

  <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled>
  <label class="btn btn-toggle" for="option3">Disabled</label>

  <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
  <label class="btn btn-toggle" for="option4">Radio</label>
</div>
{{< /example >}}

<!-- Boosted mod: no .btn-outline-* -->

<!-- Boosted mod: toggle buttons with icon, no-outline -->
#### With icon

Add [`.btn-icon`]({{< docsref "/components/buttons" >}}#icon-only) with an [embedded icon]({{< docsref "/extend/icons" >}}) to get consistent squared icon buttons working as toggle.

{{< example >}}
<div class="btn-group" role="group">
  <input type="radio" class="btn-check" name="icons" id="option5" autocomplete="off" checked>
  <label class="btn btn-icon btn-toggle" for="option5">
    <svg width="1.25rem" height="1.25rem" fill="currentColor">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#day"/>
    </svg>
    <span class="visually-hidden">Day</span>
  </label>
  <input type="radio" class="btn-check" name="icons" id="option6" autocomplete="off">
  <label class="btn btn-icon btn-toggle" for="option6">
    <svg width="1.25rem" height="1.25rem" fill="currentColor">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#week"/>
    </svg>
    <span class="visually-hidden">Week</span>
  </label>
  <input type="radio" class="btn-check" name="icons" id="option7" autocomplete="off">
  <label class="btn btn-icon btn-toggle" for="option7">
    <svg width="1.25rem" height="1.25rem" fill="currentColor">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#month"/>
    </svg>
    <span class="visually-hidden">Month</span>
  </label>
</div>
{{< /example >}}

Drop borders using `.btn-no-outline`, too.

{{< example >}}
<div class="btn-group" role="group">
  <input type="radio" class="btn-check" name="iconsNoOutline" id="option8" autocomplete="off" checked>
  <label class="btn btn-icon btn-no-outline" for="option8">
    <svg width="1.25rem" height="1.25rem" fill="currentColor">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#day"/>
    </svg>
    <span class="visually-hidden">Day</span>
  </label>
  <input type="radio" class="btn-check" name="iconsNoOutline" id="option9" autocomplete="off">
  <label class="btn btn-icon btn-no-outline" for="option9">
    <svg width="1.25rem" height="1.25rem" fill="currentColor">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#week"/>
    </svg>
    <span class="visually-hidden">Week</span>
  </label>
  <input type="radio" class="btn-check" name="iconsNoOutline" id="option10" autocomplete="off">
  <label class="btn btn-icon btn-no-outline" for="option10">
    <svg width="1.25rem" height="1.25rem" fill="currentColor">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#month"/>
    </svg>
    <span class="visually-hidden">Month</span>
  </label>
</div>
{{< /example >}}

<!-- End mod -->

<!-- Boosted mod: star rating -->

## Star rating

{{< added-in "5.2.0" >}}

Star rating system is built on top of radios. Simply add `.star-rating` to a `<fieldset>` element to use predefined glyphs and compose your star rating system with as much stars as needed.

{{< example >}}
<form>
  <fieldset class="star-rating">
    <legend class="visually-hidden">Results relevance</legend>

    <input type="radio" id="terrible" name="rating" value="1" class="visually-hidden">
    <label for="terrible" title="Terrible"><span class="visually-hidden">Terrible</span></label>

    <input type="radio" id="bad" name="rating" value="2" class="visually-hidden">
    <label for="bad" title="Bad"><span class="visually-hidden">Bad</span></label>

    <input type="radio" id="mixed" name="rating" value="3" class="visually-hidden">
    <label for="mixed" title="Mixed"><span class="visually-hidden">Mixed</span></label>

    <input type="radio" id="good" name="rating" value="4" class="visually-hidden" checked>
    <label for="good" title="Good"><span class="visually-hidden">Good</span></label>

    <input type="radio" id="excellent" name="rating" value="5" class="visually-hidden">
    <label for="excellent" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset>
</form>
{{< /example >}}

### Sizes

Star ratings come with a smaller variant: `.star-rating-sm`.

{{< example >}}
<form>
  <fieldset class="star-rating star-rating-sm">
    <legend class="visually-hidden">Results relevance</legend>

    <input type="radio" id="terrible2" name="rating" value="1" class="visually-hidden">
    <label for="terrible2" title="Terrible"><span class="visually-hidden">Terrible</span></label>

    <input type="radio" id="bad2" name="rating" value="2" class="visually-hidden">
    <label for="bad2" title="Bad"><span class="visually-hidden">Bad</span></label>

    <input type="radio" id="mixed2" name="rating" value="3" class="visually-hidden">
    <label for="mixed2" title="Mixed"><span class="visually-hidden">Mixed</span></label>

    <input type="radio" id="good2" name="rating" value="4" class="visually-hidden" checked>
    <label for="good2" title="Good"><span class="visually-hidden">Good</span></label>

    <input type="radio" id="excellent2" name="rating" value="5" class="visually-hidden">
    <label for="excellent2" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset>
</form>
{{< /example >}}

### Dark variant

{{< deprecated-in "5.3.3" >}}

{{< callout warning >}}
**Heads up!** Dark variants for components are deprecated in Boosted v5.3.3. They are replaced by our contextual dark mode.

Add `data-bs-theme="dark"` to the `.star-rating` or any ancestor element to enable a component-specific color mode. [Learn more about our color modes]({{< docsref "/customize/color-modes" >}}).
{{< /callout >}}

### Readonly

Make star ratings readable but non-editable by using `<span>`s instead of `<input>` elements.

{{< example >}}
<div class="star-rating">
  <p class="visually-hidden">Star rating: rated 3 out of 5</p>

  <div aria-hidden="true">
    <span></span>
    <span></span>
    <span class="checked"></span>
    <span></span>
    <span></span>
  </div>
</div>
{{< /example >}}

### Disabled

Make star ratings look inactive inside or outside a form by adding the `disabled` boolean attribute to the `<fieldset>` element and the `checked` boolean attribute to any `<input>` element.

{{< example >}}
<form>
  <fieldset class="star-rating" disabled aria-hidden="true">
    <legend class="visually-hidden">Disabled star rating</legend>

    <input type="radio" id="terrible4" name="rating" value="1" class="visually-hidden">
    <label for="terrible4" title="Terrible"><span class="visually-hidden">Terrible</span></label>

    <input type="radio" id="bad4" name="rating" value="2" class="visually-hidden">
    <label for="bad4" title="Bad"><span class="visually-hidden">Bad</span></label>

    <input type="radio" id="mixed4" name="rating" value="3" class="visually-hidden" checked>
    <label for="mixed4" title="Mixed"><span class="visually-hidden">Mixed</span></label>

    <input type="radio" id="good4" name="rating" value="4" class="visually-hidden">
    <label for="good4" title="Good"><span class="visually-hidden">Good</span></label>

    <input type="radio" id="excellent4" name="rating" value="5" class="visually-hidden">
    <label for="excellent4" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset>
  <p class="visually-hidden">Disabled star rating: rated 3 out of 5</p>
</form>
{{< /example >}}

<!-- End mod -->

## CSS

### Sass variables

Variables for checks:

{{< scss-docs name="form-check-variables" file="scss/_variables.scss" >}}

Variables for switches:

{{< scss-docs name="form-switch-variables" file="scss/_variables.scss" >}}

### Sass mixins

{{< deprecated-in "5.3.2" >}}

{{< scss-docs name="form-star-rating-mixin" file="scss/mixins/_star-rating.scss" >}}
