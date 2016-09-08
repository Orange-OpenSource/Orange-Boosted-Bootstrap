---
layout: docs
title: Scroll up
group: components
---

Scroll up

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Scroll up 

Displays a link at the bottom right of the page after scrolling down one page height. On desktop this link displays the “Back to top” text and an icon.On mobile it only displays the icon.

Adds a link at the end of the page with the `o-scroll-up` class. The link is made up of 2 elements. The first element is a text with the `.o-scroll-up-text` class, shown only on desktop display (you can change the breakpoint if needed). The second element is the arrow up icon, with the `.o-scroll-up-icon` class. For accessibility reasons, add a consistant `title` to the link, and add `aria-hidden='true'` to the icon.

{% highlight html %}
<a href="#" class="o-scroll-up" title="back to top">
  <span class="o-scroll-up-text hidden-sm-down">Back to top</span>
  <span class="o-scroll-up-icon" aria-hidden="true"></span>
</a>
{% endhighlight %}

You can see a sample on how it works by scrolling this page.
