---
layout: docs
title: Orange navbar
group: components
---

Orange navbar is based on the [navbar](../navbar) component. It adds some display management and introduces the supra bar component.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Main navbar

Orange navbar is the main navigation of project website. It should always be included in a `<header role="banner">` tag.

{% example html %}
<header role="banner">
    <nav class="navbar navbar-dark">
        <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
            <span class="sr-only">toggle navigation</span>
            <span class="icon-menu"></span>
        </button>
        <div class="container" >
            <a class="navbar-brand logo"><img src="../../dist/img/ORANGE_LOGO_rgb.jpg" alt="Back to homepage" title="Back to homepage"/></a>
            <ul class="nav navbar-nav collapse navbar-toggleable-xs" id="collapsingNavbar3">
                <li class="nav-item"><a class="nav-link" href="#">Discover</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
                <li class="nav-item"><a href="#" class="nav-link">My Orange</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Help</a></li>
            </ul>
            <ul class="nav navbar-nav float-xs-right">
                <li class="nav-item">
                    <a href="#" class="nav-link icon">
                        <span class="sr-only">open basket</span>
                        <span class="icon-buy" aria-hidden="true"></span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link icon">
                        <span class="sr-only">open search bar</span>
                        <span class="icon-search" aria-hidden="true"></span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</header>
{% endexample %}

Using icons as links is possible, be sure to add the `.icon` class to the `.nav-link` element for proper alignement.

## Supra bar

Another navigation can be added on top of orange navbar, it is called supar bar. Simply add the `.supra` class in you navbar delcaration.

{% example html %}
<nav class="navbar navbar-dark supra">
    <div class="container">
        <ul class="nav navbar-nav">
            <li class="nav-item"><a href="#" class="nav-link active">Personal</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Business</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Follow us</a></li>
        </ul>
        <ul class="nav navbar-nav float-xs-right">
            <li class="nav-item">
                    <a href="#" class="nav-link icon">
                    <span class="sr-only">basket</span>
                    <span class="icon-buy" aria-hidden="true"></span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link icon">
                    <span class="sr-only">my account</span>
                    <span class="icon-avatar"></span>
                </a>
            </li>
            <li class="nav-item dropdown">
                <a class="dropdown-toggle" href="#" data-toggle="dropdown">EN</a>
                <ul class="dropdown-menu" role="menu">
                    <li><a class="dropdown-item" href="#">FR</a></li>
                    <li><a class="dropdown-item" href="#">SP</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
{% endexample %}

A supra bar should never be used on its own and always be included in header and with the regular navbar, which gives :

## Full example

{% example html %}
<header role="banner" id="demo_navbar">
    <nav class="navbar navbar-dark supra">
        <div class="container">
            <ul class="nav navbar-nav">
                <li class="nav-item"><a href="#" class="nav-link active">Personal</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Business</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Follow us</a></li>
            </ul>
            <ul class="nav navbar-nav float-xs-right">
                <li class="nav-item">
                        <a href="#" class="nav-link icon">
                        <span class="sr-only">basket</span>
                        <span class="icon-buy" aria-hidden="true"></span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link icon">
                        <span class="sr-only">my account</span>
                        <span class="icon-avatar"></span>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle" href="#" data-toggle="dropdown">EN</a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a class="dropdown-item" href="#">FR</a></li>
                        <li><a class="dropdown-item" href="#">SP</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    <nav class="navbar navbar-dark">
        <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
            <span class="sr-only">toggle navigation</span>
            <span class="icon-menu"></span>
        </button>
        <div class="container" >
            <a class="navbar-brand logo"><img src="../../dist/img/ORANGE_LOGO_rgb.jpg" alt="Back to homepage" title="Back to homepage"/></a>
            <ul class="nav navbar-nav collapse navbar-toggleable-xs" id="collapsingNavbar2">
                <li class="nav-item"><a class="nav-link" href="#">Discover</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
                <li class="nav-item"><a href="#" class="nav-link">My Orange</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Help</a></li>
            </ul>
            <ul class="nav navbar-nav float-xs-right">
                <li class="nav-item">
                    <a href="#" class="nav-link icon">
                        <span class="sr-only">open basket</span>
                        <span class="icon-buy" aria-hidden="true"></span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link icon">
                        <span class="sr-only">open search bar</span>
                        <span class="icon-search" aria-hidden="true"></span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</header>
{% endexample %}

## Options

Using javascript your can initialize the navbar component with the following options :

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
     <tr>
       <th style="width: 100px;">Name</th>
       <th style="width: 50px;">Type</th>
       <th style="width: 50px;">Default</th>
       <th>Description</th>
     </tr>
    </thead>
    <tbody>
     <tr>
       <td>sticky</td>
       <td>boolean</td>
       <td>false</td>
       <td>Tells wether or not the navbar should stick to the top of page</td>
     </tr>
     <tr>
       <td>trigger</td>
       <td>selector</td>
       <td>empty string</td>
       <td>Hides the supra bar when the "trigger" element is no longer in viewport</td>
     </tr>
    </tbody>
  </table>
</div>

## Usage

Using javascript, simply declare your navbar component with the needed options.

{% highlight js %}
$('#demo_navbar').navbar({sticky: true, trigger: '#hide_supra_trigger'});
{% endhighlight %}

See a full implementation in the Orange News [example page](../..//examples/orange-news/)
