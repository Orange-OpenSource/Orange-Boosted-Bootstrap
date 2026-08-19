// Playground for Badge count
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/badges/#badge---count

const statuses = ['Neutral', 'Accent', 'Positive', 'Info', 'Warning', 'Negative']
const sizes = ['Medium', 'Large']
const states = ['Enabled', 'Disabled']

const statusClasses = {
  'Neutral': 'badge-neutral',
  'Accent': 'badge-accent',
  'Positive': 'badge-positive',
  'Info': 'badge-info',
  'Warning': 'badge-warning',
  'Negative': ''
}

const sizeClasses = {
  'Medium': '',
  'Large': 'badge-large'
}

const stateClasses = {
  'Enabled': '',
  'Disabled': 'disabled'
}

// Only a positive integer is allowed for the count
const toCount = (value) => {
  const parsed = Number.parseInt(value, 10)

  return Number.isNaN(parsed) ? 0 : Math.max(0, parsed)
}

const renderBadgeCount = ({ status, size, state, number, hiddenLabel }) => {
  const count = toCount(number)
  const classes = [
    'badge',
    'badge-count',
    statusClasses[status],
    sizeClasses[size],
    stateClasses[state]
  ].filter(Boolean).join(' ')

  return `<p class="${classes}">${count}<span class="visually-hidden">${hiddenLabel}</span></p>`
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
  title: 'Playground/Badge count',
  argTypes: {
    status: {
      control: 'select',
      options: statuses,
    },
    size: {
      control: 'select',
      options: sizes,
    },
    state: {
      control: 'select',
      options: states,
    },
    number: {
      control: { type: 'number', min: 0, step: 1 },
    },
    hiddenLabel: {
      name: 'Hidden label',
      control: 'text',
      description: 'Carried by the `visually-hidden` span, next to the visible count: it says what the number counts.',
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

export const PlaygroundBadgeCount = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { status, size, state, number, hiddenLabel, maxWidth, skeleton } = context.args

          return skeletonWrapper(maxWidthWrapper(renderBadgeCount({
            status,
            size,
            state,
            number,
            hiddenLabel,
          }), maxWidth), skeleton)
        },
      },
    },
  },
  render: ({ status, size, state, number, hiddenLabel, maxWidth, skeleton }) => {
    return skeletonWrapper(maxWidthWrapper(renderBadgeCount({
      status,
      size,
      state,
      number,
      hiddenLabel,
    }), maxWidth), skeleton)
  },
  args: {
    status: 'Neutral',
    size: 'Medium',
    state: 'Enabled',
    number: 1,
    hiddenLabel: 'error',
    maxWidth: false,
    skeleton: false
  },
}
