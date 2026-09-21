// Playground for Navigation card item
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.5/components/items/
//
// See StaticCardItemPlayground for the shared reasoning on the leading/trailing
// asset table, the small-item warning, the `State` select and the rounded
// corners wrapper — it is not repeated here. This file only comments what a
// navigation item adds.
//
// No `mapping.yml` was available in this workspace, so this is a preview/story
// pair only (artifacts 1–2). Code Connect and the Figma plugin (3–4) are
// blocked on the kit.
//
// WRAPPING LINK IS A BOOLEAN, NOT A SEPARATE COMPONENT. By default the `<a>`
// sits only on the label (`.item-label.item-interactive`); the docs also show
// the whole `.item-container` wrapped in the `<a>` instead
// (`#wrapping-link`) — same content, one element moved. `Wrapping link` swaps
// between the two templates; the label itself is never a link when it is on.
//
// BACK CHEVRON AND EXTERNAL LINK ARE MUTUALLY MEANINGFUL BUT NOT EXCLUSIVE IN
// THE MARKUP — the stylesheet lets `.item-previous` and `.item-external` sit
// together, so both stay independent checkboxes rather than one select; a
// forbidden-combination warning is not needed because none is documented.
//
// EXTERNAL LINK'S HIDDEN TEXT IS DERIVED, NOT TYPED. The docs show two forms —
// `target="_blank" rel="noopener"` with a `visually-hidden` "(external link,
// new window)", or neither attribute with a visible "(external link)" suffix.
// `New window` (gated on `External link`) switches between the two documented
// forms; the wording itself is a constant (conventions.md §16).
//
// FOCUSABLE SLOT IS DERIVED FROM THE ASSET CHOICE, NOT A CONTROL. The docs ask
// for `.item-slot-focusable` whenever a slot must stay interactive inside a
// navigation item; since a slot is already one value of `Leading asset` /
// `Trailing asset`, a separate checkbox would be a second way to say the same
// thing, so the class is added automatically whenever either asset is `Slot`.

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

// `Icon` only ever draws `Normal`/`Large` (1.5 docs: "Icons can be sized with
// `item-leading-large`"); `Image` also draws `XLarge rounded`. Separate option
// lists per family, so neither control can reach a combination the other
// family's controls exist for.
const iconSizeOptions = ['Normal', 'Large']
const imageSizeOptions = ['Normal', 'Large', 'XLarge rounded']
const statusOptions = ['None', 'Positive', 'Warning', 'Info', 'Negative']

const states = ['Default', 'Disabled', 'Skeleton']
const backgrounds = ['Default', 'With background', 'No background']

const orElse = (value, options) => (options.includes(value) ? value : options[0])

const indent = (markup, pad) => markup.split('\n').map((line) => (line ? `${pad}${line}` : line)).join('\n')

const block = (parts, pad) => parts.filter(Boolean).map((part) => indent(part, pad)).join('\n')

const inlineHeartPath = '<path d="M18.4 11.242 12 18.247l-6.4-7.005-.003-.004a3.285 3.285 0 0 1 .247-4.678 3.383 3.383 0 0 1 4.625.128l.979.92.552.525.552-.525.98-.92.009-.01a3.352 3.352 0 0 1 2.37-.97c1.852 0 3.354 1.483 3.354 3.313a3.29 3.29 0 0 1-.862 2.217l-.003.004Zm1.463-6.125A5.635 5.635 0 0 0 12 5.08c-2.185-2.118-5.694-2.105-7.863.038a5.475 5.475 0 0 0-.105 7.702L12 21.5l7.968-8.68a5.475 5.475 0 0 0-.105-7.703Z"/>'

