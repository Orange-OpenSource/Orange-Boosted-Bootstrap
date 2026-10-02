#!/usr/bin/env python3
"""Build a standalone HTML playground from one or more CSF3 story files.

    python3 build_preview.py out.html Badge*.stories.js [--css URL] [--title T]

The page embeds each story's full source, builds the Controls panel from
`argTypes`, renders `render(args)` in an iframe that loads the OUDS stylesheet,
and shows `parameters.docs.source.transform` in the Code panel — the same three
surfaces Storybook gives you, in a file you can open with a double-click.

The stories are not modified: `export default` becomes `const meta` and
`export const PlaygroundX` becomes `const story`, exactly as `rebuild.py` does
in the repo, so what runs here is what Storybook will run.
"""
import argparse
import base64
import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
DEFAULT_SPRITE = HERE.parent / 'assets' / 'ouds-sprite.svg'
BUNDLED_CSS = HERE.parent / 'assets' / 'ouds-web.css'
PUBLISHED_CSS = 'https://cdn.jsdelivr.net/npm/@ouds/web-orange/dist/css/ouds-web.min.css'
JS_BUNDLE = 'https://cdn.jsdelivr.net/npm/@ouds/web-common/dist/js/ouds-web.bundle.min.js'


def to_block(source: str) -> str:
    """Turn a story module into an IIFE body, keeping every character else."""
    source = source.replace('export default {', 'const meta = {', 1)
    source = re.sub(r'export const (Playground\w+) = \{', 'const story = {', source, count=1)
    # A story may emit a <script> of its own — `indeterminate` is a DOM
    # property, no attribute carries it. Left as is, its `</script>` would close
    # the page's own script: the HTML parser knows nothing of JS strings.
    return source.replace('</script', '<\\/script').rstrip('\n')


def registry_entry(path: Path) -> str:
    src = path.read_text(encoding='utf-8')
    key = path.name.replace('.stories.js', '')
    docs = re.search(r'^// Docs:\s*(\S+)', src, re.M)
    return (
        'REGISTER((function () {\n' + to_block(src) +
        '\nreturn { key: ' + json.dumps(key) +
        ', docs: ' + json.dumps(docs.group(1) if docs else '') +
        ', meta: meta, story: story };\n})());'
    )


def resolve_css(value: str) -> str:
    """A URL is used as is; a local file is inlined, so the page stays one file.

    Inlining matters more than it looks: the canvas is an iframe with no origin
    of its own, and a corporate proxy that blocks jsDelivr would leave every
    component unstyled with nothing on screen to say why.
    """
    if value == 'published':
        return PUBLISHED_CSS
    path = BUNDLED_CSS if value == 'bundled' else Path(value)
    if path.exists():
        payload = base64.b64encode(path.read_bytes()).decode('ascii')
        return 'data:text/css;base64,' + payload
    if value == 'bundled':
        return PUBLISHED_CSS
    return value


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('out')
    ap.add_argument('stories', nargs='+')
    ap.add_argument('--css', default='bundled',
                    help="stylesheet for the canvas: 'bundled' (inlined, works offline and behind a "
                         "proxy), 'published' (jsDelivr), a path to a .css file, or any URL")
    ap.add_argument('--sprite', default=str(DEFAULT_SPRITE),
                    help='OUDS sprite inlined in the canvas so <use> references resolve')
    ap.add_argument('--title', default='OUDS playground')
    args = ap.parse_args()

    paths = [Path(p) for p in args.stories]
    missing = [str(p) for p in paths if not p.exists()]
    if missing:
        print('not found: ' + ', '.join(missing), file=sys.stderr)
        return 1

    sprite = Path(args.sprite)
    css = resolve_css(args.css)
    template = (HERE / 'preview_template.html').read_text(encoding='utf-8')
    html = (template
            .replace('__TITLE__', args.title)
            .replace('__CSS__', json.dumps(css))
            .replace('__JS_BUNDLE__', json.dumps(JS_BUNDLE))
            .replace('__SPRITE__', json.dumps(sprite.read_text(encoding='utf-8') if sprite.exists() else ''))
            .replace('__STORIES__', '\n\n'.join(registry_entry(p) for p in paths)))

    Path(args.out).write_text(html, encoding='utf-8')
    print(f'{args.out} — {len(paths)} story file(s), {len(html) // 1024} KB')
    return 0


sys.exit(main())
