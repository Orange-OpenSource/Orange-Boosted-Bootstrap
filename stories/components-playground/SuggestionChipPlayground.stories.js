// Playground for Suggestion chip
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/chips/#suggestion-chip

const layouts = ['Text only', 'Text + icon', 'Icon only']
const states = ['Enabled', 'Disabled']

const stateMap = {
  'Enabled': '',
  'Hover': '',
  'Focus': '',
  'Pressed': '',
  'Skeleton': '',
  'Disabled': ' disabled'
}

const renderSuggestionChip = ({ layout, state, label }) => {
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
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
      ${label}
    </button>
  </li>
</ul>`
  }

  if (layout === 'Icon only') {
    return `<ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon" type="button"${disabledAttr}>
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
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
          })
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

// Chaque valeur ci-dessous change réellement le rendu ; les autres sont omises.
// PlaygroundSuggestionChip porte les args par défaut : elle tient lieu de story Default.

export const TextIcon = {
  parameters: PlaygroundSuggestionChip.parameters,
  render: PlaygroundSuggestionChip.render,
  args: {
    ...PlaygroundSuggestionChip.args,
    layout: 'Text + icon'
  },
}

export const IconOnly = {
  parameters: PlaygroundSuggestionChip.parameters,
  render: PlaygroundSuggestionChip.render,
  args: {
    ...PlaygroundSuggestionChip.args,
    layout: 'Icon only'
  },
}

export const Disabled = {
  parameters: PlaygroundSuggestionChip.parameters,
  render: PlaygroundSuggestionChip.render,
  args: {
    ...PlaygroundSuggestionChip.args,
    state: 'Disabled'
  },
}
