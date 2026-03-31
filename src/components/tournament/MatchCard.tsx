import { Match } from '@/lib/tournament'

export default function MatchCard({ match }: { match: Match }) {
  const isFinished = match.status === 'finished'

  return (
    <article style={{ borderRadius: '22px', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))', padding: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4A35A' }}>
          {match.competitionRound}
        </div>
        <div style={{ padding: '0.35rem 0.55rem', borderRadius: '999px', background: isFinished ? 'rgba(239,1,7,0.12)' : 'rgba(196,163,90,0.12)', border: `1px solid ${isFinished ? 'rgba(239,1,7,0.35)' : 'rgba(196,163,90,0.35)'}`, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#fff' }}>
          {isFinished ? 'Rezultat' : 'Sledeci mec'}
        </div>
      </div>

      <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.35rem', color: '#fff', lineHeight: 1.15 }}>{match.homeTeam}</div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '1.2rem', color: '#fff' }}>
            {isFinished ? match.homeScore : '-'}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.35rem', color: '#fff', lineHeight: 1.15 }}>{match.awayTeam}</div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '1.2rem', color: '#fff' }}>
            {isFinished ? match.awayScore : '-'}
          </div>
        </div>
      </div>

      <div style={{ paddingTop: '0.95rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'grid', gap: '0.35rem' }}>
        <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.66)' }}>{match.date} u {match.time}</div>
        <div style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.48)' }}>{match.venue}</div>
      </div>
    </article>
  )
}
