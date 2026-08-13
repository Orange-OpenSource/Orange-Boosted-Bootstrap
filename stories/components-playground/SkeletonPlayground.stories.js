// Playground for Skeleton
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/skeleton/

const securityMarginOptions = ['True', 'False']

const securityMarginClasses = {
  'True': '',
  'False': 'skeleton-no-margins'
}

const renderSkeleton = ({ securityMargin }) => {
  const classes = [
    'skeleton',
    securityMarginClasses[securityMargin]
  ].filter(Boolean).join(' ')

  return `<div class="${classes}" style="width: 50%; height: 50px;" inert></div>`
}

export default {
  title: 'Playground/Skeleton',
  argTypes: {
    securityMargin: {
      control: 'select',
      options: securityMarginOptions,
    }
  }
}

export const PlaygroundSkeleton = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { securityMargin } = context.args

          return renderSkeleton({
            securityMargin,
          })
        },
      },
    },
  },
  render: ({ securityMargin }) => {
    return renderSkeleton({
      securityMargin,
    })
  },
  args: {
    securityMargin: 'True'
  },
}

// Chaque valeur ci-dessous change réellement le rendu ; les autres sont omises.
// PlaygroundSkeleton porte les args par défaut : elle tient lieu de story Default.

export const False = {
  parameters: PlaygroundSkeleton.parameters,
  render: PlaygroundSkeleton.render,
  args: {
    ...PlaygroundSkeleton.args,
    securityMargin: 'False'
  },
}
