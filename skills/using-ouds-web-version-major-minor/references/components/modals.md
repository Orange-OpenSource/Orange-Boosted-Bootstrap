# Modals

OUDS Web modals use the native HTML `<dialog>` element with the `.modal-base` class. There are two types:

- **Modal dialog** (`.modal-dialog`) is a focused surface separated visually from the page.
- **Fullscreen dialog** (`.modal-fullscreen-dialog`) occupies the available viewport and does not use a backdrop.

Both types share the same structure and common variants. Fullscreen dialogs do not use the modal-dialog-specific variants or sizes described below.

## Common structure

- `.modal-header` contains the `.modal-title`, and may contain a subtitle, previous link, or close button.
- `.modal-body` contains the main content. It can contain `.modal-footer` for standard actions.
- `.modal-footer` contains the actions. Place it outside `.modal-body` for sticky actions.

Give each dialog a unique ID and an accessible name by linking `aria-labelledby` to its title. A typical dialog opened with invoker commands is:

```html
<dialog id="accountDialog" class="modal-base modal-dialog" aria-labelledby="accountDialogTitle" closedby="any">
  <div class="modal-header">
    <h2 id="accountDialogTitle" class="modal-title">Account settings</h2>
    <button type="button" class="btn btn-close" commandfor="accountDialog" command="close">
      <span class="visually-hidden">Close</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Update your account settings.</p>
    <div class="modal-footer">
      <button type="button" class="btn btn-strong" commandfor="accountDialog" command="close">Save</button>
    </div>
  </div>
</dialog>

<button type="button" class="btn btn-default" commandfor="accountDialog" command="show-modal">
  Open account settings
</button>
```

Adapt the title heading level to the page hierarchy. Do not add `tabindex` to `<dialog>`.

## Accessibility

- Use a meaningful title and `aria-labelledby` on every dialog.
- Choose an appropriate initial focus. By default, focus moves to the first focusable element; use `autofocus` when focus should start elsewhere, such as on a close button or input.
- Always provide a discoverable, accessible way to close the dialog. Preserve the native `Escape` behavior unless the flow intentionally requires otherwise.
- Open modal dialogs with `showModal()` or the `show-modal` invoker command. This gives the dialog modal semantics and makes the rest of the page inert.
- Do not add `tabindex` to the `<dialog>` element.

