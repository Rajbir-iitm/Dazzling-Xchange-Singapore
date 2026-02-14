import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, ScanFace, Wallet, Send, BarChart3, Users, HelpCircle, ChevronDown, MonitorPlay } from 'lucide-react';
import Footer from '../components/Footer';
import { useSalesModalStore } from '../stores/salesModalStore';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};

const steps = [
  {
    id: 'registration',
    icon: Smartphone,
    num: '01',
    title: 'Registration',
    subtitle: 'Create your account in minutes',
    description: 'Choose between Individual or Business account type. Enter your phone number to receive an OTP for verification. Fill in your profile details, create a secure password, and accept the Terms & Conditions. Your account is ready — log in with your phone number or email.',
    highlights: ['Individual & Business accounts', 'Phone-based OTP verification', 'Duplicate email/phone prevention', 'Password strength enforcement', 'Confirmation email sent on sign-up'],
    screenshotLabels: ['Registration'],
  },
  {
    id: 'kyc',
    icon: ScanFace,
    num: '02',
    title: 'KYC Verification',
    subtitle: 'Identity verification powered by ONFIDO',
    description: 'Initiate KYC from your homepage or profile. Upload your identity documents (Passport, ID — JPEG, PNG, or PDF up to 2MB). ONFIDO launches in a new tab for document verification and facial recognition. Use the QR code for mobile verification. Your KYC status updates immediately upon completion.',
    highlights: ['ONFIDO document verification', 'Facial recognition technology', 'QR code for mobile verification', 'Supports JPEG, PNG, PDF (2MB max)', 'PEP declaration included'],
    screenshotLabels: ['KYC Verification'],
  },
  {
    id: 'wallet',
    icon: Wallet,
    num: '03',
    title: 'Wallet Activation',
    subtitle: 'Unlock your FlexM digital wallet',
    description: 'After KYC verification, click "Unlock Wallet" on your dashboard. Verify with a one-time OTP and your wallet activates instantly. Top up your wallet through PayNow — scan the QR code, make payment, and paste your reference number. Funds are credited within 30 minutes.',
    highlights: ['Wallet unlocks only after KYC', 'OTP-secured activation', 'PayNow QR-based top-up', 'Funds credited within 30 minutes', 'Real-time balance display'],
    screenshotLabels: ['Wallet Activation'],
  },
  {
    id: 'send-money',
    icon: Send,
    num: '04',
    title: 'Send Money',
    subtitle: 'Two flexible payment channels',
    description: 'Navigate to "Send Money" and choose your payment method. Bank Transfer: review recipient details, make your bank transfer, and receive confirmation within 15 minutes. FlexM Wallet: pay directly from your wallet balance for instant processing. Exchange rates and fees update in real time as you enter your amount.',
    highlights: ['Bank Transfer — confirmed in ~15 min', 'FlexM Wallet — instant processing', 'Real-time exchange rate display', 'Live fee calculation', 'Confirmation emails at every step'],
    screenshotLabels: ['Send Money'],
  },
  {
    id: 'receivers',
    icon: Users,
    num: '05',
    title: 'Receiver Management',
    subtitle: 'Organize your international beneficiaries',
    description: 'Add receivers directly from the Send Money flow or from the dedicated Receivers page. Save their full name, country, currency, and account details. Edit, delete, or search your receiver list anytime. Choose from your saved receivers for quick future transfers.',
    highlights: ['Add from Send Money or Receivers page', 'Full name, country, currency, account details', 'Edit & delete functionality', 'Search and filter receivers', 'Quick selection for repeat transfers'],
    screenshotLabels: ['Receiver Management'],
  },
  {
    id: 'transactions',
    icon: BarChart3,
    num: '06',
    title: 'Transaction Tracking',
    subtitle: 'Complete visibility over every transfer',
    description: 'Every transaction generates a unique reference ID. Track status in real time: Pending → Processing → Completed (or Failed/Cancelled). Access your full history with pagination, column sorting, date range filters, and reference number search. Export records and download receipts anytime.',
    highlights: ['Unique reference ID per transaction', 'Real-time status: Pending → Completed', 'Sort, filter, and date range search', 'Export & download receipts', '"Make Another Payment" quick action'],
    screenshotLabels: ['Transaction Tracking'],
  },
  {
    id: 'support',
    icon: HelpCircle,
    num: '07',
    title: 'FAQ & Support',
    subtitle: 'Help is always a click away',
    description: 'Access a comprehensive FAQ section with search functionality and expandable answers. For anything else, our dedicated customer support team is available 24/7 — any issue you encounter is resolved within 24 hours.',
    highlights: ['Searchable FAQ section', 'Expandable answer sections', '24/7 customer support', 'Issues resolved within 24 hours'],
    screenshotLabels: ['FAQ & Support'],
  },
];

