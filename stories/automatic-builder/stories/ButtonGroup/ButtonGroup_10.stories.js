export default {
    title: 'Components/ButtonGroup'
  }
  
  export const ButtonGroup_10 = () => {
    return `
  <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
    <button type="button" class="btn btn-secondary">Button</button>
    <button type="button" class="btn btn-secondary">Button</button>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-secondary">Split button</button>
      <button id="btnGroupVerticalDrop1" type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      </ul>
    </div>
    <button type="button" class="btn btn-secondary">Button</button>
    <button type="button" class="btn btn-secondary">Button</button>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-secondary">Split button</button>
      <button id="btnGroupVerticalDrop2" type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop2">
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      </ul>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-secondary">Split button</button>
      <button id="btnGroupVerticalDrop3" type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop3">
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      </ul>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-secondary">Split button</button>
      <button id="btnGroupVerticalDrop4" type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop4">
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      </ul>
    </div>
  </div>
`
  }