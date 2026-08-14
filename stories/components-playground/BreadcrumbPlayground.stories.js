// Playground for Breadcrumb
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/breadcrumb/

const drilldowns = ['N+1', 'N+2', 'N+3', 'N+4']

const renderBreadcrumb = ({ drilldown, pageLabel }) => {
  const page = pageLabel

  if (drilldown === 'N+1') {
    return `<nav aria-label="basic breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#" title="Home">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page"><span title="${page}">${page}</span></li>
  </ol>
</nav>`
  }

  if (drilldown === 'N+2') {
    return `<nav aria-label="full breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#" title="Home">Home</a></li>
    <li class="breadcrumb-item"><a href="#" title="Category 1">Category 1</a></li>
    <li class="breadcrumb-item active" aria-current="page"><span title="${page}">${page}</span></li>
  </ol>
</nav>`
  }

  if (drilldown === 'N+3') {
    return `<nav aria-label="full breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#" title="Home">Home</a></li>
    <li class="breadcrumb-item"><a href="#" title="Category 1">Category 1</a></li>
    <li class="breadcrumb-item"><a href="#" title="Sub category B">Sub category B</a></li>
    <li class="breadcrumb-item active" aria-current="page"><span title="${page}">${page}</span></li>
  </ol>
</nav>`
  }

  if (drilldown === 'N+4') {
    return `<nav aria-label="full breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#" title="Home">Home</a></li>
    <li class="breadcrumb-item"><a href="#" title="Category 1">Category 1</a></li>
    <li class="breadcrumb-item"><a href="#" title="Sub category B">Sub category B</a></li>
    <li class="breadcrumb-item"><a href="#" title="Sub sub category IV">Sub sub category IV</a></li>
    <li class="breadcrumb-item active" aria-current="page"><span title="${page}">${page}</span></li>
  </ol>
</nav>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return ''
}

export default {
  title: 'Playground/Breadcrumb',
  argTypes: {
    drilldown: {
      control: 'select',
      options: drilldowns,
    },
    pageLabel: {
      control: 'text',
    }
  }
}

export const PlaygroundBreadcrumb = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { drilldown, pageLabel } = context.args

          return renderBreadcrumb({
            drilldown,
            pageLabel,
          })
        },
      },
    },
  },
  render: ({ drilldown, pageLabel }) => {
    return renderBreadcrumb({
      drilldown,
      pageLabel,
    })
  },
  args: {
    drilldown: 'N+1',
    pageLabel: 'Current page'
  },
}
