// Playground for Navigation button
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/buttons/
//
// Third component of `buttons.mdx`, beside Button and Assistant button. It is
// `.btn` plus `.btn-previous` or `.btn-next`, and nothing more.
//
// The chevron is not markup. `scss/_buttons.scss` draws it in a pseudo-element:
//
//   .btn-next     { &::after  { content: ""; mask-image: $btn-next-icon } }
//   .btn-previous { &::before { content: ""; mask-image: $btn-previous-icon } }
//
// Two consequences on the shape of this file. There is no `icon` control, and
// there is no `Text + icon` layout — the direction *is* the icon, and the
// documentation never shows a navigation button carrying a second one. And
// since no sprite is referenced anywhere, the canvas and the Code panel are
// identical character for character: `check_stories.js` reports no divergence
// here, which is normal for this component and would be a bug elsewhere.
//
// GAP TO BE RAISED WITH OUDS — `btn-small` breaks the chevron paddings.
// `.btn-small` is written `.btn { &.btn-small { … } }`, specificity (0,2,0),
// against (0,1,0) for `.btn-previous` / `.btn-next`: it overwrites their
// `--bs-btn-padding-start` / `--bs-btn-padding-end`. The compensation
// `btn-small` carries for buttons with an icon sits behind `&:has(svg, img,
// .icon)`, which a pseudo-element chevron never triggers. Measured in Chromium
// on a `main` build:
//
//   .btn.btn-default.btn-next             26 / 14 px, 48 px high, icon 20 px
//   .btn.btn-default.btn-next.btn-small   23 / 23 px, 40 px high, icon 16 px
//   .btn.btn-default.btn-small            23 / 23 px, 40 px high, icon 16 px
//
// The chevron shrinks correctly, but a small navigation button is padded as
// though it had none. Icon-only escapes it: `.btn-icon.btn-icon` doubles its
// own specificity. The documentation agrees that something is off — Button and
// Assistant button both have a `### Sizes` section and Navigation button has
// none. So the size is frozen below rather than exposed as a control.
//
// No `Max width` control: the documentation page shows no
// `.component-max-width` on a button, and the stylesheet only ever compounds
// that class with the form components.

const directions = ['Next', 'Previous']
const variants = ['Default', 'Strong', 'Brand', 'Minimal']
const elements = ['Link', 'Button']
const layouts = ['Text only', 'Icon only']
const states = ['Enabled', 'Loading indeterminate', 'Loading determinate', 'Disabled']

// Frozen, see the header. The value is read back in the class list rather than
// left decorative, so restoring the control is a one-word change the day the
// paddings are fixed.
const sizeClass = ''

// A background utility must always be paired with the colour theme that goes
// with it, carried by a *child* element so the background itself does not
// follow the attribute (utilities/background/). The playground offers the
// pairing the documentation's own colored background example uses. Swap the two
// values below to check another surface.
const coloredSurface = { surface: 'bg-surface-brand-primary', theme: 'light' }

// "Brand buttons should never be used on colored background." Negative is not
// in the list because it does not exist for the navigation button at all — an
// explicit callout of the documentation: "the button and the navigation button
// have the same variants except for the negative".
const forbiddenOnBackground = ['Brand']

// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

const indent = (markup, pad) => markup.split('\n').map((line) => (line ? `${pad}${line}` : line)).join('\n')

const directionClasses = {
  'Next': 'btn-next',
  'Previous': 'btn-previous'
}

const variantClasses = {
  'Default': 'btn-default',
  'Strong': 'btn-strong',
  'Brand': 'btn-brand',
  'Minimal': 'btn-minimal'
}

const layoutClasses = {
  'Text only': '',
  'Icon only': 'btn-icon'
}

const stateClasses = {
  'Enabled': '',
  'Loading indeterminate': 'loading-indeterminate',
  'Loading determinate': 'loading-determinate',
  'Disabled': ''
}

// Every state other than Enabled is inactive, and inactivity is not one
// attribute: it depends on the element. The documentation insists on removing
// the `href`, because an `<a>` without one is not focusable, which is the whole
// point.
const stateActivity = {
  'Enabled': 'active',
  'Loading indeterminate': 'inactive',
  'Loading determinate': 'inactive',
  'Disabled': 'inactive'
}

const elementAttrs = {
  'Link': { 'active': ' href="#"', 'inactive': ' aria-disabled="true"' },
  'Button': { 'active': '', 'inactive': ' disabled' }
}

const elementTags = {
  'Link': { open: '<a', close: '</a>', type: '' },
  'Button': { open: '<button', close: '</button>', type: ' type="button"' }
}

