// Playground for Link
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/links/
//
// Gap closed — Density: `scss/_links.scss` does carry `.link-compact`, which
// lowers `--bs-link-min-height` and the block padding, and has a rule of its own
// for `.link-small`. The property is no longer frozen: it is the `density`
// control. The mapping still has no `when` for it — MAPPING TO BE UPDATED.
//
// Gap closed — External link: `.link-external` is defined next to
// `.link-chevron` in the same file; it draws the external icon in an `::after`
// through a mask. It is a layout, at the same level as Next and Previous.
//
// Fix — Visited: the class is `visited-links`, and it lives in
// `scss/_reboot.scss`, not in `_links.scss` — hence the wrong one being used. It
// styles both `&:visited` and `a:visited`, so it works on the link itself. It
// only shows once the browser has the URL in its history, which `href="#"` never
// gives: `href="."` does, since the current page is by definition visited.
//
// `Link - On colored bg` used to be a second file. It was the same component:
// one extra class on the <a>, and a coloured wrapper around it. It is now the
// `coloredBg` checkbox below, so the two are read and compared in one place.

const layouts = ['Next', 'Previous', 'External', 'Text only', 'Text + icon', 'Visited']
const densities = ['Default', 'Compact']
const sizes = ['Default', 'Small']
const states = ['Enabled', 'Disabled']

// A background utility must always be paired with the colour theme that goes
// with it, carried by a *child* element so the background itself does not follow
// the attribute (utilities/background/). The playground offers the pairing the
// documentation's own `on colored background` example uses: the question the
// control answers is "what does `link-on-colored-bg` change?", not "which
// surface". Swap the two values below to check another surface.
const coloredSurface = { surface: 'bg-surface-brand-primary', theme: 'light' }

const indent = (markup) => markup.split('\n').map((line) => (line ? `    ${line}` : line)).join('\n')

// `p-large` and the two nested <div> are the wrapper of the documentation
// examples, kept as is so the snippet can be pasted straight into a page.
const wrapper = ({ surface, theme }) => (markup) => `<div class="${surface} p-large">
  <div data-bs-theme="${theme}">
${indent(markup)}
  </div>
</div>`

// Unchecked leaves the markup alone: the link stands on the page background.
const backgroundWrappers = {
  'True': wrapper(coloredSurface),
  'False': (markup) => markup
}

const onBackground = (markup, coloredBg) => backgroundWrappers[coloredBg ? 'True' : 'False'](markup)

const onColoredBgClass = (coloredBg) => (coloredBg ? 'link-on-colored-bg' : '')

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

// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

const densityClasses = {
  'Default': '',
  'Compact': 'link-compact'
}

const sizeClasses = {
  'Default': '',
  'Small': 'link-small'
}

const stateMap = {
  'Enabled': ' href="#"',
  'Disabled': ' aria-disabled="true"'
  // Hover, Focus, Pressed and Skeleton are Figma states rendered by CSS
  // pseudo-classes or by an ancestor: they are not values of the control, so
  // they are not entries here.
}

// The classes each layout *adds* on top of `link`, then the template it fills.
// Splitting the two keeps the class lists readable and the templates free of any
// condition. `link` and `link-on-colored-bg` are common to every layout, so they
// are assembled in the render function rather than repeated six times.
//
// `icon-link` is kept because the documentation example carries it, but it is
// compiled only under `$enable-bootstrap-compatibility`, which is `false` by
// default: `.link` already sizes a child `svg`, so the icon shows either way.
//
// `link-previous` replaces `back`, which `_links.scss` marks as deprecated and
// due for removal in v1.6.0.
const layoutClasses = {
  'Text only': [],
  'Visited': ['visited-links'],
  'Text + icon': ['icon-link'],
  'Next': ['link-chevron'],
  'Previous': ['link-chevron', 'link-previous'],
  'External': ['link-external']
}

const layoutTemplates = {
  'Text only': ({ classes, disabledAttr, label }) =>
    `<a class="${classes}"${disabledAttr}>${label}</a>`,

  'Visited': ({ classes, label }) =>
    `<!-- "visited-links" comes from scss/_reboot.scss; href="." points at the current page, which the browser always has in its history -->
<a class="${classes}" href=".">${label}</a>`,

  'Text + icon': ({ classes, disabledAttr, label, icons }) =>
    `<a class="${classes}"${disabledAttr}>
  ${icons.heartEmpty}
  ${label}
</a>`,

  'Next': ({ classes, disabledAttr, label }) =>
    `<a class="${classes}"${disabledAttr}>${label}</a>`,

  'Previous': ({ classes, disabledAttr, label }) =>
    `<a class="${classes}"${disabledAttr}>${label}</a>`,

  'External': ({ classes, disabledAttr, label }) =>
    `<a class="${classes}"${disabledAttr}>${label}</a>`
}

// On a coloured background the visited colour is not part of the design system —
// the mono palette of `link-on-colored-bg` has no visited value. The layout falls
// back on the plain link, and says so rather than rendering a colour that does
// not exist.
const layoutOnBackground = {
  'Visited': 'Text only'
}

