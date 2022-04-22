---
layout: docs
title: Text
description: Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.
group: utilities
toc: true
---

## Text alignment

Easily realign text to components with text alignment classes.

<!-- Boosted mod -->
However Orange Brand — thus Boosted — does not allow justifying text.

{{< example >}}
<p class="text-right">Some placeholder text to demonstrate justified text alignment. Will you do the same for me? It's time to face the music I'm no longer your muse. Heard it's beautiful, be the judge and my girls gonna take a vote. I can feel a phoenix inside of me. Heaven is jealous of our love, angels are crying from up above. Yeah, you take me to utopia.</p>
{{< /example >}}

For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.

{{< example >}}
<p class="text-left">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-right">Right aligned text on all viewport sizes.</p>

<p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
{{< /example >}}

## Text wrapping and overflow

Wrap text with a `.text-wrap` class.

{{< example >}}
<div class="badge badge-primary text-wrap" style="width: 6rem;">
  This text should wrap.
</div>
{{< /example >}}

Prevent text from wrapping with a `.text-nowrap` class.

{{< example >}}
<div class="text-nowrap bd-highlight" style="width: 8rem;">
  This text should overflow the parent.
</div>
{{< /example >}}

For longer content, you can add a `.text-truncate` class to truncate the text with an ellipsis. **Requires `display: inline-block` or `display: block`.**

{{< example >}}
<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    Praeterea iter est quasdam res quas ex communi.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  Praeterea iter est quasdam res quas ex communi.
</span>
{{< /example >}}

## Word break

Prevent long strings of text from breaking your components' layout by using `.text-break` to set `word-wrap: break-word` and `word-break: break-word`. We use `word-wrap` instead of the more common `overflow-wrap` for wider browser support, and add the deprecated `word-break: break-word` to avoid issues with flex containers.

{{< example >}}
<p class="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
{{< /example >}}

## Text transform

Transform text in components with text capitalization classes.

{{< example >}}
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
{{< /example >}}

Note how `.text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected.

## Font weight and italics

Quickly change the weight (boldness) of text<!-- Boosted mod // or italicize text-->.

<!-- Boosted mod -->
Orange Brand — thus Boosted — does not allow italic styles, and light, lighter and bolder weights.

{{< example >}}
<p class="font-weight-bold">Bold text.</p>
<p class="font-weight-normal">Normal weight text.</p>
<p class="font-italic">Bold text, too.</p>
{{< /example >}}

## Monospace

Change a selection to our monospace font stack with `.text-monospace`.

{{< example >}}
<p class="text-monospace">This is in monospace</p>
{{< /example >}}

## Reset color

Reset a text or link's color with `.text-reset`, so that it inherits the color from its parent.

{{< example >}}
<p class="text-muted">
  Muted text with a <a href="#" class="text-reset">reset link</a>.
</p>
{{< /example >}}

## Text decoration

Remove a text decoration with a `.text-decoration-none` class.

{{< example >}}
<a href="#" class="text-decoration-none">Non-underlined link</a>
{{< /example >}}

## Line length

Limit the line length with `.ll-*` utilities. It applies `max-width` property to an element with a width based on `ch` unit. This one was chosen because it is a font-based unit and because `1ch` is the width of "0" (which is around an average character width). It requires anything but `inline` to be applied.

{{< example >}}
<p class="ll-sm">This is a long paragraph written to show how the line-length of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="ll-md">This is a long paragraph written to show how the line-length of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p><span class="ll-md"><strong>Inline element.</strong> This is a long paragraph written to show how the line-length of an inline element isn't affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</span></p>
<p class="ll-sm display-4">This is a long paragraph written to show how the line-length of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
{{< /example >}}
