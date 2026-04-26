import Breadcrumb from "@/components/Breadcrumb";
import { fiverrGigs, fiverrProfile } from "@/utility/fiverrContent";
import Layout from "@/layouts/Layout";

const Page = () => {
  return (
    <Layout>
      <Breadcrumb pageName="Contact Us" />
      <section className="contact-main-area fix section-padding">
        <div className="container">
          <div className="contact-main-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title mb-2">
                    <span className="wow fadeInUp">Fiverr Contact Options</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Start Your Project Professionally
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                    You can order directly from Fiverr, message first for a custom
                    quote, or contact me by phone and email for project planning.
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
                          <h5>Address</h5>
                          <p>
                            {fiverrProfile.location}
                          </p>
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
                          <h5>Popular Fiverr Services</h5>
                          <p>{fiverrGigs[0].title}</p>
                          <p>{fiverrGigs[1].title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="contact-image wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <img src="assets/img/contact.jpg" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="contact-form-items">
                  <div className="contact-title">
                    <h3 className="wow fadeInUp" data-wow-delay=".3s">
                      Send Project Details
                    </h3>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                      Share your goals, preferred pages, style direction, and
                      timeline. You can then continue through Fiverr for the
                      final order.
                    </p>
                  </div>
                  <form action="#" id="contact-form" method="POST">
                    <div className="row g-4">
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name*"
                          />
                          <div className="icon">
                            <i className="fal fa-user" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Address*"
                          />
                          <div className="icon">
                            <i className="fal fa-envelope" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Tell me what you need built, redesigned, or fixed"
                            defaultValue={""}
                          />
                          <div className="icon">
                            <i className="fal fa-edit" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".8s"
                      >
                        <button type="submit" className="theme-btn">
                          <span>
                            <i className="fal fa-paper-plane" />
                            Send Inquiry
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map-section">
        <div className="google-map wow fadeInUp" data-wow-delay=".7s">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Page;
