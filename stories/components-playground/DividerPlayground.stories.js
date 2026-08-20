// Playground for Divider
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/divider/
//
// Colour and thickness: the documentation puts them on the divider itself —
// `<hr class="border-status-info">`, `<div class="vr border-thick"></div>` — so
// the semantic `<hr>` is kept in both orientations. The decorative
// `<div class="border-top …">` form stays a comment: it is an alternative for a
// separator that carries no meaning, not the way to colour one.

const orientations = ['Horizontal', 'Vertical']
const colors = [
  'Inherited',
  'Brand primary',
  'Default',
  'Emphasized',
  'Minimal',
  'Muted',
  'On brand primary',
  'Status accent',
  'Status info',
  'Status negative',
  'Status positive',
  'Status warning',
  'Always black',
  'Always white',
  'Always on black',
  'Always on white'
]
const sizes = ['Inherited', 'Thin', 'Medium', 'Thick', 'Thicker']

// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

const colorClasses = {
  'Inherited': '',
  'Brand primary': 'border-brand-primary',
  'Default': 'border-default',
  'Emphasized': 'border-emphasized',
  'Minimal': 'border-minimal',
  'Muted': 'border-muted',
  'On brand primary': 'border-on-brand-primary',
  'Status accent': 'border-status-accent',
  'Status info': 'border-status-info',
  'Status negative': 'border-status-negative',
  'Status positive': 'border-status-positive',
  'Status warning': 'border-status-warning',
  'Always black': 'border-always-black',
  'Always white': 'border-always-white',
  'Always on black': 'border-always-on-black',
  'Always on white': 'border-always-on-white'
}

// Four colours are only legible on the surface the documentation pairs them
// with, and it writes that surface into the example. The pairing is data, like
// the `background` control of Button: a colour absent from the table renders on
// its own.
const colorSurfaces = {
  'On brand primary': 'bg-brand-primary',
  'Always black': 'bg-always-white',
  'Always white': 'bg-always-black',
  'Always on black': 'bg-always-black',
  'Always on white': 'bg-always-white'
}

const surfaceWrappers = Object.fromEntries(
  Object.entries(colorSurfaces).map(([name, surface]) => [
    name,
    (markup) => `<div class="${surface} py-2xsmall">${markup}</div>`
  ])
)

const asIs = (markup) => markup

const onSurface = (markup, color) => (surfaceWrappers[color] ?? asIs)(markup)

const sizeClasses = {
  'Inherited': '',
  'Thin': 'border-thin',
  'Medium': 'border-medium',
  'Thick': 'border-thick',
  'Thicker': 'border-thicker'
}

// The class each orientation always carries, then the element it fills.
const orientationClasses = {
  'Horizontal': '',
  'Vertical': 'vr'
}

const orientationTemplates = {
  'Horizontal': (classAttr) => `<!-- semantic separator -->
<hr${classAttr} />
<!-- decorative variant: <div class="border-top border-default my-medium"></div> -->`,
  'Vertical': (classAttr) => `<div${classAttr}></div>`
}

// Preview only — a vertical rule is invisible without a height on its parent,
// which the documentation examples supply. The Code panel keeps the plain
// element, as the mapping emits it.
const previewSurroundings = {
  'Horizontal': (markup) => markup,
  'Vertical': (markup) => `<div class="d-flex" style="height: 50px;">
  ${markup}
</div>`
}

const surroundings = {
  'preview': (markup, orientation) => previewSurroundings[orientation](markup),
  'code': (markup) => markup
}

const renderDivider = ({ orientation, color, size, maxWidth }, preview = true) => {
  const safeOrientation = orElse(orientation, orientations)
  const classes = [
    orientationClasses[safeOrientation],
    colorClasses[orElse(color, colors)],
    sizeClasses[orElse(size, sizes)]
  ].filter(Boolean).join(' ')

  const markup = onSurface(
    orientationTemplates[safeOrientation](classes ? ` class="${classes}"` : ''),
    orElse(color, colors)
  )

  return maxWidthWrapper(surroundings[preview ? 'preview' : 'code'](markup, safeOrientation), maxWidth)
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
  title: 'Playground/Divider',
  argTypes: {
    orientation: {
      control: 'select',
      options: orientations,
    },
    color: {
      control: 'select',
      options: colors,
      description: 'Border colour utility, carried by the divider itself. `Inherited`: no class, the design system colour. Four values are wrapped in the surface the documentation pairs them with, without which they are invisible.',
    },
    size: {
      control: 'select',
      options: sizes,
      description: 'Border width utility. `Inherited`: no class, the design system thickness.',
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

export const PlaygroundDivider = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { orientation, color, size, maxWidth, skeleton } = context.args

          return skeletonWrapper(renderDivider({
            orientation,
            color,
            size,
            maxWidth,
          }, false), skeleton)
        },
      },
    },
  },
  render: ({ orientation, color, size, maxWidth, skeleton }) => {
    return skeletonWrapper(renderDivider({
      orientation,
      color,
      size,
      maxWidth,
    }), skeleton)
  },
  args: {
    orientation: 'Horizontal',
    color: 'Inherited',
    size: 'Inherited',
    maxWidth: false,
    skeleton: false
  },
}
