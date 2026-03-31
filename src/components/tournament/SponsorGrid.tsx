import { Sponsor } from '@/lib/tournament'

export default function SponsorGrid({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))', gap: '1rem' }}>
      {sponsors.map((sponsor) => (
        <article key={sponsor.name} style={{ borderRadius: '22px', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))', padding: '1.25rem' }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.8rem' }}>
            {sponsor.category}
          </div>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1.35rem', lineHeight: 1.15, color: '#fff', marginBottom: '0.65rem' }}>
            {sponsor.name}
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.58)' }}>
            {sponsor.description}
          </p>
        </article>
      ))}
    </div>
  )
}
