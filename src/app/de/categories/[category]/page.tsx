import type { Metadata } from 'next'
import LocalizedCategoryPage from '@/components/LocalizedCategoryPage'
import { localizedCategorySegments, getCategoryLabel, getCategorySegment, Category } from '@/lib/categories'

const validCategories: Category[] = ['utakmice', 'treninzi', 'takmicenja', 'vesti']

type Props = { params: Promise<{ category: string }> }

export async function generateStaticParams() {
  return validCategories.map((category) => ({ category: getCategorySegment(category, 'de') }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const resolved = localizedCategorySegments[category] as Category | undefined
  if (!resolved) return {}
  return { title: getCategoryLabel(resolved, 'de') }
}

export default async function GermanCategoryPage({ params }: Props) {
  const { category } = await params
  return <LocalizedCategoryPage segment={category} locale="de" />
}
