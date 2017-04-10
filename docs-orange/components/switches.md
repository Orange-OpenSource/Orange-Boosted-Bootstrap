---
layout: docs
title: Switches
description: Boosted switches provide custom checkbox and radio presentation.
group: components
---

Orange switches

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Single switch

Using checkbox as switch / toggle with styling

### Default

Wrap a label / checkbox input pattern into `.form-group` with `.o-switch` followed by a `.toggle` class.

{% example html %}
<div class="form-group row">
  <label for="checkbox1" class="form-control-label col-md-3 col-8">Default</label>
  <div class="o-switch">
    <input class="checkbox sr-only" id="checkbox1" type="checkbox" checked/>
    <div class="toggle form-control-label" aria-hidden="true">
      <span class="on svg-checkbox-tick" role="presentation"><span class="sr-only">on</span></span>
      <span class="off svg-delete" role="presentation"><span class="sr-only">off</span></span>
    </div>
  </div>
</div>
{% endexample %}

### Success

Default color is brand primary. Success color is also supported, use `.success` class on input tag

{% example html %}
<div class="form-group row">
  <label for="checkbox3" class="form-control-label col-md-3 col-8">Success</label>
  <div class="o-switch">
    <input class="checkbox success sr-only" id="checkbox3" type="checkbox"/>
    <label for="checkbox3" class="toggle form-control-label" aria-hidden="true">
      <span class="on svg-checkbox-tick" role="presentation"><span class="sr-only">on</span></span>
      <span class="off svg-delete" role="presentation"><span class="sr-only">off</span></span>
    </label>
  </div>
</div>
{% endexample %}

### Rounded

Finally use `.rounded` class on `.toggle` element to get rounded switch alternate version. Make sure to set `.toggle` element width to fix the lenghtiest status label.

{% example html %}
<div class="form-group row">
  <label for="checkbox4" class="form-control-label col-md-3 col-8">Rounded</label>
  <div class="o-switch">
    <input class="checkbox success sr-only" id="checkbox4" type="checkbox" checked/>
    <label for="checkbox4" class="toggle rounded form-control-label" aria-hidden="true" style="width: 78px;">
      <span class="on">On</span>
      <span class="off">Off</span>
    </label>
  </div>
</div>
{% endexample %}

## The 3 way toggle

Wrap 3 radio type inputs into a `.btn-group .o-switch` element. If using several btn-group toggles, make to have different `name` attribute for each group.

{% example html %}
<div class="o-switch btn-group" data-toggle="buttons" role="group">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> 1
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off"> 2
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option3" autocomplete="off"> 3
  </label>
</div>
{% endexample %}

### without outline

Alternatively, use `.no-outline` class on `.btn-group` element to get the clear version.

{% example html %}
<div class="o-switch btn-group no-outline" data-toggle="buttons" role="group">
  <label class="btn btn-secondary active">
    <input type="radio" name="options2" id="option21" autocomplete="off" checked> 1
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options2" id="option22" autocomplete="off"> 2
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options2" id="option33" autocomplete="off"> 3
  </label>
</div>
{% endexample %}
