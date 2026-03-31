import { Category } from './categories'

type Theme = {
  accent: string
  accentSoft: string
  glow: string
  stroke: string
  label: string
}

const themes: Record<Category, Theme> = {
  utakmice: {
    accent: '#EF0107',
    accentSoft: 'rgba(239, 1, 7, 0.18)',
    glow: 'rgba(239, 1, 7, 0.35)',
    stroke: 'rgba(239, 1, 7, 0.75)',
    label: 'Matchday',
  },
  treninzi: {
    accent: '#C4A35A',
    accentSoft: 'rgba(196, 163, 90, 0.18)',
    glow: 'rgba(196, 163, 90, 0.28)',
    stroke: 'rgba(196, 163, 90, 0.7)',
    label: 'Training Ground',
  },
  takmicenja: {
    accent: '#D7DCE2',
    accentSoft: 'rgba(215, 220, 226, 0.14)',
    glow: 'rgba(215, 220, 226, 0.2)',
    stroke: 'rgba(215, 220, 226, 0.6)',
    label: 'Competition Desk',
  },
  vesti: {
    accent: '#8FAADC',
    accentSoft: 'rgba(143, 170, 220, 0.18)',
    glow: 'rgba(143, 170, 220, 0.24)',
    stroke: 'rgba(143, 170, 220, 0.65)',
    label: 'Club Report',
  },
}

export function getCategoryTheme(category: Category): Theme {
  return themes[category]
}

export function getFallbackCoverBackground(category: Category) {
  const theme = getCategoryTheme(category)
  return `
    radial-gradient(circle at 18% 20%, ${theme.glow} 0%, transparent 32%),
    radial-gradient(circle at 82% 18%, rgba(255,255,255,0.08) 0%, transparent 22%),
    linear-gradient(135deg, #171717 0%, #101010 46%, #090909 100%)
  `
}
