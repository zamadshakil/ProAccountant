import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What is a fractional CFO and how can it help my business?',
    answer:
      'A fractional CFO is a part-time Chief Financial Officer who provides executive-level financial strategy without the cost of a full-time hire. At ProAccountant.tech, our fractional CFO services include strategic financial planning, cash flow forecasting, board-level reporting, and growth strategy. This is ideal for startups, SaaS companies, and scaling businesses that need expert financial leadership on a flexible basis. Businesses working with a fractional CFO typically see improved cash flow management, clearer financial forecasting, and data-driven decision making.',
  },
  {
    question: 'How much does professional bookkeeping cost for a small business?',
    answer:
      'Professional bookkeeping costs vary based on transaction volume, business complexity, and service scope. ProAccountant.tech offers tailored bookkeeping packages starting from competitive monthly rates. Our services include monthly reconciliation, financial statement preparation, accounts payable/receivable management, and real-time reporting through platforms like QuickBooks and Xero. Schedule a free 15-minute discovery call to get a custom quote for your business.',
  },
  {
    question: 'What industries does ProAccountant specialize in?',
    answer:
      'ProAccountant.tech specializes in serving technology-driven and high-growth businesses, including FinTech companies, SaaS (Software as a Service) businesses, ecommerce brands, and digital agencies. With over 10 years of experience and 500+ clients served across these sectors, we understand the unique financial challenges of recurring revenue models, high-volume transactions, digital sales tax compliance, and project-based revenue recognition.',
  },
  {
    question: 'What is the difference between bookkeeping and accounting?',
    answer:
      'Bookkeeping is the systematic recording of daily financial transactions — purchases, sales, receipts, and payments. Accounting is the broader practice of interpreting, classifying, analyzing, and reporting that financial data. At ProAccountant.tech, we provide both: meticulous bookkeeping to keep your records accurate and audit-ready, plus strategic accounting and advisory services that turn those numbers into actionable business insights.',
  },
  {
    question: 'Do I need a CPA for my startup?',
    answer:
      'Yes, having a CPA (Certified Public Accountant) is highly recommended for startups. A CPA ensures proper tax compliance from day one, helps structure your business for tax efficiency, prepares financial statements that investors and lenders require, and provides strategic advice on cash flow and growth. ProAccountant.tech is led by CPA-certified founder Usama Umer, who specializes in startup accounting and has helped over 500 businesses establish solid financial foundations.',
  },
  {
    question: 'How can ProAccountant help reduce my tax burden?',
    answer:
      'ProAccountant.tech reduces your tax burden through proactive tax planning, not just year-end filing. Our approach includes identifying all eligible deductions and credits, optimizing your business structure for tax efficiency, strategic timing of income and expenses, R&D tax credit identification for tech companies, sales tax nexus analysis, and year-round tax strategy adjustments.',
  },
  {
    question: 'What accounting software platforms does ProAccountant support?',
    answer:
      'ProAccountant.tech is certified on the leading cloud accounting platforms including QuickBooks Online (as a certified ProAdvisor) and Xero (as a certified Partner). We also integrate with popular business tools and can work with most modern fintech stacks. Our tech-driven approach means we leverage automation to keep your books updated in real-time while minimizing manual data entry.',
  },
  {
    question: 'How quickly can ProAccountant set up my accounting systems?',
    answer:
      'ProAccountant.tech can typically set up a complete accounting system within 1–2 weeks, depending on business complexity. This includes chart of accounts configuration, software setup and integration, historical data migration if needed, automated transaction rules, and custom reporting dashboards. We start with a free 15-minute discovery call to assess your needs, followed by a detailed onboarding plan.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      custom={index + 1}
      className="border-b border-slate-200 last:border-b-0"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-5 sm:py-6 text-left gap-4 group"
        aria-expanded={isOpen}
      >
        <h3
          className="text-base sm:text-lg font-semibold text-primary group-hover:text-accent-gold transition-colors pr-4"
          itemProp="name"
        >
          {faq.question}
        </h3>
        <span
          className={`material-symbols-outlined text-xl flex-shrink-0 text-accent-gold transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          add
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <p
              className="text-slate-600 text-sm sm:text-base leading-relaxed pb-6 pr-8"
              itemProp="text"
              data-geo-definition="true"
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      className="py-14 sm:py-24 bg-white"
      id="faq"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="text-accent-gold font-bold tracking-widest text-xs uppercase bg-accent-gold/10 px-3 py-1 rounded-full">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto" data-geo-summary="true">
            Everything you need to know about our fractional CFO, bookkeeping, tax strategy,
            and financial advisory services. Can't find your answer?{' '}
            <a
              href="https://cal.com/usama-mo7xl5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-gold font-semibold hover:underline"
            >
              Book a free call
            </a>{' '}
            and we'll help.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="bg-neutral-50 rounded-2xl border border-slate-100 px-6 sm:px-8 divide-slate-200">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
