// Playground for Checkbox item
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/checkbox/
//
// Fix — Read only: it is not an attribute, it is another DOM. The documentation
// swaps the `<input>` for a `<span role="checkbox" aria-readonly="true"
// aria-disabled="true" tabindex="0" aria-checked="…">`, and the `<label>` for a
// `<p>` — there is no form control left to label. `readonly` on a checkbox is
// ignored by the browser, which is why the state looked like it did nothing.
// The two shapes are two entries of a table.
//
// The error message lives *inside* the container, after the item, and
// `_control-item.scss:15` hides it until the container `:has()` an invalid
// input. It can therefore be written once and shown by the state.
//
// Max width is `component-max-width`, a class of the design system carrying the
// list item token — not an inline style.

const states = ['Enabled', 'Read only', 'Disabled']
const selectionStatuses = ['Unselected', 'Selected', 'Indeterminate']

// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

const selectionStatusMap = {
  'Unselected': '',
  'Selected': ' checked',
  'Indeterminate': ''
}

// What a read only indicator announces in place of `checked`.
const ariaChecked = {
  'Unselected': 'false',
  'Selected': 'true',
  'Indeterminate': 'mixed'
}

// `indeterminate` is a DOM *property*, which no attribute carries: the
// documentation sets it in JavaScript, and so does the snippet — without the
// script the checkbox is simply unselected. A read only indicator does not need
// it: `aria-checked="mixed"` says it in the markup.
const selectionScripts = {
  'Indeterminate': `
<script>
  document.getElementById('checkboxItem').indeterminate = true
<\/script>`
}

const scriptFor = (shape, status) => (shape === 'input' ? selectionScripts[status] ?? '' : '')

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
    `<input class="control-item-indicator" type="checkbox" value="" id="checkboxItem"${attrs} />`,

  'readonly': ({ checked }) =>
    `<span class="control-item-indicator" role="checkbox" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="${checked}" aria-labelledby="checkboxItemLabel"></span>`
}

