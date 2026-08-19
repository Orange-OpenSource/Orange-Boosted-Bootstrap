// Playground for Filter chip
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/chips/#filter-chip
//
// A filter chip is a group component: one chip alone renders a `chips-container`
// with a single `<li>`, which is not the DOM anyone writes. The playground
// therefore renders several, and each one carries its own settings — label,
// form, selected, disabled — in the `chips` control.
//
// Three forms, all documented, all real HTML: a checkbox, a radio button, or a
// button with `aria-pressed`. They are not three components: `.chip-filter`
// styles `:has(input:checked)` and `[aria-pressed="true"]` side by side
// (scss/_chips.scss:135). The form is per chip, so a group can mix them — which
// is the fastest way to see that they look identical and behave differently.
//
// Gap — Skeleton: applied on an ancestor, `<div aria-busy="true" inert>`, as the
// documentation example does. It is a state of the group, not of a chip.

const layouts = ['Text only', 'Text + Icon', 'Icon only']
const controls = ['Checkbox', 'Radio', 'Button']

// Three chips, three sets of controls. A single `object` control would have been
// shorter to write, but Storybook renders it as a raw JSON editor: nobody wants
// to type a label into that. Flat controls are what both surfaces can show.
const CHIPS = [1, 2, 3]

// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

// Only a positive integer is allowed for the number of chips.
const toCount = (value) => {
  const parsed = Number.parseInt(value, 10)

  return Number.isNaN(parsed) ? 1 : Math.min(Math.max(1, parsed), 8)
}

// The default group deliberately mixes a selected chip and an unselected one:
// the selected state is the whole point of a filter, and one chip alone shows
// neither the gap between chips nor how the group wraps.
const defaultChips = [
  { label: 'Apple', control: 'Checkbox', selected: true, disabled: false },
  { label: 'Samsung', control: 'Checkbox', selected: false, disabled: false },
  { label: 'Xiaomi', control: 'Checkbox', selected: false, disabled: false }
]

