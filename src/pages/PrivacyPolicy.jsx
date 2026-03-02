import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background-light text-slate-900 font-display antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg shadow-lg">
                <span className="material-symbols-outlined text-accent-gold text-2xl">account_balance</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-primary uppercase leading-none">PROACCOUNTANT</span>
                <span className="text-xs font-semibold tracking-[0.2em] text-accent-gold uppercase leading-none mt-0.5">TECH</span>
              </div>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-primary py-16 sm:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="material-symbols-outlined text-accent-gold text-lg">shield</span>
              <span className="text-sm font-medium text-white/80">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Privacy Policy</h1>
            <p className="text-lg text-slate-300 font-light">
              Last updated: March 3, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Introduction */}
          <Section title="Introduction">
            <p>
              At ProAccountant.tech ("we," "our," or "us"), we are committed to protecting your privacy and safeguarding
              your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your
              information when you visit our website or use our accounting and financial services.
            </p>
            <p>
              By accessing our website or engaging our services, you agree to the terms outlined in this Privacy Policy.
              If you do not agree, please refrain from using our website or services.
            </p>
          </Section>

          {/* Information We Collect */}
          <Section title="Information We Collect">
            <p>We may collect the following types of information:</p>
            <Subsection title="Personal Information">
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Full name and contact details (email address, phone number)</li>
                <li>Business name and address</li>
                <li>Tax identification numbers and financial records</li>
                <li>Banking and payment information</li>
                <li>Government-issued identification (when required for tax filings)</li>
              </ul>
            </Subsection>
            <Subsection title="Automatically Collected Information">
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website or source</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </Subsection>
          </Section>

          {/* How We Use Your Information */}
          <Section title="How We Use Your Information">
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>To provide accounting, tax preparation, bookkeeping, and advisory services</li>
              <li>To communicate with you about your account and our services</li>
              <li>To process payments and manage billing</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To improve our website, services, and user experience</li>
              <li>To send relevant updates, newsletters, or promotional materials (with your consent)</li>
              <li>To protect against fraud, unauthorized access, and other security threats</li>
            </ul>
          </Section>

          {/* Data Sharing & Disclosure */}
          <Section title="Data Sharing & Disclosure">
            <p>
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist us in delivering our services (e.g., cloud hosting, payment processing, tax filing software)</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
              <li><strong>Government Agencies:</strong> Tax authorities and regulatory bodies as necessary for tax filings and compliance</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your data</li>
            </ul>
          </Section>

          {/* Data Security */}
          <Section title="Data Security">
            <p>
              We implement industry-standard security measures to protect your personal information, including:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <SecurityCard icon="encrypted" title="Encryption" description="All data transmitted through our website is protected with SSL/TLS encryption." />
              <SecurityCard icon="lock" title="Access Controls" description="Strict role-based access controls limit who can view your sensitive information." />
              <SecurityCard icon="backup" title="Secure Backups" description="Regular encrypted backups ensure your data is protected against loss." />
              <SecurityCard icon="monitoring" title="Monitoring" description="Continuous security monitoring to detect and prevent unauthorized access." />
            </div>
            <p className="mt-4">
              While we strive to protect your data, no method of transmission over the internet is 100% secure. We
              encourage you to take precautions to protect your personal information.
            </p>
          </Section>

          {/* Cookies */}
          <Section title="Cookies & Tracking Technologies">
            <p>
              Our website uses cookies and similar technologies to enhance your browsing experience. Cookies are small
              text files stored on your device that help us understand how you interact with our website.
            </p>
            <p>You can manage your cookie preferences through your browser settings. Disabling cookies may affect the
              functionality of certain features on our website.
            </p>
          </Section>

          {/* Your Rights */}
          <Section title="Your Rights">
            <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request the deletion of your personal data (subject to legal retention requirements)</li>
              <li><strong>Portability:</strong> Request your data in a structured, machine-readable format</li>
              <li><strong>Objection:</strong> Object to certain processing activities, including direct marketing</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details provided below.
            </p>
          </Section>

          {/* Data Retention */}
          <Section title="Data Retention">
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in
              this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Financial
              records and tax-related documents are retained in accordance with applicable tax laws and regulations.
            </p>
          </Section>

          {/* Third-Party Links */}
          <Section title="Third-Party Links">
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the
              privacy practices or content of these external sites. We encourage you to review the privacy policies
              of any third-party services you interact with.
            </p>
          </Section>

          {/* Children's Privacy */}
          <Section title="Children's Privacy">
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
              information from children. If we become aware that we have collected data from a child, we will take
              steps to delete it promptly.
            </p>
          </Section>

          {/* Changes to Policy */}
          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or
              legal requirements. We will post the updated policy on this page with a revised "Last Updated" date. We
              encourage you to review this policy periodically.
            </p>
          </Section>

          {/* Contact */}
          <section className="bg-primary rounded-2xl p-8 sm:p-10 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-accent-gold">contact_support</span>
                Contact Us
              </h2>
              <p className="text-slate-300 mb-6">
                If you have any questions or concerns about this Privacy Policy or our data practices,
                please reach out to us:
              </p>
              <div className="space-y-3">
                <ContactItem icon="business" text="ProAccountant.tech" />
                <ContactItem icon="mail" text="usama5228@gmail.com" href="mailto:usama5228@gmail.com" />
                <ContactItem icon="call" text="+92 321 7575552" href="tel:+923217575552" />
                <ContactItem icon="location_on" text="Remote First / Global — Registered CPA Firm" />
              </div>
            </div>
          </section>
        </motion.div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-slate-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} ProAccountant.tech. All rights reserved.
          </p>
          <Link to="/" className="text-xs text-slate-400 hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
        <div className="w-1 h-7 bg-accent-gold rounded-full" />
        {title}
      </h2>
      <div className="space-y-4 text-slate-600 leading-relaxed pl-4">
        {children}
      </div>
    </section>
  )
}

function Subsection({ title, children }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
      {children}
    </div>
  )
}

function SecurityCard({ icon, title, description }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="bg-primary/10 p-2 rounded-lg shrink-0">
          <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
        </div>
        <div>
          <h4 className="font-semibold text-primary text-sm">{title}</h4>
          <p className="text-xs text-slate-500 mt-1">{description}</p>
        </div>
      </div>
    </div>
  )
}

function ContactItem({ icon, text, href }) {
  const content = (
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-accent-gold text-lg">{icon}</span>
      <span className="text-white/90 text-sm">{text}</span>
    </div>
  )

  if (href) {
    return <a href={href} className="block hover:opacity-80 transition-opacity">{content}</a>
  }
  return content
}
