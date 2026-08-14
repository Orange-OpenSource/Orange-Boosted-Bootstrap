// Playground for Link - On colored bg
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/links/#on-colored-background
// Écart — Density : Le code n'a qu'une classe .link-small, portée par Size. ÉCART À ARBITRER.

const layouts = ['Next', 'Previous', 'Text only', 'Text + icon']
const sizes = ['Default', 'Small']
const states = ['Enabled', 'Disabled']

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

const renderLinkOnColoredBg = ({ layout, size, state, label }, icons = inlineIcons) => {
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
      ${icons.heartEmpty}
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
          }, spriteIcons)
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