const chipAt = (chips, index) => {
  const chip = Array.isArray(chips) ? chips[index] : undefined
  const fallback = defaultChips[index] ?? { label: `Filter ${index + 1}`, control: 'Checkbox', selected: false, disabled: false }
  const pick = (key) => (chip && chip[key] !== undefined ? chip[key] : fallback[key])

  return {
    label: pick('label'),
    control: orElse(pick('control'), controls),
    selected: Boolean(pick('selected')),
    disabled: Boolean(pick('disabled'))
  }
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


// What the interactive element contains, layout by layout. On a filter chip the
// icon comes *after* the label — the opposite of a suggestion chip.
const layoutLines = {
  'Text only': ({ label }) => [label],
  'Text + Icon': ({ label, icons }) => [label, icons.heartEmpty],
  'Icon only': ({ label, icons }) => [icons.heartEmpty, `<span class="visually-hidden">${label}</span>`]
}

const layoutClasses = {
  'Text only': '',
  'Text + Icon': '',
  'Icon only': 'chip-icon'
}

const inputTypes = {
  'Checkbox': 'checkbox',
  'Radio': 'radio'
}

// A radio button only behaves like one inside a group sharing a `name`.
const inputNames = {
  'Checkbox': '',
  'Radio': ' name="filterChipGroup"'
}

const selectedAttrs = {
  'True': ' checked',
  'False': ''
}

const pressedAttrs = {
  'True': ' aria-pressed="true"',
  'False': ' aria-pressed="false"'
}

const disabledAttrs = {
  'True': ' disabled',
  'False': ''
}

const indent = (lines) => lines.map((line) => `      ${line}`).join('\n')

// One template per form. The three produce the same look and the same states —
// `.chip-filter` styles `:has(input:checked)` and `[aria-pressed="true"]` the
// same way — but not the same semantics: a checkbox is a multiple choice, a
// radio an exclusive one, a button a toggle Bootstrap drives with
// `data-bs-toggle`.
const controlTemplates = {
  'input': ({ id, chip, classes, lines }) =>
    `    <input type="${inputTypes[chip.control]}" id="${id}"${inputNames[chip.control]}${selectedAttrs[(chip.selected ? 'True' : 'False')]}${disabledAttrs[(chip.disabled ? 'True' : 'False')]} />
    <label class="${classes}" for="${id}">
${indent(lines)}
    </label>`,

  'button': ({ chip, classes, lines }) =>
    `    <button class="${classes}" data-bs-toggle="button"${pressedAttrs[(chip.selected ? 'True' : 'False')]} type="button"${disabledAttrs[(chip.disabled ? 'True' : 'False')]}>
${indent(lines)}
    </button>`
}

const controlKinds = {
  'Checkbox': 'input',
  'Radio': 'input',
  'Button': 'button'
}

// The chips, read from the flat controls: one entry per chip up to `count`.
const chipsOf = (args) => CHIPS.slice(0, toCount(args.count)).map((index) => ({
  label: args[`chip${index}Label`],
  control: args[`chip${index}Control`],
  selected: args[`chip${index}Selected`],
  disabled: args[`chip${index}Disabled`]
}))

const renderFilterChip = ({ count, chips, layout, icon, maxWidth }, icons = inlineIcons) => {
  const safeLayout = orElse(layout, layouts)
  const classes = ['chip-interactive', layoutClasses[safeLayout]].filter(Boolean).join(' ')

  const items = Array.from({ length: toCount(count) }, (_, index) => {
    const chip = chipAt(chips, index)
    const lines = layoutLines[safeLayout]({ label: chip.label, icons })

    return `  <li class="chip chip-filter">
${controlTemplates[controlKinds[chip.control]]({ id: `filterChip${index + 1}`, chip, classes, lines })}
  </li>`
  })

  return maxWidthWrapper((`<ul class="chips-container" aria-label="Filter by">
${items.join('\n')}
</ul>`), maxWidth)
}

// `component-max-width` is the design system class, but the stylesheet only
// compounds it with the form components — text input, text area, select input,
// control items. Elsewhere the constraint goes on an ancestor, with the value
// the class carries: 30rem.
const maxWidthWrapper = (markup, maxWidth) => (maxWidth
  ? `<div style="max-width: 30rem">
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`
  : markup)

// Skeleton is carried by an ancestor, `<div aria-busy="true" inert>`, never by
// the component itself: every child of that container renders as a skeleton, and
// `inert` takes it out of the tab order and of the accessibility tree. Same
// markup for every component of the design system.
const skeletonWrapper = (markup, skeleton) => (skeleton
  ? `<div aria-busy="true" inert>
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`
  : markup)

export default {
  title: 'Playground/Filter chip',
  argTypes: {
    count: {
      name: 'Chips',
      control: { type: 'number', min: 1, max: 3, step: 1 },
      description: 'How many chips in the group, from 1 to 3. A filter chip is never alone in a real page: the container, the gap and the wrapping only show from two.',
    },
    chip1Label: {
      name: 'Chip 1 — label',
      control: 'text',
      description: 'Interpolated as is, so HTML goes through — a `<br>` shows how the chip behaves on several lines.',
    },
    chip1Control: {
      name: 'Chip 1 — control',
      control: 'select',
      options: controls,
      description: 'The form of this chip: a checkbox, a radio button sharing the group `name`, or a button with `aria-pressed`. `.chip-filter` styles the three the same way; they do not behave the same.',
    },
    chip1Selected: {
      name: 'Chip 1 — selected',
      control: 'boolean',
    },
    chip1Disabled: {
      name: 'Chip 1 — disabled',
      control: 'boolean',
    },
    chip2Label: {
      name: 'Chip 2 — label',
      control: 'text',
      description: 'Interpolated as is, so HTML goes through — a `<br>` shows how the chip behaves on several lines.',
    },
    chip2Control: {
      name: 'Chip 2 — control',
      control: 'select',
      options: controls,
      description: 'The form of this chip: a checkbox, a radio button sharing the group `name`, or a button with `aria-pressed`. `.chip-filter` styles the three the same way; they do not behave the same.',
    },
    chip2Selected: {
      name: 'Chip 2 — selected',
      control: 'boolean',
    },
    chip2Disabled: {
      name: 'Chip 2 — disabled',
      control: 'boolean',
    },
    chip3Label: {
      name: 'Chip 3 — label',
      control: 'text',
      description: 'Interpolated as is, so HTML goes through — a `<br>` shows how the chip behaves on several lines.',
    },
    chip3Control: {
      name: 'Chip 3 — control',
      control: 'select',
      options: controls,
      description: 'The form of this chip: a checkbox, a radio button sharing the group `name`, or a button with `aria-pressed`. `.chip-filter` styles the three the same way; they do not behave the same.',
    },
    chip3Selected: {
      name: 'Chip 3 — selected',
      control: 'boolean',
    },
    chip3Disabled: {
      name: 'Chip 3 — disabled',
      control: 'boolean',
    },
    layout: {
      control: 'select',
      options: layouts,
      description: 'Shared by every chip. On a filter chip the icon sits after the label; `Icon only` adds `chip-icon` and moves the label into a `visually-hidden` span.',
    },
    icon: {
      control: 'text',
      description: 'A whole `<svg>…</svg>` or an `<img>`, pasted as is, a bare `data:` URL, or only the inside of an SVG (`<path>`, `<g>`…), then wrapped in a 24×24 viewBox. Empty: the design system icon.',
      if: { arg: 'layout', neq: 'Text only' },
    },
    maxWidth: {
      name: 'Max width',
      control: 'boolean',
      description: 'Bounds the component to 30rem, the value of the `component-max-width` class — which the stylesheet reserves for the form components, so here it goes on an ancestor.',
    },
    skeleton: {
      control: 'boolean',
      description: 'Wraps the component in `<div aria-busy="true" inert>`, the way the design system puts a real component in a loading state. Same markup for every component.',
    }
  }
}

export const PlaygroundFilterChip = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { count, layout, icon, maxWidth, skeleton } = context.args

          return skeletonWrapper(renderFilterChip({
            count,
            chips: chipsOf(context.args),
            layout,
            icon,
            maxWidth,
          }, withCustomIcon(spriteIcons, icon)), skeleton)
        },
      },
    },
  },
  render: (args) => {
    const { count, layout, icon, maxWidth, skeleton } = args

    return skeletonWrapper(renderFilterChip({
      count,
      chips: chipsOf(args),
      layout,
      icon,
      maxWidth,
    }, withCustomIcon(inlineIcons, icon)), skeleton)
  },
  args: {
    count: 3,
    chip1Label: 'Apple',
    chip1Control: 'Checkbox',
    chip1Selected: true,
    chip1Disabled: false,
    chip2Label: 'Samsung',
    chip2Control: 'Checkbox',
    chip2Selected: false,
    chip2Disabled: false,
    chip3Label: 'Xiaomi',
    chip3Control: 'Checkbox',
    chip3Selected: false,
    chip3Disabled: false,
    layout: 'Text only',
    icon: '',
    maxWidth: false,
    skeleton: false
  },
}
