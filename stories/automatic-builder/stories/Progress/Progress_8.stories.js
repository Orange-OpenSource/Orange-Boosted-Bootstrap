export default {
    title: 'Components/Progress'
  }
  
  export const Progress_8 = () => {
    return `
  <div class="progress">
    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
  </div>
  <button type="button" class="btn btn-secondary mt-3" data-bs-toggle="button" id="btnToggleAnimatedProgress" aria-pressed="false" autocomplete="off">
    Toggle animation
  </button>
`
  }