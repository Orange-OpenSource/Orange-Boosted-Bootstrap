// Playground for Inline alert
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/alerts/#inline-alert
// Écart — State : Skeleton se pose sur un ancêtre : <div aria-busy="true" inert>. Identique pour tous les composants.

const statuses = ['Neutral', 'Accent', 'Negative', 'Positive', 'Info', 'Warning']

// Propriétés Figma sans traduction dans le HTML : la valeur est figée et
// aucun contrôle n'est exposé, changer la valeur ne changerait rien au rendu.
const state = 'Enabled'

const statusMap = {
  'Neutral': 'Alert',
  'Accent': 'Alert',
  'Negative': 'Negative alert',
  'Positive': 'Positive alert',
  'Info': 'Info alert',
  'Warning': 'Warning alert'
}

const statusClasses = {
  'Neutral': '',
  'Accent': 'alert-accent',
  'Negative': 'alert-negative',
  'Positive': 'alert-positive',
  'Info': 'alert-info',
  'Warning': 'alert-warning'
}

const renderInlineAlert = ({ status, label }) => {
  const alertType = statusMap[status] ?? ''
  const classes = [
    'alert',
    statusClasses[status]
  ].filter(Boolean).join(' ')

  return `<div class="${classes}">
  <div class="alert-icon"><p class="visually-hidden">${alertType}</p></div>
  <p class="alert-label">${label}</p>
</div>`
}

export default {
  title: 'Playground/Inline alert',
  argTypes: {
    status: {
      control: 'select',
      options: statuses,
    },
    label: {
      control: 'text',
    }
  }
}

export const PlaygroundInlineAlert = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { status, label } = context.args

          return renderInlineAlert({
            status,
            label,
          })
        },
      },
    },
  },
  render: ({ status, label }) => {
    return renderInlineAlert({
      status,
      label,
    })
  },
  args: {
    status: 'Neutral',
    label: 'Label'
  },
}

// Chaque valeur ci-dessous change réellement le rendu ; les autres sont omises.
// PlaygroundInlineAlert porte les args par défaut : elle tient lieu de story Default.

export const Accent = {
  parameters: PlaygroundInlineAlert.parameters,
  render: PlaygroundInlineAlert.render,
  args: {
    ...PlaygroundInlineAlert.args,
    status: 'Accent'
  },
}

export const Negative = {
  parameters: PlaygroundInlineAlert.parameters,
  render: PlaygroundInlineAlert.render,
  args: {
    ...PlaygroundInlineAlert.args,
    status: 'Negative'
  },
}

export const Positive = {
  parameters: PlaygroundInlineAlert.parameters,
  render: PlaygroundInlineAlert.render,
  args: {
    ...PlaygroundInlineAlert.args,
    status: 'Positive'
  },
}

export const Info = {
  parameters: PlaygroundInlineAlert.parameters,
  render: PlaygroundInlineAlert.render,
  args: {
    ...PlaygroundInlineAlert.args,
    status: 'Info'
  },
}

export const Warning = {
  parameters: PlaygroundInlineAlert.parameters,
  render: PlaygroundInlineAlert.render,
  args: {
    ...PlaygroundInlineAlert.args,
    status: 'Warning'
  },
}
