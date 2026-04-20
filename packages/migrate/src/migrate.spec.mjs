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
    const filename = 'tests/source-boosted.html'
    await decoratedMigrateForTest({
      files: filename,
      source: 'boosted'
    })

    expect(getReplacementsWarnings()).toEqual([
      'initialism class is deprecated in tests/source-boosted.html',
      'container class is deprecated in tests/source-boosted.html',
      'container-md class is deprecated in tests/source-boosted.html',
      'btn-close-white class is deprecated in tests/source-boosted.html',
      'btn-social class is deprecated in tests/source-boosted.html',
      'btn-sm class is deprecated in tests/source-boosted.html',
      'text-bg-secondary class is deprecated in tests/source-boosted.html',
      'The form using class \'was-validated\' in tests/source-boosted.html needs to be updated to use the new form validation style.',
      'The component using class \'alert\' in tests/source-boosted.html needs to be updated to use the new component DOM.',
      'alert-sm class has been removed in tests/source-boosted.html',
      'alert-dismissible class has been removed in tests/source-boosted.html',
      'The component using class \'badge\' in tests/source-boosted.html needs to be updated to use the new component DOM.',
      'The component using class \'breadcrumb-item\' in tests/source-boosted.html needs to be updated to use the new component DOM.',
      'The component using class \'tag\' in tests/source-boosted.html needs to be updated to use the new component DOM.',
      'form-check class is deprecated in tests/source-boosted.html',
      'form-select class is deprecated in tests/source-boosted.html',
      'placeholder-glow class is deprecated in tests/source-boosted.html'
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
