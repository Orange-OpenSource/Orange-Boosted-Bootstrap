// OUDS Code — Checkbox
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/checkbox/#standalone
// CORRECTION 04/08 — .form-check-input est la classe de COMPATIBILITÉ Bootstrap,
// pas le markup OUDS. Le vrai markup est <label class="checkbox-standalone">
// enveloppant un <input class="control-item-indicator">.
// Selection status = Indeterminate se pose en JavaScript
// (input.indeterminate = true) : aucun attribut HTML ne l'exprime.

import type { Args, OudsComponent } from '../core/component'

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

export const renderCheckbox = ({ selectionStatus, error, state }: Args): string | null => {
  const checkedAttr = selectionStatusMap[selectionStatus] ?? ''
  const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
  const stateAttr = stateMap[state] ?? ''

  return `<label class="checkbox-standalone">
  <input class="control-item-indicator" type="checkbox" value=""${checkedAttr}${invalidAttr}${stateAttr} />
  <span class="visually-hidden">Standalone checkbox</span>
</label>`
}

export const component: OudsComponent = {
  id: 'checkbox',
  name: 'Checkbox',
  figmaName: 'Checkbox | ✅ LIVE v2.4 |',
  nodeIds: ['57321:91497'],
  codeName: 'checkbox',
  codeVersion: '2.4.0',
  props: {
  selectionStatus: { figma: 'Selection status' },
  error: { figma: 'Error', boolean: true },
  state: { figma: 'State' },
  },
  render: renderCheckbox,
}
