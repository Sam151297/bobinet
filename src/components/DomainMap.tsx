'use client'

import type { Map as LeafletMap } from 'leaflet'
import React, { useEffect, useRef } from 'react'

import 'leaflet/dist/leaflet.css'

/** Repère « Route de Montsoreau » (OSM), proche du domaine pour l’adresse affichée. */
const DOMAIN_LAT = 47.2418562
const DOMAIN_LNG = -0.0260906
const ZOOM = 14

export function DomainMap({ variant = 'embedded' }: { variant?: 'embedded' | 'page' }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let cancelled = false
    let resizeObserver: ResizeObserver | undefined

    void import('leaflet').then((LeafletNamespace) => {
      const L = LeafletNamespace.default
      if (cancelled || !containerRef.current) return

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/leaflet/marker-icon-2x.png',
        iconUrl: '/leaflet/marker-icon.png',
        shadowUrl: '/leaflet/marker-shadow.png',
      })

      const map = L.map(el, {
        scrollWheelZoom: false,
      }).setView([DOMAIN_LAT, DOMAIN_LNG], ZOOM)

      mapRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map)

      L.marker([DOMAIN_LAT, DOMAIN_LNG])
        .addTo(map)
        .bindPopup('<strong>Calvez Bobinet</strong><br>315 route de Montsoreau, 49400 Saumur')

      resizeObserver = new ResizeObserver(() => {
        map.invalidateSize()
      })
      resizeObserver.observe(el)
      queueMicrotask(() => map.invalidateSize())
    })

    return () => {
      cancelled = true
      resizeObserver?.disconnect()
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  const query = encodeURIComponent('Calvez Bobinet, 315 route de Montsoreau, 49400 Saumur')

  const rootCls = variant === 'page' ? 'domain-map domain-map--page' : 'domain-map'

  return (
    <div className={rootCls}>
      <div
        ref={containerRef}
        className={`domain-map__canvas${variant === 'page' ? ' domain-map__canvas--page' : ''}`}
        role="presentation"
      />
      <div className={`domain-map__actions ${variant === 'page' ? 'domain-map__actions--page' : ''}`}>
        <a
          className={`domain-map__link ${variant === 'page' ? 'domain-map__link--page' : ''}`}
          href={`https://www.openstreetmap.org/?mlat=${DOMAIN_LAT}&mlon=${DOMAIN_LNG}#map=${ZOOM}/${DOMAIN_LAT}/${DOMAIN_LNG}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          OSM plein écran
        </a>
        <a
          className={`domain-map__link ${variant === 'page' ? 'domain-map__link--page' : ''}`}
          href={`https://www.google.com/maps/search/?api=1&query=${query}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Google Maps — itinéraire
        </a>
      </div>
      <p className={`domain-map__note${variant === 'page' ? ' domain-map__note--page' : ''}`}>
        Tuiles © OpenStreetMap · repère indicative le long de la route de Montsoreau · 49400 Saumur.
      </p>
    </div>
  )
}