const inlineIcons = { heartEmpty: `<svg class="w-100 h-100" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">${inlineHeartPath}</svg>` }
const spriteIcons = { heartEmpty: '<svg class="w-100 h-100" aria-hidden="true"><use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"/></svg>' }

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
    : `<div class="item-leading-container${leadingSizeClasses[size]}">
  ${icons.heartEmpty}
</div>`),
  'Image': (icons, size) => `<div class="item-leading-container${leadingSizeClasses[size]}">
  <img alt="" src="https://placecats.com/500/500" class="w-100 h-100 object-fit-cover">
</div>`,
  'Slot': () => `<div class="item-leading-container item-slot item-slot-focusable">
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
    : `<div class="item-trailing-container${trailingSizeClasses[size]}">
  ${icons.heartEmpty}
</div>`),
  'Image': (icons, size) => `<div class="item-trailing-container${trailingSizeClasses[size]}">
  <img alt="" src="https://placecats.com/500/500" class="w-100 h-100 object-fit-cover">
</div>`,
  'Slot': () => `<div class="item-trailing-container item-slot item-slot-focusable">
  <button class="btn btn-strong">Slot</button>
</div>`
}

const restrictedForSmall = (asset, size) => asset === 'Slot' || ((asset === 'Icon' || asset === 'Image') && size !== 'Normal')

// A status icon is always normal size, whatever icon size control holds.
const effectiveSize = (asset, size, status) => (asset === 'Icon' && status !== 'None' ? 'Normal' : size)

// Picks the size control that applies to the chosen family — `Icon` and
// `Image` each have their own, never shared (see StaticCardItemPlayground).
const sizeFor = (asset, iconSize, imageSize) => (asset === 'Icon' ? iconSize : imageSize)

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

const skeletonWrapper = (markup, skeleton) => (skeleton
  ? `<div aria-busy="true" inert>
${indent(markup, '  ')}
</div>`
  : markup)

const disabledWrapper = (markup, disabled) => (disabled
  ? `<div aria-disabled="true">
${indent(markup, '  ')}
</div>`
  : markup)

const roundedCornersWrapper = (markup, rounded) => (rounded
  ? `<div class="use-rounded-corner-items">
${indent(markup, '  ')}
</div>`
  : markup)

// The visible suffix / hidden suffix pair the docs show for an external link —
// the wording is fixed, only which form applies is a control (`New window`).
const externalSuffixes = {
  'True': '<span class="visually-hidden">&nbsp;(external link, new window)</span>',
  'False': ' (external link)'
}

const renderNavigationCardItem = ({ overline, label, boldLabel, extraLabel, description, leadingAsset, leadingIconSize, leadingIconStatus, leadingImageSize, trailingAsset, trailingIconSize, trailingIconStatus, trailingImageSize, helperText, wrappingLink, backChevron, externalLink, newWindow, state, background, noDivider, outlined, roundedCorners, topAlignment, smallSize, maxWidth, icon }, icons = customIcons(icon), preview = true) => {
  const safeLeading = orElse(leadingAsset, assetOptions)
  const safeLeadingIconSize = orElse(leadingIconSize, iconSizeOptions)
  const safeLeadingIconStatus = orElse(leadingIconStatus, statusOptions)
  const safeLeadingImageSize = orElse(leadingImageSize, imageSizeOptions)
  const safeTrailing = orElse(trailingAsset, trailingAssetOptions)
  const safeTrailingIconSize = orElse(trailingIconSize, iconSizeOptions)
  const safeTrailingIconStatus = orElse(trailingIconStatus, statusOptions)
  const safeTrailingImageSize = orElse(trailingImageSize, imageSizeOptions)
  const safeState = orElse(state, states)
  const safeBackground = orElse(background, backgrounds)

  const backgroundClasses = {
    'Default': '',
    'With background': 'item-bg',
    'No background': 'item-no-bg'
  }

  const itemClasses = [
    'item',
    'item-navigation',
    backChevron ? 'item-previous' : '',
    externalLink ? 'item-external' : '',
    smallSize ? 'item-small' : '',
    topAlignment ? 'item-top' : '',
    outlined ? 'item-outlined' : '',
    noDivider ? 'item-no-divider' : '',
    backgroundClasses[safeBackground],
    maxWidth ? 'component-max-width' : ''
  ].filter(Boolean).join(' ')

  const helperId = helperText ? 'item-helper-1' : ''

  const externalAttrs = externalLink && newWindow ? ' target="_blank" rel="noopener"' : ''
  const externalSuffix = externalLink ? externalSuffixes[newWindow ? 'True' : 'False'] : ''

  const labelMarkup = wrappingLink
    ? `<p class="item-label${boldLabel ? ' fw-bold' : ''}">${label}</p>`
    : `<a href="#"${externalAttrs} class="item-label item-interactive"${boldLabel ? ' style="font-weight: bold"' : ''}${helperId ? ` aria-describedby="${helperId}"` : ''}>${label}${externalSuffix}</a>`

  const textContainer = `<div class="item-text-container">
