import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-20 lg:pb-32" aria-label="ProAccountant.tech — Strategic Finance for Modern Business" itemScope itemType="https://schema.org/WPHeader">
      {/* Background blurs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold text-xs font-bold uppercase tracking-wider border border-accent-gold/20">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
              Accepting New Clients for 2024
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-primary tracking-tight leading-[1.1]" data-geo-summary="true">
              Strategic Finance for <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-gold">Modern Business</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -rotate-1 z-0" />
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light" data-geo-definition="true">
              ProAccountant.tech is a CPA-led accounting firm providing Fractional CFO services,
              tax strategy, and pristine bookkeeping for startups, SaaS companies, ecommerce
              brands, and agencies. Over 500 clients served and $2B+ in assets managed.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://cal.com/usama-mo7xl5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a free consultation — Start your growth journey with ProAccountant"
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Start Your Growth Journey
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>

            </div>

            {/* Industry tags */}
            <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 text-slate-400 grayscale opacity-70">
              <span className="text-sm sm:text-xl font-bold tracking-tighter">FINTECH</span>
              <span className="text-sm sm:text-xl font-bold tracking-tighter">SAAS</span>
              <span className="text-sm sm:text-xl font-bold tracking-tighter">ECOMMERCE</span>
              <span className="text-sm sm:text-xl font-bold tracking-tighter">AGENCIES</span>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent-gold to-primary opacity-20 blur-xl rounded-[2rem]" />
              <img
                alt="Professional accounting consultation in a modern office — ProAccountant.tech"
                className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3] border-4 border-white"
                loading="eager"
                fetchPriority="high"
                width="600"
                height="450"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACFwbU_BdaRoPoi0Q8ABAwGxYaS3B2K_qjq0Bn0be-E9acmySR9fkohcv_bB9MstKANT-ucPReslSU5XhxgdrlGzxZ8AYuDcTioVqF7Lpi84j6DjcEe8Ecs5q7myuRUJpY-2I0b9hn5y-_ALKeNSBVk8jRPvhQ4r8mqpFNL0a8jMaRsHAe4MyqAF9kIwbig7nfPu5KN18-MWEOMtZoCj9YhnnvyCx5jjCSg1PXIUh1xvZyDSm_AIBYjlgYwHYpSZ2AuA2-k9fxqow"
              />

              {/* Floating Card - Revenue Growth */}
              <div
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-4 animate-bounce"
                style={{ animationDuration: '3s' }}
              >
                <div className="bg-green-100 p-3 rounded-lg text-green-600">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Revenue Growth</p>
                  <p className="text-xl font-black text-primary">+127%</p>
                </div>
              </div>

              {/* Floating Card - Tax Savings */}
              <div className="absolute top-10 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden sm:flex flex-col gap-2 max-w-[160px] transform rotate-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-500">Tax Savings</span>
                  <span className="material-symbols-outlined text-accent-gold text-sm">savings</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-gold w-[85%] rounded-full" />
                </div>
                <p className="text-sm font-bold text-primary">Optimized</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
