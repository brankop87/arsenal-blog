import { Team } from '@/lib/tournament'

export default function TeamGrid({ teams }: { teams: Team[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1rem' }}>
      {teams.map((team) => (
        <article key={team.name} style={{ borderRadius: '22px', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))', padding: '1.25rem' }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.8rem' }}>
            {team.village}
          </div>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1.5rem', lineHeight: 1.15, color: '#fff', marginBottom: '0.85rem' }}>
            {team.name}
          </h3>
          <div style={{ display: 'grid', gap: '0.45rem', marginBottom: '0.9rem' }}>
            <div style={{ fontSize: '0.94rem', color: 'rgba(255,255,255,0.68)' }}>Trener: {team.coach}</div>
            <div style={{ fontSize: '0.94rem', color: 'rgba(255,255,255,0.68)' }}>Kapiten: {team.captain}</div>
            <div style={{ fontSize: '0.94rem', color: 'rgba(255,255,255,0.68)' }}>Boje: {team.colors}</div>
            <div style={{ fontSize: '0.94rem', color: 'rgba(255,255,255,0.68)' }}>Osnovan: {team.founded}</div>
          </div>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.56)' }}>
            {team.notes}
          </p>
        </article>
      ))}
    </div>
  )
}
