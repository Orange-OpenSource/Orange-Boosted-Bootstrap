// Playground for Password input
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/password-input/
// Écart — Rounded corner : Réglage transverse au produit (.use-rounded-corner-inputs sur un ancêtre).

const inputStatuses = ['Empty', 'Filled']
const states = ['Enabled', 'Read only', 'Disabled']

// Le rendu inline les icônes : elles s'affichent sans dépendre du sprite
// hébergé. Le panneau Code montre la référence au sprite, qui est ce que
// l'on écrit dans une vraie page.
const inlineIcons = {
  accessibilityVision: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12.314 6.003c-.097 0-.193-.003-.29-.003-.097 0-.194.003-.29.003C7.232 6.003 2.676 9.176 1.2 12c1.476 2.824 5.984 5.997 10.486 5.997.096 0 .193.003.29.003.097 0 .193-.003.29-.003 4.502 0 9.058-3.173 10.534-5.997-1.476-2.824-5.984-5.997-10.486-5.997Zm-.347 10.317a4.32 4.32 0 1 1 0-8.64 4.32 4.32 0 0 1 0 8.64ZM2.89 12c.715-.997 1.858-2.017 3.19-2.827.433-.263.881-.501 1.342-.712a5.756 5.756 0 0 0 .019 7.102 12.877 12.877 0 0 1-1.381-.734C4.74 14.02 3.603 13.002 2.89 12Zm15.03 2.827c-.466.283-.948.537-1.446.76a5.755 5.755 0 0 0-.018-7.196 12.88 12.88 0 0 1 1.485.78C19.26 9.98 20.396 11 21.11 12c-.715.998-1.857 2.018-3.19 2.828Zm-3.57-3.951a1.158 1.158 0 1 1-1.499-1.359 2.634 2.634 0 1 0 1.5 1.359Z" clip-rule="evenodd"/></svg>',
  lockClosed: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M17.4 9.6h-.6V9c0-2.64-2.16-4.8-4.8-4.8-2.64 0-4.8 2.16-4.8 4.8v.6H4.8v10.8a1.8 1.8 0 0 0 1.8 1.8h12.6V11.4a1.8 1.8 0 0 0-1.8-1.8ZM9 9a3 3 0 1 1 6 0v.6H9V9Zm4.572 6.277a1.802 1.802 0 0 1-.695.695L13.2 19.2h-2.4l.323-3.228a1.8 1.8 0 1 1 2.449-.695Z"/></svg>'
}

const spriteIcons = {
  accessibilityVision: '<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#accessibility-vision"/></svg>',
  lockClosed: '<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#lock-closed"/></svg>'
}

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

const renderPasswordInput = ({ inputStatus, state, outlined, error, leadingIcon, hiddenPassword, label, placeholder }, icons = inlineIcons) => {
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
      ${icons.accessibilityVision}
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
</div>`
  }

  if (leadingIcon) {
    return `<div class="text-input">
  <div class="${containerClasses}">
    ${icons.lockClosed}
    <label for="passwordInput">${label}</label>
    <input type="${fieldType}" class="text-input-field" id="passwordInput" placeholder="${placeholder}"${valueAttr}${invalidAttr}${stateAttr}>
    <button class="btn btn-minimal btn-icon" aria-pressed="false" type="button">
      ${icons.accessibilityVision}
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
          }, spriteIcons)
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
