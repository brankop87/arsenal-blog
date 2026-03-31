'use client'
import Link from 'next/link'
import { PostMeta } from '@/lib/posts'
import { categoryLabels } from '@/lib/categories'
import { getCategoryTheme, getFallbackCoverBackground } from '@/lib/postTheme'
import { format } from 'date-fns'
import { sr } from 'date-fns/locale'

type Props = { post: PostMeta; size?: 'large' | 'medium' | 'small' }

function formatDate(date: string) {
  try {
    return format(new Date(date), 'd. MMMM yyyy.', { locale: sr })
  } catch {
    return date
  }
}

function CoverArt({ post, compact = false }: { post: PostMeta; compact?: boolean }) {
  const theme = getCategoryTheme(post.category)
  const hasImage = Boolean(post.coverImage)

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: hasImage
          ? `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.45)), url(${post.coverImage}) center/cover no-repeat`
          : getFallbackCoverBackground(post.category),
      }}
    >
      {!hasImage && (
        <>
          <div
            style={{
              position: 'absolute',
              inset: '12% 10% auto auto',
              width: compact ? '110px' : '180px',
              height: compact ? '110px' : '180px',
              border: `1px solid ${theme.stroke}`,
              borderRadius: '50%',
              opacity: 0.3,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: compact ? '1rem' : '1.5rem',
              right: compact ? '1rem' : '1.5rem',
              bottom: compact ? '0.85rem' : '1.25rem',
              paddingTop: '0.9rem',
              borderTop: `1px solid ${theme.stroke}`,
            }}
          >
            <div
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 700,
                fontSize: compact ? '0.62rem' : '0.72rem',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: theme.accent,
                marginBottom: '0.35rem',
              }}
            >
              {theme.label}
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display',serif",
                fontWeight: 700,
                fontSize: compact ? '0.95rem' : '1.15rem',
                lineHeight: 1.1,
                color: 'rgba(255,255,255,0.92)',
                maxWidth: compact ? '75%' : '65%',
              }}
            >
              The Cannon
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default function PostCard({ post, size = 'medium' }: Props) {
  const cat = categoryLabels[post.category]?.sr ?? post.category
  const date = formatDate(post.date)
  const theme = getCategoryTheme(post.category)

  if (size === 'large') {
    return (
      <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <article
          className="card-hover"
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '28px',
            background: '#111',
            cursor: 'pointer',
            minHeight: '560px',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 28px 70px rgba(0,0,0,0.35)',
          }}
        >
          <CoverArt post={post} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 0%, rgba(7,7,7,0.18) 30%, rgba(7,7,7,0.94) 100%)` }} />
          <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', right: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                padding: '0.45rem 0.7rem',
                borderRadius: '999px',
                background: theme.accentSoft,
                border: `1px solid ${theme.stroke}`,
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 700,
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#fff',
              }}
            >
              {cat}
            </span>
            <span
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: '0.68rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.72)',
              }}
            >
              Featured Story
            </span>
          </div>
          <div style={{ position: 'absolute', left: 0, top: '1.4rem', bottom: '1.4rem', width: '5px', background: theme.accent }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 2rem 2.15rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.45rem)', color: '#fff', lineHeight: 1.05, marginBottom: '0.9rem', maxWidth: '85%' }}>
              {post.title}
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, marginBottom: '1rem', maxWidth: '75%', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>
              {post.excerpt}
            </p>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.74rem', letterSpacing: '0.16em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>{date}</span>
          </div>
        </article>
      </Link>
    )
  }

  if (size === 'small') {
    return (
      <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <article className="story-list-card card-hover" style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: '1rem', padding: '1rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '18px', background: 'rgba(255,255,255,0.02)', cursor: 'pointer' }}>
          <div style={{ position: 'relative', minHeight: '88px', overflow: 'hidden', borderRadius: '14px', background: '#1C1C1C' }}>
            <CoverArt post={post} compact />
            <div style={{ position: 'absolute', inset: 0, boxShadow: `inset 0 0 0 1px ${theme.stroke}` }} />
          </div>
          <div style={{ minWidth: 0 }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: theme.accent, display: 'block', marginBottom: '0.35rem' }}>{cat}</span>
            <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '1rem', color: '#fff', lineHeight: 1.28, marginBottom: '0.45rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>{post.title}</h3>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.62rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase' }}>{date}</span>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article
        className="card-hover"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))',
          borderRadius: '24px',
          overflow: 'hidden',
          cursor: 'pointer',
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
        }}
      >
        <div style={{ position: 'relative', height: '250px', background: '#101010' }}>
          <CoverArt post={post} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.28) 100%)' }} />
          <div style={{ position: 'absolute', left: '1rem', top: '1rem', padding: '0.4rem 0.6rem', borderRadius: '999px', background: theme.accentSoft, border: `1px solid ${theme.stroke}`, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#fff' }}>
            {cat}
          </div>
          <div style={{ position: 'absolute', inset: '1rem auto 1rem 0', width: '4px', background: theme.accent }} />
        </div>
        <div style={{ padding: '1.35rem 1.35rem 1.5rem' }}>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1.45rem', color: '#fff', lineHeight: 1.2, marginBottom: '0.75rem' }}>{post.title}</h3>
          <p style={{ fontSize: '0.94rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.7, marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>{post.excerpt}</p>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.66rem', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>{date}</span>
        </div>
      </article>
    </Link>
  )
}
