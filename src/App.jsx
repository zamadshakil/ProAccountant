import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
