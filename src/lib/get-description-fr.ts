import { PRODUCT_DESCRIPTION_FR } from '@/productDescriptions.fr'

export function getFrenchDescription(slug: string): string | undefined {
  return PRODUCT_DESCRIPTION_FR[slug as keyof typeof PRODUCT_DESCRIPTION_FR]
}
