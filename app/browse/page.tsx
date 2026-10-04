import type { Metadata } from 'next'
import BrowseClient from '@/components/BrowseClient'

export const metadata: Metadata = {
  title: 'Browse Turnkey Websites, Mobile Apps & Source Codes | getyoursoftware.top',
  description:
    'Search and buy verified source codes, complete turnkey CMS websites (Extremis News), React, Flutter, and Next.js applications with instant delivery and 24/7 custom developer support.',
  keywords: [
    'buy turnkey website',
    'buy source code online',
    'extremis news cms website',
    'turnkey apps for sale',
    'buy react native code',
    'buy flutter apps',
    'web development bug fixes',
  ],
}

export const dynamic = 'force-dynamic'

type SearchParams = Record<string, string | string[] | undefined>

function first(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0]
  return value
}

/**
 * Server wrapper: reads the query string on the server and hands plain props to
 * the client component, which keeps the RTK Query cache client-side.
 */
export default function BrowsePage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <BrowseClient
      initial={{
        q: first(searchParams.q) ?? '',
        category: first(searchParams.category) ?? 'all',
        group: first(searchParams.group) ?? 'all',
        featured: first(searchParams.featured) ?? 'all',
        sort: first(searchParams.sort) ?? 'newest',
        page: Number(first(searchParams.page) ?? 1) || 1,
        location: first(searchParams.location) ?? '',
      }}
    />
  )
}
