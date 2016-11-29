---
layout: docs
title: Orange links
group: components
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Default

By default, links are black, and not underlined

{% example html %}
<a href="#">This is a sample default link</a>
{% endexample %}

## Underlined

A link into a p tag become underlined, to be clearly identified.

{% example html %}
<p>Some text in a paragraph, and so <a href="#">the link are underline</a></p>
{% endexample %}

## With arrow

Add the class o-link-arrow to a link, add an arrow after the text link.

{% example html %}
<a href="#" class="o-link-arrow">This is a sample link with arrow</a>
{% endexample %}

## With back arrow

To convert arrow link to backward link, add back to the link with class o-link-arrow.

{% example html %}
<a href="#" class="o-link-arrow back">This is a sample link with arrow for backward</a>
{% endexample %}