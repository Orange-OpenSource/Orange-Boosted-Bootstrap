import fs from 'node:fs/promises'
import  path from 'node:path'
import {
  describe, it, expect
} from 'vitest'

describe('Orange CSS build', () => {
  it('should build ouds-web matching the snapshot', async () => {
    const cssFile = path.resolve(__dirname, '../../../packages/orange/dist/css/ouds-web.css')
    const snapshotFile = path.resolve(__dirname, '__snapshots__/ouds-web.css')
    const css = await fs.readFile(cssFile, 'utf8')

    await expect(css).toMatchFileSnapshot(snapshotFile)
  })
  it('should build ouds-web-bootstrap matching the snapshot', async () => {
    const cssFile = path.resolve(__dirname, '../../../packages/orange/dist/css/ouds-web-bootstrap.css')
    const snapshotFile = path.resolve(__dirname, '__snapshots__/ouds-web-bootstrap.css')
    const css = await fs.readFile(cssFile, 'utf8')

    await expect(css).toMatchFileSnapshot(snapshotFile)
  })
})
