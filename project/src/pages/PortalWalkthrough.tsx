import React from 'react';
import { useTranslation } from 'react-i18next';
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

const stepIcons = [Smartphone, ScanFace, Wallet, Send, Users, BarChart3, HelpCircle];
const stepIds = ['registration', 'kyc', 'wallet', 'send-money', 'receivers', 'transactions', 'support'];

function PortalWalkthrough() {
  const { t } = useTranslation();
  const openSalesModal = useSalesModalStore((state) => state.openModal);

  const steps = stepIds.map((id, i) => ({
    id,
    icon: stepIcons[i],
    num: String(i + 1).padStart(2, '0'),
    title: t(`walkthrough.steps.${i}.title`),
    subtitle: t(`walkthrough.steps.${i}.subtitle`),
    description: t(`walkthrough.steps.${i}.description`),
    highlights: t(`walkthrough.steps.${i}.highlights`).split(','),
    screenshotLabel: t(`walkthrough.steps.${i}.screenshot`),
  }));

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
                {t('walkthrough.hero.badge')}
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
              >
                <span className="text-white">{t('walkthrough.hero.line1')}</span><br />
                <span className="text-white">{t('walkthrough.hero.line2')}</span><br />
                <span className="gradient-text">{t('walkthrough.hero.line2Highlight')}</span>
              </motion.h1>

              <motion.p
                className="text-neutral-400 text-lg lg:text-xl mt-8 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
              >
                {t('walkthrough.hero.description')}
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
                    <p className="text-neutral-700 text-sm font-medium">{t('walkthrough.hero.placeholder')}</p>
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
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 bottom-0 w-px h-20 bg-gradient-to-b from-primary/20 to-transparent translate-y-10" />
              )}

              <div className={`py-20 lg:py-28 px-6 lg:px-16 ${idx % 2 === 0 ? '' : 'bg-neutral-950/50'}`}>
                <div className="max-w-6xl mx-auto">
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

                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16`}>
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

                    <motion.div
                      className="flex-1 min-w-0"
                      initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                      <motion.div
                        variants={fadeUp}
                        custom={2}
                        className="w-full glass-card rounded-3xl overflow-hidden group hover:border-primary/20 transition-all duration-300 min-h-[460px] flex flex-col"
                      >
                        <div className="flex-1 min-h-[460px] bg-neutral-900/60 flex items-center justify-center relative">
                          <div className="text-center p-8">
                            <Icon className="w-16 h-16 text-neutral-600 mx-auto mb-4 group-hover:text-primary/40 transition-colors" strokeWidth={1} />
                            <p className="text-neutral-500 text-sm font-medium">{t('walkthrough.screenshot')}</p>
                          </div>
                          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-neutral-700/50 rounded-tl" />
                          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-neutral-700/50 rounded-tr" />
                          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-neutral-700/50 rounded-bl" />
                          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-neutral-700/50 rounded-br" />
                        </div>
                        <div className="px-4 py-3 border-t border-neutral-800/50">
                          <p className="text-neutral-500 text-sm font-medium">{step.screenshotLabel}</p>
                        </div>
                      </motion.div>
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
            {t('walkthrough.cta.title')}<br /><span className="gradient-text">{t('walkthrough.cta.titleHighlight')}</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-neutral-400 text-lg mt-6 max-w-xl mx-auto">
            {t('walkthrough.cta.description')}
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-4 mt-10">
            <button
              onClick={() => window.open('https://customer.dazzlingxchange.com/', '_blank')}
              className="group flex items-center gap-2 px-10 py-5 bg-primary text-neutral-950 rounded-full font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,208,132,0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              {t('walkthrough.cta.portal')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={openSalesModal}
              className="px-10 py-5 border border-neutral-700 text-white rounded-full font-medium text-lg hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {t('walkthrough.cta.contact')}
            </button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default PortalWalkthrough;
