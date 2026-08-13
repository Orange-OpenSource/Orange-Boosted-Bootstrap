// Playground for Divider
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/divider/

const orientations = ['Horizontal', 'Vertical']

const renderDivider = ({ orientation }) => {
  if (orientation === 'Horizontal') {
    return `<!-- semantic separator -->
<hr />
<!-- decorative variant: <div class="border-top border-default my-medium"></div> -->`
  }

  if (orientation === 'Vertical') {
    return `<div class="vr"></div>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return ''
}

export default {
  title: 'Playground/Divider',
  argTypes: {
    orientation: {
      control: 'select',
      options: orientations,
    }
  }
}

export const PlaygroundDivider = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { orientation } = context.args

          return renderDivider({
            orientation,
          })
        },
      },
    },
  },
  render: ({ orientation }) => {
    return renderDivider({
      orientation,
    })
  },
  args: {
    orientation: 'Horizontal'
  },
}

// Chaque valeur ci-dessous change réellement le rendu ; les autres sont omises.
// PlaygroundDivider porte les args par défaut : elle tient lieu de story Default.

export const Vertical = {
  parameters: PlaygroundDivider.parameters,
  render: PlaygroundDivider.render,
  args: {
    ...PlaygroundDivider.args,
    orientation: 'Vertical'
  },
}
