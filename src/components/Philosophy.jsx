import { motion } from 'framer-motion'
import { TrendingUp, BarChart3, Layers } from 'lucide-react'

const pillars = [
    {
        icon: TrendingUp,
        title: 'Proactive Strategy',
        description:
            `We don't wait for tax season. We architect financial roadmaps that anticipate growth, optimize cash flow, and position your business ahead of every market shift.`,
    },
    {
        icon: BarChart3,
        title: 'Data-Driven Decisions',
        description:
            'Every recommendation is backed by rigorous financial modeling. No gut feelings—just clean data, clear projections, and measurable outcomes.',
    },
    {
        icon: Layers,
        title: 'Growth Architecture',
        description:
            'We build the financial infrastructure that scales with you—from early-stage bookkeeping to enterprise-level CFO strategy, all under one roof.',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

export default function Philosophy() {
    return (
        <section id="philosophy" className="relative py-32 md:py-40 mesh-gradient">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Label */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="mb-6"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                        Our Approach
                    </span>
                </motion.div>

                {/* Bold Statement */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    custom={1}
                    className="max-w-4xl mb-20"
                >
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8">
                        <span className="text-white">Stop reacting to your finances.</span>
                        <br />
                        <span className="text-slate-light">Start engineering them.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-light/70 leading-relaxed max-w-2xl font-light">
                        Most accounting firms file your taxes and send you the bill. We embed
                        ourselves in your business to build financial systems that drive
                        growth—turning numbers into a strategic advantage.
                    </p>
                </motion.div>

                {/* Three Pillars */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={pillar.title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            custom={i + 2}
                            className="group relative card-glass rounded-2xl p-8 lg:p-10 transition-all duration-500"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                                <pillar.icon size={22} className="text-accent" strokeWidth={1.75} />
                            </div>

                            {/* Content */}
                            <h3 className="font-heading font-bold text-xl mb-4 text-white group-hover:text-accent transition-colors duration-300">
                                {pillar.title}
                            </h3>
                            <p className="text-slate-light/70 leading-relaxed text-[15px]">
                                {pillar.description}
                            </p>

                            {/* Hover accent line */}
                            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
