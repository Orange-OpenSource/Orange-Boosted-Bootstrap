// Playground for Radio button item
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/radio-button/

const states = ['Enabled', 'Read only', 'Disabled']

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
  const checkedAttr = selectedMap[(selected ? 'True' : 'False')] ?? ''
  const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
  const itemClasses = [
    'radio-button-item',
    reverseClasses[(reverse ? 'True' : 'False')],
    outlinedClasses[(outlined ? 'True' : 'False')],
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
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    outlined: {
      control: 'boolean',
    },
    reverse: {
      control: 'boolean',
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
    selected: false,
    error: false,
    outlined: false,
    reverse: false,
    label: 'Label',
    divider: false
  },
}
