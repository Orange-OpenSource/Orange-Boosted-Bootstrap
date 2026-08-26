// Playground for Assistant button
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/buttons/
//
// The third and last component of `buttons.mdx`, beside Button and Navigation
// button. `scss/_button-assistant.scss` is 56 lines, and what it does *not*
// contain shapes this file:
//
//   - No variants. Neither `btn-default`, nor `btn-strong`, `btn-brand` or
//     `btn-minimal`. The documentation's "Variants" section holds only
//     `Icon only` and `Rounded corners`. The conic-gradient border is the
//     signal, and there is only one of it — so there is no `variant` control,
//     a first in this corpus for a `.btn`.
//   - No icon control. Like the navigation button's chevron, the AI icon is a
//     `::before` with a mask. Canvas and Code panel are therefore identical
//     character for character, and `check_stories.js` reports no divergence.
//   - No `btn-on-colored-bg`. There is no such variant for this button. What
//     the `On colored background` control below does is put the button on the
//     surface the documentation's own example uses, so the white centre of the
//     gradient border becomes visible — a different thing entirely, and a
//     checkbox for the same reason Button's own colored-background control is
//     one: the question is what the surface does to the button, not which
//     background utilities exist.
//   - No `Max width`. The documentation page shows no `.component-max-width`
//     on a button, and the stylesheet only compounds that class with the form
//     components.
//
// The environment is not an axis of markup and is not exposed: under
// `prefers-reduced-motion`, `prefers-contrast` or `forced-colors` the whole
// media query below falls away and the button trades its gradient border for a
// plain `border-color: currentcolor`.

const elements = ['Button', 'Link']
const layouts = ['Text only', 'Icon only']
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


// The trap the documentation covers in a warning callout, and the reason
// `Opaque background` exists.
//
//   background:
//     linear-gradient(var(--bs-btn-bg, var(--bs-color-bg-primary))) padding-box,
//     conic-gradient(…) border-box;
//
// The gradient border is two layers: the conic gradient clipped to the border
// box, and an *opaque* layer clipped to the padding box that hides its middle.
// That layer is `--bs-btn-bg`, undefined by default, so it falls back on
// `--bs-color-bg-primary` — white. The `@supports (background-clip:
// border-area)` branch would remove the problem, and no shipped browser
// supports `border-area`: the two-layer form is the one that applies.
//
// Measured on `.bg-tertiary` (rgb(249,245,240)):
//
//   <button class="btn btn-assistant">                          linear-gradient(rgb(255,255,255)), conic-gradient(…)
//   … style="--bs-btn-bg: var(--bs-color-bg-tertiary);"         linear-gradient(rgb(249,245,240)), conic-gradient(…)
// The surface is the pairing the documentation's own example uses, held in one
// constant: swap the two values to check another one. `--bs-btn-bg` must take
// a **background** token, never a *surface* one — a semi-transparent value
// would let the conic gradient show through the middle of the button.
const coloredSurface = { surface: 'bg-tertiary', token: 'var(--bs-color-bg-tertiary)' }

// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

const indent = (markup, pad) => markup.split('\n').map((line) => (line ? `${pad}${line}` : line)).join('\n')

const layoutClasses = {
  'Text only': '',
  'Icon only': 'btn-icon'
}

// `_button-assistant.scss` re-declares its own paddings inside `&.btn-small`,
// which is exactly the fix `.btn-previous` / `.btn-next` are missing — see
// NavigationButtonPlayground. Measured: 19/27 px at default size, 15/23 px
// small, the asymmetric "icon at the start" paddings preserved. So the size is
// a real control here and a frozen constant there.
const sizeClasses = {
  'Default': '',
  'Small': 'btn-small'
}

const stateClasses = {
  'Enabled': '',
  'Loading indeterminate': 'loading-indeterminate',
  'Loading determinate': 'loading-determinate',
  'Disabled': ''
}

