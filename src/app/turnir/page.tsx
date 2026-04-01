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
import {
  getFinishedMatches,
  getSponsors,
  getStandings,
  getTournamentHistory,
  getTournamentNews,
  getUpcomingMatches,
} from '@/lib/tournament'

export const metadata: Metadata = {
  title: 'Turnir Cerovac',
  description: 'Dugovecni lokalni fudbalski turnir u Cerovcu: raspored, rezultati, tabela, timovi i partneri.',
}

export default function TurnirPage() {
  const upcoming = getUpcomingMatches().slice(0, 2)
  const results = getFinishedMatches().slice(0, 2)
  const standings = getStandings().slice(0, 5)
  const sponsors = getSponsors().slice(0, 4)
  const news = getTournamentNews().slice(0, 4)
  const history = getTournamentHistory()

  return (
    <TournamentShell
      eyebrow="Zaseban lokalni fudbalski microsite"
      title="Turnir Cerovac 2026"
      description="Digitalni dom za dugovecni i poznati turnir iz Cerovca. Mesto gde se cuvaju tradicija, rezultati, ljudi turnira i prostor za rast turnira kroz bolju organizaciju, veci fond nagrada i ozbiljniju podrsku partnera."
    >
      <CountdownBanner />

      <section style={{ padding: '2rem 0 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '1rem' }} className="turnir-quick-grid">
          {[
            ['Kada', 'Poslednja nedelja jula'],
            ['Gde', 'Cerovac'],
            ['Tradicija', 'Dugogodisnji letnji turnir'],
            ['Cilj 2026', 'Vise partnera, jaci fond i ozbiljniji nastup'],
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
          <div style={{ borderRadius: '28px', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))', padding: '1.7rem' }}>
            <TournamentSectionHeading
              label="Vise od turnira"
              title="Dogadjaj koji okuplja Cerovac i siri kraj"
              description="Turnir Cerovac nije samo sportski termin u kalendaru. To je letnji dogadjaj koji godinama vraca ljude na teren, okuplja publiku, pamti finala i drzi zivom lokalnu fudbalsku pricu."
            />
            <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.64)', marginBottom: '1rem' }}>
              Kroz godine se turnir odrzao zahvaljujuci ljudima koji ga nose, ekipama koje se vracaju i publici koja i dalje dolazi zbog atmosfere, rivaliteta i osecaja da se desava nesto sto pripada selu i njegovoj tradiciji. Upravo zato ova stranica nije napravljena samo kao tabela rezultata, vec kao mesto koje treba da cuva i ojaca identitet turnira.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.64)' }}>
              Ako `Turnir Cerovac` online izgleda ozbiljno, lakse je da ga ozbiljno shvate i publika, i lokalne firme, i svi oni koji mogu da doprinesu da turnir sledecih godina bude organizovaniji, jaci i finansijski stabilniji.
            </p>
          </div>

          <div style={{ borderRadius: '28px', border: '1px solid rgba(196,163,90,0.16)', background: 'linear-gradient(180deg, rgba(196,163,90,0.09), rgba(255,255,255,0.015))', padding: '1.7rem' }}>
            <TournamentSectionHeading
              label="Zasto je vazno"
              title="Tradicija koja zasluzuje vecu podrsku"
              description="Turnir se igra jednom godisnje, ali njegov znacaj traje mnogo duze od nekoliko julskih dana. Zato cilj nije samo da opstane, nego da svake godine raste."
            />
            <div style={{ display: 'grid', gap: '0.8rem' }}>
              {[
                'veci fond nagrada za ekipe i pojedince',
                'ozbiljniji nastup prema partnerima i sponzorima',
                'uredjen digitalni arhiv pobednika, finala i ljudi turnira',
                'jaci utisak organizacije i veca vidljivost za lokalne firme',
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="turnir-match-grid">
          <div>
            <TournamentSectionHeading
              label="Sledece utakmice"
              title="Sta sledi na terenu"
              description="Raspored ostaje pregledan i lak za kasnije rucne izmene, tako da se turnirske informacije mogu azurirati brzo i bez komplikovane administracije."
            />
            <div style={{ display: 'grid', gap: '1rem' }}>
              {upcoming.map((match) => <MatchCard key={match.id} match={match} />)}
            </div>
          </div>
          <div>
            <TournamentSectionHeading
              label="Poslednji rezultati"
              title="Skorovi i kratki pregled"
              description="Rezultati moraju da budu odmah vidljivi, jer su oni prvi razlog zbog kog se publika vraca na sajt tokom turnirske nedelje."
            />
            <div style={{ display: 'grid', gap: '1rem' }}>
              {results.map((match) => <MatchCard key={match.id} match={match} />)}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0 0' }}>
        <TournamentSectionHeading
          label="Tabela"
          title="Pregled plasmana"
          description="Gornji deo tabele daje brz pregled, dok puna tabela moze da raste kako budes vremenom dopunjavao podatke i rezultatima davao siri kontekst."
        />
        <StandingsTable rows={standings} />
      </section>

      <section style={{ padding: '4rem 0 0' }}>
        <TournamentSectionHeading
          label="Istorijat"
          title="Pobednici koji daju tezinu turniru"
          description="Kada turnir ima upisane sampione, finala i godine, odmah dobija vecu tezinu. Ovo je pocetna baza koju cemo prosirivati cim pronadjes starije rezultate."
        />
        <HistoryTimeline items={history} />
      </section>

      <section style={{ padding: '4rem 0 0' }}>
        <div style={{ borderRadius: '28px', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))', padding: '1.6rem' }}>
          <TournamentSectionHeading
            label="Ljudi turnira"
            title="Turnir pamti i lica koja su ga nosila"
            description="Vremenom ovde mogu da stoje kratke price o igracima, trenerima i ljudima koji su godinama ostavljali trag u Cerovcu. Za sada je izdvojena jedna simbolicna prica."
          />
          <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '1.2rem' }} className="turnir-people-grid">
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '22px', minHeight: '360px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <Image src="/media/marko/marko-portret-site.jpg" alt="Marko Petkovic" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }} className="turnir-marko-gallery">
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '18px', minHeight: '220px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <Image src="/media/marko/marko-jasenica-arad-site.jpg" alt="Marko Petkovic sa generacijom Jasenice" fill sizes="(max-width: 900px) 100vw, 22vw" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '18px', minHeight: '220px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <Image src="/media/marko/marko-sampioni-teren-site.jpg" alt="Marko Petkovic sa sampionskom generacijom" fill sizes="(max-width: 900px) 100vw, 22vw" style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '0.85rem', alignContent: 'start' }}>
              <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.64)', margin: 0 }}>
                Medju ljudima koji su godinama bili deo ove turnirske price nalazi se i <strong style={{ color: '#fff' }}>Marko Petkovic</strong>, igrac sa ozbiljnom fudbalskom osnovom, iskustvom na brojnim turnirima i proslogodisnjim osvajanjem Turnira Cerovac.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.64)', margin: 0 }}>
                Iz materijala koji si poslao vidi se i siri trag: rad sa mladjim kategorijama, medjunarodni turnir u Aradu sa generacijom 2008, kao i sezona u kojoj je ta generacija postala prvak `Lige buducih sampiona` sa veoma jakim bilansom. To je dovoljno da se ovakva prica sacuva kao deo identiteta turnira, ali bez prenaglasavanja.
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

      <section style={{ padding: '4rem 0 0' }}>
        <TournamentSectionHeading
          label="Partneri"
          title="Ljudi i firme koje guraju pricu"
          description="Partneri i sponzori ovde ne treba da budu samo spisak. Treba da deluju kao deo ozbiljne price koja donosi vidljivost njima, a stabilnost turniru."
        />
        <SponsorGrid sponsors={sponsors} />
      </section>

      <section style={{ padding: '4rem 0 0' }}>
        <TournamentSectionHeading
          label="Postani sponzor"
          title="Partnerstvo koje ima smisla i za turnir i za firme"
          description="Ako hocemo veci fond nagrada i jacu organizaciju, sponzorstvo mora da ima jasnu vrednost. Ovo je pocetak ozbiljnijeg modela saradnje koji mozes nuditi lokalnim firmama."
        />
        <SponsorshipPackages />
      </section>

      <section style={{ padding: '4rem 0 0' }}>
        <TournamentSectionHeading
          label="Turnirske vesti"
          title="Najnovije price sa sela i terena"
          description="Najave, kratki izvestaji, price o igracima i sve ono sto daje dinamiku turniru. Ovo je sekcija koja treba da dokaze da se ovde desava nesto zivo."
        />
        <NewsPreviewGrid items={news} />
      </section>

      <section style={{ padding: '4rem 0 4rem' }}>
        <div style={{ borderRadius: '30px', border: '1px solid rgba(196,163,90,0.16)', background: 'linear-gradient(135deg, rgba(196,163,90,0.09), rgba(255,255,255,0.02))', padding: '1.8rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '1.5rem', alignItems: 'center' }} className="turnir-cta-grid">
            <div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.75rem' }}>
                Poziv na saradnju
              </div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', lineHeight: 1.05, marginBottom: '0.75rem' }}>
                Ako turnir treba da raste, sada je trenutak da dobije ozbiljniju podrsku.
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.62)' }}>
                `Turnir Cerovac` moze da donese vise publiciteta, bolju organizaciju i veci fond nagrada samo ako dobije pravu energiju oko sebe. Ova stranica je osnova da se to prvi put predstavi kako treba.
              </p>
            </div>
            <div style={{ display: 'grid', gap: '0.8rem' }}>
              <div style={{ padding: '1rem', borderRadius: '18px', background: 'rgba(0,0,0,0.14)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.98rem', lineHeight: 1.65 }}>
                partneri dobijaju ozbiljniji nastup i vidljivost
              </div>
              <div style={{ padding: '1rem', borderRadius: '18px', background: 'rgba(0,0,0,0.14)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.98rem', lineHeight: 1.65 }}>
                turnir dobija vecu sansu da podigne fond nagrada i kvalitet organizacije
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 980px) {
          .turnir-story-grid { grid-template-columns: 1fr !important; }
          .turnir-match-grid { grid-template-columns: 1fr !important; }
          .turnir-identity-grid { grid-template-columns: 1fr !important; }
          .turnir-people-grid { grid-template-columns: 1fr !important; }
          .turnir-cta-grid { grid-template-columns: 1fr !important; }
          .turnir-quick-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 700px) {
          .turnir-marko-gallery { grid-template-columns: 1fr !important; }
          .turnir-quick-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </TournamentShell>
  )
}
