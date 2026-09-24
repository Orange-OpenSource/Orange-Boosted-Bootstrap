// OUDS Code — Badge count
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/badges/#badge---count

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
  'Medium': '',
  'Large': 'badge-large'
}

const stateClasses: Record<string, string> = {
  'Enabled': '',
  'Disabled': 'disabled'
}

export const renderBadgeCount = ({ number, status, size, state }: Args): string | null => {
  const classes = [
    'badge',
    'badge-count',
    statusClasses[status],
    sizeClasses[size],
    stateClasses[state]
  ].filter(Boolean).join(' ')

  return `<p class="${classes}">${number}<span class="visually-hidden">error</span></p>`
}

export const component: OudsComponent = {
  id: 'badge-count',
  name: 'Badge count',
  figmaName: 'Badge count | ✅ LIVE v1.2 |',
  nodeIds: ['59675:65178'],
  codeName: 'badge-count',
  codeVersion: '1.2.0',
  props: {
  number: { figma: '✏️ Number' },
  status: { figma: 'Status' },
  size: { figma: 'Size' },
  state: { figma: 'State' },
  },
  render: renderBadgeCount,
}
