export type Category = 'utakmice' | 'treninzi' | 'takmicenja' | 'vesti'

export const categoryLabels: Record<Category, { sr: string; en: string }> = {
  utakmice:   { sr: 'Utakmice',   en: 'Matches' },
  treninzi:   { sr: 'Treninzi',   en: 'Training' },
  takmicenja: { sr: 'Takmičenja', en: 'Competitions' },
  vesti:      { sr: 'Vesti',      en: 'News' },
}
