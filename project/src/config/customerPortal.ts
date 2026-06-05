/**
 * Resolves the URL of the ResolveDesk customer portal that the floating
 * support button links to.
 *
 * - Dev: falls back to the local customer-portal dev server (port 5174).
 * - Prod: must be provided via `VITE_CUSTOMER_PORTAL_URL` (see .env.example).
 *
 * Vite inlines env vars at BUILD time, so the prod value has to be set in the
 * host's build config and then redeployed. If a production build ships without
 * the var set, we return null so the button hides itself instead of silently
 * pointing real users at localhost.
 */
const DEV_DEFAULT = 'http://localhost:5174';

export function getCustomerPortalUrl(): string | null {
  const configured = import.meta.env.VITE_CUSTOMER_PORTAL_URL?.trim();
  if (configured) return configured;

  if (import.meta.env.DEV) return DEV_DEFAULT;

  // Production build with no URL configured — hide the button rather than
  // sending users to a localhost address that won't resolve for them.
  console.warn(
    '[support-button] VITE_CUSTOMER_PORTAL_URL is not set; hiding the support button in this production build.'
  );
  return null;
}
