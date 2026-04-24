import { getPostBySlug, getAllPosts, categoryLabels } from '@/lib/posts'
import { getCategoryTheme, getFallbackCoverBackground } from '@/lib/postTheme'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PostCard from '@/components/PostCard'
import SubscribeForm from '@/components/SubscribeForm'
import { format } from 'date-fns'
import { sr } from 'date-fns/locale'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      ...(post.coverImage && { images: [{ url: post.coverImage }] }),
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const all = getAllPosts()
  const related = all.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)
  const catLabel = categoryLabels[post.category]?.sr ?? post.category
  const theme = getCategoryTheme(post.category)

  let dateFormatted = post.date
  try {
    dateFormatted = format(new Date(post.date), 'd. MMMM yyyy.', { locale: sr })
  } catch {}

  const heroBackground = post.coverImage
    ? `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.38)), url(${post.coverImage}) center/cover no-repeat`
    : getFallbackCoverBackground(post.category)

  return (
    <>
      <Navbar />
      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
        <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '2rem 1.5rem 0' }}>
          <div style={{ position: 'relative', minHeight: '580px', overflow: 'hidden', borderRadius: '32px', background: heroBackground, border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 30px 80px rgba(0,0,0,0.28)' }}>
            {!post.coverImage && (
              <>
                <div style={{ position: 'absolute', top: '2rem', right: '2rem', width: '240px', height: '240px', border: `1px solid ${theme.stroke}`, borderRadius: '50%', opacity: 0.24 }} />
                <div style={{ position: 'absolute', top: '4rem', right: '4rem', width: '180px', height: '180px', border: `1px solid ${theme.stroke}`, borderRadius: '50%', opacity: 0.18 }} />
              </>
            )}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,8,8,0.18) 0%, rgba(8,8,8,0.34) 36%, rgba(8,8,8,0.96) 100%)' }} />
            <div style={{ position: 'absolute', inset: '1.8rem auto 1.8rem 0', width: '5px', background: theme.accent, zIndex: 2 }} />
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', minHeight: '580px', alignItems: 'flex-end', padding: '2.25rem' }}>
              <div style={{ maxWidth: '820px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0.8rem', borderRadius: '999px', background: theme.accentSoft, border: `1px solid ${theme.stroke}`, marginBottom: '1rem' }}>
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff' }}>{catLabel}</span>
                  <span style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.18)' }} />
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.74)' }}>The Cannon Feature</span>
                </div>
                <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 'clamp(2.4rem,5vw,4.6rem)', color: '#fff', lineHeight: 0.98, marginBottom: '1rem', maxWidth: '14ch' }}>
                  {post.title}
                </h1>
                {post.excerpt && (
                  <p style={{ fontSize: '1.08rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, marginBottom: '1rem', maxWidth: '48rem' }}>
                    {post.excerpt}
                  </p>
                )}
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.76rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.46)', textTransform: 'uppercase' }}>{dateFormatted}</span>
              </div>
            </div>
          </div>
        </section>

        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 760px) 1fr', gap: '3rem', padding: '3rem 0 0' }} className="article-layout">
            <article style={{ minWidth: 0 }}>
              <div style={{ padding: '0 0 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '2rem' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: theme.accent, marginBottom: '0.65rem' }}>
                  Uvod
                </div>
                <p style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.38rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.82)', lineHeight: 1.7, margin: 0 }}>
                  {post.excerpt}
                </p>
              </div>
              <div className="article-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
              <SubscribeForm locale="sr" />
            </article>

            <aside style={{ display: 'grid', alignContent: 'start', gap: '1rem' }}>
              <div style={{ padding: '1.5rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.75rem' }}>
                  O tekstu
                </div>
                <div style={{ display: 'grid', gap: '0.85rem' }}>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.64rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.34)', marginBottom: '0.2rem' }}>Rubrika</div>
                    <div style={{ color: '#fff', fontSize: '1rem' }}>{catLabel}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.64rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.34)', marginBottom: '0.2rem' }}>Objavljeno</div>
                    <div style={{ color: '#fff', fontSize: '1rem' }}>{dateFormatted}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.64rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.34)', marginBottom: '0.2rem' }}>Vizual</div>
                    <div style={{ color: '#fff', fontSize: '1rem' }}>{post.coverImage ? 'Fotografija' : 'Branded cover fallback'}</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {related.length > 0 && (
          <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '4rem 1.5rem 0' }}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.85rem' }}>
                <span style={{ display: 'block', width: '36px', height: '3px', background: theme.accent, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: theme.accent }}>Slicni tekstovi</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1.5rem' }}>
                {related.map((p) => <PostCard key={p.slug} post={p} size="medium" />)}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />

      <style>{`
        @media (max-width: 980px) {
          .article-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
