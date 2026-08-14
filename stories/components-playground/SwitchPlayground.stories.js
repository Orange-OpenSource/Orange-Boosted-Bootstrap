// Playground for Switch
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/switch/#standalone

const states = ['Enabled', 'Read only', 'Disabled']

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
  const checkedAttr = selectedMap[(selected ? 'True' : 'False')] ?? ''
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
      control: 'boolean',
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
    selected: false
  },
}
