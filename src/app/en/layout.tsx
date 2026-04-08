import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'The Cannon | Arsenal Blog', template: '%s | The Cannon' },
  description: 'Arsenal stories, matchday writing, tactical notes and club coverage in an editorial blog format.',
}

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return children
}
