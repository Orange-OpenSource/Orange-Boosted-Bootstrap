**Browsers built-in form validation is the preferred way to handle client-side validation**. When using [semantic inputs and validation constraints attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation#intrinsic_and_basic_constraints) (like `required`, `pattern`...), the browser automatically adds a `:user-invalid` pseudo-class on invalid fields that OUDS Web will style.

Alternatively you can programmatically add a `aria-invalid="true"` to manually mark a field as invalid.

Read more in our [form validation page]([[docsref:/foundation/form-validation]]) for mandatory accessibility considerations.
