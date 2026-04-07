import Link from 'next/link'

const links = [
  { href: '/kategorije/utakmice', label: 'Utakmice' },
  { href: '/kategorije/treninzi', label: 'Treninzi' },
  { href: '/kategorije/takmicenja', label: 'Takmičenja' },
  { href: '/kategorije/vesti', label: 'Vesti' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#090909', marginTop: '5rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 18% 0%, rgba(239,1,7,0.12) 0%, transparent 26%), radial-gradient(circle at 82% 18%, rgba(196,163,90,0.09) 0%, transparent 18%)' }} />
      <div style={{ position: 'relative', maxWidth: '1240px', margin: '0 auto', padding: '4rem 1.5rem 3rem', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 0.9fr', gap: '2rem' }} className="footer-grid">
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '2rem', color: '#fff', marginBottom: '0.35rem' }}>The Cannon</div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '1.1rem' }}>Arsenal editorial fan blog</div>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, maxWidth: '36rem' }}>
            Mesto za Arsenal priče koje imaju ritam, stav i kontekst. Fokus je na utakmicama, treninzima, taktičkim detaljima i vestima koje zaslužuju više od dve rečenice.
          </p>
        </div>

        <div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EF0107', marginBottom: '1rem' }}>Rubrike</div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '1rem', color: 'rgba(255,255,255,0.64)', textDecoration: 'none', marginBottom: '0.65rem' }}>
              {l.label}
            </Link>
          ))}
        </div>

        <div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '1rem' }}>Turnir Cerovac</div>
          <Link href="/turnir" style={{ display: 'block', fontSize: '1rem', color: '#fff', textDecoration: 'none', marginBottom: '0.65rem' }}>
            Lokalni turnir i posebna priča
          </Link>
          <p style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.56)', lineHeight: 1.8 }}>
            Zaseban microsite za dugovečni i poznati turnir iz Cerovca, odvojen od Arsenal rubrika i spreman da raste kao sopstveni digitalni projekat.
          </p>
        </div>

        <div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EF0107', marginBottom: '1rem' }}>Napomena</div>
          <p style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
            Nezavisan fan projekat. Sajt nije povezan sa Arsenal Football Club Ltd. niti predstavlja zvanični klupski kanal.
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
