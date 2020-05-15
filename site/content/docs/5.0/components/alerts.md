---
layout: docs
title: Alerts
description: Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
group: components
aliases:
  - "/components/"
  - "/docs/5.0/components/"
toc: true
---

## Examples

Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the eight **required** contextual classes (e.g., `.alert-success`). For inline dismissal, use the [alerts JavaScript plugin](#dismissing).

{{< example >}}
<div class="alert alert-success" role="alert">
  <span class="alert-icon"><span class="sr-only">Success</span></span>
  <p>Success notification text goes here.</p>
</div>
<div class="alert alert-info" role="alert">
  <span class="alert-icon"><span class="sr-only">Info</span></span>
  <p>Information notification text goes here.</p>
</div>
<div class="alert alert-warning" role="alert">
  <span class="alert-icon"><span class="sr-only">Warning</span></span>
  <p>Warning notification text goes here.</p>
</div>
<div class="alert alert-danger" role="alert">
  <span class="alert-icon"><span class="sr-only">Error</span></span>
  <p>Error notification text goes here.</p>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

<!-- Boosted mod: no Link color -->

<!-- Boosted mod: small alerts -->
### Sizes

Alerts come with a smaller variant: `.alert-sm`.

{{< example >}}
<div class="alert alert-success alert-sm" role="alert">
  <span class="alert-icon"><span class="sr-only">Success</span></span>
  <p>Success notification text goes here.</p>
</div>
<div class="alert alert-info alert-sm" role="alert">
  <span class="alert-icon"><span class="sr-only">Info</span></span>
  <p>Information notification text goes here.</p>
</div>
<div class="alert alert-warning alert-sm" role="alert">
  <span class="alert-icon"><span class="sr-only">Warning</span></span>
  <p>Warning notification text goes here.</p>
</div>
<div class="alert alert-danger alert-sm" role="alert">
  <span class="alert-icon"><span class="sr-only">Error</span></span>
  <p>Error notification text goes here.</p>
</div>
{{< /example >}}
<!-- End mod -->

### Additional content

Alerts can also contain additional HTML elements like headings, paragraphs and dividers.

{{< example >}}
<div class="alert alert-success" role="alert">
  <span class="alert-icon"><span class="sr-only">Success</span></span>
  <div>
    <h4 class="alert-heading">Success notification text goes here.</h4>
    <p>Description text goes here.</p>
  </div>
</div>
{{< /example >}}


### Dismissing

Using the alert JavaScript plugin, it's possible to dismiss any alert inline. Here's how:

- Be sure you've loaded the alert plugin, or the compiled Boosted JavaScript.
- Add a [close button]({{< docsref "/components/close-button" >}}) and the `.alert-dismissible` class, which adds extra padding to the right of the alert and positions the close button.
- On the close button, add the `data-dismiss="alert"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.
- To animate alerts when dismissing them, be sure to add the `.fade` and `.show` classes.

You can see this in action with a live demo:

{{< example >}}
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <span class="alert-icon"><span class="sr-only">Warning</span></span>
  <p>Warning notification text goes here.</p>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>
</div>
{{< /example >}}

## JavaScript behavior

### Triggers

Enable dismissal of an alert via JavaScript:

{{< highlight js >}}
var alertList = document.querySelectorAll('.alert')
alertList.forEach(function (alert) {
  new boosted.Alert(alert)
})
{{< /highlight >}}

Or with `data` attributes on a button **within the alert**, as demonstrated above:

{{< highlight html >}}
<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>
{{< /highlight >}}

Note that closing an alert will remove it from the DOM.

### Methods

You can create an alert instance with the alert constructor, for example:

{{< highlight js >}}
var myAlert = document.getElementById('myAlert')
var bsAlert = new boosted.Alert(myAlert)
{{< /highlight >}}

This makes an alert listen for click events on descendant elements which have the `data-dismiss="alert"` attribute. (Not necessary when using the data-api's auto-initialization.)

<table class="table">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>close</code>
      </td>
      <td>
        Closes an alert by removing it from the DOM. If the <code>.fade</code> and <code>.show</code> classes are present on the element, the alert will fade out before it is removed.
      </td>
    </tr>
    <tr>
      <td>
        <code>dispose</code>
      </td>
      <td>
        Destroys an element's alert.
      </td>
    </tr>
    <tr>
      <td>
        <code>getInstance</code>
      </td>
      <td>
        Static method which allows you to get the alert instance associated to a DOM element, you can use it like this: <code>boosted.Alert.getInstance(alert)</code>
      </td>
    </tr>
  </tbody>
</table>

{{< highlight js >}}
var alertNode = document.querySelector('.alert')
var alert = boosted.Alert.getInstance(alertNode)
alert.close()
{{< /highlight >}}

### Events

Boosted's alert plugin exposes a few events for hooking into alert functionality.

<table class="table">
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>close.bs.alert</code></td>
      <td>
        Fires immediately when the <code>close</code> instance method is called.
      </td>
    </tr>
    <tr>
      <td><code>closed.bs.alert</code></td>
      <td>
        Fired when the alert has been closed and CSS transitions have completed.
      </td>
    </tr>
  </tbody>
</table>

{{< highlight js >}}
var myAlert = document.getElementById('myAlert')
myAlert.addEventListener('closed.bs.alert', function () {
  // do something…
})
{{< /highlight >}}
