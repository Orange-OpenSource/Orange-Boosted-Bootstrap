---
name: ouds-component
description: Full lifecycle of one OUDS (Orange Unified Design System) component in a single pass — standalone HTML preview, CSF3 `Playground/*` stories file, Code Connect handoff (`mapping.yml` entry, `.figma.ts`, template file, publish commands), and the Figma plugin's `src/components/` file, all compiled from one research pass so the four stay 1:1. Use this whenever the request touches OUDS or Orange Boosted Bootstrap components, Storybook playgrounds, `components-playground/`, the OUDS Figma plugin, Code Connect, `mapping.yml`, `figma-inventory.json` or `.figma.ts` files — including when the user only names a component ("do the Toggle", "add loading to the Tag", "the chip playground is wrong", "regenerate the plugin").
---

# OUDS — one component, four artifacts

A designer selects a component in Figma and must read the exact HTML the OUDS
team publishes for **that** variant. A developer opens a playground and must
answer "what do I write to get *this*?". Same markup, four surfaces: the
plugin's panel, the Dev Mode inspector, the Storybook Code panel, the HTML
preview.

The four are compiled from one reading of the sources. That is the point of
having them in one skill: the docs page is fetched once, the SCSS is read once,
`mapping.yml` is read once, and every artifact is derived from that same
understanding. Deriving them separately is how they drift.

That framing settles most judgement calls. Markup that renders correctly but
cannot be pasted into a real page is a failure. A control that changes nothing,
or a snippet that silently falls back to a neighbouring variant, is worse than
a missing one — it teaches something false. When a combination is not covered,
say so rather than guess.

## What gets delivered

For every component, all four, unless the user scopes it down:

1. **`<component>-preview.html`** — the standalone preview: the component, its
   controls, light/dark, no network needed. This is the artifact the user opens
   first, and the visual source of truth for the DOM structure.
2. **`<Component>Playground.stories.js`** — CSF3, one story, Controls for every
   axis that changes the markup, Code panel printing the HTML that axis
   produced.
3. **`code-connect-<component>.md`** — the handoff: `mapping.yml` entry, the
   generated `.figma.ts`, the template file (post-17/08/2026 form), the
   `figma.config.json`, the exact publish commands. One file, handed to whoever
   owns the repo.
4. **`ouds-figma-plugin.zip`** — the plugin with the component's
   `src/components/<id>.ts` in it and `dist/` already built, so it imports into
   the Figma desktop app with no Node installed. Note any change needed in
   `src/main.ts` or `src/ui.html` in the message, not silently.

Deliver with `SendUserFile`. Then say in three or four lines what you decided:
which variants you covered, which you froze or left uncovered and why, anything
in the sources that looked wrong. If the kit is unavailable, deliver 1 and 2,
and say plainly that 3 and 4 are blocked on `mapping.yml` — do not invent a
mapping entry from a docs page alone.

## Sources of truth, in order

1. **`code-connect/mapping.yml` in the user's kit.** The single upstream. All
   four artifacts compile from it. Edit the mapping, not the outputs — unless
   you are deliberately recording a divergence, in which case leave a header
   comment saying so. `figma.config.json`, `scripts/generate.mjs` and
   `scripts/migrate.mjs` live beside it.
2. **The documentation** —
   `https://web.unified-design-system.orange.com/orange/docs/1.4/components/<component>/`.
   The examples there are the reference markup. Fetch the page before writing;
   do not reconstruct classes from memory.
   `code-connect/reference/markup.json` holds 314 examples already extracted
   from those pages — check it first, it saves a fetch. While you have the
   page, search it for `component-max-width` and for `aria-busy`: those two
   strings decide whether the playground gets a `Max width` and a `Skeleton`
   control at all (`references/conventions.md` §7).
3. **The stylesheet** — `scss/_<component>.scss` in
   [Orange-OpenSource/Orange-Boosted-Bootstrap](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap),
   branch `ouds/main`. It settles what a class does and whether it exists in a
   published build. Some classes live in `scss/` and in no build (`btn-small`,
   `link-compact`, `link-previous`, `link-external`) — that belongs in a control
   `description` and in `nonMappe:`/`notes:`, never in an `example:`.
4. **`code-connect/reference/figma-inventory.json`** — a *dated snapshot* of the
   Figma library: node ids, property names, types, value lists. It gives the
   property names and value lists the playground controls mirror, and it is
   what the verification enumerates. It is the one link that does not
   self-check — see "What goes stale".
5. **The existing corpus** — `assets/reference-stories/` and
   `assets/plugin/src/components/` here, or the repo's own folders. When in
   doubt about form, copy the neighbours.

