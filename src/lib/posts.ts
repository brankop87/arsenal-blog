import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { Category, categoryLabels } from './categories'
import { Locale } from './i18n'

export type { Category }
export { categoryLabels }

const postsDir = path.join(process.cwd(), 'content/posts')

export type PostMeta = {
  slug: string
  title: string
  excerpt: string
  titleEn?: string
  excerptEn?: string
  titleDe?: string
  excerptDe?: string
  date: string
  category: Category
  coverImage: string
  featured: boolean
}

export type Post = PostMeta & {
  contentHtml: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return []
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'))
  const posts = files.map((filename): PostMeta => {
    const slug = filename.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(postsDir, filename), 'utf-8')
    const { data } = matter(raw)
    return {
      slug,
      title: data.title ?? '',
      excerpt: data.excerpt ?? '',
      titleEn: data.titleEn ?? '',
      excerptEn: data.excerptEn ?? '',
      titleDe: data.titleDe ?? '',
      excerptDe: data.excerptDe ?? '',
      date: data.date ?? '',
      category: data.category ?? 'vesti',
      coverImage: data.coverImage ?? '',
      featured: data.featured ?? false,
    }
  })
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostsByCategory(cat: string): PostMeta[] {
  return getAllPosts().filter((p) => p.category === cat)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filepath = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(filepath)) return null
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content)
  const contentHtml = processed.toString()
  return {
    slug,
    title: data.title ?? '',
    excerpt: data.excerpt ?? '',
    titleEn: data.titleEn ?? '',
    excerptEn: data.excerptEn ?? '',
    titleDe: data.titleDe ?? '',
    excerptDe: data.excerptDe ?? '',
    date: data.date ?? '',
    category: data.category ?? 'vesti',
    coverImage: data.coverImage ?? '',
    featured: data.featured ?? false,
    contentHtml,
  }
}

export function localizePostMeta(post: PostMeta, locale: Locale): PostMeta {
  if (locale === 'en') {
    return {
      ...post,
      title: post.titleEn || post.title,
      excerpt: post.excerptEn || post.excerpt,
    }
  }

  if (locale === 'de') {
    return {
      ...post,
      title: post.titleDe || post.titleEn || post.title,
      excerpt: post.excerptDe || post.excerptEn || post.excerpt,
    }
  }

  return post
}

export function localizePost(post: Post, locale: Locale): Post {
  if (locale === 'en') {
    return {
      ...post,
      title: post.titleEn || post.title,
      excerpt: post.excerptEn || post.excerpt,
    }
  }

  if (locale === 'de') {
    return {
      ...post,
      title: post.titleDe || post.titleEn || post.title,
      excerpt: post.excerptDe || post.excerptEn || post.excerpt,
    }
  }

  return post
}
