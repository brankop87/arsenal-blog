import { getPostsByCategory, categoryLabels } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const validCategories = ['utakmice', 'treninzi', 'takmicenja', 'vesti']

// Next.js 15: params is a Promise
type Props = { params: Promise<{ kategorija: string }> }

export async function generateStaticParams() {
  return validCategories.map(k => ({ kategorija: k }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategorija } = await params
  const cat = categoryLabels[kategorija as keyof typeof categoryLabels]
  if (!cat) return {}
  return { title: cat.sr }
}

export default async function KategorijePage({ params }: Props) {
  const { kategorija } = await params

  if (!validCategories.includes(kategorija)) notFound()

  const posts = getPostsByCategory(kategorija)
  const cat = categoryLabels[kategorija as keyof typeof categoryLabels]

  return (
    <>
      <Navbar />
      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>

        {/* Header */}
        <div style={{ background: '#111', borderBottom: '1px solid #1C1C1C', padding: '4rem 1.5rem 3rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <span style={{ display: 'block', width: '48px', height: '3px', background: '#EF0107', marginBottom: '1.5rem' }} />
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#fff', lineHeight: 1, marginBottom: '0.5rem' }}>
              {cat.sr}
            </h1>
            <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.85rem', letterSpacing: '0.1em', color: '#444', textTransform: 'uppercase' }}>
              {cat.en} — {posts.length} {posts.length === 1 ? 'tekst' : 'tekstova'}
            </p>
          </div>
        </div>

        {/* Posts grid */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
          {posts.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.5rem' }}>
              {posts.map(p => <PostCard key={p.slug} post={p} size="medium" />)}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.5rem', color: '#333', marginBottom: '0.5rem' }}>Još nema tekstova</p>
              <p style={{ fontSize: '0.9rem', color: '#444' }}>
                Dodaj post sa <code style={{ color: '#9C824A' }}>category: {kategorija}</code>
              </p>
            </div>
          )}
        </section>

      </main>
      <Footer />
    </>
  )
}
