import React, { useState, Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Users, Eye, Send, Wallet, UserPlus, ScanFace, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';
import { useSalesModalStore } from '../stores/salesModalStore';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CurrencyConverter = lazy(() => import('../components/CurrencyConverter'));

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};

function Home() {
  const { t } = useTranslation();
  const openSalesModal = useSalesModalStore((state) => state.openModal);
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });

  const marqueeItems = [
    'OTP Registration', 'ONFIDO KYC', 'Wallet Activation', 'Bank Transfer',
    'FlexM Wallet', 'PayNow Top-Up', 'Receiver Management', 'Transaction Tracking',
    'Multi-Currency', 'Real-Time Rates', 'Receipt Download', '24/7 Support',
  ];

  const steps = [
    { icon: UserPlus, num: '01', title: 'Register in Minutes', desc: 'Sign up as an Individual or Business with your phone number. Verify your identity via a secure one-time password sent directly to you.' },
    { icon: ScanFace, num: '02', title: 'Verify with ONFIDO', desc: 'Complete your KYC through ONFIDO — upload your documents, complete facial recognition, and get verified seamlessly.' },
    { icon: Wallet, num: '03', title: 'Unlock Your Wallet', desc: 'Once verified, activate your FlexM digital wallet with a single OTP. Top up via PayNow and you\'re ready to transact.' },
    { icon: Send, num: '04', title: 'Send Money Globally', desc: 'Choose Bank Transfer or FlexM Wallet, select a receiver, review live rates and fees, and confirm your international transfer.' },
  ];

  const testimonials = [
    { name: 'Sarah M.', text: 'Signed up and completed KYC in under ten minutes. My wallet was active the same day and I sent my first transfer that evening.', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'John D.', text: 'The Bank Transfer option is incredibly smooth. I reviewed the rates, confirmed, and received an email confirmation within 15 minutes.', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Priya S.', text: 'Managing my receivers is so easy — I saved all my family members and can send money to anyone in just a few clicks.', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'Carlos R.', text: 'Transparent fees and real-time exchange rates. I always know exactly what I\'m paying before I confirm. No surprises.', image: 'https://randomuser.me/api/portraits/men/65.jpg' },
    { name: 'Emily T.', text: 'The FlexM Wallet top-up through PayNow is brilliant. Funds were in my wallet within 30 minutes and I could send money right away.', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
  ];

  const allTestimonials = [
    ...testimonials.map((t, i) => ({ ...t, id: `a-${i}` })),
    ...testimonials.map((t, i) => ({ ...t, id: `b-${i}` })),
    ...testimonials.map((t, i) => ({ ...t, id: `c-${i}` })),
    ...testimonials.map((t, i) => ({ ...t, id: `d-${i}` })),
    ...testimonials.map((t, i) => ({ ...t, id: `e-${i}` })),
    ...testimonials.map((t, i) => ({ ...t, id: `f-${i}` })),
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />

        <div className="container mx-auto px-6 lg:px-16 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border border-primary/30 text-primary bg-primary/5 mb-6">
                  Licensed & Regulated in Singapore
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
                  <span className="text-white">Send Money</span><br />
                  <span className="gradient-text">Across Borders,</span><br />
                  <span className="text-white">Effortlessly.</span>
                </h1>
              </motion.div>

              <motion.p
                className="text-neutral-400 text-lg lg:text-xl max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
              >
                Register, verify your identity, and start sending money internationally — all from one secure portal. Bank Transfer or FlexM Wallet. You choose.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
              >
                <button
                  onClick={() => window.open('https://customer.dazzlingxchange.com/', '_blank')}
                  className="group flex items-center gap-2 px-8 py-4 bg-primary text-neutral-950 rounded-full font-semibold text-base hover:shadow-[0_0_30px_rgba(0,208,132,0.4)] transition-all duration-300 hover:scale-[1.02]"
                >
                  {t('hero.login')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={openSalesModal}
                  className="px-8 py-4 border border-neutral-700 text-white rounded-full font-medium text-base hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  {t('hero.sales')}
                </button>
              </motion.div>
            </div>

            {/* Right — Currency Converter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Suspense fallback={
                <div className="w-full h-80 rounded-3xl bg-neutral-900 border border-neutral-800 animate-pulse flex items-center justify-center">
                  <span className="text-primary text-3xl font-bold">$€¥£</span>
                </div>
              }>
                <CurrencyConverter />
              </Suspense>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ─── MARQUEE TICKER ─── */}
      <section className="py-6 border-y border-neutral-800/50 overflow-hidden">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex-shrink-0 flex items-center gap-3 text-neutral-500 text-sm font-medium whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-28 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} custom={0} className="text-primary text-sm font-semibold tracking-widest uppercase">
              How It Works
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
              Four steps to your<br /><span className="gradient-text">first international transfer.</span>
            </motion.h2>
          </motion.div>

          <div className="space-y-24 lg:space-y-32">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
                >
                  {/* Text side */}
                  <motion.div className="flex-1 space-y-5" variants={fadeUp} custom={0}>
                    <span className="text-7xl lg:text-8xl font-bold text-neutral-800/60">{step.num}</span>
                    <h3 className="text-2xl lg:text-4xl font-bold text-white -mt-4">{step.title}</h3>
                    <p className="text-neutral-400 text-lg leading-relaxed max-w-md">{step.desc}</p>
                  </motion.div>

                  {/* Visual side */}
                  <motion.div
                    className="flex-1 w-full"
                    variants={fadeUp} custom={2}
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
                      <div className="relative glass-card rounded-3xl p-12 flex items-center justify-center min-h-[280px] group-hover:border-primary/20 transition-all duration-300">
                        <Icon className="w-20 h-20 text-primary/40 group-hover:text-primary/70 transition-colors duration-300" strokeWidth={1} />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── BENTO FEATURES ─── */}
      <section className="py-28 px-6 lg:px-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} custom={0} className="text-primary text-sm font-semibold tracking-widest uppercase">
              Why Dazzling Xchange
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold text-white mt-4">
              Built for trust.<br /><span className="gradient-text">Designed for speed.</span>
            </motion.h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large card — spans 2 cols */}
            <motion.div
              className="md:col-span-2 glass-card glass-card-hover rounded-3xl p-8 lg:p-10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              <Shield className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-white mb-3">Licensed & ONFIDO-Verified Security</h3>
              <p className="text-neutral-400 text-base leading-relaxed max-w-lg">
                Licensed under PSO (PS20200465) by the Monetary Authority of Singapore. Every account is verified through ONFIDO's document and facial recognition technology. OTP authentication, password enforcement, and duplicate prevention safeguard your identity.
              </p>
            </motion.div>

            {/* Tall card */}
            <motion.div
              className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 min-h-[260px]"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
            >
              <Zap className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Instant Rates & Fees</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Exchange rates update live as you type. Fees are displayed upfront — no surprises, no hidden charges.
                </p>
              </div>
            </motion.div>

            {/* Small card */}
            <motion.div
              className="glass-card glass-card-hover rounded-3xl p-8 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}
            >
              <Eye className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-white mb-2">Full Transaction Visibility</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Track every transfer — Pending, Processing, Completed. Sort, filter, export, and download receipts anytime.
              </p>
            </motion.div>

            {/* Small card */}
            <motion.div
              className="glass-card glass-card-hover rounded-3xl p-8 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
            >
              <Users className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-white mb-2">24/7 Dedicated Support</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Our support team is available around the clock. Every issue is acknowledged and resolved within 24 hours.
              </p>
            </motion.div>

            {/* Wide card — spans 1 col but impactful */}
            <motion.div
              className="glass-card glass-card-hover rounded-3xl p-8 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }}
            >
              <Wallet className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-white mb-2">Dual Payment Channels</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Bank Transfer — confirmed within 15 minutes. FlexM Wallet — instant processing. Top up via PayNow QR.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-20 relative overflow-hidden" ref={statsRef}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="divider-gradient mb-16" />

        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center relative z-10">
          {[
            { value: 130, prefix: '$', suffix: 'B+', label: 'Cross-Border Transfers' },
            { value: 1, suffix: 'M+', label: 'Registered Users' },
            { value: 130, suffix: '+', label: 'Countries Supported' },
            { value: 24, suffix: '/7', label: 'Customer Support' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }} viewport={{ once: true }}
            >
              <p className="text-4xl lg:text-5xl font-bold gradient-text">
                {statsInView ? (
                  <>{stat.prefix}<CountUp end={stat.value} duration={2} delay={i * 0.2} />{stat.suffix}</>
                ) : (
                  `${stat.prefix || ''}0${stat.suffix}`
                )}
              </p>
              <p className="text-neutral-500 text-sm mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="divider-gradient mt-16" />
      </section>

      {/* ─── PORTAL CTA ─── */}
      <section className="py-28 px-6 lg:px-16">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            See the portal<br /><span className="gradient-text">in action.</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-neutral-400 text-lg mt-6 max-w-2xl mx-auto">
            Walk through every screen — from registration and KYC verification to sending your first transfer. No guesswork.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="mt-10">
            <Link
              to="/walkthrough"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 border border-neutral-800 text-white rounded-full font-semibold text-lg hover:border-primary/40 hover:shadow-[0_0_40px_rgba(0,208,132,0.15)] transition-all duration-300"
            >
              Explore the Walkthrough
              <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 overflow-hidden">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-white text-center mb-16 px-6"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          Trusted by customers <span className="gradient-text">worldwide.</span>
        </motion.h2>

        <div className="testimonial-carousel-wrapper">
          <div className="testimonial-scroll-container">
            <div className="testimonial-scroll-track">
              {allTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <img src={testimonial.image} alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mb-5 border-2 border-primary/30 mx-auto" />
                  <p className="text-neutral-300 text-base leading-relaxed mb-5 text-center italic">
                    "{testimonial.text}"
                  </p>
                  <h4 className="text-white text-sm font-semibold text-center">{testimonial.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        <motion.div
          className="max-w-3xl mx-auto text-center relative z-10"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Ready to send your<br /><span className="gradient-text">first transfer?</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-neutral-400 text-lg mt-6">
            Join thousands of customers who trust Dazzling Xchange for their international payments.
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
    </>
  );
}

export default Home;
