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
    <header style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid #1C1C1C' }}>
      {/* Red top bar */}
      <div style={{ background: '#EF0107', padding: '5px 0', textAlign: 'center' }}>
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>
          Arsenal Football Club — The Cannon Blog
        </span>
      </div>

      {/* Main nav */}
      <nav style={{ background: '#0A0A0A', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', background: '#EF0107', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>A</div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '1.1rem', color: '#fff', lineHeight: 1 }}>The Cannon</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9C824A' }}>Arsenal Blog</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem' }} className="nav-desktop">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#EF0107')}
              onMouseLeave={e => (e.currentTarget.style.color = '#999')}
            >{l.label}</Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }} className="nav-mobile" aria-label="Menu">
          <div style={{ width: '22px', height: '2px', background: '#fff', marginBottom: '5px' }} />
          <div style={{ width: '22px', height: '2px', background: '#fff', marginBottom: '5px' }} />
          <div style={{ width: '16px', height: '2px', background: '#fff' }} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ background: '#111', borderTop: '1px solid #1C1C1C', padding: '0.5rem 1.5rem 1rem' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ccc', textDecoration: 'none', padding: '0.65rem 0', borderBottom: '1px solid #1C1C1C' }}
            >{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: block !important; }
        }
      `}</style>
    </header>
  )
}
