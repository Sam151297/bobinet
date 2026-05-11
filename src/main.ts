/**
 * Ancien prototype statique (non utilisé par Next.js). Les `photo` sont une rotation
 * de JPG `/images/shop/*` — aucun lien 1:1 avec les cuvées (effet « images au hasard »).
 * Boutique actuelle : routes `/vins` et `pnpm dev`, images via `productImageUrl()` dans `./data/wines`.
 */
import './style.css'

type Lang = 'fr' | 'en'

type Kind = 'wine' | 'experience'

type Item = {
  id: string
  kind: Kind
  /** @deprecated Prototype : stock photos; le site Next utilise les packshots sous /images/products/. */
  photo: string
  nameFr: string
  nameEn: string
  year?: string
  price: number
}

const items: Item[] = [
  {
    id: '1',
    kind: 'wine',
    photo: '/images/shop/wine-table.jpg',
    nameFr: 'Amateüs Bobi',
    nameEn: 'Amateüs Bobi',
    year: '2020',
    price: 25,
  },
  {
    id: '2',
    kind: 'wine',
    photo: '/images/shop/wine-rack.jpg',
    nameFr: 'Aunis',
    nameEn: 'Aunis',
    year: '2025',
    price: 15,
  },
  {
    id: '3',
    kind: 'experience',
    photo: '/images/shop/wine-glass.jpg',
    nameFr: 'Dégustation immersion',
    nameEn: 'Immersive tasting',
    price: 15,
  },
  {
    id: '4',
    kind: 'wine',
    photo: '/images/shop/cave-row.jpg',
    nameFr: 'Échalier',
    nameEn: 'Échalier',
    year: '2018',
    price: 46,
  },
  {
    id: '5',
    kind: 'wine',
    photo: '/images/shop/vineyard-wide.jpg',
    nameFr: 'Hanami',
    nameEn: 'Hanami',
    year: '2024',
    price: 16,
  },
  {
    id: '6',
    kind: 'wine',
    photo: '/images/shop/cellar-soft.jpg',
    nameFr: 'IDA',
    nameEn: 'IDA',
    year: '2020',
    price: 35,
  },
  {
    id: '7',
    kind: 'wine',
    photo: '/images/shop/wine-table.jpg',
    nameFr: 'IPANEMA',
    nameEn: 'IPANEMA',
    year: '2025',
    price: 13,
  },
  {
    id: '8',
    kind: 'wine',
    photo: '/images/shop/wine-rack.jpg',
    nameFr: 'Les Gruches',
    nameEn: 'Les Gruches',
    year: '2021',
    price: 35,
  },
  {
    id: '9',
    kind: 'wine',
    photo: '/images/shop/wine-glass.jpg',
    nameFr: 'Les îles rouge',
    nameEn: 'Les îles rouge',
    year: '2024',
    price: 13,
  },
  {
    id: '10',
    kind: 'wine',
    photo: '/images/shop/cave-row.jpg',
    nameFr: 'Les Landes',
    nameEn: 'Les Landes',
    year: '2020',
    price: 30,
  },
  {
    id: '11',
    kind: 'wine',
    photo: '/images/shop/vineyard-wide.jpg',
    nameFr: 'ORANGETTE',
    nameEn: 'ORANGETTE',
    year: '2024',
    price: 17,
  },
  {
    id: '12',
    kind: 'wine',
    photo: '/images/shop/cellar-soft.jpg',
    nameFr: 'Piak ! rosé',
    nameEn: 'Piak ! rosé',
    year: '2025',
    price: 12,
  },
  {
    id: '13',
    kind: 'wine',
    photo: '/images/shop/wine-table.jpg',
    nameFr: 'PIAK! blanc',
    nameEn: 'PIAK! white',
    year: '2025',
    price: 12,
  },
  {
    id: '14',
    kind: 'wine',
    photo: '/images/shop/wine-rack.jpg',
    nameFr: 'PIAK! rouge',
    nameEn: 'PIAK! red',
    year: '2025',
    price: 12,
  },
  {
    id: '15',
    kind: 'wine',
    photo: '/images/shop/wine-glass.jpg',
    nameFr: 'Poil de Lièvre',
    nameEn: 'Poil de Lièvre',
    year: '2025',
    price: 17,
  },
  {
    id: '16',
    kind: 'wine',
    photo: '/images/shop/cave-row.jpg',
    nameFr: 'Ruben',
    nameEn: 'Ruben',
    year: '2021',
    price: 19,
  },
  {
    id: '17',
    kind: 'wine',
    photo: '/images/shop/vineyard-wide.jpg',
    nameFr: 'Summertime — Le Ciel est bleu',
    nameEn: 'Summertime — The Sky is Blue',
    year: '2023',
    price: 17,
  },
  {
    id: '18',
    kind: 'wine',
    photo: '/images/shop/cellar-soft.jpg',
    nameFr: 'Summertime — Le temps est bon',
    nameEn: 'Summertime — Good Times',
    year: '2023',
    price: 17,
  },
  {
    id: '19',
    kind: 'experience',
    photo: '/images/shop/vineyard-wide.jpg',
    nameFr: 'Visite de nos vignes',
    nameEn: 'Vineyard visit',
    price: 12,
  },
  {
    id: '20',
    kind: 'experience',
    photo: '/images/shop/cellar-soft.jpg',
    nameFr: 'Visite de notre cave troglodyte',
    nameEn: 'Troglodyte cellar visit',
    price: 13,
  },
]

