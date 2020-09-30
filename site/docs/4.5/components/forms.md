---
layout: docs
title: Forms
description: Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
group: components
toc: true
---

## Overview

Boosted's form controls expand on [our Rebooted form styles]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/reboot/#forms) with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.

Be sure to use an appropriate `type` attribute on all inputs (e.g., `email` for email address or `number` for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

Here's a quick example to demonstrate Boosted's form styles. Keep reading for documentation on required classes, form layout, and more.

{% capture example %}
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="exampleCheck1">
    <label class="custom-control-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{% endcapture %}
{% include example.html content=example %}

## Form controls

Textual form controls—like `<input>`s, `<select>`s, and `<textarea>`s—are styled with the `.form-control` class. Included are styles for general appearance, focus state, sizing, and more.

Be sure to explore our [custom forms](#custom-forms) to further style `<select>`s.

{% capture example %}
<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="custom-select" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="custom-select" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

[comment]: # Boosted mod: do not show default file input

### Sizing

Set heights using classes like `.form-control-lg`.

{% capture example %}
<div class="form-group">
  <label for="exampleLargeInput">Large form control</label>
  <input class="form-control form-control-lg" type="text" id="exampleLargeInput" placeholder=".form-control-lg">
</div>
<div class="form-group">
  <label for="exampleDefaultInput">Default form control</label>
  <input class="form-control" type="text" id="exampleDefaultInput" placeholder="Default input">
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="form-group">
  <label for="exampleLargeSelect">Large select size</label>
  <select class="custom-select custom-select-lg mb-2" id="exampleLargeSelect">
    <option>Large select</option>
  </select>
</div>
<div class="form-group">
  <label for="exampleDefaultSelect">Default select size</label>
  <select class="custom-select" id="exampleDefaultSelect">
    <option>Default select</option>
  </select>
</div>
{% endcapture %}
{% include example.html content=example %}

### Readonly

Add the `readonly` boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.

{% capture example %}
<input class="form-control" type="text" placeholder="Readonly input here..." readonly>
{% endcapture %}
{% include example.html content=example %}

### Readonly plain text

If you want to have `<input readonly>` elements in your form styled as plain text, use the `.form-control-plaintext` class to remove the default form field styling and preserve the correct margin and padding.

{% capture example %}
<form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<form class="form-inline">
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
</form>
{% endcapture %}
{% include example.html content=example %}

[comment]: # Boosted mod: do not show default range input

[comment]: # Boosted mod: do not show default checkbox/radio input

## Layout

Since Boosted applies `display: block` and `width: 100%` to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.

### Form groups

The `.form-group` class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies `margin-bottom`, but it picks up additional styles in `.form-inline` as needed. Use it with `<fieldset>`s, `<div>`s, or nearly any other element.

{% capture example %}
<form>
  <div class="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

### Form grid

More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.

{% capture example %}
<form>
  <div class="row">
    <div class="col form-group">
      <label for="gridExampleFirstName">First name</label>
      <input type="text" class="form-control" id="gridExampleFirstName" placeholder="First name">
    </div>
    <div class="col form-group">
      <label for="gridExampleLastName">Last name</label>
      <input type="text" class="form-control" id="gridExampleLastName" placeholder="Last name">
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

#### Form row

You may also swap `.row` for `.form-row`, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.

{% capture example %}
<form>
  <div class="form-row">
    <div class="col form-group">
       <label for="rowExampleFirstName">First name</label>
      <input type="text" class="form-control" id="rowExampleFirstName" placeholder="First name">
    </div>
    <div class="col form-group">
      <label for="rowExampleLastName">Last name</label>
      <input type="text" class="form-control" id="rowExampleLastName" placeholder="Last name">
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

More complex layouts can also be created with the grid system.

{% capture example %}
<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="custom-select">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="gridCheck">
      <label class="custom-control-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
{% endcapture %}
{% include example.html content=example %}

#### Horizontal form

Create horizontal forms with the grid by adding the `.row` class to form groups and using the `.col-*-*` classes to specify the width of your labels and controls. Be sure to add `.col-form-label` to your `<label>`s as well so they're vertically centered with their associated form controls.

At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we've removed the `padding-top` on our stacked radio inputs label to better align the text baseline.

{% capture example %}
<form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
      <div class="col-sm-10">
        <div class="custom-control custom-radio">
          <input class="custom-control-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="custom-control-label" for="gridRadios1">
            First radio
          </label>
        </div>
        <div class="custom-control custom-radio">
          <input class="custom-control-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="custom-control-label" for="gridRadios2">
            Second radio
          </label>
        </div>
        <div class="custom-control custom-radio">
          <input class="custom-control-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
          <label class="custom-control-label" for="gridRadios3">
            Third disabled radio
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2">Checkbox</div>
    <div class="col-sm-10">
      <div class="custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox" id="gridCheck1">
        <label class="custom-control-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

##### Horizontal form label sizing

Be sure to use `.col-form-label-lg` to your `<label>`s or `<legend>`s to correctly follow the size of `.form-control-lg`.

{% capture example %}
<form>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

#### Column sizing

As shown in the previous examples, our grid system allows you to place any number of `.col`s within a `.row` or `.form-row`. They'll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining `.col`s equally split the rest, with specific column classes like `.col-7`.

{% capture example %}
<form>
  <div class="form-row">
    <div class="col-7 form-group">
      <label for="sizeCityInput">City</label>
      <input type="text" class="form-control" placeholder="City" id="sizeCityInput">
    </div>
    <div class="col form-group">
      <label for="sizeStateInput">State</label>
      <input type="text" class="form-control" placeholder="State" id="sizeStateInput">
    </div>
    <div class="col form-group">
      <label for="sizeZipInput">Zip</label>
      <input type="text" class="form-control" placeholder="Zip" id="sizeZipInput">
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

#### Auto-sizing

The example below uses a flexbox utility to vertically center the contents and changes `.col` to `.col-auto` so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.

{% capture example %}
<form>
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
      </div>
    </div>
    <div class="col-auto">
      <div class="custom-control custom-checkbox mb-2">
        <input class="custom-control-input" type="checkbox" id="autoSizingCheck">
        <label class="custom-control-label" for="autoSizingCheck">
          Remember me
        </label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

You can then remix that once again with size-specific column classes.

{% capture example %}
<form>
  <div class="form-row align-items-center">
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe">
    </div>
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
      </div>
    </div>
    <div class="col-auto my-1">
      <div class="custom-control custom-checkbox mb-0">
        <input class="custom-control-input" type="checkbox" id="autoSizingCheck2">
        <label class="custom-control-label" for="autoSizingCheck2">
          Remember me
        </label>
      </div>
    </div>
    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

[comment]: # Boosted mod: not needed since we only expose custom-forms everywhere…

### Inline forms

Use the `.form-inline` class to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states.

- Controls are `display: flex`, collapsing any HTML white space and allowing you to provide alignment control with [spacing]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) and [flexbox]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) utilities.
- Controls and input groups receive `width: auto` to override the Boosted default `width: 100%`.
- Controls **only appear inline in viewports that are at least 576px wide** to account for narrow viewports on mobile devices.

