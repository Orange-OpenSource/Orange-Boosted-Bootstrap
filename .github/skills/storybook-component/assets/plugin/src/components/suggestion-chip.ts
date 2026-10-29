// OUDS Code — Suggestion chip
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/chips/#suggestion-chip

import type { Args, OudsComponent } from '../core/component'

const stateMap: Record<string, string> = {
  'Enabled': '',
  'Hover': '',
  'Focus': '',
  'Pressed': '',
  'Skeleton': '',
  'Disabled': ' disabled'
}

export const renderSuggestionChip = ({ label, state, layout }: Args): string | null => {
  const disabledAttr = stateMap[state] ?? ''

  if (layout === 'Text only') {
    return `<ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button"${disabledAttr}>${label}</button>
  </li>
</ul>`
  }

  if (layout === 'Text + icon') {
    return `<ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button"${disabledAttr}>
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
      ${label}
    </button>
  </li>
</ul>`
  }

  if (layout === 'Icon only') {
    return `<ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon" type="button"${disabledAttr}>
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
      <span class="visually-hidden">${label}</span>
    </button>
  </li>
</ul>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return null
}

export const component: OudsComponent = {
  id: 'suggestion-chip',
  name: 'Suggestion chip',
  figmaName: 'Suggestion chip | ✅ LIVE v1.4 | 🎨 EA v1.5 |',
  nodeIds: ['61538:89794'],
  codeName: 'suggestion-chip',
  codeVersion: '1.4.0',
  icon: { prop: '↪ Icon', placeholder: 'heart-empty' },
  props: {
  label: { figma: '✏️ Label' },
  state: { figma: 'State' },
  layout: { figma: 'Layout' },
  },
  render: renderSuggestionChip,
}
