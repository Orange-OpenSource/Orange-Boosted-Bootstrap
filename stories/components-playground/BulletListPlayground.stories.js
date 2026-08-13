// Playground for Bullet list
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/bullet-list/
// Écart — Nested level : L'imbrication se fait par des <ul>/<ol> imbriqués dans les <li> — c'est de la structure de contenu, pas une propriété du composant.
// Écart — Skeleton : Se pose sur un ancêtre : <div aria-busy="true" inert>. Identique pour tous les composants.

const types = ['Unordered', 'Ordered', 'Bare']
const textStyles = ['Body Large', 'Body Medium']
const boldOptions = ['True', 'False']

// Propriétés Figma sans traduction dans le HTML : la valeur est figée et
// aucun contrôle n'est exposé, changer la valeur ne changerait rien au rendu.
const nestedLevel = '0'
const skeleton = 'False'
const number = '1.'
const uppercaseLetter = 'A.'
const lowercaseLetter = 'a.'

const textStyleClasses = {
  'Body Large': '',
  'Body Medium': 'fs-bm'
}

const boldClasses = {
  'True': '',
  'False': 'fw-normal'
}

const renderBulletList = ({ type, textStyle, bold, label }) => {
  if (type === 'Unordered') {
    const classes = [
    'bullet-list',
    textStyleClasses[textStyle],
    boldClasses[bold]
  ].filter(Boolean).join(' ')

    return `<ul class="${classes}">
  <li>${label}</li>
  <li>${label}</li>
</ul>`
  }

  if (type === 'Ordered') {
    const classes = [
    'bullet-list',
    textStyleClasses[textStyle],
    boldClasses[bold]
  ].filter(Boolean).join(' ')

    return `<ol class="${classes}">
  <li>${label}</li>
  <li>${label}</li>
</ol>`
  }

  if (type === 'Bare') {
    const classes = [
    'bullet-list',
    'bullet-list-bare',
    textStyleClasses[textStyle],
    boldClasses[bold]
  ].filter(Boolean).join(' ')

    return `<ul class="${classes}">
  <li>${label}</li>
  <li>${label}</li>
</ul>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return ''
}

export default {
  title: 'Playground/Bullet list',
  argTypes: {
    type: {
      control: 'select',
      options: types,
    },
    textStyle: {
      control: 'select',
      options: textStyles,
    },
    bold: {
      control: 'select',
      options: boldOptions,
    },
    label: {
      control: 'text',
    }
  }
}

export const PlaygroundBulletList = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { type, textStyle, bold, label } = context.args

          return renderBulletList({
            type,
            textStyle,
            bold,
            label,
          })
        },
      },
    },
  },
  render: ({ type, textStyle, bold, label }) => {
    return renderBulletList({
      type,
      textStyle,
      bold,
      label,
    })
  },
  args: {
    type: 'Unordered',
    textStyle: 'Body Large',
    bold: 'True',
    label: 'Label'
  },
}

// Chaque valeur ci-dessous change réellement le rendu ; les autres sont omises.
// PlaygroundBulletList porte les args par défaut : elle tient lieu de story Default.

export const Ordered = {
  parameters: PlaygroundBulletList.parameters,
  render: PlaygroundBulletList.render,
  args: {
    ...PlaygroundBulletList.args,
    type: 'Ordered'
  },
}

export const Bare = {
  parameters: PlaygroundBulletList.parameters,
  render: PlaygroundBulletList.render,
  args: {
    ...PlaygroundBulletList.args,
    type: 'Bare'
  },
}
