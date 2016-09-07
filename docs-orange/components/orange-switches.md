---
layout: docs
title: Orange switches
group: components
---

Orange switches

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Single switch

Using checkbox as switch / toggle with styling

### Default

Wrap a label / checkbox input pattern into form-group with `.toggle` class.

{% example html %}
<div class="form-group row o-switch">
  <label for="checkbox1" class="form-control-label col-md-3 col-xs-8">Default</label>
  <input class="checkbox sr-only" id="checkbox1" type="checkbox" checked/>
  <div class="toggle form-control-label col-xs-3" aria-hidden="true">
    <span class="on icon-checkbox-tick"></span>
    <span class="off icon-delete"></span>
  </div>
</div>
{% endexample %}

### Success

Default color is brand primary. Success color is also supported, use `.success` class on input tag

{% example html %}
<div class="form-group row o-switch">
  <label for="checkbox3" class="form-control-label col-md-3 col-xs-8">Success</label>
  <input class="checkbox success sr-only" id="checkbox3" type="checkbox"/>
  <label for="checkbox3" class="toggle form-control-label col-xs-3" aria-hidden="true">
    <span class="on icon-checkbox-tick"></span>
    <span class="off icon-delete"></span>
  </label>
</div>
{% endexample %}

### Rounded

Finally use .rounded class on `.toggle` element to get rounded switch alternate version.

{% example html %}
<div class="form-group row o-switch">
  <label for="checkbox4" class="form-control-label col-md-3 col-xs-8">Rounded</label>
  <input class="checkbox success sr-only" id="checkbox4" type="checkbox" checked/>
  <label for="checkbox4" class="toggle rounded form-control-label col-xs-3" aria-hidden="true">
    <span class="on">On</span>
    <span class="off">Off</span>
  </label>
</div>
{% endexample %}

## 3 way toggle

Wrap 3 radio type inputs into a `.btn-group element`. If using several btn-group toggles, make to have different `name` attribute for each group.

{% example html %}
<div class="btn-group" data-toggle="buttons" role="group">
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

Alternatively, use .no-outline class on `.btn-group` element to get the clear version.

{% example html %}
<div class="btn-group no-outline" data-toggle="buttons" role="group">
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
