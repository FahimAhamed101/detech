'use client'

import Link from 'next/link'
import { useGetProductsQuery } from '@/store/productsApi'
import { useGetCategoriesQuery } from '@/store/categoriesApi'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { priceLabel, primaryImage, type Category, type Product } from '@/store/types'
import {
  PLAY_STORE_URL,
  APP_NAME,
  WHATSAPP_DISPLAY,
  whatsappUrl,
  SITE_EMAIL,
  mailto,
} from '@/lib/site-config'

const popularSearches = [
  'Turnkey Websites',
  'News Portal Website',
  'Mobile Apps',
  'SaaS Scripts',
  'Extremis News',
  'eCommerce Websites',
  'CMS Platforms',
  'React Next.js Apps',
  'Digital Businesses',
  'Websites for Sale',
]

function SectionHeading({
  title,
  linkText,
  linkHref = '#',
  showInfo = false,
  showYourAd = false,
}: {
  title: string
  linkText?: string
  linkHref?: string
  showInfo?: boolean
  showYourAd?: boolean
}) {
  return (
    <div className="section-heading">
      <div className="section-heading-title">
        <h2>{title}</h2>
        {showInfo && (
          <span className="info-icon" title="Gallery Info">
            i
          </span>
        )}
      </div>
      <div className="section-heading-link">
        {showYourAd && (
          <>
            <a href="#" className="your-ad">
              Your Ad here
            </a>
            <span className="dot-divider">·</span>
          </>
        )}
        {linkText && <Link href={linkHref}>{linkText}</Link>}
      </div>
    </div>
  )
}

function ListingRow({ products }: { products: Product[] }) {
  if (products.length === 0) return null
  return (
    <div className="listing-row-container">
      <div className="listing-row" role="list">
        {products.map((item) => (
          <Link
            href={`/listing/${item.slug}`}
            className="listing-card"
            key={item._id}
            role="listitem"
          >
            <div className="image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={primaryImage(item)} alt={item.title} loading="lazy" />
            </div>
            <div className="listing-copy">
              <p title={item.title}>{item.title}</p>
              <small>{item.location}</small>
              <strong>{priceLabel(item)}</strong>
            </div>
          </Link>
        ))}
      </div>
      <button className="carousel-next-btn" type="button" aria-label="Next listings">
        ›
      </button>
    </div>
  )
}

function CategoryTiles({
  categories,
  className = 'category-tiles-wide',
}: {
  categories: Category[]
  className?: string
}) {
  if (categories.length === 0) return null
  return (
    <div className={className}>
      {categories.map((tile) => (
        <Link href={`/browse?category=${tile.slug}`} className="category-tile" key={tile._id}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={tile.image} alt={tile.name} loading="lazy" />
          <span className="tile-badge">{tile.name}</span>
        </Link>
      ))}
    </div>
  )
}

function LeaderboardAd() {
  return (
    <div className="ad-banner-section" style={{ padding: '0 20px' }}>
      <div
        className="homepage-app-banner"
        role="region"
        aria-label="BuyCode Pro Android App & WhatsApp Support"
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '20px',
              background: 'rgba(56, 189, 248, 0.15)',
              color: '#38bdf8',
              fontSize: '12px',
              fontWeight: 700,
              marginBottom: '8px',
            }}
          >
            <span>📱</span> OFFICIAL ANDROID APP ON GOOGLE PLAY
          </div>
          <h2
            style={{
              margin: '0 0 6px',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: 800,
              color: '#ffffff',
            }}
          >
            Buy Turnkey Websites &amp; Source Code with {APP_NAME}
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              color: '#94a3b8',
              lineHeight: 1.5,
              maxWidth: '640px',
            }}
          >
            Looking to acquire turnkey online platforms (like <strong>extremis.top</strong>) or verified source code?
            Call/chat on WhatsApp or install our mobile app from Google Play Store!
          </p>
        </div>

        <div
          className="banner-actions"
          style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="playstore-cta-button"
            id="hp-playstore-btn"
            style={{ padding: '10px 16px', fontSize: '13px' }}
          >
            <span>📱</span> Download App
          </a>
          <a
            href={whatsappUrl('Hello! I want to buy source code or website on getyoursoftware.top')}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta-button"
            id="hp-whatsapp-btn"
            style={{ padding: '10px 16px', fontSize: '13px' }}
          >
            <span>💬</span> Call on WhatsApp
          </a>
          <Link
            href="/app"
            style={{
              color: '#93c5fd',
              fontSize: '12px',
              fontWeight: 600,
              textDecoration: 'underline',
              marginLeft: '4px',
            }}
          >
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  )
}

