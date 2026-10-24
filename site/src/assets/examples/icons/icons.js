// Update the icons example page CSS variable controlling the displayed size of every icon, based on the range
// input value, and reflect the current value in the associated `<output>` element for accessibility.
(() => {
  'use strict'
  const range = document.getElementById('icons-example-size-range')
  const output = document.getElementById('icons-example-size-output')

  if (!range || !output) {
    return
  }

  const updateSize = () => {
    const size = `${range.value}px`
    document.documentElement.style.setProperty('--icons-example-size', size)
    output.textContent = size
  }

  range.addEventListener('input', updateSize)
  updateSize()
})()
