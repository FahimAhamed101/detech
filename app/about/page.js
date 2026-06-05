import AboutSection from "@/components/AboutSection";
import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/ContactSection";
import FiverrGigsSection from "@/components/FiverrGigsSection";
import Layout from "@/layouts/Layout";
import {
  agencyPillars,
  deliverySteps,
  engagementModels,
  nicheKeywords,
  stackHighlights,
  stats,
} from "@/utility/fiverrContent";
import {
  buildMetadata,
  getBreadcrumbSchema,
  getOrganizationSchema,
  toJsonLd,
} from "@/utility/seo";

export const metadata = buildMetadata({
  title: "About TomTech Web, Mobile, and AI Development Agency",
  description:
    "Learn how TomTech plans, designs, builds, and iterates web apps, mobile apps, and AI automation systems for startups and businesses.",
  path: "/about",
  keywords: [
    "about web app development agency",
    "mobile app development team",
    "AI automation partner",
    "software outsourcing company",
  ],
});

const structuredData = [
  getOrganizationSchema(),
  getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]),
];

export default function AboutPage() {
  return (
    <Layout>
      <Breadcrumb pageName="About TomTech" />

      <section className="about-section fix section-padding">
        <AboutSection />
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Why Teams Hire TomTech</span>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              A practical software partner for product delivery and growth
            </h2>
          </div>
          <div className="row g-4 mt-2">
            {agencyPillars.map((pillar) => (
              <div className="col-lg-4 col-md-6" key={pillar.title}>
                <div className="about-value-card">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <div className="about-panel">
                <span className="section-tag">Delivery Process</span>
                <h2>How web, mobile, and AI projects move from idea to launch</h2>
                <div className="process-list">
                  {deliverySteps.map((step, index) => (
                    <div className="process-card" key={step.title}>
                      <strong>0{index + 1}</strong>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-panel alt">
                <span className="section-tag">Agency Positioning</span>
                <div className="stats-grid">
                  {stats.map((item) => (
                    <div className="stat-card" key={item.label}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-6">
              <div className="about-panel">
                <span className="section-tag">Engagement Models</span>
                {engagementModels.map((item) => (
                  <div className="info-row" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-panel">
                <span className="section-tag">Technology Coverage</span>
                <div className="stack-grid">
                  {stackHighlights.map((stack) => (
                    <div className="stack-pill" key={stack}>
                      {stack}
                    </div>
                  ))}
                </div>
                <div className="industry-grid">
                  {nicheKeywords.map((niche) => (
                    <div className="industry-card" key={niche.title}>
                      <h4>{niche.title}</h4>
                      <ul>
                        {niche.keywords.map((keyword) => (
                          <li key={keyword}>{keyword}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FiverrGigsSection />
      <ContactSection style="style-2" btnStyle="" titleStyle="" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={toJsonLd(structuredData)}
      />

      <style>{`
        .about-value-card,
        .about-panel,
        .stat-card,
        .industry-card {
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
        }

        .about-value-card,
        .about-panel {
          height: 100%;
          padding: 30px;
        }

        .about-value-card h3,
        .about-panel h2,
        .info-row h4,
        .industry-card h4 {
          margin-bottom: 12px;
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

        .about-panel.alt {
          background: linear-gradient(180deg, #f7fbff 0%, #eef5ff 100%);
        }

        .process-list,
        .industry-grid {
          display: grid;
          gap: 18px;
        }

        .process-list {
          margin-top: 24px;
        }

        .process-card,
        .info-row {
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }

        .process-card + .process-card,
        .info-row + .info-row {
          margin-top: 20px;
        }

        .process-card strong {
          color: #166fd3;
          font-size: 28px;
          line-height: 1;
          min-width: 40px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 8px;
        }

        .stat-card {
          padding: 22px;
        }

        .stat-card strong {
          display: block;
          color: #166fd3;
          font-size: 28px;
          margin-bottom: 8px;
        }

        .stat-card span {
          color: #5c6574;
        }

        .stack-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 10px 0 28px;
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

        .industry-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .industry-card {
          padding: 20px;
        }

        .industry-card ul {
          margin: 0;
          padding-left: 18px;
        }

        .industry-card li + li {
          margin-top: 8px;
        }

        @media (max-width: 575px) {
          .about-value-card,
          .about-panel,
          .stat-card,
          .industry-card {
            border-radius: 22px;
          }

          .about-value-card,
          .about-panel {
            padding: 22px;
          }

          .stats-grid,
          .industry-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
}
