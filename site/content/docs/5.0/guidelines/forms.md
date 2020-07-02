---
layout: guidelines
title: Forms
description: This design kit contains the essential UI elements for designing, prototyping and building Orange products and services on the web.
group: guidelines
subgroup: Components
toc: true
---

## Text field sizes

<div class="row gy-3">
  <div class="col-12 col-sm-4 col-lg-2">
    <h3 class="h6">Standard height</h3>
  </div>
  <div class="col-12 col-sm-8 col-lg-10">
    <div>
      <label for="form-control" class="form-label">Label</label>
      <input class="form-control" type="text" id="form-control">
    </div>
  </div>
  <div class="col-12 col-sm-4 col-lg-2">
    <h3 class="h6">Large</h3>
  </div>
  <div class="col-12 col-sm-8 col-lg-10">
    <div>
      <label for="form-control-lg" class="form-label">Label</label>
      <input class="form-control form-control-lg" type="text" id="form-control-lg">
    </div>
  </div>
</div>

## Text field standard

<div class="row gy-3">
  <div class="col-12 col-sm-4 col-lg-2">
    <h3 class="h6">Default</h3>
  </div>
  <div class="col-12 col-sm-8 col-lg-10">
    <div>
      <label for="form-control-3" class="form-label">Label</label>
      <input class="form-control" type="text" id="form-control-3">
    </div>
  </div>
  <div class="col-12 col-sm-4 col-lg-2">
    <h3 class="h6">Placeholder</h3>
  </div>
  <div class="col-12 col-sm-8 col-lg-10">
    <div>
      <label for="form-control-4" class="form-label">Label</label>
      <input class="form-control" type="text" id="form-control-4" placeholder="Placeholder text">
    </div>
  </div>
  <div class="col-12 col-sm-4 col-lg-2">
    <h3 class="h6">Required</h3>
  </div>
  <div class="col-12 col-sm-8 col-lg-10">
    <div>
      <label for="form-control-5" class="form-label is-required">Label</label>
      <input class="form-control" type="text" id="form-control-5" required>
    </div>
  </div>
  <div class="col-12 col-sm-4 col-lg-2">
    <h3 class="h6">Disabled</h3>
  </div>
  <div class="col-12 col-sm-8 col-lg-10">
    <div>
      <label for="form-control-6" class="form-label is-disabled">Label</label>
      <input class="form-control" type="text" id="form-control-6" disabled>
    </div>
  </div>
  <div class="col-12 col-sm-4 col-lg-2">
    <h3 class="h6">Error</h3>
  </div>
  <div class="col-12 col-sm-8 col-lg-10">
    <div>
      <label for="form-control-7" class="form-label is-required">Label</label>
      <input class="form-control is-invalid" type="text" id="form-control-7" required>
      <div class="invalid-feedback">Error notification text goes here.</div>
    </div>
  </div>
</div>

## Text field multiline

<div class="row gy-3">
  <div class="col-12 col-sm-4 col-lg-2">
    <h3 class="h6">Default</h3>
  </div>
  <div class="col-12 col-sm-8 col-lg-10">
    <div>
      <label class="form-label" for="textarea">Label</label>
      <textarea class="form-control" id="textarea" rows="3"></textarea>
    </div>
  </div>
</div>

## Select

<div class="row gy-3">
  <div class="col-12 col-sm-4 col-lg-2">
    <h3 class="h6">With label</h3>
  </div>
  <div class="col-4">
    <div>
      <label class="form-label" for="form-select">Label</label>
      <select class="form-select" id="form-select">
        <option selected>Option 1</option>
        <option value="1">Option 2</option>
        <option value="2">Option 3</option>
        <option value="3">Option 4</option>
      </select>
    </div>
  </div>
  <div class="w-100"></div>
  <div class="col-12 col-sm-4 col-lg-2">
    <h3 class="h6">Without label</h3>
  </div>
  <div class="col-4">
    <div>
     <select class="form-select" aria-label="Default select example">
        <option selected>Option 1</option>
        <option value="1">Option 2</option>
        <option value="2">Option 3</option>
        <option value="3">Option 4</option>
      </select>
    </div>
  </div>
</div>

## Date

