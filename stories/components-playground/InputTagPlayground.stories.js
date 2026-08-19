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

// `component-max-width` is the design system class, but the stylesheet only
// compounds it with the form components — text input, text area, select input,
// control items. Elsewhere the constraint goes on an ancestor, with the value
// the class carries: 30rem.
const maxWidthWrapper = (markup, maxWidth) => (maxWidth
  ? `<div style="max-width: 30rem">
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`
  : markup)

// Skeleton is carried by an ancestor, `<div aria-busy="true" inert>`, never by
// the component itself: every child of that container renders as a skeleton, and
// `inert` takes it out of the tab order and of the accessibility tree. Same
// markup for every component of the design system.
const skeletonWrapper = (markup, skeleton) => (skeleton
  ? `<div aria-busy="true" inert>
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`
  : markup)

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
    },
    maxWidth: {
      name: 'Max width',
      control: 'boolean',
      description: 'Bounds the component to 30rem, the value of the `component-max-width` class — which the stylesheet reserves for the form components, so here it goes on an ancestor.',
    },
    skeleton: {
      control: 'boolean',
      description: 'Wraps the component in `<div aria-busy="true" inert>`, the way the design system puts a real component in a loading state. Same markup for every component.',
    }
  }
}

export const PlaygroundInputTag = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { state, label, hiddenLabel, maxWidth, skeleton } = context.args

          return skeletonWrapper(maxWidthWrapper(renderInputTag({
            state,
            label,
            hiddenLabel,
          }), maxWidth), skeleton)
        },
      },
    },
  },
  render: ({ state, label, hiddenLabel, maxWidth, skeleton }) => {
    return skeletonWrapper(maxWidthWrapper(renderInputTag({
      state,
      label,
      hiddenLabel,
    }), maxWidth), skeleton)
  },
  args: {
    state: 'Enabled',
    label: 'Label',
    hiddenLabel: 'Remove this tag',
    maxWidth: false,
    skeleton: false
  },
}
