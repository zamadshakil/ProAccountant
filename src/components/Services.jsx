import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    icon: 'account_balance_wallet',
    title: 'Fractional CFO',
    items: ['Strategic Planning & Forecasting', 'Cash Flow Management', 'Board Reporting'],
    highlighted: false,
  },
  {
    num: '02',
    icon: 'receipt_long',
    title: 'Accounting & Tax',
    items: ['Monthly Bookkeeping', 'Corporate Tax Filing', 'Sales Tax Compliance'],
    highlighted: true,
  },
  {
    num: '03',
    icon: 'analytics',
    title: 'Advisory & Audit',
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
    <section className="py-24 bg-white" id="services">
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
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">Our Expertise</h2>
            <p className="text-slate-600 text-lg">
              Comprehensive financial solutions tailored for every stage of your business lifecycle.
            </p>
          </div>
          <a className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all" href="#">
            View Full Service Menu <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-0 border-t border-l border-slate-200">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i + 1}
              className={`p-10 border-r border-b border-slate-200 transition-colors group ${
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
              <h3 className={`text-2xl font-bold mb-4 ${
                service.highlighted ? 'text-white' : 'text-primary'
              }`}>
                {service.title}
              </h3>
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
