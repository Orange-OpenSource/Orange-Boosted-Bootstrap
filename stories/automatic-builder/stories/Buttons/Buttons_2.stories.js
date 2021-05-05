export default {
    title: 'Components/Buttons'
  }
  
  export const Buttons_2 = () => {
    return `
<button type="button" class="btn btn-icon btn-secondary btn-sm">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
   <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#success"></use>
  </svg>
  <span class="visually-hidden">Secondary</span>
</button>
<button type="button" class="btn btn-icon btn-secondary">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#success"></use>
  </svg>
  <span class="visually-hidden">Secondary</span>
</button>
<button type="button" class="btn btn-icon btn-secondary btn-lg">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#success"></use>
  </svg>
  <span class="visually-hidden">Secondary</span>
</button>
`
  }