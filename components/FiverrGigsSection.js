"use client";
import { fiverrGigs, fiverrProfile } from "@/utility/fiverrContent";

const FiverrGigsSection = ({ priority = false }) => {
  return (
    <section
      className={`fiverr-gigs-section section-padding pt-0 ${
        priority ? "priority-placement" : ""
      }`}
    >
      <div className="container">
        <div className="fiverr-gigs-wrap">
          <div className="row align-items-end g-4">
            <div className="col-lg-8">
              <div className="section-title mb-0">
                <span className="wow fadeInUp">
                  {priority ? "Top Fiverr Offers" : "Hire Through Fiverr"}
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  {priority
                    ? "See the Fiverr services first and click before visitors leave"
                    : "Choose the right service and go straight to Fiverr"}
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  {priority
                    ? "This section is intentionally placed right under the hero so users can reach Fiverr at the highest-intent moment for better click-through and lead capture."
                    : "Clients can review the service focus, compare options, and message directly on Fiverr before starting a mobile app, website, or automation project."}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="fiverr-profile-link wow fadeInUp"
                data-wow-delay=".3s"
              >
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
              </div>
            </div>
          </div>
          <div className="row g-4 mt-4">
            {fiverrGigs.map((gig, index) => (
              <div className="col-xl-4 col-md-6" key={gig.title}>
                <div
                  className="fiverr-gig-card wow fadeInUp"
                  data-wow-delay={`.${index + 2}s`}
                >
                  <div className="gig-top">
                    <span className="gig-badge">{gig.category}</span>
                    <h3>{gig.title}</h3>
                    <p>{gig.description}</p>
                  </div>
                  <div className="gig-meta">
                    <div>
                      <span>Pricing</span>
                      <strong>{gig.startingPrice}</strong>
                    </div>
                    <div>
                      <span>Delivery</span>
                      <strong>{gig.delivery}</strong>
                    </div>
                  </div>
                  <a
                    href={gig.link}
                    target="_blank"
                    rel="noreferrer"
                    className="theme-btn hover-white"
                  >
                    <span>
                      {gig.ctaLabel || "Open Fiverr"}
                      <i className="fas fa-chevron-right" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .fiverr-gigs-section {
          background:
            radial-gradient(circle at top left, rgba(32, 201, 151, 0.14), transparent 34%),
            linear-gradient(180deg, #f7fbff 0%, #eef5ff 100%);
        }

        .priority-placement {
          position: relative;
          z-index: 5;
          margin-top: -72px;
          padding-bottom: 64px;
          background: transparent;
        }

        .fiverr-gigs-wrap {
          padding: 48px;
          border-radius: 32px;
          background: #ffffff;
          box-shadow: 0 22px 60px rgba(15, 23, 42, 0.08);
        }

        .fiverr-profile-link {
          display: flex;
          justify-content: flex-end;
        }

        .fiverr-gig-card {
          height: 100%;
          padding: 30px;
          border-radius: 26px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          background:
            linear-gradient(180deg, rgba(32, 201, 151, 0.1) 0%, rgba(255, 255, 255, 0.98) 40%),
            #ffffff;
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
          display: flex;
          flex-direction: column;
          gap: 24px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .fiverr-gig-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 50px rgba(15, 23, 42, 0.12);
        }

        .gig-badge {
          display: inline-flex;
          align-items: center;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(32, 201, 151, 0.14);
          color: #12966f;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .gig-top h3 {
          font-size: 28px;
          line-height: 1.2;
          margin-bottom: 14px;
        }

        .gig-top p {
          margin-bottom: 0;
          color: #5c6574;
        }

        .gig-meta {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: auto;
        }

        .gig-meta div {
          padding: 16px 18px;
          border-radius: 18px;
          background: #f8fafc;
          border: 1px solid rgba(15, 23, 42, 0.06);
        }

        .gig-meta span {
          display: block;
          color: #64748b;
          font-size: 13px;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .gig-meta strong {
          color: #0f172a;
          font-size: 18px;
          font-weight: 700;
        }

        @media (max-width: 991px) {
          .priority-placement {
            margin-top: -44px;
          }

          .fiverr-gigs-wrap {
            padding: 36px 24px;
          }

          .fiverr-profile-link {
            justify-content: flex-start;
          }
        }

        @media (max-width: 575px) {
          .priority-placement {
            margin-top: -24px;
            padding-bottom: 48px;
          }

          .fiverr-gigs-wrap {
            padding: 28px 18px;
            border-radius: 24px;
          }

          .fiverr-gig-card {
            padding: 24px 20px;
          }

          .gig-top h3 {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default FiverrGigsSection;
