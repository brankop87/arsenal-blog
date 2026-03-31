import type { Metadata } from 'next'
import TournamentShell from '@/components/tournament/TournamentShell'
import TournamentSectionHeading from '@/components/tournament/TournamentSectionHeading'
import SponsorGrid from '@/components/tournament/SponsorGrid'
import { getSponsors } from '@/lib/tournament'

export const metadata: Metadata = {
  title: 'Turnir Cerovac Sponzori',
  description: 'Partneri i sponzori turnira u Cerovcu.',
}

export default function TurnirSponzoriPage() {
  return (
    <TournamentShell eyebrow="Sponzori" title="Partneri turnira" description="Mesto za lokalne firme, glavne partnere i sve koji pomazu da turnir izgleda ozbiljno i bude odrziv.">
      <section style={{ padding: '2.5rem 0 4rem' }}>
        <TournamentSectionHeading label="Podrska turniru" title="Sponzori i partneri" description="Sponzori su prikazani suptilno i uredno, bez da stranica izgleda kao reklamni pano." />
        <SponsorGrid sponsors={getSponsors()} />
      </section>
    </TournamentShell>
  )
}
