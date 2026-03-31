import matches from '@/data/turnir/matches.json'
import standings from '@/data/turnir/standings.json'
import teams from '@/data/turnir/teams.json'
import sponsors from '@/data/turnir/sponsors.json'
import news from '@/data/turnir/news.json'

export type Match = {
  id: string
  homeTeam: string
  awayTeam: string
  date: string
  time: string
  venue: string
  status: 'scheduled' | 'finished'
  competitionRound: string
  homeScore?: number
  awayScore?: number
}

export type Standing = {
  team: string
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  points: number
}

export type Team = {
  name: string
  village: string
  coach: string
  captain: string
  founded: string
  colors: string
  notes: string
}

export type Sponsor = {
  name: string
  category: string
  description: string
  website: string
}

export type TournamentNews = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
}

export function getTournamentMatches(): Match[] {
  return [...(matches as Match[])].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

export function getUpcomingMatches(): Match[] {
  return getTournamentMatches().filter((match) => match.status === 'scheduled')
}

export function getFinishedMatches(): Match[] {
  return getTournamentMatches()
    .filter((match) => match.status === 'finished')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getStandings(): Standing[] {
  return [...(standings as Standing[])].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points
    return (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst)
  })
}

export function getTeams(): Team[] {
  return teams as Team[]
}

export function getSponsors(): Sponsor[] {
  return sponsors as Sponsor[]
}

export function getTournamentNews(): TournamentNews[] {
  return [...(news as TournamentNews[])].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
