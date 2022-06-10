---
layout: docs
title: Tags
description: Use tags to convey information, apply filters or display a selection of items.
group: components
toc: true
added: "5.2"
---

## Examples

A tag is basically a rounded container that can contain some elements. Please adapt the html `<tag>` to be semantically correct. It can be clickable and have a close button.

{{< callout warning >}}
You shouldn't mix tags versions in the same region, since they look the same and have different behaviors.
{{< /callout >}}

{{< example class="d-flex gap-2 align-items-center" >}}
<p class="tag">Label</p>
<button class="tag">Label</button>
<p class="tag" id="labelTag1" role="group">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close" aria-labelledby="labelTag1"><span class="visually-hidden">Close</span></button>
</p>
{{< /example >}}

## With icon

A tag can be build with an icon (img or svg).

You should add semantics to tags. For a list of tags of an article, for example, add a heading (`hn`) to explain that we are in a tag list and use `ul` or `ol` (if tags are ordered).

{{< example class="d-flex gap-2" >}}
<h2>Tags list</h2>
<ul>
  <li class="tag">
    <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
    </svg>
    Label
  </li>
</ul>
{{< /example >}}

## Actionable

A tag can be actionable either when builded with a `<button>` tag or with a close button inside.

To add semantics for buttons filter, for example, you should use `button` (if it triggers an inside the same page action) or a `a` tag (if a new URL is launched) and put a explicit heading. The text of the button or link must be clear enough to explain the function or the destination of the tag.
Most of the time, tags must be inside a list (`ul` or `ol`).

{{< example class="d-flex gap-2 align-items-center" >}}
<h2>Choose your tag filters</h2>
<ul>
  <li>
    <a href="#" class="tag">Label</a>
  </li>
  <li>
    <button class="tag">
      <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      Label
    </button>
  </li>
  <li class="tag" id="labelTag2">
    Label
    <button class="close" aria-labelledby="labelTag2"><span class="visually-hidden">Close</span></button>
  </li>
  <li class="tag" id="labelTag3">
    <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
    </svg>
    Label
    <button class="close" aria-labelledby="labelTag3"><span class="visually-hidden">Close</span></button>
  </li>
</ul>
{{< /example >}}

## Dark variant

Tags come with a dark variant: `.tag-dark`.

{{< example class="d-flex gap-2 align-items-center bg-dark" >}}
<p class="tag tag-dark">Label</p>
<button class="tag tag-dark">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</button>
<p class="tag tag-dark" id="labelTag4" role="group">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close" aria-labelledby="labelTag4"><span class="visually-hidden">Close</span></button>
</p>
{{< /example >}}

## Sizes

Tags come with a small variant: `.tag-sm`.

{{< example class="d-flex gap-2 align-items-center" >}}
<p class="tag tag-sm">Label</p>
<button class="tag tag-sm">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</button>
<p class="tag tag-sm" id="labelTag5" role="group">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close" aria-labelledby="labelTag5"><span class="visually-hidden">Close</span></button>
</p>
{{< /example >}}

## Disabled state

Tags come with a disabled state: `.disabled`. Don't forget to add `aria-disabled` to the `<span>` and `disabled` attribute to the `<button>` where needed.

{{< example class="d-flex gap-2 align-items-center" >}}
<p class="tag disabled" aria-disabled="true">Label</p>
<button class="tag" disabled>
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
</button>
<p class="tag disabled" id="labelTag6" role="group" aria-disabled="true">
  <svg fill="currentColor" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  Label
  <button class="close" aria-labelledby="labelTag6" disabled><span class="visually-hidden">Close</span></button>
</p>
{{< /example >}}

## CSS

### Variables

Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="tag-css-vars" file="scss/_tag.scss" >}}

Customization through CSS variables can be seen on the `.tag-dark` class where we override specific values without adding duplicate CSS selectors.

{{< scss-docs name="tag-dark-css-vars" file="scss/_tag.scss" >}}

Customization through CSS variables can be seen on the `.tag-sm` class where we override specific values without adding duplicate CSS selectors.

{{< scss-docs name="tag-sm-css-vars" file="scss/_tag.scss" >}}

### Sass Variables

{{< scss-docs name="tag-variables" file="scss/_variables.scss" >}}
