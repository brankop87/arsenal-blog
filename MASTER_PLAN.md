# THE CANNON — Arsenal Blog
## Master Plan & Project Rules

> Ovaj fajl je zakon projekta. Pre nego što se napiše bilo koji kod, čita se ovaj fajl.
> Svaki saradnik (uključujući AI) mora slediti ova pravila bez izuzetka.

---

## 1. TEHNOLOŠKI STACK (potvrđen iz dokumentacije)

### Core
| Tehnologija | Verzija | Zašto |
|---|---|---|
| Next.js | 15.x (App Router) | File-system routing, RSC, Server Actions |
| React | 19.x | Ugrađen u Next.js 15 App Router |
| TypeScript | 5.x | Type safety, obavezno |
| Tailwind CSS | 3.x (v3, ne v4) | v3 je potvrđen da radi sa Next.js 15 |

### Backend / Baza
| Tehnologija | Zašto |
|---|---|
| Supabase | PostgreSQL baza, auth, storage, real-time |
| @supabase/ssr | Zvanični paket za Next.js App Router (server + client) |

### Sadržaj (Content)
| Tehnologija | Zašto |
|---|---|
| Markdown fajlovi (.md) | Dodaješ post = napraviš fajl, nema baze za sadržaj |
| gray-matter | Parsira frontmatter iz .md fajlova |
| remark + remark-gfm | Pretvara Markdown u HTML (zvanični Next.js pattern) |
| remark-rehype + rehype-stringify | Deo pipeline-a, potvrđen iz Next.js docs |

### Deploy
| Tehnologija | Zašto |
|---|---|
| Vercel | Free tier, auto-deploy na git push, optimizovan za Next.js |
| GitHub | Source control, Vercel se konektuje direktno |

---

## 2. ZLATNA PRAVILA (ne sme se prekršiti)

### Pravilo 1 — Server vs Client komponente
```
SERVER komponenta (default, bez direktive):
✅ Može: fs, path, gray-matter, remark, direktan DB poziv
✅ Može: async/await direktno u komponenti
❌ Ne može: useState, useEffect, onClick, onMouseEnter
❌ Ne može: window, document, browser API-ji

CLIENT komponenta ('use client' na vrhu fajla):
✅ Može: useState, useEffect, onClick, onMouseEnter
✅ Može: browser API-ji
❌ Ne može: fs, path, gray-matter, remark
❌ Ne može: direktan DB poziv (samo kroz Server Actions ili API routes)
```

### Pravilo 2 — Šta ide u koji fajl
```
src/lib/posts.ts          → SAMO server kod (fs, remark, gray-matter)
src/lib/categories.ts     → Konstante BEZ imports (bezbedno i za klijent i server)
src/lib/supabase/
  server.ts               → Supabase klijent za server komponente
  client.ts               → Supabase klijent za 'use client' komponente

src/app/**/page.tsx       → Server komponenta (default)
src/app/**/layout.tsx     → Server komponenta (default)
src/components/*          → Svaki fajl MORA imati 'use client' ako koristi
                            state/events, ili ne sme importovati fs/path
```

### Pravilo 3 — params je Promise u Next.js 15
```typescript
// ✅ ISPRAVNO
type Props = { params: Promise<{ slug: string }> }
export default async function Page({ params }: Props) {
  const { slug } = await params  // MORA await
}

// ❌ POGREŠNO (Next.js 14 stil)
export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug  // NE RADI u Next.js 15
}
```

### Pravilo 4 — Nikad ne mešaj server i klijent imports
```typescript
// ❌ NIKAD OVAKO — klijentska komponenta ne sme importovati fajl koji ima 'fs'
'use client'
import { getAllPosts } from '@/lib/posts'  // posts.ts koristi 'fs' → GREŠKA

// ✅ UVEK OVAKO — podeli u posebne fajlove
'use client'
import { categoryLabels } from '@/lib/categories'  // samo konstante, nema 'fs'
```

### Pravilo 5 — Tailwind v3, ne v4
Next.js 15 dokumentacija eksplicitno preporučuje Tailwind CSS v3 za širu kompatibilnost.
`tailwind.config.js` (ne `.ts`), standardni format.

---

## 3. ARHITEKTURA FOLDERA

```
src/
├── app/
│   ├── layout.tsx              ← Root layout, SERVER, globalni metadata
│   ├── page.tsx                ← Homepage, SERVER
│   ├── not-found.tsx           ← 404, SERVER
│   │
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx        ← Post stranica, SERVER, async params
│   │
│   ├── kategorije/
│   │   └── [kategorija]/
│   │       └── page.tsx        ← Kategorija, SERVER, async params
│   │
│   └── api/                    ← Route Handlers (buduće faze)
│       ├── comments/
│       │   └── route.ts        ← GET/POST komentari
│       └── subscribe/
│           └── route.ts        ← POST newsletter prijava
│
├── components/
│   ├── Navbar.tsx              ← CLIENT ('use client', useState za mobile)
│   ├── Footer.tsx              ← SERVER (nema interakcije)
│   ├── PostCard.tsx            ← CLIENT ('use client', hover events)
│   └── CategoryGrid.tsx        ← CLIENT ('use client', hover events)
│
└── lib/
    ├── categories.ts           ← Konstante, BEZ fs/path (bezbedno svuda)
    ├── posts.ts                ← Server only (fs, remark, gray-matter)
    └── supabase/               ← Buduće faze
        ├── server.ts
        └── client.ts

content/
└── posts/                      ← .md fajlovi (sadržaj bloga)
    └── naziv-posta.md
```

