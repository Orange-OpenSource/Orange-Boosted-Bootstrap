// Playground for Radio button item
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/radio-button/
//
// A radio button is a group component by nature: one alone cannot be unselected,
// and the `name` attribute is what makes the exclusive choice. The playground
// therefore renders a `<fieldset class="control-items-list">` with several
// items, each carrying its own label, extra label and description —
// same idea as the levels of the Breadcrumb.
//
// Fix — Read only: it is not an attribute, it is another DOM. The documentation
// swaps the `<input>` for a `<span role="radio" aria-readonly="true"
// aria-disabled="true" tabindex="0" aria-checked="…">`, the `<label>` for a
// `<p>`, and wraps the items in `<div role="radiogroup" aria-readonly="true">`.
// That last wrapper is what was missing: without it a read only group announces
// nothing about being read only.
//
// Required is carried by the `<legend>`, not by each label: the choice is
// mandatory, not one of the options. `_labels.scss:19` draws the asterisk.
//
// The error message lives inside the `fieldset`, after the items, and
// `_control-item.scss:15` hides it until the fieldset `:has()` an invalid input.
//
// THE GROUP IS FROZEN AT TWO OPTIONS, and no option carries a `Selected`
// control.
//
// The count used to be a number from 1 to 8, with each option's controls gated
// on `if: { arg: 'count', gte: N }`. That gate does not work — Storybook's `if`
// understands `eq`, `neq`, `truthy` and `exists`, and a `gte` falls back
// silently on a truthiness test, so the controls of options the group was not
// rendering stayed on screen looking inert. Two options is also the whole
// point: an exclusive choice does not exist below two, and a third one adds an
// identical `<div class="radio-button-item">`.
//
// `Selected` is gone for a different reason: the canvas holds two real radio
// inputs sharing one `name`. Clicking one is the exclusive choice itself, and
// it is a better demonstration than a checkbox in the panel. The snippet shows
// the initial markup, which the documentation writes with the first option
// checked.

const states = ['Enabled', 'Read only', 'Disabled']

// `Skeleton` is one of the states, not a checkbox beside them. It is a wrapper
// in the markup — `<div aria-busy="true" inert>` around the component rendered
// in its first state — but in the Controls panel it answers the same question
// as the others: what does this look like right now. Two controls for one
// question is what makes a panel read as two components glued together.
const stateOptions = [...states, 'Skeleton']

const isSkeleton = (state) => state === 'Skeleton'

const baseState = (state) => (isSkeleton(state) ? states[0] : state)


// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

// The two options of the group, and their controls. Flat `option{N}{Property}`
// args rather than one `object` control: Storybook renders an object as a raw
// JSON editor, which is not a thing anyone wants to type a label into.
const OPTIONS = [1, 2]

// The documentation's example starts with the first option checked: an
// exclusive choice that starts empty is a legitimate state, but it hides what
// the selected indicator looks like. This is initial markup, not a control —
// the canvas is two real radios and clicking is how you move the selection.
const selectedIndex = 0

const defaultItems = [
  { label: 'Option 1', extraLabel: 'Extra label', description: 'Description text' },
  { label: 'Option 2', extraLabel: '', description: 'Description text' }
]

const itemsOf = (args) => OPTIONS.map((index) => ({
  label: args[`option${index}Label`],
  extraLabel: args[`option${index}ExtraLabel`],
  description: args[`option${index}Description`]
}))

const itemAt = (items, index) => {
  const item = Array.isArray(items) ? items[index] : undefined
  const fallback = defaultItems[index] ?? { label: `Option ${index + 1}`, extraLabel: '', description: '' }
  const pick = (key) => (item && item[key] !== undefined ? item[key] : fallback[key])

  return {
    label: pick('label'),
    extraLabel: pick('extraLabel'),
    description: pick('description'),
    selected: index === selectedIndex
  }
}

const errorMap = {
  'False': '',
  'True': ' aria-invalid="true"'
}

const requiredMap = {
  'False': '',
  'True': ' required'
}

// Enabled and Disabled are an `<input>`; Read only is a `<span>` carrying the
// ARIA role. Everything that differs between the two shapes is in these tables.
const shapes = {
  'Enabled': 'input',
  'Read only': 'readonly',
  'Disabled': 'input'
}

const stateAttrs = {
  'Enabled': '',
  'Read only': '',
  'Disabled': ' disabled'
}

const indicators = {
  'input': ({ id, attrs }) =>
    `<input class="control-item-indicator" type="radio" value="" id="${id}" name="radioGroup"${attrs} />`,

  'readonly': ({ id, checked }) =>
    `<span class="control-item-indicator" role="radio" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="${checked}" aria-labelledby="${id}Label"></span>`
}

