import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import PostCard from '@/components/PostCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { englishCategorySegments, getCategoryLabel, Category } from '@/lib/categories'
import { getCategoryTheme } from '@/lib/postTheme'
import { getPostsByCategory, localizePostMeta } from '@/lib/posts'
import { getUi } from '@/lib/i18n'

const validCategories = ['matches', 'training', 'competitions', 'news']

type Props = { params: Promise<{ category: string }> }

function resolveCategory(segment: string) {
  return englishCategorySegments[segment] as Category | undefined
}

export async function generateStaticParams() {
  return validCategories.map((category) => ({ category }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const resolved = resolveCategory(category)
  if (!resolved) return {}
  return { title: getCategoryLabel(resolved, 'en') }
}

export default async function EnglishCategoryPage({ params }: Props) {
  const { category } = await params
  const resolved = resolveCategory(category)
  if (!resolved) notFound()

  const ui = getUi('en')
  const posts = getPostsByCategory(resolved).map((post) => localizePostMeta(post, 'en'))
  const theme = getCategoryTheme(resolved)
  const catLabel = getCategoryLabel(resolved, 'en')

  return (
    <>
      <Navbar locale="en" />
      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
        <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '2rem 1.5rem 0' }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.06)', background: `radial-gradient(circle at 85% 15%, ${theme.accentSoft} 0%, transparent 22%), linear-gradient(135deg, #151515 0%, #0d0d0d 100%)`, padding: '3rem 2rem' }}>
            <div style={{ position: 'absolute', inset: '1.5rem auto 1.5rem 0', width: '5px', background: theme.accent }} />
            <div style={{ maxWidth: '760px' }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: theme.accent, marginBottom: '1rem' }}>
                {theme.label}
              </div>
              <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 'clamp(2.5rem,5vw,4.4rem)', color: '#fff', lineHeight: 1, marginBottom: '0.75rem' }}>
                {catLabel}
              </h1>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.62)', marginBottom: '1.15rem', maxWidth: '42rem' }}>
                {resolved === 'utakmice' && 'Reaction, turning points and a broader reading of Arsenal performances across the season.'}
                {resolved === 'treninzi' && 'Form, individual progress and training ground details that shape the next game.'}
                {resolved === 'takmicenja' && 'The bigger frame of the season: rhythm, ambition, fixture pressure and the race for trophies.'}
                {resolved === 'vesti' && 'Transfers, club decisions, quotes and every update that pushes the Arsenal story forward.'}
              </p>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)' }}>
                {catLabel} | {posts.length} {posts.length === 1 ? ui.categoryPage.oneStory : ui.categoryPage.manyStories}
              </div>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '3rem 1.5rem 0' }}>
          {posts.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.5rem' }}>
              {posts.map((p) => <PostCard key={p.slug} post={p} size="medium" locale="en" />)}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', background: 'rgba(255,255,255,0.02)' }}>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>{ui.categoryPage.noStories}</p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)' }}>
                {ui.categoryPage.addPost} <code style={{ color: '#C4A35A' }}>category: {resolved}</code>
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer locale="en" />
    </>
  )
}
