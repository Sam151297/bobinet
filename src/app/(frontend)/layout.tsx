import { Cormorant_Garamond, Manrope } from 'next/font/google'
import React from 'react'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

import './styles.css'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
})

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
})

export const metadata = {
  description:
    'Calvez Bobinet — vins vivants et vignerons naturels à Saumur. Visitez la maison et la boutique.',
  metadataBase: new URL('https://calvez-bobinet.fr'),
  title: {
    default: 'Calvez Bobinet — Vins vivants',
    template: '%s | Calvez Bobinet',
  },
}

export default function FrontendLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html className={`${display.variable} ${sans.variable}`} lang="fr">
      <body>
        <SiteHeader />
        <main className="site-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
