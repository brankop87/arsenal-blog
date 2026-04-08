export type Category = 'utakmice' | 'treninzi' | 'takmicenja' | 'vesti'

export const categoryLabels: Record<Category, { sr: string; en: string; segmentEn: string }> = {
  utakmice:   { sr: 'Utakmice',   en: 'Matches',      segmentEn: 'matches' },
  treninzi:   { sr: 'Treninzi',   en: 'Training',     segmentEn: 'training' },
  takmicenja: { sr: 'Takmičenja', en: 'Competitions', segmentEn: 'competitions' },
  vesti:      { sr: 'Vesti',      en: 'News',         segmentEn: 'news' },
}

export const englishCategorySegments = Object.fromEntries(
  Object.entries(categoryLabels).map(([key, value]) => [value.segmentEn, key as Category]),
) as Record<string, Category>

export function getCategoryLabel(category: Category, locale: 'sr' | 'en') {
  return categoryLabels[category][locale]
}

export function getCategorySegment(category: Category, locale: 'sr' | 'en') {
  return locale === 'en' ? categoryLabels[category].segmentEn : category
}
