import type { Metadata } from 'next'
import React from 'react'

import { WineCatalog } from '@/components/WineCatalog'
import { WINES } from '@/data/wines'

export const metadata: Metadata = {
  description: 'Cuvées Calvez Bobinet — vins naturels et vivants à Saumur.',
  title: 'Nos vins',
}

export default function VinsPage() {
  const wines = WINES.filter((w) => w.kind === 'wine')

  return (
    <WineCatalog
      heading={{
        kicker: 'Collection',
        lede: 'Chaque fiche reprend les textes et ton de la boutique officielle.',
        title: 'Nos cuvées',
      }}
      initialFilter="wine"
      sectionId="catalogue-vins"
      showFilterTabs={false}
      wines={wines}
    />
  )
}
