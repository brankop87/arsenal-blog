import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { categoryLabels } from '@/lib/categories'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cannonculture.com'

const TURNIR_PATHS = [
  '/turnir',
  '/turnir/tabela',
  '/turnir/rezultati',
  '/turnir/timovi',
  '/turnir/sponzori',
  '/turnir/vesti',
  '/turnir/istorijat',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const staticEntries: MetadataRoute.Sitemap = ['/', '/en', '/de'].map((p) => ({
    url: `${BASE}${p}`,
    changeFrequency: 'daily',
    priority: p === '/' ? 1.0 : 0.9,
  }))

  const postEntries: MetadataRoute.Sitemap = posts.flatMap((post) => {
    const lastModified = post.date ? new Date(post.date) : new Date()
    return [
      { url: `${BASE}/blog/${post.slug}`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${BASE}/en/blog/${post.slug}`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
      { url: `${BASE}/de/blog/${post.slug}`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    ]
  })

  const categoryEntries: MetadataRoute.Sitemap = (
    Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>
  ).flatMap((cat) => [
    { url: `${BASE}/kategorije/${cat}`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/en/categories/${categoryLabels[cat].segmentEn}`, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${BASE}/de/categories/${categoryLabels[cat].segmentDe}`, changeFrequency: 'weekly', priority: 0.5 },
  ])

  const turnirEntries: MetadataRoute.Sitemap = TURNIR_PATHS.map((p) => ({
    url: `${BASE}${p}`,
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [...staticEntries, ...postEntries, ...categoryEntries, ...turnirEntries]
}
