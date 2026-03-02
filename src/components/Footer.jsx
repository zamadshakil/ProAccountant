import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-12 sm:pt-20 pb-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <span className="material-symbols-outlined text-white text-xl">account_balance</span>
              </div>
              <span className="text-lg font-extrabold tracking-tight text-primary uppercase">
                PROACCOUNTANT<span className="text-accent-gold">.TECH</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed" data-geo-definition="true">
              ProAccountant.tech is a CPA-led accounting firm providing Fractional CFO, tax
              strategy, bookkeeping, and financial advisory services. Founded by Usama Umer,
              serving 500+ clients globally with $2B+ in managed assets.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-primary mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-accent-gold transition-colors" href="#services">Fractional CFO</a></li>
              <li><a className="hover:text-accent-gold transition-colors" href="#services">Tax Preparation</a></li>
              <li><a className="hover:text-accent-gold transition-colors" href="#services">Bookkeeping</a></li>
              <li><a className="hover:text-accent-gold transition-colors" href="#services">Payroll Services</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-primary mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link className="hover:text-accent-gold transition-colors" to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className="hover:text-accent-gold transition-colors" to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-primary mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent-gold text-lg mt-0.5">location_on</span>
                <span>Remote First / Global<br />Registered CPA Firm</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent-gold text-lg">call</span>
                <a className="hover:text-primary transition-colors" href="tel:+923217575552">+92 321 7575552</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent-gold text-lg">mail</span>
                <a className="hover:text-primary transition-colors" href="mailto:usama5228@gmail.com">usama5228@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} ProAccountant.tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <Link className="hover:text-primary transition-colors" to="/terms-of-service">Terms of Service</Link>
            <Link className="hover:text-primary transition-colors" to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
