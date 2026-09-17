// Playground for Static card item
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/items/
//
// Items are the OUDS Web equivalent of design `List item`. The docs page
// documents 4 types from a shared `.item`/`.item-container`/`.item-content`
// base: Static card item, Navigation card item, Static list item and
// Navigation list item. Each gets its own file in this corpus rather than one
// file with a "type" select, because a card item is a `<div class="item">`
// and a list item is an `<li class="item">` inside `<ul class="item-list">` —
// two different DOM shapes, not one shape with a class swapped.
//
// This file: the non-interactive, self-contained card. No link, no
// `.item-navigation`, no back-chevron/external-link variants — those live in
// NavigationCardItemPlayground.
//
// No `mapping.yml` was available in this workspace, so this is a preview/story
// pair only (artifacts 1–2). Code Connect and the Figma plugin (3–4) are
// blocked on the kit.
//
// LEADING/TRAILING ARE ONE SELECT, NOT AN ASSET-TYPE PLUS A SIZE. Figma-side
// this is "asset type" crossed with "size", but the stylesheet only ever
// compounds a handful of pairs (`item-leading-large`, `item-leading-xlarge` +
// `item-leading-rounded`, never both sizes at once) — so the pairs the docs
// actually show become the options of a single table, keyed by a
// self-describing label. Adding a second control for size would let someone
// reach a combination the design system does not draw.
//
// SMALL ITEM IS A FORBIDDEN-COMBINATION WARNING, NOT A GATE. The docs say a
// small item must not use a sized asset, a slot, an overline or an extra
// label. Those controls stay reachable together with `Small size` — one has to
// be able to see what the combination does — and the story warns twice over,
// the way `alerts.mdx`'s forbidden pairings do: a comment in the Code panel and
// a banner in the canvas.
//
// STATE FOLDS DISABLED AND SKELETON, PER CONVENTIONS §18. Both are documented
// wrappers/attributes with no other value, so one `State` select carries them
// instead of two checkboxes.
//
// `Rounded corners` is brand-specific (Orange, Orange compact) and a
// project-wide setting (`.use-rounded-corner-items` on an ancestor), never a
// property of one item — kept as a checkbox for demonstration, as the docs'
// own example wraps a `<div>` standing in for `<body>`.

const assetOptions = [
  'None',
  'Icon',
  'Icon large',
  'Status icon — Positive',
  'Status icon — Warning',
  'Status icon — Info',
  'Status icon — Negative',
  'Image',
  'Image large',
  'Image xlarge rounded',
  'Slot'
]

const trailingAssetOptions = [
  'None',
  'Text',
  'Text bold',
  'Text muted',
  'Badge count',
  'Badge dot',
  'Tag',
  'Icon',
  'Icon large',
  'Status icon — Positive',
  'Status icon — Warning',
  'Status icon — Info',
  'Status icon — Negative',
  'Image',
  'Image large',
  'Image xlarge rounded',
  'Slot'
]

const states = ['Default', 'Disabled', 'Skeleton']
const backgrounds = ['Default', 'With background', 'No background']

const orElse = (value, options) => (options.includes(value) ? value : options[0])

const indent = (markup, pad) => markup.split('\n').map((line) => (line ? `${pad}${line}` : line)).join('\n')

const block = (parts, pad) => parts.filter(Boolean).map((part) => indent(part, pad)).join('\n')

// The icon is inlined for the canvas — an SVG `<use>` does not cross origins —
// and printed as a sprite reference for the Code panel, which is what one
// writes in a real page (conventions.md §6).
const inlineHeartPath = '<path d="M18.4 11.242 12 18.247l-6.4-7.005-.003-.004a3.285 3.285 0 0 1 .247-4.678 3.383 3.383 0 0 1 4.625.128l.979.92.552.525.552-.525.98-.92.009-.01a3.352 3.352 0 0 1 2.37-.97c1.852 0 3.354 1.483 3.354 3.313a3.29 3.29 0 0 1-.862 2.217l-.003.004Zm1.463-6.125A5.635 5.635 0 0 0 12 5.08c-2.185-2.118-5.694-2.105-7.863.038a5.475 5.475 0 0 0-.105 7.702L12 21.5l7.968-8.68a5.475 5.475 0 0 0-.105-7.703Z"/>'

