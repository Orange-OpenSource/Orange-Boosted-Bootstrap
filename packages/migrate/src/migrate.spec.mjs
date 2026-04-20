import fs from 'node:fs/promises'
import {
  describe, it, expect, afterEach
} from 'vitest'
import { migrate } from './migrate.mjs'
import { getReplacementsWarnings } from './utils/warnings.mjs'

const getSnapshot = filename => {
  return `../${filename.replace('tests/source', 'tests/__snapshots__/migrated')}`
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

  it('should keep warning of removal', async () => {
    const filename = 'tests/source-ob1.html'
    await decoratedMigrateForTest({
      files: filename,
      source: 'ob1'
    })

    expect(getReplacementsWarnings()).toEqual([
      'initialism class is deprecated in tests/source-ob1.html',
      'container class is deprecated in tests/source-ob1.html',
      'container-md class is deprecated in tests/source-ob1.html',
      'btn-close-white class is deprecated in tests/source-ob1.html',
      'btn-social class is deprecated in tests/source-ob1.html',
      'btn-sm class is deprecated in tests/source-ob1.html',
      'The form using class \'was-validated\' in tests/source-ob1.html needs to be updated to use the new form validation style.',
      'The component using class \'ob1-form-group\' in tests/source-ob1.html needs to be updated to use the new component version.'
    ])
  })

  it('should migrate css', async () => {
    const filename = 'tests/source-boosted.css'
    await decoratedMigrateForTest({
      files: filename,
      source: 'boosted'
    })

    await expect(writtenFiles.get(filename)).toMatchFileSnapshot(getSnapshot(filename))
  })

  it('should migrate html from boosted', async () => {
    const filename = 'tests/source-boosted.html'
    await decoratedMigrateForTest({
      files: filename,
      source: 'boosted'
    })

    await expect(writtenFiles.get(filename)).toMatchFileSnapshot(getSnapshot(filename))
  })

  it('should migrate html from ob1', async () => {
    const filename = 'tests/source-ob1.html'
    await decoratedMigrateForTest({
      files: filename,
      source: 'ob1'
    })

    await expect(writtenFiles.get(filename)).toMatchFileSnapshot(getSnapshot(filename))
  })

  it('should migrate html from ouds', async () => {
    const filename = 'tests/source-ouds.html'
    await decoratedMigrateForTest({
      files: filename
    })

    await expect(writtenFiles.get(filename)).toMatchFileSnapshot(getSnapshot(filename))
  })
})
