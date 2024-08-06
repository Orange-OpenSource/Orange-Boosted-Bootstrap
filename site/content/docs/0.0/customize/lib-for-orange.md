---
layout: docs
title: Lib for Orange
description: Customize your library for your country/B-brand following the guide.
group: customize
aliases:
  - "/docs/customize/lib-for-orange/"
toc: true
---

{{< callout danger >}}
**This content is not for standalone projects purpose.** The following content is about changing the whole library for a totally different design or brand.
{{< /callout >}}

## Architecture

### `_raw.scss`

This file gathers all the basic tokens. These tokens aren't meant to be used as-is because they don't convey any semantic meaning but they are the basic values of the Orange Unified Design System. They are meant to be be used by the semantic tokens and on some rare cases on the components tokens.

### `_semantic.scss`

This file gathers all the semantic tokens. These tokens are meant to be used as-is. They use the raw tokens and give them some semantic meaning using some media queries or some specific contexts. They are meant to be used as-is either in the utilities or in the components tokens.

### `_components.scss`

This file gathers all the components tokens. These tokens are meant to be used in the components only. They use either sometimes the raw tokens or rather the semantic tokens. They are only a mapping of the semantic tokens.

## Customization

### Modifying the tokens

#### Having a designer

If you have a designer (and you probably should since you are creating a new brand), the changes should be quite easy to implement. You should <!--either -->replace our token files by yours, replacing and remapping manually the tokens using the ones brought by your designer <!--or even simpler, replace our tokens files by yours using our StyleDictionary parser-->.

Follow [our guide on Stackblitz](https://stackblitz.com/edit/github-j5teen) to see how it should behave and how should your library look like once the tokens have been changed.

#### Having no designer

If you have no designer, please contact the [OUDS Web core team]({{< docsref "/about/team" >}}).

### Documentation

You should build and deploy your documentation on your own. You can of course start from our documentation and enhance or delete parts of it. You can also start from scratch using any kind of framework to build your website.
