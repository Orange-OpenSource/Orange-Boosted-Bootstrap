// Playground for Suggestion chip
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/chips/#suggestion-chip

const layouts = ['Text only', 'Text + icon', 'Icon only']
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

const stateMap = {
  'Enabled': '',
  'Hover': '',
  'Focus': '',
  'Pressed': '',
  'Skeleton': '',
  'Disabled': ' disabled'
}

const renderSuggestionChip = ({ layout, state, label }, icons = inlineIcons) => {
  const disabledAttr = stateMap[state] ?? ''

  if (layout === 'Text only') {
    return `<ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button"${disabledAttr}>${label}</button>
  </li>
</ul>`
  }

  if (layout === 'Text + icon') {
    return `<ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button"${disabledAttr}>
      ${icons.heartEmpty}
      ${label}
    </button>
  </li>
</ul>`
  }

  if (layout === 'Icon only') {
    return `<ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon" type="button"${disabledAttr}>
      ${icons.heartEmpty}
      <span class="visually-hidden">${label}</span>
    </button>
  </li>
</ul>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return ''
}

export default {
  title: 'Playground/Suggestion chip',
  argTypes: {
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

export const PlaygroundSuggestionChip = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { layout, state, label } = context.args

          return renderSuggestionChip({
            layout,
            state,
            label,
          }, spriteIcons)
        },
      },
    },
  },
  render: ({ layout, state, label }) => {
    return renderSuggestionChip({
      layout,
      state,
      label,
    })
  },
  args: {
    layout: 'Text only',
    state: 'Enabled',
    label: 'Label'
  },
}
