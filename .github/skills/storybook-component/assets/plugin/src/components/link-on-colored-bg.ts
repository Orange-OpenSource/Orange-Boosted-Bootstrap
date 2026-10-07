// OUDS Code — Link - On colored bg
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/links/#on-colored-background
// Écart — Density : Le code n'a qu'une classe .link-small, portée par Size. ÉCART À ARBITRER.

import type { Args, OudsComponent } from '../core/component'

const sizeClasses: Record<string, string> = {
  'Default': '',
  'Small': 'link-small'
}

const stateMap: Record<string, string> = {
  'Enabled': ' href="#"',
  'Hover': ' href="#"',
  'Focus': ' href="#"',
  'Pressed': ' href="#"',
  'Disabled': ' aria-disabled="true"',
  'Skeleton': ' href="#"'
}

export const renderLinkOnColoredBg = ({ label, size, state, layout }: Args): string | null => {
  const disabledAttr = stateMap[state] ?? ''

  if (layout === 'Text only') {
    const classes = [
    'link',
    'link-on-colored-bg',
    sizeClasses[size]
  ].filter(Boolean).join(' ')

    return `<div class="bg-surface-brand-primary p-large">
  <div data-bs-theme="root-inverted">
    <a class="${classes}"${disabledAttr}>${label}</a>
  </div>
</div>`
  }

  if (layout === 'Visited') {
    const classes = [
    'link',
    'link-on-colored-bg',
    sizeClasses[size]
  ].filter(Boolean).join(' ')

    return `<div class="bg-surface-brand-primary p-large">
  <div data-bs-theme="root-inverted">
    <a class="${classes}"${disabledAttr}>${label}</a>
  </div>
</div>`
  }

  if (layout === 'Text + icon') {
    const classes = [
    'link',
    'link-on-colored-bg',
    'icon-link',
    sizeClasses[size]
  ].filter(Boolean).join(' ')

    return `<div class="bg-surface-brand-primary p-large">
  <div data-bs-theme="root-inverted">
    <a class="${classes}"${disabledAttr}>
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
      ${label}
    </a>
  </div>
</div>`
  }

  if (layout === 'Next') {
    const classes = [
    'link',
    'link-on-colored-bg',
    'link-chevron',
    sizeClasses[size]
  ].filter(Boolean).join(' ')

    return `<div class="bg-surface-brand-primary p-large">
  <div data-bs-theme="root-inverted">
    <a class="${classes}"${disabledAttr}>${label}</a>
  </div>
</div>`
  }

  if (layout === 'Previous') {
    const classes = [
    'link',
    'link-on-colored-bg',
    'link-chevron',
    'back',
    sizeClasses[size]
  ].filter(Boolean).join(' ')

    return `<div class="bg-surface-brand-primary p-large">
  <div data-bs-theme="root-inverted">
    <a class="${classes}"${disabledAttr}>${label}</a>
  </div>
</div>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return null
}

export const component: OudsComponent = {
  id: 'link-on-colored-bg',
  name: 'Link - On colored bg',
  figmaName: 'Link - On colored bg | ✅ LIVE v2.2 | 🎨 EA v2.4 |',
  nodeIds: ['77098:133711'],
  codeName: 'link',
  codeVersion: '2.2.0',
  icon: { prop: '↪ Icon', placeholder: 'heart-empty' },
  props: {
  label: { figma: '✏️ Label' },
  size: { figma: 'Size' },
  state: { figma: 'State' },
  layout: { figma: 'Layout' },
  },
  render: renderLinkOnColoredBg,
}
