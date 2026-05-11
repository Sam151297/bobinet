import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function MaisonStory() {
  return (
    <section className="domaine domaine--page" id="histoire">
      <div className="domaine__inner">
        <figure className="domaine__figure">
          <div className="domaine__figure-frame">
            <Image
              alt="Vignoble et terroir"
              className="domaine__figure-img"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              src="/images/domaine.jpg"
            />
          </div>
          <figcaption className="domaine__figure-cap">Loire · tuffeau · vignes nobles</figcaption>
        </figure>
        <div className="domaine__text">
          <p className="domaine__kicker">La maison</p>
          <h1 className="domaine__title">Une signature vivante</h1>
          <p>
            Au cœur du Saumur-Champigny, nous cultivons le vivant : sols respectés, vendanges exigeantes,
            vinifications sans artifice. Chaque cuvée affirme son millésime et son terroir — jamais une recette
            standardisée.
          </p>
          <p>
            Nos caves troglodytiques accueillent le temps long de l&apos;élevage ; les vignes dessinent le paysage du
            tuffeau. Visites et dégustations prolongent cette rencontre avec la même générosité que sur la boutique
            officielle{' '}
            <a href="https://calvez-bobinet.fr/">calvez-bobinet.fr</a>.
          </p>
          <p className="domaine__cta">
            <Link className="btn btn--outline" href="/experiences">
              Les expériences
            </Link>
            <Link className="btn btn--solid" href="/contact">
              Nous prévenir d’une venue
            </Link>
          </p>
        </div>
      </div>
      <div className="domaine__divider" aria-hidden />
    </section>
  )
}
