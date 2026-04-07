'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/kategorije/utakmice', label: 'Utakmice' },
  { href: '/kategorije/treninzi', label: 'Treninzi' },
  { href: '/kategorije/takmicenja', label: 'Takmičenja' },
  { href: '/kategorije/vesti', label: 'Vesti' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(14px)', background: 'rgba(10,10,10,0.82)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ background: 'linear-gradient(90deg, #b40006 0%, #ef0107 50%, #b40006 100%)', padding: '0.45rem 0', textAlign: 'center', borderBottom: '1px solid rgba(0,0,0,0.15)' }}>
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#fff' }}>
          Arsenal Football Club | The Cannon Blog
        </span>
      </div>

      <nav style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem', minHeight: '82px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '42px', height: '42px', background: 'linear-gradient(135deg, #EF0107, #980005)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#fff', boxShadow: '0 0 0 6px rgba(239,1,7,0.08)' }}>
            A
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '1.75rem', color: '#fff', lineHeight: 1 }}>The Cannon</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4A35A' }}>Arsenal blog | matchday stories</div>
          </div>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="nav-desktop">
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
            Turnir Cerovac
          </Link>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
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
              {l.label}
            </Link>
          ))}
          <div style={{ padding: '0.5rem 0.8rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.46)' }}>
            North London Red
          </div>
        </div>

        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', cursor: 'pointer', padding: '10px 11px' }} className="nav-mobile" aria-label="Menu">
          <div style={{ width: '20px', height: '2px', background: '#fff', marginBottom: '5px' }} />
          <div style={{ width: '20px', height: '2px', background: '#fff', marginBottom: '5px' }} />
          <div style={{ width: '14px', height: '2px', background: '#fff' }} />
        </button>
      </nav>

      {open && (
        <div style={{ background: 'rgba(12,12,12,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '0.75rem 1.5rem 1.25rem' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
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
              {l.label}
            </Link>
          ))}
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
            Turnir Cerovac
          </Link>
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
