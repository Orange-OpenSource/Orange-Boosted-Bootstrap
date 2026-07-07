import fs from 'node:fs/promises'
import  path from 'node:path'
import {
  describe, it, expect
} from 'vitest'

const cssFile = path.resolve(__dirname, '../../../packages/orange/dist/css/ouds-web.css')
const snapshotFile = path.resolve(__dirname, '__snapshots__/ouds-web.css')

describe('Orange CSS build', () => {
  it('should build CSS matching the snapshot', async () => {
    const css = await fs.readFile(cssFile, 'utf8')

    await expect(css).toMatchFileSnapshot(snapshotFile)
  })
})
