---
layout: docs
title: Typography
description: Documentation and examples for Boosted typography, including global settings, headings, body text, lists, and more.
group: content
toc: true
---

## Global settings

Boosted sets basic global display, typography, and link styles. When more control is needed, check out the [textual utility classes]({{< docsref "/utilities/text" >}}).

<!-- Boosted mod -->
- Use **Helvetica Neue** (locally if available, webfont otherwise), with Helvetica and Arial as preferred fallback.
- Then use a [native font stack]({{< docsref "/content/reboot#native-font-stack" >}}) that selects the best `font-family` for each OS and device.
- For a more inclusive and accessible type scale, we use the browser's default root `font-size` (typically 16px) so visitors can customize their browser defaults as needed.
- Use the `$font-family-base`, `$font-size-base`, `$line-height-base` and `$letter-spacing-base` attributes as our typographic base applied to the `<body>`.
- Set the global link color via `$link-color` and apply link underlines only on `:hover`.
- Use `$body-bg` to set a `background-color` on the `<body>` (`#fff` by default).

These styles can be found within `_reboot.scss`, and the global variables are defined in `_variables.scss`. Make sure to set `$font-size-base` in `rem`.

## Headings

All HTML headings, `<h1>` through `<h6>`, are available.

<table class="table">
  <!-- Boosted mod -->
  <thead>
    <tr>
        <th scope="col">Heading</th>
        <th scope="col">Desktop size</th>
        <th scope="col">Tablet size</th>
        <th scope="col">Mobile size</th>
        <th scope="col">
            Line height
            <small class="text-muted">Desktop</small>
        </th>
        <th scope="col">
            Letter spacing
            <small class="text-muted">Desktop</small>
        </th>
    </tr>
  </thead>
  <!-- end mod -->    
  <tbody>
    <tr>
      <td>
        {{< markdown >}}`<h1></h1>`{{< /markdown >}}
      </td>
      <!-- Boosted mod -->
      <td>Bold 2.125rem <small class="text-muted">(34px)</small></td>
      <td>Bold 2.125rem <small class="text-muted">(34px)</small></td>
      <td>Bold 1.5rem <small class="text-muted">(24px)</small></td>
      <td>1 <small class="text-muted">(34px)</small></td>
      <td>-0.0625rem <small class="text-muted">(-1px)</small></td>
      <!-- end mod -->
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h2></h2>`{{< /markdown >}}
      </td>
      <!-- Boosted mod -->
      <td>Bold 1.875rem <small class="text-muted">(30px)</small></td>
      <td>Bold 1.5rem <small class="text-muted">(24px)</small></td>
      <td>Bold 1.125rem <small class="text-muted">(18px)</small></td>
      <td>1.067 <small class="text-muted">(32px)</small></td>
      <td>-0.05rem <small class="text-muted">(-0.8px)</small></td>
      <!-- end mod -->
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h3></h3>`{{< /markdown >}}
      </td>
      <!-- Boosted mod -->
      <td>Bold 1.5rem <small class="text-muted">(24px)</small></td>
      <td>Bold 1.25rem <small class="text-muted">(20px)</small></td>
      <td rowspan="2">Bold 1.125rem <small class="text-muted">(18px)</small></td>
      <td>1.083 <small class="text-muted">(26px)</small></td>
      <td>-0.0375rem <small class="text-muted">(-0.5px)</small></td>
      <!-- end mod -->
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h4></h4>`{{< /markdown >}}
      </td>
      <!-- Boosted mod -->
      <td>Bold 1.25rem <small class="text-muted">(20px)</small></td>
      <td>Bold 1.125rem <small class="text-muted">(18px)</small></td>
      <td>1.1 <small class="text-muted">(22px)</small></td>
      <td>-0.025rem <small class="text-muted">(-0.4px)</small></td>
      <!-- end mod -->
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h5></h5>`{{< /markdown >}}
      </td>
      <!-- Boosted mod -->
      <td>Bold 1.125rem <small class="text-muted">(18px)</small></td>
      <td colspan="2">Bold 1rem <small class="text-muted">(16px)</small></td>
      <td>1.111 <small class="text-muted">(20px)</small></td>
      <td>-0.0125rem <small class="text-muted">(-0.2px)</small></td>
      <!-- end mod -->
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h6></h6>`{{< /markdown >}}
      </td>
      <!-- Boosted mod -->
      <td colspan="3">Bold 1rem <small class="text-muted">(16px)</small></td>
      <td>1.125 <small class="text-muted">(18px)</small></td>
      <td>-0.00625rem <small class="text-muted">(-0.1px)</small></td>
      <!-- end mod -->
    </tr>
  </tbody>
</table>

```html
<h1>h1. Boosted heading</h1>
<h2>h2. Boosted heading</h2>
<h3>h3. Boosted heading</h3>
<h4>h4. Boosted heading</h4>
<h5>h5. Boosted heading</h5>
<h6>h6. Boosted heading</h6>
```

`.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.