const copy: Record<
  Lang,
  {
    skip: string
    navDomaine: string
    navShop: string
    navContact: string
    heroEyebrow: string
    heroTitle: string
    heroTitle2: string
    heroLead: string
    ctaShop: string
    ctaDomaine: string
    domaineTitle: string
    domaineP1: string
    domaineP2: string
    domaineHighlight: string
    shopTitle: string
    shopIntro: string
    filterAll: string
    filterWine: string
    filterExp: string
    shopNote: string
    tagWine: string
    tagExp: string
    yearLabel: string
    contactTitle: string
    contactAddress: string
    contactPhone: string
    contactHours: string
    contactHoursText: string
    footerRights: string
    footerCgv: string
    footerLegal: string
    galleryTitle: string
    photoCredit: string
  }
> = {
  fr: {
    skip: 'Aller au contenu',
    navDomaine: 'Domaine',
    navShop: 'Boutique',
    navContact: 'Contact',
    heroEyebrow: 'Saumur · Loire',
    heroTitle: 'Vins vivants,',
    heroTitle2: 'racinés en terre de tuffeau.',
    heroLead:
      'Vignerons naturels au cœur de l’Anjou–Saumur : cuvées sincères, visites et dégustations dans notre paysage de vignes et de caves.',
    ctaShop: 'Voir la boutique',
    ctaDomaine: 'Le domaine',
    domaineTitle: 'Une maison vivante',
    domaineP1:
      'Chez Calvez Bobinet, le vin naît dans le respect du vivant : sols vivants, vendanges précises, élaborations sans artifice. Nos bouteilles racontent le millésime et le lieu — jamais la recette industrielle.',
    domaineP2:
      'Entre vignes nobles et caves troglodytiques du Saumur-Champigny et alentours, nous accueillons amateurs curieux et professionnels pour partager une viticulture exigeante mais joyeuse.',
    domaineHighlight:
      'Découvrez nos cuvées en ligne ou sur place ; les visites permettent d’explorer le vignoble puis de descendre dans la fraîcheur de la craie.',
    shopTitle: 'Boutique',
    shopIntro:
      'Une sélection de nos bouteilles et expériences. Les prix reflètent la boutique en ligne de référence — commande finale sur votre canal habituel.',
    filterAll: 'Tout',
    filterWine: 'Vins',
    filterExp: 'Expériences',
    shopNote: 'E-commerce inchangé : ce site présente la gamme avec un parcours plus lisible.',
    tagWine: 'Vin',
    tagExp: 'Visite · dégustation',
    yearLabel: 'Millésime',
    contactTitle: 'Nous rejoindre',
    contactAddress: 'Adresse',
    contactPhone: 'Téléphone',
    contactHours: 'Infos',
    contactHoursText: 'Rendez-vous et horaires selon saison — nous contacter avant une visite.',
    footerRights: 'Calvez Bobinet — Vins vivants',
    footerCgv: 'CGV',
    footerLegal: 'Mentions légales',
    galleryTitle: 'Le domaine en images',
    photoCredit: 'Photographies d’illustration — Unsplash.',
  },
  en: {
    skip: 'Skip to content',
    navDomaine: 'The estate',
    navShop: 'Shop',
    navContact: 'Contact',
    heroEyebrow: 'Saumur · Loire Valley',
    heroTitle: 'Living wines',
    heroTitle2: 'rooted in tuffeau stone.',
    heroLead:
      'Natural winegrowers in the heart of Anjou–Saumur : honest wines, cellar visits and tastings among vines and troglodyte caves.',
    ctaShop: 'Browse wines',
    ctaDomaine: 'The estate',
    domaineTitle: 'A living winery',
    domaineP1:
      'At Calvez Bobinet, wine grows from respect for living soils and careful harvesting, crafted without industrial shortcuts. Every bottle speaks of vintage and terroir.',
    domaineP2:
      'Between noble vineyards and limestone cellars near Saumur-Champigny, we welcome curious drinkers and trade to share meticulous yet joyful farming.',
    domaineHighlight:
      'Explore our cuvées online or visit us ; tours weave through the vines and down into cool chalk caves.',
    shopTitle: 'Shop',
    shopIntro:
      'A curated list of bottles and visits. Pricing reflects our reference storefront — finalize orders via your usual channel.',
    filterAll: 'All',
    filterWine: 'Wines',
    filterExp: 'Experiences',
    shopNote: 'Checkout stays on your existing platform ; this redesign focuses on clarity and brand.',
    tagWine: 'Wine',
    tagExp: 'Visit · tasting',
    yearLabel: 'Vintage',
    contactTitle: 'Visit us',
    contactAddress: 'Address',
    contactPhone: 'Phone',
    contactHours: 'Hours',
    contactHoursText:
      'Appointments vary by season — please get in touch before travelling.',
    footerRights: 'Calvez Bobinet — Living wines',
    footerCgv: 'Terms of sale',
    footerLegal: 'Legal notice',
    galleryTitle: 'Images from the vines',
    photoCredit: 'Illustration photography — Unsplash.',
  },
}

