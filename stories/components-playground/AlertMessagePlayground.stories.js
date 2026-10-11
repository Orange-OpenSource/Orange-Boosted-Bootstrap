// Playground for Alert message
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/alerts/
//
// Alert message and Inline alert share `alerts.mdx` and the base `.alert`
// class, and they are two components. Inline alert is the bare `.alert`, with
// an `.alert-label` sitting straight beside the icon; it has its own file in
// the corpus. Alert message adds `.alert-message` and the whole
// `.alert-container` / `.alert-text-container` / `.alert-action-container` /
// `.alert-close-container` scaffolding, which is what lets it carry a
// description, a list, an action and a close button. The two markups only
// overlap at the outer `<div class="alert">`.
//
// THE POINT THAT SHAPES THIS FILE — two families of status.
// `scss/_alert.scss` hides the functional icon behind two guards:
//
//   .alert-icon { &:where(:not(:has(svg, img, .icon))) { &::before {
//     background-color: currentcolor; mask-image: escape-svg(var(--bs-alert-icon)) } } }
//   .alert-negative { --bs-alert-icon: var(--bs-error-icon) }   // same for positive, info, warning
//
//   - Functional statuses (Negative, Positive, Info, Warning) declare
//     `--bs-alert-icon`, so `.alert-icon` must stay and must stay **empty** of
//     `<svg>`, `<img>` and `.icon`: anything inside breaks the `:not(:has(…))`
//     and silently removes the functional icon. The documentation says the same
//     in prose — "you shouldn't add any icon in those alert messages". The
//     playground lets you reach that combination and warns twice over rather
//     than pretending the control is inert.
//   - Non-functional statuses (Neutral, Accent) declare **no**
//     `--bs-alert-icon`. An empty `.alert-icon` there gives an invalid
//     `mask-image`, so no mask at all: a solid 20 px square in `currentcolor`.
//     That is why `Icon` removes the *whole container* and not just its
//     contents — exactly what the documentation's "iconless alert message"
//     example does.
//
// THE ICON IS ONE CONTROL WITH THREE VALUES, NOT A CHECKBOX PLUS A FIELD.
// Both had to disappear on a functional status, and `Icon content` also had to
// disappear when there is no container to put anything in — two conditions on
// one control, which `if` cannot carry. So they are merged, the way
// `conventions.md` §8 says to: the three values are the three shapes the
// container can take, and `Icon content` then depends on a single one of them.
//
//   None                 no `.alert-icon` at all
//   Custom icon          the container, holding what `Icon content` carries
//
// `Icon` is gated on `if: { arg: 'status', oneOf: ['Neutral', 'Accent'] }` and
// `Icon content` on `if: { arg: 'icon', eq: 'Custom icon' }`. `oneOf` is not
// Storybook's — its `if` knows only `eq`, `neq`, `truthy` and `exists`, and
// falls back on a truthiness test for anything else — so Storybook shows `Icon`
// on all six statuses while the standalone preview hides it on the functional
// four. `Icon content`'s own gate is `eq`, exact on both surfaces.
//
// The combination the design system forbids stays reachable: choose
// `Custom icon` on `Neutral`, then move the status to a functional one. The
// canvas and the snippet both warn about it.
//
// Two other documented ways of putting a non-functional icon are not exposed:
// `mask-image` on `.alert-icon`, or `--bs-alert-icon` on the `.alert` itself.
// Same visual result, nothing inside the container — a fourth axis for no gain.
//
// No `Max width` control: the documentation page shows no
// `.component-max-width` on an alert, and the stylesheet only ever compounds
// that class with the form components.
//
// The bullet list is a count with arrows plus one text field per bullet, and
// the fields carry `if: { arg: 'bullets', gte: N }`. Storybook's `if` only
// understands `eq`, `neq`, `truthy` and `exists`: it reads a `gte` as a
// truthiness test, so it shows the three fields as soon as there is one bullet,
// while the standalone preview — which honours `gte` — shows exactly the
// rendered ones. Bullet 1 is gated on `neq: 0` instead, which is exact on both
// surfaces. An `object` control was tried in between: it hides nothing wrongly,
// but it turns adding a bullet into typing JSON, and the arrows are the point.
//
// No control on the texts the canvas never shows. The hidden text of the icon
// is what the status *means*, spelled out for a screen reader, so it is
// derived from the status; the close button's accessible name is always
// "Close". Both are constants below.

