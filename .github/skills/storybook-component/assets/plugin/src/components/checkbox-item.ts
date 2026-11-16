// OUDS Code — Checkbox item
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/checkbox/
// Dans un groupe, envelopper les items dans <fieldset class="control-items-list">.

import type { Args, OudsComponent } from '../core/component'

const reverseClasses: Record<string, string> = {
  'False': '',
  'True': 'control-item-reverse'
}

const dividerClasses: Record<string, string> = {
  'true': 'control-item-divider',
  'false': ''
}

const selectionStatusMap: Record<string, string> = {
  'Unselected': '',
  'Selected': ' checked',
  'Indeterminate': ''
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

export const renderCheckboxItem = ({ label, reverse, divider, selectionStatus, error, state }: Args): string | null => {
  const itemClasses = [
    'checkbox-item',
    reverseClasses[(reverse ? 'True' : 'False')],
    dividerClasses[(divider ? 'True' : 'False')]
  ].filter(Boolean).join(' ')
  const checkedAttr = selectionStatusMap[selectionStatus] ?? ''
  const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
  const stateAttr = stateMap[state] ?? ''

  return `<div class="${itemClasses}">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxItem"${checkedAttr}${invalidAttr}${stateAttr} />
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxItem">${label}</label>
  </div>
</div>`
}

export const component: OudsComponent = {
  id: 'checkbox-item',
  name: 'Checkbox item',
  figmaName: 'Checkbox item | ✅ LIVE v2.4 |',
  nodeIds: ['76325:10773'],
  codeName: 'checkbox',
  codeVersion: '2.4.0',
  props: {
  label: { figma: '✏️ Label' },
  reverse: { figma: 'Reverse', boolean: true },
  divider: { figma: 'Divider', boolean: true },
  selectionStatus: { figma: 'Selection status' },
  error: { figma: 'Error', boolean: true },
  state: { figma: 'State' },
  },
  render: renderCheckboxItem,
}
