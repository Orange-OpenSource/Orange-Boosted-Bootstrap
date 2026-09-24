// OUDS Code — Breadcrumb
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/breadcrumb/
// Drilldown = nombre de niveaux. La page courante porte .active,
// aria-current="page" et n'est pas un lien.

import type { Args, OudsComponent } from '../core/component'

export const renderBreadcrumb = ({ pageLabel, drilldown }: Args): string | null => {
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
  return null
}

export const component: OudsComponent = {
  id: 'breadcrumb',
  name: 'Breadcrumb',
  figmaName: 'Breadcrumb | ✅ LIVE v1.1 | 🎨 EA v1.2 |',
  nodeIds: ['56306:15766'],
  codeName: 'breadcrumb',
  codeVersion: '1.1.0',
  props: {
  pageLabel: { figma: '✏️ Page label' },
  drilldown: { figma: 'Drilldown' },
  },
  render: renderBreadcrumb,
}
