---
layout: docs
title: Orange brand guidelines
description: Have a need for Boosted's brand resources? We have a few guidelines we follow, and in turn ask you to follow as well.
group: about
toc: true
---

These guidelines were published by Orange SA [Orange Brand Assets](https://brand.orange.com/guidelines/logo/).

## Orange logo

The Orange logo is the strongest association people have with the brand, so we have to use it correctly.

Our logo is made up of the orange block, the logotype and the TM sign. When using the Orange logo never try to recreate it. Instead, download our original logo artwork and make sure you follow our top rules:

* The Master logo is a bespoke design — always use original artwork.
* The Master logo sits on the grid and (in most cases) is positioned in one of the corners.
* The Small logo is used for minimum size work and has animated behaviours.

To find out how you can use our mark to make yours, read the [core guideline](https://brand.orange.com/guidelines/logo/).

### Master artwork

<div class="row mb-5">
    <div class="col-lg-2 d-flex align-items-center justify-content-center">
        <img src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/brand/orange_logo.svg" alt="Master Orange logo" width="50" height="50" loading="lazy"/>
    </div>
    <div class="col-lg-10">
        <p>The basic elements of the Master logo are <strong>the square and the word mark <mark>Orange™</mark></strong>.</p>
        <p>Together they make up the Master logo, a trademark that is legally registered and protected.</p>
        <p>These elements must never be altered in any way and the Master logo must always be applied using original artwork. The word mark never appears outside of the square. Always write our brand name with a leading cap (Orange) in all other cases. To protect its integrity, the Master logo may not be altered, distorted or animated in any way.</p>
    </div>
</div>

### Clear space

<div class="row mb-5">
    <div class="col-lg-2 d-flex align-items-center justify-content-center">
        <img src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/brand/logo-rule-3a.png" alt="Orange logo space" width="150" loading="lazy"/>
    </div>
    <div class="col-lg-10">
        <p>The Master logo should always have <strong>clear space around</strong> it to protect it from other graphic elements and help it stand out.</p>
        <p>Always aim to set the clear space to <code>0.5×</code>. Where the space is limited (e.g. web) or when you need maximum visibility (e.g. perimeter boards), set your clear space to <code>0.25×</code> instead.</p>
        <p>To maintain clarity and legibility, we have set <strong>minimum sizes</strong> for the Master logo.</p>
    </div>
</div>


#### Minimum sizes

<table class="table mb-5">
  <thead>
    <tr>
      <td colspan="2" class="border-0"></td>
      <th scope="col" colspan="2" id="digital">Digital</th>
    </tr>
    <tr>
      <th scope="row">Media</th>
      <th scope="col" id="print">Print</th>
      <th scope="col" id="mobile">Mobile</th>
      <th scope="col" id="desktop">Tablet & desktop</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" id="size">
        Size
        <small class="text-muted">(×)</small>
      </th>
      <td headers="print size">10mm</td>
      <td headers="digital mobile size">30px</td>
      <td headers="digital desktop size">50px</td>
    </tr>
    <tr>
      <th scope="row" id="clear">
        Preferred clear space
        <small class="text-muted">(0.5×)</small>
      </th>
      <td headers="print clear">5mm</td>
      <td headers="digital mobile clear">15px</td>
      <td headers="digital desktop clear">25px</td>
    </tr>
    <tr>
      <th scope="row" id="small">
        Small clear space
        <small class="text-muted">(0.25×)</small>
      </th>
      <td headers="print small">2.5mm</td>
      <td headers="digital mobile small">7.5px</td>
      <td headers="digital desktop small">12.5px</td>
    </tr>
  </tbody>
</table>


### Small logo

<div class="row">
    <div class="col-lg-2 d-flex align-items-center justify-content-center">
        <img src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/brand/logo-rule-4b.png" alt="Small Orange logo" width="100" loading="lazy"/>
    </div>
    <div class="col-lg-10">
        <p>The Small logo is used for minimum size work <strong>when the Master logo is no longer clearly visible</strong>.</p>
        <ul>
            <li>The Small logo is used when the size of the Master logo appears less than <code>50px</code> on desktops or tablet screens, <code>30px</code> on mobile screens and <code>10mm</code> in printed media or product branding.</li>
            <li>The clear space area around the Small logo is equal to <code>0.25×</code>.</li>
            <li>The basic elements of the Small logo are the square and a line with solid white fill. Together they make up the Small logo.</li>
            <li>The Small logo follows the same colourways as the Master logo.</li>
        </ul>
    </div>
</div>

These elements must never be altered in any way and must always be applied using original artwork.
It’s possible to animate the Small logo; however this process is strictly managed by the Global brand team.
Apply the Small logo correctly by avoiding the following:


1. Never change the color of the line, even in animation.
2. The line always has a solid, white fill. It is never transparent.
3. Never use the trademark symbol.
4. Never change the size of the line - it allows optimal readbility in small sizes and represents the name “Orange” from the Master logo.
5. Never change the colourways of the Small logo.



## Color palette

This is Orange Web UI color palette, as specified in Orange Web UI Kits.
Please refer to the [accessibility's color contrast section]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/accessibility/#color-contrast) before trying using this, in order to ensure sufficient contrasts,
and prefer using [`.text-*` and `.bg-*` utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/colors/) to set colors, since they lock `color` and `background-color` altogether to ensure sufficient contrasts.
<div class="my-5">
  {% for category in site.data.brand-colors %}
    <div class="row my-3">
      <h3 class="h4 col col-md-4 col-lg-2 mb-0">{{ category.name }}</h3>
      <div class="col col-md-8 col-lg-10 row row-cols-2 row-cols-md-4 row-cols-lg-6">
        {% for color in category.colors %}
          <figure class="col" role="figure" aria-label="{{ color.name | capitalize }}">
           <svg width="100%" height="6rem" role="img" aria-label="{{ color.name | capitalize }}">
             <rect fill="{{ color.hex }}" width="100%" height="100%"/>
           </svg>
           <figcaption class="py-1">
             <strong>{{ color.name | capitalize }}</strong>
             <br/>
             <code>{{ color.hex }}</code>
           </figcaption>
          </figure>
        {% endfor %}
      </div>
    </div>
    <hr/>
  {% endfor %}
</div>

<hr>

{% capture callout %}
## Bootstrap brand guidelines

Boosted is based on [Bootstrap](https://getbootstrap.com/), which has [its own logo and brand usage guidelines](https://getbootstrap.com/docs/{{ site.docs_version }}/about/brand/).
{% endcapture %}
{% include callout.html content=callout type="info" %}
