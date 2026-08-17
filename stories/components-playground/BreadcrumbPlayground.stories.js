// Playground for Breadcrumb
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/breadcrumb/
//
// Écart — « propriétés du Link » : côté Figma, chaque niveau du breadcrumb est
// une instance de Link. Côté HTML, la doc OUDS ne pose aucune classe sur les
// items : le style vient du sélecteur `.breadcrumb-item a`. Exposer ici des
// contrôles Size / Layout / State ne changerait donc rien au rendu — on
// n'expose que ce qui a une traduction réelle dans le markup : le libellé,
// le lien, et la troncature. ÉCART À ARBITRER.

const drilldowns = ['N+1', 'N+2', 'N+3', 'N+4']

// Storybook injecte toujours une option vide « Choose option… » dans un
// contrôle `select`, et il n'y a aucun moyen de la retirer. La sélectionner
// remettait `drilldown` à `undefined` et le rendu tombait dans la branche
// « combinaison non couverte » → canvas vide. On retombe désormais sur la
// valeur par défaut.
const DEFAULT_DRILLDOWN = 'N+1'

// Nombre de niveaux affichés avant la page courante.
// N+1 = Home + page courante, chaque cran ajoute un niveau intermédiaire.
const ancestorCount = {
  'N+1': 1,
  'N+2': 2,
  'N+3': 3,
  'N+4': 4
}

const levelKeys = ['level1', 'level2', 'level3', 'level4']

const escapeHtml = value => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

// Un item = un <li>. Seul le dernier est `active` et porte un <span> au lieu
// d'un <a>. `truncate: false` ajoute `flex-shrink-0`, qui empêche le niveau
// d'être rogné quand la largeur manque (cf. exemple « no truncation » de la doc).
const renderItem = ({ label, href, truncate, current }) => {
  const text = escapeHtml(label)
  const classes = [
    'breadcrumb-item',
    current ? 'active' : null,
    truncate ? null : 'flex-shrink-0'
  ].filter(Boolean).join(' ')

  const content = current
    ? `<span title="${text}">${text}</span>`
    : `<a href="${escapeHtml(href)}" title="${text}">${text}</a>`

  return `    <li class="${classes}"${current ? ' aria-current="page"' : ''}>${content}</li>`
}

const buildItems = args => {
  const drilldown = drilldowns.includes(args.drilldown) ? args.drilldown : DEFAULT_DRILLDOWN

  const ancestors = levelKeys
    .slice(0, ancestorCount[drilldown])
    .map(key => ({
      label: args[`${key}Label`],
      href: args[`${key}Href`],
      truncate: args[`${key}Truncate`],
      current: false
    }))

  return [
    ...ancestors,
    { label: args.pageLabel, truncate: args.pageTruncate, current: true }
  ]
}

const renderBreadcrumb = args => {
  const items = buildItems(args)

  // La doc utilise « basic breadcrumb » pour le cas à deux niveaux,
  // « full breadcrumb » au-delà.
  const ariaLabel = items.length > 2 ? 'full breadcrumb' : 'basic breadcrumb'

  return `<nav aria-label="${ariaLabel}">
  <ol class="breadcrumb">
${items.map(renderItem).join('\n')}
  </ol>
</nav>`
}

// Les trois contrôles d'un niveau sont identiques : on les génère plutôt que
// de recopier douze blocs. `table.category` les regroupe dans le panneau
// Controls. Tous les niveaux restent visibles ; ceux au-delà du drilldown
// choisi sont simplement ignorés par le rendu.
const levelControls = (key, category) => ({
  [`${key}Label`]: {
    name: 'Label',
    control: 'text',
    table: { category }
  },
  [`${key}Href`]: {
    name: 'Href',
    control: 'text',
    table: { category }
  },
  [`${key}Truncate`]: {
    name: 'Truncatable',
    control: 'boolean',
    description: 'Décoché → `flex-shrink-0` : le niveau garde sa largeur et n\'est jamais tronqué.',
    table: { category }
  }
})

export default {
  title: 'Playground/Breadcrumb',
  argTypes: {
    drilldown: {
      control: 'select',
      options: drilldowns,
      description: 'Profondeur. « Choose option… » retombe sur ' + DEFAULT_DRILLDOWN + '.',
      table: { category: 'Structure' }
    },
    ...levelControls('level1', 'Level 1'),
    ...levelControls('level2', 'Level 2'),
    ...levelControls('level3', 'Level 3'),
    ...levelControls('level4', 'Level 4'),
    pageLabel: {
      name: 'Label',
      control: 'text',
      table: { category: 'Current page' }
    },
    pageTruncate: {
      name: 'Truncatable',
      control: 'boolean',
      description: 'Décoché → `flex-shrink-0` : le niveau garde sa largeur et n\'est jamais tronqué.',
      table: { category: 'Current page' }
    }
  }
}

export const PlaygroundBreadcrumb = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => renderBreadcrumb(context.args)
      }
    }
  },
  render: renderBreadcrumb,
  args: {
    drilldown: 'N+1',

    level1Label: 'Home',
    level1Href: '#',
    level1Truncate: true,

    level2Label: 'Category 1',
    level2Href: '#',
    level2Truncate: true,

    level3Label: 'Sub category B',
    level3Href: '#',
    level3Truncate: true,

    level4Label: 'Sub sub category IV',
    level4Href: '#',
    level4Truncate: true,

    pageLabel: 'Current page',
    pageTruncate: true
  }
}