import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1C1C1C', background: '#0A0A0A', marginTop: '5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '1.4rem', color: '#fff', marginBottom: '4px' }}>The Cannon</div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9C824A', marginBottom: '1rem' }}>Arsenal Blog</div>
          <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7 }}>Neformalni blog posvećen Arsenalu. Utakmice, igrači i sve oko kluba.</p>
        </div>

        <div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#EF0107', marginBottom: '1rem' }}>Kategorije</div>
          {[
            { href: '/kategorije/utakmice', label: 'Utakmice' },
            { href: '/kategorije/treninzi', label: 'Treninzi' },
            { href: '/kategorije/takmicenja', label: 'Takmičenja' },
            { href: '/kategorije/vesti', label: 'Vesti' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '0.9rem', color: '#666', textDecoration: 'none', marginBottom: '0.4rem' }}>{l.label}</Link>
          ))}
        </div>

        <div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#EF0107', marginBottom: '1rem' }}>Info</div>
          <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7 }}>Neformalni fan blog. Nije povezan sa Arsenal Football Club Ltd.</p>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #1C1C1C', textAlign: 'center', padding: '1.5rem', fontSize: '0.7rem', color: '#333', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.05em' }}>
        © {new Date().getFullYear()} The Cannon — Fan Blog
      </div>
    </footer>
  )
}
