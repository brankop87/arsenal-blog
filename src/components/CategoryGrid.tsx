'use client'
import Link from 'next/link'
import { Category, getCategoryLabel, getCategorySegment } from '@/lib/categories'
import { getCategoryTheme } from '@/lib/postTheme'
import { Locale, getUi, localePrefix } from '@/lib/i18n'

type Props = { categories: Category[]; counts: Record<string, number>; locale?: Locale }

export default function CategoryGrid({ categories, counts, locale = 'sr' }: Props) {
  const ui = getUi(locale)
  const prefix = localePrefix(locale)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }} className="cat-grid">
      {categories.map((cat) => {
        const theme = getCategoryTheme(cat)
        const href = `${prefix}/${locale === 'en' ? 'categories' : 'kategorije'}/${getCategorySegment(cat, locale)}`
        const count = counts[cat] ?? 0

        return (
          <Link key={cat} href={href} style={{ textDecoration: 'none' }}>
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
                    {getCategoryLabel(cat, locale)}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.7 }}>
                    {locale === 'sr' && cat === 'utakmice' && 'Analize, reakcije i ključni momenti svakog važnog meča.'}
                    {locale === 'sr' && cat === 'treninzi' && 'Forma, taktički detalji i sve što stiže sa trening terena.'}
                    {locale === 'sr' && cat === 'takmicenja' && 'Šira slika sezone, borba za trofeje i kontekst tabele.'}
                    {locale === 'sr' && cat === 'vesti' && 'Transferi, izjave i najvažnije klupske priče na jednom mestu.'}

                    {locale === 'en' && cat === 'utakmice' && 'Match analysis, turning points and the bigger reading of Arsenal performances.'}
                    {locale === 'en' && cat === 'treninzi' && 'Form, training ground details and the tactical clues that shape the next game.'}
                    {locale === 'en' && cat === 'takmicenja' && 'The wider picture of the season, the trophy race and the context around each campaign.'}
                    {locale === 'en' && cat === 'vesti' && 'Transfers, club decisions, quotes and the key stories moving the Arsenal narrative.'}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.36)' }}>
                    {count} {count === 1 ? ui.categoryPage.oneStory : ui.categoryPage.manyStories}
                  </div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff' }}>
                    {ui.categoryPage.openSection}
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
