import type { ComponentCardData } from '@components/shortcodes/ComponentCard.astro'
import { getVersionedDocsPath } from '@libs/path'

export const componentsDetails: ComponentCardData[] = [
  {
    name: 'Alert message',
    link: 'alerts#alert-message',
    category: 'Dialog',
    snippet: `
      <div class="alert alert-message alert-negative" style="scale: .9">
        <div class="alert-icon"></div>
        <div class="alert-container">
          <div class="alert-text-container">
            <p class="alert-label">Label</p>
          </div>
        </div>
      </div>`
  },
  {
    name: 'Badge',
    link: 'badges#badge',
    category: 'Indicator',
    snippet: `<p class="badge"><span class="visually-hidden">Warning</span></p>`
  },
  {
    name: 'Badge - Count',
    slug: 'badge-count',
    link: 'badges#badge---count',
    category: 'Indicator',
    snippet: `<p class="badge badge-count">1<span class="visually-hidden">error</span></p>`
  },
  {
    name: 'Badge - Icon',
    slug: 'badge-icon',
    link: 'badges#badge---icon',
    category: 'Indicator',
    snippet: `
      <p class="badge">
        <span class="badge-status-icon"></span>
        <span class="visually-hidden">Beware</span>
      </p>`
  },
  {
    name: 'Breadcrumb',
    category: 'Navigation',
    snippet: `
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#" title="Label">Label</a></li>
        <li class="breadcrumb-item active"><span title="Label">Label</span></li>
      </ol>`
  },
  {
    name: 'Bullet list',
    slug: 'bullet-list',
    category: 'Content display',
    snippet: `
      <ul class="bullet-list" style="margin-inline-start: calc(-1 * var(--bs-bullet-list-icon-container-width))">
        <li>Label</li>
        <li>Label</li>
      </ul>`
  },
  {
    name: 'Button',
    link: 'buttons',
    category: 'Actions',
    snippet: `
      <div class="d-flex flex-column gap-xsmall">
        <button type="button" class="btn btn-default">Label</button>
        <button type="button" class="btn btn-strong">Label</button>
      </div>`
  },
  {
    name: 'Checkbox',
    category: 'Control',
    snippet: `
      <div class="checkbox-item" style="min-width: unset">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" value="" id="checkboxDefault[[id_prefix]]" checked />
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="checkboxDefault[[id_prefix]]">Label</label>
        </div>
      </div>
      <div class="checkbox-item" style="min-width: unset">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" value="" id="checkboxDefault2[[id_prefix]]" />
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="checkboxDefault2[[id_prefix]]">Label</label>
        </div>
      </div>`
  },
  {
    name: 'Divider',
    category: 'Layout',
    snippet: `<hr class="w-50" />`
  },
  {
    name: 'Filter chip',
    slug: 'filter-chip',
    link: 'chips#filter-chip',
    category: 'Control',
    snippet: `
      <ul class="chips-container">
        <li class="chip chip-filter">
          <input type="checkbox" id="appleCheck[[id_prefix]]" checked />
          <label class="chip-interactive" for="appleCheck[[id_prefix]]">
            Label
          </label>
        </li>
        <li class="chip chip-filter">
          <input type="checkbox" id="appleCheck2[[id_prefix]]" />
          <label class="chip-interactive" for="appleCheck2[[id_prefix]]">
            Label
          </label>
        </li>
      </ul>`
  },
  {
    name: 'Icon',
    category: 'Visual assets',
    snippet: `
      <svg class="text-status-accent decorative-small-icon" aria-hidden="true">
        <use xlink:href="${getVersionedDocsPath('/assets/img/ouds-web-sprite.svg#heart-empty')}" />
      </svg> `
  },
  {
    name: 'Inline alert',
    link: 'alerts#inline-alert',
    category: 'Dialog',
    snippet: `
      <div class="alert alert-info">
        <div class="alert-icon"></div>
        <p class="alert-label">Label</p>
      </div>`
  },
  {
    name: 'Input tag',
    slug: 'input-tag',
    link: 'tags#input-tag',
    category: 'Indicator',
    snippet: `<button type="button" class="tag tag-input">Label</button>`
  },
  {
    name: 'Link',
    link: 'links',
    category: 'Navigation',
    snippet: `<a class="link" href="#">Label</a>`
  },
  {
    name: 'Password input',
    slug: 'password-input',
    category: 'Control',
    snippet: `
      <div class="text-input w-75">
        <div class="text-input-container" style="min-width: unset">
          <svg aria-hidden="true">
            <use xlink:href="${getVersionedDocsPath('/assets/img/ouds-web-sprite.svg#lock-closed')}"/>
          </svg>
          <label for="inputPasswordPrefix[[id_prefix]]">Label</label>
          <div class="input-container" data-bs-prefix="DEV-">
            <input type="password" id="inputPasswordPrefix[[id_prefix]]" class="text-input-field" placeholder=" ">
          </div>
          <button class="btn btn-minimal btn-icon">
            <svg aria-hidden="true">
              <use xlink:href="${getVersionedDocsPath('/assets/img/ouds-web-sprite.svg#accessibility-vision')}"/>
            </svg>
            <span class="visually-hidden">Show password</span>
          </button>
        </div>
      </div>`
  },
  {
    name: 'Radio button',
    slug: 'radio-button',
    category: 'Control',
    snippet: `
      <fieldset class="control-items-list">
        <div class="radio-button-item" style="min-width: unset">
          <div class="control-item-assets-container">
            <input class="control-item-indicator" type="radio" value="" id="radioDefault[[id_prefix]]" name="radioBasic[[id_prefix]]" checked />
          </div>
          <div class="control-item-text-container">
            <label class="control-item-label" for="radioDefault[[id_prefix]]">Label</label>
          </div>
        </div>
        <div class="radio-button-item" style="min-width: unset">
          <div class="control-item-assets-container">
            <input class="control-item-indicator" type="radio" value="" id="radioDefault2[[id_prefix]]" name="radioBasic[[id_prefix]]" />
          </div>
          <div class="control-item-text-container">
            <label class="control-item-label" for="radioDefault2[[id_prefix]]">Label</label>
          </div>
        </div>
      </fieldset>`
  },
  {
    name: 'Select input',
    slug: 'select-input',
    category: 'Control',
    snippet: `
      <div class="select-input w-75">
        <div class="select-input-container">
          <label for="exampleSelect[[id_prefix]]">Label</label>
          <select class="select-input-field" id="exampleSelect[[id_prefix]]">
            <option value="" disabled selected></option>
            <option value="1">One</option>
          </select>
        </div>
      </div>`
  },
  {
    name: 'Suggestion chip',
    slug: 'suggestion-chip',
    link: 'chips#suggestion-chip',
    category: 'Control',
    snippet: `
      <ul class="chips-container">
        <li class="chip chip-suggestion">
          <button class="chip-interactive">
            Label
          </button>
        </li>
      </ul>`
  },
  {
    name: 'Switch',
    category: 'Control',
    snippet: `
      <div class="switch-item" style="min-width: unset">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switch[[id_prefix]]" checked />
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="switch[[id_prefix]]">Label</label>
        </div>
      </div>
      <div class="switch-item" style="min-width: unset">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switch2[[id_prefix]]" />
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="switch2[[id_prefix]]">Label</label>
        </div>
      </div>`
  },
  {
    name: 'Tag',
    link: 'tags#tag',
    category: 'Indicator',
    snippet: `
      <ul class="list-unstyled d-flex gap-xsmall">
        <li class="tag">Label</li>
        <li class="tag tag-info">
          <span class="tag-status-icon"></span>
          Label
        </li>
      </ul>`
  },
  {
    name: 'Text area',
    slug: 'text-area',
    category: 'Control',
    snippet: `
      <div class="text-area w-75">
        <div class="text-area-container">
          <label for="exampleTextArea[[id_prefix]]">Label</label>
          <textarea class="text-area-field" id="exampleTextArea[[id_prefix]]" style="height: 3rem; min-height: unset"></textarea>
        </div>
      </div>`
  },
  {
    name: 'Text input',
    slug: 'text-input',
    category: 'Control',
    snippet: `
      <div class="text-input w-75">
        <div class="text-input-container" style="min-width: unset">
          <label for="exampleTextInputWithPlaceholder[[id_prefix]]">Label</label>
          <input type="email" class="text-input-field" id="exampleTextInputWithPlaceholder[[id_prefix]]" placeholder="Placeholder">
        </div>
      </div>`
  }
]
