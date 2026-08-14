// Playground for Text input
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/text-input/
// Écart — Rounded corner : Réglage transverse au produit (.use-rounded-corner-inputs sur un ancêtre).

const inputStatuses = ['Empty', 'Filled']
const states = ['Enabled', 'Read only', 'Disabled']

// Propriétés Figma sans traduction dans le HTML : la valeur est figée et
// aucun contrôle n'est exposé, changer la valeur ne changerait rien au rendu.
const roundedCorner = 'False'
const autocompletion = 'auto'
const helperText = 'Helper text.'
const errorEmptyText = 'This field can’t be empty.'
const errorFilledText = 'The format is not valid.'
const inputText = 'Input'
const prefix = false
const showHelperText = false
const suffix = false
const warningLabel = true
const showAutocompletion = false
const helperLink = false

const outlinedClasses = {
  'True': 'text-input-container-outlined',
  'False': ''
}

const inputStatusMap = {
  'Empty': '',
  'Empty (Placeholder)': '',
  'Filled': ' value="Input"'
}

const errorMap = {
  'False': '',
  'True': ' aria-invalid="true"'
}

const stateMap = {
  'Enabled': '',
  'Hover': '',
  'Focus': '',
  'Loading': '',
  'Skeleton': '',
  'Read only': ' readonly',
  'Disabled': ' disabled'
}

const renderTextInput = ({ inputStatus, state, outlined, error, leadingIcon, trailingAction, label, placeholder }) => {
  const containerClasses = [
    'text-input-container',
    outlinedClasses[(outlined ? 'True' : 'False')]
  ].filter(Boolean).join(' ')

  if (!leadingIcon && !trailingAction) {
    const valueAttr = inputStatusMap[inputStatus] ?? ''
    const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
    const stateAttr = stateMap[state] ?? ''

    return `<div class="text-input">
  <div class="${containerClasses}">
    <label for="textInput">${label}</label>
    <input type="text" class="text-input-field" id="textInput" placeholder="${placeholder}"${valueAttr}${invalidAttr}${stateAttr}>
  </div>
</div>`
  }

  if (leadingIcon && !trailingAction) {
    const valueAttr = inputStatusMap[inputStatus] ?? ''
    const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
    const stateAttr = stateMap[state] ?? ''

    return `<div class="text-input">
  <div class="${containerClasses}">
    <svg aria-hidden="true">
      <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
    </svg>
    <label for="textInput">${label}</label>
    <input type="text" class="text-input-field" id="textInput" placeholder="${placeholder}"${valueAttr}${invalidAttr}${stateAttr}>
  </div>
</div>`
  }

  if (!leadingIcon && trailingAction) {
    const valueAttr = inputStatusMap[inputStatus] ?? ''
    const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
    const stateAttr = stateMap[state] ?? ''

    return `<div class="text-input">
  <div class="${containerClasses}">
    <label for="textInput">${label}</label>
    <input type="text" class="text-input-field" id="textInput" placeholder="${placeholder}"${valueAttr}${invalidAttr}${stateAttr}>
    <button class="btn btn-minimal btn-icon" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
      <span class="visually-hidden">Add to favorites</span>
    </button>
  </div>
</div>`
  }

  if (leadingIcon && trailingAction) {
    const valueAttr = inputStatusMap[inputStatus] ?? ''
    const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
    const stateAttr = stateMap[state] ?? ''

    return `<div class="text-input">
  <div class="${containerClasses}">
    <svg aria-hidden="true">
      <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
    </svg>
    <label for="textInput">${label}</label>
    <input type="text" class="text-input-field" id="textInput" placeholder="${placeholder}"${valueAttr}${invalidAttr}${stateAttr}>
    <button class="btn btn-minimal btn-icon" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
      <span class="visually-hidden">Add to favorites</span>
    </button>
  </div>
</div>`
  }

  if (state === 'Loading') {
    return `<div class="text-input">
  <div class="${containerClasses}">
    <label for="textInput">${label}</label>
    <input type="text" class="text-input-field loading-indeterminate" id="textInput" placeholder="${placeholder}" aria-describedby="textInputLoadingMsg" disabled>
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="loader" aria-hidden="true">
      <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
    </svg>
    <span role="status" id="textInputLoadingMsg" class="visually-hidden">Loading message</span>
  </div>
</div>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return ''
}

export default {
  title: 'Playground/Text input',
  argTypes: {
    inputStatus: {
      control: 'select',
      options: inputStatuses,
    },
    state: {
      control: 'select',
      options: states,
    },
    outlined: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    leadingIcon: {
      control: 'boolean',
    },
    trailingAction: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    }
  }
}

export const PlaygroundTextInput = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const {
            inputStatus, state, outlined, error, leadingIcon, trailingAction, label,
            placeholder
          } = context.args

          return renderTextInput({
            inputStatus,
            state,
            outlined,
            error,
            leadingIcon,
            trailingAction,
            label,
            placeholder,
          })
        },
      },
    },
  },
  render: ({ inputStatus, state, outlined, error, leadingIcon, trailingAction, label, placeholder }) => {
    return renderTextInput({
      inputStatus,
      state,
      outlined,
      error,
      leadingIcon,
      trailingAction,
      label,
      placeholder,
    })
  },
  args: {
    inputStatus: 'Empty',
    state: 'Enabled',
    outlined: false,
    error: false,
    leadingIcon: false,
    trailingAction: false,
    label: 'Label',
    placeholder: 'Placeholder'
  },
}
