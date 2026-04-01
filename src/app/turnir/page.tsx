import Image from 'next/image'
import type { Metadata } from 'next'
import TournamentShell from '@/components/tournament/TournamentShell'
import TournamentSectionHeading from '@/components/tournament/TournamentSectionHeading'
import MatchCard from '@/components/tournament/MatchCard'
import StandingsTable from '@/components/tournament/StandingsTable'
import SponsorGrid from '@/components/tournament/SponsorGrid'
import NewsPreviewGrid from '@/components/tournament/NewsPreviewGrid'
import CountdownBanner from '@/components/tournament/CountdownBanner'
import HistoryTimeline from '@/components/tournament/HistoryTimeline'
import SponsorshipPackages from '@/components/tournament/SponsorshipPackages'
import { getFinishedMatches, getSponsors, getStandings, getTournamentHistory, getTournamentNews, getUpcomingMatches } from '@/lib/tournament'

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
  const history = getTournamentHistory()

  return (
    <TournamentShell
      eyebrow="Zaseban lokalni fudbalski microsite"
      title="Turnir Cerovac 2026"
      description="Poseban digitalni prostor za dugovecni i poznati turnir iz Cerovca. Odvojen od Arsenal blog rubrika, ali razvijen u istom kvalitetnom sistemu da ostane brz, stabilan i lak za sirenje."
    >
      <CountdownBanner />

      <section style={{ padding: '2rem 0 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '1rem' }} className="turnir-quick-grid">
          {[
            ['Kada', 'Poslednja nedelja jula'],
            ['Gde', 'Cerovac'],
            ['Identitet', 'Dugovecna fudbalska tradicija'],
            ['Cilj 2026', 'Jaci fond nagrada i ozbiljnija organizacija'],
          ].map(([label, value]) => (
            <div key={label} style={{ borderRadius: '22px', border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', padding: '1.1rem 1rem' }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.45rem' }}>
                {label}
              </div>
              <div style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.55 }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '3rem 0 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '1.5rem' }} className="turnir-story-grid">
          <div style={{ borderRadius: '28px', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))', padding: '1.6rem' }}>
            <TournamentSectionHeading label="Tradicija" title="Turnir koji nije samo sportski termin u kalendaru" description="Cerovac vec godinama ima turnir koji okuplja ljude, ekipe i publiku iz sireg kraja. Zato ova sekcija mora da cuva identitet i tezinu cele price, ne samo rezultate." />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '0.9rem' }} className="turnir-stats-grid">
              <div style={{ padding: '1rem', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.66rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.45rem' }}>Termin</div>
                <div style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.5 }}>Poslednja nedelja jula</div>
              </div>
              <div style={{ padding: '1rem', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.66rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.45rem' }}>Karakter</div>
                <div style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.5 }}>Dugovecna lokalna tradicija</div>
              </div>
              <div style={{ padding: '1rem', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.66rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.45rem' }}>Cilj</div>
                <div style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.5 }}>Jacanje turnira i fonda nagrada</div>
              </div>
            </div>
          </div>

          <div style={{ borderRadius: '28px', border: '1px solid rgba(196,163,90,0.16)', background: 'linear-gradient(180deg, rgba(196,163,90,0.09), rgba(255,255,255,0.015))', padding: '1.6rem' }}>
            <TournamentSectionHeading label="Partnerstvo" title="Kako sajt pomaze turniru da donese vise" description="Kada turnir izgleda ozbiljno online, lakse je privuci firme, publiku i podrsku. Zato ova stranica mora da radi i kao medijski prostor i kao prezentacija za potencijalne sponzore." />
            <div style={{ display: 'grid', gap: '0.8rem' }}>
              {[
                'istaknuti partneri i glavni sponzori',
                'jaci utisak tradicije i organizacije',
                'veca vidljivost za lokalne firme',
                'vise razloga da turnir dobije veci fond nagrada',
              ].map((item) => (
                <div key={item} style={{ padding: '0.95rem 1rem', borderRadius: '18px', background: 'rgba(0,0,0,0.12)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="turnir-identity-grid">
          <div style={{ borderRadius: '28px', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))', padding: '1.6rem' }}>
            <TournamentSectionHeading label="Vise od turnira" title="Letnji dogadjaj koji okuplja selo i okolinu" description="Turnir Cerovac nije samo nekoliko utakmica. To je sportski i drustveni dogadjaj koji godinama vraca ljude na teren, okuplja publiku i cuva lokalni identitet kroz fudbal." />
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.64)', marginBottom: '1rem' }}>
              Kada turnir izgleda ozbiljno na internetu, lakse je da i spolja bude shvacen ozbiljno. To pomaze da se prica cuje dalje, da sponzori vide vrednost i da organizacija dobije prostor da raste, umesto da se svake godine bori samo da prezivi.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.64)' }}>
              Cilj ove stranice zato nije samo da objavi raspored. Cilj je da pokaze da `Turnir Cerovac` zasluzuje paznju, podrsku i buducnost.
            </p>
          </div>

          <div style={{ borderRadius: '28px', border: '1px solid rgba(196,163,90,0.16)', background: 'linear-gradient(180deg, rgba(196,163,90,0.08), rgba(255,255,255,0.015))', padding: '1.6rem' }}>
            <TournamentSectionHeading label="Izdvojena prica" title="Tradicija koja ne sme da se ugasi" description="Turnir se igra jednom godisnje, ali njegov znacaj traje mnogo duze od nekoliko julskih dana. Zato je ovo pravo vreme da se prica podigne na visi nivo i privuce nova energija." />
            <div style={{ padding: '1rem 1.1rem', borderRadius: '20px', background: 'rgba(0,0,0,0.14)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', fontSize: '1rem', lineHeight: 1.8 }}>
              Ako se oko turnira napravi ozbiljan digitalni nastup, onda se ne cuva samo raspored meceva. Cuva se uspomena, reputacija sela i prostor da naredne godine fond nagrada, organizacija i interesovanje budu veci nego danas.
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0 0' }}>
        <div style={{ borderRadius: '28px', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))', padding: '1.5rem' }}>
          <TournamentSectionHeading label="Ljudi turnira" title="Turnir pamti i ljude, ne samo rezultate" description="Vremenom ovde mogu da stoje kratke price o igracima i licima koja su godinama obelezavala Cerovac. Za sada je izdvojena samo jedna rodjendanska, vise simbolicna prica." />
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '1.2rem' }} className="turnir-people-teaser">
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '22px', minHeight: '340px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <Image src="/media/marko/marko-portret-site.jpg" alt="Marko Petkovic" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }} className="turnir-marko-gallery">
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '18px', minHeight: '210px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <Image src="/media/marko/marko-jasenica-arad-site.jpg" alt="Marko Petkovic sa generacijom Jasenice" fill sizes="(max-width: 900px) 100vw, 20vw" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '18px', minHeight: '210px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <Image src="/media/marko/marko-sampioni-teren-site.jpg" alt="Marko Petkovic sa sampionskom generacijom" fill sizes="(max-width: 900px) 100vw, 20vw" style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gap: '0.85rem', alignContent: 'start' }}>
              <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.64)', margin: 0 }}>
                Medju ljudima koji su godinama bili deo ove turnirske price nalazi se i <strong style={{ color: '#fff' }}>Marko Petkovic</strong>, igrac sa ozbiljnom fudbalskom osnovom, iskustvom na brojnim turnirima i proslogodisnjim osvajanjem Turnira Cerovac.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.64)', margin: 0 }}>
                Iz materijala koji si poslao vidi se i siri trag: rad sa mladjim kategorijama, medjunarodni turnir u Aradu sa generacijom 2008, kao i sezona u kojoj je ta generacija postala prvak `Lige buducih sampiona` sa impresivnim bilansom.
              </p>
              <div style={{ padding: '0.95rem 1rem', borderRadius: '18px', background: 'rgba(196,163,90,0.08)', border: '1px solid rgba(196,163,90,0.18)', color: '#fff', fontSize: '0.96rem', lineHeight: 1.6 }}>
                rodjen 1. aprila 1991.
              </div>
              <div style={{ padding: '0.95rem 1rem', borderRadius: '18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.96rem', lineHeight: 1.6 }}>
                mladje kategorije Smedereva i Crvene zvezde
              </div>
              <div style={{ padding: '0.95rem 1rem', borderRadius: '18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.96rem', lineHeight: 1.6 }}>
                rad sa mladjima i zapazeni rezultati sa Jasenicom
              </div>
              <div style={{ padding: '0.95rem 1rem', borderRadius: '18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.96rem', lineHeight: 1.6 }}>
                proslogodisnji osvajac turnira sa ekipom Cerovca
              </div>
            </div>
          </div>
        </div>
      </section>

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
        <TournamentSectionHeading label="Istorijat" title="Pobednici koji daju tezinu turniru" description="I kada podaci jos nisu kompletni za svaku godinu, istorijat i nekoliko jakih sezona odmah pokazuju da se radi o turniru sa ozbiljnom tradicijom." />
        <HistoryTimeline items={history} />
      </section>

      <section style={{ padding: '4rem 0 0' }}>
        <TournamentSectionHeading label="Partneri" title="Ljudi i firme koje guraju pricu" description="Sponzori i partneri mogu da se prosiruju kroz zaseban JSON bez menjanja strukture stranice." />
        <SponsorGrid sponsors={sponsors} />
      </section>

      <section style={{ padding: '4rem 0 0' }}>
        <TournamentSectionHeading label="Postani sponzor" title="Partnerstvo koje ima smisla i za turnir i za firme" description="Ako hocemo veci fond nagrada i jacu organizaciju, onda sponzorstvo mora da ima jasnu vrednost. Ove tri pozicije su dobra osnova za ozbiljniji pristup lokalnim partnerima." />
        <SponsorshipPackages />
      </section>

      <section style={{ padding: '4rem 0 4rem' }}>
        <TournamentSectionHeading label="Turnirske vesti" title="Najnovije price sa sela i terena" description="Poseban feed za sve sto se desava oko turnira, od najava do brzih izvestaja i organizacionih objava." />
        <NewsPreviewGrid items={news} />
      </section>

      <section style={{ padding: '0 0 4rem' }}>
        <div style={{ borderRadius: '30px', border: '1px solid rgba(196,163,90,0.16)', background: 'linear-gradient(135deg, rgba(196,163,90,0.09), rgba(255,255,255,0.02))', padding: '1.8rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '1.5rem', alignItems: 'center' }} className="turnir-cta-grid">
            <div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.75rem' }}>
                Poziv na saradnju
              </div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', lineHeight: 1.05, marginBottom: '0.75rem' }}>
                Ako zelis da turnir raste, sada je trenutak da se prica podigne jos vise.
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.62)' }}>
                `Turnir Cerovac` moze da donese vise publiciteta, bolju organizaciju i veci fond nagrada samo ako dobije pravu podrsku. Ova stranica je temelj za sledeci korak.
              </p>
            </div>
            <div style={{ display: 'grid', gap: '0.8rem' }}>
              <div style={{ padding: '1rem', borderRadius: '18px', background: 'rgba(0,0,0,0.14)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.98rem', lineHeight: 1.65 }}>
                Partneri dobijaju ozbiljniji nastup i vidljivost.
              </div>
              <div style={{ padding: '1rem', borderRadius: '18px', background: 'rgba(0,0,0,0.14)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.98rem', lineHeight: 1.65 }}>
                Turnir dobija vecu sansu da podigne fond nagrada i kvalitet organizacije.
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .turnir-grid-two { grid-template-columns: 1fr !important; }
          .turnir-story-grid { grid-template-columns: 1fr !important; }
          .turnir-identity-grid { grid-template-columns: 1fr !important; }
          .turnir-people-teaser { grid-template-columns: 1fr !important; }
          .turnir-marko-gallery { grid-template-columns: 1fr !important; }
          .turnir-cta-grid { grid-template-columns: 1fr !important; }
          .turnir-stats-grid { grid-template-columns: 1fr !important; }
          .turnir-quick-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 640px) {
          .turnir-quick-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </TournamentShell>
  )
}
