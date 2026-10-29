# The OUDS Code Figma plugin

Architecture, the component-file style, and the traps that cost time.

## Contents

1. What it does
2. Layout, and what moves when
3. The component contract
4. A component file, in full
5. Resolution — Figma node to component identity
6. Rendering — properties to markup
7. Verification on three paths
8. Building, installing, publishing
9. The maintenance table

---

## 1. What it does

Select a component in Figma; the panel shows the official OUDS Web markup for
that exact variant, and a Copy button. Nothing else — no notes, no property
dump, no documentation link. That was a deliberate reduction: the panel is read
in a hurry, and every extra line competed with the markup.

The consequence is that anything the plugin *cannot* say has to live somewhere
else. A `Button` with `Size = Small` renders the `Size = Default` markup,
because OUDS has no `.btn-sm`; the panel does not mention it, so the divergence
is a header comment in `src/components/button.ts` and a `nonMappe:` entry in
`mapping.yml`.

It runs in both editors — a floating panel in Design mode, a codegen provider
in Dev Mode — from one `main.ts`. `manifest.json` declares
`editorType: ["figma", "dev"]`, `capabilities: ["codegen"]`, and
`documentAccess: "dynamic-page"`, which is what makes the async node API
mandatory (`getMainComponentAsync`, `getNodeByIdAsync`).

**No `networkAccess`.** The markup is compiled into the bundle. Nothing is
fetched, nothing can be patched remotely: every markup fix means rebuild and
republish. That is the trade accepted in exchange for component code that a
human can read and correct.

---

## 2. Layout, and what moves when

```
manifest.json          dual mode + codegen, no networkAccess
package.json           build, watch, components, verify, typecheck, release
tsconfig.json
README.md              install, structure, maintain, verify, publish
src/
  main.ts              selection, panel, codegen
  ui.html              the panel
  core/                rarely touched
    component.ts       the OudsComponent contract
    resolve.ts         Figma node → identity + properties + icon name
    render.ts          properties → arguments → render(), icon substitution
  components/          touched every OUDS wave
    index.ts           the registry
    button.ts … tag.ts one file per component
tools/
  build.mjs            esbuild → dist/code.js, dist/ui.html, dist/render.mjs
  generate-components.mjs  mapping.yml → src/components/*.ts
  variants.mjs         figma-inventory.json → every variant
  verify.mjs           the three-path comparison
  release.mjs          the whole chain, one command
```

The split is the maintenance split: **`core/` almost never changes,
`components/` changes with every OUDS version.** Keep it that way. A special
case pushed into `core/` is a special case nobody will find again.

---

## 3. The component contract

```ts
export type Args = Record<string, any>;

export interface OudsComponent {
  id: string;
  name: string;                 // clean, no badge, no version
  figmaName?: string;           // raw, for name-based lookup
  nodeIds: string[];
  keys?: string[];              // component keys, when known
  codeName?: string;
  codeVersion?: string;
  icon?: { prop: string; placeholder: string };
  props: Record<string, { figma: string; boolean?: true }>;
  render: (args: Args) => string | null;
}
```

`props` is the bridge: a JavaScript argument name on the left, the exact Figma
property name — emojis included — on the right. `boolean: true` converts
`'True'` / `'False'` to a real boolean before `render` sees it.

`render` returns `null` for a combination the mapping does not cover. `null` is
a first-class answer, not a failure: the panel then says nothing rather than
showing a neighbouring variant's markup.

---

## 4. A component file, in full

The style is the repo's CSF3 stories: lookup tables at the top, one `if` per
covered variant, a template literal returned.

