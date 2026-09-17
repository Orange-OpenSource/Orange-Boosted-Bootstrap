// Playground for Navigation list item
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/items/
//
// See StaticListItemPlayground for the shared reasoning on the `<ul>`/`<li>`
// shape, the frozen single-item list, and why `Outlined` / `Rounded corners`
// are not offered. See NavigationCardItemPlayground for the shared reasoning
// on `Wrapping link`, `Back chevron`, `External link` / `New window` and the
// derived `.item-slot-focusable`. This file combines both without repeating
// either.

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
  'Slot': () => `<div class="item-trailing-container item-slot item-slot-focusable">
  <button class="btn btn-strong">Slot</button>
</div>`
}

const restrictedForSmall = (asset) => /large|xlarge/i.test(asset) || asset === 'Slot'

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

const externalSuffixes = {
  'True': '<span class="visually-hidden">&nbsp;(external link, new window)</span>',
  'False': ' (external link)'
}

const renderNavigationListItem = ({ overline, label, boldLabel, extraLabel, description, leadingAsset, trailingAsset, helperText, wrappingLink, backChevron, externalLink, newWindow, state, background, noDivider, topAlignment, smallSize, maxWidth }, icons = inlineIcons, preview = true) => {
  const safeLeading = orElse(leadingAsset, assetOptions)
  const safeTrailing = orElse(trailingAsset, trailingAssetOptions)
  const safeState = orElse(state, states)
  const safeBackground = orElse(background, backgrounds)

  const backgroundClasses = {
    'Default': '',
    'With background': 'item-bg',
    'No background': 'item-no-bg'
  }

  const listClasses = ['item-list', maxWidth ? 'component-max-width' : ''].filter(Boolean).join(' ')

  const liClasses = [
    'item',
    'item-navigation',
    backChevron ? 'item-previous' : '',
    externalLink ? 'item-external' : '',
    smallSize ? 'item-small' : '',
    topAlignment ? 'item-top' : '',
    noDivider ? 'item-no-divider' : '',
    backgroundClasses[safeBackground]
  ].filter(Boolean).join(' ')

  const helperId = helperText ? 'item-helper-1' : ''

  const externalAttrs = externalLink && newWindow ? ' target="_blank" rel="noopener"' : ''
  const externalSuffix = externalLink ? externalSuffixes[newWindow ? 'True' : 'False'] : ''

  const labelMarkup = wrappingLink
    ? `<span class="item-label${boldLabel ? ' fw-bold' : ''}">${label}</span>`
    : `<a href="#"${externalAttrs} class="item-label item-interactive"${boldLabel ? ' style="font-weight: bold"' : ''}${helperId ? ` aria-describedby="${helperId}"` : ''}>${label}${externalSuffix}</a>`

  const textContainer = `<div class="item-text-container">
${block([
    !smallSize && overline ? `<span class="item-overline">${overline}</span>` : '',
    labelMarkup,
    !smallSize && extraLabel ? `<span class="item-extra-label">${extraLabel}</span>` : '',
    description ? `<span class="item-description">${description}</span>` : ''
  ], '  ')}
</div>`

  const itemContent = `<div class="item-content">
${block([
    leadingTemplates[safeLeading](icons),
    textContainer,
    trailingTemplates[safeTrailing](icons)
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

  const li = `<li class="${liClasses}">
${block([itemContainer, helper], '  ')}
</li>`

  const list = `<ul class="${listClasses}">
${indent(li, '  ')}
</ul>`

  const warning = smallSizeWarning(smallSize, safeLeading, safeTrailing, overline, extraLabel)
  return disabledWrapper(skeletonWrapper(warned(list, warning, preview), safeState === 'Skeleton'), safeState === 'Disabled')
}

export default {
  title: 'Playground/Navigation list item',
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
      description: '`Slot` adds `.item-slot-focusable` automatically, since a navigation item needs its slot to stay reachable by keyboard.',
    },
    trailingAsset: {
      name: 'Trailing asset',
      control: 'select',
      options: trailingAssetOptions,
      description: '`Slot` adds `.item-slot-focusable` automatically, for the same reason as the leading asset.',
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
      description: '`Disabled` wraps the `<ul>` in `[aria-disabled="true"]`; `Skeleton` in `aria-busy="true" inert`.',
    },
    background: {
      name: 'Background',
      control: 'select',
      options: backgrounds,
      description: 'List items paint no background by default, unlike card items; `With background` / `No background` add `.item-bg` / `.item-no-bg`.',
    },
    noDivider: {
      name: 'No divider',
      control: 'boolean',
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
      description: '`.component-max-width` on the `<ul class="item-list">`.',
    }
  }
}

export const PlaygroundNavigationListItem = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => renderNavigationListItem(context.args, spriteIcons, false),
      },
    },
  },
  render: (args) => renderNavigationListItem(args),
  args: {
    overline: 'Overline',
    label: 'Label',
    boldLabel: false,
    extraLabel: 'Extra label',
    description: 'Description',
    leadingAsset: 'Icon',
    trailingAsset: 'None',
    helperText: '',
    wrappingLink: false,
    backChevron: false,
    externalLink: false,
    newWindow: true,
    state: 'Default',
    background: 'Default',
    noDivider: false,
    topAlignment: false,
    smallSize: false,
    maxWidth: false
  },
}
