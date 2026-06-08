import Mouse from "@/layouts/Mouse";
import PreLoader from "@/layouts/PreLoader";
import { siteMetadata } from "@/utility/seo";
import Script from "next/script";
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

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T3LJ8X3W');`}
      </Script>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T3LJ8X3W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <PreLoader />
        {children}
        <Mouse />
      </body>
    </html>
  );
}
