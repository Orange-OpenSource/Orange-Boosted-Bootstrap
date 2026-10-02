// OUDS Code — Password input
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/password-input/
// Écart — Rounded corner : Réglage transverse au produit (.use-rounded-corner-inputs sur un ancêtre).
// Il n'existe pas de composant « password input » séparé en code : c'est un
// .text-input dont le champ est type="password", avec un bouton bascule
// .btn.btn-minimal.btn-icon portant aria-pressed.
// Hidden password = type="password" / type="text" + aria-pressed inversé.

import type { Args, OudsComponent } from '../core/component'

const outlinedClasses: Record<string, string> = {
  'True': 'text-input-container-outlined',
  'False': ''
}

const hiddenPasswordMap: Record<string, string> = {
  'True': 'password',
  'False': 'text'
}

const inputStatusMap: Record<string, string> = {
  'Empty': '',
  'Empty (Placeholder)': '',
  'Filled': ' value="Input"'
}

const errorMap: Record<string, string> = {
  'False': '',
  'True': ' aria-invalid="true"'
}

const stateMap: Record<string, string> = {
  'Enabled': '',
  'Hover': '',
  'Focus': '',
  'Loading': '',
  'Skeleton': '',
  'Read only': ' readonly',
  'Disabled': ' disabled'
}

export const renderPasswordInput = ({ label, placeholder, outlined, hiddenPassword, inputStatus, error, state, leadingIcon }: Args): string | null => {
  const containerClasses = [
    'text-input-container',
    outlinedClasses[(outlined ? 'True' : 'False')]
  ].filter(Boolean).join(' ')
  const fieldType = hiddenPasswordMap[(hiddenPassword ? 'True' : 'False')] ?? ''
  const valueAttr = inputStatusMap[inputStatus] ?? ''
  const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
  const stateAttr = stateMap[state] ?? ''

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
  return null
}

export const component: OudsComponent = {
  id: 'password-input',
  name: 'Password input',
  figmaName: 'Password input | ✅ LIVE v1.3 | 🎨 EA v1.3.1 |',
  nodeIds: ['66809:35131'],
  codeName: 'password-input',
  codeVersion: '1.3.0',
  props: {
  label: { figma: '✏️ Label' },
  placeholder: { figma: '✏️ Placeholder' },
  outlined: { figma: 'Outlined', boolean: true },
  hiddenPassword: { figma: 'Hidden password', boolean: true },
  inputStatus: { figma: 'Input status' },
  error: { figma: 'Error', boolean: true },
  state: { figma: 'State' },
  leadingIcon: { figma: 'Leading icon', boolean: true },
  },
  render: renderPasswordInput,
}
