export default function TournamentSectionHeading({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description?: string
}) {
  return (
    <div style={{ marginBottom: '1.4rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '0.65rem' }}>
        <span style={{ display: 'block', width: '34px', height: '3px', background: '#C4A35A' }} />
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C4A35A' }}>
          {label}
        </span>
      </div>
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 'clamp(1.9rem,4vw,2.8rem)', color: '#fff', lineHeight: 1.08, marginBottom: description ? '0.65rem' : 0 }}>
        {title}
      </h2>
      {description && (
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.56)', maxWidth: '44rem' }}>
          {description}
        </p>
      )}
    </div>
  )
}
