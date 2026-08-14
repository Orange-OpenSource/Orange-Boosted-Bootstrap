// Playground for Checkbox item
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/checkbox/

const states = ['Enabled', 'Read only', 'Disabled']
const selectionStatuses = ['Unselected', 'Selected']

// Propriétés Figma sans traduction dans le HTML : la valeur est figée et
// aucun contrôle n'est exposé, changer la valeur ne changerait rien au rendu.
const description = 'Description'
const errorSelectedText = 'This field can’t be confirmed.'
const errorUnselectedText = 'You need to select at least one option.'
const errorIndeterminateText = 'This field can’t be partially selected.'
const icon = false
const showDescription = false
const errorMessage = true

const selectionStatusMap = {
  'Unselected': '',
  'Selected': ' checked',
  'Indeterminate': ''
}

const errorMap = {
  'False': '',
  'True': ' aria-invalid="true"'
}

const reverseClasses = {
  'False': '',
  'True': 'control-item-reverse'
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

const renderCheckboxItem = ({ state, selectionStatus, error, reverse, label, divider }) => {
  const checkedAttr = selectionStatusMap[selectionStatus] ?? ''
  const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
  const itemClasses = [
    'checkbox-item',
    reverseClasses[(reverse ? 'True' : 'False')],
    divider ? 'control-item-divider' : ''
  ].filter(Boolean).join(' ')
  const stateAttr = stateMap[state] ?? ''

  return `<div class="${itemClasses}">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxItem"${checkedAttr}${invalidAttr}${stateAttr} />
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxItem">${label}</label>
  </div>
</div>`
}

export default {
  title: 'Playground/Checkbox item',
  argTypes: {
    state: {
      control: 'select',
      options: states,
    },
    selectionStatus: {
      control: 'select',
      options: selectionStatuses,
    },
    error: {
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

export const PlaygroundCheckboxItem = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { state, selectionStatus, error, reverse, label, divider } = context.args

          return renderCheckboxItem({
            state,
            selectionStatus,
            error,
            reverse,
            label,
            divider,
          })
        },
      },
    },
  },
  render: ({ state, selectionStatus, error, reverse, label, divider }) => {
    return renderCheckboxItem({
      state,
      selectionStatus,
      error,
      reverse,
      label,
      divider,
    })
  },
  args: {
    state: 'Enabled',
    selectionStatus: 'Unselected',
    error: false,
    reverse: false,
    label: 'Label',
    divider: false
  },
}
