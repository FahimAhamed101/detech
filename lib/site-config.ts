/**
 * Site-wide contact details — single source of truth.
 *
 * The business asked for ONE address to cover everything: the public site
 * contact, support, and the payment-gateway account. It is therefore a single
 * constant rather than a set of per-purpose addresses, so nothing drifts apart
 * when the address changes. Read it from here — never inline the literal.
 *
 * Override at build time with `NEXT_PUBLIC_SITE_EMAIL` if it ever needs to
 * differ per environment (staging, preview deploys).
 */
export const SITE_EMAIL = process.env.NEXT_PUBLIC_SITE_EMAIL || 'fahimahamedweb@gmail.com'

/** Display name used in metadata, mail `From:` headers, and receipt copy. */
export const SITE_NAME = 'getyoursoftware.top'

/** Public origin, used for absolute links (OG tags, sitemap, emails). */
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
export const SITE_URL =
  configuredSiteUrl &&
  !configuredSiteUrl.includes('your-domain.com') &&
  !configuredSiteUrl.includes('example.com')
    ? configuredSiteUrl.replace(/\/+$/, '')
    : 'https://getyoursoftware.top'

/**
 * The address the payment gateway is registered under. Deliberately the same
 * value as `SITE_EMAIL` — kept as a named export so payment code reads
 * intentionally rather than by coincidence if that ever changes.
 */
export const PAYMENT_GATEWAY_EMAIL = SITE_EMAIL

/** Official Android Application on Google Play Store */
export const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
  'https://play.google.com/store/apps/details?id=com.Fahim101.tomquiz&pli=1'

export const APP_NAME = 'BuyCode Pro'
export const APP_PACKAGE = 'com.Fahim101.tomquiz'

/** WhatsApp contact information */
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '+8801706617723'
export const WHATSAPP_DISPLAY = process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || '+880 1706-617723'

/** Generate a direct WhatsApp click-to-chat/call URL */
export function whatsappUrl(message?: string): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '')
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${cleanNumber}${text}`
}

/** `mailto:` href for the site address, with the subject pre-filled. */
export function mailto(subject?: string): string {
  return subject
    ? `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(subject)}`
    : `mailto:${SITE_EMAIL}`
}
