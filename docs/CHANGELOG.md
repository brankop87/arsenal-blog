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

### Branding
- dodat footer CTA:
  - `Website powered by Petkovic Solutions`

### Verifikacija
- production build uspesno prosao nakon izmena
