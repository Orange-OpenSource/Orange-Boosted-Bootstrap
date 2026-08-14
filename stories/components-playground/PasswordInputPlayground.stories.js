// Playground for Password input
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/password-input/
// Écart — Rounded corner : Réglage transverse au produit (.use-rounded-corner-inputs sur un ancêtre).

const inputStatuses = ['Empty', 'Filled']
const states = ['Enabled', 'Read only', 'Disabled']

// Propriétés Figma sans traduction dans le HTML : la valeur est figée et
// aucun contrôle n'est exposé, changer la valeur ne changerait rien au rendu.
const roundedCorner = 'False'
const prefix = 'DEV-'
const helperText = 'Your password must be between 8 and 20 characters long.'
const errorFilledText = 'Password must be at least 8 characters.'
const inputText = 'Input'
const errorEmptyText = 'Please enter your password.'
const hiddenInputText = '●●●●●●●'
const showHelperText = false
const warningLabel = true
const showPrefix = false

const outlinedClasses = {
  'True': 'text-input-container-outlined',
  'False': ''
}

const hiddenPasswordMap = {
  'True': 'password',
  'False': 'text'
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

const inputStatusMap = {
  'Empty': '',
  'Empty (Placeholder)': '',
  'Filled': ' value="Input"'
}

const renderPasswordInput = ({ inputStatus, state, outlined, error, leadingIcon, hiddenPassword, label, placeholder }) => {
  const containerClasses = [
    'text-input-container',
    outlinedClasses[(outlined ? 'True' : 'False')]
  ].filter(Boolean).join(' ')
  const fieldType = hiddenPasswordMap[(hiddenPassword ? 'True' : 'False')] ?? ''
  const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
  const stateAttr = stateMap[state] ?? ''
  const valueAttr = inputStatusMap[inputStatus] ?? ''

  if (!leadingIcon) {
    return `<div class="text-input">
  <div class="${containerClasses}">
    <label for="passwordInput">${label}</label>
    <input type="${fieldType}" class="text-input-field" id="passwordInput" placeholder="${placeholder}"${valueAttr}${invalidAttr}${stateAttr}>
    <button class="btn btn-minimal btn-icon" aria-pressed="false" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#accessibility-vision"/>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
</div>`
  }

  if (leadingIcon) {
    return `<div class="text-input">
  <div class="${containerClasses}">
    <svg aria-hidden="true">
      <use xlink:href="/assets/img/ouds-web-sprite.svg#lock-closed"/>
    </svg>
    <label for="passwordInput">${label}</label>
    <input type="${fieldType}" class="text-input-field" id="passwordInput" placeholder="${placeholder}"${valueAttr}${invalidAttr}${stateAttr}>
    <button class="btn btn-minimal btn-icon" aria-pressed="false" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#accessibility-vision"/>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
</div>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return ''
}

export default {
  title: 'Playground/Password input',
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
    hiddenPassword: {
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

export const PlaygroundPasswordInput = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const {
            inputStatus, state, outlined, error, leadingIcon, hiddenPassword, label,
            placeholder
          } = context.args

          return renderPasswordInput({
            inputStatus,
            state,
            outlined,
            error,
            leadingIcon,
            hiddenPassword,
            label,
            placeholder,
          })
        },
      },
    },
  },
  render: ({ inputStatus, state, outlined, error, leadingIcon, hiddenPassword, label, placeholder }) => {
    return renderPasswordInput({
      inputStatus,
      state,
      outlined,
      error,
      leadingIcon,
      hiddenPassword,
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
    hiddenPassword: true,
    label: 'Password',
    placeholder: 'Minimum 8 characters'
  },
}