function formatPriceEUR(n: number, lang: Lang): string {
  return new Intl.NumberFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    style: 'currency',
    currency: 'EUR',
  }).format(n)
}

type Filter = 'all' | Kind

let lang: Lang = 'fr'
let filter: Filter = 'all'

function shellHTML(): string {
  return `
  <a class="skip-link" href="#main" data-i18n="skip"></a>
  <header class="site-header">
    <div class="header-inner">
      <a class="logo" href="#">Calvez Bobinet</a>
      <nav class="nav-desktop" aria-label="Principal">
        <a href="#domaine" data-i18n="navDomaine"></a>
        <a href="#boutique" data-i18n="navShop"></a>
        <a href="#contact" data-i18n="navContact"></a>
      </nav>
      <div class="header-controls">
        <div class="lang-switch" role="group" aria-label="Langue">
          <button type="button" data-lang="fr" aria-pressed="true">FR</button>
          <button type="button" data-lang="en" aria-pressed="false">EN</button>
        </div>
        <button type="button" class="menu-toggle" aria-label="Menu" aria-expanded="false">
          <span></span>
        </button>
      </div>
    </div>
    <nav class="mobile-panel" id="mobile-panel" data-open="false" aria-label="Menu mobile">
      <a href="#domaine" data-i18n="navDomaine"></a>
      <a href="#boutique" data-i18n="navShop"></a>
      <a href="#contact" data-i18n="navContact"></a>
    </nav>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-media" aria-hidden="true">
        <img
          class="hero-media__img"
          src="/images/shop/wine-rack.jpg"
          alt=""
          width="1400"
          height="1400"
          fetchpriority="high"
          decoding="async"
        />
        <div class="hero-media__veil"></div>
      </div>
      <div class="container hero-inner">
        <p class="eyebrow" data-i18n="heroEyebrow"></p>
        <h1 id="hero-title" class="hero-title" data-i18n-ignore>
          <!-- title lines injected -->
        </h1>
        <p class="hero-lead" data-i18n="heroLead"></p>
        <div class="hero-actions">
          <a href="#boutique" class="btn btn-primary" data-i18n="ctaShop"></a>
          <a href="#domaine" class="btn btn-ghost" data-i18n="ctaDomaine"></a>
        </div>
      </div>
    </section>

    <section id="domaine" class="domaine">
      <div class="container split">
        <div class="split-visual" role="presentation" aria-hidden="true">
          <img
            class="split-visual__img"
            src="/images/domaine.jpg"
            alt=""
            width="1200"
            height="1500"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="split-body">
          <h2 class="section-title" data-i18n="domaineTitle"></h2>
          <p data-i18n="domaineP1"></p>
          <p data-i18n="domaineP2"></p>
          <p><strong data-i18n="domaineHighlight"></strong></p>
        </div>
      </div>
    </section>

    <section id="boutique" class="boutique">
      <div class="container">
        <h2 class="section-title" data-i18n="shopTitle"></h2>
        <p class="section-intro" data-i18n="shopIntro"></p>
        <div class="shop-bar">
          <div class="filters" role="tablist" aria-label="Filtres">
            <button type="button" class="filter-btn" data-filter="all" data-active="true" data-i18n="filterAll"></button>
            <button type="button" class="filter-btn" data-filter="wine" data-active="false" data-i18n="filterWine"></button>
            <button type="button" class="filter-btn" data-filter="experience" data-active="false" data-i18n="filterExp"></button>
          </div>
          <p class="shop-note" data-i18n="shopNote"></p>
        </div>
        <div class="product-grid" id="product-grid"></div>
      </div>
    </section>

    <section class="mosaic" aria-labelledby="mosaic-heading">
      <div class="mosaic__inner container">
        <h2 id="mosaic-heading" class="mosaic__title section-title" data-i18n="galleryTitle"></h2>
        <div class="mosaic__grid">
          <figure class="mosaic__item mosaic__item--tall">
            <img src="/images/gallery-cellar.jpg" alt="" width="1200" height="900" loading="lazy" decoding="async" />
          </figure>
          <figure class="mosaic__item">
            <img src="/images/gallery-bottles.jpg" alt="" width="900" height="900" loading="lazy" decoding="async" />
          </figure>
          <figure class="mosaic__item">
            <img src="/images/gallery-glass.jpg" alt="" width="900" height="900" loading="lazy" decoding="async" />
          </figure>
        </div>
        <p class="mosaic__credit" data-i18n="photoCredit"></p>
      </div>
    </section>

    <section id="contact" class="contact" aria-labelledby="contact-title">
      <div class="container">
        <h2 id="contact-title" class="section-title" data-i18n="contactTitle"></h2>
        <dl class="contact-grid">
          <div class="contact-block">
            <dt data-i18n="contactAddress"></dt>
            <dd>315 route de Montsoreau<br />49400 Saumur, France</dd>
          </div>
          <div class="contact-block">
            <dt data-i18n="contactPhone"></dt>
            <dd><a href="tel:+33241676250">02 41 67 62 50</a></dd>
          </div>
          <div class="contact-block">
            <dt data-i18n="contactHours"></dt>
            <dd data-i18n="contactHoursText"></dd>
          </div>
        </dl>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <p data-i18n="footerRights"></p>
      <div class="footer-links">
        <a href="https://calvez-bobinet.fr/" rel="noopener noreferrer" data-i18n="footerCgv"></a>
        <a href="https://calvez-bobinet.fr/" rel="noopener noreferrer" data-i18n="footerLegal"></a>
      </div>
    </div>
  </footer>
  `
}

