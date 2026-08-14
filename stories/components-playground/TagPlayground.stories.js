// Playground for Tag
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/tags/

const appearances = ['Muted', 'Emphasized']
const statuses = ['Neutral', 'Accent', 'Positive', 'Info', 'Warning', 'Negative']
const layouts = ['Text only', 'Text + Bullet', 'Text + Icon']
const sizes = ['Default', 'Small']
const states = ['Enabled', 'Disabled']

const statusClasses = {
  'Neutral': '',
  'Accent': 'tag-accent',
  'Positive': 'tag-positive',
  'Info': 'tag-info',
  'Warning': 'tag-warning',
  'Negative': 'tag-negative'
}

const appearanceClasses = {
  'Emphasized': '',
  'Muted': 'tag-muted'
}

const sizeClasses = {
  'Default': '',
  'Small': 'tag-small'
}

const roundedCornerClasses = {
  'True': '',
  'False': 'rounded-none'
}

const stateClasses = {
  'Enabled': '',
  'Loading': '',
  'Disabled': 'disabled',
  'Skeleton': ''
}

const renderTag = ({ appearance, status, layout, size, state, roundedCorner, label }) => {
  const classes = [
    'tag',
    statusClasses[status],
    appearanceClasses[appearance],
    sizeClasses[size],
    roundedCornerClasses[(roundedCorner ? 'True' : 'False')],
    stateClasses[state]
  ].filter(Boolean).join(' ')

  if (layout === 'Text only') {
    return `<p class="${classes}">${label}</p>`
  }

  if (layout === 'Text + Bullet') {
    return `<p class="${classes}">
  <span class="tag-bullet"></span>
  ${label}
</p>`
  }

  if (layout === 'Text + Icon') {
    return `<p class="${classes}">
  <span class="tag-icon si si-settings" aria-hidden="true"></span>
  ${label}
</p>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return ''
}

export default {
  title: 'Playground/Tag',
  argTypes: {
    appearance: {
      control: 'select',
      options: appearances,
    },
    status: {
      control: 'select',
      options: statuses,
    },
    layout: {
      control: 'select',
      options: layouts,
    },
    size: {
      control: 'select',
      options: sizes,
    },
    state: {
      control: 'select',
      options: states,
    },
    roundedCorner: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    }
  }
}

export const PlaygroundTag = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { appearance, status, layout, size, state, roundedCorner, label } = context.args

          return renderTag({
            appearance,
            status,
            layout,
            size,
            state,
            roundedCorner,
            label,
          })
        },
      },
    },
  },
  render: ({ appearance, status, layout, size, state, roundedCorner, label }) => {
    return renderTag({
      appearance,
      status,
      layout,
      size,
      state,
      roundedCorner,
      label,
    })
  },
  args: {
    appearance: 'Muted',
    status: 'Neutral',
    layout: 'Text only',
    size: 'Default',
    state: 'Enabled',
    roundedCorner: true,
    label: 'Label'
  },
}
