# Table

> **Draft component:** the table component is not yet finalized in OUDS Web (design and DOM may still change). Treat it as a temporary/opt-in solution. Refer to the [Boosted table docs](https://boosted.orange.com/docs/content/tables/) for extra background if needed.

## Overview

Tables are **opt-in**: add `.table` to any `<table>` to apply OUDS Web table styles (this avoids affecting third-party widgets like calendars/date pickers that also use `<table>`). Table styles are not inherited, so nested tables can be styled independently.

```html
<table class="table">
  <caption class="visually-hidden">Basic table</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
```

## Accessibility

- Add `scope="col"` / `scope="row"` / `scope="colgroup"` / `scope="rowgroup"` on `<th>` as needed.
- Add a `<caption>` on every table (use `.visually-hidden` if it must not be visible). If the caption isn't descriptive enough, add `aria-label="Description of table data - Description of table metadata"` (metadata required for complex tables).

## Variants

### Functional colors

Add `.table-{status}` (`info`, `positive`, `warning`, `negative`) on a `<tr>` for a muted status background. Pair with a badge/icon — color alone must not carry the meaning.

```html
<tr class="table-warning">
  <th scope="row">1</th>
  <td><span class="badge badge-warning me-xsmall"></span>Reloading</td>
  <td>Cell</td>
</tr>
```

### Striped rows

Add `.table-striped` on `<table>` for zebra-striping of `<tbody>` rows.

## Responsive tables

Wrap `<table class="table">` in `<div class="table-responsive">` for horizontal scroll at all breakpoints. Use `.{xs|sm|md|lg|xl|2xl|3xl}:table-responsive` to scope it up to a given breakpoint only (note: OUDS prefix syntax, not Bootstrap's `.table-responsive-{bp}`).

```html
<div class="table-responsive">
  <table class="table">...</table>
</div>
```

`overflow-y: hidden` is applied, which can clip dropdowns/third-party widgets that overflow the table vertically.

## Row selection

### With checkboxes

Use [standalone checkboxes](checkbox.md) with `.visually-hidden` labels. Header's first cell holds a "select all" checkbox (indeterminate state when only some rows are selected). Selected rows get `data-bs-theme="dark"` (via JS) — or manually via `.table-active` + `data-bs-theme="dark"` on `<tr>`/`<td>`.

```html
<tr data-bs-theme="dark">
  <td>
    <label class="checkbox-standalone">
      <input class="control-item-indicator" type="checkbox" value="1" checked />
      <span class="visually-hidden">Select row 1</span>
    </label>
  </td>
  <td>Cell</td>
</tr>
```

### With radio buttons

Same pattern as checkboxes using [standalone radio buttons](radio-button.md), without a "select all" option.

## Rich content tables

Tables can contain other components (tags, badges, switches, icons, images).

- Horizontal alignment: `.text-center` on `<th>`/`<td>`.
- Vertical alignment: `.align-middle` on `<tr>`.
- To preserve row height when a cell's component could overflow vertically, add `.table-cell-component` on that `<td>` in addition to `.align-middle` on the `<tr>`.

```html
<tr class="align-middle">
  <td class="table-cell-component">
    <p class="tag tag-positive tag-small">
      <span class="tag-status-icon"></span>
      Running
    </p>
  </td>
</tr>
```
