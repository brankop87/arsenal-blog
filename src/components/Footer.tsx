import Link from 'next/link'
import { Category, getCategoryLabel, getCategorySegment } from '@/lib/categories'
import { Locale, getUi, localePrefix } from '@/lib/i18n'

const categories: Category[] = ['utakmice', 'treninzi', 'takmicenja', 'vesti']

type Props = {
  locale?: Locale
}

export default function Footer({ locale = 'sr' }: Props) {
  const ui = getUi(locale)
  const prefix = localePrefix(locale)

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#090909', marginTop: '5rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 18% 0%, rgba(239,1,7,0.12) 0%, transparent 26%), radial-gradient(circle at 82% 18%, rgba(196,163,90,0.09) 0%, transparent 18%)' }} />
      <div style={{ position: 'relative', maxWidth: '1240px', margin: '0 auto', padding: '4rem 1.5rem 3rem', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 0.9fr', gap: '2rem' }} className="footer-grid">
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '2rem', color: '#fff', marginBottom: '0.35rem' }}>The Cannon</div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '1.1rem' }}>{ui.footer.editorialTag}</div>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, maxWidth: '36rem' }}>
            {ui.footer.description}
          </p>
        </div>

        <div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EF0107', marginBottom: '1rem' }}>{ui.footer.sections}</div>
          {categories.map((category) => (
            <Link
              key={category}
              href={`${prefix}/${locale === 'en' ? 'categories' : 'kategorije'}/${getCategorySegment(category, locale)}`}
              style={{ display: 'block', fontSize: '1rem', color: 'rgba(255,255,255,0.64)', textDecoration: 'none', marginBottom: '0.65rem' }}
            >
              {getCategoryLabel(category, locale)}
            </Link>
          ))}
        </div>

        <div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '1rem' }}>{ui.footer.turnirTitle}</div>
          <Link href="/turnir" style={{ display: 'block', fontSize: '1rem', color: '#fff', textDecoration: 'none', marginBottom: '0.65rem' }}>
            {ui.footer.turnirLead}
          </Link>
          <p style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.56)', lineHeight: 1.8 }}>
            {ui.footer.turnirText}
          </p>
        </div>

        <div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EF0107', marginBottom: '1rem' }}>{ui.footer.note}</div>
          <p style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
            {ui.footer.noteText}
          </p>
          <a href="https://petkovicsolutions.com" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '1.2rem', textDecoration: 'none', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.74rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4A35A' }}>
            Website powered by Petkovic Solutions
          </a>
        </div>
      </div>
      <div style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', padding: '1.25rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.08em' }}>
        © {new Date().getFullYear()} The Cannon | Arsenal fan blog
      </div>
      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
