// OUDS Code — Badge
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/badges/
// CORRECTION 04/08 — .badge-negative n'existe pas : .badge seul EST le statut
// négatif (scss/_badges.scss:6-7). Et .badge-disabled est déprécié, retiré en
// v1.5.0 : la documentation utilise .disabled.
// Un badge est un <p> porteur d'un texte masqué : sans le
// <span class="visually-hidden">, l'information n'existe pas pour un lecteur d'écran.

import type { Args, OudsComponent } from '../core/component'

const statusClasses: Record<string, string> = {
  'Neutral': 'badge-neutral',
  'Accent': 'badge-accent',
  'Positive': 'badge-positive',
  'Info': 'badge-info',
  'Warning': 'badge-warning',
  'Negative': ''
}

const sizeClasses: Record<string, string> = {
  'Xsmall': 'badge-xsmall',
  'Small': 'badge-small',
  'Medium': '',
  'Large': 'badge-large'
}

const stateClasses: Record<string, string> = {
  'Enabled': '',
  'Disabled': 'disabled'
}

export const renderBadge = ({ status, size, state }: Args): string | null => {
  const classes = [
    'badge',
    statusClasses[status],
    sizeClasses[size],
    stateClasses[state]
  ].filter(Boolean).join(' ')

  return `<p class="${classes}"><span class="visually-hidden">Beware</span></p>`
}

export const component: OudsComponent = {
  id: 'badge',
  name: 'Badge',
  figmaName: 'Badge | ✅ LIVE v1.2 |',
  nodeIds: ['59675:65033'],
  codeName: 'badge',
  codeVersion: '1.2.0',
  props: {
  status: { figma: 'Status' },
  size: { figma: 'Size' },
  state: { figma: 'State' },
  },
  render: renderBadge,
}
