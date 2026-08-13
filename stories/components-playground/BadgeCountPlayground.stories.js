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

const renderBadgeCount = ({ status, size, state, number }) => {
  const classes = [
    'badge',
    'badge-count',
    statusClasses[status],
    sizeClasses[size],
    stateClasses[state]
  ].filter(Boolean).join(' ')

  return `<p class="${classes}">${number}<span class="visually-hidden">error</span></p>`
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
      control: 'text',
    }
  }
}

export const PlaygroundBadgeCount = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { status, size, state, number } = context.args

          return renderBadgeCount({
            status,
            size,
            state,
            number,
          })
        },
      },
    },
  },
  render: ({ status, size, state, number }) => {
    return renderBadgeCount({
      status,
      size,
      state,
      number,
    })
  },
  args: {
    status: 'Neutral',
    size: 'Medium',
    state: 'Enabled',
    number: '1'
  },
}

// Chaque valeur ci-dessous change réellement le rendu ; les autres sont omises.
// PlaygroundBadgeCount porte les args par défaut : elle tient lieu de story Default.

export const Accent = {
  parameters: PlaygroundBadgeCount.parameters,
  render: PlaygroundBadgeCount.render,
  args: {
    ...PlaygroundBadgeCount.args,
    status: 'Accent'
  },
}

export const Positive = {
  parameters: PlaygroundBadgeCount.parameters,
  render: PlaygroundBadgeCount.render,
  args: {
    ...PlaygroundBadgeCount.args,
    status: 'Positive'
  },
}

export const Info = {
  parameters: PlaygroundBadgeCount.parameters,
  render: PlaygroundBadgeCount.render,
  args: {
    ...PlaygroundBadgeCount.args,
    status: 'Info'
  },
}

export const Warning = {
  parameters: PlaygroundBadgeCount.parameters,
  render: PlaygroundBadgeCount.render,
  args: {
    ...PlaygroundBadgeCount.args,
    status: 'Warning'
  },
}

export const Negative = {
  parameters: PlaygroundBadgeCount.parameters,
  render: PlaygroundBadgeCount.render,
  args: {
    ...PlaygroundBadgeCount.args,
    status: 'Negative'
  },
}

export const Disabled = {
  parameters: PlaygroundBadgeCount.parameters,
  render: PlaygroundBadgeCount.render,
  args: {
    ...PlaygroundBadgeCount.args,
    state: 'Disabled'
  },
}
