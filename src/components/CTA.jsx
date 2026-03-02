import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to scale with confidence?
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
            Schedule your free 15-minute discovery call. We'll identify your biggest financial
            bottlenecks and outline a path to clarity.
          </p>
          <div className="flex justify-center">
            <a
              href="https://cal.com/usama-mo7xl5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-gold text-primary hover:bg-white hover:text-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              Book Free Consultation
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            No commitment required. 100% confidential.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
