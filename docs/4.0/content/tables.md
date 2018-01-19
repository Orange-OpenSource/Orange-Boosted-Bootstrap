---
layout: docs
title: Tables
description: Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.
group: content
toc: true
---

## Examples

Due to the widespread use of tables across third-party widgets like calendars and date pickers, we've designed our tables to be **opt-in**. Just add the base class `.table` to any `<table>`, then extend with custom styles or our various included modifier classes.

Using the most basic table markup, here's how `.table`-based tables look in Bootstrap. **All table styles are inherited in Bootstrap 4**, meaning any nested tables will be styled in the same manner as the parent.

{% example html %}
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
{% endexample %}

You can also invert the colors—with light text on dark backgrounds—with `.table-dark`.

{% example html %}
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
{% endexample %}

## Table head options

Similar to tables and dark tables, use the modifier classes `.thead-light` or `.thead-dark` to make `<thead>`s appear light or dark gray.

{% example html %}
<table class="table">
  <thead class="thead-dark">
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

<table class="table">
  <thead class="thead-light">
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
{% endexample %}

## Striped rows

Use `.table-striped` to add zebra-striping to any table row within the `<tbody>`.

{% example html %}
<table class="table table-striped">
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
{% endexample %}

{% example html %}
<table class="table table-striped table-dark">
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
{% endexample %}

## Bordered table

Add `.table-bordered` for borders on all sides of the table and cells.

{% example html %}
<table class="table table-bordered">
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
{% endexample %}

{% example html %}
<table class="table table-bordered table-dark">
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
{% endexample %}

## Hoverable rows

Add `.table-hover` to enable a hover state on table rows within a `<tbody>`.

{% example html %}
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
{% endexample %}

{% example html %}
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
{% endexample %}

## Small table

Add `.table-sm` to make tables more compact by cutting cell padding in half.

{% example html %}
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
{% endexample %}

{% example html %}
<table class="table table-sm table-dark">
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
{% endexample %}

## Contextual classes

Use contextual classes to color table rows or individual cells.

<div class="bd-example">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
        <th scope="row">Active</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">Default</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>

      {% for color in site.data.theme-colors %}
      <tr class="table-{{ color.name }}">
        <th scope="row">{{ color.name | capitalize }}</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>{% endfor %}
    </tbody>
  </table>
</div>

{% highlight html %}
<!-- On rows -->
<tr class="table-active">...</tr>
{% for color in site.data.theme-colors %}
<tr class="table-{{ color.name }}">...</tr>{% endfor %}

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="table-active">...</td>
  {% for color in site.data.theme-colors %}
  <td class="table-{{ color.name }}">...</td>{% endfor %}
</tr>
{% endhighlight %}

Regular table background variants are not available with the dark table, however, you may use [text or background utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/colors/) to achieve similar styles.

<div class="bd-example">
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-primary">
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="bg-success">
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="bg-info">
        <th scope="row">5</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="bg-warning">
        <th scope="row">7</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">8</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="bg-danger">
        <th scope="row">9</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>

{% highlight html %}
<!-- On rows -->
<tr class="bg-primary">...</tr>
<tr class="bg-success">...</tr>
<tr class="bg-warning">...</tr>
<tr class="bg-danger">...</tr>
<tr class="bg-info">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="bg-primary">...</td>
  <td class="bg-success">...</td>
  <td class="bg-warning">...</td>
  <td class="bg-danger">...</td>
  <td class="bg-info">...</td>
