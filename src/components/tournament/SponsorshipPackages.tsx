const packages = [
  {
    name: 'Glavni partner',
    value: 'Najveca vidljivost',
    details: 'Naslovna pozicija na sajtu, isticanje u objavama i centralno mesto uz samu pricu turnira.',
  },
  {
    name: 'Zlatni partner',
    value: 'Jaka lokalna promocija',
    details: 'Vidljivost kroz sekciju partnera, vesti i isticanje tokom glavne turnirske nedelje.',
  },
  {
    name: 'Prijatelj turnira',
    value: 'Podrska zajednici',
    details: 'Prisustvo na sajtu i ukljucenje u mrezu firmi koje pomazu da se tradicija odrzi i raste.',
  },
]

export default function SponsorshipPackages() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '1rem' }}>
      {packages.map((item) => (
        <article key={item.name} style={{ borderRadius: '24px', border: '1px solid rgba(196,163,90,0.16)', background: 'linear-gradient(180deg, rgba(196,163,90,0.08), rgba(255,255,255,0.015))', padding: '1.35rem' }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.66rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.65rem' }}>
            {item.value}
          </div>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1.45rem', lineHeight: 1.1, color: '#fff', marginBottom: '0.7rem' }}>
            {item.name}
          </h3>
          <p style={{ fontSize: '0.96rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.6)' }}>
            {item.details}
          </p>
        </article>
      ))}
    </div>
  )
}
