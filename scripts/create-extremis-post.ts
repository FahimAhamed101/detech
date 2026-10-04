import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

/* ---- load .env.local before importing anything that reads env ---- */
function loadEnvFile(file: string) {
  if (!existsSync(file)) return
  const raw = readFileSync(file, 'utf8')
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    if (!(key in process.env)) process.env[key] = value
  }
}

const root = process.cwd()
loadEnvFile(resolve(root, '.env.local'))
loadEnvFile(resolve(root, '.env'))

async function main() {
  const dbConnect = (await import('../lib/mongodb')).default
  const Category = (await import('../lib/models/Category')).default
  const Product = (await import('../lib/models/Product')).default
  const mongoose = (await import('mongoose')).default

  console.log('Connecting to MongoDB...')
  await dbConnect()

  // 1. Ensure category exists
  let category = await Category.findOne({ slug: 'websites-apps-for-sale' })
  if (!category) {
    category = await Category.create({
      name: 'Websites & Apps for Sale',
      slug: 'websites-apps-for-sale',
      group: 'Buy & Sell',
      description: 'Turnkey websites, mobile apps, SaaS platforms, CMS portals, and digital software businesses.',
      image: '/images/products/extremis-news/1-homepage.png',
      order: 1,
      featured: true,
      active: true,
    })
    console.log('Created category: Websites & Apps for Sale')
  } else {
    category.image = '/images/products/extremis-news/1-homepage.png'
    category.featured = true
    await category.save()
    console.log('Found existing category:', category.name)
  }

  // 2. Upsert the Extremis News listing
  const slug = 'extremis-top-online-newspaper-magazine-cms-website'
  const postData = {
    title: 'Extremis News (https://extremis.top/) — Complete Online Newspaper & Magazine CMS Website',
    slug,
    description: `## 🚀 Extremis News (https://extremis.top/) — Complete Turnkey Online Newspaper & Magazine CMS

Turnkey digital newspaper and editorial magazine CMS website available for immediate purchase and ownership transfer. Perfect for digital publishers, media entrepreneurs, affiliate networks, and developers seeking an enterprise-grade content portal ready to monetize.

---

### 🌐 Live Website & Admin Demo Access

- **Public Website Live Demo**: [https://extremis.top/](https://extremis.top/)
- **Admin Control Panel**: [https://extremis.top/admin/login](https://extremis.top/admin/login)
- **Demo Admin Email**: \`admin@gmail.com\`
- **Demo Admin Password**: \`12345678\`

*(Log in with the credentials above to explore the full dashboard, news publishing suite, role permissions, and site settings).*

---

### 🌟 Key Features & Capabilities

#### 1. 📰 Editorial & Automated Publishing Suite
- **Comprehensive News Management**: Draft, publish, schedule, categorize, and feature news articles across multiple dynamic layouts.
- **AI Auto-Poster Integration**: Connect automated content feeds to continuously publish fresh, trending news articles hands-free.
- **Bilingual & Multi-Language**: Dual language support (English & Bangla) with simple language toggling.
- **Taxonomy & Tags**: 14+ pre-configured news categories (National, Business, Technology, Sports, Health, Culture, Climate, etc.) plus author profiles and tag archives.
- **Dynamic Homepage Modules**: Breaking News ticker, Featured Hero Slider, Category Rails, Most Viewed block, and Trending News.

#### 2. 🛡️ Advanced Admin & Access Management
- **Role-Based Permissions**: Granular access control for Admins, Editors, and Contributors with 41+ specific permissions.
- **Real-Time Analytics Dashboard**: Live metrics tracking Total News (24+), Pending Articles, Categories, Languages, Social Counts, and Subscribers.
- **Social Integration**: Live follower counters and direct links across major platforms (Facebook, YouTube, X, Instagram).
- **Communication Center**: Built-in contact message inbox for reader tips, direct messages, and advertising requests.

#### 3. 💰 Monetization & Growth Ready
- **Ad Management**: Built-in banner ad spots, sidebar display units, and sponsored article slots ready for Google AdSense or direct sponsors.
- **Audience Capture**: Integrated newsletter subscriber module with email capture.
- **Viral Engagement**: Instant one-click social sharing (Facebook, Twitter/X, WhatsApp, Telegram, LinkedIn) on every article.
- **SEO Optimized**: Pre-configured OpenGraph metadata, schema markup, dynamic sitemaps, clean semantic URLs, and fast responsive performance.

---

### 📦 What Is Included in This Sale
1. **Domain Name Transfer**: Full ownership transfer of the premium domain **\`extremis.top\`**.
2. **Complete Source Code**: Clean, well-structured frontend and backend codebase.
3. **Database & Assets**: Full database export including all articles, categories, settings, and media.
4. **Admin Accounts**: Administrative credentials handover.
5. **Migration Support**: Assistance with deployment and domain setup on your hosting provider.`,
    price: 1200,
    priceOnRequest: false,
    category: category._id,
    location: 'Worldwide / Online Transfer',
    images: [
      '/images/products/extremis-news/1-homepage.png',
      '/images/products/extremis-news/2-dashboard.png',
      '/images/products/extremis-news/3-admin-news.png',
      '/images/products/extremis-news/4-single-article.png',
    ],
    brand: 'Extremis News',
    condition: 'like-new',
    status: 'active',
    featured: true,
    urgent: true,
    tags: [
      'website for sale',
      'extremis.top',
      'news portal',
      'cms website',
      'turnkey website',
      'newspaper',
      'apps for sale',
      'software',
      'nextjs',
      'react',
      'source code',
    ],
    views: 128,
    seller: {
      name: 'getyoursoftware.top Verified Seller',
      email: 'support@getyoursoftware.top',
      phone: '+1 800 555 0199',
      location: 'Worldwide Online Transfer',
      verified: true,
    },
  }

  const existingProduct = await Product.findOne({ slug })
  if (existingProduct) {
    Object.assign(existingProduct, postData)
    await existingProduct.save()
    console.log('Updated existing product:', existingProduct.title)
  } else {
    const newProduct = await Product.create(postData)
    console.log('Created new product:', newProduct.title)
  }

  console.log('Extremis post creation complete!')
  await mongoose.disconnect()
  process.exit(0)
}

main().catch((err) => {
  console.error('Error creating Extremis post:', err)
  process.exit(1)
})