You may need to manually address the width and alignment of individual form controls with [spacing utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) (as shown below). Lastly, be sure to always include a `<label>` with each form control, even if you need to hide it from non-screenreader visitors with `.sr-only`.

{% capture example %}
<form class="form-inline">
  <label class="sr-only" for="inlineFormInputName2">Name</label>
  <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">
  <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
  <div class="input-group mb-2 mr-sm-2">
    <div class="input-group-prepend">
      <div class="input-group-text">@</div>
    </div>
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
  </div>
  <div class="custom-control custom-checkbox mb-2 mr-sm-2">
    <input class="custom-control-input" type="checkbox" id="inlineFormCheck">
    <label class="custom-control-label" for="inlineFormCheck">
      Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Submit</button>
</form>
{% endcapture %}
{% include example.html content=example %}

[comment]: # Boosted mod: not needed since we only expose custom-forms everywhere…

{% capture callout %}
##### Alternatives to hidden labels
Assistive technologies such as screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, you can hide the labels using the `.sr-only` class. There are further alternative methods of providing a label for assistive technologies, such as the `aria-label`, `aria-labelledby` or `title` attribute. If none of these are present, assistive technologies may resort to using the `placeholder` attribute, if present, but note that use of `placeholder` as a replacement for other labelling methods is not advised.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Help text

Block-level help text in forms can be created using `.form-text` (previously known as `.help-block` in v3). Inline help text can be flexibly implemented using any inline HTML element and utility classes like `.text-muted`.

{% capture callout %}
##### Associating help text with form controls

