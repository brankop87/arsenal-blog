import type { Metadata } from 'next'
import TournamentShell from '@/components/tournament/TournamentShell'
import TournamentSectionHeading from '@/components/tournament/TournamentSectionHeading'
import NewsPreviewGrid from '@/components/tournament/NewsPreviewGrid'
import { getTournamentNews } from '@/lib/tournament'

export const metadata: Metadata = {
  title: 'Turnir Vesti',
  description: 'Najnovije vesti i objave sa turnira u Tunitu.',
}

export default function TurnirVestiPage() {
  return (
    <TournamentShell eyebrow="Vesti" title="Price sa turnira" description="Najave, kratki izvestaji i sve sto prati turnirsku atmosferu tokom leta.">
      <section style={{ padding: '2.5rem 0 4rem' }}>
        <TournamentSectionHeading label="Najnovije objave" title="Turnirski feed" description="Kasnije mozes i ove vesti da pretvoris u pune blog postove ili da ih zadrzis kao brze kartice za telefon i brza azuriranja." />
        <NewsPreviewGrid items={getTournamentNews()} />
      </section>
    </TournamentShell>
  )
}
