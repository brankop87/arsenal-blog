import { getAllPosts, categoryLabels, Category } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import CategoryGrid from '@/components/CategoryGrid'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const categories: Category[] = ['utakmice', 'treninzi', 'takmicenja', 'vesti']

export default function HomePage() {
  const all = getAllPosts()
  const featured = all.find(p => p.featured) ?? all[0]
  const rest = all.filter(p => p.slug !== featured?.slug).slice(0, 8)
  const latest = all.slice(0, 5)
  const counts = Object.fromEntries(categories.map(c => [c, all.filter(p => p.category === c).length]))

  return (
    <>
      <Navbar />
      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ display: 'block', width: '32px', height: '3px', background: '#EF0107', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EF0107' }}>Istaknuto</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '1.5rem' }} className="hero-grid">
            <div>{featured && <PostCard post={featured} size="large" />}</div>
            <aside>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9C824A', marginBottom: '0.5rem' }}>Najnovije</div>
              {latest.map(p => <PostCard key={p.slug} post={p} size="small" />)}
            </aside>
          </div>
        </section>

        <div style={{ borderTop: '1px solid #1C1C1C' }} />

        {/* All posts */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ display: 'block', width: '32px', height: '3px', background: '#EF0107', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EF0107' }}>Svi tekstovi</span>
          </div>

          {rest.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1.5rem' }}>
              {rest.map(p => <PostCard key={p.slug} post={p} size="medium" />)}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.5rem', color: '#333', marginBottom: '0.5rem' }}>Još nema tekstova</p>
              <p style={{ fontSize: '0.9rem', color: '#444' }}>
                Dodaj prvi post u <code style={{ color: '#9C824A' }}>content/posts/</code>
              </p>
            </div>
          )}
        </section>

        {/* Categories */}
        <section style={{ background: '#111', borderTop: '1px solid #1C1C1C', borderBottom: '1px solid #1C1C1C', padding: '2.5rem 1.5rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ display: 'block', width: '32px', height: '3px', background: '#9C824A', flexShrink: 0 }} />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9C824A' }}>Kategorije</span>
            </div>
            <CategoryGrid categories={categories} counts={counts} />
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media(max-width:900px){.hero-grid{grid-template-columns:1fr!important}}
      `}</style>
    </>
  )
}
