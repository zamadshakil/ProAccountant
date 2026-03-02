import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

function FloatingShape({ className, delay = 0 }) {
    return (
        <motion.div
            className={`absolute pointer-events-none ${className}`}
            animate={{
                y: [0, -30, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay,
            }}
        />
    )
}

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient-strong"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Geometric SVGs */}
                <FloatingShape
                    className="top-[15%] left-[10%] w-32 h-32 md:w-48 md:h-48 opacity-[0.04]"
                    delay={0}
                >
                    <svg viewBox="0 0 200 200" fill="none">
                        <rect
                            x="20"
                            y="20"
                            width="160"
                            height="160"
                            rx="8"
                            stroke="#2563FF"
                            strokeWidth="1.5"
                        />
                    </svg>
                </FloatingShape>

                <FloatingShape
                    className="top-[25%] right-[8%] w-40 h-40 md:w-56 md:h-56 opacity-[0.05]"
                    delay={2}
                >
                    <svg viewBox="0 0 200 200" fill="none">
                        <circle cx="100" cy="100" r="80" stroke="#2563FF" strokeWidth="1" />
                        <circle cx="100" cy="100" r="50" stroke="#F59E0B" strokeWidth="0.75" />
                    </svg>
                </FloatingShape>

                <FloatingShape
                    className="bottom-[20%] left-[15%] w-36 h-36 md:w-44 md:h-44 opacity-[0.03]"
                    delay={4}
                >
                    <svg viewBox="0 0 200 200" fill="none">
                        <polygon
                            points="100,10 190,150 10,150"
                            stroke="#2563FF"
                            strokeWidth="1"
                        />
                    </svg>
                </FloatingShape>

                <FloatingShape
                    className="bottom-[30%] right-[20%] w-24 h-24 md:w-36 md:h-36 opacity-[0.04]"
                    delay={1}
                >
                    <svg viewBox="0 0 200 200" fill="none">
                        <line x1="10" y1="10" x2="190" y2="190" stroke="#F59E0B" strokeWidth="0.75" />
                        <line x1="190" y1="10" x2="10" y2="190" stroke="#2563FF" strokeWidth="0.75" />
                    </svg>
                </FloatingShape>

                {/* Glow orbs */}
                <motion.div
                    className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px]"
                    animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-gold/5 blur-[100px]"
                    animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.15, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {/* Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm font-medium text-slate-light tracking-wide">
                            Strategic Financial Advisory
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight mb-8">
                        <span className="text-gradient">Take Command</span>
                        <br />
                        <span className="text-gradient">of Your</span>
                        <br />
                        <span className="text-gradient-accent">Business Finances</span>
                    </h1>

                    {/* Subhead */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="max-w-2xl mx-auto text-base md:text-lg text-slate-light/80 leading-[1.8] mb-12 font-normal"
                    >
                        Proactive financial modeling, strategic advisory, and fractional
                        CFO services—engineered for businesses ready to scale.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="https://cal.com/usama-mo7xl5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary px-10 py-4 rounded-xl text-base font-semibold text-white tracking-wide glow-accent-sm"
                        >
                            Schedule a Consultation
                        </a>
                        <a
                            href="#philosophy"
                            className="group flex items-center gap-2 px-6 py-4 text-sm font-medium text-slate-light hover:text-white transition-colors"
                        >
                            Discover Our Approach
                            <ArrowDown
                                size={16}
                                className="group-hover:translate-y-0.5 transition-transform"
                            />
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
        </section>
    )
}
