# The Cannon - Arsenal Blog

Magazine-style blog za Arsenal, sa dodatim modularnim `/turnir` microsite delom za lokalni fudbalski turnir. Next.js 15, TypeScript, file-based content i Vercel deploy.

Pored srpskog glavnog sajta, projekat sada ima i portfolio layer za blog na engleskom i nemackom:
- `/en`
- `/en/blog/[slug]`
- `/en/categories/[category]`
- `/de`
- `/de/blog/[slug]`
- `/de/categories/[category]`

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

## Sta je trenutno aktivno

- Arsenal blog sa markdown postovima
- `Turnir Cerovac` kao zaseban modul unutar istog projekta
- branded fallback cover sistem kada post nema sliku
- urednicki potpis na postovima: `_Autor: B._`
- Vercel Analytics za pracenje osnovne posecenosti
- engleski i nemacki portfolio layer za blog deo sajta

---

## Kako dodati novi post

1. Napravi novi `.md` fajl u `content/posts/`
2. Kopiraj ovaj template na vrh fajla:

```markdown
---
title: "Naslov posta"
excerpt: "Kratak opis koji se prikazuje na kartici (1-2 recenice)"
titleEn: "Optional English title"
excerptEn: "Optional English excerpt"
titleDe: "Optional German title"
excerptDe: "Optional German excerpt"
date: "2025-03-20"
category: utakmice
featured: false
coverImage: "https://url-do-slike.jpg"
---

Tekst posta ide ovde...

## Naslov sekcije

Paragraf teksta.

> Citat nekoga vaznog

**Podebljano** i *kurziv* rade normalno.

_Autor: B._
```

### Kategorije
- `utakmice` - izvestaji sa utakmica
- `treninzi` - sa treninga, povrede, forma
- `takmicenja` - tabele, runde, CL
- `vesti` - transferi, najave, ostalo

### Featured post
Homepage sada po difoltu uzima najsveziji post kao glavni hero. `featured` polje je zadrzano u frontmatter-u, ali glavni ritam naslovne vise ne zavisi od njega.

### Cover slika
URL slike sa interneta u `coverImage`. Preporuceno: 1200x675px (16:9 format).

Ako `coverImage` ostane prazan, sajt automatski koristi branded fallback cover.

### Potpis autora
Na kraju svakog teksta standardno dodaj:

```markdown
_Autor: B._
```

To ostaje kao diskretan i dosledan urednicki potpis kroz ceo blog.

### Portfolio prevodi
Ako hoces da se isti post smisleno prikaze i na `/en` i `/de`, dodaj:

```markdown
titleEn: "English title"
excerptEn: "English excerpt"
titleDe: "German title"
excerptDe: "German excerpt"
```

Za sada je to dovoljno da homepage, listing, kategorije i hero deluju portfolio-friendly, bez pune duplirane verzije clanka.
Srpski tekst ostaje glavni izvor istine, dok `/en` i `/de` jasno prikazuju da je originalni clanak na srpskom dok ne uvedemo kompletne prevode tela teksta.

---

## Turnir modul

Nova sekcija je dostupna na:

- `/turnir`
- `/turnir/rezultati`
- `/turnir/tabela`
- `/turnir/timovi`
- `/turnir/sponzori`
- `/turnir/vesti`
- `/turnir/istorijat`

### Gde se menjaju podaci za turnir

Podaci su trenutno lokalni i nalaze se ovde:

- `src/data/turnir/matches.json`
- `src/data/turnir/standings.json`
- `src/data/turnir/teams.json`
- `src/data/turnir/sponsors.json`
- `src/data/turnir/news.json`
- `src/data/turnir/history.json`

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

## Analytics

Web analytics je uveden preko `@vercel/analytics`.

Trenutno stanje:
- osnovni visitors/page views rade kroz Vercel dashboard
- dovoljno za rani pregled sta ljudi citaju
- sledeci korak kasnije moze biti subscribe/newsletter sloj

---

## Deploy na Vercel

1. Push projekat na GitHub
2. Vercel automatski rebuilda sajt na svaki `git push`
3. Ako se lokalna promena ne vidi na sajtu, proveri:
   - da li je commit otisao na GitHub
   - da li je Vercel deployment `Ready`
   - da li gledas pravu rutu

---

## Projektna dokumentacija

Za nastavak rada obavezno gledati i ove fajlove:

- `MASTER_PLAN.md`
- `docs/ARCHITECTURE.md`
- `docs/CHANGELOG.md`
- `docs/BUGLOG.md`

---

## Kako mi saljes materijal za novi post

Okaci mi u chat:
- screenshots ili slike
- tekst, beleske, detalji
- kategoriju i ton

Ja vracam gotov `.md` fajl spreman za projekat, sa naslovom, excerptom i po potrebi i engleskim `titleEn/excerptEn` slojem za portfolio prikaz.
Po potrebi mogu odmah dodati i nemacki `titleDe/excerptDe` sloj.
