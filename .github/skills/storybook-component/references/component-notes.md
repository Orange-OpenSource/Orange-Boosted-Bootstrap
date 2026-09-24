# What is already settled, component by component

State of the corpus as of 28/08/2026 — **27 files**, 217 controls, in
`stories/components-playground/`, one story each. Read the entry before
touching a component, and skim the neighbours before adding one that resembles
it. Five of these files are bundled whole in `assets/reference-stories/`: Button,
Divider, Link, Checkbox item and Filter chip — respectively the free-text icon
control, preview-only scaffolding, the `On colored background` checkbox with its
warnings, the readonly DOM with `Error` gating its message, and the group
pattern with shared controls.

## The 27 files

`Alert message`, `Assistant button`, `Badge`, `Badge count`, `Badge icon`,
`Breadcrumb`, `Bullet list`, `Button`, `Checkbox`, `Checkbox item`, `Divider`,
`Filter chip`, `Inline alert`, `Input tag`, `Link`, `Navigation button`,
`Password input`, `Radio button`, `Radio button item`, `Select input`,
`Skeleton`, `Suggestion chip`, `Switch`, `Switch item`, `Tag`, `Text area`,
`Text input`.

Two documentation pages are covered whole. `buttons.mdx` carries three
components — Button, Navigation button, Assistant button — and `alerts.mdx`
carries two, Inline alert and Alert message. A docs page is not a component:
two markups that only overlap at their base class do not merge.

## What the 25–28/08/2026 reviews changed across the whole corpus

Seven rules were applied to all 27 files. They are written up with their
reasoning in `conventions.md` §16 to §21; the short form:

1. **No control on a text the canvas never shows** — every `Hidden label`, every
   button's accessible name, every `href`. Constants, derived from the status or
   the state where those decide them (§16). One exception, Text area's
   `Hidden label` **checkbox**, which switches markup rather than typing a
   string.
2. **Every control carries a `name`**, and the corpus shares one vocabulary:
   `Error`, `Error message`, `On colored background`, `Icon` / `Leading icon` /
   `Icon content`, `Rounded corners`, `color` (§17).
3. **More than one state means one `State` select** (§18). `Skeleton` joined it
   on the 12 components that had both; `Error` joined it on 9; Filter chip and
   Suggestion chip turned two checkboxes into one select. Only Alert message,
   Bullet list and Inline alert keep a `Skeleton` checkbox — they have no other
   state.
4. **The state gates its message** — `Error message` is conditioned on
   `{ arg: 'state', eq: 'Error' }`, in the panel and in the markup (§19). It is
   the only conditional control of the corpus that is exact on both surfaces.
5. **One order of controls in every file**, `args` sorted with `argTypes` (§20).
6. **One shape for every forbidden-combination warning** (§21).
7. **Storybook's `if` has no `gte`** — and no `oneOf` either, which is why both
   are ours, honoured by the preview and approximated by Storybook
   (`conventions.md` §8).

`Button - On colored bg` and `Link - On colored bg` have no file of their own:
they are variants, reached through an **`On colored bg` checkbox** on Button and
Link. The surface is the pairing the component's own documentation example uses
— `bg-surface-brand-primary` with `data-bs-theme="light"` on a child, so the
background does not follow the theme — held in a single `coloredSurface`
constant, swappable in one line. It used to be a select of four surfaces; that
answered "which background utilities exist", which is `utilities/background/`'s
job, not the component's. A new "on colored bg" variant should follow the same
route rather than getting a second file. See `conventions.md` §14.

## Where max width and skeleton are offered

Both controls are gated on the documentation, not on plausibility
(`conventions.md` §7). As of 1.4:

