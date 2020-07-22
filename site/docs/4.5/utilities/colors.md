---
layout: docs
title: Colors
description: Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.
group: utilities
toc: true
---


[comment]: # Boosted mod
## Accessibility

When using `.text-*` and `.bg-*` utilities, **contrasts are locked to ensure they're sufficient** by defining `color` and `background-color` altogether.
Please refer to [accessibility's color contrast section]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/accessibility/#color-contrast) to have a full preview of Boosted color palette's contrast ratios. 

[comment]: # end mod

{% capture callout %}
#### Dealing with specificity

Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` with the class.
{% endcapture %}
{% include callout.html content=callout type="info" %}

{% include callout-warning-color-assistive-technologies.md %}

## Color

[comment]: # Boosted mod
`.text-*` utilities are meant to modify text color, but also **set a `background-color` to ensure contrasts**.

{% capture example %}
{% for color in site.data.theme-colors %}{% unless color.name == "success" or color.name == "warning" or color.name == "danger" or color.name == "info" %}
<p class="text-{{ color.name }}">.text-{{ color.name }}</p>{% endunless %}{% endfor %}
<p class="text-body">.text-body</p>
<p class="text-muted">.text-muted</p>
<p class="text-white">.text-white</p>
{% endcapture %}
{% include example.html content=example %}

Contextual text classes also work well on anchors with the provided hover and focus states. **Note that the `.text-white` and `.text-muted` class has no additional link styling beyond underline.**

Boosted also handle color variation on hover (lighten or darken) **depending on contrast ratio**.

{% capture example %}
{% for color in site.data.theme-colors %}{% unless color.name == "success" or color.name == "warning" or color.name == "danger" or color.name == "info" %}
<p><a href="#" class="text-{{ color.name }}">{{ color.name | capitalize }} link</a></p>{% endunless %}{% endfor %}
<p><a href="#" class="text-muted">Muted link</a></p>
<p><a href="#" class="text-white">White link</a></p>
{% endcapture %}
{% include example.html content=example %}

[comment]: # end mod

## Background color

[comment]: # Boosted mod
Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken or lighten on hover, just like the text classes.

{% capture example %}
<!-- Boosted mod -->
<div class="p-3 mb-2 bg-primary">.bg-primary</div>
<div class="p-3 mb-2 bg-secondary">.bg-secondary</div>
<div class="p-3 mb-2 bg-success">.bg-success</div>
<div class="p-3 mb-2 bg-danger">.bg-danger</div>
<div class="p-3 mb-2 bg-warning">.bg-warning</div>
<div class="p-3 mb-2 bg-info">.bg-info</div>
<div class="p-3 mb-2 bg-purple">.bg-purple</div>
<div class="p-3 mb-2 bg-light">.bg-light</div>
<div class="p-3 mb-2 bg-white">.bg-white</div>
<div class="p-3 mb-2 bg-transparent">.bg-transparent</div>
<!-- end mod -->
{% endcapture %}
{% include example.html content=example %}

[comment]: # Boosted mod: no gradient
