export default {
    title: 'Components/ListGroup'
  }
  
  export const ListGroup_12 = () => {
    return `
  <div class="row">
    <div class="col-4">
      <div class="list-group" id="list-tab" role="tablist">
        <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="tab" href="#list-home" role="tab" aria-controls="list-home">Home</a>
        <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="tab" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
        <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="tab" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
        <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="tab" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
      </div>
    </div>
    <div class="col-8">
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <p>Some placeholder content in a paragraph relating to "Home". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</p>
        </div>
        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
          <p>Some placeholder content in a paragraph relating to "Profile". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</p>
        </div>
        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
          <p>Some placeholder content in a paragraph relating to "Messages". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</p>
        </div>
        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
          <p>Some placeholder content in a paragraph relating to "Settings". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</p>
        </div>
      </div>
    </div>
  </div>
`
  }