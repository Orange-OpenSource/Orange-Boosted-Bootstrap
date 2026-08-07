---
name: migrate-to-ouds-web
description: 'Guides migration of a web project to OUDS Web (Orange Unified Design System). Use when the user wants to migrate from OB1 (@ob1/web), Boosted, or an older OUDS Web version to the latest OUDS Web. Covers: detecting source library from package.json, running npx @ouds/web-migrate with correct --from flag and glob pattern, and resolving manual migration warnings by finding correct OUDS Web component markup using the using-ouds-web skill. Triggers on: migrate to OUDS Web, migration from Boosted, migration from OB1, @ouds/web-migrate, update OUDS Web version.'
---

# Migrate to OUDS Web

Step-by-step workflow for migrating a project to OUDS Web using the `@ouds/web-migrate` CLI tool.

## Step 1 — Detect source library

Read the project's `package.json` (`dependencies` and `devDependencies`) and map to the correct `--from` flag:

| Dependency found | `--from` flag | Migration source |
|---|---|---|
| `@ob1/web` | `--from=ob1` | OB1 |
| `boosted` | `--from=boosted` | Boosted |
| `@ouds/web-common` | *(omit flag, default)* | Older OUDS Web |
| None found | Ask the user | Unknown |

If `ouds-web` or `@ouds/web-orange` is already present, the project is either fully migrated or partially migrated — confirm with the user before proceeding.

## Step 2 — Choose file glob

Inspect the project file types and pick a safe glob. **Never use `"**/*.*"`** — it modifies binary and unrelated files.

| Project type | Recommended glob |
|---|---|
| HTML/CSS only | `"**/*.{css,scss,html}"` |
| React (JSX/TSX) | `"**/*.{css,scss,html,jsx,tsx}"` |
| Vue | `"**/*.{css,scss,html,vue}"` |
| Angular | `"**/*.{css,scss,html,ts}"` |
| Default (safe) | `"**/*.{css,scss,html}"` |

Advise running in a version-controlled folder so changes can be reviewed with `git diff`.

## Step 3 — Run the migration tool

```bash
# Migrate from Boosted
npx @ouds/web-migrate --from=boosted "**/*.{css,scss,html}"

# Migrate from OB1 (Vue project)
npx @ouds/web-migrate --from=ob1 "**/*.{css,scss,html,vue}"

# Update to latest OUDS Web version (from older OUDS)
npx @ouds/web-migrate "**/*.{css,scss,html}"
```

The tool:
- **Automatically replaces** known class names using regex
- **Emits warnings** for deprecated/removed classes that require manual follow-up (one line per change needed)

## Step 4 — Resolve warnings (manual steps)

For each warning line in the output:

1. Identify the component or class name mentioned in the warning
2. Invoke the `using-ouds-web` skill to find the correct OUDS Web HTML structure for that component
3. Apply the replacement manually in the affected files

Example: if the warning mentions `.alert-success`, look up `alerts` in `using-ouds-web` references to find the correct `.alert-positive` / `.alert-neutral` structure.

## Step 5 — Post-migration checklist

- [ ] Review `git diff` to verify all automated replacements are correct
- [ ] Update `package.json`: replace `boosted`/`@ob1/web` with `ouds-web` (or `@ouds/web-common` + `@ouds/web-orange`)
- [ ] Update Sass/CSS imports (e.g. `@import "boosted"` → `@import "ouds-web"`)
- [ ] Update CDN links in HTML files (`boosted.min.css` → `ouds-web.min.css`)
- [ ] Search for leftover `class=" "` artifacts — the tool does **not** remove empty class attributes
- [ ] Verify responsive breakpoints: OUDS Web uses 8 breakpoints with **prefix syntax** `{bp}:{utility}-{value}` (e.g. `lg:col-6`), not Bootstrap infix format (`col-lg-6`)

## Known tool limitations

- Empty `class=" "` attributes are left in place after class removal — clean up manually
- Custom responsive classes with infixes (e.g. `something-2xl-left`) get renamed to `2xl:something-left` — review these carefully
- Always inspect the diff before committing

## Anti-patterns

- ❌ Don't guess source library from class names — always check `package.json` first
- ❌ Don't use `"**/*.*"` glob — modifies binary and irrelevant files
- ❌ Don't stop after automated replacements — warnings require manual action
- ❌ Don't skip the `git diff` review — automated replacements may need adjustment

## References

- Use the `using-ouds-web` skill for target component markup and class lookup during manual warning resolution
- `packages/migrate/README.md` — full `@ouds/web-migrate` options and examples
- `skills/using-ouds-web/references/getting-started/migration-from-boosted.md` — component-by-component Boosted→OUDS Web changes
- `skills/using-ouds-web/references/getting-started/migration.md` — OUDS Web version-to-version changes
