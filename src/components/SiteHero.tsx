import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { HERO_IMAGE_PATH } from '@/data/wines'

export function SiteHero() {
  return (
    <section className="hero">
      <div className="hero__media">
        <Image
          alt=""
          className="hero__img"
          fill
          priority
          sizes="100vw"
          src={HERO_IMAGE_PATH}
        />
        <div className="hero__veil" />
      </div>
      <div className="hero__content">
        <p className="hero__kicker">Saumur · Vallée de la Loire</p>
        <h1 className="hero__title">
          Vins vivants,<br />
          <span className="hero__accent">racinés dans le tuffeau.</span>
        </h1>
        <p className="hero__lede">
          Vignerons naturels — élaborations sans artifice. Découvrez nos cuvées et nos visites comme sur la{' '}
          <Link href="https://calvez-bobinet.fr/" rel="noopener noreferrer" target="_blank">
            maison officielle
          </Link>
          .
        </p>
        <div className="hero__actions">
          <Link className="btn btn--solid" href="/#actualites">
            L’actualité
          </Link>
          <Link className="btn btn--outline" href="/vins">
            Les vins
          </Link>
          <Link className="btn btn--outline" href="/la-maison">
            La maison
          </Link>
        </div>
      </div>
    </section>
  )
}