| Control | Offered on |
|---|---|
| `Max width` | Text input, Password input, Checkbox item, Radio button item, Switch item — as the `component-max-width` **class**, never a wrapper |
| `Max width` | (added since) Select input and Text area — as the class on `.select-input` / `.text-area` |
| `Skeleton` | every component whose docs page shows `aria-busy="true" inert` — i.e. all but Badge, Badge count, Badge icon, Breadcrumb, Divider and the three standalone controls (Checkbox, Radio button, Switch). **Password input is the documented exception**: its page shows none, its DOM is the text input's, and it was added on request — flagged in the file as a probable documentation gap |

Where `Skeleton` is earned **and** the component has any other state, it is a
value of the `State` select rather than a checkbox (§18). It stays a checkbox
only on Alert message, Bullet list and Inline alert, which have no other state.

Password input is the odd one: Text input's page has a skeleton example and its
own does not. That reads like a documentation gap rather than a real difference
— it is worth asking the OUDS team rather than silently adding the control back.

## Per component

**Button** — the reference file, already in the repo before the corpus existed.
`btn-small`; loading in both determinate and indeterminate form; layouts held
in tables; free-text `Icon content` control, which is why the sprite reference
is swapped for the typed path when the user supplies one, and which is gated on
the layout actually drawing an icon (`if: { arg: 'layout', neq: 'Text only' }`).

**Link** — `link-compact`, the `External` layout, `visited-links` with
`href="."`, `link-previous`. Two OUDS bugs live here, both worth repeating to
anyone who touches the file:

1. `visited-links` sets `color: var(--bs-link-color, var(--bs-color-action-visited))`,
   but `%link-properties` already defines `--bs-link-color` on `.link`, so the
   fallback is never reached and the class only bites on a bare `<a>`.
2. `_links.scss` writes `&:not(.back)::after, &:not(.link-previous)::after` — an
   *or* of two negations, so a `.link-previous` gets a second chevron on the
   right. The fix is `&:not(.back):not(.link-previous)::after`.

**Divider** — `color` (15 border utilities) and `size` (thin → thicker) go on
the `<hr>` itself, as the documentation does. Four colours are only legible on
the surface the docs pair them with, and that pairing is data — a table indexed
by the colour, not a branch. The vertical form needs a flex parent with a height
to be visible at all — preview-only scaffolding, kept out of the Code panel.
Neither `Max width` nor `Skeleton`: the docs page shows neither.

**Skeleton** — several bars inside `aria-busy="true" inert`. `Height class` and
`Ratio` used to be two selects, and the two controls under them then meant
nothing in most combinations: the ratio is ignored under a height class, the
pixel height under either. Gating that needed two conditions at once, and `if`
carries one — so the two selects became **one `Height` select** holding the
three exclusive ways of giving a skeleton its height: a container class
(`Title`, `Text`), an aspect ratio (`1x1` … `21x9`), or `Free`. Only `Free`
shows `Height (px)`. The markup is unchanged — the class still goes on the
container, the ratio still on the bar. Remaining controls: `Bars`, `Height`,
`Security margins`, `Width (px)`, `Height (px)`.

**Tag** — a functional status maps to the stylesheet's `tag-status-icon`; the
`loading` state is complete. `Rounded corner` was renamed `Rounded corners`, key
included, to match the eight other components carrying the same idea (§17). The `si si-settings` icon came from the docs
site's `docs.css`, which Storybook no longer loads since `preview-head.html`
was removed — if that icon looks unstyled, this is why.

**Inline alert** — the bare `.alert` with an `.alert-label` beside the icon; it
shares `alerts.mdx` with Alert message and is a different component. The product
icon appears on Neutral and Accent, with an `Icon content` control. Its hidden
text is derived from the status, and always was — the pattern §16 generalised to
the rest of the corpus.