Help text should be explicitly associated with the form control it relates to using the `aria-describedby` attribute. This will ensure that assistive technologies—such as screen readers—will announce this help text when the user focuses or enters the control.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

Help text below inputs can be styled with `.form-text`. This class includes `display: block` and adds some top margin for easy spacing from the inputs above.

{% capture example %}
<label for="inputPassword5">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
<small id="passwordHelpBlock" class="form-text text-muted">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</small>
{% endcapture %}
{% include example.html content=example %}

Inline text can use any typical inline HTML element (be it a `<small>`, `<span>`, or something else) with nothing more than a utility class.

{% capture example %}
<form class="form-inline">
  <div class="form-group">
    <label for="inputPassword6">Password</label>
    <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
    <small id="passwordHelpInline" class="text-muted">
      Must be 8-20 characters long.
    </small>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

## Disabled forms

Add the `disabled` boolean attribute on an input to prevent user interactions and make it appear lighter.

{% highlight html %}
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
{% endhighlight %}

Add the `disabled` attribute to a `<fieldset>` to disable all the controls within.

Add the `.disabled` class to the label for a disabled input.

{% capture example %}
<form>
  <fieldset disabled>
    <div class="form-group">
      <label for="disabledTextInput">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    </div>
    <div class="form-group">
      <label for="disabledSelect">Disabled select menu</label>
      <select id="disabledSelect" class="custom-select">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="form-group">
      <div class="custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox" id="disabledFieldsetCheck" disabled>
        <label class="custom-control-label" for="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
{% endcapture %}
{% include example.html content=example %}

{% capture callout %}
##### Caveat with anchors

Browsers treat all native form controls (`<input>`, `<select>`, and `<button>` elements) inside a `<fieldset disabled>` as disabled, preventing both keyboard and mouse interactions on them.

However, if your form also includes custom button-like elements such as `<a ... class="btn btn-*">`, these will only be given a style of `pointer-events: none`. As noted in the section about [disabled state for buttons]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/buttons/#disabled-state) (and specifically in the sub-section for anchor elements), this CSS property is not yet standardized and isn't fully supported in Internet Explorer 10. The anchor-based controls will also still be focusable and operable using the keyboard. You must manually modify these controls by adding `tabindex="-1"` to prevent them from receiving focus and `aria-disabled="disabled"` to signal their state to assistive technologies.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

{% capture callout %}
#### Cross-browser compatibility

While Boosted will apply these styles in all browsers, Internet Explorer 11 and below don't fully support the `disabled` attribute on a `<fieldset>`. Use custom JavaScript to disable the fieldset in these browsers.
{% endcapture %}
{% include callout.html content=callout type="danger" %}

## Validation