{{< example >}}
<p class="h1">h1. Boosted heading</p>
<p class="h2">h2. Boosted heading</p>
<p class="h3">h3. Boosted heading</p>
<p class="h4">h4. Boosted heading</p>
<p class="h5">h5. Boosted heading</p>
<p class="h6">h6. Boosted heading</p>
{{< /example >}}

### Customizing headings

Use the included utility classes to recreate the small secondary heading text from Boosted 3.

{{< example >}}
<h3>
  Fancy display heading
  <small class="text-muted">With faded secondary text</small>
</h3>
{{< /example >}}

## Display headings

Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a **display heading**—a larger, slightly more opinionated heading style.<!-- Keep in mind these headings are not responsive by default, but it's possible to enable [responsive font sizes](#responsive-font-sizes).-->

<!-- Boosted mod -->
<table class="table">
  <thead>
    <tr>
    <th scope="col">Display size</th>
    <th scope="col">Desktop size</th>
    <th scope="col">Tablet size</th>
    <th scope="col">Mobile size</th>
    <th scope="col">
        Line height
        <small class="text-muted">Desktop</small>
    </th>
    <th scope="col">
        Letter spacing
        <small class="text-muted">Desktop</small>
    </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Display 1</td>
      <td>Bold 3.75rem <small class="text-muted">(60px)</small></td>
      <td>Bold 3.125rem <small class="text-muted">(50px)</small></td>
      <td>Bold 1.875rem <small class="text-muted">(30px)</small></td>
      <td>1 <small class="text-muted">(60px)</small></td>
      <td>-0.125rem <small class="text-muted">(-2px)</small></td>
    </tr>
    <tr>
      <td>Display 2</td>
      <td>Bold 3.125rem <small class="text-muted">(50px)</small></td>
      <td>Bold 2.5rem <small class="text-muted">(40px)</small></td>
      <td>Bold 1.5rem <small class="text-muted">(24px)</small></td>
      <td>1 <small class="text-muted">(50px)</small></td>
      <td>-0.1rem <small class="text-muted">(-1.6px)</small></td>
    </tr>
    <tr>
      <td>Display 3</td>
      <td>Bold 2.5rem <small class="text-muted">(40px)</small></td>
      <td>Bold 2.125rem <small class="text-muted">(34px)</small></td>
      <td>Bold 1.5rem <small class="text-muted">(24px)</small></td>
      <td>1 <small class="text-muted">(40px)</small></td>
      <td>-0.0625rem <small class="text-muted">(-1px)</small></td>
    </tr>
    <tr>
      <td>Display 4</td>
      <td>Bold 2.125rem <small class="text-muted">(34px)</small></td>
      <td>Bold 1.5rem <small class="text-muted">(24px)</small></td>
      <td>Bold 1.125rem <small class="text-muted">(18px)</small></td>
      <td>1 <small class="text-muted">(34px)</small></td>
      <td>-0.0625rem <small class="text-muted">(-1px)</small></td>
    </tr>
  </tbody>
</table>
    
<div class="bd-example bd-example-type">
  <table class="table">
    <tbody>
      <tr>
        <td><span class="display-1">Display 1</span></td>
      </tr>
      <tr>
      <td><span class="display-2">Display 2</span></td>
      </tr>
      <tr>
      <td><span class="display-3">Display 3</span></td>
      </tr>
      <tr>
      <td><span class="display-4">Display 4</span></td>
      </tr>
    </tbody>
  </table>
</div>

```html
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
```

<!-- Boosted mod -->
## Regular text

