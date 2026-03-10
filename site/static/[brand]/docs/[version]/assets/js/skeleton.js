(() => {
  'use strict'

  // First example
  // js-docs-start skeleton-first-example
  const skeletonToReplace = document.querySelector('.bd-skeleton-replace')
  const originalContent = skeletonToReplace.innerHTML

  function replaceSkeleton() {
    setTimeout(() => {
      skeletonToReplace.innerHTML = `<div class="d-flex gap-medium mb-medium">
        <img class="flex-shrink-0 w-50 ratio-1x1 object-fit-cover" src="https://placecats.com/500/500" alt="" />
        <div class="flex-grow-1 d-flex flex-column">
          <h4 class="h1">Placeholder title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem. Aenean posuere elementum massa, ac elementum magna auctor quis. Aliquam erat volutpat. Ut quam turpis, interdum non ex at, imperdiet ornare mi.</p>
        </div>
      </div>
      <button class="btn btn-default" onclick="window.relaunchAnim()">Relaunch animation</button>
      <p class="visually-hidden" role="alert">Content loaded.</p>`
    }, 8000)
  }

  document.addEventListener('DOMContentLoaded', () => {
    replaceSkeleton()
  })

  window.relaunchAnim = () => {
    skeletonToReplace.innerHTML = originalContent
    replaceSkeleton()
  }
  // js-docs-end skeleton-first-example

  // Second example
  // js-docs-start skeleton-second-example
  const skeletonToReplace2 = document.querySelector('.bd-skeleton-replace2')

  function removeSkeletons() {
    setTimeout(() => {
      skeletonToReplace2.firstElementChild.removeAttribute('inert')
      skeletonToReplace2.firstElementChild.setAttribute('aria-busy', 'false')
      skeletonToReplace2.lastElementChild.textContent = 'Form loaded.'
    }, 8000)
  }

  document.addEventListener('DOMContentLoaded', () => {
    removeSkeletons()
  })

  window.relaunchAnim2 = () => {
    skeletonToReplace2.firstElementChild.setAttribute('inert', '')
    skeletonToReplace2.firstElementChild.setAttribute('aria-busy', 'true')
    skeletonToReplace2.lastElementChild.textContent = 'Loading form ...'
    removeSkeletons()
  }
  // js-docs-end skeleton-second-example
})()
