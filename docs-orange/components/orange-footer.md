---
layout: docs
title: Orange footer
group: components
---

Structure it with `o-footer` class and `o-footer-top` & `o-footer-bottom` to obtain two different parts. On top part, with bootstrap classes (`col-*`), you can have 6 columns to diplay content. Put an `ul` (or `ol`) to obtain one colum. The first element of each column need to be an header tag (`hx`) and it will be displayed in bold. On the bottom part, just put an `ul` (or `ol`) list to have more information links (disclaimer etc). These links will be center on the page and displayed in line.

According to the brand, Orange pages need to have only black footer.

{% example html %}
<footer class="navbar" role="contentinfo">
    <div class="container-fluid">
          <div class="o-footer">
              <h1 class="sr-only">footer - site map & informations</h1>
              <div class="container-fluid o-footer-top">
                  <div class="row">
                      <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                          <ul>
                              <li><h2>Sed ut perspiciatis</h2></li>
                              <li><a href="#">Unde omnis istea</a></li>
                              <li><a href="#">Natus error sit</a></li>
                              <li><a href="#">Voluptatem</a></li>
                              <li><a href="#">Totam rem aperiam</a></li>
                          </ul>
                      </div>
                      <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                          <ul>
                              <li><h2>Voluptatem accusantium</h2></li>
                              <li><a href="#">Natus error sit</a></li>
                              <li><a href="#">Unde omnis istea</a></li>
                              <li><a href="#">Voluptatem</a></li>
                              <li><a href="#">Doloremque</a></li>
                              <li><a href="#">Totam rem aperiam</a></li>
                          </ul>
                      </div>
                      <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                          <ul>
                              <li><h2>Natus error sit</h2></li>
                              <li><a href="#">Doloremque</a></li>
                              <li><a href="#">Totam rem aperiam</a></li>
                          </ul>
                      </div>
                      <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                          <ul>
                              <li><h2>Doloremque laudantium</h2></li>
                              <li><a href="#">Doloremque</a></li>
                              <li><a href="#">Unde omnis istea</a></li>
                              <li><a href="#">Voluptatem</a></li>
                              <li><a href="#">Totam rem aperiam</a></li>
                          </ul>
                      </div>
                      <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                          <ul>
                              <li><h2>Totam rem aperiam</h2></li>
                              <li><a href="#">Totam rem aperiam</a></li>
                              <li><a href="#">Unde omnis istea</a></li>
                              <li><a href="#">Natus error sit</a></li>
                              <li><a href="#">Voluptatem</a></li>
                              <li><a href="#">Doloremque</a></li>
                          </ul>
                      </div>
                      <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                          <ul>
                              <li><h2>Accusantium</h2></li>
                              <li><a href="#">Unde omnis istea</a></li>
                              <li><a href="#">Natus error sit</a></li>
                              <li><a href="#">Voluptatem</a></li>
                              <li><a href="#">Totam rem aperiam</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-xs-12">
                          <ul class="nav navbar-nav">
                              <li><a href="#">Contact us</a></li>
                              <li><a href="#"><span class="icon-orange-location"></span>Locate a store</a></li>
                              <li><a href="#">Coverage map</a></li>
                              <li><a href="#">Business</a></li>
                              <li><a href="#">Child protection</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="o-footer-bottom">
                  <ul>
                      <li>© Orange 2015</li>
                      <li><a href="#">Natus error sit</a></li>
                      <li><a href="#">Voluptatem</a></li>
                      <li><a href="#">Totam rem aperiam</a></li>
                      <li><a href="#">Unde omnis istea</a></li>
                      <li><a href="#">Natus error sit</a></li>
                      <li><a href="#">Voluptatem</a></li>
                  </ul>
              </div>
        </div>
    </div>
</footer>
{% endexample %}