**Filter chip** — two chips, frozen: the count control was dropped because a
third chip shows no markup the second does not. `Disabled` and `Skeleton` are
one `State` select — `Enabled | Disabled | Skeleton` — since a group is
unavailable, loading, or neither (§18). The form of the control
(checkbox, radio sharing the group `name`, or button with `aria-pressed`) and
`disabled` are **one control each for the whole group** — `.chip-filter` styles
the three forms identically and they do not behave the same, which is the point
of exposing the choice, but no real page mixes them inside one
`chips-container`. Only the label stays per chip: **there is no `Selected`
control**, because the chips on the canvas are real inputs and clicking one is
both the honest gesture and the only way to see the three forms behave
differently. The snippet shows the initial markup, first chip checked, as the
documentation writes it.

**Suggestion chip** — **two chips, frozen**, and the group's state is one
`State` select, `Enabled | Disabled | Skeleton`, exactly as on Filter chip. It was a count from 1 to 3 with per-chip controls gated on
`if: { arg: 'count', gte: N }`, which does not work (§8); two chips already show
the container, the gap and the wrapping. Labels take HTML.

**Checkbox, Radio button, Switch (standalone)** — `Read only` was removed: it
has no HTML effect on these bare controls. No `Skeleton` either: the docs show
`aria-busy` on the *item*, never on the standalone control. `Indeterminate` was added to the
checkbox, with the script the documentation writes (a DOM property, no
attribute carries it — which is why the story ships a `<script>`).

These three **keep** their `Selected` / `Selection status` control, while the
control items lost theirs. That is not an inconsistency: a standalone control
has no group and no `name` binding it to a sibling, so the initial `checked`
attribute is the only thing there is to look at. On an item, clicking is the
demonstration.

**Checkbox item / Radio button item / Switch item** — description, icon,
`required`, error message, `component-max-width`, and the documented readonly
DOM: a `<span role="…">` in place of the input, a `<p>` in place of the
`<label>`. The error message sits *inside* the container after the item;
`_control-item.scss:15` hides it until the container `:has()` an invalid input,
so a real page can write it once and let the state reveal it — **the stories do
not**: `Error` gates `Error message` in the panel and in the markup, and
`aria-describedby` follows (§19).

**No `Helper text` on a control item.** Checkbox item and Switch item carried
one for a while, rendered `<p class="helper-text">` after the item — a
deliberate extension borrowed from the form components, since the documentation
only ever gives a control item a `control-item-description` inside its text
container. It was removed: the design system does not back it. If OUDS
documents a control-item helper text later, follow that.

**Radio button item** — the group lives in a `<fieldset>`, **two options,
frozen**, each with a label, an `extra label` and a description. The count went
the way of Suggestion chip's (§8): an exclusive choice does not exist below two,
a third option adds an identical `<div>`. **No `Selected` control** either — the
canvas holds two real radios sharing one `name`, and clicking is the exclusive
choice itself. The first option is checked in the initial markup, as the
documentation writes it. Switch item lost its `Selected` for the same reason.

**Text area** — the one component of the corpus with a `Hidden label` control,
a **checkbox**: `visually-hidden` on the `<label>` plus the same words in a
`title` on the field, both forms written by its own documentation. It is not the
hidden-text control §16 removed — nothing invisible is typed here (§16, the
exception paragraph).

**Text input / Password input / Select input / Text area** — the form family,
built on the same container / field / messages shape. `Input status` removed;
helper text, helper link, error message, prefix and suffix, `required`,
`rounded`, max-width, loading states. On the password field, the toggle
button's icon **and its accessible name** follow the field's state — "Show
password" / "Hide password", derived, not typed (§16).

Select input carries an OUDS gap worth repeating: `_select-input.scss:256` is
missing the `:has(~ .error-text)` guard that `_text-input.scss:418` has, so an
error select input **without** an error message hides its helper text and puts
nothing in its place. Reachable in the playground — set `Error`, empty
`Error message` — and measured: computed `display` of `.helper-text` is `none`
on `.select-input`, `block` on `.text-input`, same state.

There is **no `Value` control**: the field is there to be typed into. What is
typed survives a re-render through a store both the canvas and `render` can
reach — see `conventions.md` §15, which is also where the two-window bug that
made it silently useless is written down. Do not put the control back without
reading that section.

