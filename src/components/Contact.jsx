import { motion } from 'framer-motion'
import { Mail, Phone, Globe, Calendar, ArrowUpRight } from 'lucide-react'

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'usama5228@gmail.com',
        href: 'mailto:usama5228@gmail.com',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+92 321 7575552',
        href: 'tel:+923217575552',
    },
    {
        icon: Globe,
        label: 'Web',
        value: 'proaccountant.tech',
        href: 'https://proaccountant.tech',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

export default function Contact() {
    return (
        <section id="contact" className="relative py-32 md:py-40 mesh-gradient">
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
                        Let&apos;s Connect
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
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight text-white mb-6">
                        Ready to transform your financial operations?
                    </h2>
                    <p className="text-base md:text-lg text-slate-light/70 leading-[1.8] font-normal">
                        Reach out directly to Usama Umer—no gatekeepers, no sales funnels.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Cards — Digital Business Card */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        custom={2}
                        className="space-y-4"
                    >
                        {/* Name Card */}
                        <div className="card-glass rounded-2xl p-8 mb-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-light/50 mb-3">
                                Lead Expert
                            </p>
                            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-1">
                                Usama Umer
                            </h3>
                            <p className="text-accent text-sm font-medium">
                                Financial Strategist & Fractional CFO
                            </p>
                        </div>

                        {/* Contact Links */}
                        {contactInfo.map((item, i) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                target={item.label === 'Web' ? '_blank' : undefined}
                                rel={item.label === 'Web' ? 'noopener noreferrer' : undefined}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i + 3}
                                className="group flex items-center gap-5 card-glass rounded-xl p-5 transition-all duration-300 hover:border-accent/20"
                            >
                                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                    <item.icon size={18} className="text-accent" strokeWidth={1.75} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-slate-light/50 uppercase tracking-wider mb-0.5">
                                        {item.label}
                                    </p>
                                    <p className="text-white font-medium text-sm truncate">
                                        {item.value}
                                    </p>
                                </div>
                                <ArrowUpRight
                                    size={16}
                                    className="text-slate-light/30 group-hover:text-accent transition-colors"
                                />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Schedule a Booking CTA */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        custom={3}
                        className="flex flex-col justify-center"
                    >
                        <div className="card-glass rounded-2xl p-10 lg:p-12 text-center">
                            {/* Calendar Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8">
                                <Calendar size={28} className="text-accent" strokeWidth={1.75} />
                            </div>

                            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                                Book a Free Consultation
                            </h3>
                            <p className="text-base text-slate-light/60 leading-[1.8] mb-8 max-w-sm mx-auto">
                                Schedule a 30-minute strategy call with Usama to discuss your
                                business financials and growth objectives.
                            </p>

                            <motion.a
                                href="https://cal.com/usama-mo7xl5"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-base font-semibold text-white tracking-wide glow-accent-sm w-full sm:w-auto"
                            >
                                <Calendar size={18} />
                                Schedule a Call
                            </motion.a>

                            <p className="mt-6 text-xs text-slate-light/40">
                                Free · No obligation · Pick a time that works for you
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
