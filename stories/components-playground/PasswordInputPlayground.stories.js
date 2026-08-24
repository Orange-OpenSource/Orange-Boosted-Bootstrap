// Playground for Password input
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/password-input/
//
// Same base as Text input — it is the same markup, `.text-input` — with one
// difference that carries everything: the trailing button is not optional, it is
// the button that reveals the password. So it drives three things at once, which
// the documentation swaps in JavaScript on every click:
//
//   hidden  → type="password", icon `accessibility-vision`, "Show password", aria-pressed="false"
//   shown   → type="text",     icon `hide`,                 "Hide password", aria-pressed="true"
//
// The icon changing with the state was missing: the eye stayed on screen while
// the password was already readable.
//
// Fix — Disabled: the button was left clickable next to a disabled field. Read
// only keeps it active on purpose: the value cannot be edited, but there is no
// reason to stop reading it.
//
// The Figma properties the mapping had frozen are all real markup, and all
// reachable here: helper text, error message, prefix, required, rounded, max
// width, loading. `Input status` is gone — it described the content of the
// field, not the component.

const states = ['Enabled', 'Read only', 'Disabled', 'Loading indeterminate', 'Loading determinate']

// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

// An optional part is a list: empty, nothing is rendered; filled, one line.
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

const defaultIconPath = '<path d="M17.4 9.6h-.6V9c0-2.64-2.16-4.8-4.8-4.8-2.64 0-4.8 2.16-4.8 4.8v.6H4.8v10.8a1.8 1.8 0 0 0 1.8 1.8h12.6V11.4a1.8 1.8 0 0 0-1.8-1.8ZM9 9a3 3 0 1 1 6 0v.6H9V9Zm4.572 6.277a1.802 1.802 0 0 1-.695.695L13.2 19.2h-2.4l.323-3.228a1.8 1.8 0 1 1 2.449-.695Z"/>'
const showIconPath = '<path fill-rule="evenodd" d="M12.314 6.003c-.097 0-.193-.003-.29-.003-.097 0-.194.003-.29.003C7.232 6.003 2.676 9.176 1.2 12c1.476 2.824 5.984 5.997 10.486 5.997.096 0 .193.003.29.003.097 0 .193-.003.29-.003 4.502 0 9.058-3.173 10.534-5.997-1.476-2.824-5.984-5.997-10.486-5.997Zm-.347 10.317a4.32 4.32 0 1 1 0-8.64 4.32 4.32 0 0 1 0 8.64ZM2.89 12c.715-.997 1.858-2.017 3.19-2.827.433-.263.881-.501 1.342-.712a5.756 5.756 0 0 0 .019 7.102 12.877 12.877 0 0 1-1.381-.734C4.74 14.02 3.603 13.002 2.89 12Zm15.03 2.827c-.466.283-.948.537-1.446.76a5.755 5.755 0 0 0-.018-7.196 12.88 12.88 0 0 1 1.485.78C19.26 9.98 20.396 11 21.11 12c-.715.998-1.857 2.018-3.19 2.828Zm-3.57-3.951a1.158 1.158 0 1 1-1.499-1.359 2.634 2.634 0 1 0 1.5 1.359Z" clip-rule="evenodd"/>'
const hideIconPath = '<path d="M22.797 11.813a11.971 11.971 0 0 0-3.67-3.86l-1.108 1.11c1.198.695 2.292 1.658 3.091 2.747-.715.999-1.857 2.019-3.19 2.828-.465.283-.947.537-1.444.76 1.183-1.353 1.632-3.763.857-5.647l-1.198 1.198c.468 2.246-.751 4.812-3.76 5.165v-.005a5.504 5.504 0 0 1-.236.019c-.36.012-.72-.026-1.073-.11L9.53 17.554l.464.108H9.99c4.906 1.053 11.102-2.39 12.811-5.85h-.005ZM6.374 14.767c-1.284-.64-2.27-1.428-3.475-2.957h-.01c.716-.996 1.858-2.016 3.188-2.824.427-.26.87-.497 1.327-.706-1.193 1.354-1.666 4.106-.595 6.053l1.099-1.1a4.209 4.209 0 0 1-.218-.784c-.45-2.825 2.073-5.35 4.907-4.91a4.7 4.7 0 0 1 .79.213l1.574-1.574c-5.044-1.148-10.754.72-13.763 5.635 1.147 1.725 2.304 3.06 4.039 4.092l1.137-1.138Zm4.711-.467 9.941-9.944-1.272-1.272-16.56 16.56 1.275 1.272 5.388-5.39 1.229-1.227Z"/>'

