'use client'

import { useState } from 'react'
import { getUi, Locale } from '@/lib/i18n'

type Props = {
  locale?: Locale
}

export default function SubscribeForm({ locale = 'sr' }: Props) {
  const ui = getUi(locale)
  const copy = ui.subscribe

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{
      margin: '3rem 0 0',
      padding: '2rem 2.25rem',
      borderRadius: '24px',
      border: '1px solid rgba(255,255,255,0.07)',
      background: 'linear-gradient(135deg, rgba(239,1,7,0.06) 0%, rgba(196,163,90,0.04) 100%)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
        <span style={{ display: 'block', width: '32px', height: '3px', background: '#EF0107', flexShrink: 0 }} />
        <p style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontWeight: 700,
          fontSize: '0.88rem',
          letterSpacing: '0.04em',
          color: 'rgba(255,255,255,0.82)',
          margin: 0,
        }}>
          {copy.headline}
        </p>
      </div>

      {status === 'success' ? (
        <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.95rem', color: '#C4A35A', letterSpacing: '0.04em' }}>
          {copy.success}
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copy.placeholder}
            style={{
              flex: '1 1 240px',
              padding: '0.7rem 1rem',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.04)',
              color: '#fff',
              fontSize: '0.95rem',
              outline: 'none',
              fontFamily: 'inherit',
            }}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              padding: '0.7rem 1.5rem',
              borderRadius: '12px',
              border: 'none',
              background: '#EF0107',
              color: '#fff',
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 700,
              fontSize: '0.88rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: status === 'loading' ? 'wait' : 'pointer',
              opacity: status === 'loading' ? 0.7 : 1,
            }}
          >
            {status === 'loading' ? '...' : copy.button}
          </button>
          {status === 'error' && (
            <p style={{ width: '100%', margin: '0.4rem 0 0', fontSize: '0.82rem', color: '#EF0107', fontFamily: "'Barlow Condensed',sans-serif" }}>
              {copy.error}
            </p>
          )}
        </form>
      )}
    </div>
  )
}
