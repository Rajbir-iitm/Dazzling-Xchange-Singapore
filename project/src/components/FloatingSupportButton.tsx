import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Headset } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getCustomerPortalUrl } from '../config/customerPortal';

/**
 * Floating "Support" button, fixed to the bottom-right of the landing page.
 *
 * - Stays put on scroll (mobile + desktop), matches the dark/green theme.
 * - Sits at z-40 so modals (SalesModal, z-40/z-50 overlay) layer above it.
 * - Fades out near the very bottom of the page so it never overlaps the footer.
 * - Opens the ResolveDesk customer portal in the SAME tab.
 */
const FOOTER_FADE_THRESHOLD = 140; // px from page bottom where the button fades

const FloatingSupportButton = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [nearBottom, setNearBottom] = useState(false);

  const portalUrl = getCustomerPortalUrl();

  useEffect(() => {
    const handleScroll = () => {
      // This app sets `html, body { height: 100% }`, which makes a single
      // element's scrollHeight unreliable (the scroller may be html OR body).
      // Take the true content height as the max across sources, and read the
      // scroll offset from the window directly.
      const doc = document.documentElement;
      const body = document.body;
      const scrollTop = window.scrollY || doc.scrollTop || body.scrollTop || 0;
      const fullHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        doc.scrollHeight,
        doc.offsetHeight,
        doc.clientHeight
      );
      const scrolledBottom = scrollTop + window.innerHeight;
      setNearBottom(scrolledBottom >= fullHeight - FOOTER_FADE_THRESHOLD);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Only show on the landing page, and only when we have a destination.
  if (location.pathname !== '/' || !portalUrl) return null;

  return (
    <motion.a
      href={portalUrl}
      aria-label={t('support.fab', { defaultValue: 'Get support' })}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 font-primary font-medium text-neutral-900 shadow-glow-primary shadow-lg transition-colors duration-200 hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-black active:scale-95"
      initial={{ opacity: 0, y: 12 }}
      animate={{
        opacity: nearBottom ? 0 : 1,
        y: nearBottom ? 12 : 0,
        pointerEvents: nearBottom ? 'none' : 'auto',
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <Headset className="h-5 w-5" />
      <span>{t('support.fab', { defaultValue: 'Support' })}</span>
    </motion.a>
  );
};

export default FloatingSupportButton;
