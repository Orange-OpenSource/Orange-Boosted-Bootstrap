// Playground for Checkbox
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/checkbox/#standalone

const states = ['Enabled', 'Read only', 'Disabled']
const selectionStatuses = ['Unselected', 'Selected']

const selectionStatusMap = {
  'Unselected': '',
  'Selected': ' checked',
  'Indeterminate': ''
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

const renderCheckbox = ({ state, selectionStatus, error }) => {
  const checkedAttr = selectionStatusMap[selectionStatus] ?? ''
  const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
  const stateAttr = stateMap[state] ?? ''

  return `<label class="checkbox-standalone">
  <input class="control-item-indicator" type="checkbox" value=""${checkedAttr}${invalidAttr}${stateAttr} />
  <span class="visually-hidden">Standalone checkbox</span>
</label>`
}

export default {
  title: 'Playground/Checkbox',
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
    }
  }
}

export const PlaygroundCheckbox = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { state, selectionStatus, error } = context.args

          return renderCheckbox({
            state,
            selectionStatus,
            error,
          })
        },
      },
    },
  },
  render: ({ state, selectionStatus, error }) => {
    return renderCheckbox({
      state,
      selectionStatus,
      error,
    })
  },
  args: {
    state: 'Enabled',
    selectionStatus: 'Unselected',
    error: false
  },
}