When the sources disagree, prefer the stylesheet for behaviour and the
documentation for markup, record it in `notes:` and in a comment, and surface it
to the user. Two real OUDS bugs were found exactly this way.

## Workflow

**Research once.**

1. **Locate the kit** — the folder containing `code-connect/mapping.yml`. Ask
   for it if it is not in the conversation. Without it, artifacts 3 and 4 have
   nothing to compile from.
2. **Read the component's entry** in `mapping.yml` — or, for a new component,
   read two neighbouring entries first. Read the inventory's property list for
   it. For an existing component, read its current `src/components/<id>.ts` and
   its current `.stories.js` too: hand corrections live there and the generator
   will not overwrite them unless forced.
3. **Read the docs page and the SCSS.** Note every example variant. This is the
   only fetch pass — write down what you find, because the next four steps all
   consume it.
4. **List the axes once**: what varies (status, size, layout, state…), what is
   text, what is boolean, what is a Figma property with no HTML translation.
   This single list becomes the mapping's connections, the plugin's `if` chain,
   and the playground's `argTypes`. Keeping one list is what keeps them 1:1.
   Sort the texts into two piles while you are there — visible on the canvas,
   and never visible. The second pile ships in the markup of all four artifacts
   and becomes a control in none of them (`conventions.md` §16).

**Then produce, in this order** — upstream first, so the outputs cannot
contradict it.

5. **Write or fix the `mapping.yml` entry.** `references/code-connect.md` has
   the anatomy, the primitives, and the rules that are not obvious. The
   connection ordering rule in particular is not cosmetic: it silently produced
   78 wrong snippets once.
6. **Compile the Figma chain and check it**:
   `node scripts/build-plugin.mjs <kit-path> --out ouds-figma-plugin.zip`
   generates the missing component files, enumerates every variant, renders
   each one three ways (plugin, `.figma.ts`, template file), compares, then
   builds and zips. It stops at the first divergence. Then
   `node scripts/code-connect-file.mjs <kit-path> <component-id> -o code-connect-<component>.md`.
7. **Write the story** following `references/conventions.md` — read it before
  writing, it holds the rules that make a story fit the corpus, each with the
  reason it exists. Its controls mirror the property names and value lists you
  already read in step 2; its markup mirrors the `example:` blocks you just
  wrote. Split independent axes into separate controls, use boolean labels
  that describe the checked state, and keep sibling stories' control meaning
  aligned.
8. **Check the story**: `node scripts/check_stories.js <file>`. When updating
  a shared family, run it on every sibling story as well. Fix dead controls,
  polarity mismatches, stale table keys and render/transform divergence it
  reports.
9. **Preview it**: `python3 scripts/build_preview.py <component>-preview.html <file>`,
   open it, confirm the component renders and every control moves something.
10. **Cross-check the two chains before delivering.** Same variant, same HTML in
    the plugin panel and in the Code panel — modulo the two documented
    divergences below (icons, canvas scaffolding). A markup fix that lands in
    the story and not in `mapping.yml` is a divergence that will resurface.

When updating rather than creating, keep the existing structure: the corpus's
value is that every file reads the same way. Run `check_stories.js` on the whole
folder afterwards, not just the file you touched — titles must stay unique and a
shared helper may have moved.

## The rules that carry the design

Read the reference files before writing; the reasoning is what transfers to the
cases these rules do not name.

**Shared by all four artifacts**

- **Tables, not conditionals.** A property becomes an object keyed by its value,
  with `null` (mapping) / `undefined` (generated) / `''` (plugin, stories)
  meaning "this value adds no class". `.filter(Boolean).join(' ')` drops the
  empties. Renaming a class is then one table line.
- **Only what changes the markup.** A Figma property with no HTML translation
  becomes a commented constant at the top of the story and `nonMappe:` in the
  mapping — never a live control, never a branch. Verify it, don't assume it:
  `check_stories.js` replays every control.
- **States that are CSS pseudo-classes are not variants.** `Hover`, `Focus`,
  `Pressed` produce no distinct markup — they map to `''`, never to a branch,
  and they are not a playground control.
- **Property names keep their emojis.** `✏️ Label` (TEXT) and `⚠️ Label`
  (BOOLEAN) coexist on Text input and Password input. Normalising the emoji away
  collapses them and the boolean wins — 1 344 inputs rendered
  `<label>true</label>` before this was caught. Emoji-stripped lookup is a
  *fallback*, valid only for names unique without them.
