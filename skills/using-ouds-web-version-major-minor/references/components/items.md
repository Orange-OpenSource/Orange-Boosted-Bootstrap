# Items

Item is the equivalent of the design `List item`. It **replaces Bootstrap's `.list-group`**. Two categories, each with a static (non-interactive) and a navigation (interactive) variant:

| Category | Static                | Navigation                |
| -------- | --------------------- | -------------------------- |
| Card     | Static card item       | Navigation card item        |
| List     | Static list item        | Navigation list item        |

- **Card items** are standalone, self-contained.
- **List items** are meant to be used together inside a structured list (`<ul class="item-list">`).

## Base structure

- `.item` — external container (add `.item-navigation` for interactive variants)
- `.item-container` — container before the divider
- `.item-content` — main container for the primary content
- `.item-text-container` — container for the text content
- `.item-interactive` — **mandatory** on the interactive element (link) of a navigation item

## Static card item

```html
<div class="item">
  <div class="item-container">
    <div class="item-content">
      <div class="item-text-container">
        <p class="item-label">Label</p>
      </div>
    </div>
  </div>
</div>
```

## Navigation card item

Add `.item-navigation` on `.item` and `.item-interactive` on the link.

```html
<div class="item item-navigation">
  <div class="item-container">
    <div class="item-content">
      <div class="item-text-container">
        <a href="#" class="item-label item-interactive">Label</a>
      </div>
    </div>
  </div>
</div>
```

## Static list item

Wrap items in `<ul class="item-list">`, one `<li class="item">` per row.

```html
<ul class="item-list">
  <li class="item">
    <div class="item-container">
      <div class="item-content">
        <div class="item-text-container">
          <p class="item-label">Label</p>
        </div>
      </div>
    </div>
  </li>
</ul>
```

## Navigation list item

```html
<ul class="item-list">
  <li class="item item-navigation">
    <div class="item-container">
      <div class="item-content">
        <div class="item-text-container">
          <a href="#" class="item-label item-interactive">Label</a>
        </div>
      </div>
    </div>
  </li>
</ul>
```

## Content of `.item-content` (fixed order)

1. **Leading container** (optional) — `.item-leading-container`
2. **Text container** (required) — `.item-text-container`
3. **Trailing container** (optional) — `.item-trailing-container`

### Leading / trailing container assets

Supported assets, applied on `.item-leading-container` / `.item-trailing-container`:

- **Icon**: sizeable with `.item-leading-large` / `.item-trailing-large`. For status icons use `.item-icon` + one of `.item-status-positive`, `.item-status-warning`, `.item-status-info`, `.item-status-negative`.
- **Image**: sizeable with `.item-leading-large`/`.item-leading-xlarge` (or trailing equivalents), combine with [aspect ratio utilities](../utilities/aspect-ratio.md) and `.item-leading-rounded` / `.item-trailing-rounded`.
- **Slot** (leading/trailing only): add `.item-slot` on the container. Max size `$ouds-dimension-8xlarge`. Can be rounded with `.item-leading-rounded` / `.item-trailing-rounded`.
- **Trailing-only extras**: text (`.item-label`, optionally `.item-extra-label`, `.text-muted`, `.fw-bold`), badge (any [badge](badges.md) variant), tag (any tag variant).

```html
<div class="item">
  <div class="item-container">
    <div class="item-content">
      <div class="item-leading-container item-leading-large">
        <svg class="w-100 h-100" aria-hidden="true"><use xlink:href="path/to/ouds-web-sprite.svg#heart-empty"/></svg>
      </div>
      <div class="item-text-container">
        <p class="item-label">Label</p>
      </div>
      <div class="item-trailing-container">
        <p class="tag">Tag</p>
      </div>
    </div>
  </div>
</div>
```

### Text container (fixed order)

1. `.item-overline` (optional, not in small items)
2. `.item-label` (**required**, optionally `.fw-bold`) — or a `.item-slot` in its place
3. `.item-extra-label` (optional, not in small items)
4. `.item-description` (optional)
5. An additional trailing `.item-slot` (optional)

```html
<div class="item">
  <div class="item-container">
    <div class="item-content">
      <div class="item-text-container">
        <p class="item-overline">Overline</p>
        <p class="item-label fw-bold">Label</p>
        <p class="item-extra-label">Extra label</p>
        <p class="item-description">Description</p>
      </div>
    </div>
  </div>
</div>
```

