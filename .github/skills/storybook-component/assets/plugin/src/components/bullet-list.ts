// OUDS Code — Bullet list
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/bullet-list/
// Écart — Nested level : L'imbrication se fait par des <ul>/<ol> imbriqués dans les <li> — c'est de la structure de contenu, pas une propriété du composant.
// Écart — Skeleton : Se pose sur un ancêtre : <div aria-busy="true" inert>. Identique pour tous les composants.
// CORRECTION 04/08 — .list-unstyled n'est PAS la liste sans puce d'OUDS :
// c'est .bullet-list-bare. La documentation dit explicitement de ne pas les
// confondre. Type=Ordered bascule l'élément sur <ol>.
// Nested level est une imbrication de <ul>/<ol>, pas une classe.

import type { Args, OudsComponent } from '../core/component'

const textStyleClasses: Record<string, string> = {
  'Body Large': '',
  'Body Medium': 'fs-bm'
}

const boldClasses: Record<string, string> = {
  'True': '',
  'False': 'fw-normal'
}

export const renderBulletList = ({ label, textStyle, bold, type }: Args): string | null => {
  if (type === 'Unordered') {
    const classes = [
    'bullet-list',
    textStyleClasses[textStyle],
    boldClasses[(bold ? 'True' : 'False')]
  ].filter(Boolean).join(' ')

    return `<ul class="${classes}">
  <li>${label}</li>
  <li>${label}</li>
</ul>`
  }

  if (type === 'Ordered') {
    const classes = [
    'bullet-list',
    textStyleClasses[textStyle],
    boldClasses[(bold ? 'True' : 'False')]
  ].filter(Boolean).join(' ')

    return `<ol class="${classes}">
  <li>${label}</li>
  <li>${label}</li>
</ol>`
  }

  if (type === 'Bare') {
    const classes = [
    'bullet-list',
    'bullet-list-bare',
    textStyleClasses[textStyle],
    boldClasses[(bold ? 'True' : 'False')]
  ].filter(Boolean).join(' ')

    return `<ul class="${classes}">
  <li>${label}</li>
  <li>${label}</li>
</ul>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return null
}

export const component: OudsComponent = {
  id: 'bullet-list',
  name: 'Bullet list',
  figmaName: 'Bullet list | ✅ LIVE v1.1 |',
  nodeIds: ['58283:196824'],
  codeName: 'bullet-list',
  codeVersion: '1.1.0',
  props: {
  label: { figma: '✏️ Label' },
  textStyle: { figma: 'Text style' },
  bold: { figma: 'Bold', boolean: true },
  type: { figma: 'Type' },
  },
  render: renderBulletList,
}
