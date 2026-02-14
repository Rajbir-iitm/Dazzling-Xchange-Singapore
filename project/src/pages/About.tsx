import React from 'react';
import { Shield, Zap, Users, Globe, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};

function About() {
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });

  const values = [
    { icon: Shield, title: 'Security & Compliance', desc: 'Licensed under PSO (PS20200465) with ONFIDO-powered KYC, OTP authentication, and full regulatory compliance to safeguard every transfer.' },
    { icon: Zap, title: 'Technology-Driven', desc: 'Real-time exchange rates, instant status tracking, downloadable receipts, and modern infrastructure that processes transfers in minutes — not days.' },
    { icon: Users, title: 'Customer-First Design', desc: 'Guided registration, intuitive payment flows, comprehensive receiver management, and 24/7 support that resolves issues within 24 hours.' },
    { icon: Globe, title: 'Global Connectivity', desc: 'Send money internationally in multiple currencies through Bank Transfer or FlexM Wallet with transparent fees and competitive exchange rates.' },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative pt-20 px-6 lg:px-16 overflow-visible pb-32">
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — Content */}
            <div className="pt-8 lg:pt-16">
              <motion.span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border border-primary/30 text-primary bg-primary/5 mb-8"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              >
                About Dazzling Xchange
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
              >
                <span className="text-white">Enabling people to move</span><br />
                <span className="text-white">money </span>
                <span className="gradient-text">across borders.</span>
              </motion.h1>

              <motion.p
                className="text-neutral-400 text-lg lg:text-xl mt-8 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              >
                Dazzling Xchange is a licensed digital remittance platform based in Singapore. We make it simple for individuals and businesses to register, verify, and send money internationally — through our secure Customer Portal or mobile app.
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
                      <div className="absolute inset-0 bg-primary/[0.06] rounded-full scale-150 animate-float" />
                      <div className="absolute inset-0 bg-primary/[0.04] rounded-2xl rotate-12 translate-x-3 -translate-y-2" />
                      <div className="absolute inset-0 bg-primary/[0.04] rounded-2xl -rotate-12 -translate-x-3 translate-y-2" />
                      <div className="relative bg-neutral-900/80 rounded-2xl p-6 flex items-center justify-center h-full border border-neutral-800">
                        <Globe className="w-16 h-16 text-primary/30 group-hover:text-primary/50 transition-colors duration-500" strokeWidth={1.5} />
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

      {/* ─── MISSION ─── */}
      <section className="pt-8 pb-28 px-6 lg:px-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              className="space-y-6"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <motion.span variants={fadeUp} custom={0} className="text-primary text-sm font-semibold tracking-widest uppercase">
                Our Mission
              </motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-bold text-white">
                Making international transfers <span className="gradient-text">accessible to all.</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-neutral-400 text-lg leading-relaxed">
                We believe sending money across borders should be as simple as sending a message. Our platform handles the complexity — OTP-secured registration, ONFIDO identity verification, wallet activation, receiver management, and end-to-end transaction tracking — so you can focus on what matters most.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-neutral-400 text-lg leading-relaxed">
                Whether you're an individual sending funds to family or a business managing international supplier payments, we provide the tools, security, and transparency to make every transfer <span className="text-primary font-medium">effortless.</span>
              </motion.p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { value: '130+', label: 'Countries' },
                { value: '29+', label: 'Currencies' },
                { value: '24/7', label: 'Support' },
                { value: '99.9%', label: 'Uptime' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp} custom={i}
                  className="glass-card glass-card-hover rounded-2xl p-6 text-center transition-all duration-300"
                >
                  <p className="text-2xl lg:text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-neutral-500 text-sm mt-1 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── METRICS ─── */}
      <section className="py-20 relative" ref={statsRef}>
        <div className="divider-gradient mb-16" />
        <div className="max-w-6xl mx-auto px-6">
          <motion.span
            className="text-primary text-sm font-semibold tracking-widest uppercase"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Our Impact
          </motion.span>
          <motion.h2
            className="text-3xl lg:text-5xl font-bold text-white mt-4 mb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            Built for reliability. <span className="gradient-text">Designed for scale.</span>
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 204, prefix: '£', suffix: 'M', label: 'Revenue in FY2023' },
              { value: 1000000, suffix: '+', label: 'International Transfers' },
              { value: 20000, suffix: '+', label: 'Verified Customers' },
              { value: 1600, suffix: '+', label: 'Team Members Globally' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="py-4"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              >
                <p className="text-3xl lg:text-5xl font-bold text-white">
                  {statsInView ? (
                    <>{stat.prefix}<CountUp end={stat.value} duration={2.5} separator="," delay={i * 0.2} />{stat.suffix}</>
                  ) : `${stat.prefix || ''}0${stat.suffix}`}
                </p>
                <p className="text-neutral-500 text-sm mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="divider-gradient mt-16" />
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-28 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <motion.span variants={fadeUp} custom={0} className="text-primary text-sm font-semibold tracking-widest uppercase">
              Our Values
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-bold text-white mt-4">
              What we <span className="gradient-text">stand for.</span>
            </motion.h2>
          </motion.div>

          {/* Bento-style values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((val, i) => {
              const Icon = val.icon;
              const isLarge = i === 0 || i === 3;
              return (
                <motion.div
                  key={val.title}
                  className={`glass-card glass-card-hover rounded-3xl p-8 lg:p-10 transition-all duration-300 ${isLarge ? 'md:col-span-2 lg:col-span-1' : ''}`}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                >
                  <Icon className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{val.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
