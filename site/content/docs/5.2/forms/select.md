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

<!-- Boosted mod : design callout -->
{{< ods-incompatibility-alert >}}
The browser generated appearance of the `<select>` dropdown menu does not respect the Orange Design System and cannot be changed due to browser limitations.

For the correct appearance, refer to the Boosted [Dropdowns]({{< docsref "/components/dropdowns" >}}) component. Be aware that this Dropdowns component, because using an `<ul>` tag, can not be a replacement here for technical and accessibility reasons.
{{< /ods-incompatibility-alert >}}

{{< example >}}
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{{< /example >}}

## Sizing

You may also use large custom selects to match our similarly sized text inputs.

<!-- Boosted mod : design callout -->
{{< ods-incompatibility-alert >}}
The browser generated appearance of the `<select>` dropdown menu does not respect the Orange Design System and cannot be changed due to browser limitations.

For the correct appearance, refer to the Boosted [Dropdowns]({{< docsref "/components/dropdowns" >}}) component. Be aware that this Dropdowns component, because using an `<ul>` tag, can not be a replacement here for technical and accessibility reasons.
{{< /ods-incompatibility-alert >}}

<!-- Boosted mod: no .form-select-sm -->
{{< example >}}
<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
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

<!-- Boosted mod : design callout -->
{{< ods-incompatibility-alert >}}
This disabled `<select>` element can not be used because it does no respect the Orange Design System specifications.

For the correct design, please refer to [Dropdowns states](https://system.design.orange.com/0c1af118d/p/910b9b-dropdown/b/04c480) on the Orange Design System website.
{{< /ods-incompatibility-alert >}}

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
