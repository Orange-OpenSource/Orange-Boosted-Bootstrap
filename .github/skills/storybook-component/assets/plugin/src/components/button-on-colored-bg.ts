// OUDS Code — Button - On colored bg
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/buttons/#colored-background
// .btn-negative et .btn-brand ne doivent jamais être utilisés sur fond coloré
// (la documentation l'interdit explicitement) — d'où les 3 seules apparences.
// Le wrapper data-bs-theme est une dimension globale : il est rappelé dans le
// snippet parce qu'il conditionne le rendu, mais il appartient à la page.
// Idem pour .use-rounded-corner-buttons, produit par Rounded corner.

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
  'Minimal': 'btn-minimal'
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

export const renderButtonOnColoredBg = ({ roundedCorner, label, appearance, state, layout }: Args): string | null => {
  const roundedOpen = roundedCornerMap[(roundedCorner ? 'True' : 'False')] ?? ''
  const roundedClose = roundedCornerMap2[(roundedCorner ? 'True' : 'False')] ?? ''

  if (layout === 'Text only' && state === 'Loading') {
    const classes = [
    'btn',
    appearanceClasses[appearance],
    'btn-on-colored-bg',
    'loading-indeterminate'
  ].filter(Boolean).join(' ')

    return `<div class="bg-surface-brand-primary p-large">
  <div data-bs-theme="root-inverted">
    ${roundedOpen}<button type="button" class="${classes}" id="loading-btn" disabled>
      ${label}
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="loader" aria-hidden="true">
        <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
      </svg>
      <span role="status" id="loading-btn-msg" class="visually-hidden">Loading message</span>
    </button>${roundedClose}
  </div>
</div>`
  }

  if (layout === 'Text + icon' && state === 'Loading') {
    const classes = [
    'btn',
    appearanceClasses[appearance],
    'btn-on-colored-bg',
    'loading-indeterminate'
  ].filter(Boolean).join(' ')

    return `<div class="bg-surface-brand-primary p-large">
  <div data-bs-theme="root-inverted">
    ${roundedOpen}<button type="button" class="${classes}" id="loading-btn" disabled>
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
      ${label}
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="loader" aria-hidden="true">
        <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
      </svg>
      <span role="status" id="loading-btn-msg" class="visually-hidden">Loading message</span>
    </button>${roundedClose}
  </div>
</div>`
  }

  if (layout === 'Icon only' && state === 'Loading') {
    const classes = [
    'btn',
    'btn-icon',
    appearanceClasses[appearance],
    'btn-on-colored-bg',
    'loading-indeterminate'
  ].filter(Boolean).join(' ')

    return `<div class="bg-surface-brand-primary p-large">
  <div data-bs-theme="root-inverted">
    ${roundedOpen}<button type="button" class="${classes}" id="loading-btn" disabled>
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
      <span class="visually-hidden">${label}</span>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="loader" aria-hidden="true">
        <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
      </svg>
      <span role="status" id="loading-btn-msg" class="visually-hidden">Loading message</span>
    </button>${roundedClose}
  </div>
</div>`
  }

  if (layout === 'Text only') {
    const classes = [
    'btn',
    appearanceClasses[appearance],
    'btn-on-colored-bg'
  ].filter(Boolean).join(' ')
    const disabledAttr = stateMap[state] ?? ''

    return `<div class="bg-surface-brand-primary p-large">
  <div data-bs-theme="root-inverted">
    ${roundedOpen}<button type="button" class="${classes}"${disabledAttr}>${label}</button>${roundedClose}
  </div>
</div>`
  }

  if (layout === 'Text + icon') {
    const classes = [
    'btn',
    appearanceClasses[appearance],
    'btn-on-colored-bg'
  ].filter(Boolean).join(' ')
    const disabledAttr = stateMap[state] ?? ''

    return `<div class="bg-surface-brand-primary p-large">
  <div data-bs-theme="root-inverted">
    ${roundedOpen}<button type="button" class="${classes}"${disabledAttr}>
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
      ${label}
    </button>${roundedClose}
  </div>
</div>`
  }

  if (layout === 'Icon only') {
    const classes = [
    'btn',
    'btn-icon',
    appearanceClasses[appearance],
    'btn-on-colored-bg'
  ].filter(Boolean).join(' ')
    const disabledAttr = stateMap[state] ?? ''

    return `<div class="bg-surface-brand-primary p-large">
  <div data-bs-theme="root-inverted">
    ${roundedOpen}<button type="button" class="${classes}"${disabledAttr}>
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
      <span class="visually-hidden">${label}</span>
    </button>${roundedClose}
  </div>
</div>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return null
}

export const component: OudsComponent = {
  id: 'button-on-colored-bg',
  name: 'Button - On colored bg',
  figmaName: 'Button - On colored bg | ✅ LIVE v3.2 | 🎨 EA v3.4 |',
  nodeIds: ['76619:22590'],
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
  render: renderButtonOnColoredBg,
}
