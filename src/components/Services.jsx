import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    icon: 'account_balance_wallet',
    title: 'Fractional CFO',
    description: 'Part-time CFO leadership providing strategic planning, cash flow forecasting, and board-level reporting for scaling businesses.',
    items: ['Strategic Planning & Forecasting', 'Cash Flow Management', 'Board Reporting'],
    highlighted: false,
  },
  {
    num: '02',
    icon: 'receipt_long',
    title: 'Accounting & Tax',
    description: 'Comprehensive bookkeeping, corporate tax filing, and sales tax compliance to keep your financials audit-ready year-round.',
    items: ['Monthly Bookkeeping', 'Corporate Tax Filing', 'Sales Tax Compliance'],
    highlighted: true,
  },
  {
    num: '03',
    icon: 'analytics',
    title: 'Advisory & Audit',
    description: 'Financial modeling, due diligence for fundraising or M&A, and internal controls to prepare your business for the next stage.',
    items: ['Financial Modeling', 'Due Diligence Support', 'Internal Controls'],
    highlighted: false,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Services() {
  return (
    <section className="py-14 sm:py-24 bg-white" id="services" aria-label="ProAccountant.tech Services — Fractional CFO, Accounting & Tax, Advisory & Audit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4">Our Expertise</h2>
            <p className="text-slate-600 text-lg" data-geo-definition="true">
              ProAccountant.tech offers three core service lines — Fractional CFO, Accounting &amp; Tax,
              and Advisory &amp; Audit — tailored for every stage of your business lifecycle, from
              seed-stage startups to established enterprises.
            </p>
          </div>
          <a className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all" href="#">
            View Full Service Menu <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-0 border-t lg:border-l border-slate-200">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i + 1}
              className={`p-6 sm:p-10 border-b border-slate-200 lg:border-r transition-colors group ${
                service.highlighted ? 'bg-primary text-white' : 'hover:bg-neutral-50'
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                <span className={`text-4xl font-black transition-colors ${
                  service.highlighted
                    ? 'text-white/20 group-hover:text-white/30'
                    : 'text-slate-200 group-hover:text-accent-gold/20'
                }`}>
                  {service.num}
                </span>
                <div className={`p-3 rounded-full ${
                  service.highlighted ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                }`}>
                  <span className="material-symbols-outlined">{service.icon}</span>
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${
                service.highlighted ? 'text-white' : 'text-primary'
              }`}>
                {service.title}
              </h3>
              <p className={`text-sm mb-4 ${
                service.highlighted ? 'text-slate-300' : 'text-slate-500'
              }`} data-geo-definition="true">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.items.map((item) => (
                  <li key={item} className={`flex items-start gap-2 text-sm ${
                    service.highlighted ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    <span className="material-symbols-outlined text-accent-gold text-lg">check</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
