import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Team() {
  return (
    <section className="py-14 sm:py-24 bg-neutral-50 relative overflow-hidden" id="team" aria-label="Meet the ProAccountant.tech Team — Led by CPA Usama Umer" itemScope itemType="https://schema.org/Person">
      {/* Top half background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="text-accent-gold font-bold tracking-widest text-xs uppercase bg-accent-gold/10 px-3 py-1 rounded-full">
            Our Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mt-4">
            Meet The Experts
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 bg-white rounded-3xl p-5 sm:p-8 lg:p-12 shadow-2xl border border-slate-100"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={1}
        >
          {/* Image */}
          <div className="lg:w-2/5 flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent-gold to-primary rounded-[2rem] opacity-75 blur transition duration-500 group-hover:opacity-100" />
              <div className="relative aspect-[4/5] rounded-[1.8rem] overflow-hidden">
                <img
                  alt="Usama Umer — Founder & CEO of ProAccountant.tech, CPA Certified Accountant"
                  className="object-cover w-full h-full transform transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="400"
                  height="500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxiWu8OSXBvzwiylja6EDAgF0VBEGhZlCD8T2XE5QKlvUPP2oo4O_BSr22eHVfaAxcLKBr9W9EVa6kiIMfgQx1qwjQ3wRKlkQtHaIOJiCv9K-6OfohpNcUT3t1lcXtUMYl73ZoBn9xjoCNrujfWXVmS3SwYhYy_yj5bi6MFK6MiHb78onB70z7VVQRUu2PAipVWz6GvnlAipHm3XdQ_KCgEpA7zgVuRiet_fDifxPEPBDtwKVOojREHXUR3HtnOF7JCWuBR64xu28"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold text-primary">Usama Umer</h3>
                <p className="text-accent-gold text-sm font-bold uppercase tracking-wide">
                  Founder &amp; CEO
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:w-3/5 space-y-8">
            <h3 className="text-3xl font-bold text-primary" itemProp="jobTitle">A Partner in Your Prosperity</h3>
            <p className="text-slate-600 text-lg leading-relaxed" data-geo-summary="true">
              "I founded ProAccountant.tech with a simple belief:{' '}
              <strong className="text-primary">
                business owners deserve clarity, not just compliance.
              </strong>
              "
            </p>
            <p className="text-slate-600 text-base leading-relaxed" itemProp="description" data-geo-definition="true">
              Usama Umer is a CPA-certified accountant and the founder of ProAccountant.tech.
              With over a decade of experience navigating complex financial landscapes for
              startups, SaaS companies, and ecommerce brands, Usama leads a team of dedicated
              professionals who treat your business as their own. He holds certifications as a
              QuickBooks ProAdvisor and Xero Partner.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              <div data-geo-stat="years-experience">
                <div className="text-3xl font-black text-primary">10+</div>
                <div className="text-xs text-slate-500 uppercase font-semibold mt-1">
                  Years Experience
                </div>
              </div>
              <div data-geo-stat="clients-served">
                <div className="text-3xl font-black text-primary">500+</div>
                <div className="text-xs text-slate-500 uppercase font-semibold mt-1">
                  Clients Served
                </div>
              </div>
              <div data-geo-stat="managed-assets">
                <div className="text-3xl font-black text-primary">$2B+</div>
                <div className="text-xs text-slate-500 uppercase font-semibold mt-1">
                  Managed Assets
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="pt-4 flex flex-wrap gap-3">
              <span className="bg-slate-100 px-3 py-1 rounded text-xs font-bold text-slate-600">
                CPA Certified
              </span>
              <span className="bg-slate-100 px-3 py-1 rounded text-xs font-bold text-slate-600">
                QuickBooks ProAdvisor
              </span>
              <span className="bg-slate-100 px-3 py-1 rounded text-xs font-bold text-slate-600">
                Xero Partner
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
