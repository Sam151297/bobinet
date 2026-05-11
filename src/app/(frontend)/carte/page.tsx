import type { Metadata } from 'next'
import React from 'react'

import { DomainMap } from '@/components/DomainMap'

export const metadata: Metadata = {
  description: 'Accès au domaine Calvez Bobinet — 315 route de Montsoreau, 49400 Saumur.',
  title: 'Carte & accès',
}

export default function CartePage() {
  return (
    <>
      <header className="page-lede">
        <div className="page-lede__inner">
          <p className="page-lede__kicker">Localisation</p>
          <h1 className="page-lede__title">Nous rejoindre</h1>
          <p className="page-lede__text">
            Le domaine se situe sur la route de Montsoreau, à quelques minutes du cœur de Saumur. Repère sur la carte
            donnée à titre indicatif — confirmez avec votre GPS ou l’itinéraire Google.
          </p>
          <address className="page-lede__addr">
            <strong>Calvez Bobinet</strong>
            <br />
            315 route de Montsoreau
            <br />
            49400 Saumur
            <br />
            <a href="tel:+33241676250">02 41 67 62 50</a>
          </address>
        </div>
      </header>
      <section className="page-section page-section--map" aria-label="Carte interactive">
        <div className="page-section__inner page-section__inner--wide">
          <DomainMap variant="page" />
        </div>
      </section>
    </>
  )
}
