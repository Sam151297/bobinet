import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {
  productImageIsPublicBundled,
  productImageIsRemoveBgCutout,
  productImageUrl,
  type Wine,
} from '@/data/wines'
import { excerptForCatalog } from '@/lib/wine-catalog-excerpt'

function formatEUR(n: number) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n)
}

export function WineCard({
  wine,
  forceWineProductImages = false,
  imagePriority = false,
}: {
  wine: Wine
  forceWineProductImages?: boolean
  /** Premières cartes du catalogue : LCP / above-the-fold — eager + priority Next/Image. */
  imagePriority?: boolean
}) {
  const href = `/vins/${wine.slug}`
  const productSrc =
    forceWineProductImages && wine.kind === 'wine'
      ? `/images/products/${wine.slug}-removebg-preview.png`
      : productImageUrl(wine)
  const teaser = excerptForCatalog(wine.slug, wine.kind === 'wine' ? 188 : 210)
  const photoClass =
    wine.kind === 'wine' && productImageIsRemoveBgCutout(productSrc)
      ? 'wine-card__img bottle-matte__photo bottle-matte__photo--cutout'
      : 'wine-card__img bottle-matte__photo'
  const publicBundled = productImageIsPublicBundled(productSrc)

  if (wine.kind === 'experience') {
    return (
      <Link className="wine-card wine-card--experience" href={href}>
        <div className="wine-card__exp-bg">
          <Image
            alt=""
            className="wine-card__exp-bg-img"
            fill
            priority={false}
            sizes="100vw"
            src={productSrc}
            unoptimized={publicBundled}
          />
          <div className="wine-card__exp-veil" aria-hidden />
        </div>
        <div className="wine-card__exp-content">
          <span className="wine-card__exp-kicker">Expérience</span>
          <h3 className="wine-card__exp-title">{wine.nameFr}</h3>
          {teaser ? <p className="wine-card__exp-teaser">{teaser}</p> : null}
          <div className="wine-card__exp-row">
            <span className="wine-card__exp-price">{formatEUR(wine.priceEUR)}</span>
            <span className="wine-card__exp-cta">Découvrir</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link className="wine-card wine-card--wine" href={href}>
      <div className="wine-card__pedestal bottle-matte">
        <div className="bottle-matte__art" aria-hidden />
        <div className="bottle-matte__floor" aria-hidden />
        <div className="bottle-matte__shine" aria-hidden />
        <div className="wine-card__img-shell bottle-matte__shell">
          <div className="wine-card__img-fit">
            <Image
              alt=""
              className={photoClass}
              fill
              loading={imagePriority ? 'eager' : 'lazy'}
              priority={imagePriority}
              sizes="(max-width: 639px) 100vw, (max-width: 959px) 50vw, (max-width: 1279px) 34vw, 26vw"
              src={productSrc}
              unoptimized={publicBundled}
            />
          </div>
        </div>
      </div>
      <div className="wine-card__meta">
        <span className="wine-card__eyebrow">Cuvée</span>
        <h3 className="wine-card__name">{wine.nameFr}</h3>
        <div className="wine-card__row">
          {wine.year ? <span className="wine-card__year">{wine.year}</span> : <span />}
          <span className="wine-card__price">{formatEUR(wine.priceEUR)}</span>
        </div>
        {teaser ? <p className="wine-card__excerpt">{teaser}</p> : null}
      </div>
    </Link>
  )
}
