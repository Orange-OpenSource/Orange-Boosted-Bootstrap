### Control item

Control item is an abstraction for several non-text input components that have similar behavior and layout. It contains an `<input>` indicator, a text container for the label and an optional icon.

We use the future friendly child check selector (`:has`) for all our `<input>` states, like `:invalid` or `:disabled`. When combined with the `.control-item-label` class, we can easily style the text for each item based on the `<input>`'s state.

`.control-item-assets-container` are containers controlling the position of the `.control-item-indicator` and the optional icon.

`.control-item-label` extend their clickable area until a `.control-item`, `.checkbox-standalone`, `.radio-button-standalone` or a `position: relative;` is found in the page hierarchy. It permits to have a more consistent approach, whatever the DOM is. Nonetheless, it means that none of the elements next to the label should be interactive.

`.control-item-indicator` are based on SVGs that are controlled by design tokens directly. These SVGs, that indicate unchecked, checked or indeterminate states, are not Solaris icons but custom OUDS icons that are provided in CSS.