// Playground for Button - On colored bg
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/buttons/#colored-background
// Écart — Rounded corner : Réglage transverse au produit (.use-rounded-corner-buttons sur un ancêtre).

const appearances = ['Default', 'Strong', 'Minimal']
const layouts = ['Text only', 'Text + icon', 'Icon only']
const states = ['Enabled', 'Loading', 'Disabled']

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
const roundedCorner = 'False'

const appearanceClasses = {
  'Default': 'btn-default',
  'Strong': 'btn-strong',
  'Minimal': 'btn-minimal'
}

const stateMap = {
  'Enabled': '',
  'Hover': '',
  'Focus': '',
  'Pressed': '',
  'Loading': '',
  'Disabled': ' disabled',
  'Skeleton': ''
}

const renderButtonOnColoredBg = ({ appearance, layout, state, label }, icons = inlineIcons) => {
  if (layout === 'Text only' && state === 'Loading') {
    const classes = [
    'btn',
    appearanceClasses[appearance],
    'btn-on-colored-bg',
    'loading-indeterminate'
  ].filter(Boolean).join(' ')

    return `<div class="bg-surface-brand-primary p-large">
  <div data-bs-theme="root-inverted">
    <button type="button" class="${classes}" id="loading-btn" disabled>
      ${label}
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="loader" aria-hidden="true">
        <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
      </svg>
      <span role="status" id="loading-btn-msg" class="visually-hidden">Loading message</span>
    </button>
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
    <button type="button" class="${classes}" id="loading-btn" disabled>
      ${icons.heartEmpty}
      ${label}
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="loader" aria-hidden="true">
        <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
      </svg>
      <span role="status" id="loading-btn-msg" class="visually-hidden">Loading message</span>
    </button>
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
    <button type="button" class="${classes}" id="loading-btn" disabled>
      ${icons.heartEmpty}
      <span class="visually-hidden">${label}</span>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="loader" aria-hidden="true">
        <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
      </svg>
      <span role="status" id="loading-btn-msg" class="visually-hidden">Loading message</span>
    </button>
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
    <button type="button" class="${classes}"${disabledAttr}>${label}</button>
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
    <button type="button" class="${classes}"${disabledAttr}>
      ${icons.heartEmpty}
      ${label}
    </button>
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
    <button type="button" class="${classes}"${disabledAttr}>
      ${icons.heartEmpty}
      <span class="visually-hidden">${label}</span>
    </button>
  </div>
</div>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return ''
}

export default {
  title: 'Playground/Button - On colored bg',
  argTypes: {
    appearance: {
      control: 'select',
      options: appearances,
    },
    layout: {
      control: 'select',
      options: layouts,
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

export const PlaygroundButtonOnColoredBg = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { appearance, layout, state, label } = context.args

          return renderButtonOnColoredBg({
            appearance,
            layout,
            state,
            label,
          }, spriteIcons)
        },
      },
    },
  },
  render: ({ appearance, layout, state, label }) => {
    return renderButtonOnColoredBg({
      appearance,
      layout,
      state,
      label,
    })
  },
  args: {
    appearance: 'Default',
    layout: 'Text only',
    state: 'Enabled',
    label: 'Label'
  },
}
