"use client";
import Faq from "@/components/Faq";
import Layout from "@/layouts/Layout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const page = () => {
  return (
    <Layout header={4} footer={4} single={true}>
      {/* Hero Section Here */}
      <section
        className="hero-section hero-4 bg-cover"
        style={{ backgroundImage: 'url("assets/img/home-4/hero/hero-bg.jpg")' }}
      >
        <div className="circle-shape">
          <img src="assets/img/home-4/hero/circle.png" alt="circle-img" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="hero-content">
                <h6 className="head-title wow fadeInUp">
                  We’re 100% Trusted Agency
                </h6>
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Bridging the Gap in Your IT Solutions
                </h1>
                <h6 className="wow fadeInUp" data-wow-delay=".5s">
                  25+ Years Of Experience In Consulting Services
                </h6>
                <div className="hero-button wow fadeInUp" data-wow-delay=".7s">
                  <Link href="contact" className="theme-btn hover-white">
                    <span> Free Consulting</span>
                  </Link>
                  <Link href="service-details" className="theme-btn-2">
                    Explore Services <i className="fas fa-chevron-right ps-2" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 mt-5 mt-lg-0 wow fadeInRight"
              data-wow-delay=".4s"
            >
              <div className="hero-image">
                <img src="assets/img/home-4/hero/hero4.jpg" alt="hero-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Here */}
      <section
        className="about-section fix section-padding bg-white"
        id="about"
      >
        <div className="shape float-bob-y">
          <img src="assets/img/home-4/about/arrow-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Who We Are</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Infinite IT Services Unlocking Limitless <br />
              Possibilities for Your Business Artificial Intelligence <br />
              Company That Excels Problem Solutions
            </h2>
          </div>
          <div className="single-about-wrapper-2">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="about-image-item ralt">
                  <div className="circle-shape">
                    <img
                      src="assets/img/home-4/about/circle-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="bg-shape">
                    <img
                      src="assets/img/home-4/about/bg-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="row">
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="about-image-1">
                        <img
                          src="assets/img/home-4/about/about2.jpg"
                          alt="about-img"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="about-image-2">
                        <img
                          src="assets/img/home-4/about/about3.jpg"
                          alt="about-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <p className="text  wow fadeInUp">
                    Feel free to reach out to us{" "}
                    <Link href="about">through contact information</Link>{" "}
                    provided below, and one of our representatives will get back
                    to you as soon as possible. Thank you for your interest in{" "}
                    <Link href="about">Finland</Link>.
                  </p>
                  <div
                    className="single-system-item wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="icon">
                      <img
                        src="assets/img/home-4/about/icon/icon1.svg"
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h4>Information Management System</h4>
                      <p>
                        At Tech Genius Solution we understand that business has
                        unique IT needs offer a comprehensive
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-system-item wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="icon">
                      <img
                        src="assets/img/home-4/about/icon/icon2.svg"
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h4>Multifunctional Technology</h4>
                      <p>
                        IT solutions designed streamline operations, enhance
                        productivity, ensure the security infrastructure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Here */}
      <section
        className="service-section  section-padding pt-0 bg-white"
        id="service"
      >
        <div className="bg-shape">
          <img src="assets/img/home-4/service/bg-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className=" wow fadeInUp">IT Services Designed</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              We Provide the Most Responsive <br />
              and functional IT design
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-service-style-2 center">
                <div className="icon">
                  <img
                    src="assets/img/home-4/service/icon-1.svg"
                    alt="icon-img"
                  />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">IT Management Solutions</Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantiu doloremque laudantium, totam aperiam,
                    eaque
                  </p>
                  <Link
                    href="service-details"
                    className="theme-btn-2 color-style-2 mt-3"
                  >
                    Read More
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-service-style-2 active center">
                <div className="icon">
                  <img
                    src="assets/img/home-4/service/icon-2.svg"
                    alt="icon-img"
                  />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">Product Control Services</Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantiu doloremque laudantium, totam aperiam,
                    eaque
                  </p>
                  <Link
                    href="service-details"
                    className="theme-btn-2 color-style-2 mt-3"
                  >
                    Read More
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-service-style-2 center">
                <div className="icon">
                  <img
                    src="assets/img/home-4/service/icon-3.svg"
                    alt="icon-img"
                  />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">Quality Control Systems</Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantiu doloremque laudantium, totam aperiam,
                    eaque
                  </p>
                  <Link
                    href="service-details"
                    className="theme-btn-2 color-style-2 mt-3"
                  >
                    Read More
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* IT Service Provide Section Here */}
      <section className="service-provide bg-white">
        <div className="line-shape">
          <img src="assets/img/home-4/service/line-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="single-it-service-provide">
            <div className="arrow-shape wow fadeInUp" data-wow-delay=".3s">
              <img src="assets/img/home-4/service/arrow.png" alt="shape-img" />
            </div>
            <div className="arrow-shape-2 wow fadeInUp" data-wow-delay=".5s">
              <img src="assets/img/home-4/service/arrow2.png" alt="shape-img" />
            </div>
            <div
              className="service-bg bg-cover"
              style={{
                backgroundImage:
                  'url("assets/img/home-4/service/service-provide-bg.jpg")',
              }}
            >
              <div className="single-provide-content">
                <div className="section-content">
                  <span className="wow fadeInUp sub-cont">
                    Why Get Our Services
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    We Provide Quality IT Solutions For your Business
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantiu doloremque laudantium, totam aperiam
                  </p>
                  <Link
                    href="contact"
                    className="theme-btn bg-white wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <span> Free Consulting</span>
                  </Link>
                </div>
                <div className="video-btn video-pulse">
                  <a
                    className="video-popup"
                    href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* IT Service Provide Section Here */}
      <section className="service-provide-2 bg-5 section-padding pb-0">
        <div className="line-shape-2">
          <img
            src="assets/img/home-4/service/line-shape2.png"
            alt="shape-img"
          />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Service We Provide</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Explore IT Service to Grow Business
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-service-provide-card">
                <div className="icon">
                  <img
                    src="assets/img/home-4/service/icon-4.svg"
                    alt="icon-img"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link href="service-details">
                      AI Base Business Solution
                    </Link>
                  </h4>
                  <p>Sed ut perspice unde omnis iste natus sit voluptate</p>
                  <Link href="service-details" className="link-btn text-white">
                    Read More
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-service-provide-card active">
                <div className="icon">
                  <img
                    src="assets/img/home-4/service/icon-5.svg"
                    alt="icon-img"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link href="service-details">
                      Chatbot with Real meeting
                    </Link>
                  </h4>
                  <p>Sed ut perspice unde omnis iste natus sit voluptate</p>
                  <Link href="service-details" className="link-btn text-white">
                    Read More
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-service-provide-card">
                <div className="icon">
                  <img
                    src="assets/img/home-4/service/icon6.svg"
                    alt="icon-img"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link href="service-details">Automate Data Saving</Link>
                  </h4>
                  <p>Sed ut perspice unde omnis iste natus sit voluptate</p>
                  <Link href="service-details" className="link-btn text-white">
                    Read More
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-service-provide-card">
                <div className="icon">
                  <img
                    src="assets/img/home-4/service/icon7.svg"
                    alt="icon-img"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link href="service-details">
                      Robotic <br />
                      Automation
                    </Link>
                  </h4>
                  <p>Sed ut perspice unde omnis iste natus sit voluptate</p>
                  <Link href="service-details" className="link-btn text-white">
                    Read More
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* IT Case Study Section Here */}
      <section className="it-case-study section-padding">
        <div className="single-case-study-wrapper">
          <Slider
            {...sliderProps.itCaseStudyCarouselActive}
            className="it-case-study-carousel-active"
          >
            <div className="single-it-case-study">
              <div className="case-study-image">
                <img
                  src="assets/img/home-4/case-study/case-study1.jpg"
                  alt="study-img"
                />
                <div className="case-study-content">
                  <div className="arrow-shape">
                    <img
                      src="assets/img/home-4/case-study/arrow-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="icon">
                    <img
                      src="assets/img/home-4/case-study/icon/icon1.svg"
                      alt="icon-img"
                    />
                  </div>
                  <p>Data Technology</p>
                  <h4>
                    <Link href="project-details">
                      Production Efficiency Enhancement
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="single-it-case-study">
              <div className="case-study-image">
                <img
                  src="assets/img/home-4/case-study/case-study2.jpg"
                  alt="study-img"
                />
                <div className="case-study-content">
                  <div className="arrow-shape">
                    <img
                      src="assets/img/home-4/case-study/arrow-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="icon">
                    <img
                      src="assets/img/home-4/case-study/icon/icon2.svg"
                      alt="icon-img"
                    />
                  </div>
                  <p>Data Technology</p>
                  <h4>
                    <Link href="project-details">
                      Sustainability initiatives Business
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="single-it-case-study">
              <div className="case-study-image">
                <img
                  src="assets/img/home-4/case-study/case-study3.jpg"
                  alt="study-img"
                />
                <div className="case-study-content">
                  <div className="arrow-shape">
                    <img
                      src="assets/img/home-4/case-study/arrow-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="icon">
                    <img
                      src="assets/img/home-4/case-study/icon/icon3.svg"
                      alt="icon-img"
                    />
                  </div>
                  <p>Data Technology</p>
                  <h4>
                    <Link href="project-details">
                      Production Efficiency Enhancement
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="single-it-case-study">
              <div className="case-study-image">
                <img
                  src="assets/img/home-4/case-study/case-study2.jpg"
                  alt="study-img"
                />
                <div className="case-study-content">
                  <div className="arrow-shape">
                    <img
                      src="assets/img/home-4/case-study/arrow-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="icon">
                    <img
                      src="assets/img/home-4/case-study/icon/icon2.svg"
                      alt="icon-img"
                    />
                  </div>
                  <p>Data Technology</p>
                  <h4>
                    <Link href="project-details">
                      Sustainability initiatives Business
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Team Section Here */}
      <section className="team-section-2 fix section-padding pt-0" id="team">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
            <div
              className="col-xl-6 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-team-style-1 it-single-team-style mt-0">
                <div className="section-title">
                  <span className="wow fadeInUp">Team Member</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    We Have More <br />
                    Then 55+ Experience <br />
                    Team Member
                  </h2>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    At Tech Genius Solution we understand that business <br />
                    has unique IT needs offer a comprehensive
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-team-style-1">
                <div className="team-image ralt">
                  <img src="assets/img/home-4/team/team1.jpg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content center">
                  <h3>
                    <Link href="team-details">Mark D. Brock</Link>
                  </h3>
                  <p>CEO &amp; Founder</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-team-style-1 active">
                <div className="team-image ralt">
                  <img src="assets/img/home-4/team/team2.jpg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content center">
                  <h3>
                    <Link href="team-details">Victor S. Hanson</Link>
                  </h3>
                  <p>Senior Manager</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-team-style-1">
                <div className="team-image ralt">
                  <img src="assets/img/home-4/team/team3.jpg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content center">
                  <h3>
                    <Link href="team-details">Carl R. Downing</Link>
                  </h3>
                  <p>Junior Consultant</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-team-style-1">
                <div className="team-image ralt">
                  <img src="assets/img/home-4/team/team4.jpg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content center">
                  <h3>
                    <Link href="team-details">Donald D. Head</Link>
                  </h3>
                  <p>Marketing Manager</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-team-style-1">
                <div className="team-image ralt">
                  <img src="assets/img/home-4/team/team5.jpg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content center">
                  <h3>
                    <Link href="team-details">Freddie L. Nixon</Link>
                  </h3>
                  <p>Marketing Manager</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="it-team-content center">
                <p className="mt-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantiu doloremque
                </p>
                <Link href="team-details" className="theme-btn mt-4">
                  <span>View All Member</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Faq Section Start >>*/}
      <section className="faq-section fix section-padding pt-0">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      5m+ Trusted Our Clients
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      have a question in <br />
                      your mind?
                    </h2>
                  </div>
                  <p
                    className=" mt-4 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Transmds is the world’s driving worldwide coordinations
                    supplier — we uphold industry and exchange the worldwide
                    trade of merchandi
                  </p>
                  <ul
                    className="about-list mt-4 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
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
                      Professional Team Member
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Awards Winning IT Solutions Company
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <Faq />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section Here */}
      <section className="feature-section section-padding fix pt-0">
        <div className="container">
          <div className="feature-single-wrapper">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="single-feature-content">
                  <div className="section-title">
                    <span className="wow fadeInLeft" data-wow-delay=".3s">
                      Excellence Solution
                    </span>
                    <h2 className="wow fadeInLeft" data-wow-delay=".5s">
                      We Make It Easy to Track All Users Analytics
                    </h2>
                  </div>
                  <div
                    className="feature-items mt-4 mt-md-0 wow fadeInLeft"
                    data-wow-delay=".3s"
                  >
                    <div className="icon">
                      <img
                        src="assets/img/home-4/feature-icon/icon1.svg"
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h3>Automated Reports</h3>
                      <p>
                        At Tech Genius Solution we understand that business has
                        unique IT needs offer a comprehensive
                      </p>
                    </div>
                  </div>
                  <div
                    className="feature-items active wow fadeInLeft"
                    data-wow-delay=".5s"
                  >
                    <div className="icon">
                      <img
                        src="assets/img/home-4/feature-icon/icon2.svg"
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h3>Realtime analytics</h3>
                      <p>
                        At Tech Genius Solution we understand that business has
                        unique IT needs offer a comprehensive
                      </p>
                    </div>
                  </div>
                  <div
                    className="feature-items wow fadeInLeft"
                    data-wow-delay=".7s"
                  >
                    <div className="icon">
                      <img
                        src="assets/img/home-4/feature-icon/icon3.svg"
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h3>Individual user analytics</h3>
                      <p>
                        At Tech Genius Solution we understand that business has
                        unique IT needs offer a comprehensive
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                <div className="single-feature-image">
                  <div className="quote-img float-bob-y">
                    <img
                      src="assets/img/home-4/feature/quote.png"
                      alt="quote-img"
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="feature-image">
                        <img
                          src="assets/img/home-4/feature/feature.jpg"
                          alt="feature-img"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="feature-image-2">
                        <img
                          src="assets/img/home-4/feature/feature2.jpg"
                          alt="feature-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Here */}
      <section className="testimonial-section-5 section-padding pt-0">
        <div className="shape float-bob-y">
          <img src="assets/img/home-4/about/arrow-shape.png" alt="shape-img" />
        </div>
        <div className="bg-shape">
          <img src="assets/img/home-4/service/bg-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Clients Testimonials</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              The Heart Warming Testimonies <br />
              of Excellence
            </h2>
          </div>
          <div className="single-testimonial-style-2 mt-5 mt-md-0">
            <Slider
              {...sliderProps.testimonialCarouselActive5}
              className="testimonial-carousel-active-5"
            >
              <div className="single-testimonial-items-2">
                <div className="ratting-items">
                  <div className="quote-icon">
                    <img
                      src="assets/img/home-4/testimonial/quote2.png"
                      alt="icon-img"
                    />
                  </div>
                  <div className="client-ratting">
                    <h5>Quality Services</h5>
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text">
                  On the other hand we denounce with see righteous indignation
                  and dislike men who arey beguiled and demoralized by leisure
                  moments line desire
                </p>
                <div className="client-info">
                  <div className="image">
                    <img
                      src="assets/img/home-4/testimonial/client.png"
                      alt="client-img"
                    />
                  </div>
                  <div className="content">
                    <h3>James N. Johnson</h3>
                    <p>CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
              <div className="single-testimonial-items-2">
                <div className="ratting-items">
                  <div className="quote-icon">
                    <img
                      src="assets/img/home-4/testimonial/quote2.png"
                      alt="icon-img"
                    />
                  </div>
                  <div className="client-ratting">
                    <h5>Quality Services</h5>
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text">
                  On the other hand we denounce with see righteous indignation
                  and dislike men who arey beguiled and demoralized by leisure
                  moments line desire
                </p>
                <div className="client-info">
                  <div className="image">
                    <img
                      src="assets/img/home-4/testimonial/client2.png"
                      alt="client-img"
                    />
                  </div>
                  <div className="content">
                    <h3>David K. McKinney</h3>
                    <p>Senior Manager</p>
                  </div>
                </div>
              </div>
              <div className="single-testimonial-items-2">
                <div className="ratting-items">
                  <div className="quote-icon">
                    <img
                      src="assets/img/home-4/testimonial/quote2.png"
                      alt="icon-img"
                    />
                  </div>
                  <div className="client-ratting">
                    <h5>Quality Services</h5>
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text">
                  On the other hand we denounce with see righteous indignation
                  and dislike men who arey beguiled and demoralized by leisure
                  moments line desire
                </p>
                <div className="client-info">
                  <div className="image">
                    <img
                      src="assets/img/home-4/testimonial/client.png"
                      alt="client-img"
                    />
                  </div>
                  <div className="content">
                    <h3>James N. Johnson</h3>
                    <p>CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
              <div className="single-testimonial-items-2">
                <div className="ratting-items">
                  <div className="quote-icon">
                    <img
                      src="assets/img/home-4/testimonial/quote2.png"
                      alt="icon-img"
                    />
                  </div>
                  <div className="client-ratting">
                    <h5>Quality Services</h5>
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text">
                  On the other hand we denounce with see righteous indignation
                  and dislike men who arey beguiled and demoralized by leisure
                  moments line desire
                </p>
                <div className="client-info">
                  <div className="image">
                    <img
                      src="assets/img/home-4/testimonial/client2.png"
                      alt="client-img"
                    />
                  </div>
                  <div className="content">
                    <h3>David K. McKinney</h3>
                    <p>Senior Manager</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* Pricing Section Here */}
      <section className="pricing-section fix section-padding section-bg-4">
        <div className="dot-shape">
          <img src="assets/img/home-4/pricing/dot.png" alt="dot-img" />
        </div>
        <div className="arrow-shape float-bob-y">
          <img src="assets/img/home-4/pricing/arrow.png" alt="arrow-img" />
        </div>
        <div className="dot-shape-2">
          <img src="assets/img/home-4/pricing/dot2.png" alt="dot-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Pricing Package</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Flexible Pricing Plans For <br /> IT Solutions
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-pricing-items">
                <div className="icon">
                  <img
                    src="assets/img/home-4/pricing/icon1.svg"
                    alt="icon-img"
                  />
                </div>
                <div className="content">
                  <h3>Basic Plan</h3>
                  <p>
                    At Tech Genius Solution understand business has unique needs
                  </p>
                </div>
                <div className="price-plan">
                  <h2>
                    $18 <sub>/per month</sub>
                  </h2>
                </div>
                <ul>
                  <li className="icon">
                    <i className="fas fa-check" />
                    UUnlimited Project
                  </li>
                  <li className="icon">
                    <i className="fas fa-check" />
                    Power And Predictive Dialing
                  </li>
                  <li className="icon">
                    <i className="fas fa-check" />
                    Quality &amp; Customer Experience
                  </li>
                  <li className="icon-2">
                    <i className="fas fa-times" />
                    Try for free, forever!
                  </li>
                  <li className="icon-2">
                    <i className="fas fa-times" />
                    24/7 phone and email support
                  </li>
                </ul>
                <Link href="contact" className="theme-btn mt-5">
                  <span>Choose Package</span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-pricing-items active-tag">
                <div className="icon">
                  <img
                    src="assets/img/home-4/pricing/icon2.svg"
                    alt="icon-img"
                  />
                </div>
                <div className="content">
                  <h3>Standard Plan</h3>
                  <p>
                    At Tech Genius Solution understand business has unique needs
                  </p>
                </div>
                <div className="price-plan">
                  <h2>
                    $49 <sub>/per month</sub>
                  </h2>
                </div>
                <ul>
                  <li className="icon">
                    <i className="fas fa-check" />
                    UUnlimited Project
                  </li>
                  <li className="icon">
                    <i className="fas fa-check" />
                    Power And Predictive Dialing
                  </li>
                  <li className="icon">
                    <i className="fas fa-check" />
                    Quality &amp; Customer Experience
                  </li>
                  <li className="icon">
                    <i className="fas fa-check" />
                    Try for free, forever!
                  </li>
                  <li className="icon-2">
                    <i className="fas fa-times" />
                    24/7 phone and email support
                  </li>
                </ul>
                <Link href="contact" className="theme-btn mt-5">
                  <span> Choose Package</span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-pricing-items">
                <div className="icon">
                  <img
                    src="assets/img/home-4/pricing/icon3.svg"
                    alt="icon-img"
                  />
                </div>
                <div className="content">
                  <h3>Premium Plan</h3>
                  <p>
                    At Tech Genius Solution understand business has unique needs
                  </p>
                </div>
                <div className="price-plan">
                  <h2>
                    $98 <sub>/per month</sub>
                  </h2>
                </div>
                <ul>
                  <li className="icon">
                    <i className="fas fa-check" />
                    UUnlimited Project
                  </li>
                  <li className="icon">
                    <i className="fas fa-check" />
                    Power And Predictive Dialing
                  </li>
                  <li className="icon">
                    <i className="fas fa-check" />
                    Quality &amp; Customer Experience
                  </li>
                  <li className="icon">
                    <i className="fas fa-check" />
                    Try for free, forever!
                  </li>
                  <li className="icon">
                    <i className="fas fa-check" />
                    24/7 phone and email support
                  </li>
                </ul>
                <Link href="contact" className="theme-btn mt-5">
                  <span>Choose Package</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Blog Section Here */}
      <section className="news-section fix ralt section-padding" id="blog">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Latest News &amp; Blog</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Get Every Consulting News Read <br />
              Article &amp; Blog
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-news-style-1">
                <div className="news-image">
                  <img src="assets/img/home-4/news/01.jpg" alt="news-img" />
                  <div className="post-date">
                    <h3>24</h3>
                    <p>NOV</p>
                  </div>
                </div>
                <div className="news-content">
                  <div className="author-item mb-4">
                    <div className="post-cat">
                      <Link href="news-details">IT Consulting</Link>
                    </div>
                    <div className="post-author d-flex align-items-center">
                      <img
                        src="assets/img/home-4/news/author.jpg"
                        alt="author-img"
                      />
                      <p>David L. Davis</p>
                    </div>
                  </div>
                  <h3>
                    <Link href="news-details">
                      Voice Skills For Assistant And Amazon Alexa Business
                    </Link>
                  </h3>
                  <Link href="news-details" className="link-btn mt-4">
                    Read More
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-news-style-1">
                <div className="news-image">
                  <img src="assets/img/home-4/news/02.jpg" alt="news-img" />
                  <div className="post-date">
                    <h3>28</h3>
                    <p>NOV</p>
                  </div>
                </div>
                <div className="news-content">
                  <div className="author-item mb-4">
                    <div className="post-cat">
                      <Link href="news-details">Cyber Security</Link>
                    </div>
                    <div className="post-author d-flex align-items-center">
                      <img
                        src="assets/img/home-4/news/author2.jpg"
                        alt="author-img"
                      />
                      <p>Michael J. Gray</p>
                    </div>
                  </div>
                  <h3>
                    <Link href="news-details">
                      Market Masters Consultants Navigating Growth
                    </Link>
                  </h3>
                  <Link href="news-details" className="link-btn mt-4">
                    Read More
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-news-style-1">
                <div className="news-image">
                  <img src="assets/img/home-4/news/03.jpg" alt="news-img" />
                  <div className="post-date">
                    <h3>30</h3>
                    <p>NOV</p>
                  </div>
                </div>
                <div className="news-content">
                  <div className="author-item mb-4">
                    <div className="post-cat">
                      <Link href="news-details">William A. Gibsob</Link>
                    </div>
                    <div className="post-author d-flex align-items-center">
                      <img
                        src="assets/img/home-4/news/author3.jpg"
                        alt="author-img"
                      />
                      <p>David L. Davis</p>
                    </div>
                  </div>
                  <h3>
                    <Link href="news-details">
                      Pro Fusion Partners Amplifying Your Business Potential
                    </Link>
                  </h3>
                  <Link href="news-details" className="link-btn mt-4">
                    Read More
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Brand Section Start >>*/}
      <section className="brand-section fix section-padding pt-0">
        <div className="container">
          <div className="brand-wrapper">
            <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">
              1K+ BRANDS TRUST US
            </h6>
            <Slider
              {...sliderProps.brandCarouselActive}
              className="brand-carousel-active"
            >
              <div className="brand-image">
                <img src="assets/img/brand/01.png" alt="brand-img" />
              </div>
              <div className="brand-image">
                <img src="assets/img/brand/01.png" alt="brand-img" />
              </div>
              <div className="brand-image">
                <img src="assets/img/brand/01.png" alt="brand-img" />
              </div>
              <div className="brand-image">
                <img src="assets/img/brand/01.png" alt="brand-img" />
              </div>
              <div className="brand-image">
                <img src="assets/img/brand/01.png" alt="brand-img" />
              </div>
              <div className="brand-image">
                <img src="assets/img/brand/01.png" alt="brand-img" />
              </div>
              <div className="brand-image">
                <img src="assets/img/brand/01.png" alt="brand-img" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* Cta Banner Section Here */}
      <section className="cta-banner-section-4">
        <div className="container">
          <div
            className="cta-banner-style-1 bg-cover"
            style={{ background: 'url("assets/img/home-4/banner1.jpg")' }}
          >
            <div className="section-title">
              <span className="text-white">Get Consultations</span>
              <h2 className="text-white">
                We’re The Best Financial &amp; <br />
                Consulting Agency
              </h2>
            </div>
            <Link href="contact" className="theme-btn bg-white mt-4">
              <span> Free Consulting</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default page;