- **Icons are frozen, then substituted.** Code Connect has no primitive that
  reads an `INSTANCE_SWAP` as a string: the mapping freezes a placeholder
  (`iconPlaceholder: heart-empty`) and declares `iconProp: "↪ Icon"`; the plugin
  reads the live instance name and substitutes into the sprite reference. In the
  playground the same tension appears differently — inline the SVG on the canvas
  (a `<use>` does not cross origins) and print the sprite reference in the Code
  panel, via two separate functions.
- **Divergences are written down where they will be read.** `nonMappe:` and
  `notes:` in the mapping, a header comment in the generated file, in the
  plugin's component file, and in the story. The plugin's panel shows only
  markup, so an undocumented divergence is invisible to its user.
- **Accessibility is part of the markup — and never a control.** Semantic
  elements, the ARIA the docs page shows, `visually-hidden` labels where the
  component has no visible text: it ships in all four artifacts or in none. But
  a text the canvas never shows is not an axis of the component, so in the
  playground it is a constant at the top of the file, derived from the status or
  the state when those decide it (`conventions.md` §16). The mapping and the
  plugin write the same text; nobody offers it as a field.

**Code Connect and the plugin**

- **Most-constrained connection first.** Both the template files and the
  plugin's `if` chain take the **first** branch that matches. A connection
  restricted on `{ Layout, State }` placed after one restricted on `{ Layout }`
  alone is dead code, with no warning from any tool. Button's `State: Loading`
  branches were unreachable across 78 variants until the entries were reordered.
- **Cover, or return nothing.** An uncovered combination renders `null` in the
  plugin and no snippet in Figma. Falling back to a neighbour hides the gap, and
  the gap is information the OUDS team needs.

**Playground**

- `title: 'Playground/{Component}'` — never `Components/`, which
  `create-stories-from-doc.js` already uses; duplicate titles break Storybook.
  One named export `Playground{Component}` holding exactly
  `{ parameters, render, args }`; `meta` holds exactly `{ title, argTypes }`. No
  `import` — every file stands alone. `render` and `transform` both delegate to
  the same `render{Component}` function, so canvas and Code panel cannot drift.
  Never write into `stories/auto/` — that folder is deleted on every run.
- **Every control carries a `name`**, and the same idea keeps the same name
  across the corpus: `Error`, `Error message`, `On colored background`,
  `Icon` / `Leading icon` / `Icon content`, `Rounded corners`, `color`. Without
  a `name` Storybook prints the arg key. Rename the key with the label
  (`conventions.md` §17) — and mirror the Figma property's *meaning*, not its
  casing.
- **Checkboxes for booleans**, whether Figma calls them variant properties
  (`'True'`/`'False'`) or instance booleans. Keep the Figma keys in the table and
  convert on read: `outlinedClasses[outlined ? 'True' : 'False']`.
- **Every select falls back on its first option.** A control left on "Choose
  option" hands you `undefined` and an empty canvas helps nobody.
- **Wrappers are earned, not offered.** `Max width` only where the docs show
  `.component-max-width`, `Skeleton` only where they show `aria-busy`.
- **More than one state means one `State` select** — `Skeleton` (a wrapper) and
  `Error` (an attribute) are values of it, not checkboxes beside it, because
  neither combines with the others:
  `stateOptions = [...states, 'Error', 'Skeleton']`, markup unchanged
  (`conventions.md` §18). A component with no other state keeps its checkbox.
- **A state hides the control it governs.** `Error message` is gated on
  `{ arg: 'state', eq: 'Error' }`, in the panel and in the markup, on every
  component that has the pair (`conventions.md` §19).
- **One order of controls in every file** — what it is, what it says, its icon,
  its state, how it is presented — `args` sorted with `argTypes`
  (`conventions.md` §20). And **one shape for every forbidden-combination
  warning** (`conventions.md` §21).
- **Storybook's `if` has no `gte`, and no `oneOf`** — only `eq`, `neq`,
  `truthy`, `exists`, and an unknown operator silently becomes a truthiness
  test, which is how four components ended up showing controls for items they
  were not rendering. `build_preview.py` honours both, so preview and Storybook
  disagree; prefer `eq` / `neq` — folding a state into the select is often what
  makes that possible — or freeze the count, and keep the inexact operators only
  where adding an item is the point (`conventions.md` §8).
- **Descriptions carry the reasoning** — a subtle effect, a class absent from the
  published build, a documented quirk. This is where a reader learns *why*.
- **Sentence case for every value.** `Loading indeterminate`, `Text + icon`,
  `Body large`. A panel mixing `default` with `Neutral` reads as two components
  glued together.
