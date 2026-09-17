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
// ASSET TYPE, SIZE AND STATUS ARE THREE CONTROLS, NOT ONE CATALOGUE ENTRY PER
// COMBINATION. `Leading asset`/`Trailing asset` pick the family (`Icon`,
// `Image`, `Slot`…); `Leading size`/`Trailing size` and `Leading status`/
// `Trailing status` are gated on it with `if: { oneOf }` / `if: { eq }`
// (conventions.md §8) so only the combinations the stylesheet actually draws
// stay reachable — `Icon` has no `XLarge rounded` (falls back to `Large`),
// a status recolors the icon and always wins over size, and `Image` has no
// status. A single "Icon large" / "Status icon — Positive" style option
// folded two independent axes into one string per value, which is exactly the
// catalogue conventions.md §14 warns against.
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
  'Image',
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
  'Image',
  'Slot'
]

// `Icon` never draws `XLarge rounded` (falls back to `Large`); `Image` never
// takes a status. Shared axes, gated per asset (conventions.md §8).
const sizeOptions = ['Normal', 'Large', 'XLarge rounded']
const statusOptions = ['None', 'Positive', 'Warning', 'Info', 'Negative']

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

// The `icon` control repaints `Icon` leading and trailing assets with any SVG
// or image, the same paste-in mechanism as the button and control-item
// playgrounds — `Tag` and the two `Badge` options are left alone, each already
// has its own dedicated playground (conventions.md §6).
const iconClass = 'w-100 h-100'

const setAttr = (attrs, name, value) => {
  const re = new RegExp(`\\s${name}="[^"]*"`, 'i')

  return re.test(attrs) ? attrs.replace(re, ` ${name}="${value}"`) : `${attrs} ${name}="${value}"`
}

const withIconClass = (attrs) => {
  const existing = /\sclass="([^"]*)"/i.exec(attrs)
  const classes = existing ? existing[1].split(/\s+/).filter(Boolean) : []
  const merged = classes.includes(iconClass) ? classes : [iconClass, ...classes]

  return setAttr(attrs, 'class', merged.join(' '))
}

const wrapIcon = (icon) => `<svg class="${iconClass}" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">${icon}</svg>`

const sizeOf = (attrs, name) => (new RegExp(`\\s${name}="([\\d.]+)`, 'i').exec(attrs) ?? [])[1]

const withViewBox = (attrs) => {
  const width = sizeOf(attrs, 'width')
  const height = sizeOf(attrs, 'height')

  return /\sviewBox="/i.test(attrs) || !width || !height ? attrs : `${attrs} viewBox="0 0 ${width} ${height}"`
}

