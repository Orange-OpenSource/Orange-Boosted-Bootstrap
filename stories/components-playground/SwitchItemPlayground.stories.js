// Playground for Switch item
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/switch/
//
// No `Helper text` control. The documentation writes none on a control item:
// it has a `control-item-description` inside the text container and nothing
// else. `.helper-text` was borrowed from the form components for a while — a
// deliberate extension, and one the design system does not back. It is gone.
//
// Fix — Read only: it is not an attribute, it is another DOM. The documentation
// swaps the `<input>` for a `<span role="switch" aria-readonly="true"
// aria-disabled="true" tabindex="0" aria-checked="…">`, and the `<label>` for a
// `<p>` — there is no form control left to label. `readonly` on a checkbox is
// ignored by the browser — and a switch is a checkbox with `role="switch"` —
// which is why the state looked like it did nothing.
// The two shapes are two entries of a table.
//
// The error message lives *inside* the container, after the item, and
// `_control-item.scss:15` hides it until the container `:has()` an invalid
// input. It can therefore be written once and shown by the state.
//
// Max width is `component-max-width`, a class of the design system carrying the
// list item token — not an inline style.

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

// THE SWITCH STARTS UNCHECKED AND THERE IS NO `Selected` CONTROL.
// The item on the canvas is a real `<input type="checkbox" role="switch">`:
// clicking it is the honest way to see what selected looks like, and a control
// doing the same thing from the panel is a second lever on one state. What the
// snippet shows is the initial markup, which the documentation writes
// unchecked. The read only indicator, which cannot be clicked, announces the
// same initial value.
const selectedAttr = ''
const ariaChecked = 'false'

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
  'input': ({ attrs }) =>
    `<input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchItem"${attrs} />`,

  'readonly': ({ checked }) =>
    `<span class="control-item-indicator" role="switch" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="${checked}" aria-labelledby="switchItemLabel"></span>`
}

const labelElements = {
  'input': ({ classes, label }) => `<label class="${classes}" for="switchItem">${label}</label>`,
  'readonly': ({ classes, label }) => `<p class="${classes}" id="switchItemLabel">${label}</p>`
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

const renderSwitchItem = ({ state, error, errorMessage, required, reverse, divider, maxWidth, label, description, showIcon }, iconMarkup = inlineIcon(defaultIconPath)) => {
  const safeState = orElse(state, states)
  const shape = shapes[safeState]

  const itemClasses = [
    'switch-item',
    reverse ? 'control-item-reverse' : '',
    divider ? 'control-item-divider' : '',
    maxWidth ? 'component-max-width' : ''
  ].filter(Boolean).join(' ')

  const labelClasses = [
    'control-item-label',
    required ? 'is-required' : ''
  ].filter(Boolean).join(' ')

  // The description comes first, then the error message: that is the order the
  // documentation writes, and the order a screen reader announces them.
  // The message is in the DOM whatever the state, but it is only *announced*
  // when the item is invalid — the stylesheet only shows it then.
  const describedBy = [
    description ? 'switchItemDescription' : '',
    error && errorMessage ? 'switchItemErrorText' : ''
  ].filter(Boolean).join(' ')

  const attrs = [
    selectedAttr,
    errorMap[(error ? 'True' : 'False')],
    requiredMap[(required ? 'True' : 'False')],
    describedBy ? ` aria-describedby="${describedBy}"` : '',
    stateAttrs[safeState]
  ].join('')

  const textLines = [
    labelElements[shape]({ classes: labelClasses, label }),
    ...maybe(description).map((text) => `<p class="control-item-description" id="switchItemDescription">${text}</p>`)
  ]

  const iconContainer = maybe(showIcon).map(() => `
    <div class="control-item-assets-container">
      ${iconMarkup}
    </div>`)

  const item = `  <div class="${itemClasses}">
    <div class="control-item-assets-container">
      ${indicators[shape]({ attrs, checked: ariaChecked })}
    </div>
    <div class="control-item-text-container">
${textLines.map((line) => `      ${line}`).join('\n')}
    </div>${iconContainer.join('')}
  </div>`

  // The message is only written when the item is in error. The Controls panel
  // hides the text control then, and the markup must not keep a paragraph
  // nothing on screen can reach.
  const errorLine = maybe(error && errorMessage).map((text) =>
    `  <p class="control-item-error-message" id="switchItemErrorText">${text}</p>`)

  return `<div class="switch-item-container">
${[item, ...errorLine].join('\n')}
</div>`
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
  title: 'Playground/Switch item',
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
    },
    description: {
      name: 'Description',
      control: 'text',
      description: 'Rendered as `<p class="control-item-description">` inside the text container, and referenced by `aria-describedby`. Empty: no description.',
    },
    state: {
      name: 'State',
      control: 'select',
      options: stateOptions,
      description: '`Read only` is another DOM, not an attribute: a `<span role="switch" aria-readonly="true">` in place of the input, and a `<p>` in place of the label.',
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Adds `required` on the input and `is-required` on the label, which draws the asterisk.',
    },
    error: {
      name: 'Error',
      control: 'boolean',
      description: 'Adds `aria-invalid="true"`. The stylesheet shows the error message below only when the container holds an invalid input — so the message can be written first and appear with the state.',
    },
    errorMessage: {
      name: 'Error message',
      control: 'text',
      description: 'Rendered as `<p class="control-item-error-message">` inside the `switch-item-container`, after the item, and referenced by `aria-describedby`. Hidden by the stylesheet until `error` is checked. Empty: no message.',
      if: { arg: 'error', truthy: true },
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
      description: 'A whole `<svg>…</svg>` or an `<img>`, pasted as is, a bare `data:` URL, or only the inside of an SVG (`<path>`, `<g>`…), then wrapped in a 24×24 viewBox. Empty: the design system icon.',
      if: { arg: 'showIcon', truthy: true },
    }
  }
}

export const PlaygroundSwitchItem = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const {
            state, error, errorMessage, required, reverse, divider,
            maxWidth, label, description, showIcon, icon, skeleton
          } = context.args

          return skeletonWrapper(renderSwitchItem({
            state: baseState(state),
            error,
            errorMessage,
            required,
            reverse,
            divider,
            maxWidth,
            label,
            description,
            showIcon,
          }, resolveIcon(icon, spriteIcon)), isSkeleton(state))
        },
      },
    },
  },
  render: ({ state, error, errorMessage, required, reverse, divider, maxWidth, label, description, showIcon, icon }) => {
    return skeletonWrapper(renderSwitchItem({
      state: baseState(state),
      error,
      errorMessage,
      required,
      reverse,
      divider,
      maxWidth,
      label,
      description,
      showIcon,
    }, resolveIcon(icon, inlineIcon(defaultIconPath))), isSkeleton(state))
  },
  args: {
    label: 'Label',
    description: 'Description text',
    state: 'Enabled',
    required: false,
    error: false,
    errorMessage: 'This field can’t be activated.',
    reverse: false,
    divider: false,
    maxWidth: false,
    showIcon: false,
    icon: '',
  },
}
