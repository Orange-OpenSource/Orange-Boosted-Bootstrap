---
layout: docs
title: Button group
description: Group a series of buttons together on a single line or stack them in a vertical column.
group: components
aliases:
  - "/docs/components/button-group/"
toc: true
---

## Basic example

Wrap a series of buttons with `.btn` in `.btn-group`.

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-outline-secondary">Left</button>
  <button type="button" class="btn btn-outline-secondary">Middle</button>
  <button type="button" class="btn btn-outline-secondary">Right</button>
</div>
{{< /example >}}

{{< callout info >}}
Button groups require an appropriate `role` attribute and explicit label to ensure assistive technologies like screen readers identify buttons as grouped and announce them. Use `role="group"` for button groups or `role="toolbar"` for button toolbars. Then use `aria-label` or `aria-labelledby` to label them.
{{< /callout >}}

These classes can also be added to groups of links, as an alternative to the [`.nav` navigation components]({{< docsref "/components/navs-tabs" >}}).

{{< example >}}
<div class="btn-group" role="group">
  <a href="#" class="btn btn-outline-secondary active" aria-current="page">Active link</a>
  <a href="#" class="btn btn-outline-secondary">Link</a>
  <a href="#" class="btn btn-outline-secondary">Link</a>
</div>
{{< /example >}}

## Mixed styles

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These variants **using and mixing colored button backgrounds** should not be used because they do not respect the Orange Design System specifications. In button groups, you should only use the button variant that uses `.btn .btn-outline-secondary`.

Please refer to our [Buttons secondary variant component]({{< docsref "/components/buttons#examples" >}}). You can also refer to the [Buttons: standard guidelines](https://system.design.orange.com/0c1af118d/p/278ebc-buttons-standard/b/539dce) on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">Left</button>
  <button type="button" class="btn btn-warning">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>
{{< /example >}}
</details>

## Outlined styles

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-secondary">Left</button>
  <button type="button" class="btn btn-outline-secondary">Middle</button>
  <button type="button" class="btn btn-outline-secondary">Right</button>
</div>
{{< /example >}}

## Checkbox and radio button groups

Combine button-like checkbox and radio [toggle buttons]({{< docsref "/forms/checks-radios" >}}) into a seamless looking button group.

<details class="mb-3">
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
This **checkbox** variant should not be used because it does not respect the Orange Design System specifications.

From the Orange Design System point of view, checkboxes should be represented like in our [Checks component]({{< docsref "/forms/checks-radios#checks" >}}). You can also refer to the [Checkbox guidelines](https://system.design.orange.com/0c1af118d/p/88ab5b-forms/b/599459/i/48901789) on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
  <label class="btn btn-toggle" for="btncheck1">Checkbox 1</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
  <label class="btn btn-toggle" for="btncheck2">Checkbox 2</label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
  <label class="btn btn-toggle" for="btncheck3">Checkbox 3</label>
</div>
{{< /example >}}
</details>

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-toggle" for="btnradio1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-toggle" for="btnradio2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
  <label class="btn btn-toggle" for="btnradio3">Radio 3</label>
</div>
{{< /example >}}

## Button toolbar

Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These variants should not be used because they do not respect the Orange Design System specifications.
{{< /design-callout-alert >}}

{{< example >}}
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
    <button type="button" class="btn btn-primary">4</button>
  </div>
  <div class="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-outline-secondary">5</button>
    <button type="button" class="btn btn-outline-secondary">6</button>
    <button type="button" class="btn btn-outline-secondary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-secondary">8</button>
  </div>
</div>
{{< /example >}}

Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you'll likely need some utilities though to space things properly.

{{< example >}}
<div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-outline-secondary">1</button>
    <button type="button" class="btn btn-outline-secondary">2</button>
    <button type="button" class="btn btn-outline-secondary">3</button>
    <button type="button" class="btn btn-outline-secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-text" id="btnGroupAddon">@</div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon">
  </div>
</div>

<div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group">
    <button type="button" class="btn btn-outline-secondary">1</button>
    <button type="button" class="btn btn-outline-secondary">2</button>
    <button type="button" class="btn btn-outline-secondary">3</button>
    <button type="button" class="btn btn-outline-secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-text" id="btnGroupAddon2">@</div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2">
  </div>
</div>
{{< /example >}}
</details>

## Sizing

Instead of applying button sizing classes to every button in a group, just add `.btn-group-*` to each `.btn-group`, including each one when nesting multiple groups.

{{< example >}}
<div class="btn-group" role="group" aria-label="Default button group">
  <button type="button" class="btn btn-outline-secondary">Left</button>
  <button type="button" class="btn btn-outline-secondary">Middle</button>
  <button type="button" class="btn btn-outline-secondary">Right</button>
</div>
{{< /example >}}

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
The **first size variant (50px height) and the last one (30px height)** should not be used because they do not respect the Orange Design System specifications.

Please refer to the [Toggle buttons guidelines](https://system.design.orange.com/0c1af118d/p/59c349-toggle-buttons/b/91bf23) on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
<div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
  <button type="button" class="btn btn-outline-secondary">Left</button>
  <button type="button" class="btn btn-outline-secondary">Middle</button>
  <button type="button" class="btn btn-outline-secondary">Right</button>
</div>
<br>
<div class="btn-group" role="group" aria-label="Default button group">
  <button type="button" class="btn btn-outline-secondary">Left</button>
  <button type="button" class="btn btn-outline-secondary">Middle</button>
  <button type="button" class="btn btn-outline-secondary">Right</button>
</div>
<br>
<div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-secondary">Left</button>
  <button type="button" class="btn btn-outline-secondary">Middle</button>
  <button type="button" class="btn btn-outline-secondary">Right</button>
</div>
{{< /example >}}
</details>

## Nesting

Place a `.btn-group` within another `.btn-group` when you want dropdown menus mixed with a series of buttons.

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These variants should not be used because they do not respect the Orange Design System specifications.
{{< /design-callout-alert >}}

{{< example >}}
<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="btn btn-outline-secondary">1</button>
  <button type="button" class="btn btn-outline-secondary">2</button>

  <div class="btn-group" role="group">
    <button type="button" class="btn btn-outline-secondary">Split button</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
{{< /example >}}
</details>

## Vertical variation

Make a set of buttons appear vertically stacked rather than horizontally.

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These 3 vertical variants should not be used because they do not respect the Orange Design System specifications.
{{< /design-callout-alert >}}

{{< example >}}
<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
</div>
{{< /example >}}

{{< example >}}
<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <div class="btn-group dropstart" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <div class="btn-group dropend" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <div class="btn-group dropup" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked>
  <label class="btn btn-outline-danger" for="vbtn-radio1">Radio 1</label>
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off">
  <label class="btn btn-outline-danger" for="vbtn-radio2">Radio 2</label>
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off">
  <label class="btn btn-outline-danger" for="vbtn-radio3">Radio 3</label>
</div>
{{< /example >}}
</details>