Incoming in [issue #223](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/223).

## Time

Incoming in [issue #223](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/223).

## Quantity selector

Incoming in [issue #113](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/113).


## Checkbox

<div class="form-check mb-2">
  <input class="form-check-input" type="checkbox" value="1" id="form-checkbox">
  <label class="form-check-label" for="form-checkbox">Unchecked</label>
</div>
<div class="form-check mb-2">
  <input class="form-check-input" type="checkbox" value="2" id="form-checkbox-2" checked>
  <label class="form-check-label" for="form-checkbox-2">Checked</label>
</div>
<div class="form-check mb-2">
  <input class="form-check-input" type="checkbox" value="3" id="form-checkbox-3" disabled>
  <label class="form-check-label" for="form-checkbox-3">Disabled</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="4" id="form-checkbox-4" disabled checked>
  <label class="form-check-label" for="form-checkbox-4">Disabled checked</label>
</div>

## Radio button

<div class="form-check mb-2">
  <input class="form-check-input" type="radio" name="demo" value="1" id="form-radio">
  <label class="form-check-label" for="form-radio">Unchecked</label>
</div>
<div class="form-check mb-2">
  <input class="form-check-input" type="radio" name="demo" value="2" id="form-radio-2" checked>
  <label class="form-check-label" for="form-radio-2">Checked</label>
</div>
<div class="form-check mb-2">
  <input class="form-check-input" type="radio" name="demo" value="3" id="form-radio-3" disabled>
  <label class="form-check-label" for="form-radio-3">Disabled</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="demo" value="4" id="form-radio-4" disabled checked>
  <label class="form-check-label" for="form-radio-4">Disabled checked</label>
</div>


## Toggle switch

<div class="form-check form-switch mb-3">
  <input class="form-check-input" type="checkbox" id="form-switch">
  <label class="form-check-label" for="form-switch">Default switch checkbox input</label>
</div>
<div class="form-check form-switch mb-3">
  <input class="form-check-input" type="checkbox" id="form-switch-2" checked>
  <label class="form-check-label" for="form-switch-2">Checked switch checkbox input</label>
</div>
<div class="form-check form-switch mb-3">
  <input class="form-check-input" type="checkbox" id="form-switch-3" disabled>
  <label class="form-check-label" for="form-switch-3">Disabled switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="form-switch-4" checked disabled>
  <label class="form-check-label" for="form-switch-4">Disabled checked switch checkbox input</label>
</div>

## Tooltip

<div class="row row-cols-12 row-cols-md-2 row-cols-lg-4 gy-3 pt-3 tooltip-demo">
  <div class="col mt-0">
    <h3 class="h6 d-inline-block align-middle m-0">Tooltip on top</h3>
    <button type="button" class="btn btn-link p-0" data-toggle="tooltip" data-placement="top" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"  role="img" aria-label="Tooltip on top" focusable="false">
          <path fill="#527EDB" fill-rule="evenodd" d="M10 1.5c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5zm.616 13.613c-.202.185-.467.287-.741.285-.28.004-.55-.097-.76-.282-.216-.187-.324-.45-.324-.787 0-.3.105-.552.314-.756.209-.204.465-.306.77-.306.3 0 .551.102.755.306.205.204.307.456.307.756 0 .332-.107.594-.321.784zm2.662-6.601c-.153.29-.35.556-.584.787-.226.221-.63.593-1.216 1.116-.136.122-.266.252-.388.389-.084.093-.157.196-.217.306-.046.089-.083.182-.11.278-.027.093-.066.256-.119.488-.09.495-.372.742-.848.742-.247 0-.455-.081-.624-.243-.168-.161-.253-.401-.253-.72 0-.399.062-.745.186-1.037.117-.283.284-.544.492-.77.204-.22.48-.483.827-.788.304-.266.523-.466.659-.602.134-.134.25-.286.342-.453.093-.165.14-.352.14-.541 0-.38-.142-.701-.425-.963-.283-.261-.648-.392-1.094-.392-.523 0-.908.132-1.155.396s-.456.652-.627 1.165c-.162.537-.469.806-.92.806-.266 0-.49-.094-.674-.282-.183-.187-.274-.39-.274-.609 0-.451.145-.909.435-1.372.29-.464.713-.847 1.269-1.151.556-.305 1.204-.457 1.946-.457.689 0 1.297.127 1.825.382.527.254.934.6 1.222 1.037.288.437.431.912.431 1.426 0 .404-.082.758-.246 1.062z"/>
      </svg>
    </button>
  </div>
  <div class="col mt-0">
    <h3 class="h6 d-inline-block align-middle m-0">Tooltip on right</h3>
    <button type="button" class="btn btn-link p-0" data-toggle="tooltip" data-placement="right" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"  role="img" aria-label="Tooltip on right" focusable="false">
        <path fill="#527EDB" fill-rule="evenodd" d="M10 1.5c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5zm.616 13.613c-.202.185-.467.287-.741.285-.28.004-.55-.097-.76-.282-.216-.187-.324-.45-.324-.787 0-.3.105-.552.314-.756.209-.204.465-.306.77-.306.3 0 .551.102.755.306.205.204.307.456.307.756 0 .332-.107.594-.321.784zm2.662-6.601c-.153.29-.35.556-.584.787-.226.221-.63.593-1.216 1.116-.136.122-.266.252-.388.389-.084.093-.157.196-.217.306-.046.089-.083.182-.11.278-.027.093-.066.256-.119.488-.09.495-.372.742-.848.742-.247 0-.455-.081-.624-.243-.168-.161-.253-.401-.253-.72 0-.399.062-.745.186-1.037.117-.283.284-.544.492-.77.204-.22.48-.483.827-.788.304-.266.523-.466.659-.602.134-.134.25-.286.342-.453.093-.165.14-.352.14-.541 0-.38-.142-.701-.425-.963-.283-.261-.648-.392-1.094-.392-.523 0-.908.132-1.155.396s-.456.652-.627 1.165c-.162.537-.469.806-.92.806-.266 0-.49-.094-.674-.282-.183-.187-.274-.39-.274-.609 0-.451.145-.909.435-1.372.29-.464.713-.847 1.269-1.151.556-.305 1.204-.457 1.946-.457.689 0 1.297.127 1.825.382.527.254.934.6 1.222 1.037.288.437.431.912.431 1.426 0 .404-.082.758-.246 1.062z"/>
      </svg>
    </button>
  </div>
  <div class="col mt-0">
    <h3 class="h6 d-inline-block align-middle m-0">Tooltip on bottom</h3>
    <button type="button" class="btn btn-link p-0" data-toggle="tooltip" data-placement="bottom" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"  role="img" aria-label="Tooltip on bottom" focusable="false">
        <path fill="#527EDB" fill-rule="evenodd" d="M10 1.5c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5zm.616 13.613c-.202.185-.467.287-.741.285-.28.004-.55-.097-.76-.282-.216-.187-.324-.45-.324-.787 0-.3.105-.552.314-.756.209-.204.465-.306.77-.306.3 0 .551.102.755.306.205.204.307.456.307.756 0 .332-.107.594-.321.784zm2.662-6.601c-.153.29-.35.556-.584.787-.226.221-.63.593-1.216 1.116-.136.122-.266.252-.388.389-.084.093-.157.196-.217.306-.046.089-.083.182-.11.278-.027.093-.066.256-.119.488-.09.495-.372.742-.848.742-.247 0-.455-.081-.624-.243-.168-.161-.253-.401-.253-.72 0-.399.062-.745.186-1.037.117-.283.284-.544.492-.77.204-.22.48-.483.827-.788.304-.266.523-.466.659-.602.134-.134.25-.286.342-.453.093-.165.14-.352.14-.541 0-.38-.142-.701-.425-.963-.283-.261-.648-.392-1.094-.392-.523 0-.908.132-1.155.396s-.456.652-.627 1.165c-.162.537-.469.806-.92.806-.266 0-.49-.094-.674-.282-.183-.187-.274-.39-.274-.609 0-.451.145-.909.435-1.372.29-.464.713-.847 1.269-1.151.556-.305 1.204-.457 1.946-.457.689 0 1.297.127 1.825.382.527.254.934.6 1.222 1.037.288.437.431.912.431 1.426 0 .404-.082.758-.246 1.062z"/>
      </svg>
    </button>
  </div>
  <div class="col mt-0">
    <h3 class="h6 d-inline-block align-middle m-0">Tooltip on left</h3>
    <button type="button" class="btn btn-link p-0" data-toggle="tooltip" data-placement="left" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"  role="img" aria-label="Tooltip on left" focusable="false">
          <path fill="#527EDB" fill-rule="evenodd" d="M10 1.5c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5zm.616 13.613c-.202.185-.467.287-.741.285-.28.004-.55-.097-.76-.282-.216-.187-.324-.45-.324-.787 0-.3.105-.552.314-.756.209-.204.465-.306.77-.306.3 0 .551.102.755.306.205.204.307.456.307.756 0 .332-.107.594-.321.784zm2.662-6.601c-.153.29-.35.556-.584.787-.226.221-.63.593-1.216 1.116-.136.122-.266.252-.388.389-.084.093-.157.196-.217.306-.046.089-.083.182-.11.278-.027.093-.066.256-.119.488-.09.495-.372.742-.848.742-.247 0-.455-.081-.624-.243-.168-.161-.253-.401-.253-.72 0-.399.062-.745.186-1.037.117-.283.284-.544.492-.77.204-.22.48-.483.827-.788.304-.266.523-.466.659-.602.134-.134.25-.286.342-.453.093-.165.14-.352.14-.541 0-.38-.142-.701-.425-.963-.283-.261-.648-.392-1.094-.392-.523 0-.908.132-1.155.396s-.456.652-.627 1.165c-.162.537-.469.806-.92.806-.266 0-.49-.094-.674-.282-.183-.187-.274-.39-.274-.609 0-.451.145-.909.435-1.372.29-.464.713-.847 1.269-1.151.556-.305 1.204-.457 1.946-.457.689 0 1.297.127 1.825.382.527.254.934.6 1.222 1.037.288.437.431.912.431 1.426 0 .404-.082.758-.246 1.062z"/>
      </svg>
    </button>
  </div>
</div>

## Slider

<div class="mb-3">
  <label for="form-slider" class="form-label">Slider</label>
  <input type="range" class="form-range" min="0" max="5" step="0.5" id="form-slider">
</div>
<div>
  <label for="form-slider-2" class="form-label is-disabled">Disabled</label>
  <input type="range" class="form-range" min="0" max="5" step="0.5" id="form-slider-2" disabled>
</div>

<h3 class="h6">Slider with value</h3>

Incoming in [issue #116](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/116).

<h3 class="h6">Slider with units</h3>

Incoming in [issue #116](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/116).

<h3 class="h6">Range slider with values</h3>

Incoming in [issue #116](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/116).

<h3 class="h6">Range slider with units</h3>

Incoming in [issue #116](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/116).

