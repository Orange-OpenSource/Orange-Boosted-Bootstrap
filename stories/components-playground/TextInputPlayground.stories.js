// Playground for Text input
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/text-input/
// Écart — Rounded corner : Réglage transverse au produit (.use-rounded-corner-inputs sur un ancêtre).

const inputStatuses = ['Empty', 'Filled']
const states = ['Enabled', 'Read only', 'Disabled']

// Le rendu inline les icônes : elles s'affichent sans dépendre du sprite
// hébergé. Le panneau Code montre la référence au sprite, qui est ce que
// l'on écrit dans une vraie page.
const inlineIcons = {
  heartEmpty: '<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M18.4 11.242 12 18.247l-6.4-7.005-.003-.004a3.285 3.285 0 0 1 .247-4.678 3.383 3.383 0 0 1 4.625.128l.979.92.552.525.552-.525.98-.92.009-.01a3.352 3.352 0 0 1 2.37-.97c1.852 0 3.354 1.483 3.354 3.313a3.29 3.29 0 0 1-.862 2.217l-.003.004Zm1.463-6.125A5.635 5.635 0 0 0 12 5.08c-2.185-2.118-5.694-2.105-7.863.038a5.475 5.475 0 0 0-.105 7.702L12 21.5l7.968-8.68a5.475 5.475 0 0 0-.105-7.703Z"/></svg>'
}

const spriteIcons = {
  heartEmpty: '<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"/></svg>'
}

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

const renderTextInput = ({ inputStatus, state, outlined, error, leadingIcon, trailingAction, label, placeholder }, icons = inlineIcons) => {
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
    ${icons.heartEmpty}
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
      ${icons.heartEmpty}
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
    ${icons.heartEmpty}
    <label for="textInput">${label}</label>
    <input type="text" class="text-input-field" id="textInput" placeholder="${placeholder}"${valueAttr}${invalidAttr}${stateAttr}>
    <button class="btn btn-minimal btn-icon" type="button">
      ${icons.heartEmpty}
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
          }, spriteIcons)
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
