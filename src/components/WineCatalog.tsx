'use client'

import React, { useMemo, useState } from 'react'

import type { Wine, WineKind } from '@/data/wines'
import { WINES } from '@/data/wines'
import { orderCatalogForDisplay } from '@/lib/wine-catalog-order'

import { WineCard } from './WineCard'

type Filter = 'all' | WineKind

const HEADING_DEFAULT = {
  kicker: 'La collection',
  title: 'Vins & expériences',
  lede:
    'Sélection alignée avec la boutique en ligne — chaque fiche reprend les résumés officiels du domaine.',
} as const

export function WineCatalog({
  wines = WINES,
  initialFilter = 'all',
  showFilterTabs = true,
  heading = {},
  sectionId = 'vins',
  forceWineProductImages = false,
}: {
  wines?: Wine[]
  initialFilter?: Filter
  showFilterTabs?: boolean
  heading?: Partial<{ kicker: string; title: string; lede: string }>
  sectionId?: string
  forceWineProductImages?: boolean
}) {
  const [filter, setFilter] = useState<Filter>(initialFilter)

  const orderedList = useMemo(() => {
    const base =
      filter === 'all' ? wines : wines.filter((w) => w.kind === (filter as WineKind))
    return orderCatalogForDisplay(base, filter)
  }, [filter, wines])

  const h = { ...HEADING_DEFAULT, ...heading }

  return (
    <section className="section section--wines" id={sectionId}>
      <div className="section--wines__intro">
        <div className="section--wines__intro-line" aria-hidden />
        <div className="section__head section__head--offset">
          <p className="section__kicker">{h.kicker}</p>
          <h2 className="section__title">{h.title}</h2>
          <p className="section__lede">{h.lede}</p>
          {showFilterTabs ? (
            <div className="filters" role="tablist">
              {(
                [
                  ['all', 'Tout'],
                  ['wine', 'Vins'],
                  ['experience', 'Expériences'],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  aria-pressed={filter === key}
                  className="filters__btn"
                  onClick={() => setFilter(key)}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className="wine-mosaic">
        {orderedList.map((w, index) => (
          <WineCard
            key={w.slug}
            forceWineProductImages={forceWineProductImages}
            imagePriority={index < 6}
            wine={w}
          />
        ))}
      </div>
    </section>
  )
}
