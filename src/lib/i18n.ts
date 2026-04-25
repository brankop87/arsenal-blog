export type Locale = 'sr' | 'en' | 'de'

export const defaultLocale: Locale = 'sr'

export const supportedLocales: Locale[] = ['sr', 'en', 'de']

export const localePrefix = (locale: Locale) => {
  if (locale === 'en') return '/en'
  if (locale === 'de') return '/de'
  return ''
}

export const localizedCategoryRoot = (locale: Locale) => (locale === 'sr' ? 'kategorije' : 'categories')

export const uiCopy = {
  sr: {
    brandTagline: 'Arsenal blog | matchday stories',
    topBar: 'Arsenal Football Club | The Cannon Blog',
    turnirLabel: 'Turnir Cerovac',
    northLondon: 'North London Red',
    home: {
      focus: 'U fokusu',
      secondAngle: 'Drugi ugao',
      freshFromBlog: 'Sveže sa bloga',
      latest: 'Najnovije',
      secondStory: 'Druga priča',
      allStories: 'Svi tekstovi',
      allStoriesText: 'Sveži tekstovi ostaju u prvom planu, a naslovna sada više radi kao pravi blog ritam nego kao statičan showcase.',
      noStories: 'Još nema tekstova',
      addFirstPost: 'Dodaj prvi post u',
      categories: 'Kategorije',
      categoriesText: 'Rubrike ostaju jasne i pregledne, ali bez demo utiska. Svaka sada služi da čitaoca odvede ka svežim pričama i jačem Arsenal ritmu.',
    },
    footer: {
      editorialTag: 'Arsenal editorial fan blog',
      description: 'Mesto za Arsenal priče koje imaju ritam, stav i kontekst. Fokus je na utakmicama, treninzima, taktičkim detaljima i vestima koje zaslužuju više od dve rečenice.',
      sections: 'Rubrike',
      turnirTitle: 'Turnir Cerovac',
      turnirLead: 'Lokalni turnir i posebna priča',
      turnirText: 'Zaseban microsite za dugovečni i poznati turnir iz Cerovca, odvojen od Arsenal rubrika i spreman da raste kao sopstveni digitalni projekat.',
      note: 'Napomena',
      noteText: 'Nezavisan fan projekat posvećen Arsenal FC iz Londona, Engleska. Sajt nije povezan sa The Arsenal Football Club Limited i ne predstavlja zvanični klupski kanal.',
    },
    blog: {
      feature: 'The Cannon Feature',
      intro: 'Uvod',
      about: 'O tekstu',
      category: 'Rubrika',
      published: 'Objavljeno',
      visual: 'Vizual',
      photo: 'Fotografija',
      fallback: 'Branded cover fallback',
      related: 'Slični tekstovi',
      relatedText: 'Povezane priče iz iste rubrike koje pomažu da blog deluje kao prava kolekcija tema, a ne kao niz usamljenih postova.',
      originalNotice: 'Originalni tekst ispod ostavljen je na srpskom dok se prevedene verzije ne uvedu u punom obimu.',
    },
    categoryPage: {
      noStories: 'Još nema tekstova',
      addPost: 'Dodaj post sa',
      oneStory: 'tekst',
      manyStories: 'tekstova',
      openSection: 'Otvori rubriku',
    },
    subscribe: {
      headline: 'Prati The Cannon — analize i vesti direktno u inbox.',
      placeholder: 'Tvoja e-mail adresa',
      button: 'Prijavi se',
      success: 'Uspešno! Vidimo se u inboxu.',
      error: 'Nešto je pošlo po zlu. Pokušaj ponovo.',
    },
  },
  en: {
    brandTagline: 'Arsenal blog | matchday stories',
    topBar: 'Arsenal Football Club | The Cannon Blog',
    turnirLabel: 'Turnir Cerovac',
    northLondon: 'North London Red',
    home: {
      focus: 'In focus',
      secondAngle: 'Second angle',
      freshFromBlog: 'Fresh from the blog',
      latest: 'Latest',
      secondStory: 'Second story',
      allStories: 'All stories',
      allStoriesText: 'Fresh writing stays at the front, so the homepage now feels more like a live editorial rhythm than a static showcase.',
      noStories: 'No stories yet',
      addFirstPost: 'Add your first post in',
      categories: 'Sections',
      categoriesText: 'Each section stays clear and purposeful, guiding visitors toward the strongest Arsenal stories without any demo-page feel.',
    },
    footer: {
      editorialTag: 'Arsenal editorial fan blog',
      description: 'A place for Arsenal stories with rhythm, opinion and context. The focus is on matches, training ground details, tactical reading and club news that deserve more than two lines.',
      sections: 'Sections',
      turnirTitle: 'Turnir Cerovac',
      turnirLead: 'Local tournament and a separate story',
      turnirText: 'A standalone microsite for a long-running local football tournament in Cerovac, kept separate from the Arsenal side of the project and ready to grow on its own.',
      note: 'Note',
      noteText: 'Independent fan project focused on Arsenal FC from London, England. This site is not affiliated with The Arsenal Football Club Limited and does not represent an official club channel.',
    },
    blog: {
      feature: 'The Cannon Feature',
      intro: 'Lead',
      about: 'About this story',
      category: 'Section',
      published: 'Published',
      visual: 'Visual',
      photo: 'Photography',
      fallback: 'Branded fallback cover',
      related: 'Related stories',
      relatedText: 'More stories from the same section, helping the blog feel like an editorial collection rather than a string of isolated posts.',
      originalNotice: 'The original article remains in Serbian below until full English article versions are added.',
    },
    categoryPage: {
      noStories: 'No stories yet',
      addPost: 'Add a post with',
      oneStory: 'story',
      manyStories: 'stories',
      openSection: 'Open section',
    },
    subscribe: {
      headline: 'Follow The Cannon — Arsenal analysis delivered to your inbox.',
      placeholder: 'Your email address',
      button: 'Subscribe',
      success: 'Done! See you in the inbox.',
      error: 'Something went wrong. Please try again.',
    },
  },
  de: {
    brandTagline: 'Arsenal Blog | Matchday Stories',
    topBar: 'Arsenal Football Club | The Cannon Blog',
    turnirLabel: 'Turnir Cerovac',
    northLondon: 'North London Red',
    home: {
      focus: 'Im Fokus',
      secondAngle: 'Zweiter Blickwinkel',
      freshFromBlog: 'Neu im Blog',
      latest: 'Neueste Beiträge',
      secondStory: 'Zweite Story',
      allStories: 'Alle Beiträge',
      allStoriesText: 'Aktuelle Texte stehen im Vordergrund, damit die Startseite wie ein lebendiger Arsenal-Blog wirkt und nicht wie eine statische Demo.',
      noStories: 'Noch keine Beiträge',
      addFirstPost: 'Ersten Beitrag hinzufügen in',
      categories: 'Rubriken',
      categoriesText: 'Die Rubriken bleiben klar und führen Besucher schnell zu den wichtigsten Arsenal-Geschichten.',
    },
    footer: {
      editorialTag: 'Arsenal Editorial Fan Blog',
      description: 'Ein Ort für Arsenal-Geschichten mit Haltung, Rhythmus und Kontext. Im Fokus stehen Spiele, Training, taktische Details und Vereinsnews, die mehr als zwei Zeilen verdienen.',
      sections: 'Rubriken',
      turnirTitle: 'Turnir Cerovac',
      turnirLead: 'Lokales Turnier und eigene Geschichte',
      turnirText: 'Ein eigenständiger Microsite-Bereich für ein traditionsreiches lokales Fußballturnier in Cerovac, getrennt vom Arsenal-Blog und bereit für weiteres Wachstum.',
      note: 'Hinweis',
      noteText: 'Unabhängiges Fan-Projekt über Arsenal FC aus London, England. Diese Seite ist nicht mit The Arsenal Football Club Limited verbunden und ist kein offizieller Vereinskanal.',
    },
    blog: {
      feature: 'The Cannon Feature',
      intro: 'Einstieg',
      about: 'Über diesen Beitrag',
      category: 'Rubrik',
      published: 'Veröffentlicht',
      visual: 'Bild',
      photo: 'Foto',
      fallback: 'Branded fallback cover',
      related: 'Ähnliche Beiträge',
      relatedText: 'Weitere Beiträge aus derselben Rubrik, damit der Blog wie eine echte redaktionelle Sammlung wirkt.',
      originalNotice: 'Der Originalbeitrag bleibt unten auf Serbisch, bis vollständige deutsche Versionen ergänzt werden.',
    },
    categoryPage: {
      noStories: 'Noch keine Beiträge',
      addPost: 'Beitrag hinzufügen mit',
      oneStory: 'Beitrag',
      manyStories: 'Beiträge',
      openSection: 'Rubrik öffnen',
    },
    subscribe: {
      headline: 'Folge The Cannon — Arsenal-Analysen direkt in dein Postfach.',
      placeholder: 'Deine E-Mail-Adresse',
      button: 'Anmelden',
      success: 'Erledigt! Bis bald im Postfach.',
      error: 'Etwas ist schiefgelaufen. Bitte versuch es erneut.',
    },
  },
} as const

export function getUi(locale: Locale) {
  return uiCopy[locale]
}
