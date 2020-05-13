---
layout: docs
title: Orange navbar
description: Orange specific navbar used for Orange portal.
group: components
toc: true
---

## How it works

Orange navbar is based on the [navbar](../navbar) component. It adds some display management and introduces the supra bar component.

## Main navbar

Orange navbar is the main navigation of project website. It should always be included in a `<header role="banner">` tag.

{% capture example %}
<header role="banner">
    <nav role="navigation" class="navbar navbar-dark navbar-expand-md">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="{{ site.baseurl }}/docs/{{ site.docs_version }}/dist/img/orange_logo.svg" alt="Back to homepage" title="Back to homepage" width="50" height="50" loading="lazy"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsing-navbar" aria-controls="collapsing-navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse justify-content-between collapse" id="collapsing-navbar">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link active" href="#" aria-current="page">Discover</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">My Orange</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Help</a></li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link nav-icon svg-buy">
                            <span class="sr-only">open basket</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link nav-icon svg-search">
                            <span class="sr-only">open search bar</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
{% endcapture %} {% include example.html content=example %}

Using icons as links is possible, be sure to add the `.icon` class to the `.nav-link` element for proper alignement.

{% capture callout %}
#### Accessibility

In addition to the `.active` class, you must use `aria-current="page"` attribute to represent the current item within the navigation group. This is to ensure a better accessibility to assistive technologies (such as screenreaders, screen magnifiers…) that support it by informing the user about the current element.
{% endcapture %} {% include callout.html content=callout type='warning' %}

## Supra bar

Another navigation can be added on top of orange navbar, it is called supar bar. Simply add the `.supra` class in you navbar declaration.
 
{% capture callout %}
This navbar is visible only on desktop view.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

{% capture example %}
<nav role="navigation" class="navbar navbar-dark navbar-expand-md supra">
    <div class="container">
        <ul class="navbar-nav">
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Personal</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Business</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Follow us</a></li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a href="#" class="nav-link nav-icon svg-buy">
                    <span class="sr-only">basket</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link nav-icon svg-avatar">
                    <span class="sr-only">my account</span>
                </a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">EN</a>
                <ul class="dropdown-menu" role="menu">
                    <li><a class="dropdown-item" href="#" aria-label="Version française" lang="fr" hreflang="fr">FR</a></li>
                    <li><a class="dropdown-item" href="#" aria-label="Version en español" lang="es" hreflang="es">ES</a></li>
                    <li><a class="dropdown-item" href="#" aria-label="Deutschsprachige Version" lang="de" hreflang="de">DE</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
{% endcapture %} {% include example.html content=example %}

A supra bar should never be used on its own and always be included in header and with the regular navbar, which gives :

## Full example

{% capture example %}
<header role="banner" id="demo-navbar">
    <nav role="navigation" class="navbar navbar-dark navbar-expand-md supra" aria-label="Complementary navigation">
        <div class="container">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Personal</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Business</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Follow us</a></li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                        <a href="#" class="nav-link nav-icon svg-buy">
                        <span class="sr-only">basket</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link nav-icon svg-avatar">
                        <span class="sr-only">my account</span>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">EN</a>
                    <ul class="dropdown-menu dropdown-menu-right" role="menu">
                        <li><a class="dropdown-item" href="#">FR</a></li>
                        <li><a class="dropdown-item" href="#">SP</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    <nav role="navigation" class="navbar navbar-dark navbar-expand-md" aria-label="Main navigation">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="{{ site.baseurl }}/docs/{{ site.docs_version }}/dist/img/orange_logo.svg" alt="Back to homepage" title="Back to homepage" width="50" height="50" loading="lazy"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsing-navbar2" aria-controls="collapsing-navbar2" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse justify-content-between collapse" id="collapsing-navbar2">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#">Discover</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">My Orange</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Help</a></li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link nav-icon svg-buy">
                            <span class="sr-only">open basket</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link nav-icon svg-search">
                            <span class="sr-only">open search bar</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
{% endcapture %} {% include example.html content=example %}

## Options

Using javascript your can initialize the navbar component with the following options :

<table class="table table-bordered table-striped table-responsive">
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
      <td>hideSupra</td>
      <td>boolean</td>
      <td>false</td>
      <td>Hides the supra bar on page scroll. Show when scroll to top.</td>
    </tr>
  </tbody>
</table>

## Usage

Using javascript, simply declare your navbar component with the needed options.

{% highlight js %}
$('#demo-navbar').navbar({sticky: true, hideSupra: true});
{% endhighlight %}

See a full implementation in the Orange News [example page](../../examples/news-template/)
