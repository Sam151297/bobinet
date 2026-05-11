'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

type BannerConf = {
  cta: string
  hint: string
  href: `/vins` | `/experiences`
  id: string
  image: string
  kicker: string
  sub: string
  title: string
  tone: 'wines' | 'experiences'
}

const BANNERS: ReadonlyArray<BannerConf> = [
  {
    cta: 'Découvrir les cuvées',
    hint: '(celle avec le goulot un peu rebelle sera peut-être votre préférée)',
    href: '/vins',
    id: 'wine',
    image: '/images/shop/wine-rack.jpg',
    kicker: 'Clin d’œil · vins',
    sub: 'Du glou-glou sérieux mais jamais guindé.',
    title: 'Nos étiquettes ne prétendent pas mieux vous connaître que votre palais.',
    tone: 'wines',
  },
  {
    cta: 'Réserver une visite',
    hint: '(la pierre garde ses secrets — on préfère vous les livrer nous-mêmes.)',
    href: '/experiences',
    id: 'exp',
    image: '/images/shop/cave-row.jpg',
    kicker: 'Clin d’œil · lieux',
    sub: 'Cave fraîche, anecdotes qui tiennent chaud.',
    title: 'On vous prend par les voûtes ; on vous rend près du verre.',
    tone: 'experiences',
  },
]

function ScrollBannerRow({
  b,
  reversed,
  priority,
}: {
  b: BannerConf
  priority: boolean
  reversed: boolean
}) {
  const rootRef = useRef<HTMLElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setSeen(true)
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <article
      ref={rootRef}
      className={`landing-banner landing-banner--${b.tone}${reversed ? ' landing-banner--reverse' : ''}${seen ? ' landing-banner--inview' : ''}`}
    >
      <div className="landing-banner__inner">
        <div className="landing-banner__text">
          <p className="landing-banner__kicker">{b.kicker}</p>
          <h2 className="landing-banner__title">{b.title}</h2>
          <p className="landing-banner__wink">{b.sub}</p>
          <p className="landing-banner__hint">{b.hint}</p>
          <Link className="landing-banner__cta" href={b.href}>
            {b.cta}
            <span aria-hidden className="landing-banner__cta-arrow">
              →
            </span>
          </Link>
        </div>
        <figure className="landing-banner__media">
          <Image
            alt=""
            aria-hidden
            className={`landing-banner__img${seen ? ' landing-banner__img--revealed' : ''}`}
            fill
            priority={priority}
            sizes="(max-width: 900px) 100vw, 50vw"
            src={b.image}
          />
          <span className="landing-banner__veil" aria-hidden />
          <span className={`landing-banner__gold-line landing-banner__gold-line--${b.tone}`} aria-hidden />
        </figure>
      </div>
    </article>
  )
}

export function LandingScrollBanners() {
  return (
    <section aria-label="Invitation vins et expériences" className="landing-banners">
      {BANNERS.map((b, i) => (
        <ScrollBannerRow key={b.id} b={b} priority={i === 0} reversed={i % 2 === 1} />
      ))}
    </section>
  )
}
