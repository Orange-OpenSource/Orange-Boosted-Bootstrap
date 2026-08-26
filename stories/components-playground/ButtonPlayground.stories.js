// Playground for Button
//
// `Button - On colored bg` used to be a second file. It was the same component:
// one extra class on the <button>, and a coloured wrapper around it. It is now
// the `coloredBg` checkbox below, so the two are read and compared in one place.

const buttonVariants = ['Default', 'Strong', 'Brand', 'Minimal', 'Negative']
const layouts = ['Text only', 'Text + icon', 'Icon only']
const sizes = ['Default', 'Small']
const states = ['Enabled', 'Loading indeterminate', 'Loading determinate', 'Disabled']

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

// A background utility must always be paired with the colour theme that goes
// with it, carried by a *child* element so the background itself does not follow
// the attribute (utilities/background/). The documentation writes several
// pairings; the playground offers the one its own `on colored background`
// example uses, since the question the control answers is "what does
// `btn-on-colored-bg` change?", not "which surface". Swap the two values below
// to check another surface.
const coloredSurface = { surface: 'bg-surface-brand-primary', theme: 'light' }

const indent = (markup) => markup.split('\n').map((line) => (line ? `    ${line}` : line)).join('\n')

// `p-large` and the two nested <div> are the wrapper of the documentation
// examples, kept as is so the snippet can be pasted straight into a page.
const wrapper = ({ surface, theme }) => (markup) => `<div class="${surface} p-large">
  <div data-bs-theme="${theme}">
${indent(markup)}
  </div>
</div>`

// Unchecked leaves the markup alone: the button stands on the page background.
const backgroundWrappers = {
  'True': wrapper(coloredSurface),
  'False': (markup) => markup
}

const onBackground = (markup, coloredBg) => backgroundWrappers[coloredBg ? 'True' : 'False'](markup)

const onColoredBgClass = (coloredBg) => (coloredBg ? 'btn-on-colored-bg' : '')

// OUDS: "Negative and brand buttons should never be used on colored background."
// The combination stays reachable — one has to be able to see what it does — so
// the playground renders it and says so. The Code panel gets a comment, which is
// copied along with the markup; the canvas gets a banner, which is not, and
// which is deliberately styled outside the design system so it cannot be taken
// for a component.
const forbiddenOnBackground = ['Brand', 'Negative']

const warningFor = (variant, coloredBg) =>
  coloredBg && forbiddenOnBackground.includes(variant)
    ? `OUDS: a ${variant.toLowerCase()} button should never be used on a colored background.`
    : ''

const previewBanner = (warning) =>
  `<p style="margin:0 0 12px;padding:8px 12px;border-left:3px solid #b8460e;background:#fff6e8;color:#8a5300;font:600 12px/1.45 system-ui,sans-serif">${warning}</p>
`

const warned = (markup, warning, preview) =>
  warning ? `${preview ? previewBanner(warning) : ''}<!-- ${warning} -->
${markup}` : markup

// Left empty, the path below is used: it is the `heart-empty` symbol of the OUDS
// sprite, drawn in a 24×24 viewBox.
const defaultIcon = '<path d="M18.4 11.242 12 18.247l-6.4-7.005-.003-.004a3.285 3.285 0 0 1 .247-4.678 3.383 3.383 0 0 1 4.625.128l.979.92.552.525.552-.525.98-.92.009-.01a3.352 3.352 0 0 1 2.37-.97c1.852 0 3.354 1.483 3.354 3.313a3.29 3.29 0 0 1-.862 2.217l-.003.004Zm1.463-6.125A5.635 5.635 0 0 0 12 5.08c-2.185-2.118-5.694-2.105-7.863.038a5.475 5.475 0 0 0-.105 7.702L12 21.5l7.968-8.68a5.475 5.475 0 0 0-.105-7.703Z"/>'

// The path above is what the canvas draws: it shows up without depending on the
// hosted sprite. The Code panel shows the sprite reference instead — that is
// what one writes in a real page, and it keeps 450 characters of `d="M18.4…"`
// out of a snippet meant to be copied.
const spriteIcon = '<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"/></svg>'

// Written with the indentation it has once placed in the button, two spaces in.
const loadingLoader = `<svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
    <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
  </svg>`

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

const renderIcon = (icon) => (icon ? inlineIcon(icon) : '')

// `iconOverride` is only passed by the Code panel, and only as long as the user
// has not typed their own path: in that case theirs is shown, otherwise the
// snippet would lie about what it renders. `preview` works the same way: the
// canvas gets the warning banner, the Code panel gets the comment alone.
const variantClasses = {
  'Default': 'btn-default',
  'Strong': 'btn-strong',
  'Brand': 'btn-brand',
  'Minimal': 'btn-minimal',
  'Negative': 'btn-negative'
}

const sizeClasses = {
  'Default': '',
  'Small': 'btn-small'
}

const layoutClasses = {
  'Text only': '',
  'Text + icon': '',
  'Icon only': 'btn-icon'
}

// What the button contains, layout by layout. `Icon only` keeps the label, in a
// `visually-hidden` span: it is all a screen reader announces.
const layoutLines = {
  'Text only': ({ label }) => [label],
  'Text + icon': ({ label, iconMarkup }) => [iconMarkup, label],
  'Icon only': ({ label, iconMarkup }) => [iconMarkup, `<span class="visually-hidden">${label}</span>`]
}

const stateClasses = {
  'Enabled': '',
  'Loading indeterminate': 'loading-indeterminate',
  'Loading determinate': 'loading-determinate',
  'Disabled': ''
}

