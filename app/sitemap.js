import { indexableRoutes, siteUrl } from "@/utility/seo";

export default function sitemap() {
  return indexableRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
