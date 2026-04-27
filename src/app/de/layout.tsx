import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'The Cannon | Arsenal Blog', template: '%s | The Cannon' },
  description: 'Arsenal-Geschichten, Matchday-Texte, taktische Notizen und Vereinsnews in einem redaktionellen Blogformat.',
  alternates: {
    canonical: '/de',
  },
}

export default function GermanLayout({ children }: { children: React.ReactNode }) {
  return children
}
