// Playground for Text input
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/text-input/
//
// The Figma properties the mapping had frozen for lack of a template are all
// real markup, and all reachable here: helper text, helper link, error message,
// prefix, suffix, required, rounded, max width, loading. What was a dozen dead
// constants at the top of the file is now a dozen controls.
//
// `Input status` is gone. It said Empty or Filled, which is not a property of
// the component but the content of the field — editable on the web side. The
// field now carries a `value` that survives a change of control.

const states = ['Enabled', 'Read only', 'Disabled', 'Loading indeterminate', 'Loading determinate']

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

// An optional part is a list: empty, nothing is rendered; filled, one line.
// The trailing button's accessible name is not a control: it is a text the
// canvas never shows, and it says what the button does — which does not change
// with anything the panel offers. The documentation's own example is a
// favourite toggle, so that is the name written here. Swap the constant and
// the icon together if the snippet is going into a page that does something
// else.
const actionLabel = 'Add to favorites'

const maybe = (value) => (value ? [value] : [])

// OUDS specificity: an empty placeholder is written `placeholder=" "`, a single
// space. The label of a text input floats above the field only when the field is
// not empty *or* has a placeholder — with a truly empty placeholder the label
// would sit on top of the value. Every example of the documentation does it.
const placeholderOf = (placeholder) => (String(placeholder ?? '').length ? placeholder : ' ')

// The field keeps what was typed: the value is an arg, so changing another
// control re-renders the field with its text instead of an empty one. In the
// standalone playground, typing in the canvas writes back into that arg.
const valueAttr = (text) => (String(text ?? '').length ? ` value="${text}"` : '')

const requiredMap = {
  'False': '',
  'True': ' required'
}

const errorMap = {
  'False': '',
  'True': ' aria-invalid="true"'
}

const outlinedClasses = {
  'True': 'text-input-container-outlined',
  'False': ''
}

// `rounded` is a product-wide setting carried by an ancestor
// (`.use-rounded-corner-inputs`), not by the component.
const roundedWrappers = {
  'True': (markup) => `<div class="use-rounded-corner-inputs">
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`,
  'False': (markup) => markup
}

// A prefix or a suffix is carried by a wrapper around the field, through two
// data attributes the stylesheet renders in `::before` and `::after`.
const affixAttr = (name, value) => (value ? ` data-bs-${name}="${value}"` : '')

const fieldWrappers = {
  'plain': ({ field }) => [field],
  'affixed': ({ field, prefix, suffix }) => [
    `<div class="input-container"${affixAttr('prefix', prefix)}${affixAttr('suffix', suffix)}>`,
    `  ${field}`,
    '</div>'
  ]
}

// The loader and its status message, and the custom property that times the
// determinate one. A state absent from a table adds nothing.
const loader = `<svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
      <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
    </svg>`

const stateFieldClasses = {
  'Loading indeterminate': 'loading-indeterminate',
  'Loading determinate': 'loading-determinate'
}

const stateFieldAttrs = {
  'Read only': ' readonly',
  'Disabled': ' disabled'
}

const stateContainerStyles = {
  'Loading determinate': (loadingTime) => ` style="--bs-loading-time: ${loadingTime};"`
}

const nothing = () => ''

const defaultIconPath = '<path d="M18.4 11.242 12 18.247l-6.4-7.005-.003-.004a3.285 3.285 0 0 1 .247-4.678 3.383 3.383 0 0 1 4.625.128l.979.92.552.525.552-.525.98-.92.009-.01a3.352 3.352 0 0 1 2.37-.97c1.852 0 3.354 1.483 3.354 3.313a3.29 3.29 0 0 1-.862 2.217l-.003.004Zm1.463-6.125A5.635 5.635 0 0 0 12 5.08c-2.185-2.118-5.694-2.105-7.863.038a5.475 5.475 0 0 0-.105 7.702L12 21.5l7.968-8.68a5.475 5.475 0 0 0-.105-7.703Z"/>'

// The canvas inlines the icons, so they show up without depending on the hosted
// sprite; the Code panel shows the sprite reference, which is what one writes in
// a real page. Two icons, two controls: `icon` for the leading one, `actionIcon`
// for the trailing button.
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
  leading: inlineIcon(defaultIconPath),
  action: inlineIcon(defaultIconPath)
}

const spriteIcons = {
  leading: '<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"/></svg>',
  action: '<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"/></svg>'
}

// A path typed in a control replaces the sprite reference on both sides: the
// Code panel would otherwise lie about what the canvas renders.
const withCustomIcons = (icons, { icon, actionIcon }) => ({
  leading: icon ? inlineIcon(icon) : icons.leading,
  action: actionIcon ? inlineIcon(actionIcon) : icons.action
})

const loadingMessages = {
  'Loading indeterminate': 'Loading message',
  'Loading determinate': 'Loading message'
}

