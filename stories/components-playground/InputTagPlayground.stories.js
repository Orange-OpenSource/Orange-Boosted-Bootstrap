// Playground for Input tag
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/tags/#input-tag

const states = ['Enabled', 'Disabled']

const stateMap = {
  'Enabled': '',
  'Hover': '',
  'Pressed-Touch': '',
  'Focus': '',
  'Skeleton': '',
  'Disabled': ' disabled'
}

const renderInputTag = ({ state, label }) => {
  const disabledAttr = stateMap[state] ?? ''

  return `<button type="button" class="tag tag-input"${disabledAttr}>
  ${label}
  <span class="visually-hidden">Remove this tag</span>
</button>`
}

export default {
  title: 'Playground/Input tag',
  argTypes: {
    state: {
      control: 'select',
      options: states,
    },
    label: {
      control: 'text',
    }
  }
}

export const PlaygroundInputTag = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { state, label } = context.args

          return renderInputTag({
            state,
            label,
          })
        },
      },
    },
  },
  render: ({ state, label }) => {
    return renderInputTag({
      state,
      label,
    })
  },
  args: {
    state: 'Enabled',
    label: 'Label'
  },
}

// Chaque valeur ci-dessous change réellement le rendu ; les autres sont omises.
// PlaygroundInputTag porte les args par défaut : elle tient lieu de story Default.

export const Disabled = {
  parameters: PlaygroundInputTag.parameters,
  render: PlaygroundInputTag.render,
  args: {
    ...PlaygroundInputTag.args,
    state: 'Disabled'
  },
}