const inlineIcons = { heartEmpty: `<svg class="w-100 h-100" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">${inlineHeartPath}</svg>` }
const spriteIcons = { heartEmpty: '<svg class="w-100 h-100" aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"/></svg>' }

const statusIconClasses = {
  'Status icon — Positive': 'item-status-positive',
  'Status icon — Warning': 'item-status-warning',
  'Status icon — Info': 'item-status-info',
  'Status icon — Negative': 'item-status-negative'
}

const leadingTemplates = {
  'None': () => '',
  'Icon': (icons) => `<div class="item-leading-container">
  ${icons.heartEmpty}
</div>`,
  'Icon large': (icons) => `<div class="item-leading-container item-leading-large">
  ${icons.heartEmpty}
</div>`,
  'Status icon — Positive': () => `<div class="item-leading-container">
  <div class="item-icon ${statusIconClasses['Status icon — Positive']}"></div>
</div>`,
  'Status icon — Warning': () => `<div class="item-leading-container">
  <div class="item-icon ${statusIconClasses['Status icon — Warning']}"></div>
</div>`,
  'Status icon — Info': () => `<div class="item-leading-container">
  <div class="item-icon ${statusIconClasses['Status icon — Info']}"></div>
</div>`,
  'Status icon — Negative': () => `<div class="item-leading-container">
  <div class="item-icon ${statusIconClasses['Status icon — Negative']}"></div>
</div>`,
  'Image': () => `<div class="item-leading-container">
  <img alt="" src="https://placecats.com/500/500" class="w-100 h-100 object-fit-cover">
</div>`,
  'Image large': () => `<div class="item-leading-container item-leading-large">
  <img alt="" src="https://placecats.com/500/500" class="w-100 h-100 object-fit-cover">
</div>`,
  'Image xlarge rounded': () => `<div class="item-leading-container item-leading-xlarge item-leading-rounded ratio-16x9">
  <img alt="" src="https://placecats.com/500/500" class="w-100 h-100 object-fit-cover">
</div>`,
  'Slot': () => `<div class="item-leading-container item-slot">
  <button class="btn btn-strong">Slot</button>
</div>`
}

const trailingTemplates = {
  'None': () => '',
  'Text': () => `<div class="item-trailing-container">
  <p class="item-label">Label</p>
  <p class="item-extra-label">Extra label</p>
</div>`,
  'Text bold': () => `<div class="item-trailing-container">
  <p class="item-label fw-bold">Label</p>
</div>`,
  'Text muted': () => `<div class="item-trailing-container">
  <p class="item-label text-muted">Label</p>
</div>`,
  'Badge count': () => `<div class="item-trailing-container">
  <p class="badge badge-count">12<span class="visually-hidden">errors</span></p>
</div>`,
  'Badge dot': () => `<div class="item-trailing-container">
  <span class="badge badge-large"></span>
</div>`,
  'Tag': () => `<div class="item-trailing-container">
  <p class="tag">Tag</p>
</div>`,
  'Icon': (icons) => `<div class="item-trailing-container">
  ${icons.heartEmpty}
</div>`,
  'Icon large': (icons) => `<div class="item-trailing-container item-trailing-large">
  ${icons.heartEmpty}
</div>`,
  'Status icon — Positive': () => `<div class="item-trailing-container">
  <div class="item-icon ${statusIconClasses['Status icon — Positive']}"></div>
</div>`,
  'Status icon — Warning': () => `<div class="item-trailing-container">
  <div class="item-icon ${statusIconClasses['Status icon — Warning']}"></div>
</div>`,
  'Status icon — Info': () => `<div class="item-trailing-container">
  <div class="item-icon ${statusIconClasses['Status icon — Info']}"></div>
</div>`,
  'Status icon — Negative': () => `<div class="item-trailing-container">
  <div class="item-icon ${statusIconClasses['Status icon — Negative']}"></div>
</div>`,
  'Image': () => `<div class="item-trailing-container">
  <img alt="" src="https://placecats.com/500/500" class="w-100 h-100 object-fit-cover">
</div>`,
  'Image large': () => `<div class="item-trailing-container item-trailing-large">
  <img alt="" src="https://placecats.com/500/500" class="w-100 h-100 object-fit-cover">
</div>`,
  'Image xlarge rounded': () => `<div class="item-trailing-container item-trailing-xlarge ratio-16x9 item-trailing-rounded">
  <img alt="" src="https://placecats.com/500/500" class="w-100 h-100 object-fit-cover">
</div>`,
  'Slot': () => `<div class="item-trailing-container item-slot">
  <button class="btn btn-strong">Slot</button>
</div>`
}

