import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  description: 'Contact et réservations — Calvez Bobinet, vignerons à Saumur.',
  title: 'Contact',
}

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-page__inner">
        <p className="contact-page__kicker">Rendez-vous</p>
        <h1 className="contact-page__title">Visites & réservations</h1>
        <p className="contact-page__lede">
          Du lundi au vendredi — contactez-nous avant de vous déplacer, surtout pour un week-end. Pour les commandes
          et la livraison, la boutique en ligne reste le canal privilégié.
        </p>
        <address className="contact-page__addr">
          <span className="contact-page__addr-line">315 route de Montsoreau</span>
          <span className="contact-page__addr-line">49400 Saumur</span>
          <a className="contact-page__tel" href="tel:+33241676250">
            02 41 67 62 50
          </a>
          <a className="contact-page__mail" href="mailto:contact@calvez-bobinet.fr">
            contact@calvez-bobinet.fr
          </a>
        </address>
        <div className="contact-page__actions">
          <Link className="btn btn--solid" href="/carte">
            Voir la carte
          </Link>
          <a className="btn btn--outline" href="https://calvez-bobinet.fr/" rel="noopener noreferrer" target="_blank">
            Boutique en ligne
          </a>
        </div>
      </div>
    </section>
  )
}
