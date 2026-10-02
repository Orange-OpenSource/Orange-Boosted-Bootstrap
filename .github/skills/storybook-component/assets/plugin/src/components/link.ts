// OUDS Code — Link
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/links/
// Écart — Density : Le code n'a qu'une classe .link-small, portée par Size. ÉCART À ARBITRER.
// ÉCART OUVERT — Figma expose deux dimensions (Size et Density) là où le code
// n'a qu'une classe .link-small (scss/_links.scss:119). Le mapping fait porter
// .link-small sur Size=Small ; Density=Compact reste sans équivalent.
// Disabled est aria-disabled="true", pas une classe, et la documentation
// recommande de retirer href.
// Visited est une pseudo-classe CSS (:visited) : aucun markup spécifique.

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

export const renderLink = ({ label, size, state, layout }: Args): string | null => {
  if (layout === 'Text only') {
    const classes = [
    'link',
    sizeClasses[size]
  ].filter(Boolean).join(' ')
    const disabledAttr = stateMap[state] ?? ''

    return `<a class="${classes}"${disabledAttr}>${label}</a>`
  }

  if (layout === 'Visited') {
    const classes = [
    'link',
    sizeClasses[size]
  ].filter(Boolean).join(' ')

    return `<!-- "Visited" is rendered by the CSS :visited pseudo-class — same markup as Text only -->
<a class="${classes}" href="#">${label}</a>`
  }

  if (layout === 'Text + icon') {
    const classes = [
    'link',
    'icon-link',
    sizeClasses[size]
  ].filter(Boolean).join(' ')
    const disabledAttr = stateMap[state] ?? ''

    return `<a class="${classes}"${disabledAttr}>
  <svg aria-hidden="true">
    <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
  </svg>
  ${label}
</a>`
  }

  if (layout === 'Next') {
    const classes = [
    'link',
    'link-chevron',
    sizeClasses[size]
  ].filter(Boolean).join(' ')
    const disabledAttr = stateMap[state] ?? ''

    return `<a class="${classes}"${disabledAttr}>${label}</a>`
  }

  if (layout === 'Previous') {
    const classes = [
    'link',
    'link-chevron',
    'back',
    sizeClasses[size]
  ].filter(Boolean).join(' ')
    const disabledAttr = stateMap[state] ?? ''

    return `<a class="${classes}"${disabledAttr}>${label}</a>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return null
}

export const component: OudsComponent = {
  id: 'link',
  name: 'Link',
  figmaName: 'Link | ✅ LIVE v2.2 | 🎨 EA v2.4 |',
  nodeIds: ['51981:6593'],
  codeName: 'link',
  codeVersion: '2.2.0',
  icon: { prop: '↪ Icon', placeholder: 'heart-empty' },
  props: {
  label: { figma: '✏️ Label' },
  size: { figma: 'Size' },
  state: { figma: 'State' },
  layout: { figma: 'Layout' },
  },
  render: renderLink,
}
