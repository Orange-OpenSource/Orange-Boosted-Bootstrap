// OUDS Code — Skeleton
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/skeleton/
// .skeleton est la brique de base. Pour squelettiser un composant existant,
// c'est l'ancêtre qui porte aria-busy="true" et inert — voir l'état Skeleton
// des autres composants.
// Variantes : .skeleton-title, .skeleton-text, .skeleton-no-margins.

import type { Args, OudsComponent } from '../core/component'

const securityMarginClasses: Record<string, string> = {
  'True': '',
  'False': 'skeleton-no-margins'
}

export const renderSkeleton = ({ securityMargin }: Args): string | null => {
  const classes = [
    'skeleton',
    securityMarginClasses[(securityMargin ? 'True' : 'False')]
  ].filter(Boolean).join(' ')

  return `<div class="${classes}" style="width: 50%; height: 50px;" inert></div>`
}

export const component: OudsComponent = {
  id: 'skeleton',
  name: 'Skeleton',
  figmaName: 'Skeleton | ✅ LIVE v1.0 |',
  nodeIds: ['1066:53332'],
  codeName: 'skeleton',
  codeVersion: '1.0.0',
  props: {
  securityMargin: { figma: 'Security margin', boolean: true },
  },
  render: renderSkeleton,
}
