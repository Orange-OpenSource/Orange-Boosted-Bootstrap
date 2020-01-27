---
layout: docs
title: Form controls
description: Give textual form controls like `<input>`s and `<textarea>`s an upgrade with custom styles, sizing, focus states, and more.
group: forms
toc: true
---

## Example

{{< example >}}
<form>
  <div class="mb-3">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
{{< /example >}}

## Sizing

Set heights using classes like `.form-control-lg` and `.form-control-sm`.

{{< example >}}
<form>
  <div class="mb-3">
    <label for="form-control-lg">Large input</label>
    <input class="form-control form-control-lg" type="text" id="form-control-lg" placeholder=".form-control-lg">
  </div>
  <div class="mb-3">
    <label for="form-control">Default input</label>
    <input class="form-control" type="text" id="form-control" placeholder="Default input">
  </div>
  <div class="mb-3">
    <label for="form-control-sm">Small input</label>
    <input class="form-control form-control-sm" type="text" id="form-control-sm" placeholder=".form-control-sm">
  </div>
</form>
{{< /example >}}

## Readonly

Add the `readonly` boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.

{{< example >}}
<form>
  <label for="form-control-readonly">Readonly input</label>
  <input class="form-control" type="text" id="form-control-readonly" placeholder="Readonly input here…" readonly>
</form>
{{< /example >}}

## Readonly plain text

If you want to have `<input readonly>` elements in your form styled as plain text, use the `.form-control-plaintext` class to remove the default form field styling and preserve the correct margin and padding.

{{< example >}}
<form>
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
  </div>
</form>
{{< /example >}}

{{< example >}}
<form class="form-inline">
  <div class="mb-3">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div class="mb-3 mx-sm-3">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
</form>
{{< /example >}}

## Color

Keep in mind color inputs are [not supported in IE](https://caniuse.com/#feat=input-color).

{{< example >}}
<form>
  <label for="exampleColorInput">Color picker</label>
  <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
</form>
{{< /example >}}

## Datalists

Datalists allow you to create a group of `<option>`s that can be accessed (and autocompleted) from within an `<input>`. These are similar to `<select>` elements, but come with more menu styling limitations and differences. While most browsers and operating systems include some support for `<datalist>` elements, their styling is inconsistent at best.

Learn more about [support for datalist elements](https://caniuse.com/#feat=datalist).

{{< example >}}
<form>
  <label for="exampleDataList">Datalist example</label>
  <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
  <datalist id="datalistOptions">
    <option value="San Francisco">
    <option value="New York">
    <option value="Seattle">
    <option value="Los Angeles">
    <option value="Chicago">
  </datalist>
</form>
{{< /example >}}
