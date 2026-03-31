'use client'
import Link from 'next/link'
import { PostMeta } from '@/lib/posts'
import { categoryLabels } from '@/lib/categories'
import { format } from 'date-fns'
import { sr } from 'date-fns/locale'

type Props = { post: PostMeta; size?: 'large' | 'medium' | 'small' }

function formatDate(date: string) {
  try { return format(new Date(date), 'd. MMMM yyyy.', { locale: sr }) } catch { return date }
}

export default function PostCard({ post, size = 'medium' }: Props) {
  const cat = categoryLabels[post.category]?.sr ?? post.category
  const date = formatDate(post.date)

  if (size === 'large') {
    return (
      <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <article className="card-hover" style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '2px',
          background: '#111',
          cursor: 'pointer',
          minHeight: '420px',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: post.coverImage ? `url(${post.coverImage}) center/cover no-repeat` : 'linear-gradient(135deg,#1C1C1C,#111)' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: '#EF0107' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,.95) 0%,rgba(0,0,0,.4) 60%,transparent 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#EF0107', display: 'block', marginBottom: '0.6rem' }}>{cat}</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 'clamp(1.3rem,3vw,2rem)', color: '#fff', lineHeight: 1.2, marginBottom: '0.6rem' }}>{post.title}</h2>
            <p style={{ fontSize: '0.875rem', color: '#AAA', lineHeight: 1.6, marginBottom: '0.6rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>{post.excerpt}</p>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.65rem', letterSpacing: '0.1em', color: '#555', textTransform: 'uppercase' }}>{date}</span>
          </div>
        </article>
      </Link>
    )
  }

  if (size === 'small') {
    return (
      <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <article className="card-hover" style={{ display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #1C1C1C', cursor: 'pointer' }}>
          <div style={{ width: '80px', height: '60px', flexShrink: 0, background: post.coverImage ? `url(${post.coverImage}) center/cover no-repeat` : '#1C1C1C', borderRadius: '2px', borderLeft: '3px solid #EF0107' }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#EF0107', display: 'block', marginBottom: '0.25rem' }}>{cat}</span>
            <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#fff', lineHeight: 1.3, marginBottom: '0.2rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>{post.title}</h3>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.6rem', letterSpacing: '0.08em', color: '#444', textTransform: 'uppercase' }}>{date}</span>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article className="card-hover"
        style={{ background: '#111', borderRadius: '2px', overflow: 'hidden', cursor: 'pointer', borderBottom: '3px solid transparent', transition: 'border-color 0.3s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#EF0107' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'transparent' }}
      >
        <div style={{ height: '200px', background: post.coverImage ? `url(${post.coverImage}) center/cover no-repeat` : 'linear-gradient(135deg,#1C1C1C,#111)', borderLeft: '4px solid #EF0107' }} />
        <div style={{ padding: '1.25rem' }}>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#EF0107', display: 'block', marginBottom: '0.4rem' }}>{cat}</span>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1.1rem', color: '#fff', lineHeight: 1.35, marginBottom: '0.6rem' }}>{post.title}</h3>
          <p style={{ fontSize: '0.85rem', color: '#777', lineHeight: 1.6, marginBottom: '0.75rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>{post.excerpt}</p>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.6rem', letterSpacing: '0.1em', color: '#444', textTransform: 'uppercase' }}>{date}</span>
        </div>
      </article>
    </Link>
  )
}