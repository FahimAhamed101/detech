import BrandSection from "@/components/BrandSection";
import Breadcrumb from "@/components/Breadcrumb";
import { fiverrGigs, fiverrHighlights, fiverrProfile } from "@/utility/fiverrContent";
import Layout from "@/layouts/Layout";

const Page = () => {
  const featuredGig = fiverrGigs[0];

  return (
    <Layout>
      <Breadcrumb pageName="Fiverr Service Details" />
      <section className="service-details fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5">
              <div className="col-12 col-lg-8">
                <div className="service-details-items">
                  <div className="details-image">
                    <img src="assets/img/service/details-1.jpg" alt="img" />
                  </div>
                  <div className="details-content">
                    <h3>{featuredGig.title}</h3>
                    <p>
                      This Fiverr service is tailored for businesses that want a
                      polished online presence with clear communication, reliable
                      delivery, and a modern professional look.
                    </p>
                    <h4>What this Fiverr service includes</h4>
                    <p>
                      Expect responsive sections, clean layout structure,
                      conversion-focused messaging, and an experience designed to
                      help visitors trust the brand quickly.
                    </p>
                    <div className="service-details-video">
                      <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                          <div className="details-video-content">
                            <h3>Why clients choose this gig</h3>
                            <p>
                              It combines strong presentation, practical delivery
                              timelines, and a workflow that is easy to manage
                              through Fiverr.
                            </p>
                            <ul>
                              {fiverrHighlights.map((item) => (
                                <li key={item}>
                                  <i className="far fa-check" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="video-image">
                            <img
                              src="assets/img/service/details-2.jpg"
                              alt="img"
                            />
                            <div className="video-box">
                              <a
                                href={featuredGig.link}
                                target="_blank"
                                rel="noreferrer"
                                className="video-btn ripple"
                              >
                                <i className="fas fa-arrow-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      If you need custom scope beyond the standard package, you
                      can start with a Fiverr message and get a quote before
                      placing the order.
                    </p>
                    <div className="details-image-2">
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <img
                            src="assets/img/service/details-3.jpg"
                            alt="img"
                          />
                        </div>
                        <div className="col-lg-6">
                          <img
                            src="assets/img/service/details-4.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="main-sidebar">
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Featured Fiverr Gigs</h3>
                    </div>
                    <div className="service-category">
                      {fiverrGigs.map((gig, index) => (
                        <a
                          key={gig.title}
                          href={gig.link}
                          target="_blank"
                          rel="noreferrer"
                          className={index === 0 ? "active" : ""}
                        >
                          {gig.title}
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Start Through Fiverr</h3>
                    </div>
                    <form action="#" id="contact-form" className="message-form">
                      <div className="row g-3">
                        <div className="col-lg-12">
                          <div className="single-form-input">
                            <input type="text" placeholder="your name" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="single-form-input">
                            <input type="email" placeholder="email address" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="single-form-input">
                            <textarea
                              placeholder="share your project goals"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <a
                            className="theme-btn"
                            href={fiverrProfile.profileUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>
                              Open Fiverr Profile
                              <i className="fas fa-chevron-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrandSection />
    </Layout>
  );
};

export default Page;
