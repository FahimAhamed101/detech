import { fiverrProfile } from "@/utility/fiverrContent";
import Link from "next/link";
import { Fragment } from "react";

const Newsletter = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <div className="newsletter-area">
          <div className="shape-1">
            <img src="assets/img/footer-shape.png" alt="shape-img" />
          </div>
          <div className="shape-2">
            <img src="assets/img/footer-shape-2.png" alt="shape-img" />
          </div>
          <div className="newsletter-title">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Start Your Fiverr Project
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Send your project brief and move the conversation to Fiverr fast.
            </p>
          </div>
          <div className="newsletter-items">
            <div className="form-clt wow fadeInUp" data-wow-delay=".3s">
              <input
                type="text"
                name="email"
                id="email2"
                placeholder="Email Address"
              />
            </div>
            <a
              href={fiverrProfile.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="theme-btn hover-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span>
                Open Fiverr <i className="far fa-arrow-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;
    default:
      return <Footer2 />;
  }
};

export default Footer;

const FooterMenu = () => {
  return (
    <Fragment>
      <div
        className="col-xl-2 ps-lg-5 col-sm-6 col-md-3 col-lg-3 wow fadeInUp"
        data-wow-delay=".4s"
      >
        <div className="single-footer-widget">
          <div className="widget-head">
            <h5>Quick Links</h5>
          </div>
          <ul className="list-items">
            <li>
              <Link href="service">Fiverr Services</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <Link href="contact">Contact</Link>
            </li>
            <li>
              <Link href="team">Portfolio Team</Link>
            </li>
            <li>
              <Link href="news">Latest Updates</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="col-xl-2 ps-lg-4 col-sm-6 col-md-3 col-lg-3 wow fadeInUp"
        data-wow-delay=".6s"
      >
        <div className="single-footer-widget">
          <div className="widget-head">
            <h5>Client Help</h5>
          </div>
          <ul className="list-items">
            <li>
              <a href={fiverrProfile.profileUrl} target="_blank" rel="noreferrer">
                Fiverr Profile
              </a>
            </li>
            <li>
              <a
                href={fiverrProfile.primaryGigUrl}
                target="_blank"
                rel="noreferrer"
              >
                Featured Gig
              </a>
            </li>
            <li>
              <Link href="faq">Help &amp; FAQ</Link>
            </li>
            <li>
              <Link href="contact">Project Inquiry</Link>
            </li>
            <li>
              <a href={`mailto:${fiverrProfile.supportEmail}`}>
                Email Support
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="col-xl-2 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
        data-wow-delay=".8s"
      >
        <div className="single-footer-widget">
          <div className="widget-head">
            <h5>Work With Me</h5>
          </div>
          <div className="footer-address-text">
            <p>
              Available worldwide through Fiverr for website design, redesign,
              and frontend development.
            </p>
            <h5>Response Time:</h5>
            <p>
              Quick replies for new project discussions <br />
              Monday to Saturday
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const FooterCopyRight = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="footer-wrapper d-flex align-items-center justify-content-between">
          <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
            Copyright © {new Date().getFullYear()} <Link href="/">DalTech</Link>.
            {" "}All Rights Reserved.
          </p>
          <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
            <li>
              <Link href="about">Company</Link>
            </li>
            <li>
              <Link href="contact">Support</Link>
            </li>
            <li>
              <a href={fiverrProfile.profileUrl} target="_blank" rel="noreferrer">
                Fiverr
              </a>
            </li>
            <li>
              <Link href="faq">Faqs</Link>
            </li>
          </ul>
        </div>
      </div>
      <a href="#" id="scrollUp" className="scroll-icon">
        <i className="far fa-arrow-up" />
      </a>
    </div>
  );
};