const labelElements = {
  'input': ({ id, classes, label }) => `<label class="${classes}" for="${id}">${label}</label>`,
  'readonly': ({ id, classes, label }) => `<p class="${classes}" id="${id}Label">${label}</p>`
}

// A read only group carries the role and the ARIA attribute; any other state
// leaves the items where they are.
const groupWrappers = {
  'input': (markup) => markup,
  'readonly': (markup) => `  <div role="radiogroup" aria-readonly="true">
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
  </div>`
}

// Icon — the mapping froze the Figma `Icon` property for lack of an HTML
// counterpart. The docs put it in a second `.control-item-assets-container`,
// placed after the text container.
//
// The canvas inlines the path so the icon always shows; the Code panel shows the
// sprite reference, which is what one writes in a real page.
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

const spriteIcon = '<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"/></svg>'

// A path typed in the `icon` control replaces the sprite reference on both
// sides: the Code panel would otherwise lie about what the canvas renders.
const resolveIcon = (icon, fallback) => (icon ? inlineIcon(icon) : fallback)

// An optional part is a list: empty, nothing is rendered; filled, one line.
const maybe = (value) => (value ? [value] : [])

const renderItem = ({ item, index, shape, state, itemClasses, error, required, errorMessage, showIcon, iconMarkup }) => {
  const id = `radioItem${index + 1}`

  // The description comes first, then the extra label, then the error message:
  // the order the documentation writes, and the order they are announced. The
  // message is in the DOM whatever the state, but only announced when invalid.
  const describedBy = [
    item.description ? `${id}Description` : '',
    item.extraLabel ? `${id}ExtraLabel` : '',
    error && errorMessage ? 'radioItemErrorText' : ''
  ].filter(Boolean).join(' ')

  const attrs = [
    item.selected ? ' checked' : '',
    errorMap[(error ? 'True' : 'False')],
    requiredMap[(required ? 'True' : 'False')],
    describedBy ? ` aria-describedby="${describedBy}"` : '',
    stateAttrs[state]
  ].join('')

  const textLines = [
    labelElements[shape]({ id, classes: 'control-item-label', label: item.label }),
    ...maybe(item.description).map((text) => `<p class="control-item-description" id="${id}Description">${text}</p>`),
    ...maybe(item.extraLabel).map((text) => `<p class="radio-button-extra-label" id="${id}ExtraLabel">${text}</p>`)
  ]

  const iconContainer = maybe(showIcon).map(() => `
    <div class="control-item-assets-container">
      ${iconMarkup}
    </div>`)

  return `  <div class="${itemClasses}">
    <div class="control-item-assets-container">
      ${indicators[shape]({ id, attrs, checked: String(item.selected) })}
    </div>
    <div class="control-item-text-container">
${textLines.map((line) => `      ${line}`).join('\n')}
    </div>${iconContainer.join('')}
  </div>`
}

