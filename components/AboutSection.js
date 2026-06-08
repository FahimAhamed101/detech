"use client";
import { fiverrHighlights, fiverrProfile } from "@/utility/fiverrContent";
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
                  src="/assets/img/about/circle.png"
                  alt="img"
                  className="text-circle"
                />
                <div className="award-img">
                  <img src="/assets/img/about/award.png" alt="img" />
                </div>
              </div>
              <div className="border-shape">
                <img src="/assets/img/about/border-shape.png" alt="shape-img" />
              </div>
              <div
                className="about-image bg-cover wow fadeInLeft"
                data-wow-delay=".3s"
                style={{
                  backgroundImage: 'url("/assets/img/about/about.jpg")',
                }}
              >
                <div
                  className="about-image-2 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="/assets/img/about/about-2.jpg" alt="about-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="about-content">
                <div className="section-title">
                  <span className="wow fadeInUp">About The Agency</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Agency-grade delivery for web apps, mobile apps, and AI
                    automation
                  </h2>
                </div>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  TomTech helps startups, agencies, and established businesses
                  build modern digital products through a streamlined
                  Fiverr-first workflow that keeps scope, communication, and
                  delivery organized.
                </p>
              <div className="circle-progress-bar-wrapper">
                <div
                  className="single-circle-bar wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <ProgressBar value={92} color={"#166FD3"} />
                  <div className="content">
                    <h6>
                      Product <br />
                      Clarity
                    </h6>
                  </div>
                </div>
                <div
                  className="single-circle-bar wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <ProgressBar value={96} color={"#166FD3"} />
                  <div className="content">
                    <h6>
                      Delivery <br />
                      Reliability
                    </h6>
                  </div>
                </div>
              </div>
              <ul className="about-list wow fadeInUp" data-wow-delay=".7s">
                {fiverrHighlights.map((item) => (
                  <li key={item}>
                    <i className="far fa-check me-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="about-author">
                <div className="about-button wow fadeInUp" data-wow-delay=".8s">
                  <a
                    href={fiverrProfile.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="theme-btn"
                  >
                    <span>
                      Discuss Your Project
                      <i className="fas fa-chevron-right" />
                    </span>
                  </a>
                </div>
                <div className="author-image wow fadeInUp" data-wow-delay=".9s">
                  <img src="/assets/img/about/author.png" alt="author-img" />
                  <div className="content">
                    <img src="/assets/img/about/signature.png" alt="signature" />
                    <p>
                      {fiverrProfile.name} | {fiverrProfile.role}
                    </p>
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
