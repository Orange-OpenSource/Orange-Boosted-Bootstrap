---
layout: docs
title: Orange megamenu
description: Boosted mega-menu is use for landing page with many cross-link
group: components
toc: true
---

## Usage

The plugin is initialised via javascript. Make sure to target the element containing the `.mega-menu` class.

{% highlight js %}
$('#megamenu').megamenu();
{% endhighlight %}

HTML markup and especially `<ul>` menu structure must follow this example:

{% capture example %}
<header role="banner">
    <nav class="navbar navbar-dark navbar-expand-md" role="navigation">
        <div class="container-lg">
          <a class="navbar-brand" href="#">
            <img src="../../dist/img/orange_logo.svg" alt="Back to homepage" title="Back to homepage" width="50" height="50"/>
          </a>
          <button class="navbar-toggler d-md-none collapsed" type="button" 
                  data-toggle="collapse" data-target="#megamenu" 
                  aria-controls="megamenu" aria-expanded="false" aria-label="Toggle navigation">
            <span aria-hidden="true" class="navbar-toggler-icon"></span>
          </button>
          <div class="mega-menu navbar-collapse collapse" id="megamenu">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#mega-level-1-collapse" data-toggle="collapse">Shop</a>
                <div class="mega-menu-panel collapse" id="mega-level-1-collapse">
                  <div class="container-lg">
                    <a class="nav-link all" href="#">View all shop</a>
                    <a class="nav-link close ml-auto" data-toggle="collapse" href="#mega-level-1-collapse" aria-expanded="false" aria-controls="mega-level-1-collapse" title="Close shop menu">
                      <span class="sr-only">Close shop menu</span>
                    </a>
                  </div>
                  <div class="container-lg">
                    <ul class="navbar-nav">
                      <li class="nav-item col col-md-4">
                        <a class="nav-link" href="#">Mobile</a>
                        <ul class="navbar-nav">
                          <li class="nav-item"><a class="nav-link back" href="#">Previous</a></li>
                          <li class="nav-item"><span class="nav-heading text-primary">Mobile</span></li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Phones</a>
                            <ul class="navbar-nav">
                              <li class="nav-item"><a class="nav-link back" href="#">Previous</a></li>
                              <li class="nav-item"><span class="nav-heading text-primary">Phone</span></li>
                              <li class="nav-item"><a class="nav-link" href="#">iPhone</a></li>
                              <li class="nav-item"><a class="nav-link" href="#">FairPhone</a></li>
                              <li class="nav-item"><a class="nav-link" href="#">Samsung</a></li>
                            </ul>
                          </li>
                          <li class="nav-item"><a class="nav-link active" href="#">Plans</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Accessories</a></li>
                        </ul>
                      </li>
                      <li class="nav-item col col-md-4">
                        <a class="nav-link" href="#">Internet</a>
                        <ul class="navbar-nav">
                          <li class="nav-item"><a class="nav-link back" href="#">Previous</a></li>
                          <li class="nav-item"><span class="nav-heading text-primary">Internet</span></li>
                          <li class="nav-item"><a class="nav-link" href="#">Pay monthly offers</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Shared plans</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Orange TV</a></li>
                        </ul>
                      </li>
                      <li class="nav-item col col-md-4">
                        <a class="nav-link" href="#">Link 3</a>
                        <ul class="navbar-nav">
                          <li class="nav-item"><a class="nav-link back" href="#">Previous</a></li>
                          <li class="nav-item"><span class="nav-heading text-primary">Link 3</span></li>
                          <li class="nav-item"><a class="nav-link" href="#">Item 1</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Item 2</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Item 3</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Item 4</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Item 5</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Item 6</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Item 7</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Item 8</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Item 9</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Item 10</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Item 11</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Item 12</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Item 13</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#mega-level-2-collapse" data-toggle="collapse">Discover</a>
                <div class="mega-menu-panel collapse" id="mega-level-2-collapse">
                  <div class="container-lg">
                    <a class="nav-link all" href="#">View all discoveries</a>
                    <a class="nav-link close ml-auto" data-toggle="collapse" href="#mega-level-2-collapse" aria-expanded="false" aria-controls="mega-level-2-collapse" title="Close discover menu">
                      <span class="sr-only">Close discover menu</span>
                    </a>
                  </div>
                  <div class="container-lg">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link" href="#">Test 1</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="nav-item"><a class="nav-link" href="#">My Orange</a></li>
            </ul>
          </div>
        </div>
      </nav>
</header>
{% endcapture %}
{% include example.html content=example %}

## Options

Megamenu can be initialised to point to a specific menu item when main menu is opened. Call the init method with wanted item id.

{% highlight js %}
$('#megamenu').megamenu({ target: '#testLink' });
{% endhighlight %}

You might as well keep control on focus when page is loaded, thus disabling focus on targeted item.

{% highlight js %}
$('#megamenu').megamenu({ target: '#testLink', noFocus: true });
{% endhighlight %}

Default value for parameter `noFocus` is `false`.

See a full implementation in the Orange News [example page](../../examples/news-template/)
