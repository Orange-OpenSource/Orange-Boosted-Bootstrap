// Playground for Tag
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/tags/

const appearances = ['Muted', 'Emphasized']
const statuses = ['Neutral', 'Accent', 'Positive', 'Info', 'Warning', 'Negative']
const layouts = ['Text only', 'Text + bullet', 'Text + icon']
const sizes = ['Default', 'Small']
const states = ['Enabled', 'Loading', 'Disabled']

// Fix — Text + icon: a functional status (Positive, Info, Warning, Negative)
// carries its own icon, provided by the CSS through
// `<span class="tag-status-icon"></span>`; only the two non functional ones
// (Neutral, Accent) take an icon supplied by the product. Rendering the pasted
// SVG on every status is what made the layout look broken. Same rule as Badge
// icon, where it is already applied.
//
// Fix — Loading: the mapping emits no class for it, the spreadsheet expects one.
// The documentation settles it: `.loading` on the tag, a `.tag-loader` SVG and a
// `role="status"` message. GAP CLOSED IN FAVOUR OF THE DOCUMENTATION.
//
// The mapping emits `<span class="tag-icon si si-settings">`, a font icon coming
// from the documentation site stylesheet, which Storybook no longer loads since
// `preview-head.html` was removed: nothing showed up. The docs recommend an SVG
// from the sprite, which is what is used here.
//
// The canvas inlines the path so the icon always shows; the Code panel shows the
// sprite reference, which is what one writes in a real page. The `icon` control
// takes the *inside* of an SVG — a `<path>`, a `<g>`… — drawn in a 24×24
// viewBox, exactly as ButtonPlayground does.
const defaultIconPath = '<path d="M18.4 11.242 12 18.247l-6.4-7.005-.003-.004a3.285 3.285 0 0 1 .247-4.678 3.383 3.383 0 0 1 4.625.128l.979.92.552.525.552-.525.98-.92.009-.01a3.352 3.352 0 0 1 2.37-.97c1.852 0 3.354 1.483 3.354 3.313a3.29 3.29 0 0 1-.862 2.217l-.003.004Zm1.463-6.125A5.635 5.635 0 0 0 12 5.08c-2.185-2.118-5.694-2.105-7.863.038a5.475 5.475 0 0 0-.105 7.702L12 21.5l7.968-8.68a5.475 5.475 0 0 0-.105-7.703Z"/>'

// The `icon` control accepts either a whole `<svg>…</svg>` — paste one straight
// from the sprite, from Figma or from an export — or only its inside (a
// `<path>`, a `<g>`…), which is then wrapped in a 24×24 viewBox. A pasted
// element keeps its own viewBox, so it is drawn at the right scale whatever its
// coordinate system; its `width` and `height` attributes are dropped so the
// stylesheet goes on sizing the icon like any other.
const iconClass = 'tag-icon'

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

const spriteIcon = '<svg class="tag-icon" aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"/></svg>'

// A path typed in the `icon` control replaces the sprite reference on both
// sides: the Code panel would otherwise lie about what the canvas renders.
const resolveIcon = (icon, fallback) => (icon ? inlineIcon(icon) : fallback)

const statusClasses = {
  'Neutral': '',
  'Accent': 'tag-accent',
  'Positive': 'tag-positive',
  'Info': 'tag-info',
  'Warning': 'tag-warning',
  'Negative': 'tag-negative'
}

const appearanceClasses = {
  'Emphasized': '',
  'Muted': 'tag-muted'
}

const sizeClasses = {
  'Default': '',
  'Small': 'tag-small'
}

const roundedCornerClasses = {
  'True': '',
  'False': 'rounded-none'
}

const stateClasses = {
  'Enabled': '',
  'Loading': 'loading',
  'Disabled': 'disabled'
  // Skeleton is carried by an ancestor, `<div aria-busy="true" inert>`, never by
  // the tag: no entry here.
}

// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

