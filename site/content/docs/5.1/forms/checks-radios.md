---
layout: docs
title: Checks and radios
description: Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.
group: forms
aliases: "/docs/5.1/forms/checks/"
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

{{< example class="bd-example-indeterminate">}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
  <label class="form-check-label" for="flexCheckIndeterminate">
    Indeterminate checkbox
  </label>
</div>
{{< /example >}}

### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.

{{< example >}}
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

<!-- Boosted mod: don't promote "without label" -->

## Toggle buttons

Create button-like checkboxes and radio buttons by using `.btn` styles rather than `.form-check-label` on the `<label>` elements. These toggle buttons can further be grouped in a [button group]({{< docsref "/components/button-group" >}}) if needed.

### Checkbox toggle buttons

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
<label class="btn btn-primary" for="btn-check">Single toggle</label>
{{< /example >}}

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off">
<label class="btn btn-primary" for="btn-check-2">Checked</label>
{{< /example >}}

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled>
<label class="btn btn-primary" for="btn-check-3">Disabled</label>
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
  <label class="btn btn-secondary" for="option1">Checked</label>

  <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
  <label class="btn btn-secondary" for="option2">Radio</label>

  <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled>
  <label class="btn btn-secondary" for="option3">Disabled</label>

  <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
  <label class="btn btn-secondary" for="option4">Radio</label>
</div>
{{< /example >}}

<!-- Boosted mod: no .btn-outline-* -->

<!-- Boosted mod: toggle buttons with icon, no-outline -->
#### With icon

Add [`.btn-icon`]({{< docsref "/components/buttons" >}}#icon-only) with an [embedded icon]({{< docsref "/extend/icons" >}}) to get consistent squared icon buttons working as toggle.

{{< example >}}
<div class="btn-group" role="group">
  <input type="radio" class="btn-check" name="icons" id="option5" autocomplete="off" checked>
  <label class="btn btn-icon" for="option5">
    <svg width="1.25rem" height="1.25rem" fill="currentColor">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#day"/>
    </svg>
    <span class="visually-hidden">Day</span>
  </label>
  <input type="radio" class="btn-check" name="icons" id="option6" autocomplete="off">
  <label class="btn btn-icon" for="option6">
    <svg width="1.25rem" height="1.25rem" fill="currentColor">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#week"/>
    </svg>
    <span class="visually-hidden">Week</span>
  </label>
  <input type="radio" class="btn-check" name="icons" id="option7" autocomplete="off">
  <label class="btn btn-icon" for="option7">
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
  <input type="radio" class="btn-check" name="icons" id="option8" autocomplete="off" checked>
  <label class="btn btn-icon btn-no-outline" for="option8">
    <svg width="1.25rem" height="1.25rem" fill="currentColor">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#day"/>
    </svg>
    <span class="visually-hidden">Day</span>
  </label>
  <input type="radio" class="btn-check" name="icons" id="option9" autocomplete="off">
  <label class="btn btn-icon btn-no-outline" for="option9">
    <svg width="1.25rem" height="1.25rem" fill="currentColor">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#week"/>
    </svg>
    <span class="visually-hidden">Week</span>
  </label>
  <input type="radio" class="btn-check" name="icons" id="option10" autocomplete="off">
  <label class="btn btn-icon btn-no-outline" for="option10">
    <svg width="1.25rem" height="1.25rem" fill="currentColor">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#month"/>
    </svg>
    <span class="visually-hidden">Month</span>
  </label>
</div>
{{< /example >}}

<!-- Boosted mod: star rating -->

## Star rating

Here is an example for star rating. Simply add `.star-rating` to a `<fieldset>`, then copy the following pattern into the tags in order to have a complete star rating system. Change the `xlink:href` value to get the svg you want. You can also add as much stars as you want. The default star size is 25px (based on default font-size = 16px).

{{< example >}}
<form>
<fieldset class="star-rating w-125">
  <legend class="visually-hidden">Results relevance</legend>

  <input type="radio" id="terrible" name="rating" value="1" class="visually-hidden" />
  <label for="terrible" title="Terrible">
    <svg aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="bad" name="rating" value="2" class="visually-hidden" />
  <label for="bad" title="Bad">
    <svg aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="mixed" name="rating" value="3" class="visually-hidden" />
  <label for="mixed" title="Mixed">
    <svg aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="good" name="rating" value="4" class="visually-hidden" />
  <label for="good" title="Good">
    <svg aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="excellent" name="rating" value="5" class="visually-hidden" checked="" />
  <label for="excellent" title="Excellent">
    <svg aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>
</fieldset>
</form>
{{< /example >}}

You can reduce the size of stars to 20px (also based on default font-size) by adding `.star-rating-sm`.

{{< example >}}
<form>
<fieldset class="star-rating star-rating-sm">
  <legend class="visually-hidden">Results relevance</legend>

  <input type="radio" id="terrible2" name="rating" value="1" class="visually-hidden" />
  <label for="terrible2" title="Terrible">
    <svg aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="bad2" name="rating" value="2" class="visually-hidden" />
  <label for="bad2" title="Bad">
    <svg aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="mixed2" name="rating" value="3" class="visually-hidden" />
  <label for="mixed2" title="Mixed">
    <svg aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="good2" name="rating" value="4" class="visually-hidden" />
  <label for="good2" title="Good">
    <svg aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="excellent2" name="rating" value="5" class="visually-hidden" checked="" />
  <label for="excellent2" title="Excellent">
    <svg aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>
</fieldset>
</form>
{{< /example >}}

Here is the dark version of the component. Just add `.star-rating-dark`.

{{< example class="bg-dark" >}}
<form>
<fieldset class="star-rating star-rating-dark">
  <legend class="visually-hidden">Results relevance</legend>

  <input type="radio" id="terrible3" name="rating" value="1" class="visually-hidden" />
  <label for="terrible3" title="Terrible">
    <svg aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="bad3" name="rating" value="2" class="visually-hidden" />
  <label for="bad3" title="Bad">
    <svg aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="mixed3" name="rating" value="3" class="visually-hidden" />
  <label for="mixed3" title="Mixed">
    <svg aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="good3" name="rating" value="4" class="visually-hidden" />
  <label for="good3" title="Good">
    <svg aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="excellent3" name="rating" value="5" class="visually-hidden" checked="" />
  <label for="excellent3" title="Excellent">
    <svg aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>
</fieldset>
</form>
{{< /example >}}

To rate outside a form, for example in a card to rate a product, add the booleans `disabled` on the fieldset and `checked` to the input you want to be selected.

{{< example >}}
<fieldset class="star-rating" disabled>
  <input type="radio" id="terrible4" name="rating" value="1" class="visually-hidden" />
  <label for="terrible4" title="Terrible">
    <svg><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="bad4" name="rating" value="2" class="visually-hidden" />
  <label for="bad4" title="Bad">
    <svg><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="mixed4" name="rating" value="3" class="visually-hidden" checked="" />
  <label for="mixed4" title="Mixed">
    <svg><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="good4" name="rating" value="4" class="visually-hidden" />
  <label for="good4" title="Good">
    <svg><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>

  <input type="radio" id="excellent4" name="rating" value="5" class="visually-hidden" />
  <label for="excellent4" title="Excellent">
    <svg><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#star" /></svg>
  </label>
</fieldset>
<span class="visually-hidden">3 stars</span>
{{< /example >}}

<!-- End mod -->

## Sass

### Variables

{{< scss-docs name="form-check-variables" file="scss/_variables.scss" >}}
