// Playground for Checkbox
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/checkbox/#standalone

const states = ['Enabled', 'Read only', 'Disabled']
const selectionStatuses = ['Unselected', 'Selected']
const errorOptions = ['True', 'False']

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
  const invalidAttr = errorMap[error] ?? ''
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
      control: 'select',
      options: errorOptions,
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
    error: 'False'
  },
}

// Chaque valeur ci-dessous change réellement le rendu ; les autres sont omises.
// PlaygroundCheckbox porte les args par défaut : elle tient lieu de story Default.

export const Selected = {
  parameters: PlaygroundCheckbox.parameters,
  render: PlaygroundCheckbox.render,
  args: {
    ...PlaygroundCheckbox.args,
    selectionStatus: 'Selected'
  },
}

export const Disabled = {
  parameters: PlaygroundCheckbox.parameters,
  render: PlaygroundCheckbox.render,
  args: {
    ...PlaygroundCheckbox.args,
    state: 'Disabled'
  },
}

export const ReadOnly = {
  parameters: PlaygroundCheckbox.parameters,
  render: PlaygroundCheckbox.render,
  args: {
    ...PlaygroundCheckbox.args,
    state: 'Read only'
  },
}

export const Error = {
  parameters: PlaygroundCheckbox.parameters,
  render: PlaygroundCheckbox.render,
  args: {
    ...PlaygroundCheckbox.args,
    error: 'True'
  },
}
