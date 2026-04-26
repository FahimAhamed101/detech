import Mouse from "@/layouts/Mouse";
import PreLoader from "@/layouts/PreLoader";
import { fiverrProfile, siteConfig } from "@/utility/fiverrContent";
import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/meanmenu.css";
import "@css/slick.css";
import "@css/nice-select.css";
import "@css/main.css";
import "@css/style.css";
import "react-circular-progressbar/dist/styles.css";
import "./globals.css";

const metadataBase = siteConfig.siteUrl
  ? new URL(siteConfig.siteUrl)
  : undefined;

export const metadata = {
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
  alternates: {
    canonical: siteConfig.siteUrl || "/",
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: siteConfig.siteUrl || "/",
    siteName: siteConfig.siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PreLoader />
        {children}
        <Mouse />
      </body>
    </html>
  );
}
