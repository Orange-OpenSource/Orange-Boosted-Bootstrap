# @ouds/web-migrate

CLI utility to migrate a Boosted or OB1 project to OUDS Web or update an OUDS Web project to the last version.

## Usage

To update an OUDS project to the last version, simply run:

```bash
npx @ouds/web-migrate "**/*.{css,scss,html}"
```

Any filetype can be specified, you could simply use `"**/*.*"` as a glob pattern to run on all files but this is not recommended.

We advise to run this script in a version controlled folder to be able to check modifications afterward.

### Options

- `--from=value` Change the source framework, where value can be ouds, boosted or ob1. Default is ouds.
- First non-flag argument is the glob pattern. Default: `**/*.{css,scss,html}`

## Examples

```bash
# Default (migrate to last OUDS Web version)
npx @ouds/web-migrate

# Migrate a Boosted project that uses JSX
npx @ouds/web-migrate --from=boosted "src/**/*.{css,scss,html,jsx}"

# Migrate an OB1 project that uses Vue
npx @ouds/web-migrate --from=ob1 "src/**/*.{css,scss,html,vue}"
```

## What it does

- Replaces known class names using a regex-based matcher.
- Emits warnings for deprecated or removed classes that require manual follow-up.

## Output

- Prints the replacement results returned by `replace-in-file`.
- Lists warnings when manual action is required.

## Known limitations

- This script will not remove `class=" "` from your code and will keep a space for removed classes
- If you have custom responsive classes with an infix (like `something-2xl-left`), they will be renamed to `2xl:something-left`
- Please check the result in detail

## Feedback

Feel free to contact us or open a discussion if you have any issue or improvement idea for this script: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/discussions/new?category=q-a

## Development

```bash
npm test
```

## License

MIT
