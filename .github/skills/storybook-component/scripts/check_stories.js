#!/usr/bin/env node
/* Checks a playground story — or a whole folder of them — without Storybook.
 *
 *   node check_stories.js path/to/XPlayground.stories.js
 *   node check_stories.js stories/components-playground
 *
 * Seven families of checks, each answering a question that has actually bitten
 * this corpus before:
 *
 *   shape      is it CSF3, one story, meta reduced to { title, argTypes } ?
 *   style      no if/else, no console, no duplicate title
 *   naming     does every control carry a `name`, from the shared vocabulary ?
 *   render     does the Code panel match the canvas outside <svg> ?
 *   controls   does every control change something, in some configuration ?
 *   empty      does an emptied select ("Choose option") still render ?
 *   dead       any const never read back, any table key nothing can reach ?
 *
 * Exit code 1 if a problem is found. Divergences between render and transform
 * are reported as warnings, not failures: seven components diverge on purpose
 * (inline icons on the canvas, sprite reference in the Code panel). Read the
 * diff and confirm it is the divergence you meant.
 */
const fs = require('fs')
const path = require('path')

const targets = process.argv.slice(2)
if (!targets.length) {
  console.error('usage: node check_stories.js <file.stories.js | folder> [...]')
  process.exit(2)
}

const files = targets.flatMap((target) => (fs.statSync(target).isDirectory()
  ? fs.readdirSync(target).filter((f) => f.endsWith('.stories.js')).sort().map((f) => path.join(target, f))
  : [target]))

/* The story module, run as a plain function body — the same rewrite the repo's
   rebuild.py does, so what is checked is what Storybook loads. */
const load = (file) => {
  const src = fs.readFileSync(file, 'utf8')
  const body = src
    .replace('export default {', 'const meta = {')
    .replace(/export const Playground\w+ = \{/, 'const story = {')
  return { src, ...new Function(body + '\nreturn { meta, story }')() }
}

/* Canvas and Code panel legitimately differ by <svg> blocks and by
   preview-only scaffolding — a <style>, a wrapper that gives a vertical rule
   something to be tall against. Everything else is normalised away so the
   comparison is about the component's own markup. */
const normalise = (html) => html
  .replace(/<svg[\s\S]*?<\/svg>/g, '<svg/>')
  .replace(/<style>[\s\S]*?<\/style>/g, '')
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/ oninput="[^"]*"/g, '')
  .replace(/\s+/g, ' ')
  .trim()

/* Line comments, without mistaking the `//` of a URL for one — otherwise the
   end of line vanishes, a quote is left orphaned, and the rest of the file
   reads as a string. */
