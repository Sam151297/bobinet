/** Découpe le texte officiel en paragraphes (blocs séparés par une ligne vide). */
export function paragraphsFromDescription(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((block) =>
      block
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .join(' '),
    )
    .map((p) => p.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
}
