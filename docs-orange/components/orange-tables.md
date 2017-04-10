---
layout: docs
title: Orange tables
description: Multiple Orange branded tables
group: components
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

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

In addition use `.has-icon` to specify the table is using icons and thumbnails to get correct row height.

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
                <img src="../../assets/img/thumb_yellow.png" alt="thumb_yellow.png"><span>Img 1</span>
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
                <img src="../../assets/img/thumb_blue.png" alt="thumb_blue.png"><span>Img 2</span>
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
