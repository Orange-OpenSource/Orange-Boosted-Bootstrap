// Registre des composants. Ajouter un composant = ajouter son fichier ici.
// Seul fichier à toucher quand un composant entre ou sort du périmètre.

import { component as button } from './button'
import { component as buttonOnColoredBg } from './button-on-colored-bg'
import { component as link } from './link'
import { component as linkOnColoredBg } from './link-on-colored-bg'
import { component as badge } from './badge'
import { component as badgeCount } from './badge-count'
import { component as badgeIcon } from './badge-icon'
import { component as tag } from './tag'
import { component as inputTag } from './input-tag'
import { component as filterChip } from './filter-chip'
import { component as suggestionChip } from './suggestion-chip'
import { component as checkbox } from './checkbox'
import { component as checkboxItem } from './checkbox-item'
import { component as radioButton } from './radio-button'
import { component as radioButtonItem } from './radio-button-item'
import { component as switchComponent } from './switch'
import { component as switchItem } from './switch-item'
import { component as textInput } from './text-input'
import { component as passwordInput } from './password-input'
import { component as inlineAlert } from './inline-alert'
import { component as bulletList } from './bullet-list'
import { component as breadcrumb } from './breadcrumb'
import { component as divider } from './divider'
import { component as skeleton } from './skeleton'

import type { OudsComponent } from '../core/component'

export const components: OudsComponent[] = [
  button,
  buttonOnColoredBg,
  link,
  linkOnColoredBg,
  badge,
  badgeCount,
  badgeIcon,
  tag,
  inputTag,
  filterChip,
  suggestionChip,
  checkbox,
  checkboxItem,
  radioButton,
  radioButtonItem,
  switchComponent,
  switchItem,
  textInput,
  passwordInput,
  inlineAlert,
  bulletList,
  breadcrumb,
  divider,
  skeleton,
]
