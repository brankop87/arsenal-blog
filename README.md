# The Cannon — Arsenal Blog

Magazine-style blog za Arsenal, sa dodatim modularnim `/turnir` microsite delom za lokalni fudbalski turnir. Next.js 15, TypeScript, Tailwind CSS.

---

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Otvori `http://localhost:3000`

Napomena za Windows/PowerShell:

```bash
npm.cmd run dev
npm.cmd run build
```

---

## Kako dodati novi post

1. Napravi novi `.md` fajl u `content/posts/`
2. Kopiraj ovaj template na vrh fajla:

```markdown
---
title: "Naslov posta"
excerpt: "Kratak opis koji se prikazuje na kartici (1-2 rečenice)"
date: "2025-03-20"
category: utakmice
featured: false
coverImage: "https://url-do-slike.jpg"
---

Tekst posta ide ovde...

## Naslov sekcije

Paragraf teksta.

> Citat nekoga važnog

**Podebljano** i *kurziv* rade normalno.
```

### Kategorije
- `utakmice` — izveštaji sa utakmica
- `treninzi` — sa treninga, povrede, forma
- `takmicenja` — tabele, runde, CL
- `vesti` — transferi, najave, ostalo

### Featured post
Postavi `featured: true` da bi post bio glavni na homepage-u. Samo jedan post treba da ima `featured: true`.

### Cover slika
URL slike sa interneta u `coverImage`. Preporučeno: 1200×675px (16:9 format).

Ako `coverImage` ostane prazan, sajt sada automatski koristi branded fallback cover.

### Potpis autora
Na kraju svakog teksta standardno dodaj:

```markdown
_Autor: B._
```

To ostaje kao diskretan i dosledan urednicki potpis kroz ceo blog.

---

## Turnir modul

Nova sekcija je dostupna na:

- `/turnir`
- `/turnir/rezultati`
- `/turnir/tabela`
- `/turnir/timovi`
- `/turnir/sponzori`
- `/turnir/vesti`

### Gde se menjaju podaci za turnir

Podaci su trenutno lokalni i nalaze se ovde:

- `src/data/turnir/matches.json`
- `src/data/turnir/standings.json`
- `src/data/turnir/teams.json`
- `src/data/turnir/sponsors.json`
- `src/data/turnir/news.json`

To znaci da za svaku promenu:
- izmenis JSON
- uradis push
- Vercel odradi redeploy

### Plan za kasnije

Ako hocemo unos sa telefona bez ulaska u kod, sledeca faza je:
- Supabase
- mali admin panel
- unos rezultata i vesti preko forme

---

## Deploy na Vercel

1. Push projekat na GitHub
2. Otvori [vercel.com](https://vercel.com) → New Project → Import sa GitHub
3. Vercel prepoznaje Next.js automatski → klikni Deploy
4. Svaki `git push` automatski rebuilda sajt

Ako se lokalna promena ne vidi na sajtu, to znaci da jos nije otisla nova verzija na GitHub ili da Vercel nije zavrsio deploy.

---

## Projektna dokumentacija

Za nastavak rada obavezno gledati i ove fajlove:

- `MASTER_PLAN.md`
- `docs/ARCHITECTURE.md`
- `docs/CHANGELOG.md`
- `docs/BUGLOG.md`

---

## Kako mi šalješ materijal za novi post

Okači mi u chat:
- Screenshots ili slike
- Tekst, beleške, detalji
- Kaži kategoriju i ton

Ja napišem gotov `.md` fajl koji samo copy-paste-uješ u `content/posts/`.