const keepIcon = (icon, opening) => {
  const sized = setAttr(withViewBox(opening[1]).replace(/\s(?:width|height)="[^"]*"/gi, ''), 'aria-hidden', 'true')

  return icon.replace(/^\s*<svg[^>]*>/i, `<svg${withIconClass(sized)}>`).trim()
}

const keepImage = (icon, opening) => {
  const sized = setAttr(opening[1].replace(/\s(?:width|height)="[^"]*"/gi, ''), 'aria-hidden', 'true')

  return icon.replace(/^\s*<img[^>]*>/i, `<img${setAttr(withIconClass(sized), 'alt', '')}>`).trim()
}

const urlImage = (icon) => `<img class="${iconClass}" src="${icon.trim().replace(/"/g, '%22').replace(/\s/g, '%20')}" alt="" aria-hidden="true">`

const pastedKinds = { svg: keepIcon, img: keepImage, url: urlImage, inside: wrapIcon }

const kindOf = (icon) => [
  { kind: 'svg', when: /^\s*<svg[\s>]/i.test(icon) },
  { kind: 'img', when: /^\s*<img[\s>]/i.test(icon) },
  { kind: 'url', when: /^\s*(?:data:|https?:\/\/|\/|\.{1,2}\/)/i.test(String(icon)) }
].filter((entry) => entry.when).map((entry) => entry.kind)[0] ?? 'inside'

const inlineIcon = (icon) => {
  const kind = kindOf(icon)
  const opening = new RegExp(`^\\s*<${kind}([^>]*)>`, 'i').exec(icon)

  return pastedKinds[kind](icon, opening)
}

// A pasted icon replaces the sprite reference on both sides: the Code panel
// would otherwise lie about what the canvas renders.
const resolveIcon = (icon, fallback) => (icon ? inlineIcon(icon) : fallback)

const customIcons = (icon) => ({
  heartEmpty: resolveIcon(icon, inlineIcons.heartEmpty)
})

const customSpriteIcons = (icon) => ({
  heartEmpty: resolveIcon(icon, spriteIcons.heartEmpty)
})

const statusIconClasses = {
  'Positive': 'item-status-positive',
  'Warning': 'item-status-warning',
  'Info': 'item-status-info',
  'Negative': 'item-status-negative'
}

const leadingSizeClasses = {
  'Normal': '',
  'Large': ' item-leading-large',
  'XLarge rounded': ' item-leading-xlarge item-leading-rounded ratio-16x9'
}

const trailingSizeClasses = {
  'Normal': '',
  'Large': ' item-trailing-large',
  'XLarge rounded': ' item-trailing-xlarge ratio-16x9 item-trailing-rounded'
}

const leadingTemplates = {
  'None': () => '',
  'Icon': (icons, size, status) => (status !== 'None'
    ? `<div class="item-leading-container">
  <div class="item-icon ${statusIconClasses[status]}"></div>
</div>`
    : `<div class="item-leading-container${leadingSizeClasses[size === 'XLarge rounded' ? 'Large' : size]}">
  ${icons.heartEmpty}
</div>`),
  'Image': (icons, size) => `<div class="item-leading-container${leadingSizeClasses[size]}">
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
  'Icon': (icons, size, status) => (status !== 'None'
    ? `<div class="item-trailing-container">
  <div class="item-icon ${statusIconClasses[status]}"></div>
</div>`
    : `<div class="item-trailing-container${trailingSizeClasses[size === 'XLarge rounded' ? 'Large' : size]}">
  ${icons.heartEmpty}
</div>`),
  'Image': (icons, size) => `<div class="item-trailing-container${trailingSizeClasses[size]}">
  <img alt="" src="https://placecats.com/500/500" class="w-100 h-100 object-fit-cover">
</div>`,
  'Slot': () => `<div class="item-trailing-container item-slot">
  <button class="btn btn-strong">Slot</button>
</div>`
}

// A sized asset, or a slot, is what the docs forbid on a small item.
const restrictedForSmall = (asset, size) => asset === 'Slot' || ((asset === 'Icon' || asset === 'Image') && size !== 'Normal')

// A status icon is always normal size, whatever `Leading size`/`Trailing size` holds.
const effectiveSize = (asset, size, status) => (asset === 'Icon' && status !== 'None' ? 'Normal' : size)

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

const smallSizeWarning = (small, leading, leadingSize, trailing, trailingSize, overline, extraLabel) => {
  const problems = small
    ? [
      restrictedForSmall(leading, leadingSize) ? 'leading asset' : '',
      restrictedForSmall(trailing, trailingSize) ? 'trailing asset' : '',
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

const renderStaticCardItem = ({ overline, label, boldLabel, extraLabel, description, leadingAsset, leadingSize, leadingStatus, trailingAsset, trailingSize, trailingStatus, helperText, state, background, noDivider, outlined, roundedCorners, topAlignment, smallSize, maxWidth, icon }, icons = customIcons(icon), preview = true) => {
  const safeLeading = orElse(leadingAsset, assetOptions)
  const safeLeadingSize = orElse(leadingSize, sizeOptions)
  const safeLeadingStatus = orElse(leadingStatus, statusOptions)
  const safeTrailing = orElse(trailingAsset, trailingAssetOptions)
  const safeTrailingSize = orElse(trailingSize, sizeOptions)
  const safeTrailingStatus = orElse(trailingStatus, statusOptions)
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
    leadingTemplates[safeLeading](icons, safeLeadingSize, safeLeadingStatus),
    textContainer,
    trailingTemplates[safeTrailing](icons, safeTrailingSize, safeTrailingStatus)
  ], '  ')}
</div>`

  const itemContainer = `<div class="item-container">
${indent(itemContent, '  ')}
</div>`

  const helper = helperText ? `<p class="item-helper">${helperText}</p>` : ''

  const item = `<div class="${itemClasses}">
${block([itemContainer, helper], '  ')}
</div>`

  const warning = smallSizeWarning(smallSize, safeLeading, effectiveSize(safeLeading, safeLeadingSize, safeLeadingStatus), safeTrailing, effectiveSize(safeTrailing, safeTrailingSize, safeTrailingStatus), overline, extraLabel)
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
      description: 'The asset family. `Leading size` and `Leading status` below refine `Icon`/`Image`.',
    },
    leadingSize: {
      name: 'Leading size',
      control: 'select',
      options: sizeOptions,
      if: { arg: 'leadingAsset', oneOf: ['Icon', 'Image'] },
      description: '`Icon` only draws `Normal`/`Large` — `XLarge rounded` falls back to `Large`. Hidden once `Leading status` recolors the icon, since a status icon is always normal size. Gated on the asset with `oneOf`, which the standalone preview honours and Storybook ignores.',
    },
    leadingStatus: {
      name: 'Leading status',
      control: 'select',
      options: statusOptions,
      if: { arg: 'leadingAsset', eq: 'Icon' },
      description: 'Recolors the leading icon into a status icon (`.item-status-*`) and overrides `Leading size`.',
    },
    trailingAsset: {
      name: 'Trailing asset',
      control: 'select',
      options: trailingAssetOptions,
      description: 'Text, badge and tag are exempt from the small-item sizing restriction; icon and image are not.',
    },
    trailingSize: {
      name: 'Trailing size',
      control: 'select',
      options: sizeOptions,
      if: { arg: 'trailingAsset', oneOf: ['Icon', 'Image'] },
      description: '`Icon` only draws `Normal`/`Large` — `XLarge rounded` falls back to `Large`. Hidden once `Trailing status` recolors the icon, since a status icon is always normal size. Gated on the asset with `oneOf`, which the standalone preview honours and Storybook ignores.',
    },
    trailingStatus: {
      name: 'Trailing status',
      control: 'select',
      options: statusOptions,
      if: { arg: 'trailingAsset', eq: 'Icon' },
      description: 'Recolors the trailing icon into a status icon (`.item-status-*`) and overrides `Trailing size`.',
    },
    icon: {
      name: 'Icon content',
      control: 'text',
      description: 'A whole `<svg>…</svg>` or an `<img>`, pasted as is, a bare `data:` URL, or only the inside of an SVG (`<path>`, `<g>`…), then wrapped in a 24×24 viewBox. Applies when a leading/trailing asset is `Icon`. Empty: the heart-empty icon shown in the documentation example.',
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
        transform: (_src, context) => renderStaticCardItem(context.args, customSpriteIcons(context.args.icon), false),
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
    leadingSize: 'Normal',
    leadingStatus: 'None',
    trailingAsset: 'None',
    trailingSize: 'Normal',
    trailingStatus: 'None',
    icon: '',
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
