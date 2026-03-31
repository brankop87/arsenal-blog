import { getPostsByCategory, categoryLabels } from '@/lib/posts'
import { getCategoryTheme } from '@/lib/postTheme'
import PostCard from '@/components/PostCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const validCategories = ['utakmice', 'treninzi', 'takmicenja', 'vesti']

type Props = { params: Promise<{ kategorija: string }> }

export async function generateStaticParams() {
  return validCategories.map((k) => ({ kategorija: k }))
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
  const theme = getCategoryTheme(kategorija as keyof typeof categoryLabels)

  return (
    <>
      <Navbar />
      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
        <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '2rem 1.5rem 0' }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.06)', background: `radial-gradient(circle at 85% 15%, ${theme.accentSoft} 0%, transparent 22%), linear-gradient(135deg, #151515 0%, #0d0d0d 100%)`, padding: '3rem 2rem' }}>
            <div style={{ position: 'absolute', inset: '1.5rem auto 1.5rem 0', width: '5px', background: theme.accent }} />
            <div style={{ maxWidth: '760px' }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: theme.accent, marginBottom: '1rem' }}>
                {theme.label}
              </div>
              <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 'clamp(2.5rem,5vw,4.4rem)', color: '#fff', lineHeight: 1, marginBottom: '0.75rem' }}>
                {cat.sr}
              </h1>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.62)', marginBottom: '1.15rem', maxWidth: '42rem' }}>
                {kategorija === 'utakmice' && 'Reakcije, prelomni trenuci i sire citanje Arsenalovih nastupa kroz sezonu.'}
                {kategorija === 'treninzi' && 'Forma ekipe, individualni napredak i takticki detalji koji stizu sa trening terena.'}
                {kategorija === 'takmicenja' && 'Prica o sezoni u sirem okviru: ritam, ambicije, raspored i borba za trofeje.'}
                {kategorija === 'vesti' && 'Transferi, klupske odluke, izjave i sve sto pomera pricu oko Arsenala.'}
              </p>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)' }}>
                {cat.en} | {posts.length} {posts.length === 1 ? 'tekst' : 'tekstova'}
              </div>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '3rem 1.5rem 0' }}>
          {posts.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.5rem' }}>
              {posts.map((p) => <PostCard key={p.slug} post={p} size="medium" />)}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', background: 'rgba(255,255,255,0.02)' }}>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>Jos nema tekstova</p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)' }}>
                Dodaj post sa <code style={{ color: '#C4A35A' }}>category: {kategorija}</code>
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
