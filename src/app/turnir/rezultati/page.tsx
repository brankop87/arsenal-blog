import type { Metadata } from 'next'
import TournamentShell from '@/components/tournament/TournamentShell'
import TournamentSectionHeading from '@/components/tournament/TournamentSectionHeading'
import MatchCard from '@/components/tournament/MatchCard'
import { getFinishedMatches } from '@/lib/tournament'

export const metadata: Metadata = {
  title: 'Turnir Cerovac Rezultati',
  description: 'Svi odigrani mecevi i rezultati turnira u Cerovcu.',
}

export default function TurnirRezultatiPage() {
  const results = getFinishedMatches()

  return (
    <TournamentShell eyebrow="Rezultati" title="Odigrane utakmice" description="Mesto za sve zavrsene meceve, skorove i kasnije eventualne kratke napomene uz svaki duel.">
      <section style={{ padding: '2.5rem 0 4rem' }}>
        <TournamentSectionHeading label="Arhiva meceva" title="Rezultati turnira" description="Kasnije ovde lako mozes dodati jos kola, knockout fazu ili posebne finalne utakmice bez promene osnove." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1rem' }}>
          {results.map((match) => <MatchCard key={match.id} match={match} />)}
        </div>
      </section>
    </TournamentShell>
  )
}
