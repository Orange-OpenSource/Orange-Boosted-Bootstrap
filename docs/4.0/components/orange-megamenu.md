---
layout: docs
title: Orange megamenu
description: Boosted mega-menu is use for landing page with many cross-link
group: components
toc: true
---

## How it works

Megamenu is based on the [collapse](../collapse) component.

## Megamenu panel

It consists of 3 or 4 columns depending on project design needs. A `h2` title is used as a general title of the megamenu. Each column is headlined by a `h3` title.

Megamenu has a footer section where additional links can be added and a button to close the panel.

{% example html %}
<!-- megamenu toggle -->
<a class="btn btn-info" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Toggle megamenu
</a>

<!-- megamenu content -->
<div class="mega-menu" style="position: static">
    <div class="collapse show" id="collapseExample" aria-labelledby="menu-title">
        <div class="container">
            <h2 role="presentation" id="menu-title"><a aria-hidden="true" href="#">Home Shop</a></h2>
            <div class="row">
                <div class="col-12 col-md-3">
                    <h3 id="list-title-1"><a href="#">Internet</a></h3>
                    <ul aria-labelledby="list-title-1" role="menu">
                        <li role="menuitem"><a href="#">iPhone 6</a></li>
                        <li role="menuitem"><a href="#">Phones </a></li>
                        <li role="menuitem"><a href="#">Tablets</a></li>
                        <li role="menuitem"><a href="#">Accessories</a></li>
                        <li role="menuitem"><a href="#">Coming soon</a></li>
                    </ul>
                </div>
                <div class="col-12 col-md-3">
                    <h3 id="list-title-2"><a href="#">Mobile</a></h3>
                    <ul aria-labelledby="list-title-2" role="menu">
                        <li role="menuitem"><a href="#">Phones </a></li>
                        <li role="menuitem"><a href="#">Plans</a></li>
                        <li role="menuitem"><a href="#">Accessories</a></li>
                        <li role="menuitem"><a href="#">Connected objects</a></li>
                        <li role="menuitem"><a href="#">Options</a></li>
                        <li role="menuitem"><a href="#">Bundles</a></li>
                    </ul>
                </div>
                <div class="col-12 col-md-3">
                    <h3 id="list-title-3"><a href="#">Lorem</a></h3>
                    <ul aria-labelledby="list-title-3" role="menu">
                        <li role="menuitem"><a href="#">Lorem ipsum </a></li>
                        <li role="menuitem"><a href="#">Lorem ipsum</a></li>
                        <li role="menuitem"><a href="#">Lorem ipsum</a></li>
                        <li role="menuitem"><a href="#">Lorem ipsum</a></li>
                    </ul>
                </div>
                <div class="col-12 col-md-3">
                    <h3 id="list-title-4"><a href="#">Ipsum</a></h3>
                    <ul aria-labelledby="list-title-4" role="menu">
                        <li role="menuitem"><a href="#">Lorem ipsum </a></li>
                        <li role="menuitem"><a href="#">Lorem ipsum</a></li>
                        <li role="menuitem"><a href="#">Lorem ipsum</a></li>
                        <li role="menuitem"><a href="#">Lorem ipsum</a></li>
                    </ul>
                </div>
            </div>
            <div class="row footer">
                <div class="col-12 col-sm-11">
                    <a href="#">Promotions</a>
                    <a href="#">Top up</a>
                </div>
                <div class="col-1 d-none d-sm-block">
                    <a class="float-right svg-delete" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample" title="close shop menu"></a>
                </div>
            </div>
        </div>
    </div>
</div>
{% endexample %}

Megamenu should be used in combination with the [navbar](../navbar) component.

Be sure to use `.collapse` classes to the megamenu section and `data-parent` attribute in the navbar `.nav-link` get an opened megamenu closed when another gets opened.

## Usage

Using javascript, simply declare your navbar component with the needed options.

{% highlight js %}
$('.mega-menu').megamenu();
{% endhighlight %}

See a full implementation in the Orange News [example page](../..//examples/orange-news/)