- **A one-class variant is a checkbox.** `On colored bg` is `btn-on-colored-bg`
  plus a surface, not a catalogue of surfaces. Keep the warnings on the
  combinations OUDS forbids: a comment in the Code panel, a banner in the canvas.
- **Groups: gate, freeze, and share.** Per-item controls gated on the count; the
  count frozen when a bigger one shows no new markup, but kept with its arrows
  when adding an item is the gesture the playground exists for; a property a
  real page would not vary inside one group is one control for the group. A
  selection the reader can make by clicking the real input is not a control at
  all (`conventions.md` §9).
- Style, so the corpus reads as one file: no semicolons, single quotes, option
  lists at the top, `argTypes` one property per line with a trailing comma,
  key order `parameters, render, args`.

## Bundled scripts

Plain Node and Python 3, nothing to install.

```bash
# Figma chain: scaffold, generate, verify on three paths, build, zip.
node scripts/build-plugin.mjs <kit-path> --out ouds-figma-plugin.zip
node scripts/code-connect-file.mjs <kit-path> <component-id> -o code-connect-tag.md

# Playground chain: shape/style/equivalence checks, then the preview.
node scripts/check_stories.js path/to/XPlayground.stories.js   # or a folder
python3 scripts/build_preview.py preview.html path/to/XPlayground.stories.js
```

`build-plugin.mjs` copies `assets/plugin/` (the current 24-component plugin,
sources only) into a work directory unless `--plugin <dir>` points at an
existing one. It never overwrites a component file already there — hand
corrections survive; `--force-components` regenerates and loses them.
`--skip-verify` only when the kit is unavailable. All three paths agreeing is a
non-regression check, not proof of correctness — they share `mapping.yml`. What
it catches is a generator change, a reordering, a renamed property, an inventory
that moved underneath. Once a component file is corrected by hand the
verification reports a divergence: **that is not an error**, it is the measure
of the gap with Code Connect.

`check_stories.js` reports on shape, style, naming, render/transform
equivalence, whether each control changes anything, emptied selects, dead code.
The naming family fails a control with no `name`, a name not starting with a
capital, or a name reusing one of the settled renames (`Invalid`, `Error text`,
`On colored bg`, `Rounded corner`, `colour`, `Show icon`, `Hidden label`), and
warns on every `if: { gte }` — the operator Storybook ignores. Non-zero on
problems; canvas/Code-panel divergence is a warning with a diff, because some
components diverge on purpose — in the current corpus only Breadcrumb, whose
canvas adds a wrapper. Read the diff, confirm it is scaffolding you added, and
comment it in the file.

`build_preview.py` writes one self-contained HTML file: controls built from
`argTypes` (including `if` gating), an iframe canvas with the OUDS stylesheet
and sprite inlined, a light/dark switch, the Code panel. `--css published` uses
jsDelivr, `--css path/to.css` your own build — worth doing when checking a class
that only exists on `main`.

## What goes stale

`figma-inventory.json` is a dated snapshot. The variant enumeration, the
name-based fallbacks and the playground's value lists all depend on it, and
nothing detects that it is old. Refresh it per wave rather than extending it — a
badge can regress (`Alert message` went ✅ LIVE → ⚙️ DEV between 16/07 and
03/08), a property can gain a value, a component can be recreated with a new
node id. If the user's inventory predates the current wave, say so before
claiming anything is verified.

## Where to read next

- `references/code-connect.md` — `mapping.yml` entry anatomy, the primitives,
  connection ordering, `INSTANCE_SWAP`, generated vs. template forms, the
  17/08/2026 parser migration, publishing, token scopes. Before touching a
  mapping entry.
- `references/plugin.md` — the plugin's architecture and contract, the
  component-file style with a full worked example, resolution, rendering,
  verification, installing and publishing inside the organisation. Before
  touching `src/`.
- `references/conventions.md` — the 22 playground conventions, each with its
  reason. Before writing or reviewing a story. §8 and §16 to §22 came out of the
  25–28/08/2026 reviews and are the ones a new file most often gets wrong.
- `references/component-notes.md` — what is already settled per component in the
  current corpus: wrappers, group patterns, readonly DOM, classes that exist
  only on `main`, known OUDS anomalies. Before touching an existing component,
  and skim it before adding one that resembles an existing one.
- `assets/plugin/` — the working plugin; its `README.md` ships to the user, keep
  it true. `assets/reference-stories/` — five stories worth copying the form of,
  kept in step with the 26/08/2026 corpus.

Artifacts inherit the language of the corpus they join: the plugin's files and
the mapping are commented in French, the stories in English. Match the
neighbours.
