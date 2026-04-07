# The Cannon — Arhitektura Projekta

Ovaj dokument sluzi da u svakom trenutku znamo:
- gde je koja logika
- sta je server, a sta client
- gde se menja sadrzaj
- kako je dodat `turnir` modul

## 1. Glavna ideja

Projekat je podeljen na 2 velike celine:

1. Arsenal blog
2. Turnir Cerovac microsite

Obe celine zive u istoj Next.js aplikaciji i dele isti vizuelni jezik, navigaciju i footer.

## 2. Folder mapa

```text
src/
  app/
    page.tsx                         -> homepage bloga
    layout.tsx                       -> root layout
    not-found.tsx                    -> 404
    blog/[slug]/page.tsx             -> pojedinacni blog post
    kategorije/[kategorija]/page.tsx -> listing po kategoriji
    turnir/
      layout.tsx                     -> layout za turnir sekciju
      page.tsx                       -> glavni pregled turnira
      istorijat/page.tsx             -> istorijat i legende turnira
      rezultati/page.tsx             -> svi rezultati
      tabela/page.tsx                -> tabela
      timovi/page.tsx                -> timovi
      sponzori/page.tsx              -> sponzori
      vesti/page.tsx                 -> turnirske vesti

  components/
    Navbar.tsx
    Footer.tsx
    PostCard.tsx
    CategoryGrid.tsx
    tournament/
      TournamentShell.tsx
      TournamentSectionHeading.tsx
      CountdownBanner.tsx
      MatchCard.tsx
      StandingsTable.tsx
      SponsorGrid.tsx
      SponsorshipPackages.tsx
      HistoryTimeline.tsx
      TeamGrid.tsx
      NewsPreviewGrid.tsx

  lib/
    categories.ts
    posts.ts
    postTheme.ts
    tournament.ts

  data/
    turnir/
      matches.json
      standings.json
      teams.json
      sponsors.json
      news.json
      history.json

content/
  posts/
    *.md
```

## 3. Gde je koja logika

### Blog logika

- `src/lib/posts.ts`
  - cita markdown postove iz `content/posts`
  - parsira frontmatter
  - sortira postove po datumu
  - pretvara markdown u HTML za pojedinacni post

- `src/lib/categories.ts`
  - nazivi kategorija
  - bezbedno za client i server import

- `src/lib/postTheme.ts`
  - vizuelna tema po kategoriji
  - fallback cover logika kada nema slike

### Turnir Cerovac logika

- `src/lib/tournament.ts`
  - cita lokalne JSON podatke
  - vraca upcoming meceve
  - vraca gotove rezultate
  - sortira tabelu
  - vraca timove, sponzore, vesti i istorijat

### UI logika

- `src/components/PostCard.tsx`
  - sve varijante blog kartica
  - fallback branded cover kada `coverImage` ne postoji

- `src/components/tournament/*`
  - reusable delovi za turnir modul
  - kartice, tabela, countdown, istorijat, sponzorski paketi, sekcije, shell i pregledi

## 4. Gde se menja sadrzaj

### Blog postovi

Menjaju se ovde:

- `content/posts/*.md`

Ako hoces novi blog post:
- dodas novi `.md` fajl
- popunis frontmatter
- napises tekst
- na kraju teksta dodas standardni potpis: `_Autor: B._`

### Turnir podaci

Menjaju se ovde:

- `src/data/turnir/matches.json`
- `src/data/turnir/standings.json`
- `src/data/turnir/teams.json`
- `src/data/turnir/sponsors.json`
- `src/data/turnir/news.json`
- `src/data/turnir/history.json`

To je trenutno najjednostavniji i najstabilniji sistem za start.

## 5. Kako radi update na Vercel

Trenutni sistem je file-based.

To znaci:
- lokalno promenis fajl
- uradis commit + push
- Vercel uradi novi deploy
- sajt se osvezi

Ako menjas samo JSON ili markdown, i dalje ide novi deploy.

## 6. Sledeca faza za unos sa telefona

Ako hocemo da menjas rezultate bez otvaranja koda i bez redeploy-a, sledeci korak je:

1. Supabase baza
2. mali admin panel
3. forma za unos rezultata, tabele i turnirskih vesti

Tada blog moze ostati file-based ili preci na bazu postepeno.

## 7. Stabilnost i smer

Ovaj projekat je trenutno postavljen tako da bude:
- brz
- jednostavan za odrzavanje
- modularan
- lako prosiriv

Turnir nije napravljen kao hack, nego kao zaseban modul u okviru istog projekta.

## 8. Dugorocni modularni smer

Od ove tacke projekat se vodi kao platforma, ne samo kao jedan blog.

To znaci:
- Arsenal blog je jedan sadrzajni modul
- Turnir Cerovac je drugi sadrzajni modul
- svaka buduca celina mora da bude dodata kao novi modul, ne kao zakrpa preko postojeceg koda

Pravila rasta:
- shared layout, navigacija, footer i analytics ostaju zajednicki sloj
- svaki modul ima svoj route segment, svoje podatke i svoje komponente kad god to ima smisla
- reusable logika ide u `src/lib/*` i `src/components/*`
- cesto menjani podaci vremenom prelaze iz fajlova u bazu, ali bez lomljenja postojece strukture

## 9. Publika i subscribe kao poseban sloj

Rast publike nije dodatak, nego deo arhitekture projekta.

Plan:
- analytics sloj za pracenje poseta i najjacih stranica
- subscribe/newsletter sloj za skupljanje publike
- kasnije odvajanje publike po interesovanju:
  - Arsenal blog publika
  - Turnir Cerovac publika

To znaci da ce `subscribe` biti uveden kao poseban platform feature, ne kao jednokratni widget.

## 10. Pravilo dokumentovanja

Svaka veca izmena mora da ostavi trag u dokumentaciji:
- `docs/CHANGELOG.md` -> sta je promenjeno
- `docs/BUGLOG.md` -> sta je puklo i kako je ispravljeno
- `docs/ARCHITECTURE.md` -> ako se menja struktura ili logika
- `MASTER_PLAN.md` -> ako se menja dugorocni smer ili sledece faze

Projekat ne sme da zavisi od pamcenja iz razgovora, nego od zapisane strukture.
