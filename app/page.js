"use client";

import FiverrGigsSection from "@/components/FiverrGigsSection";
import Layout from "@/layouts/Layout";
import {
  capabilityKeywords,
  deliverySteps,
  engagementModels,
  fiverrProfile,
  homepageFaqs,
  nicheKeywords,
  serviceAreas,
  siteConfig,
  stackHighlights,
  stats,
} from "@/utility/fiverrContent";
import Link from "next/link";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.siteName,
  description: siteConfig.description,
  areaServed: "Worldwide",
  email: fiverrProfile.supportEmail,
  telephone: fiverrProfile.phone,
  url: siteConfig.siteUrl || undefined,
  sameAs: [fiverrProfile.profileUrl],
  serviceType: [
    "Web app development",
    "Mobile app development",
    "AI automation services",
    "MERN stack development",
    "Laravel development",
    "Django development",
    "FastAPI development",
    "Flask development",
    ".NET development",
    "Angular development",
    "Vue.js development",
    "Flutter development",
    "React Native development",
    "Kotlin Android development",
    "Swift iOS development",
  ],
};

export default function HomePage() {
  return (
    <Layout footer={1} header={1}>
      <section className="hero-section hero-1 hero-seo-section">
        <div className="slide-bg">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <div className="hero-content">
                  <span className="hero-kicker">
                    Web app, mobile app, and AI automation services
                  </span>
                  <h1>
                    Hire experts for MERN, Laravel, Django, FastAPI, Flask,
                    .NET, Angular, Vue, Flutter, React Native, Kotlin, Swift,
                    and AI services through Fiverr
                  </h1>
                  <p className="hero-copy">
                    TomTech is positioned for clients searching for a custom web
                    app development company, cross-platform mobile app
                    development services, dedicated development teams, and
                    offshore software outsourcing for serious business builds.
                  </p>
                  <div className="hero-actions">
                    <a
                      href={fiverrProfile.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="theme-btn"
                    >
                      <span>
                        Hire on Fiverr
                        <i className="fas fa-chevron-right" />
                      </span>
                    </a>
                    <Link href="/contact" className="theme-btn bg-white">
                      <span>
                        Send Project Brief
                        <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                  </div>
                  <div className="hero-tags">
                    {capabilityKeywords.map((keyword) => (
                      <span key={keyword}>{keyword}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="hero-panel">
                  <p className="panel-label">Best-Fit Clients</p>
                  <h3>Built for business owners, founders, and product teams</h3>
                  <ul>
                    <li>Web apps for SaaS, admin panels, and custom platforms</li>
                    <li>Flutter, React Native, Kotlin, and Swift mobile builds</li>
                    <li>.NET, Django, FastAPI, Flask, Laravel, MERN, Angular, and Vue delivery</li>
                    <li>Python and AI automation for real business workflows</li>
                    <li>Dedicated team and outsourced delivery options</li>
                  </ul>
                  <div className="hero-mini-cta">
                    <a
                      href={fiverrProfile.primaryGigUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open Fiverr and send project details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="stats-grid">
              {stats.map((item) => (
                <div key={item.label} className="stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FiverrGigsSection priority />

      <section className="section-padding pb-0" id="service">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Core Services</span>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              High-intent service positioning for web apps, mobile apps, and AI
            </h2>
          </div>
          <div className="row g-4 mt-2">
            {serviceAreas.map((service) => (
              <div className="col-lg-4 col-md-6" key={service.title}>
                <div className="seo-service-card">
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

      <section className="section-padding pt-0">
        <div className="container">
          <div className="stack-band">
            <div className="stack-copy">
              <span className="section-tag">Technology Focus</span>
              <h2>Visible stack keywords that qualified buyers actually search</h2>
              <p>
                The homepage now clearly signals capability across modern web,
                mobile, and automation stacks so serious clients recognize the
                services immediately.
              </p>
            </div>
            <div className="stack-grid">
              {stackHighlights.map((stack) => (
                <div key={stack} className="stack-pill">
                  {stack}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0" id="about">
        <div className="container">
          <div className="seo-content-wrap">
            <div className="row g-4 align-items-start">
              <div className="col-lg-6">
                <div className="seo-info-card">
                  <span className="section-tag">Engagement Models</span>
                  <h2>Flexible delivery for one-off projects and long-term work</h2>
                  {engagementModels.map((item) => (
                    <div key={item.title} className="model-row">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="seo-info-card alt">
                  <span className="section-tag">How It Works</span>
                  {deliverySteps.map((step, index) => (
                    <div key={step.title} className="process-row">
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
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Niche Targeting</span>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Industry keywords that usually convert better than generic terms
            </h2>
          </div>
          <div className="row g-4 mt-2">
            {nicheKeywords.map((niche) => (
              <div className="col-lg-3 col-md-6" key={niche.title}>
                <div className="niche-card">
                  <h4>{niche.title}</h4>
                  <ul>
                    {niche.keywords.map((keyword) => (
                      <li key={keyword}>{keyword}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">SEO Focus</span>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Long-tail keywords aimed at clients ready to buy
            </h2>
          </div>
          <div className="keyword-grid">
            {capabilityKeywords.map((keyword) => (
              <div key={keyword} className="keyword-pill">
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0" id="faq">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">FAQ</span>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Common questions from Fiverr clients looking for serious builds
            </h2>
          </div>
          <div className="row g-4 mt-2">
            {homepageFaqs.map((item) => (
              <div className="col-lg-6" key={item.question}>
                <div className="faq-card">
                  <h4>{item.question}</h4>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-chat-section section-padding pt-0" id="contact">
        <div className="container">
          <div className="cta-chat-wrapper seo-cta-wrapper">
            <div className="chat-items">
              <div className="icon">
                <i className="flaticon-chat" />
              </div>
              <div className="content">
                <h3>Ready to discuss a web app, mobile app, or AI automation project?</h3>
                <p>
                  Use Fiverr to start scope discussion, pricing, delivery
                  planning, and stack selection.
                </p>
              </div>
            </div>
            <a
              href={fiverrProfile.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="theme-btn bg-white"
            >
              <span>
                Go to Fiverr Directly
                <i className="fas fa-chevron-right" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <style jsx>{`
        .hero-seo-section .slide-bg {
          padding: 150px 0 90px;
          background:
            radial-gradient(circle at top left, rgba(22, 111, 211, 0.18), transparent 32%),
            radial-gradient(circle at right, rgba(32, 201, 151, 0.12), transparent 24%),
            linear-gradient(135deg, #07111f 0%, #0f2747 55%, #123764 100%);
        }

        .hero-kicker {
          display: inline-block;
          margin-bottom: 18px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          color: #d8ecff;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .hero-content h1 {
          color: #fff;
          font-size: clamp(2.4rem, 5vw, 4.5rem);
          line-height: 1.08;
          max-width: 820px;
        }

        .hero-copy {
          color: rgba(255, 255, 255, 0.82);
          font-size: 18px;
          max-width: 720px;
          margin-top: 22px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 34px;
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .hero-tags span,
        .keyword-pill,
        .stack-pill {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          padding: 10px 16px;
          border-radius: 999px;
          font-size: 14px;
          line-height: 1.4;
        }

        .hero-tags span {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
        }

        .hero-panel,
        .seo-service-card,
        .seo-info-card,
        .faq-card,
        .stat-card,
        .niche-card,
        .stack-band {
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
        }

        .hero-panel {
          padding: 34px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .panel-label,
        .section-tag {
          display: inline-block;
          color: #166fd3;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .hero-panel h3 {
          margin-bottom: 18px;
        }

        .hero-panel ul,
        .niche-card ul {
          margin: 0;
          padding-left: 18px;
        }

        .hero-panel li + li,
        .niche-card li + li {
          margin-top: 10px;
        }

        .hero-mini-cta {
          margin-top: 24px;
        }

        .hero-mini-cta a {
          color: #166fd3;
          font-weight: 700;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-top: 44px;
        }

        .stat-card {
          padding: 24px;
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

        .seo-service-card,
        .seo-info-card,
        .faq-card,
        .niche-card {
          height: 100%;
          padding: 30px;
        }

        .seo-service-card h3,
        .faq-card h4,
        .niche-card h4 {
          margin-bottom: 14px;
        }

        .seo-service-card ul {
          margin: 18px 0 0;
          padding-left: 18px;
        }

        .seo-service-card li + li {
          margin-top: 8px;
        }

        .stack-band {
          padding: 34px;
          background:
            radial-gradient(circle at top left, rgba(22, 111, 211, 0.08), transparent 30%),
            linear-gradient(180deg, #f7fbff 0%, #ffffff 100%);
        }

        .stack-copy p {
          max-width: 760px;
        }

        .stack-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 24px;
        }

        .stack-pill {
          background: #0f2747;
          color: #fff;
          border: 1px solid transparent;
        }

        .seo-content-wrap {
          padding: 18px 0;
        }

        .seo-info-card.alt {
          background: linear-gradient(180deg, #f7fbff 0%, #eef5ff 100%);
        }

        .process-row,
        .model-row {
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }

        .process-row + .process-row,
        .model-row + .model-row {
          margin-top: 22px;
        }

        .process-row strong {
          color: #166fd3;
          font-size: 28px;
          line-height: 1;
          min-width: 38px;
        }

        .process-row h4,
        .model-row h4 {
          margin-bottom: 8px;
        }

        .model-row {
          display: block;
        }

        .keyword-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 26px;
        }

        .keyword-pill {
          background: #0f2747;
          color: #fff;
          border: 1px solid transparent;
        }

        .seo-cta-wrapper {
          background:
            radial-gradient(circle at left top, rgba(32, 201, 151, 0.16), transparent 28%),
            linear-gradient(135deg, #0d2039 0%, #123764 100%);
        }

        .seo-cta-wrapper .content h3,
        .seo-cta-wrapper .content p {
          color: #fff;
        }

        @media (max-width: 991px) {
          .hero-seo-section .slide-bg {
            padding: 130px 0 72px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 575px) {
          .hero-panel,
          .seo-service-card,
          .seo-info-card,
          .faq-card,
          .stat-card,
          .niche-card,
          .stack-band {
            border-radius: 22px;
          }

          .hero-panel,
          .seo-service-card,
          .seo-info-card,
          .faq-card,
          .niche-card,
          .stack-band {
            padding: 22px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .hero-tags span,
          .keyword-pill,
          .stack-pill {
            width: 100%;
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </Layout>
  );
}