// A sized asset, or a slot, is what the docs forbid on a small item.
const restrictedForSmall = (asset) => /large|xlarge/i.test(asset) || asset === 'Slot'

// OUDS forbids some combinations the markup allows. They stay reachable — one
// has to be able to see what they do — and the story warns twice over: a
// comment that travels with the copied markup, and a banner in the canvas,
// deliberately styled outside the design system so it cannot be mistaken for a
// component (conventions.md §14/§21).
const warningBanner = (warning) => `<div class="alert alert-message alert-negative mb-medium" role="alert">
  <div class="alert-icon"><p class="visually-hidden">Warning</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">${warning}</p>
    </div>
  </div>
</div>
`

const warned = (markup, warning, preview) => (warning
  ? `${preview ? warningBanner(warning) : ''}<!-- ${warning} -->
${markup}`
  : markup)

const smallSizeWarning = (small, leading, trailing, overline, extraLabel) => {
  const problems = small
    ? [
      restrictedForSmall(leading) ? 'leading asset' : '',
      restrictedForSmall(trailing) ? 'trailing asset' : '',
      overline ? 'overline' : '',
      extraLabel ? 'extra label' : ''
    ].filter(Boolean)
    : []

  return problems.length
    ? `OUDS: a small item must not use a sized asset, a slot, an overline or an extra label (${problems.join(', ')}). Remove them or turn Small size off.`
    : ''
}

// Skeleton is carried by an ancestor, `<div aria-busy="true" inert>`, never by
// the component itself (conventions.md §7). Same markup for every component.
const skeletonWrapper = (markup, skeleton) => (skeleton
  ? `<div aria-busy="true" inert>
${indent(markup, '  ')}
</div>`
  : markup)

// Disabled is carried by `[aria-disabled="true"]` on an ancestor, not by a
// class on the item itself.
const disabledWrapper = (markup, disabled) => (disabled
  ? `<div aria-disabled="true">
${indent(markup, '  ')}
</div>`
  : markup)

// A project-wide setting, never a property of one item.
const roundedCornersWrapper = (markup, rounded) => (rounded
  ? `<div class="use-rounded-corner-items">
${indent(markup, '  ')}
</div>`
  : markup)

const renderStaticCardItem = ({ overline, label, boldLabel, extraLabel, description, leadingAsset, trailingAsset, helperText, state, background, noDivider, outlined, roundedCorners, topAlignment, smallSize, maxWidth }, icons = inlineIcons, preview = true) => {
  const safeLeading = orElse(leadingAsset, assetOptions)
  const safeTrailing = orElse(trailingAsset, trailingAssetOptions)
  const safeState = orElse(state, states)
  const safeBackground = orElse(background, backgrounds)

  const backgroundClasses = {
    'Default': '',
    'With background': 'item-bg',
    'No background': 'item-no-bg'
  }

  const itemClasses = [
    'item',
    smallSize ? 'item-small' : '',
    topAlignment ? 'item-top' : '',
    outlined ? 'item-outlined' : '',
    noDivider ? 'item-no-divider' : '',
    backgroundClasses[safeBackground],
    maxWidth ? 'component-max-width' : ''
  ].filter(Boolean).join(' ')

  const textContainer = `<div class="item-text-container">
${block([
    !smallSize && overline ? `<p class="item-overline">${overline}</p>` : '',
    `<p class="item-label${boldLabel ? ' fw-bold' : ''}">${label}</p>`,
    !smallSize && extraLabel ? `<p class="item-extra-label">${extraLabel}</p>` : '',
    description ? `<p class="item-description">${description}</p>` : ''
  ], '  ')}
</div>`

  const itemContent = `<div class="item-content">
${block([
    leadingTemplates[safeLeading](icons),
    textContainer,
    trailingTemplates[safeTrailing](icons)
  ], '  ')}
</div>`

  const itemContainer = `<div class="item-container">
${indent(itemContent, '  ')}
</div>`

  const helper = helperText ? `<p class="item-helper">${helperText}</p>` : ''

  const item = `<div class="${itemClasses}">
${block([itemContainer, helper], '  ')}
</div>`

  const warning = smallSizeWarning(smallSize, safeLeading, safeTrailing, overline, extraLabel)
  const withState = disabledWrapper(skeletonWrapper(warned(item, warning, preview), safeState === 'Skeleton'), safeState === 'Disabled')

  return roundedCornersWrapper(withState, roundedCorners)
}

