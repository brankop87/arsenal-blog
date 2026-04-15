import { Category, getCategoryLabel } from '@/lib/categories'
import { Locale, getUi, localePrefix } from '@/lib/i18n'
import { PostMeta } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import CategoryGrid from '@/components/CategoryGrid'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type Props = {
  locale: Locale
  all: PostMeta[]
}

const categories: Category[] = ['utakmice', 'treninzi', 'takmicenja', 'vesti']

export default function HomePageView({ locale, all }: Props) {
  const ui = getUi(locale)
  const featured = all[0]
  const latest = all.filter((p) => p.slug !== featured?.slug).slice(0, 4)
  const spotlight = latest.slice(0, 2)
  const feed = all.filter((p) => p.slug !== featured?.slug && !spotlight.some((item) => item.slug === p.slug)).slice(0, 6)
  const counts = Object.fromEntries(categories.map((c) => [c, all.filter((p) => p.category === c).length]))
  const sidebarLead = latest[0]
  const sidebarNotes = latest.slice(1, 3)

  return (
    <>
      <Navbar locale={locale} />
      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
        <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '2.5rem 1.5rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.65fr', gap: '1.5rem', alignItems: 'stretch' }} className="hero-grid">
            <div>
              {featured && <PostCard post={featured} size="large" locale={locale} />}
            </div>

            <aside style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ padding: '1.5rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4A35A' }}>{ui.home.focus}</span>
                  <span style={{ width: '52px', height: '1px', background: 'rgba(255,255,255,0.12)' }} />
                </div>
                {sidebarLead && (
                  <>
                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '2rem', lineHeight: 1.05, color: '#fff', marginBottom: '0.9rem' }}>
                      {sidebarLead.title}
                    </h2>
                    <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.62)', marginBottom: '1.2rem' }}>
                      {sidebarLead.excerpt}
                    </p>
                  </>
                )}
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {sidebarNotes.map((post, index) => (
                    <a key={post.slug} href={`${localePrefix(locale)}/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                      <div style={{ padding: '0.95rem 1rem', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.66rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: index === 0 ? '#EF0107' : '#C4A35A', marginBottom: '0.35rem' }}>
                          {index === 0 ? ui.home.secondAngle : ui.home.freshFromBlog}
                        </div>
                        <div style={{ color: '#fff', fontSize: '0.98rem', lineHeight: 1.45 }}>{post.title}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div style={{ padding: '1.25rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.06)', background: '#0f0f0f' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9C824A', marginBottom: '1rem' }}>
                  {ui.home.latest}
                </div>
                <div style={{ display: 'grid', gap: '0.85rem' }}>
                  {latest.map((p) => (
                    <PostCard key={p.slug} post={p} size="small" locale={locale} />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '4rem 1.5rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1.5rem' }} className="spotlight-grid">
            {spotlight.map((post, index) => (
              <div key={post.slug}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ display: 'block', width: '32px', height: '3px', background: index === 0 ? '#EF0107' : '#C4A35A', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: index === 0 ? '#EF0107' : '#C4A35A' }}>
                    {index === 0 ? ui.home.secondStory : ui.home.focus}
                  </span>
                </div>
                <PostCard post={post} size="medium" locale={locale} />
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '4rem 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.85rem' }}>
            <span style={{ display: 'block', width: '38px', height: '3px', background: '#EF0107', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#EF0107' }}>{ui.home.allStories}</span>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.56)', maxWidth: '42rem', marginBottom: '2rem' }}>
            {ui.home.allStoriesText}
          </p>

          {feed.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.5rem' }}>
              {feed.map((p) => <PostCard key={p.slug} post={p} size="medium" locale={locale} />)}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', background: 'rgba(255,255,255,0.02)' }}>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.7rem', color: '#fff', marginBottom: '0.5rem' }}>{ui.home.noStories}</p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)' }}>
                {ui.home.addFirstPost} <code style={{ color: '#C4A35A' }}>content/posts/</code>
              </p>
            </div>
          )}
        </section>

        <section style={{ background: 'linear-gradient(180deg, #121212 0%, #0d0d0d 100%)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '3.5rem 1.5rem 4rem' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.85rem' }}>
              <span style={{ display: 'block', width: '38px', height: '3px', background: '#9C824A', flexShrink: 0 }} />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#9C824A' }}>{ui.home.categories}</span>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.56)', maxWidth: '44rem', marginBottom: '2rem' }}>
              {ui.home.categoriesText}
            </p>
            <CategoryGrid categories={categories} counts={counts} locale={locale} />
          </div>
        </section>
      </main>
      <Footer locale={locale} />

      <style>{`
        @media (max-width: 1080px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 860px) {
          .spotlight-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
