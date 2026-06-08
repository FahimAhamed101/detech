import { fiverrProfile } from "@/utility/fiverrContent";
import TomTechSelect from "./TomTechSelect";

const ContactSection = ({
  style = "style-1",
  btnStyle = "theme-btn-2",
  titleStyle = "style-2",
}) => {
  return (
    <section
      className="contact-section-2 fix section-padding bg-cover"
      style={{ backgroundImage: 'url("/assets/img/contact-bg.jpg")' }}
      id="contact"
    >
      <div className="contact-image">
        <img src="/assets/img/contact-2.png" alt="contact-img" />
      </div>
      <div className="container">
        <div className="contact-wrapper-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-content">
                <div className={`section-title ${titleStyle}`}>
                  <span className="wow fadeInUp">Start A Project</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Talk to a web, mobile, and AI delivery partner
                  </h2>
                </div>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Share your product goals, the features you need, the preferred
                  stack, and your timeline. You can continue through Fiverr with
                  a fixed scope or a custom quote.
                </p>
                <div className="contact-info-area">
                  <div
                    className={`contact-info-items mb-4 wow fadeInUp ${style}`}
                    data-wow-delay=".7s"
                  >
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="content">
                      <p>Call For Inquiry</p>
                      <h3>
                        <a href={`tel:${fiverrProfile.phone}`}>{fiverrProfile.phone}</a>
                      </h3>
                    </div>
                  </div>
                  <div
                    className={`contact-info-items mb-4 wow fadeInUp ${style}`}
                    data-wow-delay=".8s"
                  >
                    <div className="icon">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="content">
                      <p>Send Email</p>
                      <h3>
                        <a href={`mailto:${fiverrProfile.supportEmail}`}>
                          {fiverrProfile.supportEmail}
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div
                    className={`contact-info-items wow fadeInUp ${style}`}
                    data-wow-delay=".9s"
                  >
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>Address</p>
                      <h3>{fiverrProfile.location}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="contact-box">
                <div className="contact-title">
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    Need a delivery plan?
                  </h3>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    Send the basics here, then continue with the right Fiverr
                    path for a web app, mobile app, or AI automation build.
                  </p>
                </div>
                <div className="contact-form-items">
                  <form action="#" id="contact-form" method="POST">
                    <div className="row g-3">
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                          />
                          <div className="icon">
                            <i className="far fa-user" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                          <div className="icon">
                            <i className="far fa-envelope" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <TomTechSelect
                            items={[
                              { id: 1, title: "Web App Development" },
                              { id: 2, title: "Mobile App Development" },
                              { id: 3, title: "AI Automation" },
                              { id: 4, title: "Dedicated Support" },
                            ]}
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Describe your product, users, required features, and target timeline"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <button
                          type="submit"
                          className={`theme-btn center d-block ${btnStyle}`}
                        >
                          <span>
                            Send Project Brief
                            <i className="fas fa-chevron-right" />
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
      </div>
    </section>
  );
};

export default ContactSection;
