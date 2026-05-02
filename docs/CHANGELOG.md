# Changelog

## 2026-04-25

### Subscribe / Newsletter
- subscribe forma je aktivna na homepage i blog postovima za `sr` / `en` / `de`
- dodat `src/components/SubscribeForm.tsx`
- aktivan API route `src/app/api/subscribe/route.ts`
- Brevo integracija proradila sa novim API kljucem
- produkciono potvrden `BREVO_LIST_ID = 3` za listu `Cannon Culture Subscribers`
- test prijava prosla uspesno i kontakt je upisan u Brevo listu

### SEO / Search Console
- Google Search Console aktiviran za domain property `cannonculture.com`
- uradjena DNS TXT verifikacija preko Namecheap-a
- `src/app/sitemap.ts` ispravljen da koristi `https://cannonculture.com`
- sitemap submitovan kroz Search Console:
  - `https://cannonculture.com/sitemap.xml`

### Operativno stanje
- subscribe vise nije planirana funkcija nego aktivan platform feature
- newsletter backend je povezan sa Brevo listom i spreman za dalje sirenje publike
- Search Console i sitemap sada daju osnovu da Google urednije prati sajt i nove objave

## 2026-03-31

### Redizajn bloga
- unapredjen homepage u ozbiljniji editorial stil
- dodat jaci hero raspored
- unapredjene blog kartice i hoveri
- kategorije pretvorene u bogatije sekcije
- sredjeni navbar i footer
- dodat branded fallback za postove bez slike

### Novi pomocni sistem za covere
- dodat `src/lib/postTheme.ts`
- uvedena fallback cover logika po kategoriji
- resen problem praznih kartica kada `coverImage` ne postoji

### Turnir microsite
- dodat novi route segment `/turnir`
- dodate stranice:
  - `/turnir`
  - `/turnir/rezultati`
  - `/turnir/tabela`
  - `/turnir/timovi`
  - `/turnir/sponzori`
  - `/turnir/vesti`
- dodati lokalni JSON podaci za turnir
- dodate reusable komponente za meceve, tabelu, timove, sponzore i vesti
- turnir preimenovan i pozicioniran kao zaseban brend: `Turnir Cerovac`
- turnir odvojen u navigaciji i footeru od Arsenal rubrika
- dodat veliki countdown do poslednje subote u julu na naslovnoj turnira
- dodat jaci uvodni blok o tradiciji i sponzorskoj vrednosti turnira
- dodati brzi info blokovi za termin, identitet i cilj turnira
- dodat istorijat pobednika na naslovnoj turnira
- dodati sponzorski paketi i jaci CTA za saradnju
- dodata zasebna stranica `/turnir/istorijat`
- Markov blok na naslovnoj turnira smanjen na diskretniji teaser
- `Turnir Cerovac` naslovna ponovo slozena kao jedna puna, konsolidovana stranica sa svim glavnim sekcijama

### Branding
- dodat footer CTA:
  - `Website powered by Petkovic Solutions`

### Novi sadrzaj
- dodat novi Arsenal preview post za Southampton u FA Cup cetvrtfinalu
- dodat free cover image iz Pexels licence za novi post
- dodat rodjendanski mini profil / reportaza za Marka Petkovica
- Marko Petkovic dodat i u `Turnir Cerovac` sekciju kao jedna od lokalnih prica / ljudi turnira
- dodat Arsenal matchday post za Southampton u FA kupu
- dodat novi blog tekst posle FA kup poraza, uoci meca sa Sportingom
- doteran tekst pred Sporting: dodat potpis autora, ispravljena formulacija i ubacene dodatne free slike
- uveden standardni potpis `_Autor: B._` kao urednicki zavrsetak za nove i doterane postove
- homepage osvezen tako da udarna prica prati najsveziji tekst, a interni demo blok zamenjen korisnijim urednickim sidebarom
- dodat prvi krug srpskih slova na najvidljivijim delovima sajta i na istaknutim postovima sa naslovne
- dokumentovan dugorocni modularni smer projekta: blog, turnir, publika, subscribe i admin se vode kao jedna platforma
- dodat prvi engleski portfolio layer za blog: `/en`, engleske kategorije i engleski blog prikaz bez diranja turnir sekcije
- dodat novi Arsenal tekst posle poraza od Bournemoutha, sa kontekstom pobede nad Sportingom i Artetinim preuzimanjem odgovornosti
- dodat nemacki portfolio layer za blog: `/de`, nemacke kategorije i nemacki blog prikaz bez diranja srpskog sajta i turnira
- dodat `SR / EN / DE` language switch u navbaru za blog deo sajta, sa mapiranjem homepage-a, postova i kategorija
- dodat sistem za opcioni puni prevod tela posta preko `content/posts/{locale}/{slug}.md`
- dodat pun nemacki prevod za poslednji Arsenal tekst `arsenal-pritisak-bournemouth-sporting`
- dodat novi Arsenal tekst `arsenal-sporting-etihad-vikend-odluke` kao kompletan SR/EN/DE paket pred utakmicu sezone na Etihadu
- dodat novi Arsenal tekst `arsenal-city-poraz-trka-do-kraja` kao kompletan SR/EN/DE paket posle poraza na Etihadu
- dodat novi Arsenal preview tekst rsenal-newcastle-preview-posle-etihada kao kompletan SR/EN/DE paket pred domaci mec sa Newcastleom
- dodat novi Arsenal report tekst `arsenal-newcastle-eze-bomba-prva-prepreka` kao kompletan SR/EN/DE paket posle pobede nad Newcastleom

### Verifikacija
- production build uspesno prosao nakon izmena


- ispravljen footer disclaimer: londonski Arsenal precizno oznacen kao Arsenal FC iz Londona, Engleska, uz tacno pravno ime The Arsenal Football Club Limited

- SEO sloj standardizovan na https://www.cannonculture.com kroz metadataBase, canonical URL-ove, sitemap i apex-to-www redirect

- Dodat novi preview tekst za prvo polufinale protiv Atletiko Madrida u SR/EN/DE varijanti, uz suptilan subscribe CTA i free-use cover vizual.

- Ispravljena netačna formulacija u Atletiko preview-u: Arsenal nije prvi put među poslednja četiri, već igra drugo uzastopno polufinale i ukupno četvrto u Kupu šampiona/Ligi šampiona.

- Dodat ispravan match report posle prvog meča protiv Atletiko Madrida u SR/EN/DE varijanti, na osnovu korisnikovog sirovog osvrta, uz ispravljen UTF-8 encoding srpskog fajla.

- Dodat brzi Fulham post posle pobede od 3:0 kao kratki noćni update pred punu analizu.
- Kreiran i ispeglan archive slug rsenal-fulham-matchday-preview u SR/EN/DE varijanti, uz bolji cover i ispravljen UTF-8 encoding srpskog teksta.

- Sortiranje postova na naslovnoj pojačano je tako da kod istog datuma prednost imaju eatured tekstovi, a zatim novije izmene fajla, kako bi gotov report išao ispred starijeg preview-a.

- Dodat puni Fulham report rsenal-fulham-najzad-pravo-poluvreme-na-emirejtsu u SR/EN/DE varijanti, kao detaljnija analiza posle kratkog noćnog update-a.