// A loading button is disabled while it loads — that is what the documentation
// examples do, and what keeps it out of reach during the wait.
const stateAttrs = {
  'Enabled': '',
  'Loading indeterminate': ' disabled',
  'Loading determinate': ' disabled',
  'Disabled': ' disabled'
}

// Only the determinate loader is timed: `--bs-btn-loading-time` drives the
// `rotate-determinate` animation, which draws the progress.
const stateStyles = {
  'Loading determinate': (loadingTime) => ` style="--bs-btn-loading-time: ${loadingTime};"`
}

// The loader and its status message come after the label, as in the
// documentation. A state absent from the table adds nothing.
const stateLines = {
  'Loading indeterminate': (label) => [loadingLoader, `<span role="status" class="visually-hidden">Loading ${label}</span>`],
  'Loading determinate': (label) => [loadingLoader, `<span role="status" class="visually-hidden">Loading ${label}: xx%</span>`]
}

const nothing = () => ''
const noLines = () => []

// `rounded` is a product-wide setting carried by an ancestor, so it goes inside
// the coloured surface, not around it.
const roundedWrappers = {
  'True': (markup) => `<div class="use-rounded-corner-buttons">${markup}</div>`,
  'False': (markup) => markup
}

const renderButton = ({ label, variant, layout, size, state, icon, rounded, loadingTime, coloredBg }, iconOverride, preview = true) => {
  const safeLayout = orElse(layout, layouts)
  const safeState = orElse(state, states)
  const safeVariant = orElse(variant, buttonVariants)

  const classes = [
    'btn',
    variantClasses[safeVariant],
    layoutClasses[safeLayout],
    sizeClasses[orElse(size, sizes)],
    onColoredBgClass(coloredBg),
    stateClasses[safeState]
  ].filter(Boolean).join(' ')

  const iconMarkup = iconOverride || renderIcon(icon || defaultIcon)
  const lines = [
    ...layoutLines[safeLayout]({ label, iconMarkup }),
    ...(stateLines[safeState] ?? noLines)(label)
  ]

  const buttonMarkup = `<button type="button" class="${classes}"${stateAttrs[safeState]}${(stateStyles[safeState] ?? nothing)(loadingTime)}>
${lines.map((line) => `  ${line}`).join('\n')}
</button>`

  return warned(
    onBackground(roundedWrappers[(rounded ? 'True' : 'False')](buttonMarkup), coloredBg),
    warningFor(safeVariant, coloredBg),
    preview
  )
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
  title: 'Playground/Button',
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Visible next to the icon, and carried by the `visually-hidden` span in the `Icon only` layout — where it is all a screen reader announces. Interpolated as is, so HTML goes through: paste `Line 1<br>Line 2`, or a `<strong>`, to see how the button behaves on several lines.',
    },
    variant: {
      name: 'Variant',
      control: 'select',
      options: buttonVariants,
    },
    coloredBg: {
      name: 'On colored background',
      control: 'boolean',
      description: 'Adds `btn-on-colored-bg` and wraps the button in the surface the documentation pairs it with — `bg-surface-brand-primary` carrying `data-bs-theme="light"` on a child, so the background itself does not follow the theme (utilities/background/). OUDS reserves this variant for `Default`, `Strong` and `Minimal`; `Brand` and `Negative` stay reachable, with a warning.',
    },
    layout: {
      name: 'Layout',
      control: 'select',
      options: layouts,
    },
    size: {
      name: 'Size',
      control: 'select',
      options: sizes,
      description: '`btn-small` — 40 px high, `label-medium` typography, smaller icon and paddings (`scss/_buttons.scss`). Not in the published 1.4.0 stylesheet yet: switch the CSS source to the repository build to see it.',
    },
    rounded: {
      name: 'Rounded corners',
      control: 'boolean',
    },
    state: {
      name: 'State',
      control: 'select',
      options: stateOptions,
      description: 'The two loading states are the two documented loaders: `loading-indeterminate` spins without end, `loading-determinate` draws a progress. Both disable the button while it loads.',
    },
    loadingTime: {
      name: 'Loading time',
      control: 'text',
      description: 'Determinate loader only: the `--bs-btn-loading-time` custom property, any CSS duration — `5s`, `800ms`.',
      if: { arg: 'state', eq: 'Loading determinate' },
    },
    icon: {
      name: 'Icon content',
      control: 'text',
      description: 'A whole `<svg>…</svg>` or an `<img>`, pasted as is, a bare `data:` URL, or only the inside of an SVG (`<path>`, `<g>`…), then wrapped in a 24×24 viewBox. Empty: the design system icon.',
      if: { arg: 'layout', neq: 'Text only' },
    }
  }
}

export const PlaygroundButton = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { label, variant, layout, size, state, icon, rounded, loadingTime, coloredBg } = context.args

          return skeletonWrapper(renderButton({
            label,
            variant,
            layout,
            size,
            state: baseState(state),
            icon,
            rounded,
            loadingTime,
            coloredBg,
          }, icon ? '' : spriteIcon, false), isSkeleton(state))
        },
      },
    },
  },
  render: ({ label, variant, layout, size, state, icon, rounded, loadingTime, coloredBg }) => {
    return skeletonWrapper(renderButton({
      label,
      variant,
      layout,
      size,
      state: baseState(state),
      icon,
      rounded,
      loadingTime,
      coloredBg,
    }), isSkeleton(state))
  },
  args: {
    label: 'Label',
    variant: 'Default',
    coloredBg: false,
    layout: 'Text + icon',
    size: 'Default',
    rounded: false,
    state: 'Enabled',
    loadingTime: '5s',
    icon: '',
  },
}
