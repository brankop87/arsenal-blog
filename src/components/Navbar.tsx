'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Category, getCategoryLabel, getCategorySegment, localizedCategorySegments } from '@/lib/categories'
import { Locale, getUi, localePrefix, localizedCategoryRoot, supportedLocales } from '@/lib/i18n'

const categories: Category[] = ['utakmice', 'treninzi', 'takmicenja', 'vesti']
const localeLabels: Record<Locale, string> = { sr: 'SR', en: 'EN', de: 'DE' }

type Props = {
  locale?: Locale
}

export default function Navbar({ locale = 'sr' }: Props) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const ui = getUi(locale)
  const prefix = localePrefix(locale)
  const isTournamentPath = pathname.startsWith('/turnir')

  const getLanguageHref = (targetLocale: Locale) => {
    if (isTournamentPath) return '/turnir'

    const parts = pathname.split('/').filter(Boolean)
    const hasLocalePrefix = parts[0] === 'en' || parts[0] === 'de'
    const routeParts = hasLocalePrefix ? parts.slice(1) : parts
    const targetPrefix = localePrefix(targetLocale)

    if (routeParts.length === 0) return targetPrefix || '/'

    if (routeParts[0] === 'blog' && routeParts[1]) {
      return `${targetPrefix}/blog/${routeParts[1]}`
    }

    const isCategoryRoute = routeParts[0] === 'kategorije' || routeParts[0] === 'categories'
    if (isCategoryRoute && routeParts[1]) {
      const category = localizedCategorySegments[routeParts[1]] || (categories.includes(routeParts[1] as Category) ? (routeParts[1] as Category) : undefined)
      if (category) {
        return `${targetPrefix}/${localizedCategoryRoot(targetLocale)}/${getCategorySegment(category, targetLocale)}`
      }
    }

    return targetPrefix || '/'
  }

  const languageSwitch = (
    <div className="language-switch" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.025)' }}>
      {supportedLocales.map((targetLocale) => {
        const active = targetLocale === locale
        return (
          <Link
            key={targetLocale}
            href={getLanguageHref(targetLocale)}
            aria-current={active ? 'page' : undefined}
            style={{
              minWidth: '2rem',
              padding: '0.38rem 0.48rem',
              borderRadius: '999px',
              textAlign: 'center',
              textDecoration: 'none',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: '0.68rem',
              letterSpacing: '0.12em',
              color: active ? '#111' : 'rgba(255,255,255,0.58)',
              background: active ? '#C4A35A' : 'transparent',
            }}
          >
            {localeLabels[targetLocale]}
          </Link>
        )
      })}
    </div>
  )

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(14px)', background: 'rgba(10,10,10,0.82)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ background: 'linear-gradient(90deg, #b40006 0%, #ef0107 50%, #b40006 100%)', padding: '0.45rem 0', textAlign: 'center', borderBottom: '1px solid rgba(0,0,0,0.15)' }}>
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#fff' }}>
          {ui.topBar}
        </span>
      </div>

      <nav style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem', minHeight: '82px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <Link href={prefix || '/'} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '42px', height: '42px', background: 'linear-gradient(135deg, #EF0107, #980005)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#fff', boxShadow: '0 0 0 6px rgba(239,1,7,0.08)' }}>
            A
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '1.75rem', color: '#fff', lineHeight: 1 }}>The Cannon</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4A35A' }}>{ui.brandTagline}</div>
          </div>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="nav-desktop">
          {categories.map((category) => {
            const href = `${prefix}/${localizedCategoryRoot(locale)}/${getCategorySegment(category, locale)}`
            return (
              <Link
                key={category}
                href={href}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.86rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.72)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
              >
                {getCategoryLabel(category, locale)}
              </Link>
            )
          })}
          <Link
            href="/turnir"
            style={{
              textDecoration: 'none',
              padding: '0.55rem 0.85rem',
              borderRadius: '999px',
              border: '1px solid rgba(196,163,90,0.28)',
              background: 'rgba(196,163,90,0.08)',
              color: '#f3dfb1',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: '0.84rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            {ui.turnirLabel}
          </Link>
          <div style={{ padding: '0.5rem 0.8rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.46)' }}>
            {ui.northLondon}
          </div>
          {!isTournamentPath && languageSwitch}
        </div>

        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', cursor: 'pointer', padding: '10px 11px' }} className="nav-mobile" aria-label="Menu">
          <div style={{ width: '20px', height: '2px', background: '#fff', marginBottom: '5px' }} />
          <div style={{ width: '20px', height: '2px', background: '#fff', marginBottom: '5px' }} />
          <div style={{ width: '14px', height: '2px', background: '#fff' }} />
        </button>
      </nav>

      {open && (
        <div style={{ background: 'rgba(12,12,12,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '0.75rem 1.5rem 1.25rem' }}>
          {categories.map((category) => {
            const href = `${prefix}/${localizedCategoryRoot(locale)}/${getCategorySegment(category, locale)}`
            return (
              <Link
                key={category}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#f2f2f2',
                  textDecoration: 'none',
                  padding: '0.85rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {getCategoryLabel(category, locale)}
              </Link>
            )
          })}
          <Link
            href="/turnir"
            onClick={() => setOpen(false)}
            style={{
              display: 'block',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#f3dfb1',
              textDecoration: 'none',
              padding: '0.85rem 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {ui.turnirLabel}
          </Link>
          {!isTournamentPath && <div style={{ paddingTop: '0.9rem' }}>{languageSwitch}</div>}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: block !important; }
        }
      `}</style>
    </header>
  )
}
