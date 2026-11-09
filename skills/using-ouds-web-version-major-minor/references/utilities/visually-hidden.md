# Visually hidden

Hide elements visually while keeping them accessible to screen readers.

## Classes

- `.visually-hidden` — hide element visually, remain accessible to assistive technologies
- `.visually-hidden-focusable` — hidden by default, displayed when focused (e.g., keyboard navigation). Can be applied to a container; displays when any child receives focus via `:focus-within`.

```html
<h2 class="visually-hidden">Title for screen readers</h2>
<a class="visually-hidden-focusable" href="#content">Skip to main content</a>
<div class="visually-hidden-focusable">
  A container with a <a href="#">focusable element</a>.
</div>
```

## Sass mixins

```scss
.visually-hidden-title {
  @include visually-hidden;
}

.skip-navigation {
  @include visually-hidden-focusable;
}
```
