import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  describe, it, expect
} from 'vitest'

const testDir = path.dirname(fileURLToPath(import.meta.url))

describe('Orange CSS build', () => {
  it('should build ouds-web matching the snapshot', async () => {
    const cssFile = path.resolve(testDir, '../../../packages/orange/dist/css/ouds-web.css')
    const snapshotFile = path.resolve(testDir, '__snapshots__/ouds-web.css')
    const css = await fs.readFile(cssFile, 'utf8')

    await expect(css).toMatchFileSnapshot(snapshotFile)
  })
  it('should build ouds-web-bootstrap matching the snapshot', async () => {
    const cssFile = path.resolve(testDir, '../../../packages/orange/dist/css/ouds-web-bootstrap.css')
    const snapshotFile = path.resolve(testDir, '__snapshots__/ouds-web-bootstrap.css')
    const css = await fs.readFile(cssFile, 'utf8')

    await expect(css).toMatchFileSnapshot(snapshotFile)
  })
})
