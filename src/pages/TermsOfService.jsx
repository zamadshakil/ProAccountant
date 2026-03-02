import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function TermsOfService() {
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
              <span className="material-symbols-outlined text-accent-gold text-lg">gavel</span>
              <span className="text-sm font-medium text-white/80">Legal Agreement</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Terms of Service</h1>
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
              Welcome to ProAccountant.tech ("we," "our," or "us"). These Terms of Service ("Terms") govern your
              access to and use of our website at <strong>proaccountant.tech</strong> and all accounting, tax
              preparation, bookkeeping, fractional CFO, and financial advisory services we provide (collectively,
              the "Services").
            </p>
            <p>
              By accessing our website or engaging our Services, you ("you" or "Client") agree to be bound by these
              Terms. If you do not agree to these Terms, please do not use our website or Services.
            </p>
          </Section>

          {/* Services Overview */}
          <Section title="Services We Provide">
            <p>ProAccountant.tech provides the following professional services:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li><strong>Fractional CFO Services:</strong> Part-time Chief Financial Officer support including strategic financial planning, cash flow forecasting, board-level reporting, and growth strategy</li>
              <li><strong>Accounting & Tax:</strong> Monthly bookkeeping, corporate tax filing, sales tax compliance, tax strategy, and year-round tax preparation</li>
              <li><strong>Advisory & Audit:</strong> Financial modeling, due diligence support, internal controls, and audit-readiness assessments</li>
              <li><strong>Payroll Services:</strong> Payroll processing, compliance, and reporting</li>
            </ul>
            <p>
              The specific scope of Services for each Client will be outlined in a separate engagement letter
              or service agreement.
            </p>
          </Section>

          {/* Eligibility */}
          <Section title="Eligibility">
            <p>
              To use our Services, you must be at least 18 years of age and have the legal capacity to enter into
              a binding agreement. If you are using our Services on behalf of a business or organization, you
              represent that you have the authority to bind that entity to these Terms.
            </p>
          </Section>

          {/* Client Responsibilities */}
          <Section title="Client Responsibilities">
            <p>As a Client of ProAccountant.tech, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Provide accurate, complete, and timely information required for the performance of our Services</li>
              <li>Respond to our requests for documentation and approvals in a reasonable timeframe</li>
              <li>Notify us promptly of any changes to your business, financial situation, or contact information</li>
              <li>Maintain the confidentiality of any account credentials or access we provide</li>
              <li>Use our Services only for lawful purposes and in compliance with all applicable laws</li>
              <li>Review and approve deliverables (tax filings, financial statements, etc.) before submission deadlines</li>
            </ul>
            <p>
              We are not responsible for errors, penalties, or losses arising from inaccurate or incomplete
              information provided by you.
            </p>
          </Section>

          {/* Engagement & Fees */}
          <Section title="Engagement & Fees">
            <p>
              Our fees are based on the scope and complexity of the Services requested and will be communicated
              in writing before work begins. Key terms regarding engagement and fees include:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <InfoCard
                icon="description"
                title="Engagement Letter"
                description="All service engagements are governed by a separate engagement letter specifying scope, timeline, and deliverables."
              />
              <InfoCard
                icon="payments"
                title="Payment Terms"
                description="Invoices are due upon receipt unless otherwise specified. Late payments may incur additional fees."
              />
              <InfoCard
                icon="receipt_long"
                title="Fee Adjustments"
                description="If the scope of work changes significantly, we reserve the right to adjust fees with prior written notice."
              />
              <InfoCard
                icon="cancel"
                title="Termination"
                description="Either party may terminate the engagement with 30 days' written notice, subject to payment for work completed."
              />
            </div>
          </Section>

          {/* Intellectual Property */}
          <Section title="Intellectual Property">
            <p>
              All content on our website — including text, graphics, logos, icons, images, and software — is the
              property of ProAccountant.tech or its content suppliers and is protected by applicable intellectual
              property laws.
            </p>
            <p>You may not:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Copy, reproduce, distribute, or create derivative works from our website content without written permission</li>
              <li>Use our branding, trademarks, or logos without express authorization</li>
              <li>Reverse engineer or attempt to extract source code from our website or tools</li>
            </ul>
            <p>
              Work product created specifically for you (e.g., financial reports, tax returns) becomes your property
              upon full payment. However, we retain the right to use anonymized and aggregated data for internal
              analytics and improvement of our Services.
            </p>
          </Section>

          {/* Confidentiality */}
          <Section title="Confidentiality">
            <p>
              We understand the sensitivity of your financial information. Both parties agree to maintain the
              confidentiality of all proprietary and sensitive information shared during the course of engagement.
            </p>
            <p>
              We will not disclose your confidential information to third parties except as required by law,
              regulation, or with your explicit consent. Our full data handling practices are detailed in our{' '}
              <Link to="/privacy-policy" className="text-accent-gold font-semibold hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </Section>

          {/* Disclaimers & Limitations */}
          <Section title="Disclaimers & Limitation of Liability">
            <Subsection title="Professional Advice Disclaimer">
              <p>
                Our Services are provided based on the information you supply and the applicable laws at the time
                of service. While we strive for accuracy and compliance, we do not guarantee specific financial
                outcomes, tax savings, or audit results.
              </p>
            </Subsection>
            <Subsection title="Website Disclaimer">
              <p>
                Our website and its content are provided on an "as is" and "as available" basis. We make no
                warranties, express or implied, regarding the accuracy, completeness, reliability, or suitability
                of the information presented.
              </p>
            </Subsection>
            <Subsection title="Limitation of Liability">
              <p>
                To the fullest extent permitted by law, ProAccountant.tech and its officers, employees, and agents
                shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                arising from your use of our website or Services. Our total liability for any claim related to
                our Services shall not exceed the total fees paid by you for the specific service giving rise to
                the claim.
              </p>
            </Subsection>
          </Section>

          {/* Indemnification */}
          <Section title="Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless ProAccountant.tech, its founder, employees, and
              agents from and against any claims, losses, damages, liabilities, and expenses (including reasonable
              legal fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Your breach of these Terms</li>
              <li>Your use of our Services</li>
              <li>Inaccurate, incomplete, or misleading information provided by you</li>
              <li>Your violation of any applicable law or regulation</li>
            </ul>
          </Section>

          {/* Third-Party Links */}
          <Section title="Third-Party Services & Links">
            <p>
              Our website may contain links to third-party websites, tools, or services (such as Cal.com for
              scheduling, QuickBooks, and Xero). These third-party services are governed by their own terms and
              privacy policies, and we are not responsible for their content, practices, or availability.
            </p>
            <p>
              Your interactions with third-party services are solely between you and the respective provider.
            </p>
          </Section>

          {/* Dispute Resolution */}
          <Section title="Dispute Resolution">
            <p>
              In the event of any dispute arising from or relating to these Terms or our Services, both parties
              agree to first attempt to resolve the matter through good-faith negotiation. If the dispute cannot
              be resolved informally within 30 days, the matter may be escalated as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li><strong>Mediation:</strong> Both parties agree to participate in non-binding mediation before pursuing legal action</li>
              <li><strong>Governing Law:</strong> These Terms are governed by and construed in accordance with applicable laws</li>
              <li><strong>Jurisdiction:</strong> Any legal proceedings shall be brought in the appropriate courts of the jurisdiction where ProAccountant.tech is registered</li>
            </ul>
          </Section>

          {/* Modifications */}
          <Section title="Changes to These Terms">
            <p>
              We reserve the right to update or modify these Terms at any time. Changes will be effective immediately
              upon posting to our website with a revised "Last Updated" date. Your continued use of our website or
              Services after any changes constitutes acceptance of the updated Terms.
            </p>
            <p>
              We encourage you to review these Terms periodically. For material changes, we may provide additional
              notice via email or a prominent website notification.
            </p>
          </Section>

          {/* Severability */}
          <Section title="Severability">
            <p>
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining
              provisions shall continue in full force and effect. The invalid provision shall be modified to the
              minimum extent necessary to make it valid and enforceable.
            </p>
          </Section>

          {/* Entire Agreement */}
          <Section title="Entire Agreement">
            <p>
              These Terms, together with our{' '}
              <Link to="/privacy-policy" className="text-accent-gold font-semibold hover:underline">
                Privacy Policy
              </Link>{' '}
              and any engagement letter or service agreement, constitute the entire agreement between you and
              ProAccountant.tech regarding your use of our website and Services, superseding any prior agreements
              or understandings.
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
                Questions About These Terms?
              </h2>
              <p className="text-slate-300 mb-6">
                If you have any questions or concerns about these Terms of Service, please contact us:
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

function InfoCard({ icon, title, description }) {
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