const stateActivity = {
  'Enabled': 'active',
  'Loading indeterminate': 'inactive',
  'Loading determinate': 'inactive',
  'Disabled': 'inactive'
}

// The documentation only ever shows `<button disabled>` for this component,
// since all of its examples are buttons. The stylesheet covers both forms —
// `&:is(:disabled, [aria-disabled="true"])` — so both are offered, with the
// rule that holds everywhere in the corpus: an inactive `<a>` takes
// `aria-disabled="true"` and loses its `href`.
const elementAttrs = {
  'Button': { 'active': '', 'inactive': ' disabled' },
  'Link': { 'active': ' href="#"', 'inactive': ' aria-disabled="true"' }
}

const elementTags = {
  'Button': { open: '<button', close: '</button>', type: ' type="button"' },
  'Link': { open: '<a', close: '</a>', type: '' }
}

const loadingTimeAttrs = {
  'Loading determinate': (time) => ` style="--bs-btn-loading-time: ${time};"`
}

const styleAttrs = {
  'True': (token) => ` style="--bs-btn-bg: ${token};"`,
  'False': () => ''
}

const loaderMarkup = (message) => `<svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
  <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
</svg>
<span role="status" id="loading-ai-btn-msg" class="visually-hidden">${message}</span>`

const layoutBodies = {
  'Text only': (label) => label,
  'Icon only': (label) => `<span class="visually-hidden">${label}</span>`
}

const loadingBodies = {
  'active': (body) => body,
  'inactive': (body, state) => (stateClasses[state] ? `${body}\n${loaderMarkup('Loading answer')}` : body)
}

// A bare label stays on the line of the tag, an element goes to its own line —
// the two shapes the documentation's examples use. A loading button always
// deploys: it has three children.
const bodyShapes = {
  'inline': ({ open, attrs, close, body }) => `${open}${attrs}>${body}${close}`,
  'block': ({ open, attrs, close, body }) => `${open}${attrs}>
${indent(body, '  ')}
${close}`
}

const shapeOf = (body) => (/[\n<]/.test(body) ? 'block' : 'inline')

// The documentation's own example is a bare `<div class="bg-tertiary">`, with
// no padding: behind the button the surface is then invisible and the control
// looks inert. `p-large` is added for that reason alone.
const containerWrappers = {
  'True': (markup) => `<div class="${coloredSurface.surface} p-large">
${indent(markup, '  ')}
</div>`,
  'False': (markup) => markup
}

