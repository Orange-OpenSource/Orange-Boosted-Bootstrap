# Code Connect for OUDS Web

Everything about the `mapping.yml` → `.figma.ts` → template chain, and what to
put in the handoff file.

## Contents

1. The chain
2. Anatomy of a `mapping.yml` entry
3. The primitives
4. Connection ordering — the rule that bites
5. What has no primitive: `INSTANCE_SWAP`
6. The generated form (`html` parser)
7. The template form (post-17/08/2026)
8. Publishing
9. The handoff file

---

## 1. The chain

```
code-connect/mapping.yml            the only file edited by hand
  │
  ├─ scripts/generate.mjs  ──►  code-connect/generated/*.figma.ts
  │                              (parser: html — deprecated 17/08/2026)
  ├─ npx figma connect migrate ─►  code-connect/templates/*.figma.ts
  │                              (template files — the supported form)
  ├─ (ouds-playground skill)  ──►  stories/components-playground/*.stories.js
  └─ tools/generate-components.mjs ──►  plugin src/components/*.ts
```

Four outputs, one input. Editing an output is legitimate only to record a
deliberate divergence, and then it gets a header comment saying so. Otherwise
the next regeneration silently reverts it.

---

## 2. Anatomy of a `mapping.yml` entry

```yaml
  - id: tag                       # kebab-case; names every derived file
    figmaName: "Tag"              # the component set name, badges stripped
    nodeId: "56994:29993"         # from the Figma URL, `node-id=56994-29993`
    codeName: tag                 # the OUDS Web component
    codeVersion: "1.5.0"
    docs: https://web.unified-design-system.orange.com/orange/docs/components/tags/
    iconProp: "↪ Icon"            # optional, see §5 — inert for generate.mjs
    iconPlaceholder: heart-empty
    notes: |
      Free text, copied verbatim into every generated file's header.
      This is where a divergence with the design gets argued, with numbers:
      « ÉCART OUVERT — le défaut diverge : Figma part de Muted, le code part
      de emphasized (.tag seul). 432 variantes attendent cet arbitrage. »
    nonMappe:
      Size: "Aucun équivalent code — scss/_button-group.scss:162. ÉCART À ARBITRER."
    connections:
      - variant: { Layout: "Text only" }     # restricts this connection
        props:
          label: { string: "✏️ Label" }
          classes:
            className:
              - "tag"
              - enum: { prop: Status, map: { Neutral: null, Accent: tag-accent } }
        example: |
          <p class="${props.classes}">${props.label}</p>
```

Fields worth being deliberate about:

- **`figmaName`** is the *clean* name. Figma names carry badges and versions
  (`Tag | ✅ LIVE v1.5 |`); the plugin strips them, and so should this.
- **`notes:`** is not decoration. It is the only place a reader learns why a
  mapping departs from the design, and it is reproduced in the header of every
  generated artifact.
- **`nonMappe:`** lists Figma properties with no code equivalent, one line of
  justification each. A property that is neither mapped nor listed reads as an
  oversight.
- **`example:`** is a template literal. `${props.x}` refers to a key of
  `props:`. A newline inside a `map:` *value* breaks generation (`generate.mjs`
  quotes values without escaping newlines) — keep wrapper markup inline in the
  example, or as a single-line enum value like
  `'<div class="use-rounded-corner-buttons">'`.

---

## 3. The primitives

| In `mapping.yml` | Generated | Reads |
|---|---|---|
| `{ string: "✏️ Label" }` | `figma.string('✏️ Label')` | a TEXT property |
| `{ textContent: "Label" }` | `figma.textContent('Label')` | a text layer's content |
| `{ boolean: "⚠️ Error" }` | `figma.boolean('⚠️ Error')` | a BOOLEAN property |
| `{ enum: { prop: P, map: {…} } }` | `figma.enum('P', {…})` | a VARIANT property |
| `{ className: [ … ] }` | `figma.className([…])` | joins, dropping nullish |
| `{ instance: "Icon" }` | `figma.instance('Icon')` | a nested instance, as a *render*, not a string |

`null` in a `map:` becomes `undefined` in the generated file: "this value adds
nothing". `figma.className` filters those out; a bare `figma.enum` interpolated
into an example does not, so append `?? ''` mentally — an unmapped value would
otherwise print the string `undefined`. Every value of a variant property
belongs in its `map:`, including the ones that map to nothing.

Boolean properties come through as the strings `'True'` / `'False'` when they
are variant properties, and as real booleans when they are instance booleans.
Keep `'True'` / `'False'` as the table keys and convert on read.

---

## 4. Connection ordering — the rule that bites

`connections:` is an ordered list. `figma connect migrate` turns it into an
`if / else if` chain **in declaration order**, and the first matching branch
wins. The old `html` parser instead picked the *most specific* match, so a
mapping that worked before the migration can break after it, silently.

This actually happened. Button and Button - On colored bg declared their
`{ Layout }`-only connections before their `{ Layout, State: Loading }` ones.
Under the `html` parser the Loading branches were selected; in the template
files they were unreachable. 78 variants rendered the wrong snippet, with no
error from any tool.

**Order connections from most constrained to least constrained.** A connection
restricted on two variant properties comes before one restricted on one, which
comes before the unrestricted fallback. When adding a connection to an existing
entry, insert it by specificity, not at the end.

The same rule governs the plugin's `if` chain, for the same reason — see
`references/plugin.md`.

A connection whose `variant:` set is fully covered by an earlier connection is
dead. The plugin's component generator has a `--strict` check for this; there
is no equivalent on the Code Connect side, so read the order yourself.

