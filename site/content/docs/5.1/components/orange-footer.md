---
layout: docs
title: Orange footer
description: Documentation and examples for Boosted's powerful, responsive footer. Includes support for branding, navigation and more.
group: components
aliases: "/docs/5.1/components/orange-footer/"
toc: true
---

## How it works

Orange footer is basically a `<footer>` tag with a `.bg-dark` class. It can be composed of several parts:
- mailing list bar
- social media bar
- navigation bar
- service bar
- **mandatory** bar

## Examples

<footer role="contentinfo" class="footer bg-dark">
  <h2 class="visually-hidden">Site map & information</h2>
  <!-- Mailing list -->
  <div class="container footer-mailing">
    <h3 class="footer-heading">Sign up to our mailing list</h3>
    <form class="gap-2 gap-md-3">
      <label for="inputEmail2" class="visually-hidden">Email</label>
      <input type="email" class="form-control bg-dark border-dark text-white" id="inputEmail2" placeholder="Enter your email">
      <button type="submit" class="btn btn-secondary btn-inverse text-nowrap">Sign up</button>
    </form>
  </div>

  <div class="border-bottom border-1 border-dark"></div>

  <!-- Follow us bar -->
  <div class="container footer-social">
    <h3 class="footer-heading">Follow us</h3>
    <ul class="gap-2">
      <li><a href="#" class="btn btn-icon btn-social btn-twitter btn-inverse"><span class="visually-hidden">Twitter</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-facebook btn-inverse"><span class="visually-hidden">Facebook</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-instagram btn-inverse"><span class="visually-hidden">Instagram</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-whatsapp btn-inverse"><span class="visually-hidden">WhatsApp</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-linkedin btn-inverse"><span class="visually-hidden">LinkedIn</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-youtube btn-inverse"><span class="visually-hidden">YouTube</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-snapchat btn-inverse"><span class="visually-hidden">Snapchat</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-pinterest btn-inverse"><span class="visually-hidden">Pinterest</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-mail btn-inverse"><span class="visually-hidden">Mail</span></a></li>
    </ul>
  </div>

  <div class="border-bottom border-1 border-dark"></div>

  <!-- Navigation -->
  <div class="navbar-dark footer-nav">
    <div class="container d-none d-md-flex">
      <div class="col-3 me-1">
        <h3 class="footer-heading">Category</h3>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
      <div class="col-3 me-1">
        <h3 class="footer-heading">Category</h3>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
      <div class="col-3 me-1">
        <h3 class="footer-heading">Category</h3>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
      <div class="col-3 me-1">
        <h3 class="footer-heading">Category</h3>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
    </div>
    <div class="d-md-none accordion" id="accordionExampleSmall">
      <div class="border-bottom border-1 border-dark">
        <h3 class="container accordion-header" id="headingOneSmall">
          <button class="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneSmall" aria-expanded="true" aria-controls="collapseOneSmall">
            Category
          </button>
        </h3>
        <div id="collapseOneSmall" class="container accordion-collapse collapse" aria-labelledby="headingOneSmall" data-bs-parent="#accordionExampleSmall">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
      <div class="border-bottom border-1 border-dark">
        <h3 class="container accordion-header" id="headingTwoSmall">
          <button class="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoSmall" aria-expanded="true" aria-controls="collapseTwoSmall">
            Category
          </button>
        </h3>
        <div id="collapseTwoSmall" class="container accordion-collapse collapse" aria-labelledby="headingTwoSmall" data-bs-parent="#accordionExampleSmall">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
      <div class="border-bottom border-1 border-dark">
        <h3 class="container accordion-header" id="headingThreeSmall">
          <button class="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeSmall" aria-expanded="true" aria-controls="collapseThreeSmall">
            Category
          </button>
        </h3>
        <div id="collapseThreeSmall" class="container accordion-collapse collapse" aria-labelledby="headingThreeSmall" data-bs-parent="#accordionExampleSmall">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
      <div>
        <h3 class="container accordion-header" id="headingFourSmall">
          <button class="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourSmall" aria-expanded="true" aria-controls="collapseFourSmall">
            Category
          </button>
        </h3>
        <div id="collapseFourSmall" class="container accordion-collapse collapse" aria-labelledby="headingFourSmall" data-bs-parent="#accordionExampleSmall">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="border-bottom border-1 border-dark"></div>

  <!-- Service links -->
  <div class="container navbar-dark footer-service">
    <ul class="navbar-nav gap-3 gap-md-4">
      <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#locate"/></svg><span>Locate a store</span></a></li>
      <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#coverage"/></svg><span>Coverage checker</span></a></li>
      <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#contact"/></svg><span>Contact us</span></a></li>
      <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#protection"/></svg><span>Child protection</span></a></li>
    </ul>
  </div>

  <div class="border-bottom border-1 border-dark"></div>

  <!-- Terms & Conditions -->
  <div class="container navbar-dark footer-terms">
    <ul class="navbar-nav gap-md-3">
      <li>© Orange {{< year >}}</li>
      <li><a class="nav-link" href="#">Terms & Conditions</a></li>
      <li><a class="nav-link" href="#">Privacy</a></li>
      <li><a class="nav-link" href="#">Accessibility statement</a></li>
      <li><a class="nav-link" href="#">Cookie policy</a></li>
    </ul>
  </div>
