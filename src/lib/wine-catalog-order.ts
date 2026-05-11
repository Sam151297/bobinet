import type { Wine, WineKind } from '@/data/wines'
import { WINES } from '@/data/wines'

export type CatalogFilter = 'all' | WineKind

/** Ordre catalogue officiel des expériences (début → milieu → fin). */
function experienceSortKey(slug: string): number {
  const i = WINES.findIndex((w) => w.slug === slug)
  return i < 0 ? 999 : i
}

/**
 * Une expérience en tête, une au milieu, une en fin ; les vins remplissent l’intervalle.
 * Filtre « vins » / « expériences » : pas de mélange.
 */
export function orderCatalogForDisplay(items: Wine[], filter: CatalogFilter): Wine[] {
  if (filter === 'wine') {
    return items.filter((w) => w.kind === 'wine')
  }
  if (filter === 'experience') {
    return [...items].filter((w) => w.kind === 'experience').sort((a, b) => experienceSortKey(a.slug) - experienceSortKey(b.slug))
  }

  const wines = items.filter((w) => w.kind === 'wine')
  const experiences = items
    .filter((w) => w.kind === 'experience')
    .sort((a, b) => experienceSortKey(a.slug) - experienceSortKey(b.slug))

  if (experiences.length === 0) return wines
  if (wines.length === 0) return experiences

  const n = wines.length

  if (experiences.length === 1) {
    const mid = Math.floor(n / 2)
    return [...wines.slice(0, mid), experiences[0], ...wines.slice(mid)]
  }

  if (experiences.length === 2) {
    const mid = Math.floor(n / 2)
    return [experiences[0], ...wines.slice(0, mid), experiences[1], ...wines.slice(mid)]
  }

  const e0 = experiences[0]
  const e1 = experiences[1]
  const eLast = experiences[experiences.length - 1]
  const middleOnes = experiences.slice(2, -1)

  const i1 = Math.max(1, Math.floor(n / 3))
  const i2 = Math.max(i1 + 1, Math.floor((2 * n) / 3))

  const chunk1 = wines.slice(0, i1)
  const chunk2 = wines.slice(i1, i2)
  const chunk3 = wines.slice(i2)

  if (middleOnes.length === 0) {
    return [e0, ...chunk1, e1, ...chunk2, eLast, ...chunk3]
  }

  return [e0, ...chunk1, e1, ...middleOnes, ...chunk2, eLast, ...chunk3]
}
