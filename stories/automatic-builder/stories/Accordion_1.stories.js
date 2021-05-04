export default {
    title: 'Components/Accordion'
  }
  
  export const Accordion_1 = () => {
    return `<div class="row">
  <div class="col-md-6 col-lg-5">
    <div class="accordion accordion-sm" id="accordionExampleSmall">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOneSmall">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneSmall" aria-expanded="true" aria-controls="collapseOneSmall">
            Accordion Item #1
          </button>
        </h2>
        <div id="collapseOneSmall" class="accordion-collapse collapse show" aria-labelledby="headingOneSmall" data-bs-parent="#accordionExampleSmall">
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwoSmall">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoSmall" aria-expanded="false" aria-controls="collapseTwoSmall">
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwoSmall" class="accordion-collapse collapse" aria-labelledby="headingTwoSmall" data-bs-parent="#accordionExampleSmall">
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThreeSmall">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeSmall" aria-expanded="false" aria-controls="collapseThreeSmall">
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThreeSmall" class="accordion-collapse collapse" aria-labelledby="headingThreeSmall" data-bs-parent="#accordionExampleSmall">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-lg-7">
    <div class="accordion accordion-lg" id="accordionExampleLarge">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOneLarge">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneLarge" aria-expanded="true" aria-controls="collapseOneLarge">
            Accordion Item #1
          </button>
        </h2>
        <div id="collapseOneLarge" class="accordion-collapse collapse show" aria-labelledby="headingOneLarge" data-bs-parent="#accordionExampleLarge">
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwoLarge">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoLarge" aria-expanded="false" aria-controls="collapseTwoLarge">
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwoLarge" class="accordion-collapse collapse" aria-labelledby="headingTwoLarge" data-bs-parent="#accordionExampleLarge">
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThreeLarge">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeLarge" aria-expanded="false" aria-controls="collapseThreeLarge">
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThreeLarge" class="accordion-collapse collapse" aria-labelledby="headingThreeLarge" data-bs-parent="#accordionExampleLarge">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
  }