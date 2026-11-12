// OUDS Code — Switch
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/switch/#standalone
// Un switch est un <input type="checkbox"> porteur de role="switch".

import type { Args, OudsComponent } from '../core/component'

const selectedMap: Record<string, string> = {
  'False': '',
  'True': ' checked'
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

export const renderSwitch = ({ selected, state }: Args): string | null => {
  const checkedAttr = selectedMap[(selected ? 'True' : 'False')] ?? ''
  const stateAttr = stateMap[state] ?? ''

  return `<label class="switch-standalone">
  <input class="control-item-indicator" type="checkbox" role="switch" value=""${checkedAttr}${stateAttr} />
  <span class="visually-hidden">Standalone switch</span>
</label>`
}

export const component: OudsComponent = {
  id: 'switch',
  name: 'Switch',
  figmaName: 'Switch | ✅ LIVE v1.5 |',
  nodeIds: ['57320:50574'],
  codeName: 'switch',
  codeVersion: '1.5.0',
  props: {
  selected: { figma: 'Selected', boolean: true },
  state: { figma: 'State' },
  },
  render: renderSwitch,
}