const labelElements = {
  'input': ({ classes, label }) => `<label class="${classes}" for="checkboxItem">${label}</label>`,
  'readonly': ({ classes, label }) => `<p class="${classes}" id="checkboxItemLabel">${label}</p>`
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

const renderCheckboxItem = ({ state, selectionStatus, error, errorMessage, required, reverse, divider, maxWidth, label, description, helperText, showIcon }, iconMarkup = inlineIcon(defaultIconPath)) => {
  const safeState = orElse(state, states)
  const safeStatus = orElse(selectionStatus, selectionStatuses)
  const shape = shapes[safeState]

  const itemClasses = [
    'checkbox-item',
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
    description ? 'checkboxItemDescription' : '',
    helperText ? 'checkboxItemHelper' : '',
    error && errorMessage ? 'checkboxItemErrorText' : ''
  ].filter(Boolean).join(' ')

  const attrs = [
    selectionStatusMap[safeStatus],
    errorMap[(error ? 'True' : 'False')],
    requiredMap[(required ? 'True' : 'False')],
    describedBy ? ` aria-describedby="${describedBy}"` : '',
    stateAttrs[safeState]
  ].join('')

  const textLines = [
    labelElements[shape]({ classes: labelClasses, label }),
    ...maybe(description).map((text) => `<p class="control-item-description" id="checkboxItemDescription">${text}</p>`)
  ]

  const iconContainer = maybe(showIcon).map(() => `
    <div class="control-item-assets-container">
      ${iconMarkup}
    </div>`)

  const item = `  <div class="${itemClasses}">
    <div class="control-item-assets-container">
      ${indicators[shape]({ attrs, checked: ariaChecked[safeStatus] })}
    </div>
    <div class="control-item-text-container">
${textLines.map((line) => `      ${line}`).join('\n')}
    </div>${iconContainer.join('')}
  </div>`

  // The documentation writes no helper text for a control item — it only has a
  // description, inside the text container. `.helper-text` is the design system's
  // generic class for it (`scss/_forms.scss`), so it is used here as the form
  // components use it: a sibling of the component, before the error message,
  // referenced by `aria-describedby`.
  const helperLine = maybe(helperText).map((text) =>
    `  <p class="helper-text" id="checkboxItemHelper">${text}</p>`)

  const errorLine = maybe(errorMessage).map((text) =>
    `  <p class="control-item-error-message" id="checkboxItemErrorText">${text}</p>`)

  return `<fieldset class="control-items-list">
${[item, ...helperLine, ...errorLine].join('\n')}
</fieldset>${scriptFor(shape, safeStatus)}`
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
  title: 'Playground/Checkbox item',
  argTypes: {
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
      description: 'Rendered as `<p class="control-item-description">` inside the text container, and referenced by `aria-describedby`. Empty: no description.',
    },
    helperText: {
      name: 'Helper text',
      control: 'text',
      description: 'Rendered as `<p class="helper-text">` after the item, before the error message, and referenced by `aria-describedby`. The documentation has no helper text on a control item; `.helper-text` is the generic class the form components use. Empty: none.',
    },
    selectionStatus: {
      control: 'select',
      options: selectionStatuses,
      description: '`Indeterminate` is a DOM property, not an attribute: the snippet carries the line of JavaScript the documentation writes. A read only indicator says it in the markup instead, with `aria-checked="mixed"`.',
    },
    state: {
      control: 'select',
      options: states,
      description: '`Read only` is another DOM, not an attribute: a `<span role="checkbox" aria-readonly="true">` in place of the input, and a `<p>` in place of the label.',
    },
    required: {
      control: 'boolean',
      description: 'Adds `required` on the input and `is-required` on the label, which draws the asterisk.',
    },
    error: {
      control: 'boolean',
      description: 'Adds `aria-invalid="true"`. The stylesheet shows the error message below only when the container holds an invalid input — so the message can be written first and appear with the state.',
    },
    errorMessage: {
      name: 'Error message',
      control: 'text',
      description: 'Rendered as `<p class="control-item-error-message">` inside the `fieldset`, after the item, and referenced by `aria-describedby`. Hidden by the stylesheet until `error` is checked. Empty: no message.',
    },
    reverse: {
      control: 'boolean',
    },
    divider: {
      control: 'boolean',
    },
    maxWidth: {
      name: 'Max width',
      control: 'boolean',
      description: 'Adds `component-max-width`, the design system class carrying the list item maximum width token — 480 px, measured. Nothing draws the width of an item on its own: check `divider`, or write a long enough label or description, to see it bite.',
    },
    showIcon: {
      control: 'boolean',
    },
    icon: {
      control: 'text',
      description: 'A whole `<svg>…</svg>` or an `<img>`, pasted as is, a bare `data:` URL, or only the inside of an SVG (`<path>`, `<g>`…), then wrapped in a 24×24 viewBox. Empty: the design system icon.',
      if: { arg: 'showIcon', truthy: true },
    },
    skeleton: {
      control: 'boolean',
      description: 'Wraps the component in `<div aria-busy="true" inert>`, the way the design system puts a real component in a loading state. Same markup for every component.',
    }
  }
}

export const PlaygroundCheckboxItem = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const {
            state, selectionStatus, error, errorMessage, required, reverse, divider,
            maxWidth, label, description, helperText, showIcon, icon, skeleton
          } = context.args

          return skeletonWrapper(renderCheckboxItem({
            state,
            selectionStatus,
            error,
            errorMessage,
            required,
            reverse,
            divider,
            maxWidth,
            label,
            description,
            helperText,
            showIcon,
          }, resolveIcon(icon, spriteIcon)), skeleton)
        },
      },
    },
  },
  render: ({ state, selectionStatus, error, errorMessage, required, reverse, divider, maxWidth, label, description, helperText, showIcon, icon, skeleton }) => {
    return skeletonWrapper(renderCheckboxItem({
      state,
      selectionStatus,
      error,
      errorMessage,
      required,
      reverse,
      divider,
      maxWidth,
      label,
      description,
      helperText,
      showIcon,
    }, resolveIcon(icon, inlineIcon(defaultIconPath))), skeleton)
  },
  args: {
    label: 'Label',
    description: 'Description text',
    helperText: 'Helper text.',
    selectionStatus: 'Unselected',
    state: 'Enabled',
    required: false,
    error: false,
    errorMessage: 'You need to select at least one option.',
    reverse: false,
    divider: false,
    maxWidth: false,
    showIcon: false,
    icon: '',
    skeleton: false
  },
}
