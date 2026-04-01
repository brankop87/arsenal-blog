import type { Metadata } from 'next'
import TournamentShell from '@/components/tournament/TournamentShell'
import TournamentSectionHeading from '@/components/tournament/TournamentSectionHeading'
import HistoryTimeline from '@/components/tournament/HistoryTimeline'
import { getTournamentHistory } from '@/lib/tournament'

export const metadata: Metadata = {
  title: 'Turnir Cerovac Istorijat',
  description: 'Istorijat pobednika i price koje grade identitet Turnira Cerovac.',
}

export default function TurnirIstorijatPage() {
  const history = getTournamentHistory()

  return (
    <TournamentShell
      eyebrow="Istorijat i legende"
      title="Godine koje su napravile Turnir Cerovac"
      description="Istorijat turnira je vise od spiska pobednika. To su sezone, finala, igraci i price koje su od letnjeg turnira napravile tradiciju koju Cerovac i danas cuva."
    >
      <section style={{ padding: '2.5rem 0 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="istorijat-top-grid">
          <div style={{ borderRadius: '28px', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))', padding: '1.6rem' }}>
            <TournamentSectionHeading label="Zasto je vazno" title="Pobednici su samo pocetak price" description="Kako budes nalazio starije podatke, ovde mozemo dopunjavati godine, finala, ekipe i legende turnira." />
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.64)', marginBottom: '1rem' }}>
              Ozbiljan turnir dobija jos vecu tezinu kada ima dokumentovan istorijat. To pokazuje da nije rec o prolaznom dogadjaju, vec o tradiciji koja traje i koja ima svoj kontinuitet.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.64)' }}>
              Ova strana je napravljena tako da lako mozes vremenom da dopisujes pobednike, finalne rezultate, posebne utakmice i imena igraca koji su ostavili trag.
            </p>
          </div>

          <div style={{ borderRadius: '28px', border: '1px solid rgba(196,163,90,0.16)', background: 'linear-gradient(180deg, rgba(196,163,90,0.08), rgba(255,255,255,0.015))', padding: '1.6rem' }}>
            <TournamentSectionHeading label="Legende turnira" title="Mesto za ljude koji su obelezili teren" description="Pored sampiona, ovde kasnije mogu da se dodaju i igraci, treneri, organizatori ili generacije koje su obelezile pojedine godine." />
            <div style={{ display: 'grid', gap: '0.8rem' }}>
              {[
                'vise osvajaca i finalista kroz godine',
                'igraci koji su godinama bili deo turnira',
                'posebna finala koja se i dalje prepricavaju',
                'ljudi koji su pomogli da tradicija opstane',
              ].map((item) => (
                <div key={item} style={{ padding: '0.95rem 1rem', borderRadius: '18px', background: 'rgba(0,0,0,0.12)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0 4rem' }}>
        <TournamentSectionHeading label="Pobednici" title="Dosad upisane godine" description="Ovo je pocetna baza. Kad nadjes stare rezultate, samo prosirujemo listu i pretvaramo je u pravi arhiv turnira." />
        <HistoryTimeline items={history} />
      </section>

      <style>{`
        @media (max-width: 900px) {
          .istorijat-top-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </TournamentShell>
  )
}