</footer>

## Parts

{{< callout info >}}
The `<h2></h2>` and `<h3></h3>` tags used here are informative, you **need** to adapt those to your website title hierarchy.
{{< /callout >}}

Orange footer parts are independent from each other. Just add a dark separator between each part.

```html
<div class="border-bottom border-1 border-dark"></div>
```

### Mailing list bar

Orange footer comes with a mailing list sub-component: `.footer-mailing`.

{{< example class="p-0" >}}
<footer role="contentinfo" class="footer bg-dark">
  <h2 class="visually-hidden">Site map & information</h2>
  <!-- Mailing list -->
  <div class="container footer-mailing">
    <h3 class="footer-heading">Sign up to our mailing list</h3>
    <form class="gap-2 gap-md-3">
      <label for="inputEmail1" class="visually-hidden">Email</label>
      <input type="email" class="form-control bg-dark border-dark text-white" id="inputEmail1" placeholder="Enter your email">
      <button type="submit" class="btn btn-secondary btn-inverse text-nowrap">Sign up</button>
    </form>
  </div>
</footer>
{{< /example >}}

### Social media bar

Orange footer comes with a social media sub-component: `.footer-social`.

{{< example class="p-0" >}}
<footer role="contentinfo" class="footer bg-dark">
  <h2 class="visually-hidden">Site map & information</h2>
  <!-- Follow us bar -->
  <div class="container footer-social">
    <h3 class="footer-heading">Follow us</h3>
    <ul class="gap-2">
      <li><a href="#" class="btn btn-icon btn-social btn-twitter btn-inverse"><span class="visually-hidden">Twitter</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-facebook btn-inverse"><span class="visually-hidden">Facebook</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-instagram btn-inverse"><span class="visually-hidden">Instagram</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-whatsapp btn-inverse"><span class="visually-hidden">WhatsApp</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-linkedin btn-inverse"><span class="visually-hidden">LinkedIn</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-youtube btn-inverse"><span class="visually-hidden">YouTube</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-snapchat btn-inverse"><span class="visually-hidden">Snapchat</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-pinterest btn-inverse"><span class="visually-hidden">Pinterest</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-mail btn-inverse"><span class="visually-hidden">Mail</span></a></li>
    </ul>
  </div>
</footer>
{{< /example >}}

### Navigation bar

Orange footer comes with a navigation sub-component: `.footer-nav`.

{{< callout warning >}}
This sub-component needs our Collapse JavaScript plugin to work well.
{{< /callout >}}