function applyI18n(root: HTMLElement): void {
  const t = copy[lang]
  root.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n as keyof typeof t
    if (key && key in t) {
      el.textContent = t[key] as string
    }
  })

  document.documentElement.lang = lang === 'fr' ? 'fr' : 'en'

  const heroTitle = root.querySelector<HTMLElement>('#hero-title')
  if (heroTitle) {
    heroTitle.innerHTML =
      lang === 'fr'
        ? `${escapeHtml(t.heroTitle)}<br /><span>${escapeHtml(t.heroTitle2)}</span>`
        : `${escapeHtml(t.heroTitle)},<br /><span>${escapeHtml(t.heroTitle2)}</span>`
  }

  root.querySelectorAll<HTMLButtonElement>('.lang-switch button').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang))
  })
}

function filteredItems(): Item[] {
  if (filter === 'all') return items
  return items.filter((i) => i.kind === filter)
}

function renderGrid(root: HTMLElement): void {
  const grid = root.querySelector('#product-grid')
  if (!grid) return

  const t = copy[lang]
  grid.innerHTML = filteredItems()
    .map((item) => {
      const name = lang === 'fr' ? item.nameFr : item.nameEn
      const tag = item.kind === 'wine' ? t.tagWine : t.tagExp
      const vintage =
        item.year != null
          ? `<div class="card-vintage"><span class="meta-label">${escapeHtml(t.yearLabel)}</span><span class="card-year">${escapeHtml(item.year)}</span></div>`
          : `<div class="card-vintage card-vintage--empty" aria-hidden="true">—</div>`

      const kindClass = item.kind === 'experience' ? 'card--experience' : 'card--wine'

      return `
      <article class="card ${kindClass}" data-kind="${item.kind}">
        <div class="card__media">
          <img src="${escapeHtml(item.photo)}" alt="" width="600" height="450" loading="lazy" decoding="async" />
        </div>
        <div class="card__body">
          <span class="card-tag">${tag}</span>
          <h3 class="card-name">${escapeHtml(name)}</h3>
          <div class="card-meta">
            ${vintage}
            <span class="price">${formatPriceEUR(item.price, lang)}</span>
          </div>
        </div>
      </article>
    `
    })
    .join('')
}

