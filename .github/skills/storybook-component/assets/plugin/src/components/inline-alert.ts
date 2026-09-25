// OUDS Code — Inline alert
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/alerts/#inline-alert
// Écart — State : Skeleton se pose sur un ancêtre : <div aria-busy="true" inert>. Identique pour tous les composants.
// L'inline alert est la forme légère : .alert + .alert-icon + .alert-label,
// sans les conteneurs .alert-container / .alert-text-container qui appartiennent
// à Alert message. .alert-label est OBLIGATOIRE.
// Statut par défaut (neutre) = .alert seul ; .alert-primary / .alert-success /
// .alert-danger sont des classes de compatibilité Bootstrap, à ne pas utiliser.
// Alert message est repassé en ⚙️ DEV entre le 16/07 et le 03/08 : hors périmètre.

import type { Args, OudsComponent } from '../core/component'

const statusClasses: Record<string, string> = {
  'Neutral': '',
  'Accent': 'alert-accent',
  'Negative': 'alert-negative',
  'Positive': 'alert-positive',
  'Info': 'alert-info',
  'Warning': 'alert-warning'
}

const statusMap: Record<string, string> = {
  'Neutral': 'Alert',
  'Accent': 'Alert',
  'Negative': 'Negative alert',
  'Positive': 'Positive alert',
  'Info': 'Info alert',
  'Warning': 'Warning alert'
}

export const renderInlineAlert = ({ label, status }: Args): string | null => {
  const classes = [
    'alert',
    statusClasses[status]
  ].filter(Boolean).join(' ')
  const alertType = statusMap[status] ?? ''

  return `<div class="${classes}">
  <div class="alert-icon"><p class="visually-hidden">${alertType}</p></div>
  <p class="alert-label">${label}</p>
</div>`
}

export const component: OudsComponent = {
  id: 'inline-alert',
  name: 'Inline alert',
  figmaName: 'Inline alert | ✅ LIVE v1.0 |',
  nodeIds: ['82210:18278'],
  codeName: 'inline-alert',
  codeVersion: '1.0.0',
  props: {
  label: { figma: '✏️ Label' },
  status: { figma: 'Status' },
  },
  render: renderInlineAlert,
}
