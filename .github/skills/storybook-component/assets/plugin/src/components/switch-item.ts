// OUDS Code — Switch item
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/switch/

import type { Args, OudsComponent } from '../core/component'

const reverseClasses: Record<string, string> = {
  'False': '',
  'True': 'control-item-reverse'
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

export const renderSwitchItem = ({ label, reverse, divider, selected, error, state }: Args): string | null => {
  const itemClasses = [
    'switch-item',
    reverseClasses[(reverse ? 'True' : 'False')],
    dividerClasses[(divider ? 'True' : 'False')]
  ].filter(Boolean).join(' ')
  const checkedAttr = selectedMap[(selected ? 'True' : 'False')] ?? ''
  const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
  const stateAttr = stateMap[state] ?? ''

  return `<div class="${itemClasses}">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchItem"${checkedAttr}${invalidAttr}${stateAttr} />
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchItem">${label}</label>
  </div>
</div>`
}

export const component: OudsComponent = {
  id: 'switch-item',
  name: 'Switch item',
  figmaName: 'Switch item | ✅ LIVE v1.5 |',
  nodeIds: ['77669:3166'],
  codeName: 'switch',
  codeVersion: '1.5.0',
  props: {
  label: { figma: '✏️ Label' },
  reverse: { figma: 'Reverse', boolean: true },
  divider: { figma: 'Divider', boolean: true },
  selected: { figma: 'Selected', boolean: true },
  error: { figma: 'Error', boolean: true },
  state: { figma: 'State' },
  },
  render: renderSwitchItem,
}