---

## 4. FRONTMATTER STANDARD ZA POSTOVE

Svaki `.md` fajl u `content/posts/` mora imati:

```yaml
---
title: "Naslov posta"
excerpt: "Kratki opis (1-2 rečenice, prikazuje se na kartici)"
date: "2025-03-20"
category: utakmice
featured: false
coverImage: "https://url-slike.jpg"
---
```

Kategorije: `utakmice` | `treninzi` | `takmicenja` | `vesti`

Samo jedan post ima `featured: true` — prikazuje se kao glavni hero.

---

## 5. FAZE RAZVOJA

### Faza 1 — MVP (trenutno) ✅
- [x] Homepage sa featured postom i grid-om
- [x] Pojedinačna stranica posta
- [x] Kategorije stranice
- [x] Navbar i Footer
- [x] Markdown sadržaj (gray-matter + remark)
- [x] 404 stranica
- [x] Deploy na Vercel
- [x] Editorial redizajn bloga
- [x] Fallback branded cover sistem za postove bez slike
- [x] Footer branding: Powered by Petkovic Solutions

### Faza 1.5 — Turnir microsite ✅
- [x] `/turnir` glavni pregled
- [x] `/turnir/rezultati`
- [x] `/turnir/tabela`
- [x] `/turnir/timovi`
- [x] `/turnir/sponzori`
- [x] `/turnir/vesti`
- [x] Lokalni JSON data layer za turnir
- [x] Reusable komponente za meceve, tabelu, timove, sponzore i vesti
- [x] Integracija bez lomljenja postojeceg bloga

### Faza 2 — Admin panel (sam unosiš sadržaj)
- [ ] Supabase projekat i baza
- [ ] Login za admina (Supabase Auth)
- [ ] Admin dashboard `/admin`
- [ ] Editor za postove (kreiranje, editovanje, brisanje)
- [ ] Upload slika (Supabase Storage)
- [ ] Postovi se čuvaju u Supabase DB, ne u .md fajlovima
- [ ] Admin unos za turnir rezultate i tabelu sa telefona
- Paket: `@supabase/ssr` (zvanični za Next.js App Router)

### Faza 3 — Komentari
- [ ] Supabase tabela `comments`
- [ ] Server Action za dodavanje komentara
- [ ] Moderacija komentara u admin panelu
- [ ] Opcija: anonimni komentari ili samo sa emailom
- Pattern: Server Action → Supabase INSERT → revalidatePath

### Faza 4 — Newsletter / Subscription
- [ ] Supabase tabela `subscribers`
- [ ] Route Handler `POST /api/subscribe`
- [ ] Opcija A: ručni slanje kroz admin panel
- [ ] Opcija B: Resend.com API za automatski email
- Paket: `resend` (potvrđen da radi sa Next.js 15)

### Faza 5 — Monetizacija (reklame)
- [ ] Opcija A: Google AdSense (script tag kroz next/script)
- [ ] Opcija B: Ručne reklame (slike + linkovi u DB)
- [ ] Ad placement komponente u layoutu
- Next.js `Script` komponenta sa `strategy="afterInteractive"`

### Faza 6 — SEO i Performance
- [ ] `generateMetadata` na svakoj stranici
- [ ] `sitemap.xml` (Next.js file convention)
- [ ] `robots.txt`
- [ ] OG slike za socijalne mreže
- [ ] JSON-LD structured data za sportske vesti
- Sve ovo je ugrađeno u Next.js 15, bez eksternih paketa

---

## 6. SUPABASE SCHEMA (Faza 2+)

```sql
-- Postovi (kada pređemo sa .md na DB)
create table posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  category text not null,
  cover_image text,
  featured boolean default false,
  published boolean default false,
  published_at timestamptz,
  created_at timestamptz default now()
);

-- Komentari (Faza 3)
create table comments (
  id uuid default gen_random_uuid() primary key,
  post_id uuid references posts(id) on delete cascade,
  author_name text not null,
  author_email text,
  body text not null,
  approved boolean default false,
  created_at timestamptz default now()
);

-- Newsletter pretplatnici (Faza 4)
create table subscribers (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  confirmed boolean default false,
  created_at timestamptz default now()
);
```

RLS (Row Level Security):
- `posts` → javno čitanje samo published=true
- `comments` → javno čitanje samo approved=true, insert za sve
- `subscribers` → nema javnog čitanja, insert za sve

---

## 7. ENVIRONMENT VARIJABLE

```env
# .env.local (ne commitovati na GitHub!)

# Supabase (Faza 2+)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

# Resend za email (Faza 4)
RESEND_API_KEY=re_...
```

---

## 8. KAKO DODATI NOV POST (Faza 1)

