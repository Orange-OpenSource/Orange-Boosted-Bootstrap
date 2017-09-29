---
layout: docs
title: Orange priority nav
description: Add a "more" button when space for nav-items runs short
group: components
toc: true
---

## Scope

Priority nav plugin can be used on [local navigation]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/local-navigation), [nav tabs]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/navs/#tabs) and [nav pills]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/navs/#pills).

## Usage

The plugin is initialised via javascript.

{% highlight js %}
$('.o-nav-local').prioritynav();
{% endhighlight %}

## Example

Reduce the size of your browser to see overflowing nav items moved into a nice dropdown menu.

{% example html %}
<div class="o-nav-local">
    <nav class="container-fluid">
        <ul class="nav">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Introduction</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Usage</a></li>
            <li class="nav-item"><a class="nav-link" href="#">References</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Shopping</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Organisation</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Worldwilde</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contact Us</a></li>
        </ul>
    </nav>
</div>
{% endexample %}

## Options

Use with no parameter the label 'More' is used as default. For custom labeling use the following :

{% highlight js %}
$('.o-nav-local').prioritynav('Custom label');
{% endhighlight %}

You can as well use an empty string for no text label.

{% highlight js %}
$('.o-nav-local').prioritynav('');
{% endhighlight %}