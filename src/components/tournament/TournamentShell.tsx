import Link from 'next/link'

const subnav = [
  { href: '/turnir', label: 'Pregled' },
  { href: '/turnir/rezultati', label: 'Rezultati' },
  { href: '/turnir/tabela', label: 'Tabela' },
  { href: '/turnir/timovi', label: 'Timovi' },
  { href: '/turnir/sponzori', label: 'Sponzori' },
  { href: '/turnir/vesti', label: 'Vesti' },
]

export default function TournamentShell({
  title,
  eyebrow,
  description,
  children,
}: {
  title: string
  eyebrow: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '2rem 1.5rem 0' }}>
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.06)', background: 'radial-gradient(circle at 85% 15%, rgba(196,163,90,0.12) 0%, transparent 22%), linear-gradient(135deg, #161313 0%, #0b0b0b 100%)', padding: '2.6rem 2rem' }}>
        <div style={{ position: 'absolute', inset: '1.5rem auto 1.5rem 0', width: '5px', background: '#C4A35A' }} />
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.95rem', padding: '0.45rem 0.7rem', borderRadius: '999px', border: '1px solid rgba(196,163,90,0.25)', background: 'rgba(196,163,90,0.08)' }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f3dfb1' }}>
              Turnir Cerovac
            </span>
            <span style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.16)' }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
              Lokalna fudbalska tradicija
            </span>
          </div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.9rem' }}>
            {eyebrow}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 'clamp(2.4rem,5vw,4.2rem)', color: '#fff', lineHeight: 1, marginBottom: '0.8rem' }}>
            {title}
          </h1>
          <p style={{ fontSize: '1.04rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.62)', maxWidth: '46rem' }}>
            {description}
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.25rem' }}>
        {subnav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              textDecoration: 'none',
              padding: '0.7rem 0.95rem',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.03)',
              color: '#fff',
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 700,
              fontSize: '0.74rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {children}
    </section>
  )
}
