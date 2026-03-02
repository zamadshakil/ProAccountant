import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg shadow-lg">
              <span className="material-symbols-outlined text-accent-gold text-2xl">account_balance</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-primary uppercase leading-none">PROACCOUNTANT</span>
              <span className="text-xs font-semibold tracking-[0.2em] text-accent-gold uppercase leading-none mt-0.5">TECH</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary hover:font-semibold transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary" href="tel:+923217575552">
              <span className="material-symbols-outlined text-accent-gold text-lg">call</span>
              <span>+92 321 7575552</span>
            </a>
            <a
              href="https://cal.com/usama-mo7xl5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a free consultation with ProAccountant"
              className="hidden sm:inline-block bg-accent-gold text-primary hover:bg-white hover:text-accent-gold hover:ring-2 hover:ring-accent-gold px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md transform hover:scale-105"
            >
              Book Free Consultation
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-600"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neutral-100 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-medium text-slate-600 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://cal.com/usama-mo7xl5"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-accent-gold text-primary px-6 py-3 rounded-full font-bold text-sm mt-4"
              >
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
