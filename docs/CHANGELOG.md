# Changelog

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

### Verifikacija
- production build uspesno prosao nakon izmena
