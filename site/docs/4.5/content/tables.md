---
layout: docs
title: Tables
description: Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Boosted.
group: content
toc: true
---

## Examples

Due to the widespread use of tables across third-party widgets like calendars and date pickers, we've designed our tables to be **opt-in**. Just add the base class `.table` to any `<table>`, then extend with custom styles or our various included modifier classes.

Using the most basic table markup, here's how `.table`-based tables look in Boosted. **All table styles are inherited in Boosted 4**, meaning any nested tables will be styled in the same manner as the parent.

{% capture example %}
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}

You can also invert the colors—with light text on dark backgrounds—with `.table-dark`.

{% capture example %}
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}

[comment]: # Boosted mod: no Table head options

[comment]: # Boosted mod: no Striped rows

[comment]: # Boosted mod: no Bordered table

[comment]: # Boosted mod: no Borderless table

## Hoverable rows

Add `.table-hover` to enable a hover state on table rows within a `<tbody>`.

{% capture example %}
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}

[comment]: # Boosted mod
## Sizes

### Small table

Add `.table-sm` to make tables more compact by cutting cell padding in half.

{% capture example %}
<table class="table table-sm">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}

[comment]: # end mod

[comment]: # Boosted mod: no Contextual classes

Create responsive tables by wrapping any `.table` with `.table-responsive{-sm|-md|-lg|-xl}`, making the table scroll horizontally at each `max-width` breakpoint of up to (but not including) 576px, 768px, 992px, and 1120px, respectively.

{% include callout-info-mediaqueries-breakpoints.md %}

## Captions

A `<caption>` functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it.

{% capture example %}
<table class="table">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}

## Responsive tables

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a `.table` with `.table-responsive`. Or, pick a maximum breakpoint with which to have a responsive table up to by using `.table-responsive{-sm|-md|-lg|-xl}`.

{% capture callout %}
##### Vertical clipping/truncation

Responsive tables make use of `overflow-y: hidden`, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

### Always responsive

Across every breakpoint, use `.table-responsive` for horizontally scrolling tables.

<div class="bd-example">
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

{% highlight html %}
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
{% endhighlight %}

### Breakpoint specific

Use `.table-responsive{-sm|-md|-lg|-xl}` as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.

**These tables may appear broken until their responsive styles apply at specific viewport widths.**

{% for bp in site.data.breakpoints %}{% unless bp.breakpoint == "xs" %}
<div class="bd-example">
<div class="table-responsive{{ bp.abbr }}">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
{% highlight html %}
<div class="table-responsive{{ bp.abbr }}">
  <table class="table">
    ...
  </table>
</div>
{% endhighlight %}
{% endunless %}{% endfor %}

[comment]: # Boosted mod

## Rich content tables

Boosted tables may contain **icons, thumbnails and checkboxes**. To ensure proper layout, avoid using [sizes variants]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/tables/#sizes) in that case: rows' height should automatically match `.table-lg` ones. 
Also, **when using checkboxes in the first column**, add `.has-checkbox` class to the `<table>` element to get correct spacing on the first column.

{% capture example %}
<table class="table table-hover has-checkbox">
    <thead>
        <tr>
            <th scope="col">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck" autocomplete="off">
                  <label class="custom-control-label" for="customCheck">
                    <span class="custom-control-description sr-only">Select all</span>
                  </label>
                 </div>
            </th>
            <th scope="col">Name</th>
            <th scope="col">Column heading</th>
            <th scope="col">Column heading</th>
            <th scope="col">Column heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1" autocomplete="off">
                <label class="custom-control-label" for="customCheck1">
                  <span class="custom-control-description sr-only">Select row 1</span>
                </label>
               </div>
            </th>
            <td>
                <span class="icon-folder-document" aria-hidden="true"></span>
                <span class="sr-only">folder</span>
                <span>Finance</span>
            </td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
        </tr>
        <tr>
            <th scope="row">
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck2" autocomplete="off">
                  <label class="custom-control-label" for="customCheck2">
                    <span class="custom-control-description sr-only">Select row 2</span>
                  </label>
              </div>
            </th>
            <td>
                <span class="icon-unknown-file" aria-hidden="true"></span>
                <span class="sr-only">file</span>
                <span>File</span>
            </td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
        </tr>
        <tr class="selected">
            <th scope="row">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck3" autocomplete="off" checked>
                  <label class="custom-control-label" for="customCheck3">
                    <span class="custom-control-description sr-only">Select row 3</span>
                  </label>
                </div>
            </th>
            <td>
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                  <rect width="100%" height="100%" fill="#ffd200"/>
                </svg>
                <span>Image 1</span>
            </td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
        </tr>
        <tr>
            <th scope="row">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck4" autocomplete="off">
                  <label class="custom-control-label" for="customCheck4">
                    <span class="custom-control-description sr-only">Select row 4</span>
                  </label>
                </div>
            </th>
            <td>
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                  <rect width="100%" height="100%" fill="#4bb4e6"/>
                </svg>
                <span>Image 2</span>
            </td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
        </tr>
        <tr>
            <th scope="row">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck5" autocomplete="off">
                  <label class="custom-control-label" for="customCheck5">
                    <span class="custom-control-description sr-only">Select row 5</span>
                  </label>
                 </div>
            </th>
            <td>
                <span class="icon-info" aria-hidden="true"></span>
                <span class="sr-only">info</span>
            </td>
            <td>
                <span class="svg-tick" aria-hidden="true"></span>
                <span class="sr-only">checked</span>
            </td>
            <td>
                <span class="svg-tick" aria-hidden="true"></span>
                <span class="sr-only">checked</span>
            </td>
            <td>
                <span class="svg-tick" aria-hidden="true"></span>
                <span class="sr-only">checked</span>
            </td>
        </tr>
    </tbody>
</table>
{% endcapture %} {% include example.html content=example %}

### Sortable tables

[Boosted bundle includes TableSorter]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/contents/#js-files), a jQuery plugin to make data tables sortable.

Then initialize tableSorter by targetting an element, and passing some options. 
Please refer to [TableSorter documentation](https://mottie.github.io/tablesorter/docs/) for more options.

{% highlight js %}
$(document).ready(function () {
  $("#sortable").tablesorter({
    sortList: [[4, 1]],
    onRenderTemplate : function(i, t){
      return '<span>' + t + '</span>';
    }
  });
});
{% endhighlight %}

{% capture example %}
<table id="sortable" class="table tablesorter">
  <caption>Calls received</caption>
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Number</th>
      <th scope="col">Place called</th>
      <th scope="col">Call class</th>
      <th scope="col">Duration</th>
      <th scope="col">Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>08/10/12</td>
      <td>447765896321</td>
      <td>BT Freefone</td>
      <td>talk</td>
      <td>0:05:40</td>
      <td>0.214</td>
    </tr>
    <tr>
      <td>09/10/12</td>
      <td>447765896321</td>
      <td>BT Freefone</td>
      <td>talk</td>
      <td>0:19:09</td>
      <td>0.158</td>
    </tr>
    <tr>
      <td>10/10/12</td>
      <td>447765896322</td>
      <td>Free</td>
      <td>talk</td>
      <td>0:10:06</td>
      <td>0.089</td>
    </tr>
    <tr>
      <td>11/10/12</td>
      <td>447765896324</td>
      <td>Orange</td>
      <td>SMS</td>
      <td>-</td>
      <td>0.10</td>
    </tr>
  </tbody>
</table>
{% endcapture %} {% include example.html content=example %}

[comment]: # end mod

