import ContactSection from "@/components/ContactSection";
import Breadcrumb from "@/components/Breadcrumb";
import FaqSection from "@/components/FaqSection";
import FiverrGigsSection from "@/components/FiverrGigsSection";
import { ServiceSection2 } from "@/components/ServiceSection";
import Layout from "@/layouts/Layout";
import {
  deliverySteps,
  engagementModels,
  serviceAreas,
  siteConfig,
  stackHighlights,
} from "@/utility/fiverrContent";
import {
  buildMetadata,
  getBreadcrumbSchema,
  getItemListSchema,
  getOrganizationSchema,
  getServiceSchema,
  toJsonLd,
} from "@/utility/seo";

export const metadata = buildMetadata({
  title: "Web App Development Services, Mobile Apps, and AI Automation",
  description:
    "Explore TomTech services for custom web app development, mobile app development, MVP delivery, API engineering, and AI automation workflows.",
  path: "/service",
  keywords: [
    "web app development services",
    "mobile app development services",
    "AI automation services",
    "custom software development services",
    "dedicated development team",
  ],
});

const structuredData = [
  getOrganizationSchema(),
  ...siteConfig.serviceCatalog.map(getServiceSchema),
  getItemListSchema({
    name: "Web, mobile, and AI automation services",
    items: siteConfig.serviceCatalog,
  }),
  getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
  ]),
];

export default function ServicePage() {
  return (
    <Layout>
      <Breadcrumb pageName="Web, Mobile & AI Services" />

      <section className="section-padding pb-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Agency Services</span>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Delivery options built for product teams and business buyers
            </h2>
            <p className="service-intro wow fadeInUp" data-wow-delay=".4s">
              The service mix is focused on commercial-intent categories that
              buyers actively search for: web app development services, mobile
              app development, and AI automation systems that improve real
              operations.
            </p>
          </div>
          <div className="row g-4 mt-2">
            {serviceAreas.map((service) => (
              <div className="col-lg-4 col-md-6" key={service.title}>
                <div className="service-area-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FiverrGigsSection />

      <section className="service-section fix section-padding pt-0">
        <ServiceSection2 />
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-6">
              <div className="service-panel">
                <span className="section-tag">How Delivery Works</span>
                {deliverySteps.map((step, index) => (
                  <div className="process-row" key={step.title}>
                    <strong>0{index + 1}</strong>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-panel alt">
                <span className="section-tag">Engagement Models</span>
                {engagementModels.map((item) => (
                  <div className="info-row" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
                <div className="stack-band">
                  {stackHighlights.map((stack) => (
                    <span className="stack-pill" key={stack}>
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section-padding section-bg-2">
        <FaqSection
          extraClass="style-color"
          chartColor="#166FD3"
          titleStyle=""
        />
      </section>

      <ContactSection style="style-2" btnStyle="" titleStyle="" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={toJsonLd(structuredData)}
      />

      <style>{`
        .service-intro {
          max-width: 860px;
          margin: 18px auto 0;
        }

        .service-area-card,
        .service-panel {
          height: 100%;
          padding: 30px;
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
        }

        .service-area-card h3,
        .service-panel h4 {
          margin-bottom: 12px;
        }

        .service-area-card ul {
          margin: 18px 0 0;
          padding-left: 18px;
        }

        .service-area-card li + li {
          margin-top: 8px;
        }

        .service-panel.alt {
          background: linear-gradient(180deg, #f7fbff 0%, #eef5ff 100%);
        }

        .section-tag {
          display: inline-block;
          margin-bottom: 12px;
          color: #166fd3;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .process-row + .process-row,
        .info-row + .info-row {
          margin-top: 22px;
        }

        .process-row {
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }

        .process-row strong {
          color: #166fd3;
          font-size: 28px;
          line-height: 1;
          min-width: 40px;
        }

        .stack-band {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .stack-pill {
          display: inline-flex;
          align-items: center;
          min-height: 42px;
          padding: 10px 16px;
          border-radius: 999px;
          background: #0f2747;
          color: #fff;
          font-size: 14px;
        }

        @media (max-width: 575px) {
          .service-area-card,
          .service-panel {
            padding: 22px;
            border-radius: 22px;
          }
        }
      `}</style>
    </Layout>
  );
}
