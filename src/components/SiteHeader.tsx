'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'

import { WINES } from '@/data/wines'

type NavItem = { href: string; label: string; match: (path: string) => boolean }

const EXPERIENCE_SLUGS = new Set(WINES.filter((w) => w.kind === 'experience').map((w) => w.slug))

function isWineDetailExperience(pathname: string) {
  const m = /^\/vins\/([^/]+)$/.exec(pathname)
  return m ? EXPERIENCE_SLUGS.has(m[1]) : false
}

const PRIMARY_NAV: NavItem[] = [
  { href: '/', label: 'Accueil', match: (path) => path === '/' },
  {
    href: '/vins',
    label: 'Vins',
    match: (path) =>
      path === '/vins' ||
      (/^\/vins\/.+/.test(path) && !isWineDetailExperience(path)),
  },
  {
    href: '/experiences',
    label: 'Expériences',
    match: (path) => path === '/experiences' || isWineDetailExperience(path),
  },
  { href: '/la-maison', label: 'La maison', match: (path) => path === '/la-maison' },
  { href: '/carte', label: 'Carte', match: (path) => path === '/carte' },
  { href: '/contact', label: 'Contact', match: (path) => path === '/contact' },
]

export function SiteHeader() {
  const pathname = usePathname() ?? '/'

  const activeHref = useMemo(() => PRIMARY_NAV.find((item) => item.match(pathname))?.href, [pathname])

  return (
    <header className="site-header">
      <Link className="site-header__mark" href="/">
        Calvez Bobinet
      </Link>
      <nav aria-label="Navigation principale" className="site-header__nav">
        {PRIMARY_NAV.map((item) => (
          <Link
            key={item.href}
            aria-current={item.href === activeHref ? 'page' : undefined}
            className={`site-header__tab${item.href === activeHref ? ' site-header__tab--active' : ''}`}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
        <Link className="site-header__accent site-header__tab" href="https://calvez-bobinet.fr/" rel="noopener noreferrer" target="_blank">
          Boutique
        </Link>
      </nav>
    </header>
  )
}
