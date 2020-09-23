---
layout: docs
title: Accessibility
description: A brief overview of Boosted's features and limitations for the creation of accessible content.
group: getting-started
toc: true
---

Boosted provides an easy-to-use framework of ready-made styles, layout tools, and interactive components, allowing developers to create websites and applications that are visually appealing, functionally rich, and accessible out of the box.

## Overview and Limitations

The overall accessibility of any project built with Boosted depends in large part on the author's markup, additional styling, and scripting they've included. However, provided that these have been implemented correctly, it should be perfectly possible to create websites and applications with Boosted that fulfill [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0](https://www.w3.org/TR/WCAG20/) (A/AA/AAA), [Section 508](https://www.section508.gov/) and similar accessibility standards and requirements.

### Structural markup

Boosted's styling and layout can be applied to a wide range of markup structures. This documentation aims to provide developers with best practice examples to demonstrate the use of Boosted itself and illustrate appropriate semantic markup, including ways in which potential accessibility concerns can be addressed.

### Interactive components

Boosted's interactive components—such as modal dialogs, dropdown menus and custom tooltips—are designed to work for touch, mouse and keyboard users. Through the use of relevant [<abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/WAI/standards-guidelines/aria/) roles and attributes, these components should also be understandable and operable using assistive technologies (such as screen readers).

Because Boosted's components are purposely designed to be fairly generic, authors may need to include further <abbr title="Accessible Rich Internet Applications">ARIA</abbr> roles and attributes, as well as JavaScript behavior, to more accurately convey the precise nature and functionality of their component. This is usually noted in the documentation.

### Color contrast

[comment]: # Boosted mod
Some colors that currently make up [Boosted's default palette]({{ site.baseurl }}/docs/{{ site.docs_version }}/about/brand/#color-palette) —used throughout the framework for things such as button variations, alert variations, form validation indicators— may lead to *insufficient* color contrast.

#### Ensuring contrasts

Each of the text colors shown are combined with background colors from the Orange digital palette in order to meet [WCAG 2.0 accessibility standards for color contrast](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).
Please note that contrasts are locked when using [`.text-*` and `.bg-*` utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/colors/), to ensure sufficient contrasts.

<div class="container">
    <div class="row">
        <div class="col-lg">
            <table class="table table-contrast">
                <caption class="sr-only">Core colors contrasts</caption>
                <thead>
                    <tr>
                        <th scope="col">Core colors</th>
                        <th scope="col">Text color</th>
                        <th scope="col">Pass level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-dark">
                        <th scope="row" rowspan="3">#000</th>
                        <td class="text-primary">#ff7900</td>
                        <td class="text-primary">AAA</td>
                    </tr>
                    <tr class="table-dark">
                        <td class="pl-0">#fff</td>
                        <td>AAA</td>
                    </tr>
                    <tr class="table-dark" style="color: #999">
                        <td class="pl-0">#999</td>
                        <td>AAA</td>
                    </tr>
                    <tr class="aa-large-text">
                        <th scope="row" rowspan="3">#fff</th>
                        <td class="text-primary">#f16e00</td>
                        <td class="text-primary">AA Large text</td>
                    </tr>
                    <tr>
                        <td class="pl-0">#000</td>
                        <td>AAA</td>
                    </tr>
                    <tr style="color: #666">
                        <td class="pl-0 align-top">#666</td>
                        <td>
                            AA<br>
                            <span class="aa-large-text">AAA Large text</span>
                        </td>
                    </tr>
                    <tr style="background-color:#ff7900">
                        <th scope="row">#ff7900</th>
                        <td>#000</td>
                        <td>AAA</td>
                    </tr>
                    <tr class="aa-large-text" style="background-color:#f16e00;color:#fff">
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
            <table class="table table-contrast">
                <caption class="sr-only">Functional greys contrasts</caption>
                <thead>
                    <tr>
                        <th scope="col">Functional greys</th>
                        <th scope="col">Text color</th>
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
                            <span class="aa-large-text">AAA Large text</span>
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
                    <tr style="background-color:#ddd">
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
            <table class="table table-contrast">
                <caption class="sr-only">Supporting colors contrasts</caption>
                <thead>
                    <tr>
                        <th scope="col">Supporting colors</th>
                        <th scope="col">Text color</th>
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
            <table class="table table-contrast">
                <caption class="sr-only">Functional colors contrasts</caption>
                <thead>
                    <tr>
                        <th scope="col">Functional colors</th>
                        <th scope="col">Text color</th>
                        <th scope="col">Pass level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color:#32c832">
                        <th scope="row">#32c832</th>
                        <td>#000</td>
                        <td>AAA</td>
                    </tr>
                   <tr style="background-color:#527edb">
                       <th scope="row" rowspan="2">#527edb</th>
                       <td class="align-top">#000</td>
                       <td>
                            AA<br>
                            <span class="aa-large-text">AAA Large text</span>
                        </td>
                   </tr>
                   <tr class="aa-large-text" style="background-color:#527edb;color:#fff">
                       <td class="pl-0" style="color: #fff">#fff</td>
                       <td style="color: #fff">AA Large text</td>
                   </tr>
                   <tr style="background-color:#fc0">
                       <th scope="row">#fc0</th>
                       <td>#000</td>
                       <td>AAA</td>
                   </tr>
                   <tr style="background-color:#cd3c14">
                       <th scope="row" rowspan="2">#cd3c14</th>
                       <td class="aa-large-text text-dark">#000</td>
                       <td class="aa-large-text text-dark">AA Large text</td>
                   </tr>
                   <tr style="background-color:#cd3c14;color:#fff">
                        <td class="pl-0 align-top">#fff</td>
                        <td>
                            AA<br>
                            <span class="aa-large-text">AAA Large text</span>
                        </td>
                   </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

[comment]: # end mod

### Visually hidden content

Content which should be visually hidden, but remain accessible to assistive technologies such as screen readers, can be styled using the `.sr-only` class. This can be useful in situations where additional visual information or cues (such as meaning denoted through the use of color) need to also be conveyed to non-visual users.

{% highlight html %}
<p class="text-danger">
  <span class="sr-only">Danger: </span>
  This action is not reversible
</p>
{% endhighlight %}

For visually hidden interactive controls, such as traditional "skip" links, `.sr-only` can be combined with the `.sr-only-focusable` class. This will ensure that the control becomes visible once focused (for sighted keyboard users).

{% highlight html %}
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
{% endhighlight %}

### Reduced motion

Boosted includes support for the [`prefers-reduced-motion` media feature](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion). In browsers/environments that allow the user to specify their preference for reduced motion, most CSS transition effects in Boosted (for instance, when a modal dialog is opened or closed, or the sliding animation in carousels) will be disabled.

[comment]: # Boosted mod
### Focus visibility

Boosted includes a [focus-visible polyfill](https://github.com/WICG/focus-visible) to ensure an enhanced focus visibility for keyboard users while shutting down focus styles on active state.

## Additional resources

- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/)
- [The A11Y Project](https://www.a11yproject.com/)
- [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Tenon.io Accessibility Checker](https://tenon.io/)
- [Colour Contrast Analyser (CCA)](https://developer.paciellogroup.com/resources/contrastanalyser/)
- ["HTML Codesniffer" bookmarklet for identifying accessibility issues](https://github.com/squizlabs/HTML_CodeSniffer)
- ["aXe core" extension for identifying accessibility issues](https://github.com/dequelabs/axe-core/blob/master/doc/projects.md)
- [Orange accessibility guidelines](http://a11y-guidelines.orange.com/home_EN/index.html)
- [MDN focus-visible documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
