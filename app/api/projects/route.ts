import { NextResponse, type NextRequest } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Product from '@/lib/models/Product'
import { PROJECTS_DATA, type ProjectItem } from '@/lib/projects-data'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  })
}

export async function GET(req: NextRequest) {
  try {
    const sp = req.nextUrl.searchParams
    const mode = sp.get('mode')
    const categoryFilter = sp.get('category')?.toLowerCase()

    // If caller specifically requests only the static portfolio project items:
    if (mode === 'static') {
      const filtered = categoryFilter
        ? PROJECTS_DATA.filter((p) => p.category.toLowerCase().includes(categoryFilter))
        : PROJECTS_DATA
      return NextResponse.json(filtered, { headers: corsHeaders })
    }

    // Try to load live listings from database to combine with project data
    let dbProjects: ProjectItem[] = []
    try {
      await dbConnect()
      const products = await Product.find({ status: { $in: ['active', 'sold'] } })
        .populate('category')
        .sort({ createdAt: -1 })
        .lean()

      dbProjects = products.map((p) => {
        const catName =
          p.category && typeof p.category === 'object' && 'name' in p.category
            ? (p.category as { name: string }).name
            : p.tags?.join(',') || 'Websites & Apps'

        const imgList = (p.images && p.images.length > 0 ? p.images : []).filter(Boolean)
        const productLink = (p as { link?: string }).link || `https://getyoursoftware.top/listing/${p.slug}`
        const productGithub = (p as { github?: string }).github || 'https://github.com/FahimAhamed101'
        const productUserId = (p as { userId?: string }).userId || '65dc52e287bf09def1a37366'

        return {
          id: p._id.toString(),
          title: p.title,
          description: p.description || '',
          category: catName,
          link: productLink,
          github: productGithub,
          images: imgList.join(','),
          userId: productUserId,
          slug: p.slug,
          pathname: `/listing/${p.slug}`,
        }
      })
    } catch (err) {
      console.error('Failed to query database for /api/projects, using default projects:', err)
    }

    // Combine database listings and project items
    const combined: ProjectItem[] = []
    const seenTitles = new Set<string>()

    for (const dbp of dbProjects) {
      const key = dbp.title.toLowerCase().replace(/[\s—-]+source\s+code.*$/i, '').trim()
      if (!seenTitles.has(key)) {
        seenTitles.add(key)
        combined.push(dbp)
      }
    }

    for (const p of PROJECTS_DATA) {
      const key = p.title.toLowerCase().trim()
      if (!seenTitles.has(key)) {
        seenTitles.add(key)
        combined.push(p)
      }
    }

    const filtered = categoryFilter
      ? combined.filter((p) => p.category.toLowerCase().includes(categoryFilter))
      : combined

    // Always feature Extremis News at the top of projects list
    const sorted = [...filtered].sort((a, b) => {
      const aIsExtremis =
        a.slug?.includes('extremis') || a.title?.toLowerCase().includes('extremis')
      const bIsExtremis =
        b.slug?.includes('extremis') || b.title?.toLowerCase().includes('extremis')
      if (aIsExtremis && !bIsExtremis) return -1
      if (!aIsExtremis && bIsExtremis) return 1
      return 0
    })

    return NextResponse.json(sorted, { headers: corsHeaders })
  } catch (error) {
    console.error('Error in /api/projects:', error)
    return NextResponse.json(PROJECTS_DATA, { headers: corsHeaders })
  }
}
