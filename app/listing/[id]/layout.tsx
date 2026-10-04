import type { Metadata } from 'next'
import dbConnect from '@/lib/mongodb'
import Product from '@/lib/models/Product'
import { SITE_NAME, SITE_URL } from '@/lib/site-config'

type Props = {
  params: { id: string }
  children: React.ReactNode
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  try {
    await dbConnect()
    const id = params.id
    const query = /^[0-9a-fA-F]{24}$/.test(id) ? { _id: id } : { slug: id }
    const product = await Product.findOne(query).select(
      'title description images price slug category brand'
    )

    if (!product) {
      return {
        title: `Listing | ${SITE_NAME}`,
        description:
          'Browse verified source codes, turnkey websites, and digital assets on getyoursoftware.top.',
      }
    }

    const title = `${product.title} — Buy Source Code & Turnkey Website | ${SITE_NAME}`
    const plainDesc = product.description.replace(/[#*`_\[\]]/g, '').slice(0, 160).trim()
    const description = `${plainDesc} | Buy turnkey web platforms & verified source code online with instant handover and 24/7 developer support.`
    const primaryImg = product.images?.[0] || `${SITE_URL}/og-image.png`
    const canonical = `${SITE_URL}/listing/${product.slug || params.id}`

    return {
      title,
      description,
      keywords: [
        product.title,
        'buy source code online',
        'turnkey website for sale',
        'extremis top newspaper cms',
        'buy web application code',
        'react nextjs source code',
        'buy software code united states',
        'buy scripts united kingdom',
        'verified web assets canada',
        'digital business for sale australia',
      ],
      alternates: {
        canonical,
      },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: SITE_NAME,
        images: [{ url: primaryImg, width: 1200, height: 630, alt: product.title }],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [primaryImg],
      },
    }
  } catch {
    return {
      title: `Listing | ${SITE_NAME}`,
    }
  }
}

export default function ListingLayout({ children }: Props) {
  return <>{children}</>
}
