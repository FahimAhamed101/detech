import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/layouts/Layout";
import { agencyFaqs, fiverrProfile } from "@/utility/fiverrContent";
import {
  buildMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
  getOrganizationSchema,
  toJsonLd,
} from "@/utility/seo";

export const metadata = buildMetadata({
  title: "FAQ for Web App Development, Mobile Apps, and AI Automation",
  description:
    "Read common client questions about TomTech web app development, mobile app delivery, AI automation workflows, Fiverr engagement, and project planning.",
  path: "/faq",
  keywords: [
    "web app development faq",
    "mobile app development faq",
    "AI automation faq",
    "software project questions",
  ],
});

const structuredData = [
  getOrganizationSchema(),
  getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ]),
  getFaqSchema(agencyFaqs),
];

export default function FaqPage() {
  return (
    <Layout>
      <Breadcrumb pageName="TomTech FAQ" />

      <section className="faq-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Agency FAQ</span>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Answers for buyers planning web, mobile, and AI projects
            </h2>
            <p className="faq-intro wow fadeInUp" data-wow-delay=".4s">
              These answers match the services shown across the site so the page
              can work both as a buying guide and as visible FAQ content for
              search engines.
            </p>
          </div>

          <div className="row g-4 mt-2">
            {agencyFaqs.map((item) => (
              <div className="col-lg-6" key={item.question}>
                <div className="faq-card">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-cta">
            <div>
              <span className="section-tag">Need A Custom Scope?</span>
              <h3>Send a project brief and get the right next step</h3>
              <p>
                Use Fiverr for the fastest start, or send an email if you want
                a tailored delivery plan before ordering.
              </p>
            </div>
            <div className="faq-cta-actions">
              <a
                href={fiverrProfile.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="theme-btn"
              >
                <span>
                  Open Fiverr Profile
                  <i className="fas fa-chevron-right" />
                </span>
              </a>
              <a
                href={`mailto:${fiverrProfile.supportEmail}`}
                className="theme-btn bg-white"
              >
                <span>
                  Email Questions
                  <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={toJsonLd(structuredData)}
      />

      <style>{`
        .faq-intro {
          max-width: 820px;
          margin: 18px auto 0;
        }

        .faq-card,
        .faq-cta {
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
        }

        .faq-card {
          height: 100%;
          padding: 30px;
        }

        .faq-card h3 {
          margin-bottom: 14px;
          font-size: 24px;
          line-height: 1.3;
        }

        .faq-cta {
          margin-top: 32px;
          padding: 30px;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: center;
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

        .faq-cta h3 {
          margin-bottom: 10px;
        }

        .faq-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        @media (max-width: 991px) {
          .faq-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 575px) {
          .faq-card,
          .faq-cta {
            border-radius: 22px;
            padding: 22px;
          }
        }
      `}</style>
    </Layout>
  );
}
