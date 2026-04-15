import type { Metadata } from 'next'
import LocalizedBlogPostPage from '@/components/LocalizedBlogPostPage'
import { getAllPosts, getPostBySlug, localizePost } from '@/lib/posts'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  const localized = localizePost(post, 'de')

  return {
    title: localized.title,
    description: localized.excerpt,
    openGraph: {
      title: localized.title,
      description: localized.excerpt,
      ...(localized.coverImage && { images: [{ url: localized.coverImage }] }),
    },
  }
}

export default async function GermanBlogPostPage({ params }: Props) {
  const { slug } = await params
  return <LocalizedBlogPostPage slug={slug} locale="de" />
}
