// Playground for Radio button
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/radio-button/#standalone

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

const errorMap = {
  'False': '',
  'True': ' aria-invalid="true"'
}

const stateMap = {
  'Enabled': '',
  // Hover, Focus, Pressed and Skeleton are Figma states with no class in front
  // of them: they are not values of the control, so they are not entries here.
  'Disabled': ' disabled'
}

// The `visually-hidden` span is the control's whole accessible name and never
// varies with anything the panel offers, so it is a constant rather than a
// control: a text no one ever sees on the canvas is not an axis of the
// component.
const hiddenLabel = 'Default standalone radio button'

const renderRadioButton = ({ state, selected, error }) => {
  const checkedAttr = selectedMap[(selected ? 'True' : 'False')] ?? ''
  const invalidAttr = errorMap[(error ? 'True' : 'False')] ?? ''
  const stateAttr = stateMap[state] ?? ''

  return `<label class="radio-button-standalone">
  <input class="control-item-indicator" type="radio" value=""${checkedAttr}${invalidAttr}${stateAttr} />
  <span class="visually-hidden">${hiddenLabel}</span>
</label>`
}

export default {
  title: 'Playground/Radio button',
  argTypes: {
    state: {
      name: 'State',
      control: 'select',
      options: states,
    },
    selected: {
      name: 'Selected',
      control: 'boolean',
    },
    error: {
      name: 'Error',
      control: 'boolean',
    },
  }
}

export const PlaygroundRadioButton = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { state, selected, error } = context.args

          return renderRadioButton({
            state,
            selected,
            error,
          })
        },
      },
    },
  },
  render: ({ state, selected, error }) => {
    return renderRadioButton({
      state,
      selected,
      error,
    })
  },
  args: {
    state: 'Enabled',
    selected: false,
    error: false
  },
}