const statuses = ['Negative', 'Positive', 'Info', 'Warning', 'Neutral', 'Accent']
const iconModes = ['Custom icon', 'None']
const labelElements = ['p', 'h2', 'h3', 'h4', 'h5', 'h6']
const actions = ['None', 'After the text', 'In the action container']
const actionElements = ['Button', 'Link']

// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

const indent = (markup, pad) => markup.split('\n').map((line) => (line ? `${pad}${line}` : line)).join('\n')

const statusClasses = {
  'Negative': 'alert-negative',
  'Positive': 'alert-positive',
  'Info': 'alert-info',
  'Warning': 'alert-warning',
  // `.alert` alone renders Neutral: no status class in front of it.
  'Neutral': '',
  'Accent': 'alert-accent'
}

// Where the icon comes from, which decides what may sit inside the container.
const iconSources = {
  'Negative': 'stylesheet',
  'Positive': 'stylesheet',
  'Info': 'stylesheet',
  'Warning': 'stylesheet',
  'Neutral': 'element',
  'Accent': 'element'
}

// The `Icon content` control accepts either a whole `<svg>…</svg>` or an
// `<img>` — paste one straight from the sprite, from Figma or from an export —
// a bare `data:` URL, or only the inside of an SVG (a `<path>`, a `<g>`…),
// which is then wrapped in a 24×24 viewBox. A pasted element keeps its own
// viewBox, so it is drawn at the right scale whatever its coordinate system;
// its `width` and `height` attributes are dropped so the stylesheet goes on
// sizing the icon like any other.
const defaultIconPath = '<path d="M18.4 11.242 12 18.247l-6.4-7.005-.003-.004a3.285 3.285 0 0 1 .247-4.678 3.383 3.383 0 0 1 4.625.128l.979.92.552.525.552-.525.98-.92.009-.01a3.352 3.352 0 0 1 2.37-.97c1.852 0 3.354 1.483 3.354 3.313a3.29 3.29 0 0 1-.862 2.217l-.003.004Zm1.463-6.125A5.635 5.635 0 0 0 12 5.08c-2.185-2.118-5.694-2.105-7.863.038a5.475 5.475 0 0 0-.105 7.702L12 21.5l7.968-8.68a5.475 5.475 0 0 0-.105-7.703Z"/>'

const setAttr = (attrs, name, value) => {
  const re = new RegExp(`\\s${name}="[^"]*"`, 'i')

  return re.test(attrs) ? attrs.replace(re, ` ${name}="${value}"`) : `${attrs} ${name}="${value}"`
}

// Nothing pasted, or only the inside of an SVG: it goes in a 24×24 wrapper.
const wrapIcon = (icon) => `<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">${icon}</svg>`

// Some exports carry only `width` and `height`, no `viewBox`. Stripping the two
// would leave the drawing without a coordinate system: it would be scaled from
// the default 300×150 user space and disappear. The viewBox is derived from
// them first.
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