function escapeHtml(s: string): string {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function setFilter(next: Filter, root: HTMLElement): void {
  filter = next
  root.querySelectorAll<HTMLButtonElement>('.filter-btn').forEach((btn) => {
    const v = btn.dataset.filter as Filter
    btn.dataset.active = String(v === filter)
  })
  renderGrid(root)
}

function bind(root: HTMLElement): void {
  root.querySelectorAll<HTMLButtonElement>('.lang-switch button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = btn.dataset.lang as Lang | undefined
      if (next && next !== lang) {
        lang = next
        applyI18n(root)
        renderGrid(root)
      }
    })
  })

  root.querySelectorAll<HTMLButtonElement>('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const v = btn.dataset.filter as Filter | undefined
      if (v) setFilter(v, root)
    })
  })

  const toggle = root.querySelector<HTMLButtonElement>('.menu-toggle')
  const panel = root.querySelector<HTMLElement>('#mobile-panel')
  const mobileLinks = panel?.querySelectorAll('a') ?? []

  const closeMobile = () => {
    if (!toggle || !panel) return
    toggle.setAttribute('aria-expanded', 'false')
    panel.dataset.open = 'false'
  }

  toggle?.addEventListener('click', () => {
    if (!toggle || !panel) return
    const open = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', String(!open))
    panel.dataset.open = String(!open)
  })

  mobileLinks.forEach((a) => a.addEventListener('click', closeMobile))

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMobile()
  })
}

;(function bootstrap() {
  const app = document.querySelector<HTMLElement>('#app')
  if (!app) return

  app.innerHTML = shellHTML()
  bind(app)
  applyI18n(app)
  renderGrid(app)
})()
