---
layout: docs
title: Accessibility
description: A brief overview of Boosted's features and limitations for the creation of accessible content.
group: getting-started
toc: true
---

Boosted provides an easy-to-use framework of ready-made styles, layout tools, and interactive components, allowing developers to create websites and applications that are visually appealing, functionally rich, and accessible out of the box.

## Overview and limitations

The overall accessibility of any project built with Boosted depends in large part on the author's markup, additional styling, and scripting they've included. However, provided that these have been implemented correctly, it should be perfectly possible to create websites and applications with Boosted that fulfill [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1](https://www.w3.org/TR/WCAG21/) (A/AA/AAA), [Section 508](https://www.section508.gov/), and similar accessibility standards and requirements.

### Structural markup

Boosted's styling and layout can be applied to a wide range of markup structures. This documentation aims to provide developers with best practice examples to demonstrate the use of Boosted itself and illustrate appropriate semantic markup, including ways in which potential accessibility concerns can be addressed.

### Interactive components

Boosted's interactive components—such as modal dialogs, dropdown menus, and custom tooltips—are designed to work for touch, mouse, and keyboard users. Through the use of relevant [<abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/WAI/standards-guidelines/aria/) roles and attributes, these components should also be understandable and operable using assistive technologies (such as screen readers).

Because Boosted's components are purposely designed to be fairly generic, authors may need to include further <abbr title="Accessible Rich Internet Applications">ARIA</abbr> roles and attributes, as well as JavaScript behavior, to more accurately convey the precise nature and functionality of their component. This is usually noted in the documentation.

### Color contrast

<!-- Boosted mod -->
Some combinations of colors that currently make up Boosted's default palette—used throughout the framework for things such as button variations, alert variations, form validation indicators—should lead to sufficient color contrast (above the recommended [WCAG 2.1 color contrast ratio of 4.5:1](https://www.w3.org/TR/UNDERSTANDING-WCAG21/#contrast-minimum) and the [WCAG 2.1 non-text color contrast ratio of 3:1](https://www.w3.org/TR/WCAG21/#non-text-contrast)).

#### Ensuring contrasts

Each of the text colors shown are combined with background colors from the Orange digital palette in order to meet [WCAG 2.0 accessibility standards for color contrast](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).
**Please note that contrasts are locked when using [`.text-*` and `.bg-*` utilities]({{< docsref "/utilities/colors" >}})**, to ensure sufficient contrasts.

As shown below, we’ve added reached WCAG level to each of the palette colors—one for against white, and one for against black.

{{< palette.inline >}}
{{- range $category := $.Site.Data.palette }}
  <h5 class="h4 col-12">{{ $category.name }}</h5>
  <div class="row font-monospace">
    {{- range $color := $category.colors }}
    <div class="col-md-4 mb-2">
      <div class="p-3 mb-2 position-relative a11y-swatch-{{ $color.class }}{{ if (eq $color.class "white") }} border{{ end }}">
        <strong class="d-block">{{ $color.name }}</strong>
        {{ $color.hex }}
      </div>
    </div>
    {{ end -}}
  </div>
{{ end -}}
{{< /palette.inline >}}
<!-- End mod -->

### Visually hidden content

Content which should be visually hidden, but remain accessible to assistive technologies such as screen readers, can be styled using the `.sr-only` class. This can be useful in situations where additional visual information or cues (such as meaning denoted through the use of color) need to also be conveyed to non-visual users.

{{< highlight html >}}
<p class="text-danger">
  <span class="sr-only">Danger: </span>
  This action is not reversible
</p>
{{< /highlight >}}

For visually hidden interactive controls, such as traditional "skip" links, use the `.sr-only-focusable` class. This will ensure that the control becomes visible once focused (for sighted keyboard users). **Watch out, since Boosted 5 `.sr-only-focusable` is a standalone class, and must not be used in combination with the `.sr-only` class.**

{{< highlight html >}}
<a class="sr-only-focusable" href="#content">Skip to main content</a>
{{< /highlight >}}

### Reduced motion

Boosted includes support for the [`prefers-reduced-motion` media feature](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion). In browsers/environments that allow the user to specify their preference for reduced motion, most CSS transition effects in Boosted (for instance, when a modal dialog is opened or closed, or the sliding animation in carousels) will be disabled.

### Focus visibility

Boosted includes [WICG's `:focus-visible` polyfill](https://github.com/WICG/focus-visible) to ensure an enhanced focus visibility for keyboard users while shutting down focus styles on active state.

## Additional resources

- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
- [The A11Y Project](https://a11yproject.com/)
- [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Tenon.io Accessibility Checker](https://tenon.io/)
- [Color Contrast Analyser (CCA)](https://developer.paciellogroup.com/resources/contrastanalyser/)
- ["HTML Codesniffer" bookmarklet for identifying accessibility issues](https://github.com/squizlabs/HTML_CodeSniffer)
- [Microsoft Accessibility Insights](https://accessibilityinsights.io/)
- [Deque Axe testing tools](https://www.deque.com/axe/)
- [Orange accessibility guidelines](http://a11y-guidelines.orange.com/)
- [`:focus-visible` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