Provide valuable, actionable feedback to your users with HTML5 form validation–[available in all our supported browsers](https://caniuse.com/#feat=form-validation). Choose from the browser default validation feedback, or implement custom messages with our built-in classes and starter JavaScript.

Indicate that a field is **required** by adding the class `.is-required` on the associated label, and adding a `<span class="sr-only"> (required)</span>` visually hidden text inside label itself.

{% capture callout %}
We are aware that currently the client-side custom validation styles and tooltips are not accessible, since they are not exposed to assistive technologies. While we work on a solution, we'd recommend either using the server-side option or the default browser validation method.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

### How it works

Here's how form validation works with Boosted:

- HTML form validation is applied via CSS's two pseudo-classes, `:invalid` and `:valid`. It applies to `<input>`, `<select>`, and `<textarea>` elements.
- Boosted scopes the `:invalid` and `:valid` styles to parent `.was-validated` class, usually applied to the `<form>`. Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted).
- To reset the appearance of the form (for instance, in the case of dynamic form submissions using AJAX), remove the `.was-validated` class from the `<form>` again after submission.
- As a fallback, `.is-invalid` and `.is-valid` classes may be used instead of the pseudo-classes for [server side validation](#server-side). They do not require a `.was-validated` parent class.
- Due to constraints in how CSS works, we cannot (at present) apply styles to a `<label>` that comes before a form control in the DOM without the help of custom JavaScript.
- All modern browsers support the [constraint validation API](https://www.w3.org/TR/html5/sec-forms.html#the-constraint-validation-api), a series of JavaScript methods for validating form controls.
- Feedback messages may utilize the [browser defaults](#browser-defaults) (different for each browser, and unstylable via CSS) or our custom feedback styles with additional HTML and CSS.
- You may provide custom validity messages with `setCustomValidity` in JavaScript.

With that in mind, consider the following demos for our custom form validation styles, optional server side classes, and browser defaults.

### Custom styles

For custom Boosted form validation messages, you'll need to add the `novalidate` boolean attribute to your `<form>`. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you'll see the `:invalid` and `:valid` styles applied to your form controls.

Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. Background icons for `<select>`s are only available with `.custom-select`, and not `.form-control`.

{% capture example %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom01" class="is-required">First name<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control" id="validationCustom01" aria-describedby="validationCustom01Feedback" placeholder="First name" value="Mark" required>
      <div class="valid-feedback" id="validationCustom01Feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationCustom02" class="is-required">Last name<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control" id="validationCustom02" aria-describedby="validationCustom02Feedback" placeholder="Last name" value="Otto" required>
      <div class="valid-feedback" id="validationCustom02Feedback">
        Looks good!
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03" class="is-required">City<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control" id="validationCustom03" aria-describedby="validationCustom03Feedback" placeholder="City" required>
      <div class="invalid-feedback" id="validationCustom03Feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom04" class="is-required">State<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control" id="validationCustom04" aria-describedby="validationCustom04Feedback" placeholder="State" required>
      <div class="invalid-feedback" id="validationCustom04Feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom05" class="is-required">Zip<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control" id="validationCustom05" aria-describedby="validationCustom05Feedback" placeholder="Zip" required>
      <div class="invalid-feedback" id="validationCustom05Feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="custom-control custom-checkbox">
      <input class="custom-control-input" type="checkbox" value="" id="invalidCheck" aria-describedby="invalidCheckFeedback" required>
      <label class="custom-control-label" for="invalidCheck">
        Agree to terms and conditions<span class="is-required"></span>
        <span class="sr-only"> (required)</span>
      </label>
      <div class="invalid-feedback" id="invalidCheckFeedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Boosted validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>
{% endcapture %}
{% include example.html content=example %}

### Browser defaults

Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback.

While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.

{% capture example %}
<form>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault01" class="is-required">First name<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationDefault02" class="is-required">Last name<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03" class="is-required">City<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault04" class="is-required">State<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05" class="is-required">Zip<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
    </div>
  </div>
  <div class="form-group">
    <div class="custom-control custom-checkbox">
      <input class="custom-control-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="custom-control-label" for="invalidCheck2">
        Agree to terms and conditions<span class="is-required"></span>
        <span class="sr-only"> (required)</span>
      </label>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endcapture %}
{% include example.html content=example %}

### Server side

We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with `.is-invalid` and `.is-valid`. Note that `.invalid-feedback` is also supported with these classes.

For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using `aria-describedby`. This attribute allows more than one `id` to be referenced, in case the field already points to additional form text.

{% capture example %}
<form>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer01" class="is-required">First name<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control is-valid" id="validationServer01" aria-describedby="validationServer01Feedback" placeholder="First name" value="Mark" required>
      <div id="validationServer01Feedback" class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationServer02" class="is-required">Last name<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control is-valid" id="validationServer02" aria-describedby="validationServer02Feedback" placeholder="Last name" value="Otto" required>
      <div id="validationServer02Feedback" class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03" class="is-required">City<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" placeholder="City" required>
      <div id="validationServer03Feedback" class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer04" class="is-required">State<span class="sr-only"> (required)</span></label>
      <select class="custom-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
      </select>
      <div id="validationServer04Feedback" class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer05" class="is-required">Zip<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" placeholder="Zip" required>
      <div id="validationServer05Feedback" class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="custom-control custom-checkbox">
      <input class="custom-control-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
      <label class="custom-control-label" for="invalidCheck3">
        Agree to terms and conditions<span class="is-required"></span>
        <span class="sr-only"> (required)</span>
      </label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endcapture %}
{% include example.html content=example %}

### Supported elements

Validation styles are available for the following form controls and components:

- `<input>`s and `<textarea>`s with `.form-control`
- `<select>`s with `.form-control` or `.custom-select`
- `.form-check`s
- `.custom-checkbox`s and `.custom-radio`s
- `.custom-file`

{% capture example %}
<form class="was-validated">
  <div class="mb-3">
    <label for="validationTextarea" class="is-required">Textarea<span class="sr-only"> (required)</span></label>
    <textarea class="form-control is-invalid" id="validationTextarea" aria-describedby="validationTextareaFeedback" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback" id="validationTextareaFeedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input" id="customControlValidation1" aria-describedby="customControlValidation1Feedback" required>
    <label class="custom-control-label" for="customControlValidation1">Check this custom checkbox<span class="sr-only"> (required)</span></label>
    <div class="invalid-feedback" id="customControlValidation1Feedback">
      Example invalid feedback text
    </div>
  </div>

  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="customControlValidation2" aria-describedby="customControlValidation3Feedback" name="radio-stacked" required>
    <label class="custom-control-label" for="customControlValidation2">Toggle this custom radio<span class="sr-only"> (required)</span></label>
  </div>
  <div class="custom-control custom-radio mb-3">
    <input type="radio" class="custom-control-input" id="customControlValidation3" aria-describedby="customControlValidation3Feedback" name="radio-stacked" required>
    <label class="custom-control-label" for="customControlValidation3">Or toggle this other custom radio<span class="sr-only"> (required)</span></label>
    <div class="invalid-feedback" id="customControlValidation3Feedback">
      More example invalid feedback text
    </div>
  </div>

  <div class="mb-3">
    <label for="customSelectValidation">Custom select example<span class="sr-only"> (required)</span></label>
    <select class="custom-select" id="customSelectValidation" aria-describedby="customSelectValidationFeedback" required>
      <option value="">Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback" id="customSelectValidationFeedback">
      Example invalid custom select feedback
    </div>
  </div>

  <div class="custom-file mb-3">
    <input type="file" class="custom-file-input" id="validatedCustomFile" aria-describedby="customFileValidationFeedback" required>
    <label class="custom-file-label" for="validatedCustomFile">Choose file…<span class="sr-only"> (required)</span></label>
    <div class="invalid-feedback" id="customFileValidationFeedback">
      Example invalid custom file feedback
    </div>
  </div>
  
  <div class="mb-3">
    <div class="input-group is-invalid">
      <div class="input-group-prepend">
        <span class="input-group-text" id="validatedInputGroupPrepend">@</span>
      </div>
      <input type="text" class="form-control is-invalid" aria-describedby="validatedInputGroupPrepend" required>
    </div>
    <div class="invalid-feedback">
      Example invalid input group feedback
    </div>
  </div>

  <div class="mb-3">
    <div class="input-group is-invalid">
      <div class="input-group-prepend">
        <label class="input-group-text" for="validatedInputGroupSelect">Options</label>
      </div>
      <select class="custom-select" id="validatedInputGroupSelect" required>
        <option value="">Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="invalid-feedback">
      Example invalid input group feedback
    </div>
  </div>

  <div class="input-group is-invalid">
    <div class="custom-file">
      <input type="file" class="custom-file-input" id="validatedInputGroupCustomFile" required>
      <label class="custom-file-label" for="validatedInputGroupCustomFile">Choose file...</label>
    </div>
    <div class="input-group-append">
       <button class="btn btn-outline-secondary" type="button">Button</button>
    </div>
  </div>
  <div class="invalid-feedback">
    Example invalid input group feedback
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

### Tooltips

If your form layout allows it, you can swap the `.{valid|invalid}-feedback` classes for `.{valid|invalid}-tooltip` classes to display validation feedback in a styled tooltip. Be sure to have a parent with `position: relative` on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.

{% capture example %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip01" class="is-required">First name<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationTooltip02" class="is-required">Last name<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip03" class="is-required">City<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control" id="validationTooltip03" placeholder="City" required>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip04" class="is-required">State<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control" id="validationTooltip04" placeholder="State" required>
      <div class="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip05" class="is-required">Zip<span class="sr-only"> (required)</span></label>
      <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endcapture %}
{% include example.html content=example %}

### Customizing

Validation states can be customized via Sass with the `$form-validation-states` map. Located in our `_variables.scss` file, this Sass map is looped over to generate the default `valid`/`invalid` validation states. Included is a nested map for customizing each state's color and icon. While no other states are supported by browsers, those using custom styles can easily add more complex form feedback.

Please note that we do not recommend customizing these values without also modifying the `form-validation-state` mixin.

{% highlight scss %}
// Sass map from `_variables.scss`
// Override this and recompile your Sass to generate different states
$form-validation-states: map-merge(
  (
    "valid": (
      "color": $form-feedback-valid-color,
      "icon": $form-feedback-icon-valid
    ),
    "invalid": (
      "color": $form-feedback-invalid-color,
      "icon": $form-feedback-icon-invalid
    )
  ),
  $form-validation-states
);

// Loop from `_forms.scss`
// Any modifications to the above Sass map will be reflected in your compiled
// CSS via this loop.
@each $state, $data in $form-validation-states {
  @include form-validation-state($state, map-get($data, color), map-get($data, icon));
}
{% endhighlight %}

## Custom forms

For even more customization and cross browser consistency, use our completely custom form elements to replace the browser defaults. They're built on top of semantic and accessible markup, so they're solid replacements for any default form control.

### Checkboxes and radios

Each checkbox and radio `<input>` and `<label>` pairing is wrapped in a `<div>` to create our custom control. Structurally, this is the same approach as our default `.form-check`.

We use the sibling selector (`~`) for all our `<input>` states—like `:checked`—to properly style our custom form indicator. When combined with the `.custom-control-label` class, we can also style the text for each item based on the `<input>`'s state.

We hide the default `<input>` with `opacity` and use the `.custom-control-label` to build a new custom form indicator in its place with `::before` and `::after`. Unfortunately we can't build a custom one from just the `<input>` because CSS's `content` doesn't work on that element.

In the checked states, we use **base64 embedded SVG icons**. This provides us the best control for styling and positioning across browsers and devices.

#### Checkboxes

{% capture example %}
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck1">
  <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
</div>
{% endcapture %}
{% include example.html content=example %}

Custom checkboxes can also utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).

<div class="bd-example bd-example-indeterminate">
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck2">
    <label class="custom-control-label" for="customCheck2">Check this custom checkbox</label>
  </div>
</div>

If you're using jQuery, something like this should suffice:

{% highlight js %}
$('.your-checkbox').prop('indeterminate', true)
{% endhighlight %}

#### Radios

{% capture example %}
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
</div>
{% endcapture %}
{% include example.html content=example %}

#### Inline

{% capture example %}
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="customRadioInline1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="customRadioInline2">Or toggle this other custom radio</label>
</div>
{% endcapture %}
{% include example.html content=example %}

#### Disabled

Custom checkboxes and radios can also be disabled. Add the `disabled` boolean attribute to the `<input>` and the custom indicator and label description will be automatically styled.

{% capture example %}
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheckDisabled1" disabled>
  <label class="custom-control-label" for="customCheckDisabled1">Check this custom checkbox</label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" name="radioDisabled" id="customRadioDisabled2" class="custom-control-input" disabled>
  <label class="custom-control-label" for="customRadioDisabled2">Toggle this custom radio</label>
</div>
{% endcapture %}
{% include example.html content=example %}

### Switches

A switch has the markup of a custom checkbox but uses the `.custom-switch` class to render a toggle switch. Switches also support the `disabled` attribute.

{% capture example %}
<div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="customSwitch1">
  <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
</div>
<div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" disabled id="customSwitch2">
  <label class="custom-control-label" for="customSwitch2">Disabled switch element</label>
</div>
{% endcapture %}
{% include example.html content=example %}

[comment]: # Boosted mod
Add the `.right` class to render a toggle switch with label text before.

{% capture example %}
<div class="custom-control custom-switch right w-75">
  <input type="checkbox" class="custom-control-input" id="customSwitch3">
  <label class="custom-control-label" for="customSwitch3">Toggle this switch element right aligned</label>
</div>
<div class="custom-control custom-switch right w-75">
  <input type="checkbox" class="custom-control-input" disabled id="customSwitch4">
  <label class="custom-control-label" for="customSwitch4">Disabled switch element right aligned</label>
</div>
{% endcapture %}
{% include example.html content=example %}

[comment]: # Boosted mod
### Orange Switches

{% capture callout %}
##### Deprecated

As `custom-switch` component have been included into Bootstrap, the `o-switch` component will be removed in the next major release.
The `.toggle-rounded` variant should be avoided, but still works in v4.
{% endcapture %}
{% include callout.html content=callout type="danger" %}

[comment]: # end mod

### Select menu

Custom `<select>` menus need only a custom class, `.custom-select` to trigger the custom styles. Custom styles are limited to the `<select>`'s initial appearance and cannot modify the `<option>`s due to browser limitations.

{% capture example %}
<div class="form-group">
  <label for="customSelect">Custom select</label>
  <select class="custom-select" id="customSelect">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
{% endcapture %}
{% include example.html content=example %}

You may also choose large custom selects to match our similarly sized text inputs.

{% capture example %}
<div class="form-group">
  <label for="customLargeSelect">Large custom select</label>
  <select class="custom-select custom-select-lg mb-3" id="customLargeSelect">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
{% endcapture %}
{% include example.html content=example %}

The `multiple` attribute is also supported:

{% capture example %}
<div class="form-group">
  <label for="customMultipleSelect">Multiple custom select</label>
  <select class="custom-select" id="customMultipleSelect" multiple>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
{% endcapture %}
{% include example.html content=example %}

As is the `size` attribute:

{% capture example %}
<div class="form-group">
  <label for="customSizeSelect">Sized custom select</label>
  <select class="custom-select" size="3" id="customSizeSelect">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
{% endcapture %}
{% include example.html content=example %}

### Range

[comment]: # Boosted mod
Create custom `<input type="range">` controls with `.custom-range`. The track (the background) and thumb (the value) are both styled to appear the same across browsers.

{% capture callout %}
#### Progressive enchancement

Only IE and Firefox support "filling" their track from the left or right of the thumb as a means to visually indicate progress — so Chrome and Safari won't show it.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

[comment]: # End mod

{% capture example %}
<label for="customRange1">Example range</label>
<input type="range" class="custom-range" id="customRange1">
{% endcapture %}
{% include example.html content=example %}

Range inputs have implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

{% capture example %}
<label for="customRange2">Example range</label>
<input type="range" class="custom-range" min="0" max="5" id="customRange2">
{% endcapture %}
{% include example.html content=example %}

By default, range inputs "snap" to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `step="0.5"`.

{% capture example %}
<label for="customRange3">Example range</label>
<input type="range" class="custom-range" min="0" max="5" step="0.5" id="customRange3">
{% endcapture %}
{% include example.html content=example %}

[comment]: # Boosted mod
#### Disabled state

{% capture example %}
<label for="customRange4">Example range</label>
<input type="range" class="custom-range" id="customRange4" disabled>
{% endcapture %}
{% include example.html content=example %}

[comment]: # End mod

### File browser

{% capture callout %}
The recommended plugin to animate custom file input: [bs-custom-file-input](https://www.npmjs.com/package/bs-custom-file-input), that's what we are using currently here in our docs.
{% endcapture %}
{% include callout.html content=callout type="info" %}

The file input is the most gnarly of the bunch and requires additional JavaScript if you'd like to hook them up with functional *Choose file...* and selected file name text.

{% capture example %}
<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile">
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>
{% endcapture %}
{% include example.html content=example %}

We hide the default file `<input>` via `opacity` and instead style the `<label>`. The button is generated and positioned with `::after`. Lastly, we declare a `width` and `height` on the `<input>` for proper spacing for surrounding content.

#### Translating or customizing the strings with SCSS

The [`:lang()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang) is used to allow for translation of the "Browse" text into other languages. Override or add entries to the `$custom-file-text` Sass variable with the relevant [language tag](https://en.wikipedia.org/wiki/IETF_language_tag) and localized strings. The English strings can be customized the same way. For example, here's how one might add a Spanish translation (Spanish's language code is `es`):

{% highlight scss %}
$custom-file-text: (
  en: "Browse",
  es: "Elegir"
);
{% endhighlight %}

Here's `lang(es)` in action on the custom file input for a Spanish translation:

{% capture example %}
<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFileLang" lang="es">
  <label class="custom-file-label" for="customFileLang">Seleccionar Archivo</label>
</div>
{% endcapture %}
{% include example.html content=example %}

You'll need to set the language of your document (or subtree thereof) correctly in order for the correct text to be shown. This can be done using [the `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) on the `<html>` element or the [`Content-Language` HTTP header](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.12), among other methods.

#### Translating or customizing the strings with HTML

Boosted also provides a way to translate the "Browse" text in HTML with the `data-browse` attribute which can be added to the custom input label (example in Dutch):

{% capture example %}
<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFileLangHTML">
  <label class="custom-file-label" for="customFileLangHTML" data-browse="Bestand kiezen">Voeg je document toe</label>
</div>
{% endcapture %}
{% include example.html content=example %}
