'use client'
import Link from 'next/link'
import { categoryLabels, Category } from '@/lib/categories'

type Props = { categories: Category[]; counts: Record<string, number> }

export default function CategoryGrid({ categories, counts }: Props) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }} className="cat-grid">
      {categories.map(cat => (
        <Link key={cat} href={`/kategorije/${cat}`} style={{ textDecoration: 'none' }}>
          <div
            style={{ border: '1px solid #1C1C1C', padding: '1.5rem', borderRadius: '2px', transition: 'border-color 0.2s, background 0.2s', cursor: 'pointer' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#EF0107'; el.style.background = '#1A0A0A' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#1C1C1C'; el.style.background = 'transparent' }}
          >
            <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1.2rem', color: '#fff', marginBottom: '0.25rem' }}>{categoryLabels[cat].sr}</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.65rem', letterSpacing: '0.1em', color: '#444', textTransform: 'uppercase' }}>
              {counts[cat] ?? 0} {(counts[cat] ?? 0) === 1 ? 'tekst' : 'tekstova'}
            </div>
          </div>
        </Link>
      ))}
      <style>{`@media(max-width:600px){.cat-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </div>
  )
}
