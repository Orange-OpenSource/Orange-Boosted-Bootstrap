// Playground for Radio button item
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/radio-button/

const states = ['Enabled', 'Read only', 'Disabled']
const selectedOptions = ['False', 'True']
const errorOptions = ['True', 'False']
const outlinedOptions = ['False', 'True']
const reverseOptions = ['False', 'True']

// Propriétés Figma sans traduction dans le HTML : la valeur est figée et
// aucun contrôle n'est exposé, changer la valeur ne changerait rien au rendu.
const description = 'Description'
const extraLabel = 'Extra label'
const errorSelectedText = 'This field can’t be confirmed.'
const errorUnselectedText = 'This field can’t be empty.'
const icon = false
const showDescription = false
const errorMessage = true
const showExtraLabel = false

const selectedMap = {
  'False': '',
  'True': ' checked'
}

const errorMap = {
  'False': '',
  'True': ' aria-invalid="true"'
}

const reverseClasses = {
  'False': '',
  'True': 'control-item-reverse'
}

const outlinedClasses = {
  'False': '',
  'True': 'radio-button-item-outlined'
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

const renderRadioButtonItem = ({ state, selected, error, outlined, reverse, label, divider }) => {
  const checkedAttr = selectedMap[selected] ?? ''
  const invalidAttr = errorMap[error] ?? ''
  const itemClasses = [
    'radio-button-item',
    reverseClasses[reverse],
    outlinedClasses[outlined],
    divider ? 'control-item-divider' : ''
  ].filter(Boolean).join(' ')
  const stateAttr = stateMap[state] ?? ''

  return `<div class="${itemClasses}">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioItem" name="radioGroup"${checkedAttr}${invalidAttr}${stateAttr} />
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioItem">${label}</label>
  </div>
</div>`
}

export default {
  title: 'Playground/Radio button item',
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
    },
    outlined: {
      control: 'select',
      options: outlinedOptions,
    },
    reverse: {
      control: 'select',
      options: reverseOptions,
    },
    label: {
      control: 'text',
    },
    divider: {
      control: 'boolean',
    }
  }
}

export const PlaygroundRadioButtonItem = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { state, selected, error, outlined, reverse, label, divider } = context.args

          return renderRadioButtonItem({
            state,
            selected,
            error,
            outlined,
            reverse,
            label,
            divider,
          })
        },
      },
    },
  },
  render: ({ state, selected, error, outlined, reverse, label, divider }) => {
    return renderRadioButtonItem({
      state,
      selected,
      error,
      outlined,
      reverse,
      label,
      divider,
    })
  },
  args: {
    state: 'Enabled',
    selected: 'False',
    error: 'False',
    outlined: 'False',
    reverse: 'False',
    label: 'Label',
    divider: false
  },
}

// Chaque valeur ci-dessous change réellement le rendu ; les autres sont omises.
// PlaygroundRadioButtonItem porte les args par défaut : elle tient lieu de story Default.

export const True = {
  parameters: PlaygroundRadioButtonItem.parameters,
  render: PlaygroundRadioButtonItem.render,
  args: {
    ...PlaygroundRadioButtonItem.args,
    selected: 'True'
  },
}

export const Disabled = {
  parameters: PlaygroundRadioButtonItem.parameters,
  render: PlaygroundRadioButtonItem.render,
  args: {
    ...PlaygroundRadioButtonItem.args,
    state: 'Disabled'
  },
}

export const ReadOnly = {
  parameters: PlaygroundRadioButtonItem.parameters,
  render: PlaygroundRadioButtonItem.render,
  args: {
    ...PlaygroundRadioButtonItem.args,
    state: 'Read only'
  },
}

export const Error = {
  parameters: PlaygroundRadioButtonItem.parameters,
  render: PlaygroundRadioButtonItem.render,
  args: {
    ...PlaygroundRadioButtonItem.args,
    error: 'True'
  },
}
