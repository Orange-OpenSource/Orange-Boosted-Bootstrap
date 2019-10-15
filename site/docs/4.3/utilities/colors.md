---
layout: docs
title: Colors
description: Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.
group: utilities
toc: true
---

## Color

<!-- Boosted mod -->
{% capture example %}
{% for color in site.data.theme-colors %}
<p class="text-{{ color.name }}">.text-{{ color.name }}</p>{% endfor %}
<p class="text-body">.text-body</p>
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
{% endcapture %}
{% include example.html content=example %}
<!-- end mod -->

Contextual text classes also work well on anchors with the provided hover and focus states. **Note that the `.text-white` and `.text-muted` class has no additional link styling beyond underline.**

{% capture example %}
{% for color in site.data.theme-colors %}
<p><a href="#" class="text-{{ color.name }}">{{ color.name | capitalize }} link</a></p>{% endfor %}
<p><a href="#" class="text-muted">Muted link</a></p>
<p><a href="#" class="text-white bg-dark">White link</a></p>
{% endcapture %}
{% include example.html content=example %}

## Background color

Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities **do not set `color`**, so in some cases you'll want to use `.text-*` utilities.

<!-- Boosted mod -->
{% capture example %}
{% for color in site.data.theme-colors %}
<div class="p-3 mb-2 bg-{{ color.name }}">.bg-{{ color.name }}</div>{% endfor %}
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
<div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
{% endcapture %}
{% include example.html content=example %}
<!-- end mod -->

## Background gradient

When `$enable-gradients` is set to `true` (default is `false`), you can use `.bg-gradient-` utility classes. [Learn about our Sass options]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/theming/#sass-options) to enable these classes and more.

{% for color in site.data.theme-colors %}
- `.bg-gradient-{{ color.name }}`{% endfor %}

{% capture callout %}
#### Dealing with specificity

Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` with the class.
{% endcapture %}
{% include callout.html content=callout type="info" %}

{% include callout-warning-color-assistive-technologies.md %}
