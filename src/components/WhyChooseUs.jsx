import { motion } from 'framer-motion'

const features = [
  {
    icon: 'psychology',
    title: 'Proactive Advisory',
    description:
      "We don't wait for you to ask questions. We bring insights, identifying opportunities for growth and cost-saving before they become issues.",
    accentBg: 'bg-primary/5',
    hoverBg: 'group-hover:bg-primary group-hover:text-white',
    textColor: 'text-primary',
    hasCornerDecor: false,
  },
  {
    icon: 'speed',
    title: 'Tech-Driven Speed',
    description:
      'Leveraging the latest fintech stack to automate the mundane, ensuring your books are always up-to-date and audit-ready in real-time.',
    accentBg: 'bg-accent-gold/10',
    hoverBg: 'group-hover:bg-accent-gold group-hover:text-white',
    textColor: 'text-accent-gold',
    hasCornerDecor: true,
  },
  {
    icon: 'verified_user',
    title: 'Audit-Proof Reliability',
    description:
      'Sleep soundly knowing your compliance is handled by experts. We maintain meticulous records that stand up to any scrutiny.',
    accentBg: 'bg-primary/5',
    hoverBg: 'group-hover:bg-primary group-hover:text-white',
    textColor: 'text-primary',
    hasCornerDecor: false,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-24 bg-neutral-50" aria-label="Why Choose ProAccountant.tech" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2 className="text-sm font-bold text-accent-gold uppercase tracking-widest mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-6" data-geo-summary="true">
            Financial Clarity, Not Just Compliance.
          </h3>
          <p className="text-slate-600" data-geo-definition="true">
            Most accountants record history. We help you make it. ProAccountant.tech combines
            rigorous CPA-standard accounting with forward-looking strategic advisory, leveraging
            modern fintech tools like QuickBooks and Xero to deliver real-time financial insights.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i + 1}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group relative overflow-hidden"
            >
              {feature.hasCornerDecor && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
              )}
              <div
                className={`w-14 h-14 ${feature.accentBg} rounded-xl flex items-center justify-center mb-6 ${feature.hoverBg} transition-colors ${feature.textColor}`}
              >
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{feature.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