export default {
  title: 'Playground/Static card item',
  argTypes: {
    overline: {
      name: 'Overline',
      control: 'text',
      description: 'Hidden in a small item — see `Small size`.',
    },
    label: {
      name: 'Label',
      control: 'text',
    },
    boldLabel: {
      name: 'Bold label',
      control: 'boolean',
      description: 'Adds `.fw-bold` to `.item-label`.',
    },
    extraLabel: {
      name: 'Extra label',
      control: 'text',
      description: 'Hidden in a small item — see `Small size`.',
    },
    description: {
      name: 'Description',
      control: 'text',
    },
    leadingAsset: {
      name: 'Leading asset',
      control: 'select',
      options: assetOptions,
      description: 'One control for asset type and size together: the stylesheet only ever compounds the pairs the design system draws (`item-leading-large`, or `item-leading-xlarge` + `item-leading-rounded`), so those pairs are the options rather than two separate controls that could reach an undrawn combination.',
    },
    trailingAsset: {
      name: 'Trailing asset',
      control: 'select',
      options: trailingAssetOptions,
      description: 'Text, badge and tag are exempt from the small-item sizing restriction; icon and image are not.',
    },
    helperText: {
      name: 'Helper text',
      control: 'text',
      description: '`.item-helper`, a sibling of `.item-container`, after it.',
    },
    state: {
      name: 'State',
      control: 'select',
      options: states,
      description: '`Disabled` wraps the item in `[aria-disabled="true"]`; `Skeleton` in `aria-busy="true" inert`. Folded into one select per conventions.md §18, since both are ancestor wrappers with no other value.',
    },
    background: {
      name: 'Background',
      control: 'select',
      options: backgrounds,
      description: 'Card items already paint a background by default; `With background` / `No background` add `.item-bg` / `.item-no-bg` to override it.',
    },
    noDivider: {
      name: 'No divider',
      control: 'boolean',
      description: '`.item-no-divider`. Combine with `Outlined` for the outlined-without-divider variant the docs show.',
    },
    outlined: {
      name: 'Outlined',
      control: 'boolean',
      description: '`.item-outlined`. The docs restrict this variant to card items — it is not offered on the list item stories.',
    },
    roundedCorners: {
      name: 'Rounded corners',
      control: 'boolean',
      description: '`.use-rounded-corner-items` on an ancestor — a project-wide setting, Orange and Orange compact only. "For standard or business-oriented usage, keep the default square corners."',
    },
    topAlignment: {
      name: 'Top alignment',
      control: 'boolean',
      description: '`.item-top`.',
    },
    smallSize: {
      name: 'Small size',
      control: 'boolean',
      description: '`.item-small`. Forbids sized leading/trailing assets, slots, overline and extra label — see the warning if any is still set.',
    },
    maxWidth: {
      name: 'Max width',
      control: 'boolean',
      description: '`.component-max-width`, directly on the item — the docs put the class straight on `.item`, not on a wrapper.',
    }
  }
}

export const PlaygroundStaticCardItem = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => renderStaticCardItem(context.args, spriteIcons, false),
      },
    },
  },
  render: (args) => renderStaticCardItem(args),
  args: {
    overline: 'Overline',
    label: 'Label',
    boldLabel: false,
    extraLabel: 'Extra label',
    description: 'Description',
    leadingAsset: 'Icon',
    trailingAsset: 'None',
    helperText: '',
    state: 'Default',
    background: 'Default',
    noDivider: false,
    outlined: false,
    roundedCorners: false,
    topAlignment: false,
    smallSize: false,
    maxWidth: false
  },
}
