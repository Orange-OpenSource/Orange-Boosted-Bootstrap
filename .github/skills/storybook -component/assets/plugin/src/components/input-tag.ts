// OUDS Code — Input tag
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/tags/#input-tag
// Le <span class="visually-hidden">Remove this tag</span> est obligatoire :
// sans lui, le bouton n'annonce pas son action.

import type { Args, OudsComponent } from '../core/component'

const stateMap: Record<string, string> = {
  'Enabled': '',
  'Hover': '',
  'Pressed-Touch': '',
  'Focus': '',
  'Skeleton': '',
  'Disabled': ' disabled'
}

export const renderInputTag = ({ label, state }: Args): string | null => {
  const disabledAttr = stateMap[state] ?? ''

  return `<button type="button" class="tag tag-input"${disabledAttr}>
  ${label}
  <span class="visually-hidden">Remove this tag</span>
</button>`
}

export const component: OudsComponent = {
  id: 'input-tag',
  name: 'Input tag',
  figmaName: 'Input tag | ✅ LIVE v1.2 |',
  nodeIds: ['59391:20882'],
  codeName: 'input-tag',
  codeVersion: '1.2.0',
  props: {
  label: { figma: '✏️ Label' },
  state: { figma: 'State' },
  },
  render: renderInputTag,
}