**Breadcrumb** — a level is an `<li>`, the current page included, and three
tables indexed by the kind of level replace what used to be a loop plus a
special case. `Drilldown` is a number **from 1 to 4** — Figma's ceiling, and
what the stylesheet is built around. Per-level controls are gated on it: level 1
on `neq: 0`, exact everywhere; levels 2 to 4 on `gte`, exact in the standalone
preview and approximate in Storybook (§8). The `<nav>`'s `aria-label` switches
from `basic breadcrumb` at one level to `full breadcrumb` beyond, the wording of
the two documentation examples. Default args: 4, so no per-level control is
inert on load.

The stylesheet only shows every level from 1320px, which the canvas works
around with preview-only scaffolding — the one file `check_stories.js` warns
about on purpose.

**Bullet list** — nesting levels with a marker per level; OUDS draws three
marker levels and deeper lists reuse the third. The **shape of the tree is
frozen** — depth 3, two items per list, named constants with the reason above
them: depth and width change how much outline there is, not what the markup of a
bullet list looks like, and 3 × 2 is the smallest tree that shows all three
marker levels. What is left is the per-level type, marker colour and marker
icon; the color and icon disappear when that level is `Bare`, where no marker
is drawn.

**Badge icon** — the four functional statuses draw their own
`<span class="badge-status-icon">` from the stylesheet and ignore anything
typed; `Neutral` and `Accent` need an element. `Icon content` is therefore gated
on `if: { arg: 'status', oneOf: ['Neutral', 'Accent'] }` — exact in the preview,
shown everywhere by Storybook (§8).

**Alert message** — `.alert-message` plus the whole `.alert-container` /
`.alert-text-container` / `.alert-action-container` / `.alert-close-container`
scaffolding; Inline alert is the bare `.alert` and has its own file. Two
families of status decide everything: the four **functional** ones (Negative,
Positive, Info, Warning) declare `--bs-alert-icon`, so `.alert-icon` must stay
and must stay **empty** — anything inside breaks
`:not(:has(svg, img, .icon))` and silently removes the icon; the two
**non-functional** ones (Neutral, Accent) declare none, so an empty container
gives an invalid `mask-image` and a solid 20 px square.

Consequences in the file: the icon is **one select of three values** —
`Design system icon` / `Custom icon` / `None` — not a checkbox plus a field.
Both had to disappear on a functional status, and `Icon content` also had to
disappear when no container is drawn: two conditions on one control, which `if`
cannot carry, so they were merged (§8). `Icon` is gated on
`oneOf: ['Neutral', 'Accent']` — a functional status keeps its container
whatever is chosen, since the colour would otherwise be alone in carrying the
meaning — and `Icon content` on `eq: 'Custom icon'`, exact on both surfaces.
The combination the design system forbids stays reachable: choose `Custom icon`
on `Neutral`, then move the status. It is warned about twice, the §21 way — a
comment in the copied markup, a banner in the canvas.

`.alert-close-container` is **not** optional — it sets `container-type: size`
and that container query is what rounds the button's bottom-right corner on a
rounded single-line alert (measured `0 12px 12px 0` with it, `0 12px 0 0`
without). No `Live region` control: `role="alert"` versus a `<div role="status">`
wrapper is a page-level decision, not an axis of the component. The bullets are
a **count with arrows**, 0 to 3, plus three text fields — see §8 and §9 for why
that survived an `object` control, and why the default args carry three bullets.

**Assistant button** — the third component of `buttons.mdx`. No variants at all
(`_button-assistant.scss` is 56 lines and has none), no icon control (the AI
icon is a `::before` with a mask, so canvas and Code panel are identical), no
`btn-on-colored-bg`. What it does have is `On colored background`, a **checkbox**
on `bg-tertiary` — the surface of the documentation's own example — which exists
because the gradient border hides its middle behind an opaque layer
(`--bs-btn-bg`, defaulting to white): on a coloured surface that white shows.
`Opaque background` writes `--bs-btn-bg` to match and is gated on the checkbox.
It was a four-surface select, and became a checkbox for the §14 reason.

