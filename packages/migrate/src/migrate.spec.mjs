import fs from 'node:fs/promises'
import {
  describe, it, expect, afterEach
} from 'vitest'
import { migrate } from './migrate.mjs'
import { clearWarnings, getReplacementsWarnings } from './utils/warnings.mjs'

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
    clearWarnings()
    writtenFiles.clear()
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

  it('should keep warning of removal', async () => {
    const filename = 'tests/source-boosted.html'
    await decoratedMigrateForTest({
      files: filename,
      source: 'boosted'
    })

    expect(getReplacementsWarnings()).toEqual([
      'initialism class is deprecated in tests/source-boosted.html. See: https://web.unified-design-system.orange.com/docs/foundation/typography',
      'container class is deprecated in tests/source-boosted.html. See: https://web.unified-design-system.orange.com/docs/layout/containers',
      'container-md class is deprecated in tests/source-boosted.html. See: https://web.unified-design-system.orange.com/docs/layout/containers',
      'bg-supporting-purple class is deprecated in tests/source-boosted.html. See: https://web.unified-design-system.orange.com/docs/utilities/background',
      'The utility class \'bg-surface-brand-primary\' in tests/source-boosted.html needs to have the right `data-bs-theme` attached. See: https://web.unified-design-system.orange.com/docs/utilities/background',
      'The utility class \'bg-supporting-purple\' in tests/source-boosted.html needs to have the right `data-bs-theme` attached. See: https://web.unified-design-system.orange.com/docs/utilities/background',
      'The utility class \'bg-surface-status-info-emphasized\' in tests/source-boosted.html needs to have the right `data-bs-theme` attached. See: https://web.unified-design-system.orange.com/docs/utilities/background',
      'The utility class \'bg-inverse-high\' in tests/source-boosted.html needs to have the right `data-bs-theme` attached. See: https://web.unified-design-system.orange.com/docs/utilities/background',
      'The utility class \'bg-secondary\' in tests/source-boosted.html needs to have the right `data-bs-theme` attached. See: https://web.unified-design-system.orange.com/docs/utilities/background',
      'text-bg-secondary class is deprecated in tests/source-boosted.html.',
      'link-primary class is deprecated in tests/source-boosted.html. See: https://web.unified-design-system.orange.com/docs/components/links',
      'The component using class \'alert\' in tests/source-boosted.html needs to be updated to use the new component DOM. See: https://web.unified-design-system.orange.com/docs/components/alerts',
      'alert-sm class has been removed in tests/source-boosted.html. See: https://web.unified-design-system.orange.com/docs/components/alerts#inline-alert',
      'alert-dismissible class has been removed in tests/source-boosted.html. See: https://web.unified-design-system.orange.com/docs/components/alerts#inline-alert',
      'The component using class \'breadcrumb-item\' in tests/source-boosted.html needs to be updated to use the new component DOM. See: https://web.unified-design-system.orange.com/docs/components/breadcrumb',
      'form-check class is deprecated in tests/source-boosted.html. See: https://web.unified-design-system.orange.com/docs/components/checkbox',
      'form-select class is deprecated in tests/source-boosted.html. See: https://web.unified-design-system.orange.com/docs/components/select-input',
      'The badge component using class \'badge\' in tests/source-boosted.html needs to be updated to use the new component DOM. See: https://web.unified-design-system.orange.com/docs/components/badges',
      'btn-close-white class has been removed in tests/source-boosted.html.',
      'btn-social class is deprecated in tests/source-boosted.html. See: https://web.unified-design-system.orange.com/docs/components/buttons#button',
      'btn-sm class is deprecated in tests/source-boosted.html. See: https://web.unified-design-system.orange.com/docs/components/buttons#button',
      'placeholder-glow class is deprecated in tests/source-boosted.html. See: https://web.unified-design-system.orange.com/docs/components/skeleton',
      'The tag component using class \'tag\' in tests/source-boosted.html needs to be updated to use the new component DOM. See: https://web.unified-design-system.orange.com/docs/components/tags#tag',
      'ratio class is deprecated in tests/source-boosted.html.',
      'The form using class \'was-validated\' in tests/source-boosted.html needs to be updated to use the new form validation style.'
    ])
  })
})
