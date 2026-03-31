import { Standing } from '@/lib/tournament'

export default function StandingsTable({ rows }: { rows: Standing[] }) {
  return (
    <div style={{ overflowX: 'auto', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '680px' }}>
        <thead>
          <tr>
            {['#', 'Tim', 'OD', 'P', 'N', 'I', 'DG', 'PG', 'B'].map((cell) => (
              <th key={cell} style={{ textAlign: cell === 'Tim' ? 'left' : 'center', padding: '1rem 0.85rem', borderBottom: '1px solid rgba(255,255,255,0.06)', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4A35A' }}>
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.team}>
              <td style={{ padding: '0.95rem 0.85rem', textAlign: 'center', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{index + 1}</td>
              <td style={{ padding: '0.95rem 0.85rem', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.04)', fontWeight: row.team === 'FK Cerovac' ? 700 : 400 }}>{row.team}</td>
              <td style={{ padding: '0.95rem 0.85rem', textAlign: 'center', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.played}</td>
              <td style={{ padding: '0.95rem 0.85rem', textAlign: 'center', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.won}</td>
              <td style={{ padding: '0.95rem 0.85rem', textAlign: 'center', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.drawn}</td>
              <td style={{ padding: '0.95rem 0.85rem', textAlign: 'center', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.lost}</td>
              <td style={{ padding: '0.95rem 0.85rem', textAlign: 'center', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.goalsFor}</td>
              <td style={{ padding: '0.95rem 0.85rem', textAlign: 'center', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.goalsAgainst}</td>
              <td style={{ padding: '0.95rem 0.85rem', textAlign: 'center', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.04)', fontWeight: 700 }}>{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
