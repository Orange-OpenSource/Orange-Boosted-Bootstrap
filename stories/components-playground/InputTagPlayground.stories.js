// Playground for Input tag
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/tags/#input-tag

const states = ['Enabled', 'Disabled']

const stateMap = {
  'Enabled': '',
  // Hover, Pressed-Touch, Focus and Skeleton are Figma states with no class in
  // front of them: they are not values of the control, so they are not entries
  // here.
  'Disabled': ' disabled'
}

const renderInputTag = ({ state, label, hiddenLabel }) => {
  const disabledAttr = stateMap[state] ?? ''

  return `<button type="button" class="tag tag-input"${disabledAttr}>
  ${label}
  <span class="visually-hidden">${hiddenLabel}</span>
</button>`
}

export default {
  title: 'Playground/Input tag',
  argTypes: {
    state: {
      control: 'select',
      options: states,
    },
    label: {
      control: 'text',
    },
    hiddenLabel: {
      name: 'Hidden label (remove button)',
      control: 'text',
      description: 'Carried by the `visually-hidden` span: it announces what the button does. The visible text is `label`.',
    }
  }
}

export const PlaygroundInputTag = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { state, label, hiddenLabel } = context.args

          return renderInputTag({
            state,
            label,
            hiddenLabel,
          })
        },
      },
    },
  },
  render: ({ state, label, hiddenLabel }) => {
    return renderInputTag({
      state,
      label,
      hiddenLabel,
    })
  },
  args: {
    state: 'Enabled',
    label: 'Label',
    hiddenLabel: 'Remove this tag'
  },
}
