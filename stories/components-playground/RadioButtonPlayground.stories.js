// Playground for Radio button
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/radio-button/#standalone

const states = ['Enabled', 'Read only', 'Disabled']
const selectedOptions = ['False', 'True']
const errorOptions = ['True', 'False']

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
  const checkedAttr = selectedMap[selected] ?? ''
  const invalidAttr = errorMap[error] ?? ''
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
      control: 'select',
      options: selectedOptions,
    },
    error: {
      control: 'select',
      options: errorOptions,
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
    selected: 'False',
    error: 'False'
  },
}

// Chaque valeur ci-dessous change réellement le rendu ; les autres sont omises.
// PlaygroundRadioButton porte les args par défaut : elle tient lieu de story Default.

export const True = {
  parameters: PlaygroundRadioButton.parameters,
  render: PlaygroundRadioButton.render,
  args: {
    ...PlaygroundRadioButton.args,
    selected: 'True'
  },
}

export const Disabled = {
  parameters: PlaygroundRadioButton.parameters,
  render: PlaygroundRadioButton.render,
  args: {
    ...PlaygroundRadioButton.args,
    state: 'Disabled'
  },
}

export const ReadOnly = {
  parameters: PlaygroundRadioButton.parameters,
  render: PlaygroundRadioButton.render,
  args: {
    ...PlaygroundRadioButton.args,
    state: 'Read only'
  },
}

export const Error = {
  parameters: PlaygroundRadioButton.parameters,
  render: PlaygroundRadioButton.render,
  args: {
    ...PlaygroundRadioButton.args,
    error: 'True'
  },
}