// Preview only — two reasons the visited colour cannot show on its own.
//
// `visited-links` sets `color: var(--bs-link-color, var(--bs-color-action-visited))`
// (scss/_reboot.scss). On a `.link`, `--bs-link-color` is already defined by
// `%link-properties`, so the fallback is never reached and the amethyst never
// applies. The class only bites on a bare `<a>`. GAP TO BE RAISED WITH OUDS.
//
// And `:visited` only fires on a URL the browser already has in its history,
// which a preview frame never has. The canvas therefore carries the rule the
// class is meant to produce, on the link itself, so the colour can be seen. The
// Code panel gets none of it: the snippet stays plain OUDS markup.
const visitedStyle = `<style>
  .link.visited-links { --bs-link-color: var(--bs-color-action-visited); }
</style>
`

// Preview only — regression on `main`, introduced with the `link-previous`
// rename. `_links.scss` writes the two alternatives
// `&:not(.back)::after, &:not(.link-previous)::after`, which is an *or* of two
// negations: on a `.link-previous`, the first one still matches and a second
// chevron is drawn on the right. `.back` alone has the same problem, the other
// way round. Only carrying both classes at once avoids it — which defeats the
// deprecation. One selector fixes it: `&:not(.back):not(.link-previous)::after`.
// The published 1.4.0 stylesheet, which only knows `.back`, is not affected.
// BUG TO BE REPORTED. Neutralised here so the layout can be read.
const previousStyle = `<style>
  .link-chevron.link-previous::after { content: none; }
</style>
`

const previewExtras = {
  'Visited': visitedStyle,
  'Previous': previousStyle
}

const notOnBackground = (layout, coloredBg) =>
  (coloredBg ? layoutOnBackground[layout] : undefined) ?? layout

const visitedWarning = (layout, coloredBg) =>
  coloredBg && layout === 'Visited'
    ? '<!-- OUDS: no visited colour on a colored background — rendered as a plain link. -->\n'
    : ''

const renderLink = ({ layout, size, density, state, label, coloredBg }, icons = inlineIcons, preview = true) => {
  const safeLayout = notOnBackground(orElse(layout, layouts), coloredBg)

  const classes = [
    'link',
    onColoredBgClass(coloredBg),
    ...layoutClasses[safeLayout],
    sizeClasses[orElse(size, sizes)],
    densityClasses[orElse(density, densities)]
  ].filter(Boolean).join(' ')

  const extras = preview ? (previewExtras[safeLayout] ?? '') : ''

  return extras + visitedWarning(orElse(layout, layouts), coloredBg) + onBackground(layoutTemplates[safeLayout]({
    classes,
    disabledAttr: stateMap[orElse(state, states)],
    label,
    icons
  }), coloredBg)
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
  title: 'Playground/Link',
  argTypes: {
    layout: {
      control: 'select',
      options: layouts,
    },
    size: {
      control: 'select',
      options: sizes,
    },
    density: {
      control: 'select',
      options: densities,
      description: '`link-compact` lowers the minimum height and the block padding, and has a rule of its own when combined with `Small` (`scss/_links.scss`).',
    },
    state: {
      control: 'select',
      options: states,
    },
    coloredBg: {
      name: 'On colored bg',
      control: 'boolean',
      description: 'Adds `link-on-colored-bg` and wraps the link in the surface the documentation pairs it with — `bg-surface-brand-primary` carrying `data-bs-theme="light"` on a child, so the background itself does not follow the theme (utilities/background/). `Visited` has no colour of its own there: it falls back to a plain link, and says so.',
    },
    label: {
      control: 'text',
      description: 'Interpolated as is, so HTML goes through: paste `Ligne 1<br>Ligne 2`, or a `<strong>`, to see how the link behaves on several lines.',
    },
    icon: {
      control: 'text',
      description: 'A whole `<svg>…</svg>` or an `<img>`, pasted as is, a bare `data:` URL, or only the inside of an SVG (`<path>`, `<g>`…), then wrapped in a 24×24 viewBox. Empty: the design system icon.',
      if: { arg: 'layout', eq: 'Text + icon' },
    },
    skeleton: {
      control: 'boolean',
      description: 'Wraps the component in `<div aria-busy="true" inert>`, the way the design system puts a real component in a loading state. Same markup for every component.',
    }
  }
}

export const PlaygroundLink = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { layout, size, density, state, label, icon, coloredBg, skeleton } = context.args

          return skeletonWrapper(renderLink({
            layout,
            size,
            density,
            state,
            label,
            coloredBg,
          }, withCustomIcon(spriteIcons, icon), false), skeleton)
        },
      },
    },
  },
  render: ({ layout, size, density, state, label, icon, coloredBg, skeleton }) => {
    return skeletonWrapper(renderLink({
      layout,
      size,
      density,
      state,
      label,
      coloredBg,
    }, withCustomIcon(inlineIcons, icon)), skeleton)
  },
  args: {
    layout: 'Next',
    size: 'Default',
    density: 'Default',
    state: 'Enabled',
    coloredBg: false,
    label: 'Label',
    icon: '',
    skeleton: false
  },
}
