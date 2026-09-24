// OUDS Code — Radio button
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/radio-button/#standalone

import type { Args, OudsComponent } from '../core/component'

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

export const renderRadioButton = ({ selected, error, state }: Args): string | null => {
  const checkedAttr = selectedMap[(selected ? 'True' : 'False')] ?? ''
  const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
  const stateAttr = stateMap[state] ?? ''

  return `<label class="radio-button-standalone">
  <input class="control-item-indicator" type="radio" value=""${checkedAttr}${invalidAttr}${stateAttr} />
  <span class="visually-hidden">Default standalone radio button</span>
</label>`
}

export const component: OudsComponent = {
  id: 'radio-button',
  name: 'Radio button',
  figmaName: 'Radio button | ✅ LIVE v1.4 |',
  nodeIds: ['57321:239915'],
  codeName: 'radio-button',
  codeVersion: '1.4.0',
  props: {
  selected: { figma: 'Selected', boolean: true },
  error: { figma: 'Error', boolean: true },
  state: { figma: 'State' },
  },
  render: renderRadioButton,
}
