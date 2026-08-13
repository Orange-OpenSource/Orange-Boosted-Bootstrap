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

const renderBadge = ({ status, size, state }) => {
  const classes = [
    'badge',
    statusClasses[status],
    sizeClasses[size],
    stateClasses[state]
  ].filter(Boolean).join(' ')

  return `<p class="${classes}"><span class="visually-hidden">Beware</span></p>`
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
    }
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

// Chaque valeur ci-dessous change réellement le rendu ; les autres sont omises.
// PlaygroundBadge porte les args par défaut : elle tient lieu de story Default.

export const Accent = {
  parameters: PlaygroundBadge.parameters,
  render: PlaygroundBadge.render,
  args: {
    ...PlaygroundBadge.args,
    status: 'Accent'
  },
}

export const Positive = {
  parameters: PlaygroundBadge.parameters,
  render: PlaygroundBadge.render,
  args: {
    ...PlaygroundBadge.args,
    status: 'Positive'
  },
}

export const Info = {
  parameters: PlaygroundBadge.parameters,
  render: PlaygroundBadge.render,
  args: {
    ...PlaygroundBadge.args,
    status: 'Info'
  },
}

export const Warning = {
  parameters: PlaygroundBadge.parameters,
  render: PlaygroundBadge.render,
  args: {
    ...PlaygroundBadge.args,
    status: 'Warning'
  },
}

export const Negative = {
  parameters: PlaygroundBadge.parameters,
  render: PlaygroundBadge.render,
  args: {
    ...PlaygroundBadge.args,
    status: 'Negative'
  },
}

export const Disabled = {
  parameters: PlaygroundBadge.parameters,
  render: PlaygroundBadge.render,
  args: {
    ...PlaygroundBadge.args,
    state: 'Disabled'
  },
}
