// OUDS Code — Filter chip
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/chips/#filter-chip
// ÉCART OUVERT — le component set Figma est le <li>, mais le markup n'est
// valide qu'à l'intérieur de <ul class="chips-container">. Le snippet inclut
// donc le conteneur : à confirmer à l'atelier.
// CORRECTION 04/08 — .chip-icon se pose sur l'élément interactif
// (label ou button), jamais sur le <li>.

import type { Args, OudsComponent } from '../core/component'

const selectedMap: Record<string, string> = {
  'True': ' checked',
  'False': ''
}

const stateMap: Record<string, string> = {
  'Enabled': '',
  'Hover': '',
  'Focus': '',
  'Pressed': '',
  'Skeleton': '',
  'Disabled': ' disabled'
}

export const renderFilterChip = ({ label, selected, state, layout }: Args): string | null => {
  const checkedAttr = selectedMap[(selected ? 'True' : 'False')] ?? ''
  const disabledAttr = stateMap[state] ?? ''

  if (layout === 'Text only') {
    return `<ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterChip"${checkedAttr}${disabledAttr} />
    <label class="chip-interactive" for="filterChip">${label}</label>
  </li>
</ul>`
  }

  if (layout === 'Text + Icon') {
    return `<ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterChip"${checkedAttr}${disabledAttr} />
    <label class="chip-interactive" for="filterChip">
      ${label}
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
    </label>
  </li>
</ul>`
  }

  if (layout === 'Icon only') {
    return `<ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterChip"${checkedAttr}${disabledAttr} />
    <label class="chip-interactive chip-icon" for="filterChip">
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
      <span class="visually-hidden">${label}</span>
    </label>
  </li>
</ul>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return null
}

export const component: OudsComponent = {
  id: 'filter-chip',
  name: 'Filter chip',
  figmaName: 'Filter chip | ✅ LIVE v1.4 | 🎨 EA v1.5 |',
  nodeIds: ['61490:23190'],
  codeName: 'filter-chip',
  codeVersion: '1.4.0',
  icon: { prop: '↪ Icon', placeholder: 'heart-empty' },
  props: {
  label: { figma: '✏️ Label' },
  selected: { figma: 'Selected', boolean: true },
  state: { figma: 'State' },
  layout: { figma: 'Layout' },
  },
  render: renderFilterChip,
}