// The canvas inlines the icons, so they show up without depending on the hosted
// sprite; the Code panel shows the sprite reference, which is what one writes in
// a real page.
//
// One control only, `icon`, for the leading lock. The reveal button has none:
// its icon is not a setting, it is the state of the field — `accessibility-vision`
// when the password is hidden, `hide` when it is shown. Letting it be typed would
// let the button lie about what the field is doing.
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
  show: inlineIcon(showIconPath),
  hide: inlineIcon(hideIconPath)
}

const spriteIcons = {
  leading: '<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#lock-closed"/></svg>',
  show: '<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#accessibility-vision"/></svg>',
  hide: '<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#hide"/></svg>'
}

// A path typed in a control replaces the sprite reference on both sides: the
// Code panel would otherwise lie about what the canvas renders.
const withCustomIcons = (icons, { icon }) => ({
  leading: icon ? inlineIcon(icon) : icons.leading,
  show: icons.show,
  hide: icons.hide
})

// The three things the reveal button swaps at once. `hiddenPassword` is the
// state of the field, so it indexes all three.
const fieldTypes = {
  'True': 'password',
  'False': 'text'
}

const actionIcons = {
  'True': (icons) => icons.show,
  'False': (icons) => icons.hide
}

const actionLabels = {
  'True': 'Show password',
  'False': 'Hide password'
}

const pressedAttrs = {
  'True': 'false',
  'False': 'true'
}

const loadingMessages = {
  'Loading indeterminate': 'Loading message',
  'Loading determinate': 'Loading message'
}

