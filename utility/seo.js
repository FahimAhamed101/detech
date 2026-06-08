import { agencyFaqs, fiverrProfile, siteConfig } from "./fiverrContent";

export const siteUrl = siteConfig.siteUrl || "http://localhost:3000";
export const metadataBase = new URL(siteUrl);

const defaultOgImage = "/assets/img/header/home-1.jpg";

const dedupe = (values = []) => [...new Set(values.filter(Boolean))];

const buildRobots = (noindex = false) => ({
  index: !noindex,
  follow: true,
  googleBot: {
    index: !noindex,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
});

export const buildMetadata = ({
  title,
  description,
  path = "/",
  keywords = [],
  noindex = false,
  type = "website",
} = {}) => ({
  title,
  description,
  keywords: dedupe([...siteConfig.keywords, ...keywords]),
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: path,
    siteName: siteConfig.siteName,
    locale: "en_US",
    type,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.siteName} web and mobile development agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [defaultOgImage],
  },
  robots: buildRobots(noindex),
});

export const siteMetadata = {
  metadataBase,
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.siteName,
  authors: [{ name: fiverrProfile.name }],
  creator: fiverrProfile.name,
  publisher: siteConfig.siteName,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.siteName} web and mobile development agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [defaultOgImage],
  },
  icons: {
    icon: "/assets/img/logo/logo.svg",
  },
  robots: buildRobots(false),
  verification: {
    google:
      process.env.GOOGLE_SITE_VERIFICATION ||
      "t-prsZPoB0ZmYIXisc7XRN3WCXbB5xV83Rbybfa9HFA",
  },
};

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteConfig.siteName,
  alternateName: siteConfig.alternateSiteName,
  url: siteUrl,
  inLanguage: "en",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: siteConfig.siteName,
  alternateName: siteConfig.alternateSiteName,
  description: siteConfig.description,
  url: siteUrl,
  logo: `${siteUrl}/assets/img/logo/logo.svg`,
  image: [`${siteUrl}${defaultOgImage}`],
  email: fiverrProfile.supportEmail,
  telephone: fiverrProfile.phone,
  priceRange: "$$",
  areaServed: "Worldwide",
  sameAs: [fiverrProfile.profileUrl],
  address: {
    "@type": "PostalAddress",
    addressLocality: fiverrProfile.locality,
    addressRegion: fiverrProfile.region,
    addressCountry: fiverrProfile.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: fiverrProfile.supportEmail,
      telephone: fiverrProfile.phone,
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
  knowsAbout: [
    "Web app development",
    "Mobile app development",
    "AI automation",
    "MERN stack development",
    "Laravel development",
    "Django development",
    "FastAPI development",
    ".NET development",
    "Flutter development",
    "React Native development",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web, mobile, and AI development services",
    itemListElement: siteConfig.serviceCatalog.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        areaServed: "Worldwide",
        serviceType: service.name,
      },
    })),
  },
});

export const getServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}${service.path}#${service.slug || "service"}`,
  name: service.name,
  description: service.description,
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
  areaServed: "Worldwide",
  serviceType: service.name,
  url: `${siteUrl}${service.path}`,
});

export const getItemListSchema = ({ name, items }) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: `${siteUrl}${item.path}`,
  })),
});

export const getBreadcrumbSchema = (items = []) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteUrl}${item.path}`,
  })),
});

export const getFaqSchema = (items = agencyFaqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const toJsonLd = (schemas) => ({
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@graph": Array.isArray(schemas) ? schemas : [schemas],
  }),
});

export const indexableRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1, lastModified: "2026-06-08" },
  { path: "/service", changeFrequency: "weekly", priority: 0.95, lastModified: "2026-06-08" },
  { path: "/about", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-06-08" },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-06-08" },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-06-08" },
];
