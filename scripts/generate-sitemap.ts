import { readFileSync, writeFileSync, existsSync } from 'node:fs'
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

async function generateSitemap() {
  const dbConnect = (await import('../lib/mongodb')).default
  const Product = (await import('../lib/models/Product')).default
  const Category = (await import('../lib/models/Category')).default
  const mongoose = (await import('mongoose')).default
  const { SITE_URL } = await import('../lib/site-config')

  console.log('Connecting to database to generate sitemap.xml...')
  await dbConnect()

  const today = new Date().toISOString().split('T')[0]

  type UrlEntry = {
    loc: string
    lastmod: string
    changefreq: string
    priority: string
  }

  const entries: UrlEntry[] = [
    { loc: SITE_URL, lastmod: today, changefreq: 'daily', priority: '1.0' },
    { loc: `${SITE_URL}/app`, lastmod: today, changefreq: 'daily', priority: '0.95' },
    { loc: `${SITE_URL}/browse`, lastmod: today, changefreq: 'daily', priority: '0.9' },
    { loc: `${SITE_URL}/admin/login`, lastmod: today, changefreq: 'monthly', priority: '0.3' },
  ]

  // Add categories
  const categories = await Category.find({ active: true }).select('slug updatedAt').lean()
  for (const cat of categories) {
    const mod = cat.updatedAt ? new Date(cat.updatedAt).toISOString().split('T')[0] : today
    entries.push({
      loc: `${SITE_URL}/browse?category=${cat.slug}`,
      lastmod: mod,
      changefreq: 'weekly',
      priority: '0.8',
    })
  }

  // Add products
  const products = await Product.find({ status: 'active' }).select('slug updatedAt').lean()
  for (const prod of products) {
    const mod = prod.updatedAt ? new Date(prod.updatedAt).toISOString().split('T')[0] : today
    entries.push({
      loc: `${SITE_URL}/listing/${prod.slug}`,
      lastmod: mod,
      changefreq: 'weekly',
      priority: '0.9',
    })
  }

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

  const targetPath = resolve(root, 'public', 'sitemap.xml')
  writeFileSync(targetPath, xmlContent, 'utf8')
  console.log(`✓ Generated sitemap at public/sitemap.xml with ${entries.length} URLs!`)

  await mongoose.disconnect()
  process.exit(0)
}

generateSitemap().catch((err) => {
  console.error('✗ Failed to generate sitemap:', err)
  process.exit(1)
})