```ts
// OUDS Code — Tag
// Compilé depuis code-connect/mapping.yml (@ouds/web-common 1.4.0).
// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.
// Doc : https://web.unified-design-system.orange.com/orange/docs/components/tags/
//
// ÉCART OUVERT — le défaut diverge : Figma part de Muted, le code part de
// emphasized (.tag seul). 432 variantes attendent cet arbitrage.

import type { Args, OudsComponent } from '../core/component'

const statusClasses: Record<string, string> = {
  'Neutral': '', 'Accent': 'tag-accent', 'Positive': 'tag-positive',
  'Info': 'tag-info', 'Warning': 'tag-warning', 'Negative': 'tag-negative'
}
const appearanceClasses: Record<string, string> = { 'Emphasized': '', 'Muted': 'tag-muted' }
const sizeClasses: Record<string, string> = { 'Default': '', 'Small': 'tag-small' }
const roundedCornerClasses: Record<string, string> = { 'True': '', 'False': 'rounded-none' }
const stateClasses: Record<string, string> = {
  'Enabled': '', 'Loading': '', 'Disabled': 'disabled', 'Skeleton': ''
}

export const renderTag = ({ label, status, appearance, size, roundedCorner, state, layout }: Args): string | null => {
  const classes = [
    'tag',
    statusClasses[status],
    appearanceClasses[appearance],
    sizeClasses[size],
    roundedCornerClasses[(roundedCorner ? 'True' : 'False')],
    stateClasses[state]
  ].filter(Boolean).join(' ')

  if (layout === 'Text only') {
    return `<p class="${classes}">${label}</p>`
  }
  if (layout === 'Text + Bullet') {
    return `<p class="${classes}">
  <span class="tag-bullet"></span>
  ${label}
</p>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return null
}

export const component: OudsComponent = {
  id: 'tag',
  name: 'Tag',
  figmaName: 'Tag | ✅ LIVE v1.5 |',
  nodeIds: ['56994:29993'],
  codeName: 'tag',
  codeVersion: '1.5.0',
  props: {
    label: { figma: '✏️ Label' },
    status: { figma: 'Status' },
    appearance: { figma: 'Appearance' },
    size: { figma: 'Size' },
    roundedCorner: { figma: 'Rounded corner', boolean: true },
    state: { figma: 'State' },
    layout: { figma: 'Layout' },
  },
  render: renderTag,
}
```

Then register it in `src/components/index.ts`. A component absent from the
registry does not exist for the plugin — that is also how a component that
regresses from ✅ LIVE to ⚙️ DEV is withdrawn without deleting its file.

Rules that make a file fit the corpus:

- **Tables typed `Record<string, string>`**, otherwise TypeScript rejects the
  indexing (`TS7053`). Empty string means "adds no class".
- **`if` branches from most constrained to least constrained.** First match
  wins, exactly as in the template files. A specific branch placed after a
  general one is dead code and nothing will tell you.
- **`return null` with the comment** for uncovered combinations.
- **Header comment carries the divergences.** This is where the panel's silence
  is compensated.
- **Reserved words**: a component id like `switch` cannot be a binding name.
  The generator emits `switchComponent`; keep that convention if writing by
  hand.

Generate the first draft rather than typing it:

```bash
node tools/generate-components.mjs <kit>/code-connect/mapping.yml \
  --inventory <kit>/code-connect/reference/figma-inventory.json \
  --out src/components