const stripComments = (src) => src.replace(/(^|[^:'"`\\])\/\/[^\n]*/gm, '$1')

/* Single-quoted strings are prose — control names, descriptions, table keys —
   and the style checks below look for JavaScript. A `description` containing
   the words "if" or "else" is not a branch; emptying the quotes keeps the
   check on the code. Template literals are left alone: they hold the markup,
   and a stray `if (` in there is worth seeing. */
const stripStrings = (src) => src.replace(/'(?:[^'\\\n]|\\.)*'/g, "''")

/* The other values a control can take, so we can ask whether any of them
   changes the output. */
const others = (spec, value) => {
  const kind = (spec.control && spec.control.type) || spec.control
  if (kind === 'boolean') { return [!value] }
  if (spec.options) { return spec.options.filter((o) => o !== value) }
  if (kind === 'number') { return [Number(value || 1) + 2, 1, 2] }
  if (kind === 'object') { return [] }
  return [String(value || '') + 'ZZZ']
}

/* A control gated by `if` says nothing until its condition holds: satisfy it
   before judging it. */
const satisfy = (spec, base) => {
  const rule = spec.if
  if (!rule) { return {} }
  const value = [rule.truthy, rule.eq, rule.gte, base[rule.arg]].find((v) => v !== undefined)
  return { [rule.arg]: value }
}

const firstDiff = (a, b) => {
  let i = 0
  while (i < a.length && i < b.length && a[i] === b[i]) { i += 1 }
  const from = Math.max(0, i - 40)
  return `\n        canvas: …${a.slice(from, i + 60)}…\n        code:   …${b.slice(from, i + 60)}…`
}

const titles = new Map()
let failed = 0
let warned = 0

for (const file of files) {
  const name = path.basename(file).replace('Playground.stories.js', '')
  const problems = []
  const warnings = []
  let loaded

  try {
    loaded = load(file)
  } catch (error) {
    console.log(`KO   ${name} — does not evaluate: ${error.message}`)
    failed += 1
    continue
  }

  const { src, meta, story } = loaded

  // --- shape ---------------------------------------------------------------
  const named = (src.match(/^export const (\w+)/gm) || []).map((s) => s.replace('export const ', ''))
  if (named.length !== 1) { problems.push(`${named.length} named exports (one story per component)`) }
  if (!/^Playground\w+$/.test(named[0] || '')) { problems.push(`story export named ${named[0]}, expected PlaygroundX`) }
  if (Object.keys(meta).join() !== 'title,argTypes') { problems.push(`meta = { ${Object.keys(meta).join(', ')} }, expected { title, argTypes }`) }
  if (Object.keys(story).join() !== 'parameters,render,args') { problems.push(`story = { ${Object.keys(story).join(', ')} }, expected { parameters, render, args }`) }
  if (typeof story.render !== 'function') { problems.push('no render function') }
  if (!story.parameters?.docs?.source?.transform) { problems.push('no docs.source.transform — the Code panel would show the render function') }
  if (story.parameters?.docs?.codePanel !== true) { problems.push('docs.codePanel is not true') }
  if (/storiesOf\(|Template\.bind|\.story\s*=|export const \w+ = \(\)/.test(src)) { problems.push('CSF2 or legacy form') }
  if (!/^\/\/ Playground for /.test(src)) { problems.push('missing `// Playground for {Component}` header') }

  // --- style ---------------------------------------------------------------
  const code = stripStrings(stripComments(src))
  if (/\bif\s*\(|\belse\b/.test(code)) { problems.push('an if/else — the corpus indexes tables instead') }
  if (/console\./.test(code)) { problems.push('a console.*') }
  const semicolons = (code.match(/;\s*$/gm) || []).length
  if (semicolons) { problems.push(`${semicolons} line(s) end with a semicolon — the corpus has none`) }
  if (titles.has(meta.title)) { problems.push(`title "${meta.title}" already used by ${titles.get(meta.title)}`) }
  titles.set(meta.title, name)

  // --- naming ---------------------------------------------------------------
  /* Without a `name`, Storybook prints the arg key: `selectionStatus` lands
     beside `Error message` and the panel reads as two components glued
     together. And the same idea must keep the same name across the corpus —
     conventions.md §17 holds the vocabulary; these are the renames already
     settled, so a file reintroducing one is out of step, not innovating. */
  const RENAMED = [
    [/^Invalid$/, 'Error'],
    [/^Error text$/, 'Error message'],
    [/^(On colored bg|Container background)$/, 'On colored background'],
    [/^Rounded corner$/, 'Rounded corners'],
    [/colour/i, 'color'],
    [/^Show icon$/, 'Icon'],
    /* A `Hidden label` *text* field is the one §16 removed: it types into
       something the canvas never shows. Text area's boolean is a different
       thing — it switches between two markups the documentation writes, and
       the label's words stay under `Label`. So the ban is on the text form. */
    [/^Hidden label/, 'no control at all — see conventions.md §16', 'text']
  ]

  for (const [arg, spec] of Object.entries(meta.argTypes)) {
    if (!spec.name) {
      problems.push(`the control "${arg}" has no \`name\` — Storybook would print the arg key`)
      continue
    }
    if (!/^[A-Z0-9]/.test(spec.name)) {
      problems.push(`the control name "${spec.name}" does not start with a capital`)
    }
    const kind = (spec.control && spec.control.type) || spec.control
    const renamed = RENAMED.find(([pattern, , only]) => pattern.test(spec.name) && (!only || only === kind))
    if (renamed) { problems.push(`the control name "${spec.name}" is out of vocabulary — use ${renamed[1]}`) }
  }

  /* Storybook's `if` understands eq, neq, truthy and exists. An unknown
     operator does not warn: it falls back on a truthiness test of the arg. So
     a `gte` gate is honoured by build_preview.py and approximated by
     Storybook, and that is a divergence the reader must be told about. */
  const OURS = ['gte', 'oneOf', 'notOneOf']
  const gated = Object.entries(meta.argTypes).filter(([, spec]) => spec.if && OURS.some((op) => op in spec.if))
  if (gated.length) {
    const undocumented = gated.filter(([, spec]) => !/gte|oneOf|Storybook/.test(spec.description || ''))
    const ops = [...new Set(gated.flatMap(([, spec]) => OURS.filter((op) => op in spec.if)))].join('/')
    warnings.push(`${gated.length} control(s) gated on \`${ops}\`, which Storybook ignores (${gated.map(([a]) => a).join(', ')})`
      + (undocumented.length ? ` — ${undocumented.length} without a description saying so` : ' — documented'))
  }

  // --- a hardcoded icon is never reachable ---------------------------------
  /* An inlined `<path d="…">` with no `Icon content` text control locks the
     glyph forever — the bug the four `Item` playgrounds shipped with
     (heart-empty, unreachable). `Tag` and `Badge` are legitimate fixed
     assets: each already has its own playground, so they are not held to
     this rule. */
  const hasIconControl = Object.values(meta.argTypes)
    .some((spec) => spec.name === 'Icon content' && ((spec.control && spec.control.type) || spec.control) === 'text')
  if (/<path d="/.test(src) && !hasIconControl) {
    problems.push('a hardcoded <path> icon with no `Icon content` text control — the glyph can never be changed (conventions.md §6)')
  }

  // --- render vs transform -------------------------------------------------
  const base = story.args
  const panel = (a) => story.parameters.docs.source.transform('', { args: a })
  const canvas = normalise(story.render(base))
  const printed = normalise(panel(base))
  if (canvas !== printed) {
    warnings.push('render and transform diverge outside <svg> — deliberate?' + firstDiff(canvas, printed))
  }

  // --- every control earns its place ---------------------------------------
  for (const [arg, spec] of Object.entries(meta.argTypes)) {
    const variants = others(spec, base[arg])
    if (!variants.length) { continue }
    const context = { ...base, ...satisfy(spec, base) }
    const changed = variants.some((v) => panel({ ...context, [arg]: v }) !== panel(context))
      // some controls only bite in a certain configuration: replay with each select moved
      || Object.entries(meta.argTypes).some(([other, otherSpec]) => (otherSpec.options || []).some((ov) =>
        variants.some((v) => panel({ ...context, [other]: ov, [arg]: v }) !== panel({ ...context, [other]: ov }))))
    if (!changed) { problems.push(`the control "${arg}" changes nothing`) }
  }

  // --- an emptied select still renders -------------------------------------
  const selects = Object.entries(meta.argTypes)
    .filter(([, spec]) => spec.control === 'select' || spec.control?.type === 'select')
    .map(([arg]) => arg)
  const emptied = [...selects.map((a) => ({ [a]: undefined })), Object.fromEntries(selects.map((a) => [a, undefined]))]
  const blank = emptied.filter((patch) => story.render({ ...base, ...patch }).trim() === '')
  if (blank.length) { problems.push(`${blank.length} emptied-select combination(s) render nothing — fall back on the first option`) }
  if (!story.render(base).trim()) { problems.push('renders nothing with its own default args') }

  // --- dead code -----------------------------------------------------------
  for (const m of code.matchAll(/^const (\w+)\s*=/gm)) {
    const uses = (code.match(new RegExp(`\\b${m[1]}\\b`, 'g')) || []).length
    if (uses <= 1) { problems.push(`const ${m[1]} is never read back`) }
  }
  for (const t of src.matchAll(/^const (\w+) = \{\n([\s\S]*?)^\}/gm)) {
    const [, table, body] = t
    /* A table whose keys *are* the control's options is reached through all of
       its contents even though each key appears once. Same for one indexed by
       free text. */
    const derived = new RegExp(`Object\\.(keys|entries)\\(${table}\\)`).test(src)
      || new RegExp(`${table}\\[String\\(`).test(src)
    if (derived) { continue }
    for (const k of body.matchAll(/^\s+'([^']+)':/gm)) {
      const key = k[1]
      const elsewhere = (src.match(new RegExp(`'${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`, 'g')) || []).length
      if (elsewhere <= 1) { warnings.push(`${table}.${key} is unreachable — drop the key, keep the fact in a comment`) }
    }
  }

  // --- report --------------------------------------------------------------
  failed += problems.length ? 1 : 0
  warned += warnings.length ? 1 : 0
  const mark = problems.length ? 'KO  ' : (warnings.length ? 'warn' : 'ok  ')
  console.log(`${mark} ${name.padEnd(18)} ${Object.keys(meta.argTypes).length} controls`)
  problems.forEach((p) => console.log(`       ✗ ${p}`))
  warnings.forEach((w) => console.log(`       · ${w}`))
}

console.log(`\n${files.length} file(s) — ${failed} with problems, ${warned} with warnings`)
process.exit(failed ? 1 : 0)