const renderRadioButtonItem = ({ items, legend, state, error, errorMessage, required, reverse, outlined, divider, maxWidth, showIcon }, iconMarkup = inlineIcon(defaultIconPath)) => {
  const safeState = orElse(state, states)
  const shape = shapes[safeState]

  const itemClasses = [
    'radio-button-item',
    outlined ? 'radio-button-item-outlined' : '',
    reverse ? 'control-item-reverse' : '',
    divider ? 'control-item-divider' : '',
    maxWidth ? 'component-max-width' : ''
  ].filter(Boolean).join(' ')

  const rendered = OPTIONS.map((_, index) =>
    renderItem({
      item: itemAt(items, index),
      index,
      shape,
      state: safeState,
      itemClasses,
      error,
      required,
      errorMessage,
      showIcon,
      iconMarkup
    }))

  const legendLine = maybe(legend).map((text) =>
    `  <legend${required ? ' class="is-required"' : ''}>${text}</legend>`)

  // The message is only written when the group is in error. The Controls panel
  // hides the text control then, and the markup must not keep a paragraph
  // nothing on screen can reach.
  const errorLine = maybe(error && errorMessage).map((text) =>
    `  <p class="control-item-error-message" id="radioItemErrorText">${text}</p>`)

  return `<fieldset class="control-items-list">
${[...legendLine, groupWrappers[shape](rendered.join('\n')), ...errorLine].join('\n')}
</fieldset>`
}

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
  title: 'Playground/Radio button item',
  argTypes: {
    option1Label: {
      name: 'Option 1 — label',
      control: 'text',
    },
    option1ExtraLabel: {
      name: 'Option 1 — extra label',
      control: 'text',
      description: 'Rendered as `<span class="radio-button-extra-label">`, after the label. Empty: none.',
    },
    option1Description: {
      name: 'Option 1 — description',
      control: 'text',
      description: 'Rendered as `<p class="control-item-description">`, referenced by `aria-describedby`. Empty: none.',
    },
    option2Label: {
      name: 'Option 2 — label',
      control: 'text',
    },
    option2ExtraLabel: {
      name: 'Option 2 — extra label',
      control: 'text',
      description: 'Rendered as `<span class="radio-button-extra-label">`, after the label. Empty: none.',
    },
    option2Description: {
      name: 'Option 2 — description',
      control: 'text',
      description: 'Rendered as `<p class="control-item-description">`, referenced by `aria-describedby`. Empty: none.',
    },
    legend: {
      name: 'Legend',
      control: 'text',
      description: 'The `<legend>` of the `fieldset`: what the whole group asks. Carries `is-required` when the choice is mandatory. Empty: no legend.',
    },
    state: {
      name: 'State',
      control: 'select',
      options: stateOptions,
      description: '`Read only` is another DOM, not an attribute: a `<span role="radio" aria-readonly="true">` in place of each input, a `<p>` in place of each label, and the whole group wrapped in `<div role="radiogroup" aria-readonly="true">`.',
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Adds `required` on each input and `is-required` on the legend — the choice is mandatory, not one of the options.',
    },
    error: {
      name: 'Error',
      control: 'boolean',
      description: 'Adds `aria-invalid="true"`. The stylesheet shows the error message below only when the fieldset holds an invalid input.',
    },
    errorMessage: {
      name: 'Error message',
      control: 'text',
      description: 'Rendered as `<p class="control-item-error-message">` inside the `fieldset`, after the items. Hidden by the stylesheet until `error` is checked. Empty: no message.',
      if: { arg: 'error', truthy: true },
    },
    outlined: {
      name: 'Outlined',
      control: 'boolean',
    },
    reverse: {
      name: 'Reverse',
      control: 'boolean',
    },
    divider: {
      name: 'Divider',
      control: 'boolean',
    },
    maxWidth: {
      name: 'Max width',
      control: 'boolean',
      description: 'Adds `component-max-width`, the design system class carrying the list item maximum width token — 480 px, measured. Nothing draws the width of an item on its own: check `divider`, or write a long enough label or description, to see it bite.',
    },
    showIcon: {
      name: 'Icon',
      control: 'boolean',
    },
    icon: {
      name: 'Icon content',
      control: 'text',
      description: 'A whole `<svg>…</svg>` or an `<img>`, pasted as is, a bare `data:` URL, or only the inside of an SVG (`<path>`, `<g>`…), then wrapped in a 24×24 viewBox. Rendered on every item of the group. Empty: the design system icon.',
      if: { arg: 'showIcon', truthy: true },
    }
  }
}

export const PlaygroundRadioButtonItem = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const {
            legend, state, error, errorMessage, required, reverse,
            outlined, divider, maxWidth, showIcon, icon, skeleton
          } = context.args

          return skeletonWrapper(renderRadioButtonItem({
            items: itemsOf(context.args),
            legend,
            state: baseState(state),
            error,
            errorMessage,
            required,
            reverse,
            outlined,
            divider,
            maxWidth,
            showIcon,
          }, resolveIcon(icon, spriteIcon)), isSkeleton(state))
        },
      },
    },
  },
  render: (args) => {
    const { legend, state, error, errorMessage, required, reverse, outlined, divider, maxWidth, showIcon, icon } = args
    return skeletonWrapper(renderRadioButtonItem({
      items: itemsOf(args),
      legend,
      state: baseState(state),
      error,
      errorMessage,
      required,
      reverse,
      outlined,
      divider,
      maxWidth,
      showIcon,
    }, resolveIcon(icon, inlineIcon(defaultIconPath))), isSkeleton(state))
  },
  args: {
    option1Label: 'Option 1',
    option1ExtraLabel: 'Extra label',
    option1Description: 'Description text',
    option2Label: 'Option 2',
    option2ExtraLabel: '',
    option2Description: 'Description text',
    legend: 'Radio buttons group',
    state: 'Enabled',
    required: false,
    error: false,
    errorMessage: 'This field can’t be empty.',
    outlined: false,
    reverse: false,
    divider: false,
    maxWidth: false,
    showIcon: false,
    icon: '',
  },
}
