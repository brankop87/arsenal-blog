# Bug Log

Ovaj fajl vodi evidenciju o bitnim greskama i kako su resene.

## 2026-03-31

### Problem: prazne slike / nevidljivi vizuali na postovima
- Simptom:
  - kartice i hero blokovi delovali su prazno kada post nema `coverImage`
- Uzrok:
  - dizajn se oslanjao na realnu sliku, a nije postojao branded fallback sistem
- Resenje:
  - dodat `src/lib/postTheme.ts`
  - uvedeni fallback backgroundi i branded cover elementi u `src/components/PostCard.tsx`
  - isto primenjeno i na hero blog posta
- Status:
  - ispravljeno

### Problem: losiji premium utisak zbog previse jednostavnih sekcija
- Simptom:
  - homepage je delovao previse placeholder i monotono
- Uzrok:
  - sekcije su bile vizuelno pretanke i bez jasne urednicke hijerarhije
- Resenje:
  - redizajn hero sekcije, latest sidebar, kategorija i kartica
- Status:
  - ispravljeno

### Problem: PowerShell blokira `npm.ps1`
- Simptom:
  - standardni `npm run build` nije mogao da se izvrsi
- Uzrok:
  - execution policy na sistemu
- Resenje:
  - koristi se `npm.cmd run build`
- Status:
  - workaround poznat i potvrdjen

### Problem: build u sandboxu baca `spawn EPERM`
- Simptom:
  - build puca iako kod nije nuzno neispravan
- Uzrok:
  - ogranicenje sandbox okruzenja
- Resenje:
  - build proveravati eskalirano kada sandbox blokira proces
- Status:
  - workaround poznat i potvrdjen

### Problem: terminal i pojedini fajlovi prikazuju polomljena srpska slova
- Simptom:
  - tekst u PowerShell prikazu ume da izgleda kao `Ä`, `Å¡`, `Å¾`
- Uzrok:
  - razlika izmedju UTF-8 sadrzaja u fajlu i lokalnog terminal/code page prikaza
- Resenje:
  - najvidljivije tekstove uvoditi oprezno i proveravati live sajt, ne samo terminal output
  - dokumentovati da terminal prikaz nije uvek merodavan za finalni web prikaz
- Status:
  - poznato ogranicenje, radni proces prilagodjen

### Problem: engleski portfolio layer ne treba da polomi srpski glavni sajt
- Simptom:
  - potreba za engleskim prikazom za portfolio, bez uvodjenja punog dvojezicnog sistema odjednom
- Uzrok:
  - UI i sadrzaj su prvobitno bili vodjeni samo za srpski glavni tok
- Resenje:
  - uveden poseban `en` layer za blog deo sajta
  - turnir ostavljen na srpskom dok ne dodje pravi trenutak za njegov prevod
  - engleski prikaz trenutno koristi preveden UI plus `titleEn` / `excerptEn` za kljucne postove
- Status:
  - ispravljeno kroz prvu fazu, dalje sirenje planirano
