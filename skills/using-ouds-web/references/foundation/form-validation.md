# Form Validation

Client-side and server-side form validation with custom feedback styles.

## How It Works

- Add `novalidate` to `<form>` to disable browser default tooltips while keeping validation APIs
- Uses CSS `:user-invalid` pseudo-class (triggers after user interaction) on `<input>`, `<select>`, `<textarea>`
- Fallback: `aria-invalid="true"` for server-side validation
- Custom colors, borders, focus styles, and background icons
- Error messages linked via `aria-describedby`

> Do **not** use `aria-errormessage` — not widely supported by assistive technologies.

## Client-Side Validation

Use `novalidate` + JavaScript to handle submit and apply `:user-invalid` styles.

Each field references its error message via `aria-describedby`. This reference must **not** be static in the HTML — it must be **synchronized dynamically** with the field's actual validity state:

- Listen only to the `input` event on each field and the `submit` event on the form (do **not** listen to `blur`, since error styles rely on `:user-invalid`, which follows the same triggering logic).
- On each trigger, check the field's validity (`checkValidity()` or the equivalent API of the framework used in the project).
- If invalid → ensure the error message ID is present in `aria-describedby`, preserving any other IDs already present (e.g. an existing helper text description) — `aria-describedby` can hold multiple space-separated IDs.
- If valid → remove that ID from `aria-describedby` without touching other IDs; if the resulting list is empty, remove the attribute entirely.

This logic must be implemented by the library consumer, using whatever framework the project relies on (vanilla JS, React, Vue, Angular...). OUDS Web does not ship a ready-to-use script for this.

```html
<form class="needs-validation" novalidate>
  <p class="fw-bold">All fields are mandatory.</p>

  <!-- Text input with validation -->
  <div class="text-input component-max-width mb-large">
    <div class="text-input-container">
      <label for="username">Username</label>
      <input
        type="text"
        class="text-input-field"
        id="username"
        aria-describedby="usernameFeedback"
        autocomplete="username"
        placeholder=" "
        required
      />
    </div>
    <p id="usernameFeedback" class="error-text">Username is required.</p>
  </div>

  <!-- Select with validation -->
  <div class="select-input component-max-width mb-large">
    <div class="select-input-container">
      <label for="continent">Continent</label>
      <select
        class="select-input-field"
        id="continent"
        aria-describedby="continentFeedback"
        required
      >
        <option value="" disabled selected></option>
        <option value="1">Europe</option>
      </select>
    </div>
    <p id="continentFeedback" class="error-text">Continent is required.</p>
  </div>

  <!-- Radio group with validation -->
  <fieldset class="control-items-list mb-large">
    <legend>Title</legend>
    <div class="radio-button-item component-max-width">
      <div class="control-item-assets-container">
        <input
          class="control-item-indicator"
          type="radio"
          value=""
          name="title"
          id="mr"
          aria-describedby="titleFeedback"
          required
        />
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="mr">Mr.</label>
      </div>
    </div>
    <p class="control-item-error-message" id="titleFeedback">
      You must choose an option.
    </p>
  </fieldset>

  <!-- Checkbox with validation -->
  <div class="checkbox-item-container mb-large">
    <div class="checkbox-item component-max-width">
      <div class="control-item-assets-container">
        <input
          class="control-item-indicator"
          type="checkbox"
          value=""
          id="agree"
          aria-describedby="agreeFeedback"
          required
        />
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="agree">I agree</label>
      </div>
    </div>
    <p class="control-item-error-message" id="agreeFeedback">
      You must accept.
    </p>
  </div>

  <!-- Switch with validation -->
  <div class="switch-item-container mb-large">
    <div class="switch-item control-item-reverse component-max-width">
      <div class="control-item-assets-container">
        <input
          class="control-item-indicator"
          type="checkbox"
          role="switch"
          value=""
          id="terms"
          aria-describedby="termsFeedback"
          required
        />
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="terms"
          >I have read the terms</label
        >
      </div>
    </div>
    <p class="control-item-error-message" id="termsFeedback">
      You must confirm.
    </p>
  </div>

  <button type="submit" class="btn btn-strong">Submit</button>
</form>
```

## Server-Side Validation

Use `aria-invalid="true"` and `aria-describedby` to mark and describe invalid fields:

```html
<div class="text-input component-max-width mb-large">
  <div class="text-input-container">
    <label for="username2">Username</label>
    <input
      type="text"
      class="text-input-field"
      aria-invalid="true"
      id="username2"
      aria-describedby="username2Feedback"
      autocomplete="username"
      placeholder=" "
      required
    />
  </div>
  <p id="username2Feedback" class="error-text">Username is required.</p>
</div>
```

## Mandatory Fields Indication

### Single/Obvious Fields

No mention needed (e.g. login/password forms).

### All Mandatory

State "**All fields are mandatory.**" at top. Use `required` on each field.

### Mixed Mandatory/Optional

State "**All fields marked with an \* are mandatory.**" at top. Add `.is-required` on mandatory field labels (adds red asterisk). Use `required` attribute.

```html
<form class="needs-validation" novalidate>
  <p class="fw-bold">
    All fields marked with an <span class="text-status-negative">*</span> are
    mandatory.
  </p>
  <div class="text-input component-max-width mb-large">
    <div class="text-input-container">
      <label for="firstname" class="is-required">First name</label>
      <input
        type="text"
        class="text-input-field"
        id="firstname"
        placeholder=" "
        required
      />
    </div>
  </div>
  <div class="text-input component-max-width mb-large">
    <div class="text-input-container">
      <label for="nickname">Nickname</label>
      <input
        type="text"
        class="text-input-field"
        id="nickname"
        placeholder=" "
      />
    </div>
  </div>
</form>
```

## Key Classes

| Class                         | Purpose                                        |
| ----------------------------- | ---------------------------------------------- |
| `.needs-validation`           | Form wrapper for client-side validation        |
| `.error-text`                 | Error message for text/select/textarea inputs  |
| `.control-item-error-message` | Error message for checkboxes, radios, switches |
| `.helper-text`                | Helper/description text below inputs           |
| `.is-required`                | Red asterisk on mandatory field labels         |
| `.component-max-width`        | Constrains component width                     |

## Accessibility

- Always use `<label>` linked to form elements
- Specify validation rules via attributes: `required`, `pattern`, `min`, `minlength`
- Add `inputmode` and `autocomplete` attributes as needed
- Associate error messages with `aria-describedby`, synchronizing it dynamically as the field's validity state changes (see "Client-Side Validation")
