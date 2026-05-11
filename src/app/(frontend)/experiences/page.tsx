import type { Metadata } from 'next'
import React from 'react'

import { WineCatalog } from '@/components/WineCatalog'
import { WINES } from '@/data/wines'

export const metadata: Metadata = {
  description: 'Visites de cave, vignes et dégustations — Calvez Bobinet à Saumur.',
  title: 'Expériences',
}

export default function ExperiencesPage() {
  const experiences = WINES.filter((w) => w.kind === 'experience')

  return (
    <WineCatalog
      heading={{
        kicker: 'Rencontres',
        lede: 'Réservez avant de vous déplacer — surtout le week-end.',
        title: 'Visites & dégustations',
      }}
      initialFilter="experience"
      sectionId="catalogue-experiences"
      showFilterTabs={false}
      wines={experiences}
    />
  )
}
