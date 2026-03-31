import type { Metadata } from 'next'
import TournamentShell from '@/components/tournament/TournamentShell'
import TournamentSectionHeading from '@/components/tournament/TournamentSectionHeading'
import MatchCard from '@/components/tournament/MatchCard'
import StandingsTable from '@/components/tournament/StandingsTable'
import SponsorGrid from '@/components/tournament/SponsorGrid'
import NewsPreviewGrid from '@/components/tournament/NewsPreviewGrid'
import { getFinishedMatches, getSponsors, getStandings, getTournamentNews, getUpcomingMatches } from '@/lib/tournament'

export const metadata: Metadata = {
  title: 'Turnir Cerovac',
  description: 'Dugovecni lokalni fudbalski turnir u Cerovcu: raspored, rezultati, tabela, timovi i partneri.',
}

export default function TurnirPage() {
  const upcoming = getUpcomingMatches().slice(0, 2)
  const results = getFinishedMatches().slice(0, 2)
  const standings = getStandings().slice(0, 5)
  const sponsors = getSponsors().slice(0, 4)
  const news = getTournamentNews().slice(0, 3)

  return (
    <TournamentShell
      eyebrow="Zaseban lokalni fudbalski microsite"
      title="Turnir Cerovac 2026"
      description="Poseban digitalni prostor za dugovecni i poznati turnir iz Cerovca. Odvojen od Arsenal blog rubrika, ali razvijen u istom kvalitetnom sistemu da ostane brz, stabilan i lak za sirenje."
    >
      <section style={{ padding: '2.5rem 0 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1.5rem' }} className="turnir-grid-two">
          <div>
            <TournamentSectionHeading label="Sledece utakmice" title="Sta sledi na terenu" description="Raspored koji mozes kasnije lako da menjas direktno iz JSON fajla, cak i kada zelis samo brz rezultat ili novi termin." />
            <div style={{ display: 'grid', gap: '1rem' }}>
              {upcoming.map((match) => <MatchCard key={match.id} match={match} />)}
            </div>
          </div>
          <div>
            <TournamentSectionHeading label="Poslednji rezultati" title="Skorovi i kratki pregled" description="Dovoljno pregledno za publiku, a dovoljno jednostavno da ostane brzo i stabilno na duze staze." />
            <div style={{ display: 'grid', gap: '1rem' }}>
              {results.map((match) => <MatchCard key={match.id} match={match} />)}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0 0' }}>
        <TournamentSectionHeading label="Tabela" title="Pregled plasmana" description="Top deo tabele na naslovnoj, sa punom tabelom dostupnom na posebnoj stranici." />
        <StandingsTable rows={standings} />
      </section>

      <section style={{ padding: '4rem 0 0' }}>
        <TournamentSectionHeading label="Partneri" title="Ljudi i firme koje guraju pricu" description="Sponzori i partneri mogu da se prosiruju kroz zaseban JSON bez menjanja strukture stranice." />
        <SponsorGrid sponsors={sponsors} />
      </section>

      <section style={{ padding: '4rem 0 4rem' }}>
        <TournamentSectionHeading label="Turnirske vesti" title="Najnovije price sa sela i terena" description="Poseban feed za sve sto se desava oko turnira, od najava do brzih izvestaja i organizacionih objava." />
        <NewsPreviewGrid items={news} />
      </section>

      <style>{`
        @media (max-width: 900px) {
          .turnir-grid-two { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </TournamentShell>
  )
}
