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
    }
  }
}

export const PlaygroundBadge = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { status, size, state, hiddenLabel } = context.args

          return renderBadge({
            status,
            size,
            state,
            hiddenLabel,
          })
        },
      },
    },
  },
  render: ({ status, size, state, hiddenLabel }) => {
    return renderBadge({
      status,
      size,
      state,
      hiddenLabel,
    })
  },
  args: {
    status: 'Neutral',
    size: 'Xsmall',
    state: 'Enabled',
    hiddenLabel: 'Beware'
  },
}