Since only [headings](#headings), [display headings](#display-headings) and `strong` text are meant to use **Bold** in main content, other contents should use regular font-weight.

<table class="table">
  <thead>
    <tr>
    <th scope="col">Font size</th>
    <th scope="col">Desktop size</th>
    <th scope="col">Tablet size</th>
    <th scope="col">Mobile size</th>
    <th scope="col">
        Line height
        <small class="text-muted">Desktop</small>
    </th>
    <th scope="col">
        Letter spacing
        <small class="text-muted">Desktop</small>
    </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lead</td>
      <td>Regular 1.25rem <small class="text-muted">(20px)</small></td>
      <td>Regular 1.125rem <small class="text-muted">(18px)</small></td>
      <td>Regular 1rem <small class="text-muted">(16px)</small></td>
      <td>1.5 <small class="text-muted">(30px)</small></td>
      <td>-0.015625rem <small class="text-muted">(-0.25px)</small></td>
    </tr>
    <tr>
      <td>Body copy</td>
      <td colspan="3">Regular 1rem <small class="text-muted">(16px)</small></td>
      <td>1.5 <small class="text-muted">(24px)</small></td>
      <td>-0.00625rem <small class="text-muted">(-0.1px)</small></td>
    </tr>
    <tr>
      <td>Small</td>
      <td colspan="3">Regular .875rem <small class="text-muted">(14px)</small></td>
      <td>1.143 <small class="text-muted">(16px)</small></td>
      <td>-0.00625rem <small class="text-muted">(-0.1px)</small></td>
    </tr>
  </tbody>
</table>

## Lead

Make a paragraph stand out by adding `.lead`.

{{< example >}}
<p class="lead">
  This is a lead paragraph. It stands out from regular paragraphs.
</p>
{{< /example >}}

## Inline text elements

Styling for common inline HTML5 elements.

{{< example >}}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as bold text too,</em> but would natively be italicized</p>
{{< /example >}}

`.mark` and `.small` classes are also available to apply the same styles as `<mark>` and `<small>` while avoiding any unwanted semantic implications that the tags would bring.

While not shown above, feel free to use `<b>` and `<i>` in HTML5. `<b>` is meant to highlight words or phrases without conveying additional importance while `<i>` is mostly for voice, technical terms, etc.

## Text utilities

Change text alignment, transform, style, weight, and color with our [text utilities]({{< docsref "/utilities/text" >}}) and [color utilities]({{< docsref "/utilities/colors" >}}).

## Abbreviations

Stylized implementation of HTML's `<abbr>` element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.

Add `.initialism` to an abbreviation for a slightly smaller font-size.

{{< example >}}
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
{{< /example >}}

## Blockquotes

For quoting blocks of content from another source within your document. Wrap `<blockquote class="blockquote">` around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote.

{{< example >}}
<blockquote class="blockquote">
  <p class="mb-0">A well-known quote, contained in a blockquote element.</p>
</blockquote>
{{< /example >}}

### Naming a source

Add a `<footer class="blockquote-footer">` for identifying the source. Wrap the name of the source work in `<cite>`.

{{< example >}}
<blockquote class="blockquote">
  <p class="mb-0">A well-known quote, contained in a blockquote element.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{{< /example >}}

<!-- Boosted mod: remove blockquotes' alignment part -->

## Lists

### Unstyled

Remove the default `list-style` and left margin on list items (immediate children only). **This only applies to immediate children list items**, meaning you will need to add the class for any nested lists as well.

{{< example >}}
<ul class="list-unstyled">
  <li>This is a list.</li>
  <li>It appears completely unstyled.</li>
  <li>Structurally, it's still a list.</li>
  <li>However, this style only applies to immediate child elements.</li>
  <li>Nested lists:
    <ul>
      <li>are unaffected by this style</li>
      <li>will still show a bullet</li>
      <li>and have appropriate left margin</li>
    </ul>
  </li>
  <li>This may still come in handy in some situations.</li>
</ul>
{{< /example >}}

### Inline

Remove a list's bullets and apply some light `margin` with a combination of two classes, `.list-inline` and `.list-inline-item`.

{{< example >}}
<ul class="list-inline">
  <li class="list-inline-item">This is a list item.</li>
  <li class="list-inline-item">And another one.</li>
  <li class="list-inline-item">But they're displayed inline.</li>
</ul>
{{< /example >}}

### Description list alignment

Align terms and descriptions horizontally by using our grid system's predefined classes (or semantic mixins). For longer terms, you can optionally add a `.text-truncate` class to truncate the text with an ellipsis.

{{< example >}}
<dl class="row">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Term</dt>
  <dd class="col-sm-9">
    <p>Definition for the term.</p>
    <p>And some more placeholder definition text.</p>
  </dd>

  <dt class="col-sm-3">Another term</dt>
  <dd class="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
    </dl>
  </dd>
</dl>
{{< /example >}}

<!-- Boosted mod -->
### Orange square list

You may add `o-square-list` class to the root element of a list (`<ul>`) to get Orange square list style. Maximum elements depth is 3.

{{< example >}}
<ul class="o-square-list">
    <li>First
        <ul>
            <li>1.1
                <ul>
                    <li>1.1.1</li>
                    <li>1.1.2</li>
                </ul>
            </li>
            <li>1.2</li>
        </ul>
    </li>
    <li>Second</li>
    <li>Third</li>
    <li>Fourth</li>
</ul>
{{< /example >}}

<!-- Boosted mod: no RFS -->

## Links

By default, links are black and underlined.

{{< example >}}
<a href="#">This is a sample default link</a>
{{< /example >}}

### With arrow

Add the class `o-link-arrow` to a link, add an arrow after the text link.

{{< example >}}
<a href="#" class="o-link-arrow">This is a sample link with arrow</a>
{{< /example >}}

### With back arrow

To convert arrow link to backward link, add `back` class to the link with class `o-link-arrow`.

{{< example >}}
<a href="#" class="o-link-arrow back">This is a sample link with arrow for backward</a>
{{< /example >}}

<!-- End mod -->

## Responsive typography

*Responsive typography* refers to scaling text and components by simply adjusting the root element's `font-size` within a series of media queries. Boosted doesn't do this for you, but it's fairly easy to add if you need it.

Here's an example of it in practice. Choose whatever `font-size`s and media queries you wish.

```scss
html {
  font-size: 1rem;
}

@include media-breakpoint-up(sm) {
  html {
    font-size: 1.2rem;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 1.4rem;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 1.6rem;
  }
}
```
