// Playground for Badge
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/badges/

const statuses = ['Neutral', 'Accent', 'Positive', 'Info', 'Warning', 'Negative']
const sizes = ['Xsmall', 'Small', 'Medium', 'Large']
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
  'Xsmall': 'badge-xsmall',
  'Small': 'badge-small',
  'Medium': '',
  'Large': 'badge-large'
}

const stateClasses = {
  'Enabled': '',
  'Disabled': 'disabled'
}

const renderBadge = ({ status, size, state, hiddenLabel }) => {
  const classes = [
    'badge',
    statusClasses[status],
    sizeClasses[size],
    stateClasses[state]
  ].filter(Boolean).join(' ')

  return `<p class="${classes}"><span class="visually-hidden">${hiddenLabel}</span></p>`
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
  title: 'Playground/Badge',
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
    hiddenLabel: {
      name: 'Hidden label',
      control: 'text',
      description: 'Carried by the `visually-hidden` span: the badge has no visible text, this is all a screen reader announces.',
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

export const PlaygroundBadge = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { status, size, state, hiddenLabel, maxWidth, skeleton } = context.args

          return skeletonWrapper(maxWidthWrapper(renderBadge({
            status,
            size,
            state,
            hiddenLabel,
          }), maxWidth), skeleton)
        },
      },
    },
  },
  render: ({ status, size, state, hiddenLabel, maxWidth, skeleton }) => {
    return skeletonWrapper(maxWidthWrapper(renderBadge({
      status,
      size,
      state,
      hiddenLabel,
    }), maxWidth), skeleton)
  },
  args: {
    status: 'Neutral',
    size: 'Xsmall',
    state: 'Enabled',
    hiddenLabel: 'Beware',
    maxWidth: false,
    skeleton: false
  },
}
