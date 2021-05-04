export default {
    title: 'Components/Buttons'
  }
  
  export const Buttons_3 = () => {
    return `<button type="button" class="btn btn-icon btn-no-outline btn-sm">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  <span class="visually-hidden">No outline</span>
</button>
<button type="button" class="btn btn-icon btn-no-outline">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  <span class="visually-hidden">No outline</span>
</button>
<button type="button" class="btn btn-icon btn-no-outline btn-lg">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
   <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  <span class="visually-hidden">No outline</span>
</button>
`
  }