"use client";
import Link from "next/link";
import ProgressBar from "./ProgressBar";
const AboutSection = () => {
  return (
    <div className="container">
      <div className="about-wrapper">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-image-items">
              <div className="circle-shape">
                <img
                  src="assets/img/about/circle.png"
                  alt="img"
                  className="text-circle"
                />
                <div className="award-img">
                  <img src="assets/img/about/award.png" alt="img" />
                </div>
              </div>
              <div className="border-shape">
                <img src="assets/img/about/border-shape.png" alt="shape-img" />
              </div>
              <div
                className="about-image bg-cover wow fadeInLeft"
                data-wow-delay=".3s"
                style={{
                  backgroundImage: 'url("assets/img/about/about.jpg")',
                }}
              >
                <div
                  className="about-image-2 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/about/about-2.jpg" alt="about-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="about-content">
              <div className="section-title">
                <span className="wow fadeInUp">5m+ Trusted Our Clients</span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  We Prominent Truly trusted IT business solutions
                </h2>
              </div>
              <p className=" mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                Transmds is the world’s driving worldwide coordinations supplier
                — we uphold industry and exchange the worldwide trade of
                merchandi
              </p>
              <div className="circle-progress-bar-wrapper">
                <div
                  className="single-circle-bar wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <ProgressBar value={68} color={"#166FD3"} />
                  <div className="content">
                    <h6>
                      Business <br />
                      Strategy
                    </h6>
                  </div>
                </div>
                <div
                  className="single-circle-bar wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <ProgressBar value={93} color={"#166FD3"} />
                  <div className="content">
                    <h6>
                      Real Technology <br />
                      Solutions
                    </h6>
                  </div>
                </div>
              </div>
              <ul className="about-list wow fadeInUp" data-wow-delay=".7s">
                <li>
                  <i className="far fa-check me-2" />
                  Professional Team Member
                </li>
                <li>
                  <i className="far fa-check me-2" />
                  Awards Winning IT Solutions Company
                </li>
                <li>
                  <i className="far fa-check me-2" />
                  Dedicated Tech Services
                </li>
              </ul>
              <div className="about-author">
                <div className="about-button wow fadeInUp" data-wow-delay=".8s">
                  <Link href="about" className="theme-btn">
                    <span>
                      Explore more about
                      <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
                <div className="author-image wow fadeInUp" data-wow-delay=".9s">
                  <img src="assets/img/about/author.png" alt="author-img" />
                  <div className="content">
                    <img src="assets/img/about/signature.png" alt="signature" />
                    <p>Ceo &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
