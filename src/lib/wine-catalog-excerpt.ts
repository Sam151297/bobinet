import { paragraphsFromDescription } from '@/lib/format-description'
import { getFrenchDescription } from '@/lib/get-description-fr'

/** Retire les blocs réservation pour un accroche plus lisible dans le catalogue. */
function stripBookingBlock(text: string): string {
  const parts = text.split(/\n\s*INFOS PRATIQUES\s*:/i)
  const head = parts[0]
  return (head ?? text).trim()
}

/** Texte court pour les cartes (landing / liste). */
export function excerptForCatalog(slug: string, maxChars: number): string | undefined {
  const raw = getFrenchDescription(slug)
  if (!raw) return undefined

  const cleaned = stripBookingBlock(raw)
  const paragraphs = paragraphsFromDescription(cleaned)
  let base =
    paragraphs[0] ??
    cleaned
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .join(' ')

  base = base.replace(/\s+/g, ' ').trim()
  if (!base) return undefined

  if (base.length <= maxChars) return base

  const slice = base.slice(0, maxChars - 1)
  let cut = slice.lastIndexOf(' ')
  if (cut < maxChars * 0.52) cut = maxChars - 1
  return `${slice.slice(0, cut).trimEnd()}…`
}
