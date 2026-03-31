# The Cannon — Arsenal Blog

Magazine-style blog za Arsenal. Next.js 15, TypeScript, Tailwind CSS.

---

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Otvori `http://localhost:3000`

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

---

## Deploy na Vercel

1. Push projekat na GitHub
2. Otvori [vercel.com](https://vercel.com) → New Project → Import sa GitHub
3. Vercel prepoznaje Next.js automatski → klikni Deploy
4. Svaki `git push` automatski rebuilda sajt

---

## Kako mi šalješ materijal za novi post

Okači mi u chat:
- Screenshots ili slike
- Tekst, beleške, detalji
- Kaži kategoriju i ton

Ja napišem gotov `.md` fajl koji samo copy-paste-uješ u `content/posts/`.
