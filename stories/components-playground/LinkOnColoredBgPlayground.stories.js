// Playground for Link - On colored bg
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/links/#on-colored-background
// Écart — Density : Le code n'a qu'une classe .link-small, portée par Size. ÉCART À ARBITRER.

const layouts = ['Next', 'Previous', 'Text only', 'Text + icon']
const sizes = ['Default', 'Small']
const states = ['Enabled', 'Disabled']

// Propriétés Figma sans traduction dans le HTML : la valeur est figée et
// aucun contrôle n'est exposé, changer la valeur ne changerait rien au rendu.
const density = 'Default'

const stateMap = {
  'Enabled': ' href="#"',
  'Hover': ' href="#"',
  'Focus': ' href="#"',
  'Pressed': ' href="#"',
  'Disabled': ' aria-disabled="true"',
  'Skeleton': ' href="#"'
}

const sizeClasses = {
  'Default': '',
  'Small': 'link-small'
}

const renderLinkOnColoredBg = ({ layout, size, state, label }) => {
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
  return ''
}

export default {
  title: 'Playground/Link - On colored bg',
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

export const PlaygroundLinkOnColoredBg = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { layout, size, state, label } = context.args

          return renderLinkOnColoredBg({
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
    return renderLinkOnColoredBg({
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

// Chaque valeur ci-dessous change réellement le rendu ; les autres sont omises.
// PlaygroundLinkOnColoredBg porte les args par défaut : elle tient lieu de story Default.

export const Previous = {
  parameters: PlaygroundLinkOnColoredBg.parameters,
  render: PlaygroundLinkOnColoredBg.render,
  args: {
    ...PlaygroundLinkOnColoredBg.args,
    layout: 'Previous'
  },
}

export const TextOnly = {
  parameters: PlaygroundLinkOnColoredBg.parameters,
  render: PlaygroundLinkOnColoredBg.render,
  args: {
    ...PlaygroundLinkOnColoredBg.args,
    layout: 'Text only'
  },
}

export const TextIcon = {
  parameters: PlaygroundLinkOnColoredBg.parameters,
  render: PlaygroundLinkOnColoredBg.render,
  args: {
    ...PlaygroundLinkOnColoredBg.args,
    layout: 'Text + icon'
  },
}

export const Disabled = {
  parameters: PlaygroundLinkOnColoredBg.parameters,
  render: PlaygroundLinkOnColoredBg.render,
  args: {
    ...PlaygroundLinkOnColoredBg.args,
    state: 'Disabled'
  },
}
