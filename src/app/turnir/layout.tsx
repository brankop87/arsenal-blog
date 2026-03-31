import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TurnirLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>{children}</main>
      <Footer />
    </>
  )
}
