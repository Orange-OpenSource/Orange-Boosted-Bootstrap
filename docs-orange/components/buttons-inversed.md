---
layout: docs
title: Buttons inversed
group: components
---

Use with dark backgrounds.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Dark backgrounds

To get the inversed button behaviour, simply add `.btn-inverse` class to your `<button>` or `<a>` tag.

{% example html %}
<div style="background-color: black; padding: 2rem">
    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
    <button type="button" class="btn btn-inverse btn-primary">Primary</button>

    <!-- Secondary, outline button -->
    <button type="button" class="btn btn-inverse btn-secondary">Secondary</button>

    <!-- Indicates a successful or positive action -->
    <button type="button" class="btn btn-inverse btn-success">Success</button>

    <!-- Contextual button for informational alert messages -->
    <button type="button" class="btn btn-inverse btn-info">Info</button>

    <!-- Indicates caution should be taken with this action -->
    <button type="button" class="btn btn-inverse btn-warning">Warning</button>

    <!-- Indicates a dangerous or potentially negative action -->
    <button type="button" class="btn btn-inverse btn-danger">Danger</button>

    <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
    <button type="button" class="btn btn-inverse btn-link">Link</button>
</div>
{% endexample %}

{% example html %}
<div style="background-color: #595959; padding: 2rem">
    <button type="button" class="btn btn-inverse btn-primary">Primary</button>

    <button type="button" class="btn btn-inverse btn-secondary">Secondary</button>

    <button type="button" class="btn btn-inverse btn-success">Success</button>

    <button type="button" class="btn btn-inverse btn-info">Info</button>

    <button type="button" class="btn btn-inverse btn-warning">Warning</button>

    <button type="button" class="btn btn-inverse btn-danger">Danger</button>

    <button type="button" class="btn btn-inverse btn-link">Link</button>
</div>
{% endexample %}

## Light backgrounds

The default styles can be used on secondary colors backgrounds, in this case remove the `.btn-inverse` class if any.

{% example html %}
<div style="background-color: #4bb4e6; padding: 2rem">
    <button type="button" class="btn btn-primary">Primary</button>

    <button type="button" class="btn btn-secondary">Secondary</button>

    <button type="button" class="btn btn-success">Success</button>

    <button type="button" class="btn btn-info">Info</button>

    <button type="button" class="btn btn-warning">Warning</button>

    <button type="button" class="btn btn-danger">Danger</button>

    <button type="button" class="btn btn-link">Link</button>
</div>
{% endexample %}