See [MDN's `<dialog>` accessibility guidance](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#accessibility).

## Modal dialog variants

These variants apply to `.modal-dialog` unless otherwise noted.

### Fixed height

Add `.modal-fixed-height` to `.modal-dialog` for multi-step flows or content with a consistent layout. The dialog uses the maximum height available for its size. It can be combined with `.modal-small`.

### Rounded corners

For Orange and Orange Compact, add `.use-rounded-corner-modal` to a top-level container (for example, `<body>`) to enable rounded modal corners. This is a project-wide option, so use it consistently across modal dialogs. Rounded corners are intended for emotional, immersive, or brand-specific contexts; keep square corners for standard or business-oriented use.

### Non-blurred backdrop

The modal backdrop is blurred by default. Add `.modal-non-blurred` to `.modal-dialog` to disable the blur.

### Sizes

Add `.modal-small` to `.modal-dialog` when a task needs less space and can be completed with minimal information or interaction. It can be combined with `.modal-fixed-height`.

## Fullscreen dialog

Use `.modal-fullscreen-dialog` with `.modal-base` for a dialog that takes the available viewport. It shares the common variants below, but not the modal-dialog-specific variants and sizes.

## Switching types at breakpoints

Use the modal SCSS mixins to define a custom class when a dialog should change from fullscreen on smaller viewports to a modal dialog at larger sizes. This responsive behavior is not built into the component. The [`.modal-fluid` example](https://web.unified-design-system.orange.com/docs/components/modals/#custom-component-flexibility) demonstrates the approach.

## Common variants

The following variants work with both modal dialog and fullscreen dialog.

### Subtitle

Add `<p class="modal-subtitle">` above `.modal-title` inside `.modal-header` to provide context when the title alone is insufficient.

### Title icon

Add an icon element with `.modal-icon` inside `.modal-title`. Use `aria-hidden="true"` for a decorative icon. For status icons, use one of the functional variants below and include a visually hidden text label inside the icon.

### Functional modals

Apply one of these classes to `.modal-icon` to indicate the dialog status: `.modal-icon-negative`, `.modal-icon-positive`, `.modal-icon-info`, or `.modal-icon-warning`. Include a `.visually-hidden` label that communicates the status (for example, “Warning” or “Success”).

### Without close button

The close button may be omitted when the dialog has a clear, visible alternative dismissal control, such as a Cancel action. It may also be omitted for a mandatory step where dismissal is intentionally unavailable. Always provide a discoverable and accessible way to close the dialog, unless the controlled flow intentionally prevents dismissal.

### Previous link

Add an anchor with `.link`, `.link-chevron`, and `.link-previous` before `.modal-title` in `.modal-header` to let users navigate to a prior step without dismissing the dialog. It is intended for multi-step flows.

### Description

Supporting text below the title can provide context, instructions, or explain an outcome. Omit it when the title is sufficiently descriptive and the message is short and immediately understandable. Sticky actions are not compatible with dialogs that have neither a description nor rich content.

### Rich content slot

The modal body can contain forms, navigation lists, and other interactive content, not just text. When there is no description, adjust rich-content spacing with spacing utilities, such as `.pt-large` on `.modal-body`.

### Sticky actions

Move `.modal-footer` outside `.modal-body` to keep actions fixed at the bottom while the body scrolls independently. This is most visible with long content on smaller viewports and with `.modal-fixed-height`. The DOM placement differs from the standard structure. Sticky actions are not compatible with a dialog that has neither description text nor rich content.

```html
<dialog class="modal-base modal-dialog modal-fixed-height" aria-labelledby="dialogTitle">
  <div class="modal-header">
    <h2 id="dialogTitle" class="modal-title">Title</h2>
  </div>
  <div class="modal-body">
    <p>Scrollable content.</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-strong">Continue</button>
  </div>
</dialog>
```

### Actions layout

Use up to three actions: usually a primary action, a secondary action, and an optional tertiary action. Use `<button>` for actions and `<a>` for navigation. On small screens, action buttons stack vertically and fill the available width; on larger screens, they are typically horizontal, aligned right, with the tertiary action aligned left. Keep keyboard focus order logical: the DOM order is primary, secondary, then tertiary. Use order utilities only when the visual order needs to differ.

#### No full-width buttons

Add `.w-auto` to action buttons to disable their default full-width behavior on small screens.

#### Horizontal alignment

Add `.flex-row-reverse` to `.modal-footer` to disable vertical stacking on small screens. Use it with `.w-auto`; this is best for short button labels.

#### Complex layouts

For more complex action arrangements, add containers inside `.modal-footer` and use layout utilities to control grouping, order, alignment, and responsive behavior.

## Interactivity

Open and close dialogs with invoker commands or the native JavaScript API. Native dialogs opened with `showModal()` or `show-modal` provide keyboard navigation, focus management, screen reader support, and the default `Escape` behavior. Always include an explicit accessible dismissal action.

### Invoker commands

Set the trigger's `commandfor` to the dialog ID and its `command` to `show-modal`. Closing controls use the same `commandfor` and `command="close"`. Use `closedby="any"` on the dialog when light dismiss (closing by clicking outside) is appropriate.

```html
<button type="button" commandfor="accountDialog" command="show-modal">Open dialog</button>
<button type="button" commandfor="accountDialog" command="close">Close dialog</button>
```

Invoker Commands have limited support in some browsers in the OUDS Web target audience. Use the [invokers-polyfill](https://github.com/keithamus/invokers-polyfill) or the JavaScript API when required. The `[closedby]` attribute may also need the [dialog-closedby-polyfill](https://github.com/tak-dcxi/dialog-closedby-polyfill). With npm, install and import the polyfills in your JavaScript; alternatively, use the script tags described by each polyfill.

### JavaScript

Use the native `showModal()` and `close()` methods. The `cancel` and `close` events can be handled when the application needs to intercept or respond to dialog state changes. For light dismiss, close only when the click target is the dialog backdrop:

```js
const dialog = document.querySelector('#accountDialog')

dialog.showModal()
dialog.close()

dialog.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    dialog.close()
  }
})
```

### Light dismiss

Light dismiss closes the dialog when the user clicks outside it. Use `closedby="any"` with invoker commands, or listen for clicks on the dialog and call `close()` only when the event target is the dialog itself, as in the JavaScript example. Avoid light dismiss when it could discard unsaved changes or interrupt a required task, and always keep a clear accessible close action.

## References

- [Modal dialog guidelines](https://r.orange.fr/r/S-ouds-doc-modal-dialog)
- [Fullscreen dialog guidelines](https://r.orange.fr/r/S-ouds-doc-fullscreen-dialog)
- [MDN `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [MDN `<dialog>` accessibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#accessibility)
- [MDN Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
