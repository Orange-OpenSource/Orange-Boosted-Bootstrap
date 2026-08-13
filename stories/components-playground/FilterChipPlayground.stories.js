// Playground for Filter chip
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/chips/#filter-chip

const layouts = ['Text only', 'Text + Icon', 'Icon only']
const selectedOptions = ['False', 'True']
const states = ['Enabled', 'Disabled']

const selectedMap = {
  'True': ' checked',
  'False': ''
}

const stateMap = {
  'Enabled': '',
  'Hover': '',
  'Focus': '',
  'Pressed': '',
  'Skeleton': '',
  'Disabled': ' disabled'
}

const renderFilterChip = ({ layout, selected, state, label }) => {
  const checkedAttr = selectedMap[selected] ?? ''
  const disabledAttr = stateMap[state] ?? ''

  if (layout === 'Text only') {
    return `<ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterChip"${checkedAttr}${disabledAttr} />
    <label class="chip-interactive" for="filterChip">${label}</label>
  </li>
</ul>`
  }

  if (layout === 'Text + Icon') {
    return `<ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterChip"${checkedAttr}${disabledAttr} />
    <label class="chip-interactive" for="filterChip">
      ${label}
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
    </label>
  </li>
</ul>`
  }

  if (layout === 'Icon only') {
    return `<ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterChip"${checkedAttr}${disabledAttr} />
    <label class="chip-interactive chip-icon" for="filterChip">
      <svg aria-hidden="true">
        <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/>
      </svg>
      <span class="visually-hidden">${label}</span>
    </label>
  </li>
</ul>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return ''
}

export default {
  title: 'Playground/Filter chip',
  argTypes: {
    layout: {
      control: 'select',
      options: layouts,
    },
    selected: {
      control: 'select',
      options: selectedOptions,
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

export const PlaygroundFilterChip = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { layout, selected, state, label } = context.args

          return renderFilterChip({
            layout,
            selected,
            state,
            label,
          })
        },
      },
    },
  },
  render: ({ layout, selected, state, label }) => {
    return renderFilterChip({
      layout,
      selected,
      state,
      label,
    })
  },
  args: {
    layout: 'Text only',
    selected: 'False',
    state: 'Enabled',
    label: 'Label'
  },
}

// Chaque valeur ci-dessous change réellement le rendu ; les autres sont omises.
// PlaygroundFilterChip porte les args par défaut : elle tient lieu de story Default.

export const TextIcon = {
  parameters: PlaygroundFilterChip.parameters,
  render: PlaygroundFilterChip.render,
  args: {
    ...PlaygroundFilterChip.args,
    layout: 'Text + Icon'
  },
}

export const IconOnly = {
  parameters: PlaygroundFilterChip.parameters,
  render: PlaygroundFilterChip.render,
  args: {
    ...PlaygroundFilterChip.args,
    layout: 'Icon only'
  },
}

export const Disabled = {
  parameters: PlaygroundFilterChip.parameters,
  render: PlaygroundFilterChip.render,
  args: {
    ...PlaygroundFilterChip.args,
    state: 'Disabled'
  },
}
