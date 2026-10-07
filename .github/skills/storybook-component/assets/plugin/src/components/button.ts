// OUDS Code — Button
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/buttons/
// Écart — Size : Aucun équivalent code — scss/_button-group.scss:162 « OUDS mod: no .btn-sm, nor .btn-lg ». ÉCART À ARBITRER.
// ÉCART OUVERT — Size=Small n'a aucun équivalent code.
// scss/_button-group.scss:162 « OUDS mod: no .btn-sm, nor .btn-lg ».
// Les variantes Small reçoivent donc le snippet Default. 210 variantes concernées.
// Rounded corner produit le wrapper .use-rounded-corner-buttons dans le snippet.
// Attention : c'est un réglage de produit, à ne poser QU'UNE FOIS autour d'un
// groupe de boutons — la documentation l'illustre autour des cinq apparences.
// Coller plusieurs snippets Rounded imbriquerait autant de wrappers.

import type { Args, OudsComponent } from '../core/component'

const roundedCornerMap: Record<string, string> = {
  'True': '<div class="use-rounded-corner-buttons">',
  'False': ''
}

const roundedCornerMap2: Record<string, string> = {
  'True': '</div>',
  'False': ''
}

const appearanceClasses: Record<string, string> = {
  'Default': 'btn-default',
  'Strong': 'btn-strong',
  'Brand': 'btn-brand',
  'Minimal': 'btn-minimal',
  'Negative': 'btn-negative'
}

const stateMap: Record<string, string> = {
  'Enabled': '',
  'Hover': '',
  'Focus': '',
  'Pressed': '',
  'Loading': '',
  'Disabled': ' disabled',
  'Skeleton': ''
}

export const renderButton = ({ roundedCorner, label, appearance, state, layout }: Args): string | null => {
  const roundedOpen = roundedCornerMap[(roundedCorner ? 'True' : 'False')] ?? ''
  const roundedClose = roundedCornerMap2[(roundedCorner ? 'True' : 'False')] ?? ''

  if (layout === 'Text only' && state === 'Loading') {
    const classes = [
    'btn',
    appearanceClasses[appearance],
    'loading-indeterminate'
  ].filter(Boolean).join(' ')

    return `${roundedOpen}<button type="button" class="${classes}" id="loading-btn" disabled>
  ${label}
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="loader" aria-hidden="true">
    <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
  </svg>
  <span role="status" id="loading-btn-msg" class="visually-hidden">Loading message</span>
</button>${roundedClose}`
  }

  if (layout === 'Text + icon' && state === 'Loading') {
    const classes = [
    'btn',
    appearanceClasses[appearance],
    'loading-indeterminate'
  ].filter(Boolean).join(' ')

    return `${roundedOpen}<button type="button" class="${classes}" id="loading-btn" disabled>
  <svg aria-hidden="true">
    <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
  </svg>
  ${label}
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="loader" aria-hidden="true">
    <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
  </svg>
  <span role="status" id="loading-btn-msg" class="visually-hidden">Loading message</span>
</button>${roundedClose}`
  }

  if (layout === 'Icon only' && state === 'Loading') {
    const classes = [
    'btn',
    'btn-icon',
    appearanceClasses[appearance],
    'loading-indeterminate'
  ].filter(Boolean).join(' ')

    return `${roundedOpen}<button type="button" class="${classes}" id="loading-btn" disabled>
  <svg aria-hidden="true">
    <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
  </svg>
  <span class="visually-hidden">${label}</span>
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="loader" aria-hidden="true">
    <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
  </svg>
  <span role="status" id="loading-btn-msg" class="visually-hidden">Loading message</span>
</button>${roundedClose}`
  }

  if (layout === 'Text only') {
    const classes = [
    'btn',
    appearanceClasses[appearance]
  ].filter(Boolean).join(' ')
    const disabledAttr = stateMap[state] ?? ''

    return `${roundedOpen}<button type="button" class="${classes}"${disabledAttr}>${label}</button>${roundedClose}`
  }

  if (layout === 'Text + icon') {
    const classes = [
    'btn',
    appearanceClasses[appearance]
  ].filter(Boolean).join(' ')
    const disabledAttr = stateMap[state] ?? ''

    return `${roundedOpen}<button type="button" class="${classes}"${disabledAttr}>
  <svg aria-hidden="true">
    <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
  </svg>
  ${label}
</button>${roundedClose}`
  }

  if (layout === 'Icon only') {
    const classes = [
    'btn',
    'btn-icon',
    appearanceClasses[appearance]
  ].filter(Boolean).join(' ')
    const disabledAttr = stateMap[state] ?? ''

    return `${roundedOpen}<button type="button" class="${classes}"${disabledAttr}>
  <svg aria-hidden="true">
    <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
  </svg>
  <span class="visually-hidden">${label}</span>
</button>${roundedClose}`
  }

  // Le mapping ne couvre pas cette combinaison.
  return null
}

export const component: OudsComponent = {
  id: 'button',
  name: 'Button',
  figmaName: 'Button | ✅ LIVE v3.2 | ⚙️ DEV v3.3 | 🎨 EA v3.4 |',
  nodeIds: ['65123:34697'],
  codeName: 'button',
  codeVersion: '3.2.0',
  icon: { prop: '↪ Icon', placeholder: 'heart-empty' },
  props: {
  roundedCorner: { figma: 'Rounded corner', boolean: true },
  label: { figma: '✏️ Label' },
  appearance: { figma: 'Appearance' },
  state: { figma: 'State' },
  layout: { figma: 'Layout' },
  },
  render: renderButton,
}
