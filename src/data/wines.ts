/** Catalogue : packshots PNG — vins `{slug}-removebg-preview.png`, expériences `{slug}.png`; surcharge possible via `productImage`. */

export type WineKind = 'wine' | 'experience'

/** Fond « piédestal » sous la bouteille — dégradé cohérent pour éviter l’effet « image coupée ». */
export type WineTone =
  | 'rouge'
  | 'blanc'
  | 'orange'
  | 'rose'
  | 'bulles'
  | 'experience'

export type Wine = {
  slug: string
  nameFr: string
  nameEn: string
  year?: string
  priceEUR: number
  kind: WineKind
  tone: WineTone
  /** Chemin sous `public/` si le fichier ne suit pas la convention par défaut. */
  productImage?: string
}

/** Image produit utilisée dans la boutique / fiches. */
export function productImageUrl(wine: Wine): string {
  if (wine.productImage) return wine.productImage
  if (wine.kind === 'experience') return `/images/products/${wine.slug}.png`
  return `/images/products/${wine.slug}-removebg-preview.png`
}

/** Détourage remove.bg : ne pas utiliser multiply sur la photo bouteille. */
export function productImageIsRemoveBgCutout(path: string): boolean {
  return path.toLowerCase().includes('removebg-preview')
}

export const HERO_IMAGE_PATH = '/images/shop/wine-rack.jpg'

export const WINES: Wine[] = [
  {
    slug: 'amateus-bobi-2020',
    nameFr: 'Amateüs Bobi',
    nameEn: 'Amateüs Bobi',
    year: '2020',
    priceEUR: 25,
    kind: 'wine',
    tone: 'rouge',
  },
  {
    slug: 'aunis-2025',
    nameFr: 'Aunis',
    nameEn: 'Aunis',
    year: '2025',
    priceEUR: 15,
    kind: 'wine',
    tone: 'rouge',
  },
  {
    slug: 'degustation-complete',
    nameFr: 'Dégustation immersion',
    nameEn: 'Immersive tasting',
    priceEUR: 15,
    kind: 'experience',
    tone: 'experience',
  },
  {
    slug: 'echalier-2018',
    nameFr: 'Échalier',
    nameEn: 'Échalier',
    year: '2018',
    priceEUR: 46,
    kind: 'wine',
    tone: 'rouge',
  },
  {
    slug: 'hanami-2024',
    nameFr: 'Hanami',
    nameEn: 'Hanami',
    year: '2024',
    priceEUR: 16,
    kind: 'wine',
    tone: 'rouge',
  },
  {
    slug: 'ida-2020',
    nameFr: 'IDA',
    nameEn: 'IDA',
    year: '2020',
    priceEUR: 35,
    kind: 'wine',
    tone: 'orange',
  },
  {
    slug: 'ipanema-2025',
    nameFr: 'IPANEMA',
    nameEn: 'IPANEMA',
    year: '2025',
    priceEUR: 13,
    kind: 'wine',
    tone: 'rouge',
  },
  {
    slug: 'les-gruches-2021',
    nameFr: 'Les Gruches',
    nameEn: 'Les Gruches',
    year: '2021',
    priceEUR: 35,
    kind: 'wine',
    tone: 'blanc',
  },
  {
    slug: 'les-iles-rouge-2024',
    nameFr: 'Les îles rouge',
    nameEn: 'Les îles rouge',
    year: '2024',
    priceEUR: 13,
    kind: 'wine',
    tone: 'rouge',
  },
  {
    slug: 'les-landes-2020',
    nameFr: 'Les Landes',
    nameEn: 'Les Landes',
    year: '2020',
    priceEUR: 30,
    kind: 'wine',
    tone: 'rouge',
  },
  {
    slug: 'orangette-2024',
    nameFr: 'ORANGETTE',
    nameEn: 'ORANGETTE',
    year: '2024',
    priceEUR: 17,
    kind: 'wine',
    tone: 'blanc',
  },
  {
    slug: 'piak-rose-2025',
    nameFr: 'Piak ! rosé',
    nameEn: 'Piak ! rosé',
    year: '2025',
    priceEUR: 12,
    kind: 'wine',
    tone: 'rose',
  },
  {
    slug: 'piak-blanc-2025',
    nameFr: 'PIAK! blanc',
    nameEn: 'PIAK! white',
    year: '2025',
    priceEUR: 12,
    kind: 'wine',
    tone: 'blanc',
  },
  {
    slug: 'piak-rouge-2025',
    nameFr: 'PIAK! rouge',
    nameEn: 'PIAK! red',
    year: '2025',
    priceEUR: 12,
    kind: 'wine',
    tone: 'rouge',
  },
  {
    slug: 'poil-de-lievre-2025',
    nameFr: 'Poil de Lièvre',
    nameEn: 'Poil de Lièvre',
    year: '2025',
    priceEUR: 17,
    kind: 'wine',
    tone: 'blanc',
  },
  {
    slug: 'ruben-2021',
    nameFr: 'Ruben',
    nameEn: 'Ruben',
    year: '2021',
    priceEUR: 19,
    kind: 'wine',
    tone: 'rouge',
  },
  {
    slug: 'summertime-le-ciel-est-bleu-2023',
    nameFr: 'Summertime — Le Ciel est bleu',
    nameEn: 'Summertime — The Sky is Blue',
    year: '2023',
    priceEUR: 17,
    kind: 'wine',
    tone: 'bulles',
  },
  {
    slug: 'summertime-le-temps-est-bon-2023',
    nameFr: 'Summertime — Le temps est bon',
    nameEn: 'Summertime — Good Times',
    year: '2023',
    priceEUR: 17,
    kind: 'wine',
    tone: 'bulles',
  },
  {
    slug: 'visite-de-nos-vignes',
    nameFr: 'Visite de nos vignes',
    nameEn: 'Vineyard visit',
    priceEUR: 12,
    kind: 'experience',
    tone: 'experience',
  },
  {
    slug: 'visite-de-cave',
    nameFr: 'Visite de notre cave troglodyte',
    nameEn: 'Troglodyte cellar visit',
    priceEUR: 13,
    kind: 'experience',
    tone: 'experience',
  },
]

export function getWineBySlug(slug: string): Wine | undefined {
  return WINES.find((w) => w.slug === slug)
}
