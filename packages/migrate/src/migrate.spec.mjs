import fs from 'node:fs/promises'
import {
  describe, it, expect, afterEach
} from 'vitest'
import { migrate } from './migrate.mjs'
import { getReplacementsWarnings } from './replacements.mjs'

const getSnapshot = filename => {
  return `../${filename.replace('tests/', 'tests/__snapshots__/')}`
}

const writtenFiles = new Map()
const decoratedMigrateForTest = async options => {
  return migrate({
    fs: {
      async readFile(file, encoding) {
        return fs.readFile(file, encoding)
      },
      async writeFile(file, newContents, _encoding) {
        return writtenFiles.set(file, newContents)
      }
    },
    ...options
  })
}

describe('Migrate', () => {
  afterEach(() => {
    writtenFiles.clear()
  })

  it('should migrate css', async () => {
    const filename = 'tests/style.css'
    await decoratedMigrateForTest({
      files: filename
    })

    await expect(writtenFiles.get(filename)).toMatchFileSnapshot(getSnapshot(filename))
  })

  it('should migrate html', async () => {
    const filename = 'tests/index.html'
    await decoratedMigrateForTest({
      files: filename
    })

    await expect(writtenFiles.get(filename)).toMatchFileSnapshot(getSnapshot(filename))
  })

  it('should be able to use ob1 replacements', async () => {
    const filename = 'tests/index.html'
    const snaphostFilename = 'tests/index-ob1.html'
    await decoratedMigrateForTest({
      files: filename,
      ob1: true
    })

    await expect(writtenFiles.get(filename)).toMatchFileSnapshot(getSnapshot(snaphostFilename))
  })

  it('should keep warning of removal', async () => {
    const filename = 'tests/index.html'
    await decoratedMigrateForTest({
      files: filename
    })

    expect(getReplacementsWarnings()).toEqual([
      'initialism class is deprecated in tests/index.html',
      'container class is deprecated in tests/index.html',
      'container-md class is deprecated in tests/index.html',
      'btn-close-white class is deprecated in tests/index.html',
      'btn-social class is deprecated in tests/index.html',
      'btn-sm class is deprecated in tests/index.html',
      'The component using class \'ob1-form-group\' in tests/index.html needs to be updated to use the new component version.'
    ])
  })
})