---

## 5. What has no primitive: `INSTANCE_SWAP`

An icon in Figma is an `INSTANCE_SWAP` property — the designer picks
`heart-empty`, `settings`, `chevron-right`. The OUDS markup needs that name as
a string, inside a sprite reference:

```html
<svg aria-hidden="true"><use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty"/></svg>
```

Code Connect has **no primitive that returns the swapped instance's name as a
string**. `figma.instance()` returns a render of the nested component, not its
name. So the mapping freezes one:

```yaml
    iconProp: "↪ Icon"
    iconPlaceholder: heart-empty
```

and the `example:` hardcodes `#heart-empty`. `generate.mjs` reads only
`variant`, `props` and `example`, so both fields pass through untouched — they
exist for the plugin, which resolves the real instance name and substitutes it.

The consequence is honest and worth stating to the user: **in Dev Mode the icon
name is always the placeholder; in the plugin it is the real one.** Do not try
to close this gap in the mapping.

---

## 6. The generated form (`html` parser)

```ts
// ⚠️ Fichier généré par scripts/generate.mjs — ne pas éditer à la main.
// Source de vérité : code-connect/mapping.yml (entrée « tag »).
//
// Composant Figma : Tag  (node 56994:29993)
// Composant code  : tag v1.5.0
// Documentation   : …
// (notes: reproduced here)

import figma, { html } from '@figma/code-connect/html'

figma.connect(
  'https://www.figma.com/design/QtOWrH1m3RHOAkfyy0XFil/OUDS?node-id=56994-29993',
  {
    variant: { 'Layout': 'Text only' },
    props: {
      label: figma.string('✏️ Label'),
      classes: figma.className([
        'tag',
        figma.enum('Status', { 'Neutral': undefined, 'Accent': 'tag-accent' }),
      ]),
    },
    example: (props) => html`<p class="${props.classes}">${props.label}</p>`,
  },
)
```

One `figma.connect` call per connection, all in one file per component.
`figma.config.json` for this form:

```json
{
  "codeConnect": {
    "parser": "html",
    "include": ["code-connect/generated/*.figma.ts"],
    "label": "OUDS Web"
  }
}
```

---

## 7. The template form (post-17/08/2026)

The `html` parser is deprecated. `npx figma connect migrate` rewrites each file
into a **template file**: a script evaluated against the selected instance.

```ts
// url=https://www.figma.com/design/QtOWrH1m3RHOAkfyy0XFil/OUDS?node-id=56994-29993

import figma from "figma"

let template
if (figma.selectedInstance.getPropertyValue("Layout") === "Text only") {
  const label = figma.selectedInstance.getString("✏️ Label")
  const classes = [
    "tag",
    figma.selectedInstance.getEnum("Status", { Neutral: undefined, Accent: "tag-accent" }),
  ].filter((v) => !!v).join(" ")

  template = {
    id: "TODO",
    example: figma.code`<p ${_fcc_renderHtmlAttribute("class", classes)}>${_fcc_renderHtmlValue(label)}</p>`,
  }
} else if (…) { … }
```

What changes, and why it matters:

- `figma.selectedInstance.getString / getBoolean / getEnum / getPropertyValue`
  replace the `figma.*` primitives.
- `figma.code` tagged template replaces `html`.
- `_fcc_renderHtmlAttribute(name, value)` **omits the attribute entirely** when
  the value is empty, and `_fcc_renderHtmlValue(v)` renders an error-typed
  value as nothing. Their exact behaviour is in
  `@figma/code-connect/dist/html/parser_template_helpers.js` — copy it verbatim
  if you ever need to reimplement it; approximating it produces false diffs.
- Branch selection becomes first-match (§4).
- `id: "TODO"` is what the migration emits and is fine to leave.

Its `figma.config.json` differs — no `parser`, a `language` instead:

```json
{
  "codeConnect": {
    "include": ["**/*.figma.ts"],
    "language": "html",
    "label": "OUDS Web"
  }
}
```

Both forms should ship. The generated form is what the current tooling reads;
the template form is what survives the migration, and it is the one to check
the plugin against.

---

## 8. Publishing

```bash
npx figma connect parse                        # syntax only, no network
npx figma connect publish --dry-run            # resolves node ids
npx figma connect publish
npx figma connect unpublish --node <id>
npx figma connect migrate                      # generated → template
```

A Figma personal access token with **`File content: read`** and **`Code
Connect: write`** is required, in `FIGMA_ACCESS_TOKEN`. Publishing is per file
key; a node id that no longer exists fails the publish for that connection
only, which is the usual symptom of a stale `nodeId`.

Never publish on the user's behalf without being asked — the handoff file
carries the commands so the repo owner runs them.

---

## 9. The handoff file

`scripts/code-connect-file.mjs` assembles it, but know what belongs in it, so
the output can be judged:

1. **What this is** — component, node id, code name and version, docs link.
2. **The `mapping.yml` entry**, ready to paste, positioned ("after `- id: tag`").
3. **The generated `.figma.ts`**.
4. **The template `.figma.ts`**.
5. **Both `figma.config.json` forms**, with which include path goes where.
6. **The commands**, in order, with the token scopes.
7. **What is not covered** — uncovered variant combinations, `nonMappe:`
   properties, the icon placeholder gap. This section is the one that gets
   read second and matters most; never omit it because it is empty-looking.

One file, self-contained, so it can be forwarded to whoever owns
`Orange-Boosted-Bootstrap` without any of this conversation attached.
