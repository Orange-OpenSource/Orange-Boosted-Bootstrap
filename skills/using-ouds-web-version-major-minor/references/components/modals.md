# Modals

OUDS Web modals use the native HTML `<dialog>` element. They provide two dialog types:

- **Modal dialog**: a focused surface that stays visually separated from the page.
- **Fullscreen dialog**: occupies the available viewport and does not use a backdrop.

## Common structure

Use `.modal-base` on the `<dialog>` and structure the content with:

- `.modal-header` — title, optional subtitle or previous link, and close button
- `.modal-body` — dialog content
- `.modal-footer` — action buttons

Use `.modal-dialog` for a standard modal or `.modal-fullscreen-dialog` for a fullscreen dialog.

```html
<dialog
  id="accountDialog"
  class="modal-base modal-dialog"
  aria-labelledby="accountDialogTitle"
  closedby="any"
>
  <div class="modal-header">
    <h3 id="accountDialogTitle" class="modal-title">Account settings</h3>
    <button
      type="button"
      class="btn btn-close"
      commandfor="accountDialog"
      command="close"
    >
      <span class="visually-hidden">Close</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Update your account settings.</p>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-strong"
        commandfor="accountDialog"
        command="close"
      >
        Save
      </button>
    </div>
  </div>
</dialog>

<button
  type="button"
  class="btn btn-default"
  commandfor="accountDialog"
  command="show-modal"
>
  Open account settings
</button>
```

## Accessibility

- Give every dialog an accessible name with `aria-labelledby` pointing to a unique heading ID.
- Choose an appropriate initial focus; use `autofocus` when focus should start on a specific control.
- Provide a discoverable way to close the dialog, such as a close, cancel, or confirmation button.
- Preserve the default `Escape` behavior unless the flow intentionally requires otherwise.
- Open modal dialogs with `showModal()` or the `show-modal` invoker command so the page behind them becomes inert.
- Do not add `tabindex` to `<dialog>`.

## Invoker commands

Invoker Commands API attributes can open and close dialogs without custom JavaScript:

```html
<button commandfor="accountDialog" command="show-modal">
  Open modal
</button>

<button commandfor="accountDialog" command="close">
  Close modal
</button>
```

The Invoker Commands API has limited browser support. Use the [invokers-polyfill](https://github.com/keithamus/invokers-polyfill) or the programmatic API when required.

## JavaScript

Use the native dialog methods:

```js
const dialog = document.querySelector('#accountDialog')

dialog.showModal()
dialog.close()
```

Listen for native dialog events when behavior needs to be intercepted or handled:

```js
dialog.addEventListener('cancel', event => {
  event.preventDefault()
})

dialog.addEventListener('close', () => {
  // The dialog has closed.
})
```

## Variants

### Fixed height

Add `.modal-fixed-height` to `.modal-dialog` for multi-step flows or content with a consistent layout.

### Sticky actions

To keep actions visible while the content scrolls, place `.modal-footer` outside `.modal-body`:

```html
<dialog class="modal-base modal-dialog" aria-labelledby="dialogTitle">
  <div class="modal-header">
    <h3 id="dialogTitle" class="modal-title">Title</h3>
  </div>
  <div class="modal-body">
    <p>Scrollable content.</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-strong">Continue</button>
  </div>
</dialog>
```

### Small dialog

Add `.modal-small` to `.modal-dialog` when the task needs less space.

### Non-blurred backdrop

The modal dialog backdrop is blurred by default. Add `.modal-non-blurred` to disable the blur.

### Rounded corners

For Orange and Orange Compact, add `.use-rounded-corner-modal` to a top-level container to opt into rounded modal corners. This is a project-wide option; use it consistently.

## Custom responsive behavior

For a dialog that changes from fullscreen on small screens to a modal dialog at larger sizes, use the modal SCSS mixins to define a custom class. See the [modal fluid example](https://web.unified-design-system.orange.com/docs/components/modals/#custom-component-flexibility).

## References

- [Modal dialog guidelines](https://r.orange.fr/r/S-ouds-doc-modal-dialog)
- [Fullscreen dialog guidelines](https://r.orange.fr/r/S-ouds-doc-fullscreen-dialog)
- [MDN `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [MDN `<dialog>` accessibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#accessibility)
