---
layout: docs
title: Colors
description: Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.
group: utilities
toc: true
---

## Color

[comment]: # Boosted mod
`.text-*` utilities are meant to modify text color, but also **set a `brackground-color` to ensure contrasts**. You may want to use `.bg-*` utilities to change  `background-color`. 

{% capture example %}
<!-- Boosted mod -->
{% for color in site.data.theme-colors %}
<p class="text-{{ color.name }}">.text-{{ color.name }}</p>{% endfor %}
<p class="text-body">.text-body</p>
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
<!-- end mod -->
{% endcapture %}
{% include example.html content=example %}

Contextual text classes also work well on anchors with the provided hover and focus states. **Note that the `.text-white` and `.text-muted` class has no additional link styling beyond underline.**

[comment]: # Boosted mod
Boosted also handle color variation on hover (lighten or darken) depending on contrast ratio.

{% capture example %}
<!-- Boosted mod -->
{% for color in site.data.theme-colors %}
<p><a href="#" class="text-{{ color.name }}">{{ color.name | capitalize }} link</a></p>{% endfor %}
<p><a href="#" class="text-muted">Muted link</a></p>
<p><a href="#" class="text-white bg-dark">White link</a></p>
<!-- end mod -->
{% endcapture %}
{% include example.html content=example %}

## Background color

[comment]: # Boosted mod
Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken or lighten on hover, just like the text classes. Background utilities **do set `color` to ensure contrasts**, so in some cases you'd want to use `.text-*` utilities to use another color.

{% capture example %}
<!-- Boosted mod -->
{% for color in site.data.theme-colors %}
<div class="p-3 mb-2 bg-{{ color.name }}">.bg-{{ color.name }}</div>{% endfor %}
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
<div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
<!-- end mod -->
{% endcapture %}
{% include example.html content=example %}


[comment]: # Boosted mod
## Ensuring contrasts

Each of the text colours shown are combined with background colours from the Orange digital palette in order to meet WCAG accessibility standards for colour contrast.
You should refer to those tables when using `.text-*` and `.bg-*` utilities to ensure sufficient contrasts.

