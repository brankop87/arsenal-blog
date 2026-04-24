import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email || typeof email !== 'string') {
    console.error('[subscribe] Invalid email received:', email)
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID

  console.log('[subscribe] env check — BREVO_API_KEY present:', !!apiKey, '| BREVO_LIST_ID:', listId)

  if (!apiKey || !listId) {
    console.error('[subscribe] Missing env vars — set BREVO_API_KEY and BREVO_LIST_ID in Vercel dashboard')
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      listIds: [parseInt(listId, 10)],
      updateEnabled: true,
    }),
  })

  const responseText = await res.text()
  console.log('[subscribe] Brevo response — status:', res.status, '| body:', responseText)

  if (!res.ok) {
    return NextResponse.json({ error: 'Subscription failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
