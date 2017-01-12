---
layout: docs
title: Orange megamenu
description: Boosted mega-menu is use for landing page with many cross-link
group: components
---

Megamenu is based on the [collapse](../collapse) component.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

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
    <div class="collapse show" id="collapseExample" aria-labelledby="menu_title">
        <div class="container">
            <h2 role="presentation" id="menu_title"><a aria-hidden="true" href="#">Home Shop</a></h2>
            <div class="row">
                <div class="col-12 col-md-3">
                    <h3 id="list_title_1"><a href="#">Internet</a></h3>
                    <ul aria-labelledby="list_title_1" role="menu">
                        <li role="menuitem"><a href="#">iPhone 6</a></li>
                        <li role="menuitem"><a href="#">Phones </a></li>
                        <li role="menuitem"><a href="#">Tablets</a></li>
                        <li role="menuitem"><a href="#">Accessories</a></li>
                        <li role="menuitem"><a href="#">Coming soon</a></li>
                    </ul>
                </div>
                <div class="col-12 col-md-3">
                    <h3 id="list_title_2"><a href="#">Mobile</a></h3>
                    <ul aria-labelledby="list_title_2" role="menu">
                        <li role="menuitem"><a href="#">Phones </a></li>
                        <li role="menuitem"><a href="#">Plans</a></li>
                        <li role="menuitem"><a href="#">Accessories</a></li>
                        <li role="menuitem"><a href="#">Connected objects</a></li>
                        <li role="menuitem"><a href="#">Options</a></li>
                        <li role="menuitem"><a href="#">Bundles</a></li>
                    </ul>
                </div>
                <div class="col-12 col-md-3">
                    <h3 id="list_title_3"><a href="#">Lorem</a></h3>
                    <ul aria-labelledby="list_title_3" role="menu">
                        <li role="menuitem"><a href="#">Lorem ipsum </a></li>
                        <li role="menuitem"><a href="#">Lorem ipsum</a></li>
                        <li role="menuitem"><a href="#">Lorem ipsum</a></li>
                        <li role="menuitem"><a href="#">Lorem ipsum</a></li>
                    </ul>
                </div>
                <div class="col-12 col-md-3">
                    <h3 id="list_title_4"><a href="#">Ipsum</a></h3>
                    <ul aria-labelledby="list_title_4" role="menu">
                        <li role="menuitem"><a href="#">Lorem ipsum </a></li>
                        <li role="menuitem"><a href="#">Lorem ipsum</a></li>
                        <li role="menuitem"><a href="#">Lorem ipsum</a></li>
                        <li role="menuitem"><a href="#">Lorem ipsum</a></li>
                    </ul>
                </div>
            </div>
            <div class="row footer">
                <div class="float-md-left">
                    <a href="#">Footer link</a>
                </div>
                <div class="float-md-right hidden-xs-down">
                    <a data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample" title="close shop menu"><span class="icon-delete"></span></a>
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
