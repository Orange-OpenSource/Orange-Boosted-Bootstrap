---
layout: docs
title: Local navigation
group: components
---

## Default local navigation

Add the `.nav-local` class to the nav tag, `.local` onto the nav links content, and a `div` tag with the class `arrow` with the `attribute aria-hidden='true'` to switch from classic navbar to Orange local navigation.

{% example html %}
<nav class="navbar nav-local">
    <button type="button" class="navbar-toggler hidden-sm-up" data-toggle="collapse" data-target="#exCollapsingNavbar1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
    </button>

    <div class="collapse navbar-toggleable-xs local" id="exCollapsingNavbar1">
        <ul class="nav navbar-nav">
            <li class="nav-item"><a class="nav-link active" href="#">Voluptatem<div class='arrow' aria-hidden='true'></div></a></li>
            <li class="nav-item"><a class="nav-link" href="#">Unde omnis istea<div class='arrow' aria-hidden='true'></div></a></li>
            <li class="nav-item dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" id="dropdownMenu1">Dropdown <b class="caret" aria-hidden="true"></b></a>
            <div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                <a href="#" role="menuitem" class="dropdown-item">Action</a>
                <a href="#" role="menuitem" class="dropdown-item">Another action</a>
                <a href="#" role="menuitem" class="dropdown-item">Something else here</a>
                <div class="dropdown-divider"></div>
                <a href="#" role="menuitem" class="dropdown-item">Separated link</a>
            </div>
            </li>
        </ul>
        <ul class="nav navbar-nav pull-md-right">
            <li class="nav-item"><a class="nav-link" href="#">Accusantium<div class='arrow' aria-hidden='true'></div></a></li>
            <li class="nav-item dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" id="dropdownMenu2">Dropdown <b class="caret" aria-hidden="true"></b></a>
            <div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2">
                <a href="#" role="menuitem" class="dropdown-item">Action</a>
                <a href="#" role="menuitem" class="dropdown-item">Another action</a>
                <a href="#" role="menuitem" class="dropdown-item">Something else here</a>
                <div class="dropdown-divider"></div>
                <a href="#" role="menuitem" class="dropdown-item">Separated link</a>
            </div>
            </li>
        </ul>
    </div>
</nav>
{% endexample %}

## Two level local navigation

{% example html %}
<nav class="navbar nav-local">
    <button type="button" class="navbar-toggler hidden-sm-up" data-toggle="collapse" data-target="#exCollapsingNavbar2">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
    </button>

    <div class="collapse navbar-toggleable-xs local" id="exCollapsingNavbar2">
        <ul class="nav navbar-nav">
            <li class="nav-item"><a class="nav-link active" href="#">Voluptatem<div class='arrow' aria-hidden='true'></div></a></li>
            <li class="nav-item"><a class="nav-link" href="#">Unde omnis istea<div class='arrow' aria-hidden='true'></div></a></li>
        </ul>
        <ul class="nav navbar-nav pull-md-right">
            <li class="nav-item dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" id="dropdownMenu3">Dropdown <b class="caret" aria-hidden="true"></b></a>
                <div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu3">
                    <a href="#" role="menuitem" class="dropdown-item">Action</a>
                    <a href="#" role="menuitem" class="dropdown-item">Another action</a>
                    <a href="#" role="menuitem" class="dropdown-item">Something else here</a>
                    <div role="presentation" class="dropdown-divider"></div>
                    <a href="#" role="menuitem" class="dropdown-item">Separated link</a>
                </div>
            </li>
        </ul>
    </div>

    <div class="navbar-collapse sublocal">
        <ul class="nav navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">Natus error sit<div class='arrow' aria-hidden='true'></div></a></li>
            <li class="nav-item"><a class="nav-link" href="#">Accusantium<div class='arrow' aria-hidden='true'></div></a></li>
            <li class="nav-item"><a class="nav-link active" href="#">Totam rem aperiam<div class='arrow' aria-hidden='true'></div></a></li>
            <li class="nav-item"><a class="nav-link" href="#">Sed ut<div class='arrow' aria-hidden='true'></div></a></li>
        </ul>
    </div>
</nav>
{% endexample %}
