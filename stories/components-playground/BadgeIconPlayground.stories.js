// Playground for Badge icon
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/badges/#badge---icon
//
// Correctif — Neutral / Accent : ces deux statuts sont « non fonctionnels », le
// CSS ne fournit aucune icône pour eux. `<span class="badge-status-icon">` reste
// donc vide : c'est ce qui faisait qu'ils ne rendaient rien. La doc impose une
// icône fournie par le produit, via `.badge-icon` :
//
//   Neutral / Accent          → <svg class="badge-icon"><use …#icon-id"/></svg>
//   Positive/Info/Warning/Neg → <span class="badge-status-icon"></span>
//
// Le contrôle `icon` (id du sprite) n'a donc de sens que pour Neutral et Accent ;
// il est ignoré pour les statuts fonctionnels, qui portent leur icône de statut.

const statuses = ['Neutral', 'Accent', 'Positive', 'Info', 'Warning', 'Negative']
const sizes = ['Xsmall', 'Small', 'Medium', 'Large']
const states = ['Enabled', 'Disabled']

// Statuts dont l'icône est fournie par le CSS.
const functionalStatuses = ['Positive', 'Info', 'Warning', 'Negative']

const statusClasses = {
  'Neutral': 'badge-neutral',
  'Accent': 'badge-accent',
  'Positive': 'badge-positive',
  'Info': 'badge-info',
  'Warning': 'badge-warning',
  'Negative': ''
}

const sizeClasses = {
  'Xsmall': 'badge-xsmall',
  'Small': 'badge-small',
  'Medium': '',
  'Large': 'badge-large'
}

const stateClasses = {
  'Enabled': '',
  'Disabled': 'disabled'
}

// Même méthode que ButtonOnColoredBgPlayground : le canvas inline l'icône, elle
// s'affiche donc sans dépendre du sprite hébergé ; le panneau Code montre la
// référence au sprite, qui est ce que l'on écrit dans une vraie page.
const inlineIcons = {
  'heart-empty': '<svg class="badge-icon" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M18.4 11.242 12 18.247l-6.4-7.005-.003-.004a3.285 3.285 0 0 1 .247-4.678 3.383 3.383 0 0 1 4.625.128l.979.92.552.525.552-.525.98-.92.009-.01a3.352 3.352 0 0 1 2.37-.97c1.852 0 3.354 1.483 3.354 3.313a3.29 3.29 0 0 1-.862 2.217l-.003.004Zm1.463-6.125A5.635 5.635 0 0 0 12 5.08c-2.185-2.118-5.694-2.105-7.863.038a5.475 5.475 0 0 0-.105 7.702L12 21.5l7.968-8.68a5.475 5.475 0 0 0-.105-7.703Z"/></svg>'
}

const spriteIcon = id =>
  `<svg class="badge-icon" aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#${id}"/></svg>`

// Pour tout id absent de `inlineIcons`, le canvas retombe sur le `<use>` : il ne
// s'affichera que si `.storybook/main.js` expose le sprite via `staticDirs`.
const canvasIcon = id => {
  if (inlineIcons[id]) {
    return inlineIcons[id]
  }

  console.info(
    `[Badge icon] Icône « ${id} » non inlinée : le canvas utilise le sprite. ` +
    'Ajoutez staticDirs dans .storybook/main.js pour la voir, ' +
    `ou choisissez parmi : ${Object.keys(inlineIcons).join(', ')}.`
  )

  return spriteIcon(id)
}

const renderBadgeIcon = ({ status, size, state, label, icon }, resolveIcon = canvasIcon) => {
  if (!statuses.includes(status)) {
    // Le mapping ne couvre pas cette combinaison.
    return ''
  }

  const classes = [
    'badge',
    statusClasses[status],
    sizeClasses[size],
    stateClasses[state]
  ].filter(Boolean).join(' ')

  const iconMarkup = functionalStatuses.includes(status)
    ? '<span class="badge-status-icon"></span>'
    : resolveIcon(icon || 'heart-empty')

  return `<p class="${classes}">
  ${iconMarkup}
  <span class="visually-hidden">${label}</span>
</p>`
}

export default {
  title: 'Playground/Badge icon',
  argTypes: {
    status: {
      control: 'select',
      options: statuses,
    },
    size: {
      control: 'select',
      options: sizes,
    },
    state: {
      control: 'select',
      options: states,
    },
    icon: {
      control: 'text',
      description: 'Id de l’icône dans le sprite OUDS. Neutral et Accent uniquement.',
    },
    label: {
      control: 'text',
      description: 'Texte de remplacement lu par les lecteurs d’écran.',
    }
  }
}

export const PlaygroundBadgeIcon = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { status, size, state, label, icon } = context.args

          return renderBadgeIcon({
            status,
            size,
            state,
            label,
            icon,
          }, spriteIcon)
        },
      },
    },
  },
  render: ({ status, size, state, label, icon }) => {
    return renderBadgeIcon({
      status,
      size,
      state,
      label,
      icon,
    })
  },
  args: {
    status: 'Neutral',
    size: 'Medium',
    state: 'Enabled',
    icon: 'heart-empty',
    label: 'Favourite'
  },
}