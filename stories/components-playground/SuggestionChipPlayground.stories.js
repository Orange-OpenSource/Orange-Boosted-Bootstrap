// Playground for Suggestion chip
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/chips/#suggestion-chip
//
// A suggestion chip is a group component: the documentation never shows one on
// its own, and a `chips-container` with a single `<li>` is not the DOM anyone
// writes. The playground therefore renders several, each with its own label and
// its own disabled state.
//
// Unlike a filter chip, a suggestion chip is always a `<button>`: it triggers an
// answer, it does not hold a selection. Hence no form control here — and the
// icon sits *before* the label, the opposite of a filter chip.
//
// Gap — Skeleton: applied on an ancestor, `<div aria-busy="true" inert>`, as the
// documentation example does. It is a state of the group, not of a chip.

const layouts = ['Text only', 'Text + icon', 'Icon only']
const states = ['Enabled', 'Skeleton']

// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

// Only a positive integer is allowed for the number of chips.
const toCount = (value) => {
  const parsed = Number.parseInt(value, 10)

  return Number.isNaN(parsed) ? 1 : Math.min(Math.max(1, parsed), 8)
}

// The labels of the documentation example. They are answers, not nouns: a
// suggestion chip carries a whole sentence, which is exactly what makes the
// component wrap — and worth seeing.
const defaultChips = [
  { label: 'Thanks.', disabled: false },
  { label: 'Looks good to me.', disabled: false },
  { label: 'Can we talk about it later ?', disabled: false }
]

const chipAt = (chips, index) => {
  const chip = Array.isArray(chips) ? chips[index] : undefined
  const fallback = defaultChips[index] ?? { label: `Suggestion ${index + 1}`, disabled: false }
  const pick = (key) => (chip && chip[key] !== undefined ? chip[key] : fallback[key])

  return { label: pick('label'), disabled: Boolean(pick('disabled')) }
}

// The canvas inlines the icons: they show up without depending on the hosted
// sprite. The Code panel shows the sprite reference instead, which is what one
// writes in a real page.
//
// Left empty, the path below is used: it is the `heart-empty` symbol of the OUDS
// sprite, drawn in a 24×24 viewBox.
const defaultIconPath = '<path d="M18.4 11.242 12 18.247l-6.4-7.005-.003-.004a3.285 3.285 0 0 1 .247-4.678 3.383 3.383 0 0 1 4.625.128l.979.92.552.525.552-.525.98-.92.009-.01a3.352 3.352 0 0 1 2.37-.97c1.852 0 3.354 1.483 3.354 3.313a3.29 3.29 0 0 1-.862 2.217l-.003.004Zm1.463-6.125A5.635 5.635 0 0 0 12 5.08c-2.185-2.118-5.694-2.105-7.863.038a5.475 5.475 0 0 0-.105 7.702L12 21.5l7.968-8.68a5.475 5.475 0 0 0-.105-7.703Z"/>'

// The `icon` control accepts either a whole `<svg>…</svg>` — paste one straight
// from the sprite, from Figma or from an export — or only its inside (a
// `<path>`, a `<g>`…), which is then wrapped in a 24×24 viewBox. A pasted
// element keeps its own viewBox, so it is drawn at the right scale whatever its
// coordinate system; its `width` and `height` attributes are dropped so the
// stylesheet goes on sizing the icon like any other.
const iconClass = ''

const setAttr = (attrs, name, value) => {
  const re = new RegExp(`\\s${name}="[^"]*"`, 'i')

  return re.test(attrs) ? attrs.replace(re, ` ${name}="${value}"`) : `${attrs} ${name}="${value}"`
}

// The class the component needs, merged into whatever the pasted element carries.
const withIconClass = (attrs) => {
  const existing = /\sclass="([^"]*)"/i.exec(attrs)
  const classes = existing ? existing[1].split(/\s+/).filter(Boolean) : []
  const merged = classes.includes(iconClass) ? classes : [iconClass, ...classes]

  return setAttr(attrs, 'class', merged.join(' '))
}

// Nothing pasted, or only the inside of an SVG: it goes in a 24×24 wrapper.
const wrapIcon = (icon) =>
  `<svg${iconClass ? ` class="${iconClass}"` : ''} aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">${icon}</svg>`

