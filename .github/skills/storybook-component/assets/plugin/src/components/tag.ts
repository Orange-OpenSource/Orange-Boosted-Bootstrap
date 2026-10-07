// OUDS Code — Tag
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/tags/
// ÉCART OUVERT (le plus rentable) — le défaut diverge : Figma part de Muted,
// le code part de emphasized (.tag seul). 432 variantes attendent cet arbitrage.
// Le mapping ci-dessous suit le CODE : Muted ajoute .tag-muted.
// Coins arrondis : ici c'est bien une propriété d'instance (.rounded-none),
// contrairement à Button / Alert / inputs où c'est un réglage transverse.
// Dans une liste, envelopper les tags dans
// <ul class="list-unstyled d-flex column-gap-xsmall" aria-label="…"> avec des <li class="tag">.

import type { Args, OudsComponent } from '../core/component'

const statusClasses: Record<string, string> = {
  'Neutral': '',
  'Accent': 'tag-accent',
  'Positive': 'tag-positive',
  'Info': 'tag-info',
  'Warning': 'tag-warning',
  'Negative': 'tag-negative'
}

const appearanceClasses: Record<string, string> = {
  'Emphasized': '',
  'Muted': 'tag-muted'
}

const sizeClasses: Record<string, string> = {
  'Default': '',
  'Small': 'tag-small'
}

const roundedCornerClasses: Record<string, string> = {
  'True': '',
  'False': 'rounded-none'
}

const stateClasses: Record<string, string> = {
  'Enabled': '',
  'Loading': '',
  'Disabled': 'disabled',
  'Skeleton': ''
}

export const renderTag = ({ label, status, appearance, size, roundedCorner, state, layout }: Args): string | null => {
  const classes = [
    'tag',
    statusClasses[status],
    appearanceClasses[appearance],
    sizeClasses[size],
    roundedCornerClasses[(roundedCorner ? 'True' : 'False')],
    stateClasses[state]
  ].filter(Boolean).join(' ')

  if (layout === 'Text only') {
    return `<p class="${classes}">${label}</p>`
  }

  if (layout === 'Text + Bullet') {
    return `<p class="${classes}">
  <span class="tag-bullet"></span>
  ${label}
</p>`
  }

  if (layout === 'Text + Icon') {
    return `<p class="${classes}">
  <span class="tag-icon si si-settings" aria-hidden="true"></span>
  ${label}
</p>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return null
}

export const component: OudsComponent = {
  id: 'tag',
  name: 'Tag',
  figmaName: 'Tag | ✅ LIVE v1.5 |',
  nodeIds: ['56994:29993'],
  codeName: 'tag',
  codeVersion: '1.5.0',
  props: {
  label: { figma: '✏️ Label' },
  status: { figma: 'Status' },
  appearance: { figma: 'Appearance' },
  size: { figma: 'Size' },
  roundedCorner: { figma: 'Rounded corner', boolean: true },
  state: { figma: 'State' },
  layout: { figma: 'Layout' },
  },
  render: renderTag,
}
