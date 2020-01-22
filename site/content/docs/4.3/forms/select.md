---
layout: docs
title: Select
description: Customize the native `<select>`s with custom CSS that changes the element's initial appearance.
group: forms
toc: true
---

## Default

Custom `<select>` menus need only a custom class, `.form-select` to trigger the custom styles. Custom styles are limited to the `<select>`'s initial appearance and cannot modify the `<option>`s due to browser limitations.

{{< example >}}
<form>
  <label for="custom-select">Custom select</label>
  <select class="form-select" id="custom-select">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</form>
{{< /example >}}

## Sizing

You may also choose from small and large custom selects to match our similarly sized text inputs.

{{< example >}}
<form>
  <div class="mb-3">
    <label for="select-lg">Large select</label>
    <select class="form-select form-select-lg mb-3" id="select-lg">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="mb-3">
    <label for="select-sm">Small select</label>
    <select class="form-select form-select-sm" id="select-sm">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</form>
{{< /example >}}

The `multiple` attribute is also supported:

{{< example >}}
<form>
  <label for="multiple-select">Multiple select</label>
  <select class="form-select" id="multiple-select" multiple>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</form>
{{< /example >}}

As is the `size` attribute:

{{< example >}}
<form>
  <label for="sized-select">Sized select</label>
  <select class="form-select" id="sized-select" size="3">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</form>
{{< /example >}}
