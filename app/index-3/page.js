"use client";
import ContactSection from "@/components/ContactSection";
import Counter from "@/components/Counter";
import FaqSection from "@/components/FaqSection";
import ProgressBar from "@/components/ProgressBar";
import Home3Slider from "@/components/sliders/Home3";
import Testimonial3Slider from "@/components/sliders/Testimonial3Slider";
import Layout from "@/layouts/Layout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const page = () => {
  return (
    <Layout header={3} footer={3}>
      <Home3Slider />
      {/*<< Service Section Start >>*/}
      <section className="service-section section-bg-4 fix section-padding">
        <div className="container">
          <div className="title-section-area">
            <div className="section-title style-2">
              <span className="wow fadeInUp">Our Services Area</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                WHAT WE’RE OFFERING TO <br />
                OUR CUSTOMERS
              </h2>
            </div>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Transmds is the world’s driving worldwide coordinations supplier{" "}
              <br /> uphold industry and exchange the worldwide trade of
              merchandi <br />
              do eiusmod tempor incididunt ut labore et simply free text dolore
            </p>
          </div>
          <div className="service-wrapper-3">
            <div
              className="service-box-items style-2 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="icon">
                <i className="flaticon-coding" />
              </div>
              <div className="content">
                <h6>
                  <Link href="service-details">
                    UI / UX <br />
                    CREATIVE DESIGN
                  </Link>
                </h6>
              </div>
            </div>
            <div
              className="service-box-items style-2 active wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="icon">
                <i className="flaticon-server" />
              </div>
              <div className="content">
                <h6>
                  <Link href="service-details">
                    Desktop <br />
                    Computing Services
                  </Link>
                </h6>
              </div>
            </div>
            <div
              className="service-box-items style-2 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="icon">
                <i className="flaticon-data-science" />
              </div>
              <div className="content">
                <h6>
                  <Link href="service-details">
                    Data &amp; <br />
                    Cyber security
                  </Link>
                </h6>
              </div>
            </div>
            <div
              className="service-box-items style-2 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="icon">
                <i className="flaticon-technology-1" />
              </div>
              <div className="content">
                <h6>
                  <Link href="service-details">
                    REAL <br />
                    TECH SOLUTIONS
                  </Link>
                </h6>
              </div>
            </div>
            <div
              className="service-box-items style-2 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="icon">
                <i className="flaticon-project-management" />
              </div>
              <div className="content">
                <h6>
                  <Link href="service-details">
                    PROJECTS <br />
                    &amp; DATA MANAGMENT
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div
            className="service-text-area text-center mt-5 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <h5>
              Bring them together and you overcome the ordinary.
              <Link href="service" className="link-btn link-btn-2">
                <span>View More Service</span>
                <i className="fal fa-plus" />
              </Link>
            </h5>
          </div>
        </div>
      </section>
      {/*<< Brand Section Start >>*/}
      <div className="brand-section fix">
        <div className="container">
          <div className="brand-wrapper-3">
            <Slider
              {...sliderProps.brandCarouselActive}
              className="brand-carousel-active"
            >
              <div className="brand-image">
                <img src="assets/img/brand/02.png" alt="brand-img" />
              </div>
              <div className="brand-image">
                <img src="assets/img/brand/02.png" alt="brand-img" />
              </div>
              <div className="brand-image">
                <img src="assets/img/brand/02.png" alt="brand-img" />
              </div>
              <div className="brand-image">
                <img src="assets/img/brand/02.png" alt="brand-img" />
              </div>
              <div className="brand-image">
                <img src="assets/img/brand/02.png" alt="brand-img" />
              </div>
              <div className="brand-image">
                <img src="assets/img/brand/02.png" alt="brand-img" />
              </div>
              <div className="brand-image">
                <img src="assets/img/brand/02.png" alt="brand-img" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/*<< About Section Start >>*/}
      <section className="about-section section-padding">
        <div className="line-shape">
          <img src="assets/img/service/line-shape-2.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="about-wrapper-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div
                    className="about-image-1 bg-cover wow fadeInLeft"
                    data-wow-delay=".3s"
                    style={{
                      backgroundImage: 'url("assets/img/about/about-5.jpg")',
                    }}
                  >
                    <div
                      className="about-image-2 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <img src="assets/img/about/about-6.jpg" alt="about-img" />
                    </div>
                  </div>
                  <div className="circle-shape">
                    <img
                      src="assets/img/about/circle-2.png"
                      alt="img"
                      className="text-circle"
                    />
                    <div className="about-title">
                      <h2>
                        <Counter end={13} />
                      </h2>
                      <p>Years of Experince</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title style-2">
                    <span className="wow fadeInUp">Know more about us</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      WHAT WE’RE <span>OFFERING</span> TO OUR CUSTOMERS
                    </h2>
                  </div>
                  <p
                    className=" mt-4 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Transmds is the world’s driving worldwide coordinations
                    supplier we uphold industry and exchange the worldwide trade
                    of merchandi world’s driving worldwide coordinations
                    supplier — we uphold industry and exchange the
                  </p>
                  <Tab.Container defaultActiveKey={"integrity"}>
                    <div className="single-tab-items">
                      <Nav as={"ul"} className="nav mb-4" role="tablist">
                        <Nav.Item
                          as={"li"}
                          className="nav-item wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <Nav.Link
                            as={"a"}
                            eventKey="integrity"
                            href="#integrity"
                          >
                            integrity
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                          as={"li"}
                          className="nav-item wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <Nav.Link
                            as={"a"}
                            eventKey="obejectives"
                            href="#obejectives"
                          >
                            obejectives
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                          as={"li"}
                          className="nav-item wow fadeInUp"
                          data-wow-delay=".7s"
                        >
                          <Nav.Link
                            as={"a"}
                            eventKey="excellence"
                            href="#excellence"
                          >
                            excellence
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    <Tab.Content className="tab-content">
                      <Tab.Pane eventKey="integrity" className="tab-pane fade">
                        <div className="about-tabs-area">
                          <div className="about-list-items">
                            <div
                              className="video-image wow fadeInUp"
                              data-wow-delay=".3s"
                            >
                              <img src="assets/img/about/video.jpg" alt="img" />
                              <div className="video-box">
                                <a
                                  href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                                  className="video-btn ripple video-popup"
                                >
                                  <i className="fas fa-play" />
                                </a>
                              </div>
                            </div>
                            <ul className="wow fadeInUp" data-wow-delay=".4s">
                              <li>
                                <i className="far fa-check" />
                                Technology Growth
                              </li>
                              <li>
                                <i className="far fa-check" />
                                Customer Oriented Program
                              </li>
                              <li>
                                <i className="far fa-check" />
                                Dedicated Team member
                              </li>
                              <li>
                                <i className="far fa-check" />
                                Customer Oriented Program
                              </li>
                            </ul>
                          </div>
                          <div className="about-author">
                            <div
                              className="author-image wow fadeInUp"
                              data-wow-delay=".3s"
                            >
                              <div className="all-client">
                                <div className="client-img">
                                  <img
                                    src="assets/img/about/client-3.png"
                                    alt="client-img"
                                  />
                                </div>
                                <div className="client-img">
                                  <img
                                    src="assets/img/about/client-4.png"
                                    alt="client-img"
                                  />
                                </div>
                                <div className="client-img">
                                  <img
                                    src="assets/img/about/client-5.png"
                                    alt="client-img"
                                  />
                                </div>
                              </div>
                              <div className="content">
                                <h6>5m+ Customer</h6>
                              </div>
                            </div>
                            <div
                              className="author-contact wow fadeInUp"
                              data-wow-delay=".5s"
                            >
                              <div className="icon">
                                <img src="assets/img/contact.png" alt="img" />
                              </div>
                              <div className="content">
                                <p>Phone:</p>
                                <h6>
                                  <a href="tel:++23645689622">
                                    +236 (456) 896 22
                                  </a>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="obejectives"
                        className="tab-pane fade"
                      >
                        <div className="about-tabs-area">
                          <div className="about-list-items">
                            <div className="video-image">
                              <img src="assets/img/about/video.jpg" alt="img" />
                              <div className="video-box">
                                <a
                                  href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                                  className="video-btn ripple video-popup"
                                >
                                  <i className="fas fa-play" />
                                </a>
                              </div>
                            </div>
                            <ul>
                              <li>
                                <i className="far fa-check" />
                                Technology Growth
                              </li>
                              <li>
                                <i className="far fa-check" />
                                Customer Oriented Program
                              </li>
                              <li>
                                <i className="far fa-check" />
                                Dedicated Team member
                              </li>
                              <li>
                                <i className="far fa-check" />
                                Customer Oriented Program
                              </li>
                            </ul>
                          </div>
                          <div className="about-author">
                            <div className="author-image">
                              <div className="all-client">
                                <div className="client-img">
                                  <img
                                    src="assets/img/about/client-3.png"
                                    alt="client-img"
                                  />
                                </div>
                                <div className="client-img">
                                  <img
                                    src="assets/img/about/client-4.png"
                                    alt="client-img"
                                  />
                                </div>
                                <div className="client-img">
                                  <img
                                    src="assets/img/about/client-5.png"
                                    alt="client-img"
                                  />
                                </div>
                              </div>
                              <div className="content">
                                <h6>5m+ Customer</h6>
                              </div>
                            </div>
                            <div className="author-contact">
                              <div className="icon">
                                <img src="assets/img/contact.png" alt="img" />
                              </div>
                              <div className="content">
                                <p>Phone:</p>
                                <h6>
                                  <a href="tel:++23645689622">
                                    +236 (456) 896 22
                                  </a>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="excellence" className="tab-pane fade">
                        <div className="about-tabs-area">
                          <div className="about-list-items">
                            <div className="video-image">
                              <img src="assets/img/about/video.jpg" alt="img" />
                              <div className="video-box">
                                <a
                                  href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                                  className="video-btn ripple video-popup"
                                >
                                  <i className="fas fa-play" />
                                </a>
                              </div>
                            </div>
                            <ul>
                              <li>
                                <i className="far fa-check" />
                                Technology Growth
                              </li>
                              <li>
                                <i className="far fa-check" />
                                Customer Oriented Program
                              </li>
                              <li>
                                <i className="far fa-check" />
                                Dedicated Team member
                              </li>
                              <li>
                                <i className="far fa-check" />
                                Customer Oriented Program
                              </li>
                            </ul>
                          </div>
                          <div className="about-author">
                            <div className="author-image">
                              <div className="all-client">
                                <div className="client-img">
                                  <img
                                    src="assets/img/about/client-3.png"
                                    alt="client-img"
                                  />
                                </div>
                                <div className="client-img">
                                  <img
                                    src="assets/img/about/client-4.png"
                                    alt="client-img"
                                  />
                                </div>
                                <div className="client-img">
                                  <img
                                    src="assets/img/about/client-5.png"
                                    alt="client-img"
                                  />
                                </div>
                              </div>
                              <div className="content">
                                <h6>5m+ Customer</h6>
                              </div>
                            </div>
                            <div className="author-contact">
                              <div className="icon">
                                <img src="assets/img/contact.png" alt="img" />
                              </div>
                              <div className="content">
                                <p>Phone:</p>
                                <h6>
                                  <a href="tel:++23645689622">
                                    +236 (456) 896 22
                                  </a>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Counter Section Start >>*/}
      <section className="counter-section-2">
        <div className="container">
          <div className="counter-wrapper-2">
            <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
              <div className="icon">
                <i className="flaticon-verified" />
              </div>
              <div className="content">
                <h2>
                  <Counter end={50} />
                  k+
                </h2>
                <p>Project Complete</p>
              </div>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
              <div className="icon">
                <i className="flaticon-verified" />
              </div>
              <div className="content">
                <h2>
                  <Counter end={5} />
                  k+
                </h2>
                <p>Project Complete</p>
              </div>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
              <div className="icon">
                <i className="flaticon-customer-service-1" />
              </div>
              <div className="content">
                <h2>
                  <Counter end={3} />
                  k+
                </h2>
                <p>Satisficed Clients</p>
              </div>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
              <div className="icon">
                <i className="flaticon-medal" />
              </div>
              <div className="content">
                <h2>
                  <Counter end={85} />+
                </h2>
                <p>Awards Winning</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Grow Section Start >>*/}
      <section className="grow-section section-padding section-bg-3">
        <div className="container">
          <div className="grow-wrapper">
            <div className="title-section-area">
              <div className="section-title style-2">
                <span className="text-white wow fadeInUp">
                  Business strategy we need
                </span>
                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                  GROW COMMUNITY &amp; EXPERIENCE <br />
                  ENDLESS POSSIBILITIES
                </h2>
              </div>
              <Link
                href="about"
                className="theme-btn theme-btn-2 hover-white wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>
                  Discover More
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </div>
            <div className="circle-progress-bar-wrapper mbm-10">
              <div
                className="single-circle-bar wow fadeInUp"
                data-wow-delay=".3s"
              >
                <ProgressBar value={89} color={"#4e29b7"} />
                <div className="content">
                  <h6>Business Strategy</h6>
                  <p>
                    End to end fiber optic cable <br />
                    nnectivity for stable
                  </p>
                </div>
              </div>
              <div
                className="single-circle-bar wow fadeInUp"
                data-wow-delay=".5s"
              >
                {" "}
                <ProgressBar value={77} color={"#4e29b7"} />
                <div className="content">
                  <h6>Gaurateed Uptime</h6>
                  <p>
                    End to end fiber optic cable <br />
                    nnectivity for stable
                  </p>
                </div>
              </div>
              <div
                className="single-circle-bar wow fadeInUp"
                data-wow-delay=".7s"
              >
                <ProgressBar value={85} color={"#4e29b7"} />
                <div className="content">
                  <h6>Proactive Monitoring</h6>
                  <p>
                    End to end fiber optic cable <br />
                    nnectivity for stable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Case Studies Start >>*/}
      <div className="marque-section section-padding">
        <div className="marquee-wrapper text-slider style-height">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item style-2">
                <span className="text-slider">
                  <img src="assets/img/asterisk-3.svg" alt="img" />
                </span>
                <span className="text-slider text-style-2">IT Services</span>
                <span className="text-slider">
                  <img src="assets/img/asterisk-3.svg" alt="img" />
                </span>
                <span className="text-slider text-style-2">Cyber Security</span>
                <span className="text-slider">
                  <img src="assets/img/asterisk-3.svg" alt="img" />
                </span>
                <span className="text-slider text-style-2">Data Security</span>
                <span className="text-slider">
                  <img src="assets/img/asterisk-3.svg" alt="img" />
                </span>
                <span className="text-slider text-style-2">IT Services</span>
                <span className="text-slider">
                  <img src="assets/img/asterisk-3.svg" alt="img" />
                </span>
                <span className="text-slider text-style-2">Cyber Security</span>
                <span className="text-slider">
                  <img src="assets/img/asterisk-3.svg" alt="img" />
                </span>
                <span className="text-slider text-style-2">Data Security</span>
                <span className="text-slider">
                  <img src="assets/img/asterisk-3.svg" alt="img" />
                </span>
                <span className="text-slider text-style-2">IT Services</span>
                <span className="text-slider">
                  <img src="assets/img/asterisk-3.svg" alt="img" />
                </span>
                <span className="text-slider text-style-2">Cyber Security</span>
                <span className="text-slider">
                  <img src="assets/img/asterisk-3.svg" alt="img" />
                </span>
                <span className="text-slider text-style-2">Data Security</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*<< Case Studies Section Start >>*/}
      <section className="case-study section-padding pt-0">
        <div className="container">
          <div className="section-title style-2 text-center">
            <span className="wow fadeInUp">Case Study</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Our Recent case study
            </h2>
          </div>
        </div>
        <div className="case-study-wrapper">
          <Slider
            {...sliderProps.caseStudiesCarouselActive2}
            className="case-studies-carousel-active-2"
          >
            <div className="case-study-items">
              <div className="case-study-image">
                <img
                  src="assets/img/case-studies/05.jpg"
                  alt="case-study-img"
                />
              </div>
              <div className="case-study-content">
                <h3>
                  <Link href="project-details">
                    Professional Website Design
                  </Link>
                </h3>
                <p>Web Design &amp; Development</p>
                <Link href="project-details" className="icon">
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="case-study-items">
              <div className="case-study-image">
                <img
                  src="assets/img/case-studies/06.jpg"
                  alt="case-study-img"
                />
              </div>
              <div className="case-study-content">
                <h3>
                  <Link href="project-details">
                    {" "}
                    Strategies to Maximize Your IT ROI
                  </Link>
                </h3>
                <p>Web Design &amp; Development</p>
                <Link href="project-details" className="icon">
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="case-study-items">
              <div className="case-study-image">
                <img
                  src="assets/img/case-studies/07.jpg"
                  alt="case-study-img"
                />
              </div>
              <div className="case-study-content">
                <h3>
                  <Link href="project-details">
                    Easy Fixes for Everyday IT Annoyances
                  </Link>
                </h3>
                <p>IT Support</p>
                <Link href="project-details" className="icon">
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="case-study-items">
              <div className="case-study-image">
                <img
                  src="assets/img/case-studies/05.jpg"
                  alt="case-study-img"
                />
              </div>
              <div className="case-study-content">
                <h3>
                  <Link href="project-details">
                    10 Tools that will Save You Time
                  </Link>
                </h3>
                <p>App Development</p>
                <Link href="project-details" className="icon">
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </Slider>
        </div>
        <div className="section-padding">
          <FaqSection />
        </div>
      </section>
      {/*<< Pricing Section Start >>*/}
      <section className="pricing-section fix section-padding">
        <div className="container">
          <div className="section-title style-2 text-center">
            <span className="wow fadeInUp">Our Best Price Plan</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              WHAT WE’RE <span>OFFERING</span> TO <br />
              OUR CUSTOMERS
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="pricing-items">
                <div className="pricing-header">
                  <h2>
                    $26.9 <sub>/Monthly</sub>
                  </h2>
                  <div className="offer-text-area">
                    <h4> Medium Plan</h4>
                    <h6 className="offer">offer -30%</h6>
                  </div>
                </div>
                <ul className="pricing-list">
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    Single website
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    One-click WordPress installs
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    Free WordPress website transfer
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    Unmetered bandwidth
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    Free SSL certificate
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    Free domain included
                  </li>
                </ul>
                <div className="pricing-button">
                  <Link
                    href="contact"
                    className="theme-btn d-flex justify-content-between align-items-center"
                  >
                    <span>Get started for free</span>
                    <span>
                      <i className="far fa-long-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="pricing-items active">
                <div className="pricing-header">
                  <h2>
                    $36.9 <sub>/Monthly</sub>
                  </h2>
                  <div className="offer-text-area">
                    <h4> Medium Plan</h4>
                    <h6 className="offer">offer -30%</h6>
                  </div>
                </div>
                <ul className="pricing-list">
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    Single website
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    One-click WordPress installs
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    Free WordPress website transfer
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    Unmetered bandwidth
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    Free SSL certificate
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    Free domain included
                  </li>
                </ul>
                <div className="pricing-button">
                  <Link
                    href="contact"
                    className="theme-btn d-flex justify-content-between align-items-center"
                  >
                    <span>Get started for free</span>
                    <span>
                      <i className="far fa-long-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="pricing-items">
                <div className="pricing-header">
                  <h2>
                    $46.9 <sub>/Monthly</sub>
                  </h2>
                  <div className="offer-text-area">
                    <h4> Medium Plan</h4>
                    <h6 className="offer">offer -30%</h6>
                  </div>
                </div>
                <ul className="pricing-list">
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    Single website
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    One-click WordPress installs
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    Free WordPress website transfer
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    Unmetered bandwidth
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    Free SSL certificate
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-3" />
                    Free domain included
                  </li>
                </ul>
                <div className="pricing-button">
                  <Link
                    href="contact"
                    className="theme-btn d-flex justify-content-between align-items-center"
                  >
                    <span>Get started for free</span>
                    <span>
                      <i className="far fa-long-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Testimonial Section Start >>*/}
      <section className="testimonial-section-3 fix section-padding pt-0">
        <div className="container-fluid">
          <div className="testimonial-wrapper-3">
            <Testimonial3Slider />
          </div>
        </div>
      </section>
      {/*<< Team Section Start >>*/}
      <section className="team-section section-padding pt-0 section-bg-3">
        <div className="dot-shape-2">
          <img src="assets/img/team/dot-shape-2.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title style-2 text-center">
            <span className="wow fadeInUp">Our Expert Members</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              We’ve Exclusive real <br />
              Team member
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="team-card-items">
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Tommie J. Saruman</Link>
                  </h4>
                  <p>CEO, Founder</p>
                </div>
                <div className="team-image">
                  <img src="assets/img/team/07.jpg" alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
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
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="team-card-items active">
                <div className="team-content">
                  <h4>
                    <Link href="team-details">David A. Ricci</Link>
                  </h4>
                  <p>Senior Consultant</p>
                </div>
                <div className="team-image">
                  <img src="assets/img/team/08.jpg" alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
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
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="team-card-items">
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Floyd P. Wilson</Link>
                  </h4>
                  <p>Digital Marketer</p>
                </div>
                <div className="team-image">
                  <img src="assets/img/team/09.jpg" alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
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
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="team-card-items">
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Gregory E. Stemple</Link>
                  </h4>
                  <p>Full Stack Developer</p>
                </div>
                <div className="team-image">
                  <img src="assets/img/team/10.jpg" alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
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
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="team-button text-center mt-5 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <Link href="team" className="theme-btn theme-btn-2 hover-white">
              <span>
                Explore more team
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/*<< Cta Chat Section Start >>*/}
      <section className="cta-chat-section-2">
        <div className="container">
          <div className="cta-chat-wrapper style-2">
            <div className="chat-items wow fadeInUp" data-wow-delay=".3s">
              <div className="icon">
                <i className="flaticon-chat" />
              </div>
              <div className="content">
                <h3>Let’s Discuss &amp; Start IT Consultations</h3>
                <p>Lorem ipsum dolor sit amet, consectetur notted adipisicin</p>
              </div>
            </div>
            <Link
              href="contact"
              className="theme-btn bg-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span>
                Lets Get Started
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/*<< News Section Start >>*/}
      <section className="news-section section-padding fix">
        <div className="container">
          <div className="title-section-area">
            <div className="section-title style-2">
              <span className="wow fadeInUp">Our News &amp; Tips</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Upcoming News &amp; <span>Blog</span>
              </h2>
            </div>
            <Link
              href="news-details"
              className="theme-btn theme-btn-2 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span>
                Explore Our news
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-news-items-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/06.jpg")' }}
                >
                  <div className="post-date">
                    <h4>
                      25 <br />
                      <span>Dec</span>
                    </h4>
                  </div>
                </div>
                <div className="news-content">
                  <p>Product Design</p>
                  <h4>
                    <Link href="news-details">
                      IT Service Case Studies Accelerating Business Fly Success
                      Tech
                    </Link>
                  </h4>
                  <Link href="news-details" className="link-btn link-btn-2">
                    <span>read more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-news-items-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/07.jpg")' }}
                >
                  <div className="post-date">
                    <h4>
                      28 <br />
                      <span>Dec</span>
                    </h4>
                  </div>
                </div>
                <div className="news-content">
                  <p>IT Suport</p>
                  <h4>
                    <Link href="news-details">
                      Your One-Stop Shop for Troubleshooting and Support
                    </Link>
                  </h4>
                  <Link href="news-details" className="link-btn link-btn-2">
                    <span>read more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-news-items-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/08.jpg")' }}
                >
                  <div className="post-date">
                    <h4>
                      30 <br />
                      <span>Dec</span>
                    </h4>
                  </div>
                </div>
                <div className="news-content">
                  <p>Product Design</p>
                  <h4>
                    <Link href="news-details">
                      Essential Tips to Protect Your Business in a Digital World
                    </Link>
                  </h4>
                  <Link href="news-details" className="link-btn link-btn-2">
                    <span>read more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Contact Section Start >>*/}
      <ContactSection />
    </Layout>
  );
};
export default page;
