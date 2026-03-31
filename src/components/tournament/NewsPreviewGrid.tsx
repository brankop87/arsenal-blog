import Link from 'next/link'
import { TournamentNews } from '@/lib/tournament'

export default function NewsPreviewGrid({ items }: { items: TournamentNews[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1rem' }}>
      {items.map((item) => (
        <article key={item.slug} style={{ borderRadius: '22px', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))', padding: '1.25rem' }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.8rem' }}>
            {item.category}
          </div>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1.35rem', lineHeight: 1.15, color: '#fff', marginBottom: '0.7rem' }}>
            {item.title}
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.58)', marginBottom: '0.9rem' }}>
            {item.excerpt}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center' }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.34)' }}>
              {item.date}
            </span>
            <Link href="/turnir/vesti" style={{ textDecoration: 'none', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#fff' }}>
              Procitaj vise
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}
