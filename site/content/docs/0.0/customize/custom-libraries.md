---
layout: docs
title: Custom libraries
description: Learn how to customize your library for your country/B-brand following the guide.
group: customize
aliases:
  - "/docs/customize/lib-for-orange/"
toc: true
---

{{< callout danger >}}
**This content is not intended for standalone projects.** It is specifically for those looking to customize the entire library to fit a completely different design or brand.
{{< /callout >}}

## Architecture

### Raw tokens

The `scss/tokens/_raw.scss` file consolidates all basic tokens. While these tokens don't carry semantic meaning and aren't meant to be used directly, they form the foundation of the Orange Unified Design System. Their primary purpose is to be utilized by semantic tokens, and occasionally, by component tokens.

### Semantic tokens

The `scss/tokens/_semantic.scss` file contains all the semantic tokens. Unlike raw tokens, these are intended to be used directly. They build on raw tokens, assigning them semantic meaning through media queries or specific contexts. These tokens are ready to be applied either in utilities or directly within component tokens.

### Component tokens

The `scss/tokens/_components.scss` file is dedicated to component tokens. These tokens should be used exclusively within components, often relying on semantic tokens, though they may occasionally reference raw tokens. Essentially, they map the semantic tokens to components.

## Customization

### Modifying the tokens

#### Having a designer

If you have a designer (which is highly recommended when creating a new brand), implementing changes should be straightforward. You'll need to replace our token files with those provided by your designer, manually substituting and remapping tokens to match your brand’s specifications.

For a practical example of how this process works and what your customized library should look like after the changes, refer to [our guide on Stackblitz](https://stackblitz.com/edit/github-j5teen).

#### Having no designer

In the absence of a designer, it’s advisable to reach out to the [OUDS Web core team]({{< docsref "/about/team" >}}).

### Building and deploying documentation

You are responsible for building and deploying your documentation. You can start with our existing documentation, modifying or removing sections as needed to fit your new design. Alternatively, you may choose to build your documentation from scratch using any preferred framework.
