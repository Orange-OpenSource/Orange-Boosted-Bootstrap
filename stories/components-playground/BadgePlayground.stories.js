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

// The hidden text is not a control. The badge has no visible text, so the
// `visually-hidden` span is its whole accessible name — and what it has to say
// is what the status means: "colour should not be the only way to convey
// information". It is therefore derived from the status rather than typed.
const statusTexts = {
  'Neutral': 'Notification',
  'Accent': 'Notification',
  'Positive': 'Success',
  'Info': 'Information',
  'Warning': 'Warning',
  'Negative': 'Error'
}

const stateClasses = {
  'Enabled': '',
  'Disabled': 'disabled'
}

const renderBadge = ({ status, size, state }) => {
  const classes = [
    'badge',
    statusClasses[status],
    sizeClasses[size],
    stateClasses[state]
  ].filter(Boolean).join(' ')

  return `<p class="${classes}"><span class="visually-hidden">${statusTexts[status] ?? statusTexts.Neutral}</span></p>`
}

export default {
  title: 'Playground/Badge',
  argTypes: {
    status: {
      name: 'Status',
      control: 'select',
      options: statuses,
    },
    size: {
      name: 'Size',
      control: 'select',
      options: sizes,
    },
    state: {
      name: 'State',
      control: 'select',
      options: states,
    },
  }
}

export const PlaygroundBadge = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { status, size, state } = context.args

          return renderBadge({
            status,
            size,
            state,
          })
        },
      },
    },
  },
  render: ({ status, size, state }) => {
    return renderBadge({
      status,
      size,
      state,
    })
  },
  args: {
    status: 'Neutral',
    size: 'Xsmall',
    state: 'Enabled'
  },
}
