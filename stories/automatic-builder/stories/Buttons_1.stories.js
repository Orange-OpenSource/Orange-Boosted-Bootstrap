export default {
    title: 'Components/Buttons'
  }
  
  export const Buttons_1 = () => {
    return `<button type="button" class="btn btn-primary btn-sm">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  Secondary
</button>
<button type="button" class="btn btn-primary">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  Secondary
</button>
<button type="button" class="btn btn-primary btn-lg">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  Secondary
</button>
`
  }