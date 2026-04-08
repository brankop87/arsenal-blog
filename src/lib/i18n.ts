export type Locale = 'sr' | 'en'

export const defaultLocale: Locale = 'sr'

export const localePrefix = (locale: Locale) => (locale === 'en' ? '/en' : '')

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
      noteText: 'Nezavisan fan projekat. Sajt nije povezan sa Arsenal Football Club Ltd. niti predstavlja zvanični klupski kanal.',
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
      originalNotice: 'Originalni tekst ispod ostavljen je na srpskom dok se engleske verzije ne uvedu u punom obimu.',
    },
    categoryPage: {
      noStories: 'Još nema tekstova',
      addPost: 'Dodaj post sa',
      oneStory: 'tekst',
      manyStories: 'tekstova',
      openSection: 'Otvori rubriku',
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
      noteText: 'Independent fan project. This site is not affiliated with Arsenal Football Club Ltd. and does not represent an official club channel.',
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
  },
} as const

export function getUi(locale: Locale) {
  return uiCopy[locale]
}