```

It writes only files that are **absent**. `--force` regenerates everything and
loses hand corrections; `--strict` additionally fails on branches made
unreachable by an earlier, less constrained one.

---

## 5. Resolution — Figma node to component identity

`core/resolve.ts` absorbs the API's irregularities:

- The selection is often a **child of an instance**. Climb to the first
  `INSTANCE` / `COMPONENT` / `COMPONENT_SET` ancestor.
- Node ids are `1:23` in the API and `1-23` in URLs. Normalise before
  comparing.
- A variant component is *named* by its variant descriptor
  (`Appearance=Default, Layout=Text only`). That is not a component name —
  detect it (`=` present, no ` | ` separator) and climb to the set.
- Remote library components may not expose `parent`; `getMainComponentAsync()`
  then `getNodeByIdAsync()` on the set is the reliable path.
- An `INSTANCE_SWAP` property value is a **node id, not a label**. Resolve the
  node to read its name — that is what makes the live icon name available.

Identity is looked up in this order: component key, node id, then name. Name
matching is last because names carry badges and versions that move.

---

## 6. Rendering — properties to markup

`core/render.ts` maps the resolved properties onto `render`'s arguments.

**The emoji trap.** Property-name comparison must keep emojis. Text input and
Password input carry both `✏️ Label` (TEXT) and `⚠️ Label` (BOOLEAN). Strip the
emoji and the two names collapse; the boolean wins and the field renders
`<label>true</label>` — 1 344 variants did exactly that. So:

- a **strict** index keyed on the name with emojis kept (only the variation
  selector `U+FE0F` and whitespace normalised), consulted first;
- a **loose** index with emojis removed, populated *only* for names that remain
  unique without them, as a fallback for small Figma-side renames.

Value normalisation is the opposite: lowercase, accents and emojis dropped,
non-alphanumerics collapsed to `-`, so `Text + icon` and `Text + Icon` both
reach `text-icon`.

Icon substitution: the component declares `icon: { prop: '↪ Icon', placeholder:
'heart-empty' }`; the renderer replaces the placeholder in the sprite reference
with the resolved instance name. This is the plugin's answer to the
`INSTANCE_SWAP` hole described in `references/code-connect.md` §5.

---

## 7. Verification on three paths

`tools/verify.mjs` enumerates every variant in `figma-inventory.json` and
renders each one three ways:

1. the plugin's `src/components/`,
2. the generated `.figma.ts`, replayed through a re-implementation of the
   `figma.*` primitives,
3. the **template file**, transpiled with esbuild and run in a `node:vm`
   sandbox with `_fcc_renderHtmlValue` / `_fcc_renderHtmlAttribute` copied
   verbatim from `@figma/code-connect`.

Then it compares. Two lessons from building it:

- The helpers must be **copied, not approximated**. `_fcc_renderHtmlAttribute`
  omits the whole attribute when the value is empty; a reimplementation that
  emits `class=""` produces a wall of false diffs.
- Tag balance must be checked with a **stack and a real void-element set**.
  Counting `<` and `>` reported 1 422 false failures on `<circle>` and
  `<use/>`.

All three agreeing proves non-regression, not correctness — they descend from
the same `mapping.yml`. What it catches is drift: a reordering, a renamed
property, a generator change, an inventory that moved.

The whole chain, in order, stopping at the first anomaly:

```bash
npm install                       # first time only
npm run release -- ../ouds-code-connect
```

---

## 8. Building, installing, publishing

`tools/build.mjs` bundles with esbuild to a single IIFE (`dist/code.js`), plus
`dist/ui.html` and `dist/render.mjs` (the renderer, reused by `verify.mjs`).
The Figma sandbox has no module loader — the IIFE is not optional.

Ship the zip **with `dist/` already built**, so the user needs no Node to try
it. Exclude `node_modules/`, and exclude the byproducts `dist/variants.json`
and `dist/ouds-mapping.json` — they are megabytes and the plugin never reads
them.

Installing:

1. Unzip to a **short, stable path** — `C:\figma-plugins\ouds-figma-plugin`.
   Avoid OneDrive: files-on-demand offloading pulls `dist/code.js` out from
   under Figma and produces `ENOENT` on a file the explorer still shows. This
   was a real support round-trip; say it in the delivery message.
2. Figma **desktop app** → Plugins → Development → *Import plugin from
   manifest…*. The browser cannot import a local plugin.
3. Design mode: right-click → Plugins → Development → OUDS Code.
   Dev Mode: Inspect panel → code generator menu → OUDS Code.

Publishing inside the organisation: Plugins → Development → Publish → *Only for
members of \<organisation\>*. Needs an Organization or Enterprise plan and the
right to publish internal resources, plus a 128×128 icon and a 1920×960 cover.

---

## 9. The maintenance table

| Situation | What is touched |
|---|---|
| The markup changes in the docs | the template literal of the branch |
| A CSS class is renamed | the `xxxClasses` table at the top of the file |
| A variant gains its own markup | one more `if`, **before** the more general branches |
| A component goes ✅ LIVE | generate it, add it to `components/index.ts` |
| A component regresses to ⚙️ DEV | remove it from `components/index.ts` |
| The node id changes | `nodeIds` in the component file |
| A Figma property is renamed | the `props` map, keeping the emoji |

Then always `npm run release -- <kit>`, then republish. There is no remote
update path.