function ExtremisFeaturedSpotlight() {
  return (
    <section
      className="extremis-spotlight-card"
      style={{
        background: 'linear-gradient(135deg, #0b1329 0%, #172554 45%, #0f172a 100%)',
        borderRadius: '16px',
        padding: '24px 28px',
        margin: '12px 0 24px',
        border: '2px solid #38bdf8',
        boxShadow: '0 16px 36px -8px rgba(2, 132, 199, 0.3)',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
            <span
              style={{
                background: '#e0f2fe',
                color: '#0369a1',
                fontWeight: 800,
                fontSize: '11px',
                padding: '4px 10px',
                borderRadius: '6px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              ⭐ Pinned Top Featured Ad
            </span>
            <span
              style={{
                background: '#fef08a',
                color: '#854d0e',
                fontWeight: 700,
                fontSize: '11px',
                padding: '4px 10px',
                borderRadius: '6px',
                textTransform: 'uppercase',
              }}
            >
              Turnkey Asset For Sale
            </span>
            <span style={{ color: '#38bdf8', fontSize: '13px', fontWeight: 700 }}>$1,200 USD</span>
          </div>

          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 800, margin: '0 0 10px', color: '#f8fafc', lineHeight: 1.25 }}>
            Extremis News (<a href="https://extremis.top/" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'underline' }}>https://extremis.top/</a>)
          </h2>
          <p style={{ fontSize: '14px', lineHeight: 1.55, color: '#cbd5e1', margin: '0 0 16px' }}>
            Complete Online Newspaper &amp; Editorial Magazine CMS Website. Includes full domain transfer (<strong>extremis.top</strong>), complete source code, AI auto-poster, dual language (EN/BN), Google AdSense spots, and 41+ role permissions.
          </p>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: '12px 14px',
              fontSize: '12px',
              marginBottom: '18px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <div><strong>🌐 Public Live Demo:</strong> <a href="https://extremis.top/" target="_blank" rel="noopener noreferrer" style={{ color: '#7dd3fc', textDecoration: 'underline' }}>https://extremis.top/</a></div>
            <div style={{ marginTop: '4px' }}><strong>🛡️ Admin Demo:</strong> <a href="https://extremis.top/admin/login" target="_blank" rel="noopener noreferrer" style={{ color: '#7dd3fc', textDecoration: 'underline' }}>https://extremis.top/admin/login</a> &bull; Email: <code>admin@gmail.com</code> &bull; Password: <code>12345678</code></div>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href={whatsappUrl('Hello! I want to buy Extremis News (https://extremis.top/) listed on getyoursoftware.top')}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta-button"
              style={{ padding: '11px 18px', fontSize: '13px' }}
            >
              <span>💬</span> Buy on WhatsApp ({WHATSAPP_DISPLAY})
            </a>
            <Link
              href="/listing/extremis-top-online-newspaper-magazine-cms-website"
              style={{
                background: '#ffffff',
                color: '#0f172a',
                padding: '11px 18px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '13px',
                textDecoration: 'none',
              }}
            >
              View Full Details →
            </Link>
            <a
              href="https://extremis.top/admin/login"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#93c5fd',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'underline',
              }}
            >
              Test Admin Demo ↗
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
              maxHeight: '240px',
              objectFit: 'cover',
              borderRadius: '12px',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 12px 28px rgba(0, 0, 0, 0.4)',
            }}
          />
        </div>
      </div>
    </section>
  )
}

