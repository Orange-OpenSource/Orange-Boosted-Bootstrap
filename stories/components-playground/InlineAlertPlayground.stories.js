// Playground for Inline alert
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/alerts/#inline-alert
// Gap — State: Skeleton is applied on an ancestor: <div aria-busy="true" inert>. Same for every component.
//
// Fix — Neutral / Accent: these two statuses are "non functional", the CSS
// provides no icon for them. `<div class="alert-icon">` therefore stayed empty,
// which is what made them render without an icon. The documentation makes one
// mandatory there, supplied by the product. Same rule as Badge icon and Tag:
//
//   Neutral / Accent            → <svg> inside .alert-icon, from the `icon` control
//   Positive/Info/Warning/Neg   → .alert-icon alone, the CSS draws the icon
//
// The `icon` control is therefore only meaningful for Neutral and Accent.

const statuses = ['Neutral', 'Accent', 'Negative', 'Positive', 'Info', 'Warning']

// Figma property with no counterpart in the HTML: `State`. Only `Enabled` has a
// rendering, so there is nothing to expose and nothing to hold.

// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

// Statuses whose icon is provided by the CSS.
const functionalStatuses = ['Negative', 'Positive', 'Info', 'Warning']

// The canvas inlines the path so the icon always shows; the Code panel shows the
// sprite reference, which is what one writes in a real page. The `icon` control
// takes a whole `<svg>…</svg>` or only its inside — a `<path>`, a `<g>`… — drawn
// in a 24×24 viewBox, exactly as ButtonPlayground does.
const defaultIconPath = '<path d="M18.4 11.242 12 18.247l-6.4-7.005-.003-.004a3.285 3.285 0 0 1 .247-4.678 3.383 3.383 0 0 1 4.625.128l.979.92.552.525.552-.525.98-.92.009-.01a3.352 3.352 0 0 1 2.37-.97c1.852 0 3.354 1.483 3.354 3.313a3.29 3.29 0 0 1-.862 2.217l-.003.004Zm1.463-6.125A5.635 5.635 0 0 0 12 5.08c-2.185-2.118-5.694-2.105-7.863.038a5.475 5.475 0 0 0-.105 7.702L12 21.5l7.968-8.68a5.475 5.475 0 0 0-.105-7.703Z"/>'

// A pasted element keeps its own viewBox, so it is drawn at the right scale
// whatever its coordinate system; its `width` and `height` attributes are
// dropped so the stylesheet goes on sizing the icon like any other.
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

// What sits inside `.alert-icon`: nothing on a functional status, the icon
// supplied by the product otherwise.
const iconContents = Object.fromEntries(
  functionalStatuses.map((status) => [status, () => ''])
)

// Hidden label, derived from the status rather than exposed as a control: the
// two would drift apart. It is what a screen reader announces in place of the
// icon, which carries no text.
const statusMap = {
  'Neutral': 'Alert',
  'Accent': 'Alert',
  'Negative': 'Negative alert',
  'Positive': 'Positive alert',
  'Info': 'Info alert',
  'Warning': 'Warning alert'
}

const statusClasses = {
  'Neutral': '',
  'Accent': 'alert-accent',
  'Negative': 'alert-negative',
  'Positive': 'alert-positive',
  'Info': 'alert-info',
  'Warning': 'alert-warning'
}

const renderInlineAlert = ({ status, label, maxWidth }, iconMarkup = inlineIcon(defaultIconPath)) => {
  const safeStatus = orElse(status, statuses)
  const classes = [
    'alert',
    statusClasses[safeStatus]
  ].filter(Boolean).join(' ')

  const iconContent = (iconContents[safeStatus] ?? (() => iconMarkup))()

  return maxWidthWrapper(`<div class="${classes}">
  <div class="alert-icon">${iconContent}<p class="visually-hidden">${statusMap[safeStatus]}</p></div>
  <p class="alert-label">${label}</p>
</div>`, maxWidth)
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
  title: 'Playground/Inline alert',
  argTypes: {
    status: {
      control: 'select',
      options: statuses,
    },
    label: {
      control: 'text',
    },
    icon: {
      control: 'text',
      description: 'A whole `<svg>…</svg>` or an `<img>`, pasted as is, a bare `data:` URL, or only the inside of an SVG (`<path>`, `<g>`…), then wrapped in a 24×24 viewBox. Neutral and Accent only: a functional status carries its own icon, from the CSS. Empty: the design system icon.',
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

export const PlaygroundInlineAlert = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { status, label, icon, maxWidth, skeleton } = context.args

          return skeletonWrapper(renderInlineAlert({
            status,
            label,
            maxWidth,
          }, resolveIcon(icon, spriteIcon)), skeleton)
        },
      },
    },
  },
  render: ({ status, label, icon, maxWidth, skeleton }) => {
    return skeletonWrapper(renderInlineAlert({
      status,
      label,
      maxWidth,
    }, resolveIcon(icon, inlineIcon(defaultIconPath))), skeleton)
  },
  args: {
    status: 'Neutral',
    label: 'Label',
    icon: '',
    maxWidth: false,
    skeleton: false
  },
}