// A whole element: its own opening tag is kept, minus the sizing attributes.
// Some exports carry only `width` and `height`, no `viewBox`. Stripping the two
// would leave the drawing without a coordinate system: it would be scaled from
// the default 300×150 user space and disappear. The viewBox is therefore
// derived from them first — this is what made a pasted icon vanish.
const sizeOf = (attrs, name) => (new RegExp(`\\s${name}="([\\d.]+)`, 'i').exec(attrs) ?? [])[1]

const withViewBox = (attrs) => {
  const width = sizeOf(attrs, 'width')
  const height = sizeOf(attrs, 'height')

  return /\sviewBox="/i.test(attrs) || !width || !height
    ? attrs
    : `${attrs} viewBox="0 0 ${width} ${height}"`
}

const keepIcon = (icon, opening) => {
  const sized = setAttr(withViewBox(opening[1]).replace(/\s(?:width|height)="[^"]*"/gi, ''), 'aria-hidden', 'true')
  const attrs = iconClass ? withIconClass(sized) : sized

  return icon.replace(/^\s*<svg[^>]*>/i, `<svg${attrs}>`).trim()
}

// An `<img>` is as legitimate as an SVG — the stylesheet sizes `svg, img, .icon`
// alike — so a pasted image is kept as an image rather than wrapped in an
// `<svg>`, where it would not render. Its sizing attributes go, like an SVG's.
const keepImage = (icon, opening) => {
  const sized = setAttr(opening[1].replace(/\s(?:width|height)="[^"]*"/gi, ''), 'aria-hidden', 'true')
  const attrs = setAttr(iconClass ? withIconClass(sized) : sized, 'alt', '')

  return icon.replace(/^\s*<img[^>]*>/i, `<img${attrs}>`).trim()
}

// A bare URL — a `data:` one above all, which is how an encoded image is pasted —
// becomes the `src` of an image. A `data:image/svg+xml` URL copied from an editor
// carries double quotes and spaces: left as they are, the first quote would close
// the attribute and the image would be broken. They are percent-encoded.
const urlImage = (icon) => {
  const src = icon.trim().replace(/"/g, '%22').replace(/\s/g, '%20')

  return `<img${iconClass ? ` class="${iconClass}"` : ''} src="${src}" alt="" aria-hidden="true">`
}

// What was pasted, read from what it starts with. Anything unrecognised is the
// inside of an SVG — a `<path>`, a `<g>` — and goes in a 24×24 wrapper.
const pastedKinds = {
  'svg': keepIcon,
  'img': keepImage,
  'url': urlImage,
  'inside': wrapIcon
}

const kindOf = (icon) => [
  { kind: 'svg', when: /^\s*<svg[\s>]/i.test(icon) },
  { kind: 'img', when: /^\s*<img[\s>]/i.test(icon) },
  // A `data:` URL copied from an editor often carries spaces — an inline SVG one
  // always does — so the test is on what the value *starts* with, not on its
  // whole shape.
  { kind: 'url', when: /^\s*(?:data:|https?:\/\/|\/|\.{1,2}\/)/i.test(String(icon)) }
].filter((entry) => entry.when).map((entry) => entry.kind)[0] ?? 'inside'

const inlineIcon = (icon) => {
  const kind = kindOf(icon)
  const opening = new RegExp(`^\\s*<${kind}([^>]*)>`, 'i').exec(icon)

  return pastedKinds[kind](icon, opening)
}

const inlineIcons = {
  heartEmpty: inlineIcon(defaultIconPath)
}

const spriteIcons = {
  heartEmpty: '<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"/></svg>'
}

// A path typed in the `icon` control replaces the sprite reference on both
// sides: the Code panel would otherwise lie about what the canvas renders.
const withCustomIcon = (icons, icon) => (icon ? { heartEmpty: inlineIcon(icon) } : icons)

// What the button contains, layout by layout. On a suggestion chip the icon
// comes *before* the label.
const layoutLines = {
  'Text only': ({ label }) => [label],
  'Text + icon': ({ label, icons }) => [icons.heartEmpty, label],
  'Icon only': ({ label, icons }) => [icons.heartEmpty, `<span class="visually-hidden">${label}</span>`]
}

const layoutClasses = {
  'Text only': '',
  'Text + icon': '',
  'Icon only': 'chip-icon'
}

const disabledAttrs = {
  'True': ' disabled',
  'False': ''
}

// Skeleton is carried by an ancestor, so it wraps the whole group.
const stateWrappers = {
  'Enabled': (markup) => markup,
  'Skeleton': (markup) => `<div aria-busy="true" inert>
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`
}

// An optional width constraint, carried by an ancestor: that is how a page
// bounds a component the design system leaves full width. `component-max-width`
// exists too, but the stylesheet reserves it for the form components — text
// input, text area, select input, and the control items. Empty: no wrapper at
// all, the markup is unchanged.
const maxWidthWrapper = (markup, maxWidth) => (String(maxWidth ?? '').trim()
  ? `<div style="max-width: ${maxWidth}">
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`
  : markup)

const renderSuggestionChip = ({ count, chips, layout, state, icon, maxWidth }, icons = inlineIcons) => {
  const safeLayout = orElse(layout, layouts)
  const classes = ['chip-interactive', layoutClasses[safeLayout]].filter(Boolean).join(' ')

  const items = Array.from({ length: toCount(count) }, (_, index) => {
    const chip = chipAt(chips, index)
    const lines = layoutLines[safeLayout]({ label: chip.label, icons })

    return `  <li class="chip chip-suggestion">
    <button class="${classes}" type="button"${disabledAttrs[(chip.disabled ? 'True' : 'False')]}>
${lines.map((line) => `      ${line}`).join('\n')}
    </button>
  </li>`
  })

  return maxWidthWrapper(stateWrappers[orElse(state, states)](`<ul class="chips-container" aria-label="Answer with">
${items.join('\n')}
</ul>`), maxWidth)
}

export default {
  title: 'Playground/Suggestion chip',
  argTypes: {
    count: {
      name: 'Chips',
      control: { type: 'number', min: 1, max: 8, step: 1 },
      description: 'How many chips in the group. A suggestion chip is never alone in a real page: the container, the gap and the wrapping only show from two.',
    },
    chips: {
      name: 'Chips detail',
      control: 'object',
      description: 'One entry per chip: `label` and `disabled`. The label is interpolated as is, so HTML goes through — paste `Line 1<br>Line 2`, or a long sentence, to see how the chip behaves on several lines. Entries left out fall back on the documentation labels.',
    },
    layout: {
      control: 'select',
      options: layouts,
      description: 'Shared by every chip. On a suggestion chip the icon sits before the label; `Icon only` adds `chip-icon` and moves the label into a `visually-hidden` span.',
    },
    state: {
      control: 'select',
      options: states,
      description: '`Skeleton` wraps the group in `<div aria-busy="true" inert>`, which is how the design system puts real components in a loading state. A single chip is disabled through its own entry above.',
    },
    icon: {
      control: 'text',
      description: 'A whole `<svg>…</svg>` or an `<img>`, pasted as is, a bare `data:` URL, or only the inside of an SVG (`<path>`, `<g>`…), then wrapped in a 24×24 viewBox. Empty: the design system icon.',
      if: { arg: 'layout', neq: 'Text only' },
    },
    maxWidth: {
      name: 'Max width',
      control: 'text',
      description: 'Any CSS length — `24rem`, `320px`. Wraps the component in an ancestor carrying the constraint, which is how a page bounds it. `component-max-width` exists in the stylesheet but is reserved for the form components. Empty: no wrapper.',
    }
  }
}

export const PlaygroundSuggestionChip = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { count, chips, layout, state, icon, maxWidth } = context.args

          return renderSuggestionChip({
            count,
            chips,
            layout,
            state,
            icon,
            maxWidth,
          }, withCustomIcon(spriteIcons, icon))
        },
      },
    },
  },
  render: ({ count, chips, layout, state, icon, maxWidth }) => {
    return renderSuggestionChip({
      count,
      chips,
      layout,
      state,
      icon,
      maxWidth,
    }, withCustomIcon(inlineIcons, icon))
  },
  args: {
    count: 3,
    chips: defaultChips,
    layout: 'Text only',
    state: 'Enabled',
    icon: '',
    maxWidth: ''
  },
}
