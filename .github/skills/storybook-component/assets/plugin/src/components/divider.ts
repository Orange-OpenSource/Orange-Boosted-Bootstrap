// OUDS Code — Divider
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/divider/
// Aucune classe dédiée. Trois formes selon l'intention :
// <hr /> quand le séparateur a un sens sémantique,
// <div class="border-top border-default"> s'il est purement décoratif,
// <div class="vr"></div> en vertical.
// Épaisseur : .border-thin / .border-medium / .border-thick / .border-thicker.

import type { Args, OudsComponent } from '../core/component'

export const renderDivider = ({ orientation }: Args): string | null => {
  if (orientation === 'Horizontal') {
    return `<!-- semantic separator -->
<hr />
<!-- decorative variant: <div class="border-top border-default my-medium"></div> -->`
  }

  if (orientation === 'Vertical') {
    return `<div class="vr"></div>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return null
}

export const component: OudsComponent = {
  id: 'divider',
  name: 'Divider',
  figmaName: 'Divider | ✅ LIVE v1.0 |',
  nodeIds: ['954:51563'],
  codeName: 'divider',
  codeVersion: '1.0.0',
  props: {
  orientation: { figma: 'Orientation' },
  },
  render: renderDivider,
}
