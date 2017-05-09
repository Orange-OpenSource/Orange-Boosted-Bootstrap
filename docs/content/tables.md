---
layout: docs
title: Tables
description: Documentation and examples for styling tables with Bootstrap.
group: content
---

Due to the widespread use of tables across third-party widgets like calendars and date pickers, we've designed our tables to be **opt-in**. Just add the base class `.table` to any `<table>`, then extend with custom styles or our various included modifier classes.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Examples

Using the most basic table markup, here's how `.table`-based tables look in Bootstrap. **All table styles are inherited in Bootstrap 4**, meaning any nested tables will be styled in the same manner as the parent.

{% example html %}
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
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

You can also invert the colors—with light text on dark backgrounds—with `.table-inverse`.

{% example html %}
<table class="table table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
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

Similar to default and inverse tables, use one of two modifier classes to make `<thead>`s appear light or dark gray.

{% example html %}
<table class="table">
  <thead class="thead-inverse">
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
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
  <thead class="thead-default">
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
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
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
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
<table class="table table-striped table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
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
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
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
      <td>Mark</td>
      <td>Otto</td>
      <td>@TwBootstrap</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endexample %}

{% example html %}
<table class="table table-bordered table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
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
      <td>Mark</td>
      <td>Otto</td>
      <td>@TwBootstrap</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">4</th>
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
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
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
<table class="table table-hover table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
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
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
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
<table class="table table-sm table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
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

| Class | Description |
| --- | --- |
| `.table-active` | Applies the hover color to a particular row or cell |
| `.table-success` | Indicates a successful or positive action |
| `.table-info` | Indicates a neutral informative change or action |
| `.table-warning` | Indicates a warning that might need attention |
| `.table-danger` | Indicates a dangerous or potentially negative action |

<div class="bd-example">
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Column heading</th>
        <th>Column heading</th>
        <th>Column heading</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
        <th scope="row">1</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="table-success">
        <th scope="row">3</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="table-info">
        <th scope="row">5</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="table-warning">
        <th scope="row">7</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr>
        <th scope="row">8</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="table-danger">
        <th scope="row">9</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
    </tbody>
  </table>
</div>

{% highlight html %}
<!-- On rows -->
<tr class="table-active">...</tr>
<tr class="table-success">...</tr>
<tr class="table-info">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-danger">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="table-active">...</td>
  <td class="table-success">...</td>
  <td class="table-info">...</td>
  <td class="table-warning">...</td>
  <td class="table-danger">...</td>
</tr>
{% endhighlight %}

Regular table background variants are not available with the inverse table, however, you may use [text or background utilities]({{ site.baseurl }}/utilities/colors/) to achieve similar styles.

<div class="bd-example">
  <table class="table table-inverse">
    <thead>
      <tr>
        <th>#</th>
        <th>Column heading</th>
        <th>Column heading</th>
        <th>Column heading</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-primary">
        <th scope="row">1</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="bg-success">
        <th scope="row">3</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="bg-info">
        <th scope="row">5</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="bg-warning">
        <th scope="row">7</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr>
        <th scope="row">8</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="bg-danger">
        <th scope="row">9</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
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

## Responsive tables

Create responsive tables by adding `.table-responsive` to any `.table` to make them scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, you will not see any difference in these tables.

{% callout warning %}
#### Vertical clipping/truncation

Responsive tables make use of `overflow-y: hidden`, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.
{% endcallout %}

<div class="bd-example">
  <table class="table table-responsive">
      <thead>
        <tr>
          <th>#</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </table>

  <table class="table table-bordered table-responsive">
      <thead>
        <tr>
          <th>#</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </table>
</div>

{% highlight html %}
<table class="table table-responsive">
    ...
</table>
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
                    <span class="custom-control-indicator"></span>
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
                    <span class="custom-control-indicator"></span>
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
                    <span class="custom-control-indicator"></span>
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
                    <span class="custom-control-indicator"></span>
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
                    <span class="custom-control-indicator"></span>
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
                    <span class="custom-control-indicator"></span>
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
                    <span class="custom-control-indicator"></span>
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
                    <span class="custom-control-indicator"></span>
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
                    <span class="custom-control-indicator"></span>
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
                    <span class="custom-control-indicator"></span>
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
                    <span class="custom-control-indicator"></span>
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
                    <span class="custom-control-indicator"></span>
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

