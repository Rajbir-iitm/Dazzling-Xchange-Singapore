import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Smartphone, ScanFace, Wallet, Send, BarChart3, Users, Building, CreditCard, ChevronDown } from 'lucide-react';
import Footer from '../components/Footer';
import { useSalesModalStore } from '../stores/salesModalStore';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};

function Services() {
  const openSalesModal = useSalesModalStore((state) => state.openModal);
  const [activePayment, setActivePayment] = useState<'bank' | 'wallet'>('bank');

  const paymentMethods = {
    bank: {
      title: 'Bank Transfer',
      icon: Building,
      features: [
        'Review recipient banking details on screen',
        'Make a wire transfer to the provided account',
        'Payment confirmed within 15 minutes',
        'Confirmation email sent by DX upon receipt',
        'Transaction ID generated for tracking',
      ],
      highlight: '~15 min confirmation',
    },
    wallet: {
      title: 'FlexM Wallet',
      icon: CreditCard,
      features: [
        'Pay directly from your wallet balance',
        'Top up via PayNow QR — credited in 30 min',
        'Instant deduction and processing',
        'Insufficient balance triggers top-up prompt',
        'Real-time balance updates after every payment',
      ],
      highlight: 'Instant processing',
    },
  };

  const active = paymentMethods[activePayment];
  const ActiveIcon = active.icon;

  return (
    <div className="bg-black min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative pt-20 px-6 lg:px-16 overflow-visible pb-32">
        <div className="absolute top-10 -right-40 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — Content */}
            <div className="pt-8 lg:pt-16">
              <motion.span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border border-primary/30 text-primary bg-primary/5 mb-8"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              >
                Our Services
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
              >
                <span className="text-white">One portal. One app.</span><br />
                <span className="gradient-text">Complete control.</span>
              </motion.h1>

              <motion.p
                className="text-neutral-400 text-lg lg:text-xl mt-8 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              >
                From registration and identity verification to international transfers and transaction management — everything you need, designed for individuals and businesses.
              </motion.p>

              <motion.div
                className="mt-10 flex"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              >
                <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
              </motion.div>
            </div>

            {/* Right — Visual card that overlaps into next section */}
            <motion.div
              className="relative lg:translate-y-8"
              initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/[0.03] rounded-[2rem] blur-3xl group-hover:bg-primary/[0.06] transition-opacity duration-700" />
                <div className="relative glass-card rounded-3xl overflow-hidden min-h-[460px] flex items-center justify-center">
                  <div className="text-center space-y-6 p-12">
                    <div className="relative mx-auto w-40 h-40">
                      <div className="absolute inset-0 bg-primary/[0.06] rounded-full scale-150 animate-float-delayed" />
                      <div className="absolute inset-2 bg-primary/[0.05] rounded-2xl rotate-6" />
                      <div className="absolute inset-2 bg-primary/[0.05] rounded-2xl -rotate-6" />
                      <div className="relative bg-neutral-900/80 rounded-2xl p-6 flex items-center justify-center h-full border border-neutral-800">
                        <Building className="w-16 h-16 text-primary/30 group-hover:text-primary/50 transition-colors duration-500" strokeWidth={1.5} />
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

      {/* ─── THE JOURNEY (Horizontal Steps) ─── */}
      <section className="py-20 px-6 lg:px-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div className="mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} custom={0} className="text-primary text-sm font-semibold tracking-widest uppercase">
              Your Journey
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-bold text-white mt-4">
              Sign up to send — <span className="gradient-text">in four steps.</span>
            </motion.h2>
          </motion.div>

          {/* Horizontal scrollable steps on mobile, grid on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Smartphone, num: '01', title: 'Register', desc: 'Sign up with your phone number. Verify via OTP. Create your secure account.' },
              { icon: ScanFace, num: '02', title: 'Verify Identity', desc: 'Complete KYC through ONFIDO — document upload and facial recognition.' },
              { icon: Wallet, num: '03', title: 'Activate Wallet', desc: 'Unlock your FlexM wallet with OTP. Top up through PayNow.' },
              { icon: Send, num: '04', title: 'Send Money', desc: 'Choose Bank Transfer or Wallet. Review rates. Confirm and track.' },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300 relative group"
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                >
                  <span className="text-5xl font-bold text-neutral-800/50 absolute top-4 right-5">{step.num}</span>
                  <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PAYMENT METHODS (Tabs) ─── */}
      <section className="py-28 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} custom={0} className="text-primary text-sm font-semibold tracking-widest uppercase">
              Payment Channels
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-bold text-white mt-4">
              Two ways to send. <span className="gradient-text">Your choice.</span>
            </motion.h2>
          </motion.div>

          {/* Tab switcher */}
          <div className="flex gap-2 mb-10">
            {(['bank', 'wallet'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActivePayment(key)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activePayment === key
                    ? 'bg-primary text-neutral-950'
                    : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-neutral-700 hover:text-white'
                }`}
              >
                {paymentMethods[key].title}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePayment}
              className="glass-card rounded-3xl p-8 lg:p-12"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <ActiveIcon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{active.title}</h3>
                      <span className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mt-1">
                        {active.highlight}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {active.features.map((f, fi) => (
                      <div key={fi} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-neutral-300 text-base">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual placeholder */}
                <div className="flex-1 w-full">
                  <div className="glass-card rounded-2xl p-8 flex items-center justify-center min-h-[260px]">
                    <div className="text-center">
                      <ActiveIcon className="w-16 h-16 text-neutral-700 mx-auto mb-3" strokeWidth={1} />
                      <p className="text-neutral-600 text-sm">Payment flow preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── MANAGEMENT FEATURES (Alternating) ─── */}
      <section className="py-28 px-6 lg:px-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} custom={0} className="text-primary text-sm font-semibold tracking-widest uppercase">
                Portal & App Capabilities
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-bold text-white mt-4">
              Manage, monitor, <span className="gradient-text">stay in control.</span>
            </motion.h2>
          </motion.div>

          <div className="space-y-28">
            {/* Receiver Management */}
            <motion.div
              className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <motion.div className="flex-1 space-y-5" variants={fadeUp} custom={0}>
                <Users className="w-10 h-10 text-primary" strokeWidth={1.5} />
                <h3 className="text-2xl lg:text-4xl font-bold text-white">Receiver Directory</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  Add receivers from the Send Money flow or the dedicated Receivers page. Store their full name, country, currency, and bank account details. Edit, delete, and search your entire directory — choose from saved receivers for instant repeat transfers.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {['Add & Edit', 'Search & Filter', 'Quick Select', 'Multi-Country'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-900 text-neutral-400 border border-neutral-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
              <motion.div className="flex-1 w-full" variants={fadeUp} custom={2}>
                <div className="glass-card rounded-3xl p-12 flex items-center justify-center min-h-[280px] group hover:border-primary/20 transition-all duration-300">
                  <Users className="w-20 h-20 text-primary/30 group-hover:text-primary/60 transition-colors" strokeWidth={1} />
                </div>
              </motion.div>
            </motion.div>

            {/* Transaction Tracking */}
            <motion.div
              className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <motion.div className="flex-1 space-y-5" variants={fadeUp} custom={0}>
                <BarChart3 className="w-10 h-10 text-primary" strokeWidth={1.5} />
                <h3 className="text-2xl lg:text-4xl font-bold text-white">Transaction Tracking</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  Every transaction generates a unique reference ID. Track status in real time — Pending, Processing, Completed, or Failed. Access your full history with pagination, column sorting, date range filters, and reference number search. Export records and download receipts for every transfer.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {['Real-Time Status', 'Sort & Filter', 'Export Records', 'Download Receipts'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-900 text-neutral-400 border border-neutral-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
              <motion.div className="flex-1 w-full" variants={fadeUp} custom={2}>
                <div className="glass-card rounded-3xl p-12 flex items-center justify-center min-h-[280px] group hover:border-primary/20 transition-all duration-300">
                  <BarChart3 className="w-20 h-20 text-primary/30 group-hover:text-primary/60 transition-colors" strokeWidth={1} />
                </div>
              </motion.div>
            </motion.div>

            {/* Wallet Management */}
            <motion.div
              className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <motion.div className="flex-1 space-y-5" variants={fadeUp} custom={0}>
                <Wallet className="w-10 h-10 text-primary" strokeWidth={1.5} />
                <h3 className="text-2xl lg:text-4xl font-bold text-white">Wallet & Balance</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  Activated after KYC verification, your FlexM digital wallet shows your real-time balance and transaction history. Top up via PayNow QR — scan, pay, submit your reference, and your funds are credited within 30 minutes. Insufficient balance? The portal or app automatically prompts you to top up.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {['PayNow Top-Up', 'Real-Time Balance', '30-Min Credit', 'Auto Prompts'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-900 text-neutral-400 border border-neutral-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
              <motion.div className="flex-1 w-full" variants={fadeUp} custom={2}>
                <div className="glass-card rounded-3xl p-12 flex items-center justify-center min-h-[280px] group hover:border-primary/20 transition-all duration-300">
                  <Wallet className="w-20 h-20 text-primary/30 group-hover:text-primary/60 transition-colors" strokeWidth={1} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

        <motion.div
          className="container mx-auto relative z-10"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">
            Experience it <span className="gradient-text">yourself.</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-neutral-400 text-lg mt-6 max-w-2xl">
            Create your account and start sending money internationally in minutes.
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

export default Services;
