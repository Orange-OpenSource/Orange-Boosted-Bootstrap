// Playground for Select input
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/select-input/
//
// Third member of the form family in the corpus, beside Text input and
// Password input, and built on the same container / field / messages shape.
//
// GAP TO BE RAISED WITH OUDS — the helper text disappears with nothing in its
// place. The two components do not guard the helper-to-error switch the same
// way:
//
//   scss/forms/_text-input.scss:418   .text-input-container:has(.text-input-field:is(:user-invalid, [aria-invalid="true"])):has(~ .error-text) ~ .helper-text { display: none }
//   scss/forms/_select-input.scss:256 .select-input-container:has(:user-invalid, [aria-invalid="true"]) ~ .helper-text { display: none }
//
// The `:has(~ .error-text)` is missing. So an invalid select input **without**
// an `.error-text` hides its helper text and puts nothing in its place: the
// user loses the description. A text input in the same state keeps it.
// Measured in Chromium on a `main` build, computed `display` of `.helper-text`
// on an invalid field with no error text: `none` on `.select-input`, `block` on
// `.text-input`. Reachable here — set `Invalid`, empty `Error text`.
//
// Secondary, same line: the select's selector does not qualify the field
// (`:has(:user-invalid, [aria-invalid="true"])` rather than
// `:has(.select-input-field:…)`), so any invalid descendant triggers it.
//
// WHAT THE STYLESHEET ALREADY DOES, AND WHAT THE FILE MAKES OF IT.
// `.error-text` is `display: none` by default; it is
// `.select-input-container:has(…invalid…) ~ .error-text { display: block }`
// that reveals it. The markup therefore has nothing to choose: both messages
// are written once and a single attribute switches between them. So
// `Error text` is a plain text control, **not** gated on `Invalid`, and
// `Invalid` only does two things — set `aria-invalid="true"` and move
// `aria-describedby`. Same mechanism as Checkbox item, Radio button item and
// Switch item.

const selectedOptions = ['None', 'One', 'Two', 'Three']
const states = ['Enabled', 'Disabled']
const loadings = ['None', 'Indeterminate', 'Determinate']

// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

const indent = (markup, pad) => markup.split('\n').map((line) => (line ? `${pad}${line}` : line)).join('\n')

const block = (parts, pad) => parts.filter(Boolean).map((part) => indent(part, pad)).join('\n')

// Fixed, readable ids, so the snippet can be pasted whole and renamed in one
// pass.
const ids = {
  field: 'select-input',
  label: 'select-input-label',
  helper: 'select-input-helper',
  error: 'select-input-error',
  link: 'select-input-link',
  loading: 'select-input-loading'
}

// The canvas inlines the path so the icon always shows; the Code panel prints
// the sprite reference, which is what one writes in a real page. An SVG `<use>`
// does not cross origins, so a sprite reference renders nothing in Storybook.
const defaultIconPath = '<path d="M18.4 11.242 12 18.247l-6.4-7.005-.003-.004a3.285 3.285 0 0 1 .247-4.678 3.383 3.383 0 0 1 4.625.128l.979.92.552.525.552-.525.98-.92.009-.01a3.352 3.352 0 0 1 2.37-.97c1.852 0 3.354 1.483 3.354 3.313a3.29 3.29 0 0 1-.862 2.217l-.003.004Zm1.463-6.125A5.635 5.635 0 0 0 12 5.08c-2.185-2.118-5.694-2.105-7.863.038a5.475 5.475 0 0 0-.105 7.702L12 21.5l7.968-8.68a5.475 5.475 0 0 0-.105-7.703Z"/>'

const setAttr = (attrs, name, value) => {
  const re = new RegExp(`\\s${name}="[^"]*"`, 'i')

  return re.test(attrs) ? attrs.replace(re, ` ${name}="${value}"`) : `${attrs} ${name}="${value}"`
}

const wrapIcon = (icon) => `<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">${icon}</svg>`

const sizeOf = (attrs, name) => (new RegExp(`\\s${name}="([\\d.]+)`, 'i').exec(attrs) ?? [])[1]

const withViewBox = (attrs) => {
  const width = sizeOf(attrs, 'width')
  const height = sizeOf(attrs, 'height')

  return /\sviewBox="/i.test(attrs) || !width || !height
    ? attrs
    : `${attrs} viewBox="0 0 ${width} ${height}"`
}