// The reveal button follows the field, with one exception: read only leaves it
// active. The value cannot be edited, but there is no reason to stop reading it.
const actionDisabled = {
  'Enabled': '',
  'Read only': '',
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

const renderPasswordInput = ({
  label, inputText, placeholder, helperText, error, errorMessage, required, prefix,
  outlined, rounded, maxWidth, state, loadingTime, hiddenPassword, leadingIcon, hiddenLabel
}, icons = inlineIcons, retain = '') => {
  const safeState = orElse(state, states)
  const hiddenKey = hiddenPassword ? 'True' : 'False'

  const describedBy = [
    helperText ? 'passwordInputHelper' : '',
    error && errorMessage ? 'passwordInputError' : '',
    loadingMessages[safeState] ? 'passwordInputLoadingMsg' : ''
  ].filter(Boolean).join(' ')

  const fieldClasses = [
    'text-input-field',
    stateFieldClasses[safeState] ?? ''
  ].filter(Boolean).join(' ')

  const field = `<input type="${fieldTypes[hiddenKey]}" class="${fieldClasses}" id="passwordInput" placeholder="${placeholderOf(placeholder)}"${valueAttr(inputText)}${errorMap[(error ? 'True' : 'False')]}${requiredMap[(required ? 'True' : 'False')]}${describedBy ? ` aria-describedby="${describedBy}"` : ''}${stateFieldAttrs[safeState] ?? ''}${retain}>`

  const containerClasses = [
    'text-input-container',
    outlinedClasses[(outlined ? 'True' : 'False')]
  ].filter(Boolean).join(' ')

  const containerLines = [
    ...maybe(leadingIcon).map(() => icons.leading),
    `<label for="passwordInput"${required ? ' class="is-required"' : ''}>${label}</label>`,
    ...fieldWrappers[prefix ? 'affixed' : 'plain']({ field, prefix, suffix: '' }),
    `<button class="btn btn-minimal btn-icon" aria-pressed="${pressedAttrs[hiddenKey]}" type="button"${actionDisabled[safeState]}>
      ${actionIcons[hiddenKey](icons)}
      <span class="visually-hidden">${hiddenLabel || actionLabels[hiddenKey]}</span>
    </button>`,
    ...maybe(loadingMessages[safeState]).map(() => loader),
    ...maybe(loadingMessages[safeState]).map((message) =>
      `<span role="status" id="passwordInputLoadingMsg" class="visually-hidden d-none">${message}</span>`)
  ]

  const belowLines = [
    ...maybe(helperText).map((text) => `<p id="passwordInputHelper" class="helper-text">${text}</p>`),
    ...maybe(error && errorMessage).map(() => `<p id="passwordInputError" class="error-text">${errorMessage}</p>`)
  ]

  const rootClasses = [
    'text-input',
    maxWidth ? 'component-max-width' : ''
  ].filter(Boolean).join(' ')

  const rootLines = [
    `  <div class="${containerClasses}"${(stateContainerStyles[safeState] ?? nothing)(loadingTime)}>`,
    ...containerLines.map((line) => `    ${line}`),
    '  </div>',
    ...belowLines.map((line) => `  ${line}`)
  ]

  return roundedWrappers[(rounded ? 'True' : 'False')](`<div class="${rootClasses}">
${rootLines.join('\n')}
</div>`)
}

export default {
  title: 'Playground/Password input',
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
      description: 'OUDS specificity: left empty it is rendered as `placeholder=" "`, a single space. Without it the floating label would sit on top of the value.',
    },
    hiddenPassword: {
      name: 'Hidden password',
      control: 'boolean',
      description: 'The state of the field, and the state of the button with it: `type`, icon, hidden label and `aria-pressed` all follow. The documentation swaps the four in JavaScript on every click.',
    },
    helperText: {
      name: 'Helper text',
      control: 'text',
      description: 'Rendered as `<p class="helper-text">` below the container, and referenced by `aria-describedby`. Empty: none.',
    },
    required: {
      control: 'boolean',
      description: 'Adds `required` on the field and `is-required` on the label, which draws the asterisk.',
    },
    error: {
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
      control: 'text',
      description: 'Text before the field, carried by `data-bs-prefix` on a `.input-container` wrapper. The documentation writes `DEV-` and says the prefix is not part of what is typed. Empty: no wrapper.',
    },
    outlined: {
      control: 'boolean',
    },
    rounded: {
      control: 'boolean',
      description: 'Product-wide setting: `use-rounded-corner-inputs` on an ancestor, not a class of the component.',
    },
    maxWidth: {
      name: 'Max width',
      control: 'boolean',
      description: 'Adds `component-max-width` on `.text-input`, the design system class carrying the maximum width token.',
    },
    state: {
      control: 'select',
      options: states,
      description: 'Disabled and the two loading states disable the reveal button. Read only leaves it active on purpose: the value cannot be edited, but it can still be read.',
    },
    loadingTime: {
      name: 'Loading time',
      control: 'text',
      description: 'Determinate loader only: `--bs-loading-time` on the container, any CSS duration.',
      if: { arg: 'state', eq: 'Loading determinate' },
    },
    leadingIcon: {
      control: 'boolean',
    },
    icon: {
      control: 'text',
      description: 'Leading icon: a whole `<svg>…</svg>`, pasted as is, or only its inside. Empty: the `lock-closed` symbol of the design system.',
      if: { arg: 'leadingIcon', truthy: true },
    },
    hiddenLabel: {
      name: 'Hidden label (reveal button)',
      control: 'text',
      description: 'Carried by the `visually-hidden` span of the reveal button. Empty: it follows the state, "Show password" or "Hide password".',
    }
  }
}

const ARGS = [
  'label', 'placeholder', 'helperText', 'error', 'errorMessage', 'required',
  'prefix', 'outlined', 'rounded', 'maxWidth', 'state', 'loadingTime', 'hiddenPassword',
  'leadingIcon', 'hiddenLabel'
]

// The render arguments, picked from the story args: sixteen controls make a
// destructuring list longer than the function it feeds.
const pick = (args) => Object.fromEntries(ARGS.map((name) => [name, args[name]]))

export const PlaygroundPasswordInput = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          return renderPasswordInput(pick(context.args), withCustomIcons(spriteIcons, context.args))
        },
      },
    },
  },
  render: (args) => {
    return renderPasswordInput(
      { ...pick(args), inputText: keptValue('passwordInput') },
      withCustomIcons(inlineIcons, args),
      retainAttr('passwordInput')
    )
  },
  args: {
    label: 'Password',
    placeholder: 'Minimum 8 characters',
    hiddenPassword: true,
    helperText: 'Your password must be between 8 and 20 characters long.',
    required: false,
    error: false,
    errorMessage: 'Password must be at least 8 characters.',
    prefix: '',
    outlined: false,
    rounded: false,
    maxWidth: false,
    state: 'Enabled',
    loadingTime: '5s',
    leadingIcon: false,
    icon: '',
    hiddenLabel: ''
  },
}
