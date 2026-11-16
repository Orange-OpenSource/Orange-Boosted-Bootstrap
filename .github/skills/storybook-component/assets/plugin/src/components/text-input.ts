// OUDS Code — Text input
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/text-input/
// Écart — Rounded corner : Réglage transverse au produit (.use-rounded-corner-inputs sur un ancêtre).
// RÉSOLU 04/08 — State=Loading a désormais un équivalent documenté :
// .loading-indeterminate (durée inconnue) ou .loading-determinate (durée connue)
// sur le .text-input-field, avec le <svg class="loader"> déjà présent dans le
// conteneur et un <span role="status">. Voir text-input.mdx § Loading.
// Cela débloque les 192 variantes qui étaient en attente.
// Invalid = aria-invalid="true" sur le champ + <p class="error-text"> associé
// par aria-describedby. Rounded corner est transverse (.use-rounded-corner-inputs).

import type { Args, OudsComponent } from '../core/component'

const outlinedClasses: Record<string, string> = {
  'True': 'text-input-container-outlined',
  'False': ''
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

export const renderTextInput = ({ label, placeholder, outlined, inputStatus, error, state, leadingIcon, trailingAction }: Args): string | null => {
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
  return null
}

export const component: OudsComponent = {
  id: 'text-input',
  name: 'Text input',
  figmaName: 'Text input | ✅ LIVE v1.4 | 🎨 EA v1.4.1|',
  nodeIds: ['65303:14022'],
  codeName: 'text-input',
  codeVersion: '1.4.0',
  props: {
  label: { figma: '✏️ Label' },
  placeholder: { figma: '✏️ Placeholder' },
  outlined: { figma: 'Outlined', boolean: true },
  inputStatus: { figma: 'Input status' },
  error: { figma: 'Error', boolean: true },
  state: { figma: 'State' },
  leadingIcon: { figma: 'Leading icon', boolean: true },
  trailingAction: { figma: 'Trailing action', boolean: true },
  },
  render: renderTextInput,
}