function PortalWalkthrough() {
  const openSalesModal = useSalesModalStore((state) => state.openModal);

  return (
    <div className="bg-black min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative pt-20 px-6 lg:px-16 overflow-visible pb-32">
        <div className="absolute top-0 -right-40 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — Content */}
            <div className="pt-8 lg:pt-16">
              <motion.span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border border-primary/30 text-primary bg-primary/5 mb-8"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              >
                Portal & App Walkthrough
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
              >
                <span className="text-white">Every screen.</span><br />
                <span className="text-white">Every step.</span><br />
                <span className="gradient-text">No guesswork.</span>
              </motion.h1>

              <motion.p
                className="text-neutral-400 text-lg lg:text-xl mt-8 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
              >
                A complete visual guide to the DX Customer Portal and app — from your first sign-up to your first international transfer and beyond.
              </motion.p>

              <motion.div
                className="mt-10 flex"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              >
                <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
              </motion.div>
            </div>

            {/* Right — Visual card that overlaps into next section */}
            <motion.div
              className="relative lg:translate-y-8"
              initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/[0.03] rounded-[2rem] blur-3xl group-hover:bg-primary/[0.06] transition-opacity duration-700" />
                <div className="relative glass-card rounded-3xl overflow-hidden min-h-[460px] flex items-center justify-center">
                  <div className="text-center space-y-4 p-12">
                    <div className="relative mx-auto w-36 h-36">
                      <div className="absolute inset-0 bg-primary/[0.06] rounded-2xl rotate-6" />
                      <div className="absolute inset-0 bg-primary/[0.06] rounded-2xl -rotate-6" />
                      <div className="relative bg-neutral-900/80 rounded-2xl p-6 flex items-center justify-center h-full border border-neutral-800">
                        <MonitorPlay className="w-14 h-14 text-primary/30 group-hover:text-primary/50 transition-colors duration-500" strokeWidth={1.5} />
                      </div>
                    </div>
                    <p className="text-neutral-700 text-sm font-medium">Image Placeholder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* ─── STEPS ─── */}
      <section className="pb-20">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isEven = idx % 2 === 0;

          return (
            <div key={step.id} className="relative">
              {/* Connector line between steps */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 bottom-0 w-px h-20 bg-gradient-to-b from-primary/20 to-transparent translate-y-10" />
              )}

              <div className={`py-20 lg:py-28 px-6 lg:px-16 ${idx % 2 === 0 ? '' : 'bg-neutral-950/50'}`}>
                <div className="max-w-6xl mx-auto">
                  {/* Step header */}
                  <motion.div
                    className="mb-12"
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                  >
                    <motion.div variants={fadeUp} custom={0} className="flex items-center gap-4 mb-4">
                      <span className="text-6xl lg:text-7xl font-bold text-white">{step.num}</span>
                      <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">{step.title}</h2>
                        <p className="text-primary text-base font-medium mt-1">{step.subtitle}</p>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Content: description + screenshots */}
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16`}>
                    {/* Left: text & highlights */}
                    <motion.div
                      className="flex-1 space-y-6"
                      initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                      <motion.p variants={fadeUp} custom={0} className="text-neutral-300 text-lg leading-relaxed">
                        {step.description}
                      </motion.p>

                      <motion.div variants={fadeUp} custom={1} className="space-y-3 pt-2">
                        {step.highlights.map((h, hi) => (
                          <div key={hi} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span className="text-neutral-400 text-base">{h}</span>
                          </div>
                        ))}
                      </motion.div>
                    </motion.div>

                    {/* Right: single screenshot placeholder — same dimension as page hero cards (min-h-[460px]) */}
                    <motion.div
                      className="flex-1 min-w-0"
                      initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                      {step.screenshotLabels.map((label, si) => (
                        <motion.div
                          key={si}
                          variants={fadeUp}
                          custom={si + 2}
                          className="w-full glass-card rounded-3xl overflow-hidden group hover:border-primary/20 transition-all duration-300 min-h-[460px] flex flex-col"
                        >
                          <div className="flex-1 min-h-[460px] bg-neutral-900/60 flex items-center justify-center relative">
                            <div className="text-center p-8">
                              <Icon className="w-16 h-16 text-neutral-600 mx-auto mb-4 group-hover:text-primary/40 transition-colors" strokeWidth={1} />
                              <p className="text-neutral-500 text-sm font-medium">Screenshot Placeholder</p>
                            </div>
                            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-neutral-700/50 rounded-tl" />
                            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-neutral-700/50 rounded-tr" />
                            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-neutral-700/50 rounded-bl" />
                            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-neutral-700/50 rounded-br" />
                          </div>
                          <div className="px-4 py-3 border-t border-neutral-800/50">
                            <p className="text-neutral-500 text-sm font-medium">{label}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-32 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

        <motion.div
          className="container mx-auto relative z-10 text-center"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto">
            Ready to<br /><span className="gradient-text">get started?</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-neutral-400 text-lg mt-6 max-w-xl mx-auto">
            Create your account on the DX Customer Portal or app and experience every step you just explored — live.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-4 mt-10">
            <button
              onClick={() => window.open('https://customer.dazzlingxchange.com/', '_blank')}
              className="group flex items-center gap-2 px-10 py-5 bg-primary text-neutral-950 rounded-full font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,208,132,0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              Open Customer Portal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={openSalesModal}
              className="px-10 py-5 border border-neutral-700 text-white rounded-full font-medium text-lg hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default PortalWalkthrough;
