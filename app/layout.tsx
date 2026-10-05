import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import Providers from '@/components/Providers'
import {
  SITE_NAME,
  SITE_URL,
  APP_NAME,
  PLAY_STORE_URL,
  APP_PACKAGE,
  GA_MEASUREMENT_ID,
} from '@/lib/site-config'


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Buy Verified Websites, Source Codes & Mobile Apps | Official App: ${APP_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'The premier marketplace for US, UK, Canada, Australia and international tech entrepreneurs to buy verified source codes, turnkey CMS websites (Extremis News), SaaS scripts, and mobile apps. We also fix and build custom websites and apps. Contact: fahimahamedweb@gmail.com or WhatsApp: +8801706617723.',
  keywords: [
    'buy websites USA',
    'buy turnkey websites UK',
    'turnkey website Canada',
    'extremis.top website for sale',
    'news portal website for sale',
    'buy source code online',
    'apps for sale',
    'software marketplace',
    'buy mobile app source code',
    'buy Flutter app',
    'buy React Next.js script',
    'buy SaaS platform',
    'fix website bugs',
    'we fix websites and apps',
    'custom web app development',
    'BuyCode Pro',
    'BuyCode Pro app',
    'download BuyCode Pro',
    'buy source code google play',
    'website broker USA',
    'digital assets marketplace',
    'getyoursoftware.top',
  ],
  authors: [{ name: 'getyoursoftware.top' }, { name: 'Fahim Ahamed', url: 'https://github.com/FahimAhamed101' }],
  creator: 'getyoursoftware.top',
  publisher: 'getyoursoftware.top',
  applicationName: SITE_NAME,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: `${SITE_NAME} — Buy & Sell Websites, Apps & Software | ${APP_NAME}`,
    description:
      'Buy and sell turnkey websites, mobile apps, SaaS scripts, CMS portals, and digital software businesses on getyoursoftware.top. Download BuyCode Pro on Google Play.',
    siteName: SITE_NAME,
    images: [
      {
        url: '/brand/getyoursoftware-lockup-dark.png',
        width: 900,
        height: 473,
        alt: `${SITE_NAME} Marketplace`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Buy & Sell Websites, Apps & Software | ${APP_NAME}`,
    description:
      'Buy and sell turnkey websites, mobile apps, SaaS platforms, and digital software on getyoursoftware.top. Official app BuyCode Pro on Google Play.',
    images: ['/brand/getyoursoftware-lockup-dark.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/browse?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    description:
      'Online marketplace to buy and sell turnkey websites, mobile apps, and digital software businesses.',
  }

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: APP_NAME,
    operatingSystem: 'ANDROID',
    applicationCategory: 'BusinessApplication',
    installUrl: PLAY_STORE_URL,
    downloadUrl: PLAY_STORE_URL,
    description:
      'Official BuyCode Pro mobile app on Google Play to browse, negotiate, and buy verified source code, turnkey websites, and digital apps.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
        />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