// The icon of a functional status comes from the CSS: the pasted SVG is ignored
// there, exactly as on Badge icon.
const statusIcons = {
  'Positive': '<span class="tag-status-icon"></span>',
  'Info': '<span class="tag-status-icon"></span>',
  'Warning': '<span class="tag-status-icon"></span>',
  'Negative': '<span class="tag-status-icon"></span>'
}

const loader = `<svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="tag-loader" aria-hidden="true">
    <circle class="tag-loader-inner" cx="20" cy="20" r="15"></circle>
  </svg>`

// What comes before the label, layout by layout. `Loading` replaces it whatever
// the layout: the loader takes the place of the bullet or of the icon, as the
// documentation example shows.
const leadingLines = {
  'Text only': () => [],
  'Text + bullet': () => ['<span class="tag-bullet"></span>'],
  'Text + icon': ({ status, iconMarkup }) => [statusIcons[status] ?? iconMarkup],
  'Loading': () => [loader, '<span role="status" class="visually-hidden">Loading</span>']
}

const leadingOverride = {
  'Loading': 'Loading'
}

// Nothing before the label: the tag stays on one line, as the mapping emits it.
const tagTemplates = {
  'bare': ({ classes, label }) => `<p class="${classes}">${label}</p>`,
  'lines': ({ classes, lines, label }) => `<p class="${classes}">
${lines.map((line) => `  ${line}`).join('\n')}
  ${label}
</p>`
}

const renderTag = ({ appearance, status, layout, size, state, roundedCorner, label }, iconMarkup = inlineIcon(defaultIconPath)) => {
  const safeStatus = orElse(status, statuses)
  const safeState = orElse(state, states)

  const classes = [
    'tag',
    statusClasses[safeStatus],
    appearanceClasses[orElse(appearance, appearances)],
    sizeClasses[orElse(size, sizes)],
    roundedCornerClasses[(roundedCorner ? 'True' : 'False')],
    stateClasses[safeState]
  ].filter(Boolean).join(' ')

  const slot = leadingOverride[safeState] ?? orElse(layout, layouts)
  const lines = leadingLines[slot]({ status: safeStatus, iconMarkup })

  return tagTemplates[lines.length ? 'lines' : 'bare']({ classes, lines, label })
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
  title: 'Playground/Tag',
  argTypes: {
    appearance: {
      control: 'select',
      options: appearances,
    },
    status: {
      control: 'select',
      options: statuses,
    },
    layout: {
      control: 'select',
      options: layouts,
    },
    size: {
      control: 'select',
      options: sizes,
    },
    state: {
      control: 'select',
      options: states,
    },
    roundedCorner: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    icon: {
      control: 'text',
      description: 'A whole `<svg>…</svg>` or an `<img>`, pasted as is, a bare `data:` URL, or only the inside of an SVG (`<path>`, `<g>`…), then wrapped in a 24×24 viewBox. `Text + icon` layout, and Neutral or Accent only: a functional status carries its own icon, from the CSS. Empty: the design system icon.',
      if: { arg: 'layout', eq: 'Text + icon' },
    },
    skeleton: {
      control: 'boolean',
      description: 'Wraps the component in `<div aria-busy="true" inert>`, the way the design system puts a real component in a loading state. Same markup for every component.',
    }
  }
}

export const PlaygroundTag = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { appearance, status, layout, size, state, roundedCorner, label, icon, skeleton } = context.args

          return skeletonWrapper(renderTag({
            appearance,
            status,
            layout,
            size,
            state,
            roundedCorner,
            label,
          }, resolveIcon(icon, spriteIcon)), skeleton)
        },
      },
    },
  },
  render: ({ appearance, status, layout, size, state, roundedCorner, label, icon, skeleton }) => {
    return skeletonWrapper(renderTag({
      appearance,
      status,
      layout,
      size,
      state,
      roundedCorner,
      label,
    }, resolveIcon(icon, inlineIcon(defaultIconPath))), skeleton)
  },
  args: {
    appearance: 'Muted',
    status: 'Neutral',
    layout: 'Text only',
    size: 'Default',
    state: 'Enabled',
    roundedCorner: true,
    label: 'Label',
    icon: '',
    skeleton: false
  },
}