// `--bs-btn-loading-time` goes on the button itself here — unlike the form
// components, where `--bs-loading-time` goes on the container.
const loadingTimeAttrs = {
  'Loading determinate': (time) => ` style="--bs-btn-loading-time: ${time};"`
}

const loaderMarkup = (message) => `<svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
  <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
</svg>
<span role="status" id="loading-nav-btn-msg" class="visually-hidden">${message}</span>`

const layoutBodies = {
  'Text only': (label) => label,
  'Icon only': (label) => `<span class="visually-hidden">${label}</span>`
}

const loadingBodies = {
  'active': (body) => body,
  'inactive': (body, state) => (stateClasses[state] ? `${body}\n${loaderMarkup('Loading next page')}` : body)
}

// The documentation writes the common case on a single line and only deploys
// the tag when the button has several children. Two shapes, one table.
const bodyShapes = {
  'one': ({ open, attrs, close, body }) => `${open}${attrs}>${body}${close}`,
  'many': ({ open, attrs, close, body }) => `${open}${attrs}>
${indent(body, '  ')}
${close}`
}

const shapeOf = (body) => (body.includes('\n') ? 'many' : 'one')

const roundedWrappers = {
  'True': (markup) => `<div class="use-rounded-corner-buttons">
${indent(markup, '  ')}
</div>`,
  'False': (markup) => markup
}

const navWrappers = {
  'True': (markup, name) => `<nav aria-label="${name}">
${indent(markup, '  ')}
</nav>`,
  'False': (markup) => markup
}

// `p-large` and the two nested <div> are the wrapper of the documentation
// example, kept as is so the snippet can be pasted straight into a page.
const backgroundWrappers = {
  'True': (markup) => `<div class="${coloredSurface.surface} p-large">
  <div data-bs-theme="${coloredSurface.theme}">
${indent(markup, '    ')}
  </div>
</div>`,
  'False': (markup) => markup
}

// The combination stays reachable — one has to be able to see what it does —
// and the story says why it is wrong twice over: a comment that travels with
// the copied markup, and a banner in the canvas, deliberately styled outside
// the design system so it cannot be mistaken for a component.
const forbiddenComment = (variant, coloredBg) =>
  (coloredBg && forbiddenOnBackground.includes(variant)
    ? `<!-- OUDS: a ${variant.toLowerCase()} button should never be used on a colored background. -->\n`
    : '')

const forbiddenBanner = (variant, coloredBg) =>
  (coloredBg && forbiddenOnBackground.includes(variant)
    ? `<p style="margin:0 0 8px;padding:8px 12px;border:2px dashed #c00;color:#c00;font:14px/1.4 sans-serif">OUDS forbids a ${variant.toLowerCase()} navigation button on a colored background.</p>\n`
    : '')

// Skeleton is carried by an ancestor, `<div aria-busy="true" inert>`, never by
// the component itself: every child of that container renders as a skeleton,
// and `inert` takes it out of the tab order and of the accessibility tree.
// Same markup for every component of the design system.
const skeletonWrapper = (markup, skeleton) => (skeleton
  ? `<div aria-busy="true" inert>
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`
  : markup)

const renderNavigationButton = ({ label, direction, variant, element, layout, state, loadingTime, coloredBg, rounded, inNav, navLabel }, preview = true) => {
  const safeDirection = orElse(direction, directions)
  const safeVariant = orElse(variant, variants)
  const safeElement = orElse(element, elements)
  const safeLayout = orElse(layout, layouts)
  const safeState = orElse(state, states)
  const activity = stateActivity[safeState]

  const classes = [
    'btn',
    directionClasses[safeDirection],
    layoutClasses[safeLayout],
    variantClasses[safeVariant],
    sizeClass,
    coloredBg ? 'btn-on-colored-bg' : '',
    stateClasses[safeState]
  ].filter(Boolean).join(' ')

  const tag = elementTags[safeElement]
  const loadingAttr = (loadingTimeAttrs[safeState] ?? (() => ''))(loadingTime)
  const attrs = `${tag.type} class="${classes}"${elementAttrs[safeElement][activity]}${loadingAttr}`
  const body = loadingBodies[activity](layoutBodies[safeLayout](label), safeState)

  const button = bodyShapes[shapeOf(body)]({ open: tag.open, attrs, close: tag.close, body })

  const wrapped = backgroundWrappers[coloredBg ? 'True' : 'False'](
    navWrappers[inNav ? 'True' : 'False'](
      roundedWrappers[rounded ? 'True' : 'False'](button), navLabel))

  return (preview ? forbiddenBanner(safeVariant, coloredBg) : forbiddenComment(safeVariant, coloredBg)) + wrapped
}

