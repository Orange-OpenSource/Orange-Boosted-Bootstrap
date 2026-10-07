// OUDS Code — Badge icon
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/badges/#badge---icon
// Deux formes possibles : .badge-status-icon (icône de statut automatique) ou
// <svg class="badge-icon"> pour une icône libre. Le snippet retient la première.

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

export const renderBadgeIcon = ({ status, size, state }: Args): string | null => {
  const classes = [
    'badge',
    statusClasses[status],
    sizeClasses[size],
    stateClasses[state]
  ].filter(Boolean).join(' ')

  return `<p class="${classes}">
  <span class="badge-status-icon"></span>
  <span class="visually-hidden">Beware</span>
</p>`
}

export const component: OudsComponent = {
  id: 'badge-icon',
  name: 'Badge icon',
  figmaName: 'Badge icon | ✅ LIVE v1.3 |',
  nodeIds: ['59675:65323'],
  codeName: 'badge-icon',
  codeVersion: '1.3.0',
  props: {
  status: { figma: 'Status' },
  size: { figma: 'Size' },
  state: { figma: 'State' },
  },
  render: renderBadgeIcon,
}
