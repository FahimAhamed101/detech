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
          <h1 className="eyebrow">Canada&apos;s most trusted and loved marketplace</h1>
          <a className="ad-choice" href="#">
            AdChoices ▷
          </a>
        </div>

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
        {loading ? <RowSkeleton /> : <ListingRow products={gallery.data?.items ?? []} />}

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

      