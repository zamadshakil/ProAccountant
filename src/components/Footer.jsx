import { motion } from 'framer-motion'

const footerLinks = [
    { label: 'Approach', href: '#philosophy' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
]

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center md:items-start gap-2"
                    >
                        <a
                            href="#"
                            className="font-heading font-bold text-lg text-white hover:text-accent transition-colors"
                        >
                            proaccountant<span className="text-accent">.</span>tech
                        </a>
                        <p className="text-xs text-slate-light/40">
                            Strategic Financial Advisory
                        </p>
                    </motion.div>

                    {/* Links */}
                    <div className="flex items-center gap-8">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-slate-light/50 hover:text-white transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-slate-light/30">
                        &copy; {new Date().getFullYear()} ProAccountant. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
