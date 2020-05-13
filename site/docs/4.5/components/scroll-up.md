---
layout: docs
title: Scroll up
description: Back to top component to be used on longer pages
group: components
toc: true
---

## Scroll up auto display
Displays a link at the bottom right of the page after scrolling down one page height. 

Adds a link at the end of the page with the `o-scroll-up` class. The “Back to top” text is only shown on desktop display — but you can change the breakpoint in [the `d-{breakpoint}-inline-block` utility]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display/). The arrow up icon is added via CSS. 
For accessibility reasons, add a `title` to the link that's **consistent** with text content.

{% highlight html %}
<a href="#" class="o-scroll-up" title="back to top">
  <span class="d-none d-sm-inline-block">Back to top</span>
</a>
{% endhighlight %}

## Scroll up static
Displays a static “Back to top” link, by adding it in the page with the `o-scroll-up` and `static` class.
{% capture example %}
<a href="#" class="o-scroll-up static" title="back to top">
  <span class="d-none d-sm-inline-block">Back to top</span>
</a>
{% endcapture %} {% include example.html content=example %}

## Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-target="#anchor"`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 100px;">Type</th>
      <th style="width: 50px;">Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>target</td>
      <td>string</td>
      <td>null</td>
      <td>Allow you to specify a query selector of the custom top of the page. If it's set the go back to top action will scroll into the view to this anchor instead of positionning the offset top to 0</td>
    </tr>
  </tbody>
</table>
