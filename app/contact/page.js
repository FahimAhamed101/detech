import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/layouts/Layout";
import {
  fiverrGigs,
  fiverrProfile,
  serviceAreas,
} from "@/utility/fiverrContent";
import {
  buildMetadata,
  getBreadcrumbSchema,
  getOrganizationSchema,
  toJsonLd,
} from "@/utility/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Contact TomTech for Web, Mobile, and AI Projects",
  description:
    "Contact TomTech to discuss custom web app development, mobile app development, MVP delivery, or AI automation work through Fiverr or direct project planning.",
  path: "/contact",
  keywords: [
    "contact web app development agency",
    "mobile app development quote",
    "AI automation consultation",
    "software project inquiry",
  ],
});

const structuredData = [
  getOrganizationSchema(),
  getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]),
];

const briefChecklist = [
  "Business goal or workflow problem to solve",
  "Target users, platforms, and required integrations",
  "Must-have features and launch timeline",
  "Preferred stack if you already have one",
];

export default function ContactPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Contact TomTech" />

      <section className="contact-main-area fix section-padding">
        <div className="container">
          <div className="contact-main-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-panel">
                  <div className="section-title mb-2">
                    <span className="wow fadeInUp">Project Inquiry</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Start a web, mobile, or AI automation project with clear
                      next steps
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                    Use the Fiverr profile for a fast start, open the featured
                    gig for the primary web app offer, or send a direct email
                    with your scope if you need a custom delivery plan.
                  </p>
                  <div className="d-flex flex-wrap gap-3 mt-4 wow fadeInUp" data-wow-delay=".5s">
                    <a
                      href={fiverrProfile.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="theme-btn"
                    >
                      <span>
                        View Fiverr Profile
                        <i className="fas fa-chevron-right" />
                      </span>
                    </a>
                    <a
                      href={fiverrProfile.primaryGigUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="theme-btn bg-white"
                    >
                      <span>
                        Open Featured Gig
                        <i className="fas fa-chevron-right" />
                      </span>
                    </a>
                  </div>

                  <div className="row g-4 mt-3">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="content">
                          <h5>Location</h5>
                          <p>{fiverrProfile.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="far fa-phone" />
                        </div>
                        <div className="content">
                          <h5>Phone</h5>
                          <a href={`tel:${fiverrProfile.phone}`}>{fiverrProfile.phone}</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fal fa-envelope" />
                        </div>
                        <div className="content">
                          <h5>Email</h5>
                          <a href={`mailto:${fiverrProfile.supportEmail}`} className="link">
                            {fiverrProfile.supportEmail}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".9s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fad fa-share-alt" />
                        </div>
                        <div className="content">
                          <h5>Fastest Path</h5>
                          <p>{fiverrProfile.responseTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-mini-grid">
                    {fiverrGigs.map((gig) => (
                      <a
                        key={gig.title}
                        href={gig.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mini-gig-card"
                      >
                        <span>{gig.category}</span>
                        <strong>{gig.title}</strong>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="contact-panel alt">
                  <div className="contact-title">
                    <h3 className="wow fadeInUp" data-wow-delay=".3s">
                      What to include in your project brief
                    </h3>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                      Strong briefs lead to faster scoping, better estimates,
                      and cleaner delivery planning.
                    </p>
                  </div>

                  <div className="brief-list">
                    {briefChecklist.map((item, index) => (
                      <div className="brief-item" key={item}>
                        <strong>0{index + 1}</strong>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="service-interest">
                    <h4>Common service categories</h4>
                    <div className="row g-3 mt-1">
                      {serviceAreas.map((service) => (
                        <div className="col-md-6" key={service.title}>
                          <div className="service-chip-card">
                            <h5>{service.title}</h5>
                            <p>{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="contact-actions">
                    <a
                      href={`mailto:${fiverrProfile.supportEmail}?subject=Project%20Brief%20for%20TomTech`}
                      className="theme-btn"
                    >
                      <span>
                        Email Project Brief
                        <i className="fas fa-chevron-right" />
                      </span>
                    </a>
                    <Link href="/service" className="theme-btn bg-white">
                      <span>
                        Review Services
                        <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={toJsonLd(structuredData)}
      />

      <style jsx>{`
        .contact-panel,
        .mini-gig-card,
        .service-chip-card {
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
        }

        .contact-panel {
          height: 100%;
          padding: 30px;
        }

        .contact-panel.alt {
          background: linear-gradient(180deg, #f7fbff 0%, #eef5ff 100%);
        }

        .service-mini-grid {
          display: grid;
          gap: 14px;
          margin-top: 26px;
        }

        .mini-gig-card {
          display: block;
          padding: 18px 20px;
          border: 1px solid rgba(15, 23, 42, 0.06);
          color: inherit;
        }

        .mini-gig-card span {
          display: block;
          color: #166fd3;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .brief-list {
          display: grid;
          gap: 16px;
          margin-top: 24px;
        }

        .brief-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .brief-item strong {
          color: #166fd3;
          font-size: 28px;
          line-height: 1;
          min-width: 40px;
        }

        .service-interest {
          margin-top: 28px;
        }

        .service-chip-card {
          height: 100%;
          padding: 18px;
        }

        .service-chip-card h5 {
          margin-bottom: 8px;
        }

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 28px;
        }

        @media (max-width: 575px) {
          .contact-panel,
          .mini-gig-card,
          .service-chip-card {
            border-radius: 22px;
          }

          .contact-panel {
            padding: 22px;
          }
        }
      `}</style>
    </Layout>
  );
}
