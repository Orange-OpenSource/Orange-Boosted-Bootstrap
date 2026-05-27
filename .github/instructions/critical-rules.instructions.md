---
applyTo: "**"
---

# Critical Rules (Non-Negotiable)

These 7 rules apply to every file in OUDS Web. They are the minimum safety net — always enforced regardless of which skills are loaded.

1. **Tokens over hardcoding** — Never use hardcoded colors (`#ff7900`), spacing (`16px`), or dimensions. Use `$ouds-*` tokens or `var(--#{$prefix}color-*)`.

2. **Mixins for border-radius and transition** — Direct properties are Stylelint violations. Use `@include border-radius()` and `@include transition()`.

3. **Auto-generated token files are read-only** — Never edit `_raw.scss`, `_semantic.scss`, `_component.scss`, or `_*-custom-props.scss`. Only `_composite.scss` is hand-editable.

4. **Never commit dist/** — Build artifacts are generated in CI.

5. **JS in js/src/ only** — Never put JavaScript in `packages/<brand>/`. JS is shared across all brands.

6. **Colors via CSS custom properties** — Use `var(--#{$prefix}color-*)` for all colors. This enables dark mode switching at runtime.

7. **Accessibility is mandatory** — Every interactive element needs: `@include focus-visible()`, correct ARIA attributes, `.visually-hidden` (never `display: none`) for SR content, 44×44px touch targets.