`btn-small` is legitimate here — `_button-assistant.scss` re-declares its
paddings inside `&.btn-small`, which is exactly the fix Navigation button's
chevrons are missing.

**Navigation button** — `.btn-previous` / `.btn-next`, chevron drawn as a
pseudo-element. **`size` is frozen**: `.btn-small` is written `.btn { &.btn-small
{ … } }`, specificity (0,2,0) against (0,1,0) for `.btn-previous`, so it
overrides their paddings, and the compensation for icon buttons sits behind
`&:has(svg, img, .icon)`, which a pseudo-element chevron never triggers.
Measured 26/14 px at normal size against 23/23 px small — padded as if there
were no chevron. The documentation gives a *Sizes* section to Button and to
Assistant button and none to Navigation button, which agrees. **No `<nav>`
controls**: the landmark belongs to the previous/next sequence, and the story
renders one button; a named `<nav>` around a single button is not markup anyone
should copy.

## Classes that exist only on `main`

`btn-small`, `link-compact`, `link-previous` and `link-external` are in
`scss/` on `main` and in no built stylesheet — neither the published 1.4.0 nor
the repo's committed `dist/`. A control that uses one should say so in its
description, and the preview should be built with a `main` build of the CSS to
show it:

```bash
python3 scripts/build_preview.py preview.html <file> --css path/to/main/ouds-web.css
```

The stylesheet bundled with this skill is a `main` build, so the default
already shows them; `--css published` is the way to check what a consumer of
1.4.0 actually gets.

## Storybook environment

Since PR #3764 (17/08/2026):

- `.storybook/main.js` is now `main.mjs`, same content. The glob
  `../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)` still picks up every
  `.stories.js`, subfolders included.
- `preview-head.html` was deleted — no more CDN, and no more `docs.css` from
  the documentation site.
- `storybook.scss` imports `../packages/orange/scss/ouds-web` and `preview.js`
  imports `../js/index.esm.js`: CSS and JS come from the repo sources, compiled
  by Vite, which is what makes running Storybook on a dev branch meaningful.
- `preview.js` sets `tags: ['autodocs']` globally — do not repeat it per file.
- The theme is `@ouds/storybook-theme`, applied in `manager.js`.

To work on stories, run `npx storybook dev -p 6006`. Avoid
`npm run storybook`, which chains `docs-build` and the three Astro sites —
tens of minutes. Same on Netlify: `npx storybook build -o dist`, not
`npm run storybook-build`.

The sprite's real URL on the deployment is
`/orange/docs/1.4/assets/img/ouds-web-sprite.svg`, the form
`getVersionedDocsPath()` produces from `packages/orange/config.yml`. **The
`1.4` is hardcoded** everywhere it appears and will need bumping.

## Traps worth knowing

- `stories/auto/` is wiped by `fs.rmSync` on every `storybook-generate`. Never
  put a playground there.
- `create-stories-from-doc.js` needs `puppeteer`, which is not in
  `devDependencies` and downloads a Chromium on install — blocked behind a
  corporate proxy. Its `mdxContent` variable is built and never written: dead
  code.
- An SVG `<use>` does not cross origins. No absolute URL to another domain will
  ever work.
- `git` behind the Orange proxy fails with `Could not resolve host` while the
  browser reaches GitHub: the proxy does the DNS resolution. Configure
  `http.proxy` for git *and* npm; on Windows, `http.sslBackend schannel` if
  certificates complain. VS Code's integrated terminal is the same shell and
  bypasses nothing.
- Comparing the variants workbook's `Markup_OUDS` character by character gives
  ~1.5% agreement and means nothing — it was written by hand with different
  example labels and ids. Compare CSS classes instead.
