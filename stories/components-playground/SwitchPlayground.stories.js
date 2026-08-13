// Playground for Switch
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/switch/#standalone

const states = ['Enabled', 'Read only', 'Disabled']
const selectedOptions = ['False', 'True']

const selectedMap = {
  'False': '',
  'True': ' checked'
}

const stateMap = {
  'Enabled': '',
  'Hover': '',
  'Focus': '',
  'Pressed': '',
  'Skeleton': '',
  'Read only': ' readonly',
  'Disabled': ' disabled'
}

const renderSwitch = ({ state, selected }) => {
  const checkedAttr = selectedMap[selected] ?? ''
  const stateAttr = stateMap[state] ?? ''

  return `<label class="switch-standalone">
  <input class="control-item-indicator" type="checkbox" role="switch" value=""${checkedAttr}${stateAttr} />
  <span class="visually-hidden">Standalone switch</span>
</label>`
}

export default {
  title: 'Playground/Switch',
  argTypes: {
    state: {
      control: 'select',
      options: states,
    },
    selected: {
      control: 'select',
      options: selectedOptions,
    }
  }
}

export const PlaygroundSwitch = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { state, selected } = context.args

          return renderSwitch({
            state,
            selected,
          })
        },
      },
    },
  },
  render: ({ state, selected }) => {
    return renderSwitch({
      state,
      selected,
    })
  },
  args: {
    state: 'Enabled',
    selected: 'False'
  },
}

// Chaque valeur ci-dessous change réellement le rendu ; les autres sont omises.
// PlaygroundSwitch porte les args par défaut : elle tient lieu de story Default.

export const True = {
  parameters: PlaygroundSwitch.parameters,
  render: PlaygroundSwitch.render,
  args: {
    ...PlaygroundSwitch.args,
    selected: 'True'
  },
}

export const Disabled = {
  parameters: PlaygroundSwitch.parameters,
  render: PlaygroundSwitch.render,
  args: {
    ...PlaygroundSwitch.args,
    state: 'Disabled'
  },
}

export const ReadOnly = {
  parameters: PlaygroundSwitch.parameters,
  render: PlaygroundSwitch.render,
  args: {
    ...PlaygroundSwitch.args,
    state: 'Read only'
  },
}
