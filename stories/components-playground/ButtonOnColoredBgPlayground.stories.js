// Playground for Button - On colored bg
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/buttons/#colored-background
// Écart — Rounded corner : Réglage transverse au produit (.use-rounded-corner-buttons sur un ancêtre).

const appearances = ['Default', 'Strong', 'Minimal']
const layouts = ['Text only', 'Text + icon', 'Icon only']
const states = ['Enabled', 'Loading', 'Disabled']

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

const renderButtonOnColoredBg = ({ appearance, layout, state, label }) => {
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
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
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
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
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
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
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
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
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
          })
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

// Chaque valeur ci-dessous change réellement le rendu ; les autres sont omises.
// PlaygroundButtonOnColoredBg porte les args par défaut : elle tient lieu de story Default.

export const Strong = {
  parameters: PlaygroundButtonOnColoredBg.parameters,
  render: PlaygroundButtonOnColoredBg.render,
  args: {
    ...PlaygroundButtonOnColoredBg.args,
    appearance: 'Strong'
  },
}

export const Minimal = {
  parameters: PlaygroundButtonOnColoredBg.parameters,
  render: PlaygroundButtonOnColoredBg.render,
  args: {
    ...PlaygroundButtonOnColoredBg.args,
    appearance: 'Minimal'
  },
}

export const Disabled = {
  parameters: PlaygroundButtonOnColoredBg.parameters,
  render: PlaygroundButtonOnColoredBg.render,
  args: {
    ...PlaygroundButtonOnColoredBg.args,
    state: 'Disabled'
  },
}

export const Loading = {
  parameters: PlaygroundButtonOnColoredBg.parameters,
  render: PlaygroundButtonOnColoredBg.render,
  args: {
    ...PlaygroundButtonOnColoredBg.args,
    state: 'Loading'
  },
}