${block([
    !smallSize && overline ? `<p class="item-overline">${overline}</p>` : '',
    labelMarkup,
    !smallSize && extraLabel ? `<p class="item-extra-label">${extraLabel}</p>` : '',
    description ? `<p class="item-description">${description}</p>` : ''
  ], '  ')}
</div>`

  const itemContent = `<div class="item-content">
${block([
    leadingTemplates[safeLeading](icons, sizeFor(safeLeading, safeLeadingIconSize, safeLeadingImageSize), safeLeadingIconStatus),
    textContainer,
    trailingTemplates[safeTrailing](icons, sizeFor(safeTrailing, safeTrailingIconSize, safeTrailingImageSize), safeTrailingIconStatus)
  ], '  ')}
</div>`

  const itemContainer = wrappingLink
    ? `<a href="#"${externalAttrs} class="item-container item-interactive"${helperId ? ` aria-describedby="${helperId}"` : ''}>
${indent(itemContent, '  ')}${externalSuffix ? `\n  ${externalSuffix}` : ''}
</a>`
    : `<div class="item-container">
${indent(itemContent, '  ')}
</div>`

  const helper = helperText ? `<p class="item-helper" id="${helperId}">${helperText}</p>` : ''

  const item = `<div class="${itemClasses}">
${block([itemContainer, helper], '  ')}
</div>`

  const leadingSize = sizeFor(safeLeading, safeLeadingIconSize, safeLeadingImageSize)
  const trailingSize = sizeFor(safeTrailing, safeTrailingIconSize, safeTrailingImageSize)
  const warning = smallSizeWarning(smallSize, safeLeading, effectiveSize(safeLeading, leadingSize, safeLeadingIconStatus), safeTrailing, effectiveSize(safeTrailing, trailingSize, safeTrailingIconStatus), overline, extraLabel)
  const withState = disabledWrapper(skeletonWrapper(warned(item, warning, preview), safeState === 'Skeleton'), safeState === 'Disabled')

  return roundedCornersWrapper(withState, roundedCorners)
}

export default {
  title: 'Playground/Navigation card item',
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
      description: '`Slot` adds `.item-slot-focusable` automatically, since a navigation item needs its slot to stay reachable by keyboard. `Leading icon size`/`Leading icon status` and `Leading image size` below refine `Icon`/`Image` and only show up for the matching family.',
    },
    leadingIconSize: {
      name: 'Leading icon size',
      control: 'select',
      options: iconSizeOptions,
      if: { arg: 'leadingAsset', eq: 'Icon' },
      description: '`item-leading-large` — an icon never draws `XLarge rounded`. Hidden once `Leading icon status` recolors it, since a status icon is always normal size.',
    },
    leadingIconStatus: {
      name: 'Leading icon status',
      control: 'select',
      options: statusOptions,
      if: { arg: 'leadingAsset', eq: 'Icon' },
      description: 'Recolors the leading icon into a status icon (`.item-status-*`) and overrides `Leading icon size`.',
    },
    trailingAsset: {
      name: 'Trailing asset',
      control: 'select',
      options: trailingAssetOptions,
      description: '`Slot` adds `.item-slot-focusable` automatically, for the same reason as the leading asset.',
    },
    trailingIconSize: {
      name: 'Trailing icon size',
      control: 'select',
      options: iconSizeOptions,
      if: { arg: 'trailingAsset', eq: 'Icon' },
      description: '`item-trailing-large` — an icon never draws `XLarge rounded`. Hidden once `Trailing icon status` recolors it, since a status icon is always normal size.',
    },
    trailingIconStatus: {
      name: 'Trailing icon status',
      control: 'select',
      options: statusOptions,
      if: { arg: 'trailingAsset', eq: 'Icon' },
      description: 'Recolors the trailing icon into a status icon (`.item-status-*`) and overrides `Trailing icon size`.',
    },
    icon: {
      name: 'Icon content',
      control: 'text',
      description: 'A whole `<svg>…</svg>` or an `<img>`, pasted as is, a bare `data:` URL, or only the inside of an SVG (`<path>`, `<g>`…), then wrapped in a 24×24 viewBox. Applies when a leading/trailing asset is `Icon`. Empty: the heart-empty icon shown in the documentation example.',
    },
    helperText: {
      name: 'Helper text',
      control: 'text',
      description: 'Referenced with `[aria-describedby]` on the interactive element, per the documentation.',
    },
    wrappingLink: {
      name: 'Wrapping link',
      control: 'boolean',
      description: 'Moves the `<a>` from the label to the whole `.item-container`. Avoid combining with an interactive slot: nested interactive elements are invalid HTML.',
    },
    backChevron: {
      name: 'Back chevron',
      control: 'boolean',
      description: '`.item-previous` — a back-navigation chevron at the start of the item.',
    },
    externalLink: {
      name: 'External link',
      control: 'boolean',
      description: '`.item-external` — an external-link icon at the end of the item.',
    },
    newWindow: {
      name: 'New window',
      control: 'boolean',
      description: 'The two documented forms: `target="_blank" rel="noopener"` with a `visually-hidden` suffix, or neither attribute with a visible suffix.',
      if: { arg: 'externalLink', truthy: true },
    },
    state: {
      name: 'State',
      control: 'select',
      options: states,
      description: '`Disabled` wraps the item in `[aria-disabled="true"]`; `Skeleton` in `aria-busy="true" inert`.',
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
    },
    outlined: {
      name: 'Outlined',
      control: 'boolean',
      description: 'The docs restrict this variant to card items — it is not offered on the list item stories.',
    },
    roundedCorners: {
      name: 'Rounded corners',
      control: 'boolean',
      description: '`.use-rounded-corner-items` on an ancestor — a project-wide setting, Orange and Orange compact only.',
    },
    topAlignment: {
      name: 'Top alignment',
      control: 'boolean',
    },
    smallSize: {
      name: 'Small size',
      control: 'boolean',
      description: 'Forbids sized leading/trailing assets, slots, overline and extra label — see the warning if any is still set.',
    },
    maxWidth: {
      name: 'Max width',
      control: 'boolean',
      description: '`.component-max-width`, directly on the item.',
    }
  }
}

export const PlaygroundNavigationCardItem = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => renderNavigationCardItem(context.args, customSpriteIcons(context.args.icon), false),
      },
    },
  },
  render: (args) => renderNavigationCardItem(args),
  args: {
    overline: 'Overline',
    label: 'Label',
    boldLabel: false,
    extraLabel: 'Extra label',
    description: 'Description',
    leadingAsset: 'Icon',
    leadingIconSize: 'Normal',
    leadingIconStatus: 'None',
    leadingImageSize: 'Normal',
    trailingAsset: 'None',
    trailingIconSize: 'Normal',
    trailingIconStatus: 'None',
    trailingImageSize: 'Normal',
    icon: '',
    helperText: '',
    wrappingLink: false,
    backChevron: false,
    externalLink: false,
    newWindow: true,
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
