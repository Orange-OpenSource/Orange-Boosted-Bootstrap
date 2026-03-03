import type { ComponentCardData } from '@components/shortcodes/ComponentCard.astro'
import { getVersionedDocsPath } from '@libs/path'

export const componentsDetails: ComponentCardData[] = [
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
        <li class="breadcrumb-item"><a href="#" title="Link">Link</a></li>
        <li class="breadcrumb-item active" aria-current="page"><span title="Page">Page</span></li>
      </ol>`
  },
  {
    name: 'Bullet list',
    slug: 'bullet-list',
    category: 'Content display',
    snippet: `
      <ul class="bullet-list" style="margin-inline-start: calc(-1 * var(--bs-bullet-list-icon-container-width))">
        <li>Label</li>
      </ul>`
  },
  {
    name: 'Button',
    link: 'buttons',
    category: 'Actions',
    snippet: `<button type="button" class="btn btn-default">Label</button>`
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
    name: 'Input tag',
    slug: 'input-tag',
    link: 'tags#input-tag',
    category: 'Indicator',
    snippet: `<button type="button" class="tag tag-input">Input tag</button>`
  },
  {
    name: 'Link',
    link: 'links',
    category: 'Navigation',
    snippet: `<a class="link" href="#">Link</a>`
  },
  {
    name: 'Password input',
    slug: 'password-input',
    category: 'Control',
    snippet: `
      <div class="text-input" style="scale: .6">
        <div class="text-input-container text-input-container-outlined">
          <svg aria-hidden="true">
            <use xlink:href="${getVersionedDocsPath('/assets/img/ouds-web-sprite.svg#lock-closed')}"/>
          </svg>
          <label for="inputPasswordPrefix[[id_prefix]]">Password</label>
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
      <div class="radio-button-item" style="min-width: unset">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="radio" value="" id="radioDefault[[id_prefix]]" name="radioBasic" checked />
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="radioDefault[[id_prefix]]">Label</label>
        </div>
      </div>`
  },
  {
    name: 'Select input',
    slug: 'select-input',
    category: 'Control',
    snippet: `
      <div class="select-input w-100" style="scale: .6">
        <div class="select-input-container select-input-container-outlined">
          <label for="exampleSelect[[id_prefix]]">Select</label>
          <select class="select-input-field" id="exampleSelect[[id_prefix]]">
            <option value="" disabled selected></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
          <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchWithSVG[[id_prefix]]" checked />
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="switchWithSVG[[id_prefix]]">Label</label>
        </div>
      </div>`
  },
  {
    name: 'Tag',
    link: 'tags#tag',
    category: 'Indicator',
    snippet: `<p class="tag">Tag</p>`
  },
  {
    name: 'Text area',
    slug: 'text-area',
    category: 'Control',
    snippet: `
      <div class="text-area" style="scale: .9">
        <div class="text-area-container text-area-container-outlined">
          <label for="exampleTextArea[[id_prefix]]">Label</label>
          <textarea class="text-area-field" id="exampleTextArea[[id_prefix]]" style="min-height: unset"></textarea>
        </div>
      </div>`
  },
  {
    name: 'Text input',
    slug: 'text-input',
    category: 'Control',
    snippet: `
      <div class="text-input" style="scale: .6">
        <div class="text-input-container text-input-container-outlined">
          <label for="exampleTextInputWithPlaceholder[[id_prefix]]">Label</label>
          <input type="email" class="text-input-field" id="exampleTextInputWithPlaceholder[[id_prefix]]" placeholder="placeholder">
        </div>
      </div>`
  }
]