export default {
  title: 'Playground/Navigation button',
  argTypes: {
    label: {
      control: 'text',
      description: 'Interpolated as is, so HTML goes through: paste `Line 1<br/>Line 2` to see the label stay centered beside the chevron. On `Icon only` it becomes the `visually-hidden` text, which is all a screen reader announces.',
    },
    direction: {
      control: 'select',
      options: directions,
      description: '`btn-next` draws the chevron in an `::after`, `btn-previous` in a `::before` (`scss/_buttons.scss`). Neither is markup, which is why there is no icon control on this component.',
    },
    variant: {
      control: 'select',
      options: variants,
      description: 'Four variants, not five: "the button and the navigation button have the same variants except for the negative, which does not exist for the navigation button".',
    },
    element: {
      control: 'select',
      options: elements,
      description: '`Link` renders `<a href="#">`, `Button` renders `<button type="button">`. The choice matters most on the inactive states, where the two carry different markup.',
    },
    layout: {
      control: 'select',
      options: layouts,
      description: '`Icon only` adds `btn-icon` and moves the label into a `visually-hidden` span. There is no `Text + icon` layout: the direction is the icon.',
    },
    coloredBg: {
      name: 'On colored bg',
      control: 'boolean',
      description: 'Adds `btn-on-colored-bg` and wraps the button in the surface the documentation pairs it with — `bg-surface-brand-primary` carrying `data-bs-theme="light"` on a child, so the background itself does not follow the theme (utilities/background/). A brand button is forbidden there, and the story says so rather than hiding the combination.',
    },
    rounded: {
      name: 'Rounded corners',
      control: 'boolean',
      description: '`use-rounded-corner-buttons` on an ancestor — normally `<body>`, a product-wide setting rather than a property of the button. The documentation shows it as a wrapper, so the wrapper is what the snippet prints.',
    },
    state: {
      control: 'select',
      options: states,
      description: 'The three inactive states share one rule and two markups: a `<button>` takes `disabled`, an `<a>` takes `aria-disabled="true"` **and loses its `href`**, because an `<a>` without one is not focusable. Hover, focus and pressed are CSS pseudo-classes, not values of this control.',
    },
    loadingTime: {
      name: 'Loading time',
      control: 'text',
      description: '`--bs-btn-loading-time` on the button itself, which is where `.btn` reads it — the form components read `--bs-loading-time` on their *container* instead. Only the determinate loader uses it.',
      if: { arg: 'state', eq: 'Loading determinate' },
    },
    inNav: {
      name: 'In a <nav>',
      control: 'boolean',
      description: '"When navigation buttons are used for global navigation, they should be wrapped in a `<nav>` tag, which must have an explicit (accessible) name." A real sequence puts the previous and the next button in the same `<nav>`; the playground renders one button at a time.',
    },
    navLabel: {
      name: '<nav> accessible name',
      control: 'text',
      description: 'The `aria-label` of the landmark. A `<nav>` without a name adds a landmark announced as unlabelled, which is worse than no landmark at all — hence a separate control rather than a fixed string.',
      if: { arg: 'inNav', truthy: true },
    },
    skeleton: {
      control: 'boolean',
      description: 'Wraps the component in `<div aria-busy="true" inert>`, the way the design system puts a real component in a loading state. Same markup for every component.',
    }
  }
}

export const PlaygroundNavigationButton = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { label, direction, variant, element, layout, state, loadingTime, coloredBg, rounded, inNav, navLabel, skeleton } = context.args

          return skeletonWrapper(renderNavigationButton({
            label,
            direction,
            variant,
            element,
            layout,
            state,
            loadingTime,
            coloredBg,
            rounded,
            inNav,
            navLabel,
          }, false), skeleton)
        },
      },
    },
  },
  render: ({ label, direction, variant, element, layout, state, loadingTime, coloredBg, rounded, inNav, navLabel, skeleton }) => {
    return skeletonWrapper(renderNavigationButton({
      label,
      direction,
      variant,
      element,
      layout,
      state,
      loadingTime,
      coloredBg,
      rounded,
      inNav,
      navLabel,
    }), skeleton)
  },
  args: {
    label: 'Next',
    direction: 'Next',
    variant: 'Default',
    element: 'Link',
    layout: 'Text only',
    coloredBg: false,
    rounded: false,
    state: 'Enabled',
    loadingTime: '5s',
    inNav: false,
    navLabel: 'Pagination',
    skeleton: false
  },
}
