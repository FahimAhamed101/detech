import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/layouts/Layout";
const page = () => {
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
                    <span className="wow fadeInUp">Get In Touch</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Contact Us
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque inventore
                  </p>
                  <div className="row g-4 mt-3">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="content">
                          <h5>Location</h5>
                          <p>
                            55 Main street, 2nd block, <br />
                            Melbourne, Australia
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
                          <a href="tel:+09354587874">+09 354 587 874 </a> <br />
                          <a href="tel:+01368567894">+01 368 567 894</a>
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
                          <a href="mailto:info@example.com" className="link">
                            info@example.com
                          </a>{" "}
                          <br />
                          <a href="mailto:info@example.com" className="link">
                            info@example.com
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
                          <h5>Social</h5>
                          <div className="social-icon d-flex align-items-center">
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fab fa-vimeo-v" />
                            </a>
                            <a href="#">
                              <i className="fab fa-pinterest-p" />
                            </a>
                          </div>
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
                      Fill Up The Form
                    </h3>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>
                  <form action="contact.php" id="contact-form" method="POST">
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
                            placeholder="Enter Your Messege here"
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
                            Get In Touch
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
      {/*<< Map Section Start >>*/}
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
export default page;