function DeveloperServicesBanner() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        color: '#ffffff',
        borderRadius: '14px',
        padding: '24px 28px',
        margin: '28px 0',
        border: '1px solid #374151',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
      }}
    >
      <div>
        <span
          style={{
            background: '#10b981',
            color: '#ffffff',
            fontSize: '11px',
            fontWeight: 800,
            padding: '3px 8px',
            borderRadius: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Custom Development &amp; Support
        </span>
        <h3 style={{ margin: '8px 0 4px', fontSize: '20px', fontWeight: 800, color: '#f9fafb' }}>
          🛠️ We Build, Customize &amp; Fix Websites and Mobile Apps
        </h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#9ca3af', maxWidth: '680px', lineHeight: 1.5 }}>
          Need bug fixes, API integrations, script deployment, or customized mobile apps? Our verified engineering team delivers prompt solutions. Contact us anytime at <strong>{SITE_EMAIL}</strong> or on WhatsApp at <strong>{WHATSAPP_DISPLAY}</strong>.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
        <a
          href={whatsappUrl('Hello, I need custom web/app development or bug fixes')}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-cta-button"
          style={{ padding: '11px 18px', fontSize: '13px' }}
        >
          <span>💬</span> Chat on WhatsApp
        </a>
        <a
          href={mailto('Custom Development & Bug Fix Request')}
          style={{
            background: '#ffffff',
            color: '#111827',
            padding: '11px 18px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          ✉ Email: {SITE_EMAIL}
        </a>
      </div>
    </section>
  )
}

function RowSkeleton() {
  const bar = { background: '#EFEDF3', color: 'transparent', borderRadius: 4 }
  return (
    <div className="listing-row-container">
      <div className="listing-row" role="list">
        {Array.from({ length: 5 }).map((_, i) => (
          <div className="listing-card" key={i} role="listitem" aria-hidden="true">
            <div className="image-wrap" style={{ background: '#EFEDF3' }} />
            <div className="listing-copy">
              <p style={bar}>Loading</p>
              <small style={bar}>Loading</small>
              <strong style={bar}>$000</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Page() {
  // Everything below is served from MongoDB through RTK Query.
  const { data: allCategories } = useGetCategoriesQuery()

  const gallery = useGetProductsQuery({ featured: 'true', limit: 5, sort: 'newest' })
  const recent = useGetProductsQuery({ sort: 'newest', limit: 5 })
  const autos = useGetProductsQuery({ group: 'Cars & Vehicles', sort: 'popular', limit: 5 })
  const realEstate = useGetProductsQuery({ group: 'Real Estate', sort: 'popular', limit: 5 })
  const buySell = useGetProductsQuery({ group: 'Buy & Sell', sort: 'popular', limit: 5 })

  const loading = gallery.isLoading || recent.isLoading
  const dbUnreachable = gallery.isError && recent.isError

  const byGroup = (group: string) =>
    (allCategories?.items ?? []).filter((c) => c.group === group && c.image)

  return (
    <main className="site-shell">
      <SiteHeader />
      <LeaderboardAd />

      <div className="content-shell">
        <div className="intro-row">
          <h1 className="eyebrow">
            Buy Turnkey Websites, Mobile Apps &amp; Source Codes — getyoursoftware.top
          </h1>
          <a className="ad-choice" href="#">
            AdChoices ▷
          </a>
        </div>

        {/* PINNED TOP FEATURED AD: EXTREMIS NEWS */}
        <ExtremisFeaturedSpotlight />

        {dbUnreachable && (
          <div
            style={{
              margin: '12px 0',
              padding: '10px 14px',
              borderRadius: 8,
              background: '#FDECEC',
              color: '#8A1F1F',
              fontSize: 13,
            }}
          >
            Couldn&apos;t reach the listings database. Make sure MongoDB is reachable, then reload.
          </div>
        )}

        <SectionHeading
          title="Homepage Gallery"
          linkText="See All"
          linkHref="/browse?featured=true"
          showInfo
          showYourAd
        />
        {loading ? (
          <RowSkeleton />
        ) : (
          <ListingRow
            products={[...(gallery.data?.items ?? [])].sort((a, b) => {
              if (a.slug.includes('extremis')) return -1
              if (b.slug.includes('extremis')) return 1
              return 0
            })}
          />
        )}

        {/* DEVELOPER SERVICES: WE BUILD & FIX WEBSITES / APPS */}
        <DeveloperServicesBanner />

        <SectionHeading
          title="Recently added near you"
          linkText="See All"
          linkHref="/browse?sort=newest"
        />
        {loading ? <RowSkeleton /> : <ListingRow products={recent.data?.items ?? []} />}

        <section className="popular-section">
          <SectionHeading title="Popular near you" />
          <div className="pill-grid">
            {popularSearches.map((term) => (
              <Link href={`/browse?q=${encodeURIComponent(term)}`} key={term}>
                {term}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading
            title="Autos in Canada"
            linkText="Browse All Autos"
            linkHref="/browse?group=Cars%20%26%20Vehicles"
          />
          <CategoryTiles
            categories={byGroup('Cars & Vehicles').slice(0, 8)}
            className="category-tiles-autos"
          />
          <SectionHeading
            title="Popular listings in Autos"
            linkText="See All"
            linkHref="/browse?group=Cars%20%26%20Vehicles"
          />
          <ListingRow products={autos.data?.items ?? []} />
        </section>

        <section style={{ marginTop: '32px' }}>
          <SectionHeading
            title="Real Estate in Canada"
            linkText="Browse All Real Estate"
            linkHref="/browse?group=Real%20Estate"
          />
          <CategoryTiles categories={byGroup('Real Estate').slice(0, 3)} />
          <SectionHeading
            title="Popular listings in Real Estate"
            linkText="See All"
            linkHref="/browse?group=Real%20Estate"
          />
          <ListingRow products={realEstate.data?.items ?? []} />
        </section>

        <div className="member-banner">
          <h2>getyoursoftware.top&apos;s better when you&apos;re a member</h2>
          <p>
            See more relevant listings, find the things you&apos;re looking for quicker, and more!
          </p>
          <Link href="/admin/login">
            <button type="button">Sign In</button>
          </Link>
        </div>

        <section>
          <SectionHeading
            title="Buy and Sell in Canada"
            linkText="Browse All Buy and Sell"
            linkHref="/browse?group=Buy%20%26%20Sell"
          />
          <CategoryTiles categories={byGroup('Buy & Sell').slice(0, 3)} />
          <SectionHeading
            title="Popular listings in Buy and Sell"
            linkText="See All"
            linkHref="/browse?group=Buy%20%26%20Sell"
          />
          <ListingRow products={buySell.data?.items ?? []} />
        </section>

        <section style={{ marginTop: '32px' }}>
          <SectionHeading
            title="Antiques &amp; Collectibles in Canada"
            linkText="Browse All Collectibles"
            linkHref="/browse?group=Antiques%20%26%20Collectibles"
          />
          {/* 24 categories in this vertical; show a rail's worth and let the
              heading link carry people to the full list. */}
          <CategoryTiles
            categories={byGroup('Antiques & Collectibles').slice(0, 8)}
            className="category-tiles-autos"
          />
        </section>
      </div>

      <SiteFooter />
    </main>
  )
}