// The action button is disabled by every state that takes the field out of
// reach: leaving it clickable next to a disabled or read only field was the bug.
const actionDisabled = {
  'Enabled': '',
  'Read only': ' disabled',
  'Disabled': ' disabled',
  'Loading indeterminate': ' disabled',
  'Loading determinate': ' disabled'
}


// Retention of what is typed in the canvas. A story is re-rendered from its args
// on every control change, so a value typed straight into the field would be
// lost — the most concrete complaint on this component. The field therefore
// writes each keystroke into a global, and the preview reads it back.
//
// There is no `Value` control: the field is there to be typed into, and a
// control that duplicates it only adds a second way to do the same thing.
//
// `transform` gets none of this: the snippet stays plain OUDS markup — an empty
// field, as the documentation writes it. Same split as the icons.
//
// The two sides do not necessarily run in the same window: Storybook paints the
// canvas in the preview iframe, and this playground's standalone preview paints
// it in a `srcdoc` iframe while `render` runs in the page around it. A store on
// `globalThis` is therefore two different stores, and everything typed is lost.
// Both sides resolve the same one instead — the topmost same-origin window,
// falling back to their own when the top is cross-origin, and to `globalThis`
// outside a browser, where `check_stories.js` replays the controls.
const storeWindow = () => {
  try {
    return globalThis.top && globalThis.top.document ? globalThis.top : globalThis
  } catch (error) {
    return globalThis
  }
}

const store = () => {
  const win = storeWindow()
  win.__oudsTyped = win.__oudsTyped || {}

  return win.__oudsTyped
}

const keptValue = (key) => store()[key] ?? ''

// The same resolution, written inline: the attribute runs in the canvas, which
// is where the other window is.
const retainAttr = (key) => ` oninput="var w; try { w = globalThis.top &amp;&amp; globalThis.top.document ? globalThis.top : globalThis } catch (e) { w = globalThis } (w.__oudsTyped = w.__oudsTyped || {})['${key}'] = this.value"`

