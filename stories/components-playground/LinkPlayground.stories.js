// Playground for Link
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/links/
// Écart — Density : Le code n'a qu'une classe .link-small, portée par Size. ÉCART À ARBITRER.

const layouts = ['Next', 'Previous', 'Text only', 'Text + icon', 'Visited']
const sizes = ['Default', 'Small']
const states = ['Enabled', 'Disabled']

// Storybook injecte toujours une option vide « Choose option… » dans un
// contrôle `select` et ne permet pas de la retirer. La sélectionner remettait
// l'arg à `undefined` et le rendu tombait dans la branche « combinaison non
// couverte » → canvas vide. On retombe désormais sur la valeur par défaut.
const fallback = { layout: 'Next', size: 'Default', state: 'Enabled' }
const pick = (value, allowed, fallbackValue) => allowed.includes(value) ? value : fallbackValue

// Le rendu inline les icônes : elles s'affichent sans dépendre du sprite
// hébergé. Le panneau Code montre la référence au sprite, qui est ce que
// l'on écrit dans une vraie page.
const inlineIcons = {
  heartEmpty: '<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M18.4 11.242 12 18.247l-6.4-7.005-.003-.004a3.285 3.285 0 0 1 .247-4.678 3.383 3.383 0 0 1 4.625.128l.979.92.552.525.552-.525.98-.92.009-.01a3.352 3.352 0 0 1 2.37-.97c1.852 0 3.354 1.483 3.354 3.313a3.29 3.29 0 0 1-.862 2.217l-.003.004Zm1.463-6.125A5.635 5.635 0 0 0 12 5.08c-2.185-2.118-5.694-2.105-7.863.038a5.475 5.475 0 0 0-.105 7.702L12 21.5l7.968-8.68a5.475 5.475 0 0 0-.105-7.703Z"/></svg>'
}

const spriteIcons = {
  heartEmpty: '<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"/></svg>'
}

// Propriétés Figma sans traduction dans le HTML : la valeur est figée et
// aucun contrôle n'est exposé, changer la valeur ne changerait rien au rendu.
const density = 'Default'

// Chaque Layout n'est qu'une combinaison de classes différente — une table
// suffit, inutile de dupliquer le gabarit <a> cinq fois.
const layoutClasses = {
  'Text only': ['link'],
  'Visited': ['link'],
  'Text + icon': ['link', 'icon-link'],
  'Next': ['link', 'link-chevron'],
  'Previous': ['link', 'link-chevron', 'back']
}

const sizeClasses = {
  'Default': '',
  'Small': 'link-small'
}

const stateMap = {
  'Enabled': ' href="#"',
  'Hover': ' href="#"',
  'Focus': ' href="#"',
  'Pressed': ' href="#"',
  'Disabled': ' aria-disabled="true"',
  'Skeleton': ' href="#"'
}

const renderLink = ({ layout, size, state, label }, icons = inlineIcons) => {
  const currentLayout = pick(layout, layouts, fallback.layout)
  const currentSize = pick(size, sizes, fallback.size)
  const currentState = pick(state, states, fallback.state)

  const classes = [
    ...layoutClasses[currentLayout],
    sizeClasses[currentSize]
  ].filter(Boolean).join(' ')

  if (currentLayout === 'Visited') {
    // L'état visité vient de la pseudo-classe CSS, pas d'une classe : le
    // markup est celui de « Text only » et State ne s'y applique pas.
    return `<!-- "Visited" is rendered by the CSS :visited pseudo-class — same markup as Text only -->
<a class="${classes}" href="#">${label}</a>`
  }

  const attrs = stateMap[currentState] ?? ''

  if (currentLayout === 'Text + icon') {
    return `<a class="${classes}"${attrs}>
  ${icons.heartEmpty}
  ${label}
</a>`
  }

  return `<a class="${classes}"${attrs}>${label}</a>`
}

export default {
  title: 'Playground/Link',
  argTypes: {
    layout: {
      control: 'select',
      options: layouts,
      description: '« Choose option… » retombe sur ' + fallback.layout + '.'
    },
    size: {
      control: 'select',
      options: sizes,
      description: '« Choose option… » retombe sur ' + fallback.size + '.'
    },
    state: {
      control: 'select',
      options: states,
      description: '« Choose option… » retombe sur ' + fallback.state + '.'
    },
    label: {
      control: 'text',
    }
  }
}

export const PlaygroundLink = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => renderLink(context.args, spriteIcons),
      },
    },
  },
  render: args => renderLink(args),
  args: {
    layout: 'Next',
    size: 'Default',
    state: 'Enabled',
    label: 'Label'
  },
}