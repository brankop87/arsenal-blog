'use client'
import Link from 'next/link'
import { categoryLabels, Category } from '@/lib/categories'
import { getCategoryTheme } from '@/lib/postTheme'

type Props = { categories: Category[]; counts: Record<string, number> }

export default function CategoryGrid({ categories, counts }: Props) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }} className="cat-grid">
      {categories.map(cat => {
        const theme = getCategoryTheme(cat)

        return (
          <Link key={cat} href={`/kategorije/${cat}`} style={{ textDecoration: 'none' }}>
            <div
              className="category-card"
              style={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: '210px',
                padding: '1.6rem',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.01))',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                cursor: 'pointer',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 85% 18%, ${theme.accentSoft} 0%, transparent 26%), linear-gradient(135deg, rgba(255,255,255,0.015), transparent 55%)` }} />
              <div style={{ position: 'absolute', inset: '1rem auto 1rem 0', width: '4px', background: theme.accent }} />
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: theme.accent, marginBottom: '0.9rem' }}>
                    {theme.label}
                  </div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '2rem', color: '#fff', marginBottom: '0.5rem', lineHeight: 1.05 }}>
                    {categoryLabels[cat].sr}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.7 }}>
                    {cat === 'utakmice' && 'Analize, reakcije i ključni momenti svakog važnog meča.'}
                    {cat === 'treninzi' && 'Forma, taktički detalji i sve što stiže sa trening terena.'}
                    {cat === 'takmicenja' && 'Šira slika sezone, borba za trofeje i kontekst tabele.'}
                    {cat === 'vesti' && 'Transferi, izjave i najvažnije klupske priče na jednom mestu.'}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.36)' }}>
                    {counts[cat] ?? 0} {(counts[cat] ?? 0) === 1 ? 'tekst' : 'tekstova'}
                  </div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff' }}>
                    Otvori rubriku
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
      <style>{`
        .category-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.12);
          box-shadow: 0 24px 55px rgba(0,0,0,0.22);
        }
        @media(max-width:980px){.cat-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.cat-grid{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  )
}
