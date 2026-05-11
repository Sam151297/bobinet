import Link from 'next/link'
import React from 'react'

export default function WineNotFound() {
  return (
    <div className="not-found">
      <p className="not-found__kicker">404</p>
      <h1 className="not-found__title">Cuvée introuvable</h1>
      <p className="not-found__text">Ce vin n’est pas dans notre cave numérique.</p>
      <Link className="btn btn--solid" href="/vins">
        Retour à la liste
      </Link>
    </div>
  )
}
