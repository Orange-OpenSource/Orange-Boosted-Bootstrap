---
layout: docs
title: Alerts
description: Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
group: components
redirect_from:
  - "/components/"
  - "/docs/4.3/components/"
toc: true
---

## Examples

Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight **required** contextual classes (e.g., `.alert-success`). For inline dismissal, use the [alerts jQuery plugin](#dismissing).

{% capture example %}
{% for color in site.data.theme-colors %}
<div class="alert alert-{{ color.name }}" role="alert">
  A simple {{ color.name }} alert—check it out!
</div>{% endfor %}
{% endcapture %}
{% include example.html content=example %}

{% include callout-warning-color-assistive-technologies.md %}

### Link color

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.

{% capture example %}
{% for color in site.data.theme-colors %}
<div class="alert alert-{{ color.name }}" role="alert">
  A simple {{ color.name }} alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>{% endfor %}
{% endcapture %}
{% include example.html content=example %}

### Outline

Outline alerts could be created for any length of text. 3 sizes available `.alert-sm`, md as default, `.alert-lg`. In addition of the use of the **required** alert classe `.alert`, mix the utilities class (e.g., `.border .border-success .bg-transparent`) to create outlined alerts. The logo **required** a contextual classe (e.g., `.alert-icon .svg-success`).
The text must be inside a div tag with padding and margin **required** class (e.g, `.pl-3 .ml-3`). Add a **required** class (`.mt-2`) to the logo for multiline alerts.

Available icons : 
```
alert-icon svg-error
alert-icon svg-info
alert-icon svg-success
alert-icon svg-warning

```
{% capture example %}
<h3>Outline Alerts</h3>
    <!-- Outline Alerts
    ======================================= -->
    <div class="alert alert-sm border border-success alert-dismissible fade show bg-transparent" role="alert">
        <span class="alert-icon svg-success" aria-label="Success"></span>
        <div class="pl-4 font-weight-bold">
            Your changes have been saved.
        </div>
        <button type="button" class="close p-1 px-3 pb-2" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">×</span>
        </button>
    </div>
    <div class="alert alert-sm border border-info alert-dismissible fade show bg-transparent" role="alert">
        <span class="alert-icon svg-info" aria-label="Info"></span>
        <div class="pl-4 font-weight-bold">
            Your changes have been saved.
        </div>
        <button type="button" class="close p-1 px-3 pb-2" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">×</span>
        </button>
    </div>
    <div class="alert alert-sm border border-warning alert-dismissible fade show bg-transparent" role="alert">
        <span class="alert-icon svg-warning" aria-label="Warning"></span>
        <div class="pl-4 font-weight-bold">
            Your changes have been saved.
        </div>
        <button type="button" class="close p-1 px-3 pb-2" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">×</span>
        </button>
    </div>
    <div class="alert alert-sm border border-danger alert-dismissible fade show bg-transparent" role="alert">
        <span class="alert-icon svg-error" aria-label="Danger"></span>
        <div class="pl-4 font-weight-bold">
            Your changes have been saved.
        </div>
        <button type="button" class="close p-1 px-3 pb-2" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">×</span>
        </button>
    </div>
    <div class="alert border border-success alert-dismissible fade show bg-transparent" role="alert">
        <span class="alert-icon svg-success" aria-label="Success"></span>
        <div class="pl-3 ml-3 font-weight-bold">
            Your changes have been saved.
        </div>
        <button type="button" class="close pb-3" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert border border-info alert-dismissible fade show bg-transparent" role="alert">
        <span class="alert-icon svg-info" aria-label="Info"></span>
        <div class="pl-3 ml-3 font-weight-bold">
            Your changes have been saved.
        </div>
        <button type="button" class="close pb-3" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert border border-warning alert-dismissible fade show bg-transparent" role="alert">
        <span class="alert-icon svg-warning" aria-label="Warning"></span>
        <div class="pl-3 ml-3 font-weight-bold">
            Your changes have been saved.
        </div>
        <button type="button" class="close pb-3" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert border border-danger alert-dismissible fade show bg-transparent" role="alert">
        <span class="alert-icon svg-error" aria-label="Danger"></span>
        <div class="pl-3 ml-3 font-weight-bold">
            Your changes have been saved.
        </div>
        <button type="button" class="close pb-3" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert alert-lg border border-success alert-dismissible fade show bg-transparent" role="alert">
        <span class="alert-icon svg-success" aria-label="Success"></span>
        <div class="pl-5 font-weight-bold">
            Your changes have been saved.
        </div>
        <button type="button" class="close mt-1" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert alert-lg border border-info alert-dismissible fade show bg-transparent" role="alert">
        <span class="alert-icon svg-info" aria-label="Info"></span>
        <div class="pl-5 font-weight-bold">
            Your changes have been saved.
        </div>
        <button type="button" class="close mt-1" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert alert-lg border border-warning alert-dismissible fade show bg-transparent" role="alert">
        <span class="alert-icon svg-warning" aria-label="Warning"></span>
        <div class="pl-5 font-weight-bold">
            Your changes have been saved.
        </div>
        <button type="button" class="close mt-1" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert alert-lg border border-danger alert-dismissible fade show bg-transparent" role="alert">
        <span class="alert-icon svg-error" aria-label="Danger"></span>
        <div class="pl-5 font-weight-bold">
            Your changes have been saved.
        </div>
        <button type="button" class="close mt-1" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert alert-lg border border-danger alert-dismissible fade show bg-transparent text-dark" role="alert">
        <span class="alert-icon svg-error mt-2" aria-label="Danger"></span>
        <div class="pl-5">
            <div class="font-weight-bold">Your changes have been saved.</div>
            <p class="mb-0">You may now log-in with the username you have chosen.</p>
        </div>
        <button type="button" class="close mt-1" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert border-0 alert-sm bg-transparent px-0" role="alert">
        <span class="alert-icon svg-success" aria-label="Success"></span>
        <div class="ml-4 font-weight-bold">
            Your changes have been saved.
        </div>
    </div>
    <div class="bg-dark">
        <!-- Custom Alerts
        ======================================= -->
        <div class="alert alert-sm border border-success alert-dismissible fade show bg-transparent text-white" role="alert">
            <span class="alert-icon svg-success" aria-label="Success"></span>
            <div class="pl-4 font-weight-bold">
                Your changes have been saved.
            </div>
            <button type="button" class="close p-1 px-3 pb-2" data-dismiss="alert" aria-label="Close">
            <span class="text-white" aria-hidden="true">×</span>
            </button>
        </div>
        <div class="alert border border-info alert-dismissible fade show bg-transparent text-white" role="alert">
            <span class="alert-icon svg-info" aria-label="Info"></span>
            <div class="pl-3 ml-3 font-weight-bold">
                Your changes have been saved.
            </div>
            <button type="button" class="close pb-3" data-dismiss="alert" aria-label="Close">
            <span class="text-white" aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="alert alert-lg border border-warning alert-dismissible fade show bg-transparent text-white" role="alert">
            <span class="alert-icon svg-warning" aria-label="Warning"></span>
            <div class="pl-5 font-weight-bold">
                Your changes have been saved.
            </div>
            <button type="button" class="close mt-1" data-dismiss="alert" aria-label="Close">
            <span class="text-white" aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="alert alert-lg border border-danger alert-dismissible fade show bg-transparent text-white" role="alert">
            <span class="alert-icon svg-error mt-2" aria-label="Danger"></span>
            <div class="pl-5 font-weight-bold">
                <div class="font-weight-bold">Your changes have been saved.</div>
                <p class="mb-0"><small>You may now log-in with the username you have chosen.</small></p>
            </div>
            <button type="button" class="close mt-1" data-dismiss="alert" aria-label="Close">
            <span class="text-white" aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="alert border-0 alert-sm bg-transparent px-0 text-white" role="alert">
            <span class="alert-icon svg-success" aria-label="Success"></span>
            <div class="ml-4 font-weight-bold">
                Your changes have been saved.
            </div>
        </div>
    </div>

{% endcapture %} {% include example.html content=example %}

### Additional content

Alerts can also contain additional HTML elements like headings, paragraphs and dividers.

{% capture example %}
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
{% endcapture %}
{% include example.html content=example %}


### Dismissing

Using the alert JavaScript plugin, it's possible to dismiss any alert inline. Here's how:

- Be sure you've loaded the alert plugin, or the compiled Boosted JavaScript.
- If you're building our JavaScript from source, it [requires `util.js`]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/javascript/#util). The compiled version includes this.
- Add a dismiss button and the `.alert-dismissible` class, which adds extra padding to the right of the alert and positions the `.close` button.
- On the dismiss button, add the `data-dismiss="alert"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.
- To animate alerts when dismissing them, be sure to add the `.fade` and `.show` classes.

You can see this in action with a live demo:

{% capture example %}
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
{% endcapture %}
{% include example.html content=example %}

## JavaScript behavior

### Triggers

Enable dismissal of an alert via JavaScript:

{% highlight js %}
$('.alert').alert()
{% endhighlight %}

Or with `data` attributes on a button **within the alert**, as demonstrated above:

{% highlight html %}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
{% endhighlight %}

Note that closing an alert will remove it from the DOM.

### Methods

| Method | Description |
| --- | --- |
| `$().alert()` | Makes an alert listen for click events on descendant elements which have the `data-dismiss="alert"` attribute. (Not necessary when using the data-api's auto-initialization.) |
| `$().alert('close')` | Closes an alert by removing it from the DOM. If the `.fade` and `.show` classes are present on the element, the alert will fade out before it is removed. |
| `$().alert('dispose')` | Destroys an element's alert. |

{% highlight js %}$(".alert").alert('close'){% endhighlight %}

### Events

Boosted's alert plugin exposes a few events for hooking into alert functionality.

| Event | Description |
| --- | --- |
| `close.bs.alert` | This event fires immediately when the <code>close</code> instance method is called. |
| `closed.bs.alert` | This event is fired when the alert has been closed (will wait for CSS transitions to complete). |

{% highlight js %}
$('#myAlert').on('closed.bs.alert', function () {
  // do something...
})
{% endhighlight %}
