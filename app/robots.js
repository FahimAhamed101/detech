import { siteConfig } from "@/utility/fiverrContent";

export default function robots() {
  const baseUrl = siteConfig.siteUrl || "http://localhost:3000";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
