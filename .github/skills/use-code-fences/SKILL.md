---
name: "use-code-fences"
description: "Replace astro components for examples (<Code> and <Example>) with code fences with metadata for arguments."
---

# Workflow: Use code fences

*_This skill should only be used on *.mdx files.*_

---

## Step 0 — Handle existing code fences

Check for existing code fences that have no metadata after the language identifier (for example, ` ```html `). Add `markupOnly` to these fences so they remain code-only blocks rather than becoming live examples. Do not change fences that already have metadata.

---

## Step 1 — Find all <Code> and <Example> components in file

Leave any `<Code>` with a `filePath` argument unchanged: it reads code from an external file and cannot be represented by an inline code fence. Continue converting other components in the file.

---

## Step 2 — Replace <Code> and <Example> components with code fences

Convert every supported argument other than `code` into fence metadata, preserving its value and JSX expression syntax. The `lang` argument becomes the fence language identifier, not metadata. Keep arguments such as `buttonLabel`, `class`, `slot`, `showPreview`, and `showToolbar` when present. For example:

```mdx
<Example
  buttonLabel="Example"
  class="example-class"
  code={`<div>Example</div>`}
/>
```

should become:

```mdx
```html buttonLabel="Example" class="example-class"
<div>Example</div>
```
```


`<Code>` should be replaced with a code fence with `markupOnly`.

```mdx
<Code buttonLabel="code example" code={`npm i package-name`} />
```

should become:

```mdx
```sh buttonLabel="code example" markupOnly
npm i package-name
```
```

When the code argument is an array of strings, do the following change:

```mdx
<Example buttonLabel="Bootstrap compatibility: outline buttons" class="bd-btn-example" code={[
  ...getData('theme-colors').map((themeColor) => `<button type="button" class="btn btn-outline-${themeColor.name}">${themeColor.title}</button>`)
]} />
```

becomes:

```mdx
```html buttonLabel="Bootstrap compatibility: outline buttons" class="bd-btn-example"
${getData('theme-colors').map((themeColor) => `<button type="button" class="btn btn-outline-${themeColor.name}">${themeColor.title}</button>`)}
```
```

**Important**:
- Be careful with indentation, the code fence content should have one indentation less than the original code argument on every line.
- The `slot` argument can be safely used in the metadata of the code fence, just like any other JSX argument.
- buttonLabel value should never begin with a capital letter except when it is a proper noun or acronym like Bootstrap, Boosted or OUDS
- When `showMarkup={false}` is used, the buttonLabel can be omitted safely.
- Content of the code fence should not have backticks (`), replace them with quotes (") except for template literals.

---

## Step 3 — Interactive feedback

- ask for confirmation for each `<Code>` changes to let the user choose the type of code fence (e.g., `sh`, `scss`)
- for each code fences where the buttonLabel is not present in the original component (except when showMarkup={false}), ask the user to provide a buttonLabel, suggest a default value based on the context of the code if possible
