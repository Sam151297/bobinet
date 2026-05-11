import Link from 'next/link'
import React from 'react'

export function SiteFooter() {
  return (
    <footer className="site-footer site-footer--mega">
      <div className="site-footer__mega-inner">
        <div className="site-footer__brand-block">
          <Link className="site-footer__wordmark" href="/">
            Calvez&nbsp;Bobinet
          </Link>
          <p className="site-footer__wordmark-sub">Vins vivants — Saumur</p>
          <div className="site-footer__ghost-actions">
            <a className="site-footer__ghost-btn" href="mailto:contact@calvez-bobinet.fr">
              Contact par e-mail
            </a>
            <Link className="site-footer__ghost-btn site-footer__ghost-btn--alt" href="/contact">
              Nous joindre
            </Link>
          </div>
        </div>

        <div className="site-footer__columns" role="navigation" aria-label="Pied de page">
          <div className="site-footer__col">
            <p className="site-footer__col-heading">Nos vins</p>
            <ul className="site-footer__links">
              <li>
                <Link href="/vins">Voir toutes les cuvées</Link>
              </li>
              <li>
                <Link href="/vins/aunis-2025">Aunis</Link>
              </li>
              <li>
                <Link href="/vins/hanami-2024">Hanami</Link>
              </li>
              <li>
                <Link href="/vins/amateus-bobi-2020">Amateüs Bobi</Link>
              </li>
              <li>
                <Link href="https://calvez-bobinet.fr/" rel="noopener noreferrer" target="_blank">
                  Boutique en ligne →
                </Link>
              </li>
            </ul>
          </div>

          <div className="site-footer__col">
            <p className="site-footer__col-heading">Les visites</p>
            <ul className="site-footer__links">
              <li>
                <Link href="/experiences">Expériences</Link>
              </li>
              <li>
                <Link href="/vins/visite-de-cave">Visite de cave troglodytique</Link>
              </li>
              <li>
                <Link href="/vins/degustation-complete">Dégustation immersion</Link>
              </li>
              <li>
                <Link href="/vins/visite-de-nos-vignes">Visite des vignes</Link>
              </li>
              <li>
                <Link href="/contact">Horaires & réservations</Link>
              </li>
            </ul>
          </div>

          <div className="site-footer__col">
            <p className="site-footer__col-heading">La Maison</p>
            <ul className="site-footer__links">
              <li>
                <Link href="/la-maison">Notre signature</Link>
              </li>
              <li>
                <Link href="/#actualites">Actualités</Link>
              </li>
              <li>
                <Link href="/carte">Accès · carte</Link>
              </li>
              <li>
                <Link href="/contact">Relations presse · groupes</Link>
              </li>
            </ul>
          </div>

          <div className="site-footer__col">
            <p className="site-footer__col-heading">Mentions · conformité</p>
            <ul className="site-footer__links">
              <li>
                <a href="https://calvez-bobinet.fr/">CGV & mentions légales</a>
              </li>
              <li>
                <a href="https://www.openstreetmap.org/copyright" rel="noopener noreferrer" target="_blank">
                  Tuiles carte © OSM
                </a>
              </li>
            </ul>
            <address className="site-footer__address-mini">
              315 route de Montsoreau
              <br />
              49400 Saumur
              <br />
              <a href="tel:+33241676250">02&nbsp;41&nbsp;67&nbsp;62&nbsp;50</a>
            </address>
          </div>
        </div>
      </div>

      <div className="site-footer__base">
        <p className="site-footer__moderation">À consommer avec modération.</p>
      </div>
    </footer>
  )
}