const renderTextInput = ({
  label, inputText, placeholder, helperText, helperLink, error, errorMessage, required,
  prefix, suffix, outlined, rounded, maxWidth, state, loadingTime, leadingIcon,
  trailingAction
}, icons = inlineIcons, retain = '') => {
  const safeState = orElse(state, states)

  // The description comes first, then the error message: the order the
  // documentation writes, and the order they are announced.
  const describedBy = [
    helperText ? 'textInputHelper' : '',
    error && errorMessage ? 'textInputError' : '',
    loadingMessages[safeState] ? 'textInputLoadingMsg' : ''
  ].filter(Boolean).join(' ')

  const fieldClasses = [
    'text-input-field',
    stateFieldClasses[safeState] ?? ''
  ].filter(Boolean).join(' ')

  const field = `<input type="text" class="${fieldClasses}" id="textInput" placeholder="${placeholderOf(placeholder)}"${valueAttr(inputText)}${errorMap[(error ? 'True' : 'False')]}${requiredMap[(required ? 'True' : 'False')]}${describedBy ? ` aria-describedby="${describedBy}"` : ''}${stateFieldAttrs[safeState] ?? ''}${retain}>`

  const containerClasses = [
    'text-input-container',
    outlinedClasses[(outlined ? 'True' : 'False')]
  ].filter(Boolean).join(' ')

  const labelClasses = [
    required ? 'is-required' : ''
  ].filter(Boolean).join(' ')

  const containerLines = [
    ...maybe(leadingIcon).map(() => icons.leading),
    `<label for="textInput"${helperLink ? ' id="textInputLabel"' : ''}${labelClasses ? ` class="${labelClasses}"` : ''}>${label}</label>`,
    ...fieldWrappers[prefix || suffix ? 'affixed' : 'plain']({ field, prefix, suffix }),
    ...maybe(trailingAction).map(() => `<button class="btn btn-minimal btn-icon" type="button"${actionDisabled[safeState]}>
      ${icons.action}
      <span class="visually-hidden">${actionLabel}</span>
    </button>`),
    ...maybe(loadingMessages[safeState]).map(() => loader),
    ...maybe(loadingMessages[safeState]).map((message) =>
      `<span role="status" id="textInputLoadingMsg" class="visually-hidden d-none">${message}</span>`)
  ]

  // The helper text, the error message and the helper link are siblings of the
  // container, inside `.text-input` — not inside the container.
  const belowLines = [
    ...maybe(helperText).map((text) => `<p id="textInputHelper" class="helper-text">${text}</p>`),
    ...maybe(error && errorMessage).map(() => `<p id="textInputError" class="error-text">${errorMessage}</p>`),
    ...maybe(helperLink).map((text) =>
      `<a href="#" id="textInputHelperLink" aria-labelledby="textInputHelperLink textInputLabel" class="link link-small">${text}</a>`)
  ]

  const rootClasses = [
    'text-input',
    maxWidth ? 'component-max-width' : ''
  ].filter(Boolean).join(' ')

  // Nothing below the container: the `.text-input` closes right after it,
  // rather than on an empty line.
  const rootLines = [
    `  <div class="${containerClasses}"${(stateContainerStyles[safeState] ?? nothing)(loadingTime)}>`,
    ...containerLines.map((line) => `    ${line}`),
    '  </div>',
    ...belowLines.map((line) => `  ${line}`)
  ]

  const markup = `<div class="${rootClasses}">
${rootLines.join('\n')}
</div>`

  return roundedWrappers[(rounded ? 'True' : 'False')](markup)
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
  title: 'Playground/Text input',
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'OUDS specificity: left empty it is rendered as `placeholder=" "`, a single space. Without it the floating label would sit on top of the value.',
    },
    helperText: {
      name: 'Helper text',
      control: 'text',
      description: 'Rendered as `<p class="helper-text">` below the container, inside `.text-input`, and referenced by `aria-describedby`. Empty: none.',
    },
    helperLink: {
      name: 'Helper link',
      control: 'text',
      description: 'Rendered as `<a class="link link-small">` below the container. Empty: none.',
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Adds `required` on the field and `is-required` on the label, which draws the asterisk.',
    },
    error: {
      name: 'Error',
      control: 'boolean',
      description: 'Adds `aria-invalid="true"` and shows the error message below.',
    },
    errorMessage: {
      name: 'Error message',
      control: 'text',
      description: 'Rendered as `<p class="error-text">`, after the helper text. Shown when `error` is checked.',
      if: { arg: 'error', truthy: true },
    },
    prefix: {
      name: 'Prefix',
      control: 'text',
      description: 'Text before the field. Carried by `data-bs-prefix` on a `.input-container` wrapper, which the stylesheet draws in a `::before`. Empty: no wrapper.',
    },
    suffix: {
      name: 'Suffix',
      control: 'text',
      description: 'Text after the field, same mechanism through `data-bs-suffix`. Empty: no wrapper.',
    },
    outlined: {
      name: 'Outlined',
      control: 'boolean',
    },
    rounded: {
      name: 'Rounded corners',
      control: 'boolean',
      description: 'Product-wide setting: `use-rounded-corner-inputs` on an ancestor, not a class of the component.',
    },
    maxWidth: {
      name: 'Max width',
      control: 'boolean',
      description: 'Adds `component-max-width` on `.text-input`, the design system class carrying the maximum width token.',
    },
    state: {
      name: 'State',
      control: 'select',
      options: stateOptions,
      description: 'The two loading states are the two documented loaders. Every state but `Enabled` disables the action button — leaving it clickable next to a read only or disabled field was a bug.',
    },
    loadingTime: {
      name: 'Loading time',
      control: 'text',
      description: 'Determinate loader only: `--bs-loading-time` on the container, any CSS duration.',
      if: { arg: 'state', eq: 'Loading determinate' },
    },
    leadingIcon: {
      name: 'Leading icon',
      control: 'boolean',
    },
    icon: {
      name: 'Icon content',
      control: 'text',
      description: 'Leading icon: a whole `<svg>…</svg>`, pasted as is, or only its inside, then wrapped in a 24×24 viewBox. Empty: the design system icon.',
      if: { arg: 'leadingIcon', truthy: true },
    },
    trailingAction: {
      name: 'Trailing action',
      control: 'boolean',
    },
    actionIcon: {
      name: 'Action icon content',
      control: 'text',
      description: 'Trailing button icon: a whole `<svg>…</svg>`, pasted as is, or only its inside. Empty: the design system icon.',
      if: { arg: 'trailingAction', truthy: true },
    },
  }
}

const ARGS = [
  'label', 'placeholder', 'helperText', 'helperLink', 'error', 'errorMessage',
  'required', 'prefix', 'suffix', 'outlined', 'rounded', 'maxWidth', 'state', 'loadingTime',
  'leadingIcon', 'trailingAction'
]

// The render arguments, picked from the story args: eighteen controls make a
// destructuring list longer than the function it feeds. `Skeleton` is one of
// the values of `state`, so it is peeled off here: the wrapper takes it and the
// component renders in its first state underneath.
const pick = (args) => ({
  ...Object.fromEntries(ARGS.map((name) => [name, args[name]])),
  state: baseState(args.state)
})

export const PlaygroundTextInput = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          return skeletonWrapper(renderTextInput(pick(context.args), withCustomIcons(spriteIcons, context.args)), context.args.skeleton)
        },
      },
    },
  },
  render: (args) => {
    return skeletonWrapper(renderTextInput(
      { ...pick(args), inputText: keptValue('textInput') },
      withCustomIcons(inlineIcons, args),
      retainAttr('textInput')
    ), isSkeleton(args.state))
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text.',
    helperLink: 'More information',
    required: false,
    error: false,
    errorMessage: 'The format is not valid.',
    prefix: '',
    suffix: '',
    outlined: false,
    rounded: false,
    maxWidth: false,
    state: 'Enabled',
    loadingTime: '5s',
    leadingIcon: false,
    icon: '',
    trailingAction: false,
    actionIcon: '',
  },
}
