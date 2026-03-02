import { motion } from 'framer-motion'
import {
    LineChart,
    BookOpen,
    PieChart,
    Receipt,
    Users,
    Shield,
} from 'lucide-react'

const services = [
    {
        icon: LineChart,
        title: 'Financial Modeling',
        description:
            'Build predictive models that map revenue scenarios, cash flow projections, and growth trajectories—giving you clarity before you commit capital.',
        accent: 'accent',
        span: 'md:col-span-2',
    },
    {
        icon: BookOpen,
        title: 'Bookkeeping',
        description:
            'Precision-grade books maintained in real-time. Clean records, automated reconciliation, and instant visibility into every dollar.',
        accent: 'gold',
        span: '',
    },
    {
        icon: PieChart,
        title: 'Business Financials',
        description:
            'Comprehensive P&L, balance sheets, and cash flow statements that translate complex data into strategic business intelligence.',
        accent: 'accent',
        span: '',
    },
    {
        icon: Receipt,
        title: 'Income & Sales Tax',
        description:
            'Strategic tax planning that minimizes liability and maximizes returns. We optimize your tax position year-round, not just at filing time.',
        accent: 'gold',
        span: 'md:col-span-2',
    },
    {
        icon: Users,
        title: 'Payroll Management',
        description:
            'End-to-end payroll processing with compliance built in. Accurate, on-time, every time—so you can focus on leading your team.',
        accent: 'accent',
        span: '',
    },
    {
        icon: Shield,
        title: 'Fractional CFO',
        description:
            'C-suite financial leadership without the full-time commitment. Strategic oversight, fundraising support, and board-ready reporting.',
        accent: 'gold',
        span: 'md:col-span-2',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

export default function Services() {
    return (
        <section id="services" className="relative py-32 md:py-40">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="mb-6"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                        The Arsenal
                    </span>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    custom={1}
                    className="max-w-3xl mb-16"
                >
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight text-white">
                        Every tool your business needs to dominate its finances.
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-30px' }}
                            custom={i}
                            whileHover={{ y: -4, transition: { duration: 0.3 } }}
                            className={`group relative card-glass rounded-2xl p-8 lg:p-10 transition-all duration-500 cursor-default ${service.span}`}
                        >
                            {/* Top accent bar */}
                            <div
                                className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent ${service.accent === 'gold'
                                        ? 'via-gold/30'
                                        : 'via-accent/30'
                                    } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            <div className="flex items-start gap-5">
                                {/* Icon */}
                                <div
                                    className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${service.accent === 'gold'
                                            ? 'bg-gold/10 group-hover:bg-gold/20'
                                            : 'bg-accent/10 group-hover:bg-accent/20'
                                        }`}
                                >
                                    <service.icon
                                        size={22}
                                        className={
                                            service.accent === 'gold' ? 'text-gold' : 'text-accent'
                                        }
                                        strokeWidth={1.75}
                                    />
                                </div>

                                {/* Content */}
                                <div className="min-w-0">
                                    <h3 className="font-heading font-bold text-lg mb-2 text-white group-hover:text-white transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-light/60 text-[14px] leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Hover glow */}
                            <div
                                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${service.accent === 'gold'
                                        ? 'shadow-[inset_0_0_60px_#F59E0B08]'
                                        : 'shadow-[inset_0_0_60px_#2563FF08]'
                                    }`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
