import type { Metadata } from 'next'
import TournamentShell from '@/components/tournament/TournamentShell'
import TournamentSectionHeading from '@/components/tournament/TournamentSectionHeading'
import StandingsTable from '@/components/tournament/StandingsTable'
import { getStandings } from '@/lib/tournament'

export const metadata: Metadata = {
  title: 'Turnir Tabela',
  description: 'Aktuelna tabela turnira u Tunitu.',
}

export default function TurnirTabelaPage() {
  return (
    <TournamentShell eyebrow="Tabela" title="Plasman ekipa" description="Jasna i responzivna tabela koja moze da se menja rucno kroz jedan JSON fajl bez komplikovanog admin panela.">
      <section style={{ padding: '2.5rem 0 4rem' }}>
        <TournamentSectionHeading label="Aktuelno stanje" title="Kompletna tabela turnira" description="Brzo ucitavanje, pregledan raspored kolona i dovoljno prostora da kasnije dodamo formu ili poslednjih pet utakmica ako pozelis." />
        <StandingsTable rows={getStandings()} />
      </section>
    </TournamentShell>
  )
}