// An `<img>` is as legitimate as an SVG — the stylesheet sizes `svg, img,
// .icon` alike — so a pasted image is kept as an image rather than wrapped in
// an `<svg>`, where it would not render.
const keepImage = (icon, opening) => {
  const attrs = setAttr(setAttr(opening[1].replace(/\s(?:width|height)="[^"]*"/gi, ''), 'aria-hidden', 'true'), 'alt', '')

  return icon.replace(/^\s*<img[^>]*>/i, `<img${attrs}>`).trim()
}

// A `data:image/svg+xml` URL copied from an editor carries double quotes and
// spaces: left as they are, the first quote would close the attribute and the
// image would be broken. They are percent-encoded.
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

// The canvas inlines the path so the icon always shows; the Code panel prints
// the sprite reference, which is what one writes in a real page. An SVG `<use>`
// does not cross origins, so a sprite reference renders nothing in Storybook.
// A path typed in the control replaces both, since the Code panel would
// otherwise lie about what the canvas renders.
const inlineIcons = { heartEmpty: inlineIcon(defaultIconPath) }
const spriteIcons = { heartEmpty: '<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"/></svg>' }

const withCustomIcon = (icons, icon) => (icon ? { heartEmpty: inlineIcon(icon) } : icons)

// What the user pasted, but only in the mode that reads it: `Icon content` keeps
// its value when the mode moves away from `Custom icon`, and the markup must not
// keep using it behind a control the panel is no longer showing.
const customIcon = (icon, iconContent) => (icon === 'Custom icon' ? iconContent : '')

// The hidden text is not a control: "colour should not be the only way to
// convey information", so what it announces is the meaning of the status. A
// non-functional status has no meaning to spell out and carries none.
const statusTexts = {
  'Negative': 'Error',
  'Positive': 'Success',
  'Info': 'Information',
  'Warning': 'Warning',
  'Neutral': '',
  'Accent': ''
}

// That text has two homes, and it is the icon that decides which. With an icon
// container it is a `<p>` inside it; without one there is nowhere left to put
// it, so it becomes a prefix of the visible label.
const hiddenTexts = {
  'in-icon': (text) => (text ? `<p class="visually-hidden">${text}</p>` : ''),
  'in-label': (text) => (text ? `<span class="visually-hidden">${text}: </span>` : '')
}

const iconContainers = {
  'stylesheet': ({ hidden }) => `<div class="alert-icon">${hidden}</div>`,
  'element': ({ hidden, icon }) => `<div class="alert-icon">
  ${icon}
  ${hidden}
</div>`
}

// OUDS forbids some combinations the markup allows. They stay reachable — one
// has to be able to see what they do — and the story says why they are wrong
// twice over: a comment that travels with the copied markup, and a banner in
// the canvas, which does not, and which is deliberately styled outside the
// design system so it cannot be mistaken for a component. The two helpers below
// are identical on every component of the corpus that has such a combination.
const warningBanner = (warning) =>
  `<div class="alert alert-message alert-negative mb-medium" role="alert">
  <div class="alert-icon"><p class="visually-hidden">Warning</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">${warning}</p>
    </div>
  </div>
</div>
`

const warned = (markup, warning, preview) => (warning
  ? `${preview ? warningBanner(warning) : ''}<!-- ${warning} -->
${markup}`
  : markup)

// Here: an icon inside the container of a functional alert silently removes the
// functional icon, and the resulting markup is not what the design system
// documents.
const warningFor = (status, icon, iconContent) =>
  (Boolean(icon) && Boolean(iconContent) && iconSources[status] === 'stylesheet'
    ? 'OUDS: an element inside .alert-icon breaks :not(:has(svg, img, .icon)) and removes the functional icon. Leave the container empty on a functional status.'
    : '')

const labelTemplates = {
  'p': ({ prefix, label }) => `<p class="alert-label">${prefix}${label}</p>`,
  'h2': ({ prefix, label }) => `<h2 class="alert-label">${prefix}${label}</h2>`,
  'h3': ({ prefix, label }) => `<h3 class="alert-label">${prefix}${label}</h3>`,
  'h4': ({ prefix, label }) => `<h4 class="alert-label">${prefix}${label}</h4>`,
  'h5': ({ prefix, label }) => `<h5 class="alert-label">${prefix}${label}</h5>`,
  'h6': ({ prefix, label }) => `<h6 class="alert-label">${prefix}${label}</h6>`
}

// The bullets are drawn by `.alert-text-container ul > li::before`, not by the
// Bullet list component: an alert message carries its own, level 0 only.
const bulletList = (items) => (items.length
  ? `<ul>
${items.map((item) => `  <li>${item}</li>`).join('\n')}
</ul>`
  : '')

const actionTemplates = {
  'Button': (label) => `<button class="link">${label}</button>`,
  'Link': (label) => `<a class="link" href="#">${label}</a>`
}

// The close button's accessible name never varies, so it is a constant rather
// than a control. It is carried by a `visually-hidden` span, the method the
// documentation prefers over `aria-label` and `aria-labelledby`.
const closeLabel = 'Close'

// `.alert-close-container` is not optional here. It sets `container-type: size`
// around the button, and that container query is what rounds the button's
// bottom-right corner on a rounded single-line alert — measured `border-radius`
// `0 12px 12px 0` with it, `0 12px 0 0` without. The documentation's own
// example always has it, so the playground always writes it.
const closeMarkup = () => `<div class="alert-close-container">
  <button class="btn-close" data-bs-dismiss="alert">
    <span class="visually-hidden">${closeLabel}</span>
  </button>
</div>`

const roundedWrappers = {
  'True': (markup) => `<div class="use-rounded-corner-alert">
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

const block = (parts, pad) => parts.filter(Boolean).map((part) => indent(part, pad)).join('\n')

const renderAlertMessage = ({ status, icon, iconContent, labelElement, label, description, bullets, bullet1, bullet2, bullet3, action, actionElement, actionLabel, closeButton, rounded }, icons = inlineIcons, preview = true) => {
  const safeStatus = orElse(status, statuses)
  const safeLabelElement = orElse(labelElement, labelElements)
  const safeAction = orElse(action, actions)
  const safeActionElement = orElse(actionElement, actionElements)

  const classes = ['alert', 'alert-message', statusClasses[safeStatus]].filter(Boolean).join(' ')
  const source = iconSources[safeStatus]
  const safeIcon = orElse(icon, iconModes)

  // The icon can only be *removed* on a non-functional status. On Negative,
  // Positive, Info and Warning the stylesheet draws it from `--bs-alert-icon`
  // and it is the container that carries the status: taking it away would
  // leave the meaning to the colour alone, so `None` is ignored there.
  const removable = { 'stylesheet': false, 'element': true }[source]
  const iconShown = removable ? safeIcon !== 'None' : true
  const custom = customIcon(safeIcon, iconContent)
  const warning = warningFor(safeStatus, iconShown, custom)
  const hiddenText = statusTexts[safeStatus]

  const iconBlock = iconShown
    ? iconContainers[custom ? 'element' : source]({
      hidden: hiddenTexts['in-icon'](hiddenText),
      icon: icons.heartEmpty
    })
    : ''

  const items = [bullet1, bullet2, bullet3]
    .slice(0, Math.max(0, Math.min(3, Number(bullets) || 0)))
    .filter(Boolean)

  const textContainer = `<div class="alert-text-container">
${block([
    labelTemplates[safeLabelElement]({ prefix: iconShown ? '' : hiddenTexts['in-label'](hiddenText), label }),
    description ? `<p>${description}</p>` : '',
    bulletList(items)
  ], '  ')}
</div>`

  const actionMarkup = actionTemplates[safeActionElement](actionLabel)
  const inlineAction = safeAction === 'After the text' ? actionMarkup : ''
  const containerAction = safeAction === 'In the action container' ? actionMarkup : ''
  const close = closeButton ? closeMarkup() : ''

  const actionContainer = [containerAction, close].filter(Boolean).length
    ? `<div class="alert-action-container">
${block([containerAction, close], '  ')}
</div>`
    : ''

  const alert = `<div class="${classes}">
${block([
    iconBlock,
    `<div class="alert-container">
${block([textContainer, inlineAction], '  ')}
</div>`,
    actionContainer
  ], '  ')}
</div>`

  const wrapped = roundedWrappers[rounded ? 'True' : 'False'](alert)

  return warned(wrapped, warning, preview)
}

export default {
  title: 'Playground/Alert message',
  argTypes: {
    status: {
      name: 'Status',
      control: 'select',
      options: statuses,
      description: 'The first four are functional: the stylesheet draws their icon from `--bs-alert-icon`, and `.alert-icon` must stay empty. `Neutral` and `Accent` declare no such variable — they need an element inside the container, or no container at all.',
    },
    label: {
      name: 'Label',
      control: 'text',
      description: 'Interpolated as is, so HTML goes through.',
    },
    labelElement: {
      name: 'Label element',
      control: 'select',
      options: labelElements,
      description: 'The documentation asks for semantics that match the context: a `<p>` when the label stands alone, a heading when it introduces a description or a list. The class stays `alert-label` either way.',
    },
    description: {
      name: 'Description',
      control: 'text',
      description: 'A `<p>` after the label, inside `.alert-text-container`. Empty: no paragraph at all.',
    },
    bullets: {
      name: 'Bullets',
      control: { type: 'number', min: 0, max: 3, step: 1 },
      description: 'How many bullets in the list, from the arrows. `0` renders no `<ul>` at all. The markers come from `.alert-text-container ul > li::before`: the alert draws its own, level 0 only, and does not use the Bullet list component.',
    },
    bullet1: {
      name: 'Bullet 1',
      control: 'text',
      if: { arg: 'bullets', neq: 0 },
    },
    bullet2: {
      name: 'Bullet 2',
      control: 'text',
      description: 'Shown from two bullets. Storybook cannot express that — its `if` has no `gte` and falls back on a truthiness test — so it shows this field from the first bullet; the standalone preview hides it until the second.',
      if: { arg: 'bullets', gte: 2 },
    },
    bullet3: {
      name: 'Bullet 3',
      control: 'text',
      description: 'Shown from three bullets, with the same reservation as `Bullet 2` on the Storybook side.',
      if: { arg: 'bullets', gte: 3 },
    },
    action: {
      name: 'Action',
      control: 'select',
      options: actions,
      description: 'Both placements are documented and they are **not** interchangeable: only the first raises the minimum height, through `.alert-message:has(.alert-container > .link)`.',
    },
    actionElement: {
      name: 'Action element',
      control: 'select',
      options: actionElements,
      description: 'A `.link` is a `<button>` when it triggers something in the page and an `<a href>` when it navigates. The documentation example uses the button.',
      if: { arg: 'action', neq: 'None' },
    },
    actionLabel: {
      name: 'Action label',
      control: 'text',
      if: { arg: 'action', neq: 'None' },
    },
    closeButton: {
      name: 'Close button',
      control: 'boolean',
      description: '`.btn-close` with `data-bs-dismiss="alert"`, always inside its `.alert-close-container`. Without the alert JS plugin loaded the button shows and dismisses nothing — Storybook loads it, a bare HTML page does not.',
    },
    icon: {
      name: 'Icon',
      control: 'select',
      options: iconModes,
      description: 'The three shapes the icon container can take. `None` removes the **whole** `.alert-icon`, not just its contents — an empty container on a non-functional status gives an invalid `mask-image`, so no mask at all: a solid 20 px square, which is why the documentation calls the iconless form an "iconless alert message". `Custom icon` puts what `Icon content` carries inside it. Only `Neutral` and `Accent` reach this control: a functional status draws its icon from `--bs-alert-icon` and keeps the container whatever is chosen here, since the colour would otherwise carry the meaning alone. Gated on the status with `oneOf`, which the standalone preview honours and Storybook ignores.',
      if: { arg: 'status', oneOf: ['Neutral', 'Accent'] },
    },
    iconContent: {
      name: 'Icon content',
      control: 'text',
      description: 'A whole `<svg>…</svg>` or an `<img>`, pasted as is, a bare `data:` URL, or only the inside of an SVG (`<path>`, `<g>`…), then wrapped in a 24×24 viewBox. Empty falls back on the design system icon. Only on `Custom icon`, and therefore only on `Neutral` and `Accent` — that gate is an `eq`, exact on both surfaces. On a functional status any element inside the container removes the functional icon; the combination stays reachable by choosing `Custom icon` first and then moving the status, and the canvas and the snippet both warn about it.',
      if: { arg: 'icon', eq: 'Custom icon' },
    },
    rounded: {
      name: 'Rounded corners',
      control: 'boolean',
      description: '`use-rounded-corner-alert` on an ancestor — normally `<body>`, a product-wide setting rather than a property of the alert. "For standard or business-oriented usage, keep the default square corners."',
    },
    skeleton: {
      name: 'Skeleton',
      control: 'boolean',
      description: 'Wraps the component in `<div aria-busy="true" inert>`, the way the design system puts a real component in a loading state. Same markup for every component.',
    }
  }
}

export const PlaygroundAlertMessage = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { status, icon, iconContent, labelElement, label, description, bullets, bullet1, bullet2, bullet3, action, actionElement, actionLabel, closeButton, rounded, skeleton } = context.args

          return skeletonWrapper(renderAlertMessage({
            status,
            icon,
            iconContent,
            labelElement,
            label,
            description,
            bullets,
            bullet1,
            bullet2,
            bullet3,
            action,
            actionElement,
            actionLabel,
            closeButton,
            rounded,
          }, withCustomIcon(spriteIcons, customIcon(icon, iconContent)), false), skeleton)
        },
      },
    },
  },
  render: ({ status, icon, iconContent, labelElement, label, description, bullets, bullet1, bullet2, bullet3, action, actionElement, actionLabel, closeButton, rounded, skeleton }) => {
    return skeletonWrapper(renderAlertMessage({
      status,
      icon,
      iconContent,
      labelElement,
      label,
      description,
      bullets,
      bullet1,
      bullet2,
      bullet3,
      action,
      actionElement,
      actionLabel,
      closeButton,
      rounded,
    }, withCustomIcon(inlineIcons, customIcon(icon, iconContent))), skeleton)
  },
  args: {
    status: 'Negative',
    label: 'Alert message',
    labelElement: 'p',
    description: 'Description of the alert message.',
    bullets: 3,
    bullet1: 'First point',
    bullet2: 'Second point',
    bullet3: 'Third point',
    action: 'After the text',
    actionElement: 'Button',
    actionLabel: 'Action',
    closeButton: true,
    icon: 'Custom icon',
    iconContent: '',
    rounded: false,
    skeleton: false
  },
}
