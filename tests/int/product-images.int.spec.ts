import { existsSync } from 'node:fs'
import { join } from 'node:path'

import { describe, expect, it } from 'vitest'

import { WINES, productImageUrl } from '@/data/wines'

/**
 * Garantit que chaque entrée du catalogue pointe vers un fichier réel
 * sous public/ (même chemins qu’en prod Next). Si ce test échoue, la prod
 * servira une 404 sur _next/image ou une image cassée.
 */
describe('catalog product images on disk', () => {
  it('every WINES entry resolves to an existing file under public/', () => {
    const cwd = process.cwd()
    const missing: string[] = []

    for (const wine of WINES) {
      const pathname = productImageUrl(wine).replace(/^\//, '')
      const absolute = join(cwd, 'public', pathname)

      if (!existsSync(absolute)) {
        missing.push(`${wine.slug}: missing public/${pathname}`)
      }
    }

    expect(missing, `Chaque vin doit avoir un fichier sous public/:\n${missing.join('\n')}`).toEqual([])
  })
})