1. Napravi fajl u `content/posts/naziv-posta.md`
2. Kopiraj frontmatter template iz Sekcije 4
3. Napiši sadržaj ispod `---`
4. `git add . && git commit -m "novi post: naziv" && git push`
5. Vercel automatski rebuilda i objavljuje

Ili: okači materijal Claudeu → Claude napiše `.md` fajl → copy-paste.

---

## 9. DEPLOY CHECKLIST

Pre prvog deploya:
- [ ] GitHub repo napravljen
- [ ] Vercel projekat linkovan za GitHub repo
- [ ] `npm run build` prošlo bez grešaka lokalno
- [ ] Nema `console.error` u browseru

Za svaki update:
- [ ] `npm run build` lokalno (provera pre push-a)
- [ ] `git push` → Vercel automatski deploya

---

## 10. PAKETI — POTVRĐENI DA RADE

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "gray-matter": "^4.0.3",
    "remark": "^15.0.1",
    "remark-gfm": "^4.0.0",
    "remark-rehype": "^11.1.1",
    "rehype-stringify": "^10.0.1",
    "date-fns": "^3.6.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "tailwindcss": "^3.4.1",
    "@tailwindcss/typography": "^0.5.13",
    "autoprefixer": "^10.0.1",
    "postcss": "^8"
  }
}
```

Buduće faze dodaju:
- `@supabase/ssr` — Faza 2 (admin, komentari, newsletter)
- `resend` — Faza 4 (email)

---

## 11. ČESTE GREŠKE I REŠENJA

| Greška | Uzrok | Rešenje |
|---|---|---|
| `Can't resolve 'fs'` | Klijentska komponenta importuje server lib | Prebaci konstante u `categories.ts`, ne importuj `posts.ts` u 'use client' komponentama |
| `params is not a Promise` | Next.js 14 stil params u Next.js 15 | Dodaj `Promise<{...}>` tipu i `await params` |
| `Event handlers cannot be passed` | Server komponenta ima onClick/onMouseEnter | Dodaj `'use client'` na vrh fajla |
| `Module not found: @tailwindcss/typography` | Nije instaliran | `npm install @tailwindcss/typography` |
| `Couldn't find app directory` | VS Code otvoren u pogrešnom folderu | File → Open Folder → izaberi folder sa `package.json` |
| `spawn EPERM` tokom builda | Sandbox ograničenje pri buildu | Pokreni build van sandboxa kada lokalni kod deluje ispravno |
| `npm.ps1 cannot be loaded` | PowerShell execution policy | Koristi `npm.cmd run dev` ili `npm.cmd run build` |

---

*Poslednje ažuriranje: Mart 2026*
*Stack: Next.js 15 + React 19 + TypeScript + Tailwind v3 + Supabase + Vercel*

---

## 12. MODULARNI SMER PROJEKTA

Od aprila 2026 projekat se vodi kao dugorocna modularna platforma.

To znaci:
- blog, turnir i buduce sekcije ne razvijaju se kao gomila nepovezanih stranica
- sve novo mora da moze da raste bez prepisivanja postojece osnove
- subscribe, analytics, admin i publika vode se kao zajednicki platform slojevi

Prakticno:
- Arsenal blog ostaje editorial modul
- Turnir Cerovac ostaje lokalni sportski modul
- buduce sekcije dobijaju svoj route, svoj data layer i svoje komponente
- dokumentovanje je obavezno pri svakoj vecoj promeni

---

## 13. AKTUELNO STANJE PLATFORME

Trenutno je potvrdeno i uvedeno:
- srpski glavni sajt kao primarni proizvod
- `Turnir Cerovac` kao zaseban modul
- Vercel Analytics kao osnovni analytics sloj
- prvi engleski portfolio layer za blog:
  - `/en`
  - `/en/blog/[slug]`
  - `/en/categories/[category]`
- prvi nemacki portfolio layer za blog:
  - `/de`
  - `/de/blog/[slug]`
  - `/de/categories/[category]`

Engleski layer trenutno nije pun dvojezicni CMS sistem.
Za sada sluzi da portfolio i prvi utisak prema stranim klijentima imaju smisla bez lomljenja srpskog dela sajta.

To znaci:
- UI moze biti na engleskom
- UI moze biti na nemackom
- najvazniji postovi mogu imati `titleEn` i `excerptEn`
- najvazniji postovi mogu imati `titleDe` i `excerptDe`
- puni engleski tekstovi se uvode postepeno, samo tamo gde imaju portfolio vrednost
- puni nemacki tekstovi se uvode postepeno, samo tamo gde imaju portfolio vrednost

---

## 14. SLEDECI PRAKTICNI PRIORITETI

- uvesti `SR / EN` switch kada engleski layer bude dovoljno cist za javni prikaz
- prosiriti switch na `SR / EN / DE`
- odrediti koje 3-5 price moraju imati pune engleske verzije
- odrediti da li su potrebne pune nemacke verzije ili je dovoljno portfolio UI + naslov/excerpt
- osmisliti subscribe/public layer za rast publike
- kasnije prebaciti cesto menjane podatke na admin-friendly sloj bez lomljenja projekta