const FooterRight = () => {
  return (
    <div
      className="col-xl-3 ps-xl-5 col-sm-6 col-md-6 col-lg-4 wow fadeInUp"
      data-wow-delay=".9s"
    >
      <div className="single-footer-widget">
        <div className="widget-head">
          <h5>Hire on Fiverr</h5>
        </div>
        <div className="footer-apps-items">
          <p>Browse gigs, compare packages, and start your project professionally.</p>
          <div className="apps-image d-flex align-items-center">
            <a href={fiverrProfile.profileUrl} target="_blank" rel="noreferrer">
              <img src="assets/img/app-store.png" alt="Fiverr profile" />
            </a>
            <a
              href={fiverrProfile.primaryGigUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img src="assets/img/google-play.png" alt="Featured Fiverr gig" />
            </a>
          </div>
          <div className="support-text">
            <p>Phone &amp; Fiverr support</p>
            <h3>
              <a href={`tel:${fiverrProfile.phone}`}>{fiverrProfile.phone}</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterLeft = () => {
  return (
    <div
      className="col-xl-3 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
      data-wow-delay=".2s"
    >
      <div className="single-footer-widget">
        <div className="widget-head">
          <Link href="/">
            <img src="assets/img/logo/footer-logo.svg" alt="logo-img" />
          </Link>
        </div>
        <div className="footer-content">
          <p>
            Premium Fiverr-based website services for modern businesses,
            startups, and creators.
          </p>
          <span>Ready to discuss your project?</span> <br />
          <a href={`mailto:${fiverrProfile.supportEmail}`} className="link">
            {fiverrProfile.supportEmail}
          </a>
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
            <a href={fiverrProfile.profileUrl} target="_blank" rel="noreferrer">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer1 = () => {
  return (
    <footer className="footer-section footer-bg section-padding pb-0">
      <div className="container">
        <Newsletter />
        <div className="footer-widgets-wrapper">
          <div className="row">
            <FooterLeft />
            <FooterMenu />
            <FooterRight />
          </div>
        </div>
      </div>
      <FooterCopyRight />
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer className="footer-section section-bg-3">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <FooterLeft />
            <FooterMenu />
            <FooterRight />
          </div>
        </div>
      </div>
      <FooterCopyRight />
    </footer>
  );
};

const Footer3 = () => {
  return (
    <footer className="footer-section section-bg-3">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo wow fadeInUp" data-wow-delay=".3s">
            <Link href="/">
              <img src="assets/img/logo/footer-logo-2.svg" alt="img" />
            </Link>
          </div>
          <ul className="wow fadeInUp" data-wow-delay=".5s">
            <li>
              <i className="fab fa-facebook-f" />
              <a href="#">Facebook</a>
            </li>
            <li>
              <i className="fab fa-twitter" />
              <a href="#">Twitter</a>
            </li>
            <li>
              <i className="fab fa-linkedin-in" />
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <i className="fab fa-instagram" />
              <a href={fiverrProfile.profileUrl} target="_blank" rel="noreferrer">
                Fiverr
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-6 col-sm-12 col-md-8 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-footer-widget me-4">
                <div className="widget-head">
                  <h3>Hire Through Fiverr</h3>
                </div>
                <div className="footer-content">
                  <p>
                    Browse packages, message before ordering, and start your
                    website project with a clean professional workflow.
                  </p>
                  <div className="newsletter-items">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="email"
                        id="email3"
                        placeholder="Email Address"
                      />
                    </div>
                    <a
                      href={fiverrProfile.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="theme-btn hover-white"
                    >
                      <span>
                        Open Fiverr <i className="fas fa-chevron-right" />
                      </span>
                    </a>
                  </div>
                  <h6 className="label-text">
                    By reaching out, you accept project communication through
                    Fiverr or email.
                  </h6>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 ps-lg-5 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Featured Services</h5>
                </div>
                <ul className="list-items">
                  <li>
                    <a
                      href={fiverrProfile.primaryGigUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Business Website
                    </a>
                  </li>
                  <li>
                    <a href={fiverrProfile.profileUrl} target="_blank" rel="noreferrer">
                      Next.js Landing Page
                    </a>
                  </li>
                  <li>
                    <a href={fiverrProfile.profileUrl} target="_blank" rel="noreferrer">
                      Website Redesign
                    </a>
                  </li>
                  <li>
                    <a href={fiverrProfile.profileUrl} target="_blank" rel="noreferrer">
                      Frontend Fixes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 ps-lg-5 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Contact</h5>
                </div>
                <div className="footer-address-text">
                  <p>Available worldwide for Fiverr orders and custom inquiries.</p>
                  <h5>Email</h5>
                  <a href={`mailto:${fiverrProfile.supportEmail}`} className="link-mail">
                    {fiverrProfile.supportEmail}
                  </a>
                  <h5 className="pt-3">
                    <a href={`tel:${fiverrProfile.phone}`}>{fiverrProfile.phone}</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInUp color-2" data-wow-delay=".4s">
              Copyright © {new Date().getFullYear()} <Link href="/">DalTech</Link>.
              {" "}All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer4 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <FooterLeft />
            <FooterMenu />
            <FooterRight />
          </div>
        </div>
      </div>
      <FooterCopyRight />
    </footer>
  );
};
