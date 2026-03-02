import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background-light text-slate-900 font-display antialiased">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
