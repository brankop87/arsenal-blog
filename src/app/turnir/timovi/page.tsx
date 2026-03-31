import type { Metadata } from 'next'
import TournamentShell from '@/components/tournament/TournamentShell'
import TournamentSectionHeading from '@/components/tournament/TournamentSectionHeading'
import TeamGrid from '@/components/tournament/TeamGrid'
import { getTeams } from '@/lib/tournament'

export const metadata: Metadata = {
  title: 'Turnir Timovi',
  description: 'Pregled svih timova koji ucestvuju na turniru u Tunitu.',
}

export default function TurnirTimoviPage() {
  return (
    <TournamentShell eyebrow="Timovi" title="Ko igra turnir" description="Svaka ekipa dobija svoju malu prezentaciju, a kasnije mozes dodati i logo, sliku ili mini roster ako zelis.">
      <section style={{ padding: '2.5rem 0 4rem' }}>
        <TournamentSectionHeading label="Ucesnici" title="Ekipe i kratki profili" description="Ovo je dobra osnova za dugorocan microsite jer nije vezano za jednu sezonu i lako se menja iz godine u godinu." />
        <TeamGrid teams={getTeams()} />
      </section>
    </TournamentShell>
  )
}
