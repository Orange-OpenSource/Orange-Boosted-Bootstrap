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

// `Error` is one of the states too. It is an attribute rather than a wrapper —
// `aria-invalid="true"` on the field — but it cannot be combined with any of
// the others: a disabled field is not also invalid, and neither is a skeleton.
// One select, one question.

const stateOptions = [...states, 'Error']

const isError = (state) => state === 'Error'

// The state the component is actually rendered in: `Error` and `Skeleton` sit
// in the same select but are not values the markup carries as a state.
const baseState = (state) => (states.includes(state) ? state : states[0])

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
  const stateAttr = stateMap[baseState(state)]

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
      options: stateOptions,
    },
    selected: {
      name: 'Selected',
      control: 'boolean',
    }
  }
}

export const PlaygroundRadioButton = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { state, selected } = context.args

          return renderRadioButton({
            state,
            selected,
            error: isError(state),
          })
        },
      },
    },
  },
  render: ({ state, selected }) => {
    return renderRadioButton({
      state,
      selected,
      error: isError(state),
    })
  },
  args: {
    state: 'Enabled',
    selected: false,
    error: false
  },
}