const roundedWrappers = {
  'True': (markup) => `<div class="use-rounded-corner-buttons">
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

const renderAssistantButton = ({ label, element, layout, size, coloredBg, opaqueBackground, rounded, state, loadingTime }) => {
  const safeElement = orElse(element, elements)
  const safeLayout = orElse(layout, layouts)
  const safeSize = orElse(size, sizes)
  const safeState = orElse(state, states)
  const activity = stateActivity[safeState]

  const classes = [
    'btn',
    'btn-assistant',
    layoutClasses[safeLayout],
    sizeClasses[safeSize],
    stateClasses[safeState]
  ].filter(Boolean).join(' ')

  const opaque = Boolean(opaqueBackground) && Boolean(coloredBg)
  const tag = elementTags[safeElement]
  const loadingAttr = (loadingTimeAttrs[safeState] ?? (() => ''))(loadingTime)
  const attrs = `${tag.type} class="${classes}"${elementAttrs[safeElement][activity]}${styleAttrs[opaque ? 'True' : 'False'](coloredSurface.token)}${loadingAttr}`
  const body = loadingBodies[activity](layoutBodies[safeLayout](label), safeState)

  const button = bodyShapes[shapeOf(body)]({ open: tag.open, attrs, close: tag.close, body })

  return containerWrappers[coloredBg ? 'True' : 'False'](roundedWrappers[rounded ? 'True' : 'False'](button))
}

export default {
  title: 'Playground/Assistant button',
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Interpolated as is, so HTML goes through: paste `Line 1<br/>Line 2` to see the label stay centered beside the AI icon. On `Icon only` it becomes the `visually-hidden` text.',
    },
    element: {
      name: 'Element',
      control: 'select',
      options: elements,
      description: '`Button` renders `<button type="button">`, which is what every example of the documentation uses; `Link` renders `<a href="#">`. The stylesheet covers both inactive forms, so both are offered.',
    },
    layout: {
      name: 'Layout',
      control: 'select',
      options: layouts,
      description: '`btn-icon` keeps only the AI icon and moves the label into a `visually-hidden` span. "Icon-only assistant buttons are always completely circular" — which is why `Rounded corners` does nothing here, see that control.',
    },
    size: {
      name: 'Size',
      control: 'select',
      options: sizes,
      description: '`btn-small` — 40 px high, smaller icon. Legitimate on this component because `_button-assistant.scss` re-declares its paddings inside `&.btn-small`; the navigation button has no such rule, which is why its size is frozen. Not in the published 1.4.0 stylesheet yet.',
    },
    coloredBg: {
      name: 'On colored background',
      control: 'boolean',
      description: 'Puts the button on `bg-tertiary`, the surface the documentation\u2019s own example uses, so the white centre of the gradient border becomes visible. `p-large` is added to that example so the surface shows around the button. One checkbox rather than a menu of surfaces: the question the playground answers is what the surface does to the button, and `utilities/background/` answers the other one better.',
    },
    opaqueBackground: {
      name: 'Opaque background',
      control: 'boolean',
      description: 'Adds `--bs-btn-bg` so the opaque layer matches the surface behind. Gated on the colored background, since without one the `--bs-color-bg-primary` fallback already does the job.',
      if: { arg: 'coloredBg', truthy: true },
    },
    rounded: {
      name: 'Rounded corners',
      control: 'boolean',
      description: '`use-rounded-corner-buttons` on an ancestor, a product-wide setting. Measured: 0 px to 8 px on a text button, and **no effect on `Icon only`**, where `.btn-assistant.btn-icon` sets `--bs-btn-border-radius` on the element itself and beats the inherited value. That is by design.',
    },
    state: {
      name: 'State',
      control: 'select',
      options: stateOptions,
      description: 'Disabled drops the gradient border entirely (`background: initial`); both loading states keep it — the rule excludes `.loading-indeterminate, .loading-determinate`. The documentation only shows the indeterminate loader here and refers to Button for the rest; `loading-determinate` is a `.btn` class and works, so it is kept.',
    },
    loadingTime: {
      name: 'Loading time',
      control: 'text',
      description: '`--bs-btn-loading-time` on the button itself, which is where `.btn` reads it. Only the determinate loader uses it.',
      if: { arg: 'state', eq: 'Loading determinate' },
    }
  }
}

export const PlaygroundAssistantButton = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { label, element, layout, size, coloredBg, opaqueBackground, rounded, state, loadingTime } = context.args

          return skeletonWrapper(renderAssistantButton({
            label,
            element,
            layout,
            size,
            coloredBg,
            opaqueBackground,
            rounded,
            state: baseState(state),
            loadingTime,
          }), isSkeleton(state))
        },
      },
    },
  },
  render: ({ label, element, layout, size, coloredBg, opaqueBackground, rounded, state, loadingTime }) => {
    return skeletonWrapper(renderAssistantButton({
      label,
      element,
      layout,
      size,
      coloredBg,
      opaqueBackground,
      rounded,
      state: baseState(state),
      loadingTime,
    }), isSkeleton(state))
  },
  args: {
    label: 'Assistant',
    element: 'Button',
    layout: 'Text only',
    size: 'Default',
    coloredBg: true,
    opaqueBackground: false,
    rounded: false,
    state: 'Enabled',
    loadingTime: '5s',
  },
}
