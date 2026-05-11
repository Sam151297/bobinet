import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

import { WINES, productImageIsRemoveBgCutout, productImageUrl } from '@/data/wines'
import { paragraphsFromDescription } from '@/lib/format-description'
import { getFrenchDescription } from '@/lib/get-description-fr'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return WINES.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const wine = WINES.find((w) => w.slug === slug)
  if (!wine) return {}
  const title = `${wine.nameFr}${wine.year ? ` ${wine.year}` : ''}`
  return {
    description: `${title} — Calvez Bobinet, vignerons à Saumur.`,
    title,
  }
}

function formatEUR(n: number) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n)
}

export default async function WinePage(props: Props) {
  const { slug } = await props.params
  const wine = WINES.find((w) => w.slug === slug)
  if (!wine) notFound()

  const body = getFrenchDescription(wine.slug)
  const productSrc = productImageUrl(wine)
  const detailPhotoClass = productImageIsRemoveBgCutout(productSrc)
    ? 'detail-pedestal__img bottle-matte__photo bottle-matte__photo--cutout'
    : 'detail-pedestal__img bottle-matte__photo'

  return (
    <article className="detail">
      <div className="detail__masthead">
        <Link className="detail__back" href={wine.kind === 'experience' ? '/experiences' : '/vins'}>
          ← {wine.kind === 'experience' ? 'Les expériences' : 'Les vins'}
        </Link>
      </div>
      <div className={`detail__grid ${wine.kind === 'experience' ? 'detail__grid--experience' : ''}`}>
        <div className="detail__visual">
          {wine.kind === 'experience' ? (
            <div className="detail-exp-hero">
              <Image
                alt=""
                className="detail-exp-hero__img"
                fill
                priority
                sizes="(max-width: 979px) 100vw, 50vw"
                src={productSrc}
              />
              <div className="detail-exp-hero__veil" aria-hidden />
            </div>
          ) : (
            <div className="detail-pedestal bottle-matte">
              <div className="bottle-matte__art" aria-hidden />
              <div className="bottle-matte__floor" aria-hidden />
              <div className="bottle-matte__shine" aria-hidden />
              <div className="detail-pedestal__shell bottle-matte__shell">
                <Image
                  alt=""
                  className={detailPhotoClass}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src={productSrc}
                  priority
                />
              </div>
            </div>
          )}
        </div>
        <div className="detail__copy">
          <p className="detail__kind">
            {wine.kind === 'experience' ? 'Expérience' : 'Vin'}
            {wine.year ? ` · ${wine.year}` : ''}
          </p>
          <h1 className="detail__title">{wine.nameFr}</h1>
          <p className="detail__subtitle">{wine.nameEn}</p>
          <p className="detail__price">{formatEUR(wine.priceEUR)}</p>
          {body ? (
            <div className="detail__body">
              {paragraphsFromDescription(body).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ) : (
            <p className="detail__fallback">La fiche descriptive arrive prochainement.</p>
          )}
          <DetailActions />
        </div>
      </div>
    </article>
  )
}

function DetailActions() {
  return (
    <div className="detail__actions">
      <a className="btn btn--solid" href="https://calvez-bobinet.fr/" rel="noopener noreferrer" target="_blank">
        Boutique en ligne
      </a>
      <Link className="btn btn--outline" href="/contact">
        Contact
      </Link>
    </div>
  )
}
