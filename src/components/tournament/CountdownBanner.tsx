'use client'

import { useEffect, useState } from 'react'

type CountdownState = {
  days: number
  hours: number
  minutes: number
}

function getLastSaturdayOfJuly(year: number) {
  const date = new Date(year, 6, 31, 18, 0, 0)

  while (date.getDay() !== 6) {
    date.setDate(date.getDate() - 1)
  }

  return date
}

function getNextTournamentDate(now: Date) {
  const currentYearTarget = getLastSaturdayOfJuly(now.getFullYear())
  if (now <= currentYearTarget) return currentYearTarget
  return getLastSaturdayOfJuly(now.getFullYear() + 1)
}

function getCountdownState(): CountdownState & { targetLabel: string } {
  const now = new Date()
  const target = getNextTournamentDate(now)
  const diff = Math.max(target.getTime() - now.getTime(), 0)

  const totalMinutes = Math.floor(diff / (1000 * 60))
  const days = Math.floor(totalMinutes / (60 * 24))
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60)
  const minutes = totalMinutes % 60

  return {
    days,
    hours,
    minutes,
    targetLabel: target.toLocaleDateString('sr-RS', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
  }
}

export default function CountdownBanner() {
  const [state, setState] = useState(() => getCountdownState())

  useEffect(() => {
    const timer = window.setInterval(() => {
      setState(getCountdownState())
    }, 60000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section style={{ padding: '2rem 0 0' }}>
      <div style={{ borderRadius: '30px', border: '1px solid rgba(196,163,90,0.18)', background: 'linear-gradient(135deg, rgba(196,163,90,0.08), rgba(255,255,255,0.02))', padding: '1.6rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '1.5rem' }} className="countdown-topline">
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.7rem' }}>
              Odbrojavanje do turnira
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 'clamp(2.4rem,5vw,4.5rem)', color: '#fff', lineHeight: 0.95, marginBottom: '0.5rem' }}>
              Jos {state.days} dana
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.62)', maxWidth: '42rem' }}>
              Odbrojavanje je vezano za poslednju subotu u julu. Za ovu sezonu ciljamo pocetak turnira oko <strong style={{ color: '#fff' }}>{state.targetLabel}</strong>.
            </p>
          </div>
          <div style={{ padding: '0.6rem 0.85rem', borderRadius: '999px', border: '1px solid rgba(196,163,90,0.22)', background: 'rgba(196,163,90,0.08)', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#f1dcac', whiteSpace: 'nowrap' }}>
            Poslednja nedelja jula
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1rem' }} className="countdown-grid">
          {[
            { label: 'Dana', value: state.days },
            { label: 'Sati', value: state.hours },
            { label: 'Minuta', value: state.minutes },
          ].map((item) => (
            <div key={item.label} style={{ borderRadius: '24px', border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.14)', padding: '1.25rem 1rem' }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4A35A', marginBottom: '0.65rem' }}>
                {item.label}
              </div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 'clamp(2.1rem,6vw,4rem)', lineHeight: 0.95, color: '#fff' }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .countdown-grid { grid-template-columns: 1fr !important; }
          .countdown-topline { flex-direction: column !important; }
        }
      `}</style>
    </section>
  )
}
