---
layout: docs
title: Orange megamenu
description: Boosted mega-menu is use for landing page with many cross-link
group: components
toc: true
---

## Usage

The plugin is initialised via javascript. Make sure to target the element containinge the `.mega-menu` class.

{% highlight js %}
$('#collapsing-navbarHead').megamenu();
{% endhighlight %}

Html markup and espacially `<ul>` menu hierarchy must absolutely be as follwing example :

{% capture example %}
<header role="banner">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark" role="navigation">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="../../dist/img/orange_logo.svg" alt="Back to homepage" title="Go to homepage" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsing-navbarHead" aria-controls="collapsing-navbarHead"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="mega-menu navbar-collapse collapse" id="collapsing-navbarHead">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link collapsed" href="#mega-level-1-collapse" data-toggle="collapse">Shop</a>
                <div class="mega-menu-panel collapse" id="mega-level-1-collapse">
                  <div class="container">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link" href="">Mobile</a>
                        <ul class="navbar-nav">
                          <li class="nav-item"><a class="nav-link back" href="">Mobile</a></li>
                          <li class="nav-item">
                            <a class="nav-link" href="">Phones</a>
                            <ul class="navbar-nav">
                              <li class="nav-item"><a class="nav-link back" href="">Phones</a></li>
                              <li class="nav-item">
                                <a class="nav-link" href="" id="testLink">Sub link 1</a>
                                <ul class="navbar-nav">
                                  <li class="nav-item"><a class="nav-link back" href="">Sub link 1</a></li>
                                  <li class="nav-item"><a class="nav-link" href="">Sub sub link 1</a></li>
                                  <li class="nav-item"><a class="nav-link" href="">Sub sub link 2</a></li>
                                  <li class="nav-item"><a class="nav-link" href="">Sub sub link 3</a></li>
                                </ul>
                              </li>
                              <li class="nav-item"><a class="nav-link" href="">Sub link 2</a></li>
                              <li class="nav-item"><a class="nav-link" href="">Sub link 3</a></li>
                            </ul>
                          </li>
                          <li class="nav-item"><a class="nav-link" href="">Plans</a></li>
                          <li class="nav-item"><a class="nav-link" href="">Accessories</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="">Internet</a>
                        <ul class="navbar-nav">
                          <li class="nav-item"><a class="nav-link back" href="">Internet</a></li>
                          <li class="nav-item">
                            <a class="nav-link" href="">Pay monthly offers</a>
                            <ul class="navbar-nav">
                              <li class="nav-item"><a class="nav-link back" href="">Pay monthly offers</a></li>
                              <li class="nav-item">
                                <a class="nav-link" href="">Sub link 1</a>
                                <ul class="navbar-nav">
                                  <li class="nav-item"><a class="nav-link back" href="">Sub link 1</a></li>
                                  <li class="nav-item"><a class="nav-link" href="">Sub sub link 1</a></li>
                                  <li class="nav-item"><a class="nav-link" href="">Sub sub link 2</a></li>
                                  <li class="nav-item"><a class="nav-link" href="">Sub sub link 3</a></li>
                                </ul>
                              </li>
                              <li class="nav-item"><a class="nav-link" href="">Sub link 2</a></li>
                              <li class="nav-item"><a class="nav-link" href="">Sub link 3</a></li>
                            </ul>
                          </li>
                          <li class="nav-item"><a class="nav-link" href="">Shared plans</a></li>
                          <li class="nav-item"><a class="nav-link" href="">Orange TV</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link 3</a>
                        <ul class="navbar-nav">
                          <li class="nav-item"><a class="nav-link back" href="">Link 3</a></li>
                          <li class="nav-item"><a class="nav-link" href="">Item 1</a></li>
                          <li class="nav-item"><a class="nav-link" href="">Item 2</a></li>
                          <li class="nav-item"><a class="nav-link" href="">Item 3</a></li>
                          <li class="nav-item"><a class="nav-link" href="">Item 4</a></li>
                          <li class="nav-item"><a class="nav-link" href="">Item 5</a></li>
                          <li class="nav-item"><a class="nav-link" href="">Item 6</a></li>
                          <li class="nav-item"><a class="nav-link" href="">Item 7</a></li>
                          <li class="nav-item"><a class="nav-link" href="">Item 8</a></li>
                          <li class="nav-item"><a class="nav-link" href="">Item 9</a></li>
                          <li class="nav-item"><a class="nav-link" href="">Item 10</a></li>
                          <li class="nav-item"><a class="nav-link" href="">Item 11</a></li>
                          <li class="nav-item"><a class="nav-link" href="">Item 12</a></li>
                          <li class="nav-item"><a class="nav-link" href="">Item 13</a></li>
                        </ul>
                      </li>
                    </ul>
                    <a data-toggle="collapse" href="#mega-level-1-collapse" aria-expanded="true" aria-controls="mega-level-1-collapse" title="close shop menu"><span class="svg-delete"></span></a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link collapsed" href="#mega-level-2-collapse" data-toggle="collapse">Discover</a>
                <div class="mega-menu-panel collapse" id="mega-level-2-collapse">
                  <div class="container">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link" href="">Test 1</a>
                      </li>
                    </ul>
                    <a data-toggle="collapse" href="#mega-level-2-collapse" aria-expanded="false" aria-controls="mega-level-2-collapse" title="close discover menu"><span class="svg-delete"></span></a>
                  </div>
                </div>
              </li>
              <li class="nav-item"><a class="nav-link collapsed" href="" data-toggle="collapse">My Orange</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
{% endcapture %} {% include example.html content=example %}

## Options

Megamenu can be initialised to point to a specific menu item when main menu is opened. Call the init method with wanted item id.

{% highlight js %}
$('#collapsing-navbarHead').megamenu({ target: '#testLink' });
{% endhighlight %}

You might as well keep control on focus when page is loaded, thus disabling focus on targeted item.

{% highlight js %}
$('#collapsing-navbarHead').megamenu({ target: '#testLink', noFocus: true });
{% endhighlight %}

Default value for parameter `noFocus` is `false`.

See a full implementation in the Orange News [example page](../../examples/news-template/)
