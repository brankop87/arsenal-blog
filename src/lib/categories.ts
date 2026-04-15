import { Locale } from './i18n'

export type Category = 'utakmice' | 'treninzi' | 'takmicenja' | 'vesti'

export const categoryLabels: Record<Category, { sr: string; en: string; de: string; segmentEn: string; segmentDe: string }> = {
  utakmice: {
    sr: 'Utakmice',
    en: 'Matches',
    de: 'Spiele',
    segmentEn: 'matches',
    segmentDe: 'spiele',
  },
  treninzi: {
    sr: 'Treninzi',
    en: 'Training',
    de: 'Training',
    segmentEn: 'training',
    segmentDe: 'training',
  },
  takmicenja: {
    sr: 'Takmičenja',
    en: 'Competitions',
    de: 'Wettbewerbe',
    segmentEn: 'competitions',
    segmentDe: 'wettbewerbe',
  },
  vesti: {
    sr: 'Vesti',
    en: 'News',
    de: 'News',
    segmentEn: 'news',
    segmentDe: 'news',
  },
}

export const localizedCategorySegments = Object.fromEntries(
  Object.entries(categoryLabels).flatMap(([key, value]) => [
    [value.segmentEn, key as Category],
    [value.segmentDe, key as Category],
  ]),
) as Record<string, Category>

export function getCategoryLabel(category: Category, locale: Locale) {
  return categoryLabels[category][locale]
}

export function getCategorySegment(category: Category, locale: Locale) {
  if (locale === 'en') return categoryLabels[category].segmentEn
  if (locale === 'de') return categoryLabels[category].segmentDe
  return category
}
