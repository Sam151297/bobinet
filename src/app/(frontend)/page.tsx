import Link from 'next/link'
import React from 'react'

import { LandingScrollBanners } from '@/components/LandingScrollBanners'
import { SiteHero } from '@/components/SiteHero'
import { NEWS_ITEMS_FR } from '@/news.fr'

const HUB_LINKS = [
  { href: '/vins', label: 'Vins', sub: 'Cuvées & millésimes' },
  { href: '/experiences', label: 'Expériences', sub: 'Cave, vignes, dégustations' },
  { href: '/carte', label: 'Carte', sub: 'Accès au domaine' },
  { href: '/la-maison', label: 'La maison', sub: 'Terroir & engagement' },
] as const

export default function HomePage() {
  return (
    <>
      <SiteHero />
      <LandingScrollBanners />
      <section className="actualites" id="actualites">
        <div className="actualites__inner">
          <div className="actualites__head">
            <p className="actualites__kicker">Actualités</p>
            <h2 className="actualites__title">Sur le domaine</h2>
            <p className="actualites__lede">Nouvelles de la maison, des visites et des cuvées — complètes sur la boutique.</p>
          </div>
          <ul className="actualites__list">
            {NEWS_ITEMS_FR.map((item) => (
              <li key={item.id} className="actualites__card">
                <p className="actualites__card-kicker">{item.dateLabel}</p>
                <h3 className="actualites__card-title">{item.title}</h3>
                <p className="actualites__card-excerpt">{item.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="hub" id="explorer" aria-label="Sommaire du site">
        <div className="hub__inner">
          <h2 className="hub__title">Explorer Calvez&nbsp;Bobinet</h2>
          <ul className="hub__tiles">
            {HUB_LINKS.map(({ href, label, sub }) => (
              <li key={href} className="hub__tile">
                <Link className="hub__tile-link" href={href}>
                  <span className="hub__tile-label">{label}</span>
                  <span className="hub__tile-sub">{sub}</span>
                  <span className="hub__tile-arrow" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