const keepIcon = (icon, opening) => {
  const attrs = setAttr(withViewBox(opening[1]).replace(/\s(?:width|height)="[^"]*"/gi, ''), 'aria-hidden', 'true')

  return icon.replace(/^\s*<svg[^>]*>/i, `<svg${attrs}>`).trim()
}

const keepImage = (icon, opening) => {
  const attrs = setAttr(setAttr(opening[1].replace(/\s(?:width|height)="[^"]*"/gi, ''), 'aria-hidden', 'true'), 'alt', '')

  return icon.replace(/^\s*<img[^>]*>/i, `<img${attrs}>`).trim()
}

const urlImage = (icon) => {
  const src = icon.trim().replace(/"/g, '%22').replace(/\s/g, '%20')

  return `<img src="${src}" alt="" aria-hidden="true">`
}

const pastedKinds = {
  'svg': keepIcon,
  'img': keepImage,
  'url': urlImage,
  'inside': wrapIcon
}

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

const inlineIcons = { heartEmpty: inlineIcon(defaultIconPath) }
const spriteIcons = { heartEmpty: '<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"/></svg>' }

const withCustomIcon = (icons, icon) => (icon ? { heartEmpty: inlineIcon(icon) } : icons)

const outlinedClasses = {
  'True': 'select-input-container-outlined',
  'False': ''
}

const maxWidthClasses = {
  'True': 'component-max-width',
  'False': ''
}

const loadingClasses = {
  'None': '',
  'Indeterminate': 'loading-indeterminate',
  'Determinate': 'loading-determinate'
}

const stateAttrs = {
  'Enabled': '',
  'Disabled': ' disabled'
}

const requiredAttrs = {
  'True': ' required',
  'False': ''
}

const requiredClasses = {
  'True': 'is-required',
  'False': ''
}

const invalidAttrs = {
  'True': ' aria-invalid="true"',
  'False': ''
}

// `--bs-loading-time` goes on the **container**, not on the field: it is
// `.select-input-container:has(.loading-determinate)` that declares
// `--bs-loading-animation`. The button does the opposite — `--bs-btn-loading-time`
// sits on the button itself. Easy to copy across and get wrong.
const loadingTimeAttrs = {
  'Determinate': (time) => ` style="--bs-loading-time: ${time};"`
}

// The loader and its live region are only *revealed* by the loading class
// (`&:has(.loading-…) .loader { display: block }`, and `&::after { display:
// none }` for the arrow). They are printed with the loading state here; in a
// real page they sit in the container permanently.
const loaderMarkup = `<svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
  <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
</svg>
<span role="status" id="${ids.loading}" class="visually-hidden d-none">Loading message</span>`

const loaderBlocks = {
  'None': '',
  'Indeterminate': loaderMarkup,
  'Determinate': loaderMarkup
}

// The documentation asks for `aria-describedby` to be swapped as the state
// changes — "you must dynamically replace the `aria-describedby` attribute when
// the select input becomes invalid". One target at a time, in this order.
const describedTargets = {
  'loading': ids.loading,
  'error': ids.error,
  'helper': ids.helper,
  'none': ''
}

const describedKind = ({ loading, invalid, helperText }) => [
  { kind: 'loading', when: loading !== 'None' },
  { kind: 'error', when: Boolean(invalid) },
  { kind: 'helper', when: Boolean(helperText) }
].filter((entry) => entry.when).map((entry) => entry.kind)[0] ?? 'none'

// `option:disabled[value=""] { display: none }` — the empty placeholder is not
// decoration: it is what the CSS-only floating label reads to know the field is
// empty, and that rule takes it out of the dropdown. It carries `selected` only
// while no real option does.
const placeholderOption = (selected) => `<option value="" disabled${selected === 'None' ? ' selected' : ''}></option>`

const optionMarkup = (value, label, selected) => `<option value="${value}"${selected === label ? ' selected' : ''}>${label}</option>`

const optionGroups = {
  'False': (selected) => [
    optionMarkup('1', 'One', selected),
    optionMarkup('2', 'Two', selected),
    optionMarkup('3', 'Three', selected)
  ].join('\n'),

  'True': (selected) => `<optgroup label="First category">
${indent([optionMarkup('1', 'One', selected), optionMarkup('2', 'Two', selected)].join('\n'), '  ')}
</optgroup>
<optgroup label="Second category">
${indent([optionMarkup('3', 'Three', selected), optionMarkup('4', 'Four', selected)].join('\n'), '  ')}
</optgroup>`
}

const labelIds = {
  'True': ` id="${ids.label}"`,
  'False': ''
}

const helperMarkup = (text) => (text ? `<p id="${ids.helper}" class="helper-text">${text}</p>` : '')

const errorMarkup = (text) => (text ? `<p id="${ids.error}" class="error-text">${text}</p>` : '')

// Labelled by its own id **and** the label's, with the `visually-hidden` span
// the documentation asks for: without it a form announces "More information"
// ten times over without saying what about.
const linkMarkup = (text) => (text
  ? `<a href="#" id="${ids.link}" aria-labelledby="${ids.link} ${ids.label}" class="link link-small">
  ${text} <span class="visually-hidden">about the</span>
</a>`
  : '')

const roundedWrappers = {
  'True': (markup) => `<div class="use-rounded-corner-inputs">
${indent(markup, '  ')}
</div>`,
  'False': (markup) => markup
}

// Skeleton is carried by an ancestor, `<div aria-busy="true" inert>`, never by
// the component itself: every child of that container renders as a skeleton,
// and `inert` takes it out of the tab order and of the accessibility tree.
// Same markup for every component of the design system.
const skeletonWrapper = (markup, skeleton) => (skeleton
  ? `<div aria-busy="true" inert>
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`
  : markup)

const renderSelectInput = ({ label, selectedOption, outlined, leadingIcon, groupOptions, helperText, helperLink, invalid, errorText, state, loading, loadingTime, required, maxWidth, rounded }, icons = inlineIcons) => {
  const safeSelected = orElse(selectedOption, selectedOptions)
  const safeState = orElse(state, states)
  const safeLoading = orElse(loading, loadings)

  const rootClasses = ['select-input', maxWidthClasses[maxWidth ? 'True' : 'False']].filter(Boolean).join(' ')
  const containerClasses = ['select-input-container', outlinedClasses[outlined ? 'True' : 'False']].filter(Boolean).join(' ')
  const fieldClasses = ['select-input-field', loadingClasses[safeLoading]].filter(Boolean).join(' ')

  const describedBy = describedTargets[describedKind({ loading: safeLoading, invalid, helperText })]
  const containerStyle = (loadingTimeAttrs[safeLoading] ?? (() => ''))(loadingTime)

  const field = `<select class="${fieldClasses}" id="${ids.field}"${stateAttrs[safeState]}${requiredAttrs[required ? 'True' : 'False']}${invalidAttrs[invalid ? 'True' : 'False']}${describedBy ? ` aria-describedby="${describedBy}"` : ''}>
${indent([placeholderOption(safeSelected), optionGroups[groupOptions ? 'True' : 'False'](safeSelected)].join('\n'), '  ')}
</select>`

  const labelClasses = ['', requiredClasses[required ? 'True' : 'False']].filter(Boolean).join(' ')

  const container = `<div class="${containerClasses}"${containerStyle}>
${block([
    leadingIcon ? icons.heartEmpty : '',
    `<label${labelIds[helperLink ? 'True' : 'False']} for="${ids.field}"${labelClasses ? ` class="${labelClasses}"` : ''}>${label}</label>`,
    field,
    loaderBlocks[safeLoading]
  ], '  ')}
</div>`

  const root = `<div class="${rootClasses}">
${block([container, helperMarkup(helperText), errorMarkup(errorText), linkMarkup(helperLink)], '  ')}
</div>`

  return roundedWrappers[rounded ? 'True' : 'False'](root)
}

export default {
  title: 'Playground/Select input',
  argTypes: {
    label: {
      control: 'text',
      description: 'The floating label. It sits inside the field while nothing is selected and floats above it as soon as a real option carries `selected`.',
    },
    selectedOption: {
      name: 'Selected option',
      control: 'select',
      options: selectedOptions,
      description: '`None` leaves `<option value="" disabled selected>` in place and the label inside the field; any other value moves `selected` and makes the label float. This is the axis that shows the floating label.',
    },
    outlined: {
      control: 'boolean',
      description: '`select-input-container-outlined` — a transparent field with a full outline, in place of the filled one.',
    },
    leadingIcon: {
      name: 'Leading icon',
      control: 'boolean',
      description: 'An `<svg>` placed **before** the label, inside the container. The stylesheet positions it and shifts the field; there is no class on the icon itself.',
    },
    icon: {
      control: 'text',
      description: 'A whole `<svg>…</svg>` or an `<img>`, pasted as is, a bare `data:` URL, or only the inside of an SVG (`<path>`, `<g>`…), then wrapped in a 24×24 viewBox. Empty: the design system icon.',
      if: { arg: 'leadingIcon', truthy: true },
    },
    groupOptions: {
      name: 'Group options',
      control: 'boolean',
      description: 'Wraps the options in two `<optgroup>`. The placeholder stays outside them, since it must remain the first child of the `<select>`.',
    },
    helperText: {
      name: 'Helper text',
      control: 'text',
      description: 'A `<p class="helper-text">` after the container, pointed at by `aria-describedby`. Empty renders no paragraph. Set `Invalid` with an empty `Error text` to see the OUDS gap noted at the top of this file: the helper text vanishes and nothing replaces it.',
    },
    helperLink: {
      name: 'Helper link',
      control: 'text',
      description: 'A `.link.link-small` after the messages, labelled by its own id **and** the label’s (`aria-labelledby="<link> <label>"`), with the `visually-hidden` span the documentation asks for. Adding it is what gives the `<label>` an `id`.',
    },
    invalid: {
      control: 'boolean',
      description: 'Sets `aria-invalid="true"` and moves `aria-describedby` to the error message. That is all it does: `.error-text` is hidden by default and the stylesheet reveals it through `.select-input-container:has(…invalid…) ~ .error-text`.',
    },
    errorText: {
      name: 'Error text',
      control: 'text',
      description: 'Written once and revealed by the state, so it is **not** gated on `Invalid` — that is how the stylesheet is built, and how a real page writes it.',
    },
    state: {
      control: 'select',
      options: states,
      description: 'Orthogonal to `Loading`, unlike the buttons of this corpus: "the select can be disabled or not during the loading time depending on the context of use". The documentation has a "Disabled loading select" example combining the two.',
    },
    loading: {
      control: 'select',
      options: loadings,
      description: 'Adds `loading-indeterminate` or `loading-determinate` on the field, and prints the loader with its live region. The class only reveals them — in a real page the `<svg class="loader">` and the `role="status"` span are always in the container.',
    },
    loadingTime: {
      name: 'Loading time',
      control: 'text',
      description: '`--bs-loading-time` on the **container**, which is where `.select-input-container:has(.loading-determinate)` reads it. The buttons put `--bs-btn-loading-time` on the button itself instead — a copy-paste trap between the two.',
      if: { arg: 'loading', eq: 'Determinate' },
    },
    required: {
      control: 'boolean',
      description: 'Two things at once: `is-required` on the label, which draws the asterisk in an `::after`, and the `required` attribute on the `<select>`.',
    },
    maxWidth: {
      name: 'Max width',
      control: 'boolean',
      description: 'Here `component-max-width` is a **class on `.select-input`**, not a wrapper: the select input is one of the four components the stylesheet compounds that class with. On a button or a badge the constraint would have to go on an ancestor instead.',
    },
    rounded: {
      name: 'Rounded corners',
      control: 'boolean',
      description: '`use-rounded-corner-inputs` on an ancestor — normally `<body>`, a product-wide setting rather than a property of the field.',
    },
    skeleton: {
      control: 'boolean',
      description: 'Wraps the component in `<div aria-busy="true" inert>`, the way the design system puts a real component in a loading state. Same markup for every component.',
    }
  }
}

export const PlaygroundSelectInput = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { label, selectedOption, outlined, leadingIcon, icon, groupOptions, helperText, helperLink, invalid, errorText, state, loading, loadingTime, required, maxWidth, rounded, skeleton } = context.args

          return skeletonWrapper(renderSelectInput({
            label,
            selectedOption,
            outlined,
            leadingIcon,
            groupOptions,
            helperText,
            helperLink,
            invalid,
            errorText,
            state,
            loading,
            loadingTime,
            required,
            maxWidth,
            rounded,
          }, withCustomIcon(spriteIcons, icon)), skeleton)
        },
      },
    },
  },
  render: ({ label, selectedOption, outlined, leadingIcon, icon, groupOptions, helperText, helperLink, invalid, errorText, state, loading, loadingTime, required, maxWidth, rounded, skeleton }) => {
    return skeletonWrapper(renderSelectInput({
      label,
      selectedOption,
      outlined,
      leadingIcon,
      groupOptions,
      helperText,
      helperLink,
      invalid,
      errorText,
      state,
      loading,
      loadingTime,
      required,
      maxWidth,
      rounded,
    }, withCustomIcon(inlineIcons, icon)), skeleton)
  },
  args: {
    label: 'Select a number',
    selectedOption: 'None',
    outlined: false,
    leadingIcon: false,
    icon: '',
    groupOptions: false,
    helperText: 'Choose a number.',
    helperLink: 'More information',
    invalid: false,
    errorText: 'A number is required.',
    state: 'Enabled',
    loading: 'None',
    loadingTime: '5s',
    required: false,
    maxWidth: false,
    rounded: false,
    skeleton: false
  },
}