## Slots

Optional custom content marked with `.item-slot`, usable in:

- leading container
- text container (replacing or after the label)
- trailing container
- outside `.item-content`, as a direct child of `.item-container`

If a slot in a navigation item is interactive, add `.item-slot-focusable` on the slot or its interactive element (note: avoid interactive slots inside navigation items when possible — prefer a static item with multiple links, see [Wrapping link](#wrapping-link)).

```html
<div class="item">
  <div class="item-container">
    <div class="item-content">
      <div class="item-text-container">
        <p class="item-label">Label</p>
      </div>
    </div>
    <div class="item-slot">
      <!-- custom content, e.g. an alert -->
    </div>
  </div>
</div>
```

## Helper text

Optional text below `.item-container`, using `.item-helper`. If the item is a navigation item, reference it with `[aria-describedby]` on the interactive element.

```html
<div class="item item-navigation">
  <a href="#" class="item-container item-interactive" aria-describedby="item-helper-1">
    <div class="item-content">
      <div class="item-text-container">
        <span class="item-label">Label</span>
      </div>
    </div>
  </a>
  <p class="item-helper" id="item-helper-1">Helper text</p>
</div>
```

## Common variants (card & list)

- **Background**: card items have a background by default, list items don't. Override with `.item-no-bg` / `.item-bg` on `.item` or `.item-list`.
- **Divider**: remove with `.item-no-divider` on `.item` or `.item-list`.
- **Outlined** (`.item-outlined`, card items only — list items are stuck together and shouldn't use this): transforms the divider into an outline. Combine with `.item-no-divider` for another rendering.
- **Rounded corners** (Orange / Orange Compact brands only): project-wide opt-in via `.use-rounded-corner-items` on a top-level container (e.g. `<body>`). Does **not** apply to list items. Reserve for emotional/immersive contexts; keep square corners for standard/business use.
- **Disabled**: add `[aria-disabled="true"]` on `.item` or an ancestor. Nested interactive elements (e.g. slot buttons) must be disabled independently (`disabled` attribute).
- **Skeleton**: wrap in a container with `aria-busy="true"` and `inert`.
- **Sizes**: `.item-small` on `.item` or `.item-list`. Restrictions: no size classes on leading/trailing assets (except badges/tags), no slots, text container limited to label + description (no overline, no extra-label).
- **Alignment**: `.item-top` on `.item` or `.item-list` for top-aligned content instead of the default vertical centering.
- **Max width**: `.component-max-width` on `.item` or `.item-list` to cap width on wide containers.

## Navigation-only variants

- **Back chevron**: add `.item-previous` on `.item-navigation` to prepend a back-chevron icon.
- **External link**: add `.item-external` on `.item-navigation` to append an external-link icon. Add a `.visually-hidden` text (or visible text) indicating the link opens an external resource/new window.
- **Wrapping link**: the `<a>` can wrap the entire `.item-container` instead of just the label, so the whole item is a single link target. Avoid any nested interactive element in that case (invalid HTML / a11y issue).
- **Focusable slot**: `.item-slot-focusable` on the slot or interactive element to make it independently focusable/interactive alongside the main navigation link.

## Accessibility

- For an important page navigation, wrap the navigation items in `<nav aria-label="...">`.
- For a complex navigation item (multiple text elements), link them together with `[aria-labelledby]` on the interactive element, pointing to the ids of every text element that labels the link.
- If there is no interactive element inside, consider [wrapping the entire `.item-container` in an `<a>`](#wrapping-link) instead of adding `.item-interactive` on a sub-element.
- Every text must be in a semantic element (`<p>`, `<h*>`) adapted to its context.
- Never nest interactive elements (e.g. a button inside a link-wrapped item).

> **Not Bootstrap:** Item replaces Bootstrap's `.list-group` / `.list-group-item`. There is no `.list-group-item-action`, no `.list-group-flush`, no `.list-group-numbered`, no contextual `.list-group-item-{color}` classes. Instead, use `.item`/`.item-list` + `.item-navigation`/`.item-interactive` for interactivity, `.item-no-bg`/`.item-bg` for background, `.item-no-divider`/`.item-outlined` for dividers, and the leading/text/trailing container system for layout.
