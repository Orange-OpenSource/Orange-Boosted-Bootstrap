---
layout: docs
title: Orange footer
description: Standardised Orange footer
group: components
toc: true
---

## Usage

Footer can be divided in three parts using `.o-footer-top`, `.o-footer-body` and `.o-footer-bottom` classes.
Each footer part must use a `.container-fluid` or `.container` depending on page layout.

Use `.navbar-nav` for lists. Lists are in row by default and in column when contained in a `.row` block. Use appropriate `.col-*` classes to fit all screen resolutions.

According to the brand, Orange footer has black background and white text color.

{% example html %}
<footer class="o-footer" role="contentinfo">
    <h1 class="sr-only">footer - site map & informations</h1>
    <div class="o-footer-top">
        <div class="container-fluid">
            <span>Follow us</span>
        </div>
    </div>
    <div class="o-footer-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <h2>Discover</h2>
                    <ul class="navbar-nav">
                        <li><a href="#">Unde omnis istea</a></li>
                        <li><a href="#">Natus error sit</a></li>
                        <li><a href="#">Voluptatem</a></li>
                        <li><a href="#">Totam rem aperiam</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6">
                    <h2>Shop</h2>
                    <ul class="navbar-nav">
                        <li><a href="#">Natus error sit</a></li>
                        <li><a href="#">Unde omnis istea</a></li>
                        <li><a href="#">Voluptatem</a></li>
                        <li><a href="#">Doloremque</a></li>
                        <li><a href="#">Totam rem aperiam</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6">
                    <h2>Services</h2>
                    <ul class="navbar-nav">
                        <li><a href="#">Doloremque</a></li>
                        <li><a href="#">Totam rem aperiam</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6">
                    <h2>Support</h2>
                    <ul class="navbar-nav">
                        <li><a href="#">Doloremque</a></li>
                        <li><a href="#">Unde omnis istea</a></li>
                        <li><a href="#">Voluptatem</a></li>
                        <li><a href="#">Totam rem aperiam</a></li>
                    </ul>
                </div>
            </div>
            <ul class="navbar-nav">
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Locate a store</a></li>
                <li><a href="#">Coverage map</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Child protection</a></li>
            </ul>
        </div>
    </div>
    <div class="o-footer-bottom">
        <div class="container-fluid">
            <ul class="navbar-nav">
                <li>© Orange 2017</li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Advertise</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Access for all</a></li>
                <li><a href="#">Safety online</a></li>
            </ul>
        </div>
    </div>
</footer>
{% endexample %}