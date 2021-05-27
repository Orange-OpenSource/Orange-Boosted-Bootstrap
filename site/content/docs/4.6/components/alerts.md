---
layout: docs
title: Alerts
description: Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
group: components
aliases:
  - "/components/"
  - "/docs/4.6/components/"
toc: true
---

## Examples

Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the four **required** contextual classes (e.g., `.alert-success`). For inline dismissal, use the [alerts jQuery plugin](#dismissing).

<!-- Boosted mod: alerts always have icon -->
Boosted also adds a dedicated icon for each contextual class, matching [functional colors in palette]({{< docsref "/utilities/colors#ensuring-contrasts" >}}):
* `success`,
* `info`,
* `warning`,
* `danger`.

<!-- Boosted mod: filter to use only functional colors -->
{{< example >}}
{{< alerts.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
{{- if not (or (eq .name "primary") (eq .name "secondary") (eq .name "light")) }}
<div class="alert alert-{{ .name }}" role="alert">
  <span class="alert-icon"><span class="sr-only">{{ .name | title }}</span></span>
  {{ if not (or (eq .name "danger") (eq .name "info")) -}}
  <p>{{ .name | title }} notification text goes here.</p>
  {{- else if (eq .name "danger") -}}
  <p>Error notification text goes here.</p>
  {{- else -}}
  <p>Information notification text goes here.</p>
  {{- end }}
</div>{{- end -}}
{{- end }}
{{< /alerts.inline >}}
{{< /example >}}

{{< callout warning >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

<!-- Boosted mod: links are perceivable globally -->

### Sizes

Alerts come with a smaller variant: `.alert-sm`.

{{< example >}}
{{< alerts.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
{{- if not (or (eq .name "primary") (eq .name "secondary") (eq .name "light")) }}
<div class="alert alert-sm alert-{{ .name }}" role="alert">
  <span class="alert-icon"><span class="sr-only">{{ .name | title }}</span></span>
  {{ if not (or (eq .name "danger") (eq .name "info")) -}}
  <p>{{ .name | title }} notification text goes here.</p>
  {{- else if (eq .name "danger") -}}
  <p>Error notification text goes here.</p>
  {{- else -}}
  <p>Information notification text goes here.</p>
  {{- end }}
</div>{{- end -}}
{{- end }}
{{< /alerts.inline >}}
{{< /example >}}

### Dark background
 
{{< example >}}
<div class="bg-dark p-3">
  {{< alerts.inline >}}
  {{- range (index $.Site.Data "theme-colors") -}}
  {{- if not (or (eq .name "primary") (eq .name "secondary") (eq .name "light")) -}}
  <div class="alert alert-{{ .name }}" role="alert">
    <span class="alert-icon"><span class="sr-only">{{ .name | title }}</span></span>
    {{ if not (or (eq .name "danger") (eq .name "info")) -}}
    <p>{{ .name | title }} notification text goes here.</p>
    {{- else if (eq .name "danger") -}}
    <p>Error notification text goes here.</p>
    {{- else -}}
    <p>Information notification text goes here.</p>
    {{- end }}
  </div>{{- end -}}
  {{- end -}}
  {{< /alerts.inline >}}
</div>
{{< /example >}}

### Additional content

Alerts can also contain additional HTML elements like headings, paragraphs and dividers.

<!-- Boosted mod -->

As of Boosted, it's recommended to wrap your additional content in a `<div>` to ensure proper alignment — and, for headings, to always use the `.alert-heading` class.

{{< example >}}
<div class="alert alert-success" role="alert">
  <span class="alert-icon"><span class="sr-only">Success</span></span>
  <div>
      <h4 class="alert-heading">Success notification text goes here.</h4>
      <p>Description text goes here.</p>
  </div>
</div>
<div class="alert alert-info" role="alert">
  <span class="alert-icon"><span class="sr-only">Info</span></span>
  <div>
      <h4 class="alert-heading">Information notification text goes here. <a href="#">Action</a></h4>
      <p>Description text goes here.</p>
  </div>
</div>
{{< /example >}}


### Dismissing

Using the alert JavaScript plugin, it's possible to dismiss any alert inline. Here's how:

- Be sure you've loaded the alert plugin, or the compiled Boosted JavaScript.
- If you're building our JavaScript from source, it [requires `util.js`]({{< docsref "/getting-started/javascript#util" >}}). The compiled version includes this.
- Add a dismiss button and the `.alert-dismissible` class, which adds extra padding to the right of the alert and positions the `.close` button.
- On the dismiss button, add the `data-dismiss="alert"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.
- To animate alerts when dismissing them, be sure to add the `.fade` and `.show` classes.

You can see this in action with a live demo:

{{< example >}}
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <span class="alert-icon"><span class="sr-only">Warning</span></span>
  <p>Warning notification text goes here.</p>
  <button type="button" class="close" data-dismiss="alert">
      <span class="sr-only">Close warning message</span>
  </button>
</div>
<div class="bg-dark p-3">
    <div class="alert alert-lg alert-danger alert-dismissible fade show mb-0" role="alert">
        <span class="alert-icon"><span class="sr-only">Danger</span></span>
        <div>
            <h4 class="alert-heading">Error notification text goes here.</h4>
            <p>Description text goes here.</p>
        </div>
        <button type="button" class="close" data-dismiss="alert">
            <span class="sr-only">Close alert message</span>
        </button>
    </div>
</div>
{{< /example >}}

## JavaScript behavior

### Triggers

Enable dismissal of an alert via JavaScript:

```js
$('.alert').alert()
```

Or with `data` attributes on a button **within the alert**, as demonstrated above:

<!-- Boosted mod: using visually hidden text instead of aria-label -->
```html
<button type="button" class="close" data-dismiss="alert">
    <span class="sr-only">Close confirmation message</span>
</button>
```

Note that closing an alert will remove it from the DOM.

### Methods

| Method | Description |
| --- | --- |
| `$().alert()` | Makes an alert listen for click events on descendant elements which have the `data-dismiss="alert"` attribute. (Not necessary when using the data-api's auto-initialization.) |
| `$().alert('close')` | Closes an alert by removing it from the DOM. If the `.fade` and `.show` classes are present on the element, the alert will fade out before it is removed. |
| `$().alert('dispose')` | Destroys an element's alert. |

```js
$('.alert').alert('close')
```

### Events

Boosted's alert plugin exposes a few events for hooking into alert functionality.

| Event | Description |
| --- | --- |
| `close.bs.alert` | This event fires immediately when the `close` instance method is called. |
| `closed.bs.alert` | This event is fired when the alert has been closed (will wait for CSS transitions to complete). |

```js
$('#myAlert').on('closed.bs.alert', function () {
  // do something...
})
```
