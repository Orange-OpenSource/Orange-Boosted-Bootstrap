---
layout: docs
title: Scroll up
description: Back to top component to be used on longer pages
group: components
toc: true
---

## Scroll up auto display
Displays a link at the bottom right of the page after scrolling down one page height. 
On desktop this link displays the “Back to top” text and an icon. On mobile it only displays the icon.

Adds a link at the end of the page with the `o-scroll-up` class. The link is made up of 2 elements. The first element is a text with the `.o-scroll-up-text` class, shown only on desktop display (you can change the breakpoint if needed). The second element is the arrow up icon, with the `.o-scroll-up-icon` class. For accessibility reasons, add a consistant `title` to the link, and add `aria-hidden='true'` to the icon.

You can see a sample on how it works by scrolling this page.

{% highlight html %}
<a href="#" class="o-scroll-up" title="back to top">
  <span class="o-scroll-up-text d-none d-sm-inline-block">Back to top</span>
  <span class="o-scroll-up-icon" aria-hidden="true"></span>
</a>
{% endhighlight %}

## Scroll up static
Displays a link in the page with the arrow up icon.

Adds a link in the page with the `o-scroll-up` and `static` class. 
You can let the text `.o-scroll-up-text` display on all devices.
{% capture example %}
<a href="#" class="o-scroll-up static" title="back to top">
  <span class="o-scroll-up-text">Back to top</span>
  <span class="o-scroll-up-icon" aria-hidden="true"></span>
</a>
{% endcapture %} {% include example.html content=example %}

