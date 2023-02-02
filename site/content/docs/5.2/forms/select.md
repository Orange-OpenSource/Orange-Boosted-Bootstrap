---
layout: docs
title: Select
description: Customize the native `<select>`s with custom CSS that changes the element's initial appearance.
group: forms
aliases:
  - "/docs/forms/select/"
toc: true
---

## Default

Custom `<select>` menus need only a custom class, `.form-select` to trigger the custom styles. Custom styles are limited to the `<select>`'s initial appearance and cannot modify the `<option>`s due to browser limitations.

{{< example >}}
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{{< /example >}}

## Sizing

You may also choose from small and large custom selects to match our similarly sized text inputs.

{{< ods-incompatibility-alert >}}
These select sizes variants, with a **height different than 40px**, should not be used because they do not respect the Orange Design System specifications.

Please refer to the [Forms](https://system.design.orange.com/0c1af118d/p/88ab5b-forms/b/599459) guidelines and to the [Pages](https://system.design.orange.com/0c1af118d/p/20500e-form/b/16bb53) form examples on  the Orange Design System website.
{{< /ods-incompatibility-alert >}}

{{< example >}}
<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{{< /example >}}

The `multiple` attribute is also supported:

{{< example >}}
<select class="form-select" multiple aria-label="multiple select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{{< /example >}}

As is the `size` attribute:

{{< example >}}
<select class="form-select" size="3" aria-label="size 3 select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{{< /example >}}

## Disabled

Add the `disabled` boolean attribute on a select to give it a grayed out appearance and remove pointer events.

{{< example >}}
<select class="form-select" aria-label="Disabled select example" disabled>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="form-select-variables" file="scss/_variables.scss" >}}
