import { HistoryEntry } from '@/lib/tournament'

export default function HistoryTimeline({ items }: { items: HistoryEntry[] }) {
  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {items.map((item) => (
        <article key={item.year} style={{ borderRadius: '24px', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))', padding: '1.25rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '1.2rem' }} className="history-card">
            <div style={{ borderRadius: '18px', background: 'rgba(196,163,90,0.08)', border: '1px solid rgba(196,163,90,0.2)', padding: '1rem 0.8rem', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.35rem' }}>
                Godina
              </div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: '1.7rem', lineHeight: 1, color: '#fff' }}>
                {item.year}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.66rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.45rem' }}>
                Sampion
              </div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1.4rem', lineHeight: 1.15, color: '#fff', marginBottom: '0.45rem' }}>
                {item.winner}
              </h3>
              <div style={{ fontSize: '0.96rem', color: 'rgba(255,255,255,0.64)', lineHeight: 1.7, marginBottom: '0.55rem' }}>
                Finale: {item.winner} - {item.runnerUp} ({item.score})
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.56)' }}>
                {item.note}
              </p>
            </div>
          </div>
        </article>
      ))}
      <style>{`
        @media (max-width: 640px) {
          .history-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