{{< example class="p-0" >}}
<footer role="contentinfo" class="footer bg-dark">
  <h2 class="visually-hidden">Site map & information</h2>
  <!-- Navigation -->
  <div class="navbar-dark footer-nav">
    <div class="container d-none d-md-flex">
      <div class="col-3 me-1">
        <h3 class="footer-heading">Category</h3>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
      <div class="col-3 me-1">
        <h3 class="footer-heading">Category</h3>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
      <div class="col-3 me-1">
        <h3 class="footer-heading">Category</h3>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
      <div class="col-3 me-1">
        <h3 class="footer-heading">Category</h3>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
    </div>
    <div class="d-md-none accordion" id="accordionExampleSmall1">
      <div class="border-bottom border-1 border-dark">
        <h3 class="container accordion-header" id="headingOneSmall1">
          <button class="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneSmall1" aria-expanded="true" aria-controls="collapseOneSmall1">
            Category
          </button>
        </h3>
        <div id="collapseOneSmall1" class="container accordion-collapse collapse" aria-labelledby="headingOneSmall1" data-bs-parent="#accordionExampleSmall1">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
      <div class="border-bottom border-1 border-dark">
        <h3 class="container accordion-header" id="headingTwoSmall1">
          <button class="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoSmall1" aria-expanded="true" aria-controls="collapseTwoSmall1">
            Category
          </button>
        </h3>
        <div id="collapseTwoSmall1" class="container accordion-collapse collapse" aria-labelledby="headingTwoSmall1" data-bs-parent="#accordionExampleSmall1">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
      <div class="border-bottom border-1 border-dark">
        <h3 class="container accordion-header" id="headingThreeSmall1">
          <button class="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeSmall1" aria-expanded="true" aria-controls="collapseThreeSmall1">
            Category
          </button>
        </h3>
        <div id="collapseThreeSmall1" class="container accordion-collapse collapse" aria-labelledby="headingThreeSmall1" data-bs-parent="#accordionExampleSmall1">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
      <div>
        <h3 class="container accordion-header" id="headingFourSmall1">
          <button class="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourSmall1" aria-expanded="true" aria-controls="collapseFourSmall1">
            Category
          </button>
        </h3>
        <div id="collapseFourSmall1" class="container accordion-collapse collapse" aria-labelledby="headingFourSmall1" data-bs-parent="#accordionExampleSmall1">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
{{< /example >}}

### Service bar

Orange footer comes with a service links sub-component: `.footer-service`.

{{< example class="p-0" >}}
<footer role="contentinfo" class="footer bg-dark">
  <h2 class="visually-hidden">Site map & information</h2>
  <!-- Service links -->
  <div class="container navbar-dark footer-service">
    <ul class="navbar-nav gap-3 gap-md-4">
      <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#locate"/></svg><span>Locate a store</span></a></li>
      <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#coverage"/></svg><span>Coverage checker</span></a></li>
      <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#contact"/></svg><span>Contact us</span></a></li>
      <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#protection"/></svg><span>Child protection</span></a></li>
    </ul>
  </div>
</footer>
{{< /example >}}

### Mandatory bar

Orange footer comes with a terms & conditions sub-component: `.footer-terms`. This sub-component is mandatory.

{{< example class="p-0" >}}
<footer role="contentinfo" class="footer bg-dark">
  <h2 class="visually-hidden">Site map & information</h2>
  <!-- Terms & Conditions -->
  <div class="container navbar-dark footer-terms">
    <ul class="navbar-nav gap-md-3">
      <li>© Orange {{< year >}}</li>
      <li><a class="nav-link" href="#">Terms & Conditions</a></li>
      <li><a class="nav-link" href="#">Privacy</a></li>
      <li><a class="nav-link" href="#">Accessibility statement</a></li>
      <li><a class="nav-link" href="#">Cookie policy</a></li>
    </ul>
  </div>
</footer>
{{< /example >}}

## Sass

### Variables

For more details, please have a look at the exhaustive list of available variables:

{{< scss-docs name="orange-footer" file="scss/_variables.scss" >}}
