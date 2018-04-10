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

Use `.nav` for lists. Use `.flex-column` for column layout. Use appropriate `.col-*` classes to fit all screen resolutions.

According to the brand, Orange footer has black background and white text color.

{% capture example %}
<footer class="o-footer" role="contentinfo">
    <h1 class="sr-only">footer - site map & informations</h1>
    <div class="o-footer-top">
        <div class="container-fluid">
            <ul class="nav">
                <li class="nav-item"><span class="nav-link">Follow us</span></li>
            </ul>
        </div>
    </div>
    <div class="o-footer-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <h2>Discover</h2>
                    <ul class="nav flex-column">
                        <li class="nav-item"><a class="nav-link" href="#">Unde omnis istea</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Natus error sit</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Voluptatem</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Totam rem aperiam</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6">
                    <h2>Shop</h2>
                    <ul class="nav flex-column">
                        <li class="nav-item"><a class="nav-link" href="#">Natus error sit</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Unde omnis istea</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Voluptatem</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Doloremque</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Totam rem aperiam</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6">
                    <h2>Services</h2>
                    <ul class="nav flex-column">
                        <li class="nav-item"><a class="nav-link" href="#">Doloremque</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Totam rem aperiam</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6">
                    <h2>Support</h2>
                    <ul class="nav flex-column">
                        <li class="nav-item"><a class="nav-link" href="#">Doloremque</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Unde omnis istea</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Voluptatem</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Totam rem aperiam</a></li>
                    </ul>
                </div>
            </div>
            <ul class="nav">
                <li class="nav-item"><a class="nav-link" href="#">Contact us</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Locate a store</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Coverage map</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Business</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Child protection</a></li>
            </ul>
        </div>
    </div>
    <div class="o-footer-bottom">
        <div class="container-fluid">
            <ul class="nav">
                <li class="nav-item"><span class="nav-link">© Orange 2018</span></li>
                <li class="nav-item"><a class="nav-link" href="#">Jobs</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Advertise</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Terms & Conditions</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Privacy</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Cookies</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Access for all</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Safety online</a></li>
            </ul>
        </div>
    </div>
</footer>
{% endcapture %} {% include example.html content=example %}