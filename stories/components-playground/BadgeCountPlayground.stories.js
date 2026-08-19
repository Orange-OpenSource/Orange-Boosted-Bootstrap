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
    }
  }
}

export const PlaygroundBadgeCount = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { status, size, state, number, hiddenLabel } = context.args

          return renderBadgeCount({
            status,
            size,
            state,
            number,
            hiddenLabel,
          })
        },
      },
    },
  },
  render: ({ status, size, state, number, hiddenLabel }) => {
    return renderBadgeCount({
      status,
      size,
      state,
      number,
      hiddenLabel,
    })
  },
  args: {
    status: 'Neutral',
    size: 'Medium',
    state: 'Enabled',
    number: 1,
    hiddenLabel: 'error'
  },
}
