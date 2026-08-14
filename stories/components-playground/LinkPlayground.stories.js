// Playground for Link
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/links/
// Écart — Density : Le code n'a qu'une classe .link-small, portée par Size. ÉCART À ARBITRER.

const layouts = ['Next', 'Previous', 'Text only', 'Text + icon', 'Visited']
const sizes = ['Default', 'Small']
const states = ['Enabled', 'Disabled']

// Propriétés Figma sans traduction dans le HTML : la valeur est figée et
// aucun contrôle n'est exposé, changer la valeur ne changerait rien au rendu.
const density = 'Default'

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

const renderLink = ({ layout, size, state, label }) => {
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
  return ''
}

export default {
  title: 'Playground/Link',
  argTypes: {
    layout: {
      control: 'select',
      options: layouts,
    },
    size: {
      control: 'select',
      options: sizes,
    },
    state: {
      control: 'select',
      options: states,
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
        transform: (_src, context) => {
          const { layout, size, state, label } = context.args

          return renderLink({
            layout,
            size,
            state,
            label,
          })
        },
      },
    },
  },
  render: ({ layout, size, state, label }) => {
    return renderLink({
      layout,
      size,
      state,
      label,
    })
  },
  args: {
    layout: 'Next',
    size: 'Default',
    state: 'Enabled',
    label: 'Label'
  },
}
