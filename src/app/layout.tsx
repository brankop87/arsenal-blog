import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: { default: 'The Cannon | Arsenal Blog', template: '%s | The Cannon' },
  description: 'Sve o Arsenalu — utakmice, treninzi, takmičenja, vesti.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