</tr>
{% endhighlight %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

Create responsive tables by wrapping any `.table` with `.table-responsive{-sm|-md|-lg|-xl}`, making the table scroll horizontally at each `max-width` breakpoint of up to (but not including) 576px, 768px, 992px, and 1120px, respectively.

{% capture callout-include %}{% include callout-info-mediaqueries-breakpoints.md %}{% endcapture %}
{{ callout-include | markdownify }}

## Captions

A `<caption>` functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it.

{% example html %}
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
{% endexample %}

## Responsive tables

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a `.table` with `.table-responsive`. Or, pick a maximum breakpoint with which to have a responsive table up to by using `.table-responsive{-sm|-md|-lg|-xl}`.

{% callout warning %}
##### Vertical clipping/truncation

Responsive tables make use of `overflow-y: hidden`, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.
{% endcallout %}

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

<div class="bd-example">
{% for bp in site.data.breakpoints %}{% unless bp.breakpoint == "xs" %}
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
      </tr>
      <tr>
        <th scope="row">2</th>
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
      </tr>
    </tbody>
  </table>
</div>
{% endunless %}{% endfor %}
</div>

{% highlight html %}
{% for bp in site.data.breakpoints %}{% unless bp.breakpoint == "xs" %}
<div class="table-responsive{{ bp.abbr }}">
  <table class="table">
    ...
  </table>
</div>
{% endunless %}{% endfor %}
{% endhighlight %}

[comment]: # Boosted mod

## Orange brand tables

### Checkbox tables

Add `.has-checkbox` class to the `<table>` element to get correct spacing on the first column.

{% example html %}
<table class="table table-hover has-checkbox">
    <thead>
        <tr>
            <th scope="col">
                <label class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox">
                    <span class="custom-control-label"></span>
                    <span class="custom-control-description sr-only">select all</span>
                </label>
            </th>
            <th scope="col">Status</th>
            <th scope="col">Column heading</th>
            <th scope="col">Column heading</th>
            <th scope="col">Column heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">
                <label class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox">
                    <span class="custom-control-label"></span>
                    <span class="custom-control-description sr-only">select row 1</span>
                </label>
            </th>
            <td>ok</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
        </tr>
        <tr class="selected">
            <th scope="row">
                <label class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" checked>
                    <span class="custom-control-label"></span>
                    <span class="custom-control-description sr-only">select row 2</span>
                </label>
            </th>
            <td>ok</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
        </tr>
        <tr class="selected">
            <th scope="row">
                <label class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" checked>
                    <span class="custom-control-label"></span>
                    <span class="custom-control-description sr-only">select row 3</span>
                </label>
            </th>
            <td>ok</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
        </tr>
        <tr>
            <th scope="row">
                <label class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox">
                    <span class="custom-control-label"></span>
                    <span class="custom-control-description sr-only">select row 4</span>
                </label>
            </th>
            <td>ok</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
        </tr>
        <tr>
            <th scope="row">
                <label class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox">
                    <span class="custom-control-label"></span>
                    <span class="custom-control-description sr-only">select row 5</span>
                </label>
            </th>
            <td>ok</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
        </tr>
        </tbody>
    </table>
{% endexample %}

### Thumbnail and icons tables

In addition use `.has-icon` to specify the table is using icons and / or thumbnails to get correct row height.

{% example html %}
<table class="table table-hover has-checkbox has-icon">
    <thead>
        <tr>
            <th scope="col">
                <label class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox">
                    <span class="custom-control-label"></span>
                    <span class="custom-control-description sr-only">select all</span>
                </label>
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
                <label class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox">
                    <span class="custom-control-label"></span>
                    <span class="custom-control-description sr-only">select row 1</span>
                </label>
            </th>
            <td>
                <span class="icon-folder-document"></span>
                <span class="sr-only">folder</span>
                <span>Finance</span>
            </td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
        </tr>
        <tr>
            <th scope="row">
                <label class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox">
                    <span class="custom-control-label"></span>
                    <span class="custom-control-description sr-only">select row 2</span>
                </label>
            </th>
            <td>
                <span class="icon-unknown-file"></span>
                <span class="sr-only">file</span>
                <span>File</span>
            </td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
        </tr>
        <tr class="selected">
            <th scope="row">
                <label class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" checked>
                    <span class="custom-control-label"></span>
                    <span class="custom-control-description sr-only">select row 3</span>
                </label>
            </th>
            <td>
                <img src="{{ site.baseurl }}/assets/img/thumb_yellow.png" alt="thumb_yellow.png"><span>Img 1</span>
            </td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
        </tr>
        <tr>
            <th scope="row">
                <label class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox">
                    <span class="custom-control-label"></span>
                    <span class="custom-control-description sr-only">select row 4</span>
                </label>
            </th>
            <td>
                <img src="{{ site.baseurl }}/assets/img/thumb_blue.png" alt="thumb_blue.png"><span>Img 2</span>
            </td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
        </tr>
        <tr>
            <th scope="row">
                <label class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox">
                    <span class="custom-control-label"></span>
                    <span class="custom-control-description sr-only">select row 5</span>
                </label>
            </th>
            <td>
                <span class="icon-info" style="color: #527EDB;"></span>
                <span class="sr-only">info</span>
            </td>
            <td>
                <span class="svg-tick"></span>
                <span class="sr-only">checked</span>
            </td>
            <td>
                <span class="svg-tick"></span>
                <span class="sr-only">checked</span>
            </td>
            <td>
                <span class="svg-tick"></span>
                <span class="sr-only">checked</span>
            </td>
        </tr>
        </tbody>
    </table>
{% endexample %}

[comment]: # end mod

