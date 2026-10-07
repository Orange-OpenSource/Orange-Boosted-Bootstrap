// OUDS Code — Radio button item
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/radio-button/

import type { Args, OudsComponent } from '../core/component'

const reverseClasses: Record<string, string> = {
  'False': '',
  'True': 'control-item-reverse'
}

const outlinedClasses: Record<string, string> = {
  'False': '',
  'True': 'radio-button-item-outlined'
}

const dividerClasses: Record<string, string> = {
  'true': 'control-item-divider',
  'false': ''
}

const selectedMap: Record<string, string> = {
  'False': '',
  'True': ' checked'
}

const errorMap: Record<string, string> = {
  'False': '',
  'True': ' aria-invalid="true"'
}

const stateMap: Record<string, string> = {
  'Enabled': '',
  'Hover': '',
  'Focus': '',
  'Pressed': '',
  'Skeleton': '',
  'Read only': ' readonly',
  'Disabled': ' disabled'
}

export const renderRadioButtonItem = ({ label, reverse, outlined, divider, selected, error, state }: Args): string | null => {
  const itemClasses = [
    'radio-button-item',
    reverseClasses[(reverse ? 'True' : 'False')],
    outlinedClasses[(outlined ? 'True' : 'False')],
    dividerClasses[(divider ? 'True' : 'False')]
  ].filter(Boolean).join(' ')
  const checkedAttr = selectedMap[(selected ? 'True' : 'False')] ?? ''
  const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
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

export const component: OudsComponent = {
  id: 'radio-button-item',
  name: 'Radio button item',
  figmaName: 'Radio button item | ✅ LIVE v1.4 |',
  nodeIds: ['76315:6190'],
  codeName: 'radio-button',
  codeVersion: '1.4.0',
  props: {
  label: { figma: '✏️ Label' },
  reverse: { figma: 'Reverse', boolean: true },
  outlined: { figma: 'Outlined', boolean: true },
  divider: { figma: 'Divider', boolean: true },
  selected: { figma: 'Selected', boolean: true },
  error: { figma: 'Error', boolean: true },
  state: { figma: 'State' },
  },
  render: renderRadioButtonItem,
}
