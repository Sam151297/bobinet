/** Brèves façon magazine — exemples placeholders cohérents avec les textes officiels. */

export type NewsItemFr = {
  id: string
  /** Affichée en petit titre de ligne */
  dateLabel: string
  title: string
  excerpt: string
}

export const NEWS_ITEMS_FR: NewsItemFr[] = [
  {
    id: 'visites-hiver',
    dateLabel: 'Saison',
    title: 'Visites en cave troglodytique · réservations',
    excerpt:
      'Du lundi au vendredi pour découvrir l’hygrométrie et les élevages en silence de pierre. En week-end — nous consulger.',
  },
  {
    id: 'degustation',
    dateLabel: 'Rencontres',
    title: 'Dégustations à la boutique',
    excerpt:
      'Parcours immersion et visites vignes disponibles depuis la même approche bienveillante que sur calvez-bobinet.fr.',
  },
  {
    id: 'vins-printemps',
    dateLabel: 'Cuvées',
    title: 'Les vins vivants Saumur',
    excerpt:
      'Une collection alignée avec la boutique : cabernet franc, chenin et pét’ nat pour table et apéritif.',
  },
]
