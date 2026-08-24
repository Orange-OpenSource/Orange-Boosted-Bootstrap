// Playground for Switch
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/switch/#standalone

// Fix — Read only: `readonly` is ignored by the browser on a checkbox, a radio
// button and a switch — only the value of a text field can be read only. The
// documentation shows a read only DOM for the *items* (a `<span role="…">` in
// place of the input), never for a standalone control, so the value is dropped
// here rather than emitted as an attribute that does nothing. The states left
// are the two that change the markup.
const states = ['Enabled', 'Disabled']

const selectedMap = {
  'False': '',
  'True': ' checked'
}

const stateMap = {
  'Enabled': '',
  // Hover, Focus, Pressed and Skeleton are Figma states with no class in front
  // of them: they are not values of the control, so they are not entries here.
  'Disabled': ' disabled'
}

const renderSwitch = ({ state, selected, hiddenLabel }) => {
  const checkedAttr = selectedMap[(selected ? 'True' : 'False')] ?? ''
  const stateAttr = stateMap[state] ?? ''

  return `<label class="switch-standalone">
  <input class="control-item-indicator" type="checkbox" role="switch" value=""${checkedAttr}${stateAttr} />
  <span class="visually-hidden">${hiddenLabel}</span>
</label>`
}

export default {
  title: 'Playground/Switch',
  argTypes: {
    state: {
      control: 'select',
      options: states,
    },
    selected: {
      control: 'boolean',
    },
    hiddenLabel: {
      name: 'Hidden label',
      control: 'text',
      description: 'Carried by the `visually-hidden` span: a standalone switch has no visible label, this is all a screen reader announces.',
    }
  }
}

export const PlaygroundSwitch = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { state, selected, hiddenLabel } = context.args

          return renderSwitch({
            state,
            selected,
            hiddenLabel,
          })
        },
      },
    },
  },
  render: ({ state, selected, hiddenLabel }) => {
    return renderSwitch({
      state,
      selected,
      hiddenLabel,
    })
  },
  args: {
    state: 'Enabled',
    selected: false,
    hiddenLabel: 'Standalone switch'
  },
}
