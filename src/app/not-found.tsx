import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0A0A0A', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '7rem', color: '#EF0107', lineHeight: 1, marginBottom: '1rem', opacity: 0.12 }}>404</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: '2rem', color: '#fff', marginBottom: '1rem', marginTop: '-3rem' }}>Stranica nije pronađena</h1>
          <p style={{ fontSize: '0.95rem', color: '#444', marginBottom: '2rem', lineHeight: 1.7 }}>Ovaj tekst ne postoji ili je uklonjen.</p>
          <Link href="/" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', border: '1px solid #2A2A2A', padding: '0.75rem 1.5rem', borderRadius: '2px' }}>
            ← Nazad na početnu
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
