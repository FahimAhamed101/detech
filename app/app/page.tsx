import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import {
  PLAY_STORE_URL,
  APP_NAME,
  APP_PACKAGE,
  WHATSAPP_DISPLAY,
  whatsappUrl,
  SITE_URL,
} from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Download ${APP_NAME} on Google Play — Buy Source Code, Apps & Turnkey Websites`,
  description: `Get ${APP_NAME} (${APP_PACKAGE}) on Google Play Store. The #1 marketplace app to buy source code, turnkey websites, SaaS platforms, and mobile apps. Chat or call on WhatsApp for live demos and instant code delivery.`,
  alternates: {
    canonical: `${SITE_URL}/app`,
  },
  openGraph: {
    title: `${APP_NAME} — Official Google Play App for Buying Source Code & Websites`,
    description: `Download ${APP_NAME} from Google Play Store or contact via WhatsApp (${WHATSAPP_DISPLAY}) to buy verified source codes and ready-to-monetize websites.`,
    url: `${SITE_URL}/app`,
    siteName: 'getyoursoftware.top',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/brand/logo.png`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} Google Play App`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Download ${APP_NAME} App — Buy Source Code & Websites`,
    description: `Official Android app on Google Play. Verified codes, live admin demos, WhatsApp negotiation, and instant file transfer.`,
  },
}

export default function AppLandingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MobileApplication',
        name: APP_NAME,
        operatingSystem: 'ANDROID',
        applicationCategory: 'BusinessApplication',
        installUrl: PLAY_STORE_URL,
        downloadUrl: PLAY_STORE_URL,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1280',
          bestRating: '5',
          worstRating: '1',
        },
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        description: `Official Android application for getyoursoftware.top to buy and sell verified source codes, SaaS platforms, and turnkey websites.`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `How do I download ${APP_NAME} on my Android device?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Visit Google Play Store at ${PLAY_STORE_URL} and tap Install to download the official application onto your phone or tablet.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Can I call on WhatsApp to buy source code or turnkey websites?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes! You can call or chat with our verified developers directly on WhatsApp at ${WHATSAPP_DISPLAY} for real-time demonstrations, price negotiation, and immediate repository transfer.`,
            },
          },
          {
            '@type': 'Question',
            name: 'What types of source codes and websites can I purchase?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can purchase full turnkey digital newspapers (such as Extremis News at extremis.top), mobile application templates, Next.js / React web applications, PHP/Laravel scripts, and SaaS platforms.',
            },
          },
        ],
      },
    ],
  }

  return (
    <main className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      {/* HERO SECTION */}
      <section
        style={{
          background: 'radial-gradient(ellipse at top, #1e293b 0%, #0f172a 70%, #020617 100%)',
          color: '#ffffff',
          padding: '64px 20px',
          borderBottom: '1px solid #334155',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: '#38bdf8',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '20px',
            }}
          >
            <span>✨</span> Official Google Play Android App Released
          </div>

          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              fontWeight: 800,
              lineHeight: 1.15,
              margin: '0 auto 20px',
              letterSpacing: '-0.02em',
              maxWidth: '850px',
              color: '#f8fafc',
            }}
          >
            Download <span style={{ color: '#38bdf8' }}>{APP_NAME}</span> &amp; Buy Verified Source Code
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
              color: '#94a3b8',
              maxWidth: '720px',
              margin: '0 auto 36px',
            }}
          >
            The premier marketplace app to acquire turnkey websites, React &amp; Next.js platforms,
            mobile app source codes, and complete digital businesses. Direct escrow, verified code
            transfers, and instant WhatsApp support.
          </p>

          {/* DUAL ACTION BUTTONS */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}
          >
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="playstore-cta-button"
              style={{
                fontSize: '16px',
                padding: '16px 28px',
                borderRadius: '12px',
                background: '#ffffff',
                color: '#0f172a',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.6 2.5a1.2 1.2 0 0 0-.6 1v17a1.2 1.2 0 0 0 .6 1l9.9-9.5-9.9-9.5Z" fill="#2196F3" />
                <path d="m13.5 12 2.8 2.7-12.7 7.2c-.4.2-.8.1-1.1-.1L13.5 12Z" fill="#4CAF50" />
                <path d="m16.3 9.3 4.1 2.3c.7.4.7 1 0 1.4l-4.1 2.3-2.8-2.7 2.8-3.3Z" fill="#FFC107" />
                <path d="m2.5 2.2c.3-.2.7-.3 1.1-.1l12.7 7.2-2.8 2.7-9.9-9.5a1.1 1.1 0 0 0-1.1-.3Z" fill="#F44336" />
              </svg>
              <span>Download on Google Play</span>
            </a>

            <a
              href={whatsappUrl('Hello! I want to buy source code / website from getyoursoftware.top')}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta-button"
              style={{
                fontSize: '16px',
                padding: '16px 28px',
                borderRadius: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <span>💬</span>
              <span>Call / Chat on WhatsApp ({WHATSAPP_DISPLAY})</span>
            </a>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '18px',
              fontSize: '14px',
              color: '#94a3b8',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <span>⭐ <strong>4.9 / 5</strong> on Play Store</span>
            <span>🔒 <strong>Escrow Protected</strong></span>
            <span>⚡ <strong>Instant Delivery</strong></span>
            <span>📦 <strong>Full Code + DB Transfer</strong></span>
          </div>
        </div>
      </section>

      {/* WHY BUY THROUGH APP & WHATSAPP */}
      <section style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 10px', color: '#0f172a' }}>
            Two Fast &amp; Secure Ways to Buy Code
          </h2>
          <p style={{ color: '#64748b', fontSize: '16px', margin: 0 }}>
            Whether you prefer browsing on mobile or negotiating directly with developers:
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {/* OPTION 1: WHATSAPP */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '2px solid #86efac',
              padding: '32px',
              boxShadow: '0 10px 30px rgba(34, 197, 94, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#dcfce7',
                  color: '#15803d',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '13px',
                  marginBottom: '16px',
                }}
              >
                <span>💬</span> FASTEST OPTION
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 12px', color: '#14532d' }}>
                Direct Call &amp; Chat on WhatsApp
              </h3>
              <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                Speak directly with the engineering &amp; transfer team. Inspect live admin dashboards,
                request custom features, negotiate bulk pricing, and get source codes sent to your
                GitHub or email immediately.
              </p>
              <ul style={{ paddingLeft: '20px', margin: '0 0 24px', color: '#334155', fontSize: '14px', lineHeight: 1.8 }}>
                <li>Live demonstration of admin login &amp; credentials</li>
                <li>Instant price negotiation &amp; custom licensing</li>
                <li>Priority 24/7 technical handover support</li>
                <li>Direct domain name transfer assistance</li>
              </ul>
            </div>

            <a
              href={whatsappUrl('Hello! I want to buy source code or turnkey website.')}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta-button"
              style={{ justifyContent: 'center', width: '100%', textAlign: 'center' }}
            >
              <span>💬</span> Chat on WhatsApp ({WHATSAPP_DISPLAY})
            </a>
          </div>

          {/* OPTION 2: PLAY STORE APP */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '2px solid #93c5fd',
              padding: '32px',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#dbeafe',
                  color: '#1d4ed8',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '13px',
                  marginBottom: '16px',
                }}
              >
                <span>📱</span> OFFICIAL ANDROID APP
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 12px', color: '#1e3a8a' }}>
                Download {APP_NAME} on Play Store
              </h3>
              <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                Browse our catalog of verified source codes, turnkey CMS portals, and mobile apps
                from your smartphone. Save favorites, receive price drop alerts, and manage transactions
                seamlessly.
              </p>
              <ul style={{ paddingLeft: '20px', margin: '0 0 24px', color: '#334155', fontSize: '14px', lineHeight: 1.8 }}>
                <li>Browse 1,000+ ready-to-deploy codebases &amp; websites</li>
                <li>Escrow protection for 100% safe transactions</li>
                <li>Instant push notifications for new turnkey listings</li>
                <li>Package ID: <code>{APP_PACKAGE}</code></li>
              </ul>
            </div>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="playstore-cta-button"
              style={{ justifyContent: 'center', width: '100%', textAlign: 'center', background: '#0f172a', color: '#ffffff' }}
            >
              <span>📱</span> Get {APP_NAME} on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED SHOWCASE: EXTREMIS NEWS */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto 60px',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
            borderRadius: '20px',
            padding: '36px',
            color: '#ffffff',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          <div>
            <span
              style={{
                background: '#4f46e5',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '6px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Featured Listing For Sale
            </span>
            <h3 style={{ fontSize: '26px', fontWeight: 800, margin: '14px 0 10px', color: '#f8fafc' }}>
              Extremis News (extremis.top)
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, margin: '0 0 20px' }}>
              Complete turnkey online newspaper &amp; magazine CMS website. Includes domain ownership
              transfer, AI auto-poster, dual language (English &amp; Bangla), full admin control panel,
              and 41+ role permissions.
            </p>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '13px',
                marginBottom: '24px',
              }}
            >
              <div><strong>Admin Login URL:</strong> <a href="https://extremis.top/admin/login" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'underline' }}>https://extremis.top/admin/login</a></div>
              <div><strong>Demo Email:</strong> <code>admin@gmail.com</code> | <strong>Password:</strong> <code>12345678</code></div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link
                href="/listing/extremis-top-online-newspaper-magazine-cms-website"
                style={{
                  background: '#38bdf8',
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                }}
              >
                View Listing Details ($1,200) →
              </Link>
              <a
                href={whatsappUrl('Hello, I want to purchase Extremis News (extremis.top) listed on getyoursoftware.top')}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-cta-button"
                style={{ fontSize: '14px', padding: '12px 20px' }}
              >
                <span>💬</span> Buy via WhatsApp
              </a>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/products/extremis-news/1-homepage.png"
              alt="Extremis News Website For Sale"
              style={{
                width: '100%',
                maxHeight: '260px',
                objectFit: 'cover',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)',
              }}
            />
          </div>
        </div>
      </section>

      {/* SEO FAQ SECTION */}
      <section style={{ maxWidth: '900px', margin: '0 auto 60px', padding: '0 20px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: 800, textAlign: 'center', marginBottom: '32px' }}>
          Frequently Asked Questions
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>
              📱 How do I get the BuyCode Pro app?
            </h3>
            <p style={{ margin: 0, color: '#475569', fontSize: '14px', lineHeight: 1.6 }}>
              You can download <strong>{APP_NAME}</strong> directly from Google Play Store by searching
              for package <code>{APP_PACKAGE}</code> or by tapping our{' '}
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7', textDecoration: 'underline' }}>
                official Google Play link
              </a>.
            </p>
          </div>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>
              💬 How does buying code through WhatsApp work?
            </h3>
            <p style={{ margin: 0, color: '#475569', fontSize: '14px', lineHeight: 1.6 }}>
              Simply click the WhatsApp button on any listing or message <strong>{WHATSAPP_DISPLAY}</strong>.
              Our engineers will provide live admin login credentials, demonstrate all features, agree on
              payment terms, and transfer the source code ZIP archive or GitHub repository immediately.
            </p>
          </div>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>
              🌐 Can you transfer domain names like extremis.top?
            </h3>
            <p style={{ margin: 0, color: '#475569', fontSize: '14px', lineHeight: 1.6 }}>
              Yes. All turnkey websites listed for sale include complete domain authorization transfer
              codes (EPP code) along with web hosting migrations so you take 100% control of the digital asset.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