<div class="container">
    <div class="row">
        <div class="col-lg">
            <table class="table">
                <caption class="sr-only">Core colours contrasts</caption>
                <thead>
                    <tr>
                        <th scope="col">Core colours</th>
                        <th scope="col">Text colour</th>
                        <th scope="col">Pass level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-dark">
                        <th scope="row" rowspan="3">#000</th>
                        <td>#ff7900</td>
                        <td>AAA</td>
                    </tr>
                    <tr class="table-dark">
                        <td class="pl-0">#fff</td>
                        <td>AAA</td>
                    </tr>
                    <tr class="table-dark">
                        <td class="pl-0">#999</td>
                        <td>AAA</td>
                    </tr>
                    <tr>
                        <th scope="row" rowspan="3">#fff</th>
                        <td>#f16e00</td>
                        <td>AA Large text</td>
                    </tr>
                    <tr>
                        <td class="pl-0">#000</td>
                        <td>AAA</td>
                    </tr>
                    <tr>
                        <td class="pl-0 align-top">#666</td>
                        <td>
                            AA<br>
                            AAA Large text
                        </td>
                    </tr>
                    <tr style="background-color:#ff7900">
                        <th scope="row">#ff7900</th>
                        <td>#000</td>
                        <td>AAA</td>
                    </tr>
                    <tr class="table-primary">
                        <th scope="row">#f16e00</th>
                        <td>#fff</td>
                        <td>AA Large text</td>
                    </tr>
                    <tr style="background-color:#595959;color: #fff">
                        <th scope="row">#595959</th>
                        <td>#fff</td>
                        <td>AAA</td>
                    </tr>
                </tbody>
            </table>
            <table class="table">
                <caption class="sr-only">Functional greys contrasts</caption>
                <thead>
                    <tr>
                        <th scope="col">Functional greys</th>
                        <th scope="col">Text colour</th>
                        <th scope="col">Pass level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color:#333;color: #fff">
                        <th scope="row">#333</th>
                        <td>#fff</td>
                        <td>AAA</td>
                    </tr>
                    <tr style="background-color:#666;color: #fff">
                        <th scope="row" class="align-top">#666</th>
                        <td class="align-top">#fff</td>
                        <td>
                            AA<br>
                            AAA Large text
                         </td>
                    </tr>
                    <tr style="background-color:#999">
                        <th scope="row">#999</th>
                        <td>#000</td>
                        <td>AAA</td>
                    </tr>
                    <tr style="background-color:#ccc">
                        <th scope="row">#ccc</th>
                        <td>#000</td>
                        <td>AAA</td>
                    </tr>
                    <tr class="table-light">
                        <th scope="row">#ddd</th>
                        <td>#000</td>
                        <td>AAA</td>
                    </tr>
                    <tr style="background-color:#eee">
                        <th scope="row">#eee</th>
                        <td>#000</td>
                        <td>AAA</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-lg">
            <table class="table">
                <caption class="sr-only">Supporting colours contrasts</caption>
                <thead>
                    <tr>
                        <th scope="col">Supporting colours</th>
                        <th scope="col">Text colour</th>
                        <th scope="col">Pass level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color:#4bb4e6">
                        <th scope="row">#4bb4e6</th>
                        <td>#000</td>
                        <td>AAA</td>
                    </tr>
                   <tr style="background-color:#50beb7">
                       <th scope="row">#50beb7</th>
                       <td>#000</td>
                       <td>AAA</td>
                   </tr>
                   <tr style="background-color:#ffb4e6">
                       <th scope="row">#ffb4e6</th>
                       <td>#000</td>
                       <td>AAA</td>
                   </tr>
                   <tr style="background-color:#a885d8">
                       <th scope="row">#a885d8</th>
                       <td>#000</td>
                       <td>AAA</td>
                   </tr>
                   <tr style="background-color:#ffd200">
                       <th scope="row">#ffd200</th>
                       <td>#000</td>
                       <td>AAA</td>
                   </tr>
                </tbody>
            </table>
            <table class="table">
                <caption class="sr-only">Functional colours contrasts</caption>
                <thead>
                    <tr>
                        <th scope="col">Functional colours</th>
                        <th scope="col">Text colour</th>
                        <th scope="col">Pass level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-success">
                        <th scope="row">#32c832</th>
                        <td>#000</td>
                        <td>AAA</td>
                    </tr>
                   <tr class="table-info">
                       <th scope="row" rowspan="2">#527edb</th>
                       <td class="align-top">#000</td>
                       <td>
                            AA<br>
                            AAA Large text
                        </td>
                   </tr>
                   <tr class="table-info" style="color: #fff">
                       <td class="pl-0">#fff</td>
                       <td>AA Large text</td>
                   </tr>
                   <tr class="table-warning">
                       <th scope="row">#fc0</th>
                       <td>#000</td>
                       <td>AAA</td>
                   </tr>
                   <tr class="table-danger">
                       <th scope="row" rowspan="2">#cd3c14</th>
                       <td style="color: #000">#000</td>
                       <td style="color: #000">AA Large text</td>
                   </tr>
                   <tr class="table-danger">
                        <td class="pl-0 align-top">#fff</td>
                        <td>
                            AA<br>
                            AAA Large text
                        </td>
                   </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

[comment]: # end mod

## Background gradient

When `$enable-gradients` is set to `true` (default is `false`), you can use `.bg-gradient-` utility classes. [Learn about our Sass options]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/theming/#sass-options) to enable these classes and more.

{% for color in site.data.theme-colors %}
- `.bg-gradient-{{ color.name }}`{% endfor %}

{% capture callout %}
#### Dealing with specificity

Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` with the class.
{% endcapture %}
{% include callout.html content=callout type="info" %}

{% include callout-warning-color-assistive-technologies.md %}
