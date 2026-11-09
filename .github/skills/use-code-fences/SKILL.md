---
name: 'use-code-fences'
description: 'Replace astro components for examples (<Code> and <Example>) with code fences with metadata for arguments.'
---

# Workflow: Use code fences

**This skill should only be used on *.mdx files.**

---

## Step 1 — Find all <Code> and <Example> components in file


---

## Step 2 — Replace <Code> and <Example> components with code fences

JSX arguments should be converted to code fence metadata. For example:

```mdx
<Example buttonLabel="Example" class="example-class" code={`<div>Example</div>`} />
```

should become:

```mdx
```html buttonLabel="Example" class="example-class"
<div>Example</div>
```
```

`<Code>` should be replaced with a code fence with `markupOnly={true}`.

```mdx
<Code buttonLabel="code example" code={`npm i package-name`} />
```

should become:

```mdx
```sh markupOnly={true} buttonLabel="code example"
npm i package-name
```
```



When the code argument is an array of strings, do the following change:

```mdx
<Example buttonLabel="Bootstrap compatibility: outline buttons" class="bd-btn-example" code={[
  ...getData('theme-colors').map((themeColor) => `<button type="button" class="btn btn-outline-${themeColor.name}">${themeColor.title}</button>`)
]} />
````

becomes:

```mdx
```html buttonLabel="Bootstrap compatibility: outline buttons" class="bd-btn-example"
 ${getData('theme-colors').map((themeColor) => `<button type="button" class="btn btn-outline-${themeColor.name}">${themeColor.title}</button>`)}
```
```

**important**:
- Be careful with indentation, the code fence content should have one indentation less than the original code argument on every line.
- The `slot` argument can be safely used in the metadata of the code fence, just like any other JSX argument.
- The code fence metadata must not include backticks, remove them

---

## Step 3 — Interactive feedback

- ask for confirmation for each `<Code>` changes to let the user choose the type of code fence (e.g., `sh`, `scss`)
- for each replacements where the buttonLabel is not present in the original component, ask the user to provide a buttonLabel
