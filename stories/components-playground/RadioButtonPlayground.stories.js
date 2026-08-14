// Playground for Radio button
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/radio-button/#standalone

const states = ['Enabled', 'Read only', 'Disabled']

const selectedMap = {
  'False': '',
  'True': ' checked'
}

const errorMap = {
  'False': '',
  'True': ' aria-invalid="true"'
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

const renderRadioButton = ({ state, selected, error }) => {
  const checkedAttr = selectedMap[(selected ? 'True' : 'False')] ?? ''
  const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
  const stateAttr = stateMap[state] ?? ''

  return `<label class="radio-button-standalone">
  <input class="control-item-indicator" type="radio" value=""${checkedAttr}${invalidAttr}${stateAttr} />
  <span class="visually-hidden">Default standalone radio button</span>
</label>`
}

export default {
  title: 'Playground/Radio button',
  argTypes: {
    state: {
      control: 'select',
      options: states,
    },
    selected: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    }
  }
}

export const PlaygroundRadioButton = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { state, selected, error } = context.args

          return renderRadioButton({
            state,
            selected,
            error,
          })
        },
      },
    },
  },
  render: ({ state, selected, error }) => {
    return renderRadioButton({
      state,
      selected,
      error,
    })
  },
  args: {
    state: 'Enabled',
    selected: false,
    error: false
  },
}
