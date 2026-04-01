import type { ComponentCardData } from '@components/shortcodes/ComponentCard.astro'
import { getConfig } from '@libs/config'
import { getVersionedDocsPath } from '@libs/path'

export const componentsDetails: ComponentCardData[] = [
  {
    name: 'Alert message',
    link: 'alerts#alert-message',
    category: 'Dialog',
    snippet: `
      <div class="alert alert-message alert-negative w-75">
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
          <input class="control-item-indicator" type="checkbox" value="" id="checkbox[[id_prefix]]" checked />
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="checkbox[[id_prefix]]">Label</label>
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
          <input type="checkbox" id="filterChip[[id_prefix]]" checked />
          <label class="chip-interactive" for="filterChip[[id_prefix]]">
            Label
          </label>
        </li>
      </ul>`
  },
  {
    name: 'Header',
    category: 'Navigation',
    snippet: `
      <header class="header-minimized">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid container-max-width px-small">
            <div class="navbar-brand me-auto me-lg-xlarge">
              <a class="stretched-link" href="#">
                <img src="${getVersionedDocsPath(`/assets/brand/${getConfig().brand}-logo.svg`)}" width="50" height="50" alt="" loading="lazy">
              </a>
              <h1 class="title">Label</h1>
            </div>
            <button class="navbar-toggler collapsed" type="button">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid container-max-width px-small">
            <div class="navbar-collapse collapse m-none">
              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>`
  },
  {
    name: 'Icon',
    category: 'Visual assets',
    snippet: `
      <svg class="text-status-accent decorative-small-icon" aria-hidden="true">
        <use xlink:href="${getVersionedDocsPath('/assets/img/ouds-web-sprite.svg#heart-empty')}" />
      </svg>`
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
    name: 'Navigation button',
    slug: 'navigation-button',
    link: 'buttons#navigation-button',
    category: 'Actions',
    snippet: `<a class="btn btn-next btn-default" href="#">Next</a>`
  },
  {
    name: 'Password input',
    slug: 'password-input',
    category: 'Control',
    snippet: `
      <form class="w-75">
        <div class="text-input">
          <div class="text-input-container" style="min-width: unset">
            <label for="passwordInput[[id_prefix]]">Label</label>
            <div class="input-container">
              <input type="password" id="passwordInput[[id_prefix]]" class="text-input-field" placeholder=" " value="xxxxxx">
            </div>
            <button class="btn btn-minimal btn-icon">
              <svg aria-hidden="true">
                <use xlink:href="${getVersionedDocsPath('/assets/img/ouds-web-sprite.svg#accessibility-vision')}"/>
              </svg>
              <span class="visually-hidden">Show password</span>
            </button>
          </div>
        </div>
      </form>` // form element is used here to prevent the browser from asking to save the password when leaving the page
  },
  {
    name: 'Radio button',
    slug: 'radio-button',
    category: 'Control',
    snippet: `
      <div class="radio-button-item" style="min-width: unset">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="radio" value="" id="radio[[id_prefix]]" name="radio[[id_prefix]]" checked />
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="radio[[id_prefix]]">Label</label>
        </div>
      </div>`
  },
  {
    name: 'Select input',
    slug: 'select-input',
    category: 'Control',
    snippet: `
      <div class="select-input w-75">
        <div class="select-input-container">
          <label for="select[[id_prefix]]">Label</label>
          <select class="select-input-field" id="select[[id_prefix]]">
            <option value="" disabled selected></option>
            <option value="1">One</option>
          </select>
        </div>
      </div>`
  },
  {
    name: 'Skeleton',
    category: 'Indicator',
    snippet: `<div class="skeleton w-75 h-75"></div>`
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
      </div>`
  },
  {
    name: 'Tag',
    link: 'tags#tag',
    category: 'Indicator',
    snippet: `
      <p class="tag tag-info">
        <span class="tag-status-icon"></span>
        Label
      </p>`
  },
  {
    name: 'Text area',
    slug: 'text-area',
    category: 'Control',
    snippet: `
      <div class="text-area w-75 h-75">
        <div class="text-area-container h-100">
          <label for="exampleTextArea[[id_prefix]]">Label</label>
          <textarea class="text-area-field h-100" id="exampleTextArea[[id_prefix]]" style="min-height: unset"></textarea>
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
          <input type="email" class="text-input-field" id="exampleTextInputWithPlaceholder[[id_prefix]]" placeholder=" ">
        </div>
      </div>`
  }
]
