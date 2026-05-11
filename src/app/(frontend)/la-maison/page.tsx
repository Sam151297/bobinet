import type { Metadata } from 'next'
import React from 'react'

import { MaisonStory } from '@/components/MaisonStory'

export const metadata: Metadata = {
  description: 'La maison Calvez Bobinet — vins vivants, tuffeau et caves troglodytiques à Saumur.',
  title: 'La maison',
}

export default function LaMaisonPage() {
  return <MaisonStory />
}
