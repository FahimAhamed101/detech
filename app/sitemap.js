import { siteConfig } from "@/utility/fiverrContent";

const routes = ["", "/about", "/service", "/service-details", "/contact", "/faq"];

export default function sitemap() {
  const baseUrl = siteConfig.siteUrl || "http://localhost:3000";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
