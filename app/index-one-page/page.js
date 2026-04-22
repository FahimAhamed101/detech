"use client";
import AboutSection from "@/components/AboutSection";
import Counter from "@/components/Counter";
import CtaBanner from "@/components/CtaBanner";
import FeatureIconBoxSection from "@/components/FeatureIconBoxSection";
import ServiceSection from "@/components/ServiceSection";
import { TeamSection2 } from "@/components/TeamSection";
import Layout from "@/layouts/Layout";
import { daltechutility } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect } from "react";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const page = () => {
  useEffect(() => {
    daltechutility.scrollAnimation();
  }, []);

  return (
    <Layout footer={1} header={1} single={true}>
      {/*<< Hero Section Start >>*/}
      <section className="hero-section hero-1">
        <Slider
          {...sliderProps.heroSliderActive}
          className="hero-slider-active"
        >
          <div>
            <div
              className="slide-bg bg-cover wow zoomIn"
              style={{ backgroundImage: 'url("assets/img/hero/hero-1.jpg")' }}
            >
              <div className="container">
                <div className="row g-4 justify-content-between align-items-center">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <h4
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.2"
                      >
                        5m+ Trusted Our Clients
                      </h4>
                      <h1
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.5"
                      >
                        Empower Your business Journey with it Expertise
                      </h1>
                      <div className="hero-button">
                        <Link
                          href="service-details"
                          className="theme-btn hover-white fs-lg animated"
                          data-animation-in="fadeInRight"
                          data-delay-in="0.7"
                        >
                          <span>
                            Explore Our Service
                            <i className="fas fa-chevron-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="frame-shape fs-lg animated"
                      data-animation-in="fadeInRight"
                      data-delay-in="0.5"
                    >
                      <img
                        src="assets/img/hero/frame-shape.png"
                        alt="shape-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="slide-bg bg-cover wow zoomIn"
              style={{ backgroundImage: 'url("assets/img/hero/hero-2.jpg")' }}
            >
              <div className="container">
                <div className="row g-4 justify-content-between align-items-center">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <h4
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.2"
                      >
                        5m+ Trusted Our Clients
                      </h4>
                      <h1
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.5"
                      >
                        Empower Your business Journey with it Expertise
                      </h1>
                      <div className="hero-button">
                        <Link
                          href="service-details"
                          className="theme-btn hover-white fs-lg animated"
                          data-animation-in="fadeInRight"
                          data-delay-in="0.7"
                        >
                          <span>
                            Explore Our Service
                            <i className="fas fa-chevron-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="frame-shape fs-lg animated"
                      data-animation-in="fadeInRight"
                      data-delay-in="0.5"
                    >
                      <img
                        src="assets/img/hero/frame-shape.png"
                        alt="shape-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="slide-bg bg-cover wow zoomIn"
              style={{ backgroundImage: 'url("assets/img/hero/hero-3.jpg")' }}
            >
              <div className="container">
                <div className="row g-4 justify-content-between align-items-center">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <h4
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.2"
                      >
                        5m+ Trusted Our Clients
                      </h4>
                      <h1
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.5"
                      >
                        Empower Your business Journey with it Expertise
                      </h1>
                      <div className="hero-button">
                        <Link
                          href="service-details"
                          className="theme-btn hover-white fs-lg animated"
                          data-animation-in="fadeInRight"
                          data-delay-in="0.7"
                        >
                          <span>
                            Explore Our Service
                            <i className="fas fa-chevron-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="frame-shape fs-lg animated"
                      data-animation-in="fadeInRight"
                      data-delay-in="0.5"
                    >
                      <img
                        src="assets/img/hero/frame-shape.png"
                        alt="shape-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="slide-bg bg-cover wow zoomIn"
              style={{ backgroundImage: 'url("assets/img/hero/hero-1.jpg")' }}
            >
              <div className="container">
                <div className="row g-4 justify-content-between align-items-center">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <h4
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.2"
                      >
                        5m+ Trusted Our Clients
                      </h4>
                      <h1
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.5"
                      >
                        Empower Your business Journey with it Expertise
                      </h1>
                      <div className="hero-button">
                        <Link
                          href="service-details"
                          className="theme-btn hover-white fs-lg animated"
                          data-animation-in="fadeInRight"
                          data-delay-in="0.7"
                        >
                          <span>
                            Explore Our Service
                            <i className="fas fa-chevron-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="frame-shape fs-lg animated"
                      data-animation-in="fadeInRight"
                      data-delay-in="0.5"
                    >
                      <img
                        src="assets/img/hero/frame-shape.png"
                        alt="shape-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="44px"
            height="44px"
            id="circle"
            fill="none"
            stroke="currentColor"
          >
            <circle r={20} cy={22} cx={22} id="translandcircle" />
          </symbol>
        </svg>
      </section>
      {/*<< Feature Section Start >>*/}
      <section className="feature-section fix section-padding">
        <div className="shape-image">
          <img src="assets/img/shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-feature-items">
                <div className="content">
                  <span>Features</span>
                  <h3>
                    innovative solution <br />
                    For business
                  </h3>
                </div>
                <div className="icon">
                  <img src="assets/img/feature/icon-1.svg" alt="icon-img" />
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-feature-items active">
                <div className="content">
                  <span>Features</span>
                  <h3>
                    Tech-oriented <br />
                    Services
                  </h3>
                </div>
                <div className="icon">
                  <img src="assets/img/feature/icon-2.svg" alt="icon-img" />
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-feature-items">
                <div className="content">
                  <span>Features</span>
                  <h3>
                    World class support <br />
                    for customers
                  </h3>
                </div>
                <div className="icon">
                  <img src="assets/img/feature/icon-3.svg" alt="icon-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< About Section Start >>*/}

      <section className="about-section fix section-padding pt-0" id="about">
        <AboutSection />
      </section>
      {/*<< Service Section Start >>*/}
      <ServiceSection />
      {/*<< Service Section Start >>*/}
      <section className="trusted-client-section fix section-padding pt-0">
        <div className="container">
          <div className="trusted-client-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-5">
                <div
                  className="trusted-client-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/feature/trusted.jpg")',
                  }}
                >
                  <div className="icon-box">
                    <img
                      src="assets/img/circle.png"
                      alt="img"
                      className="text-circle"
                    />
                    <div className="icon">
                      <img src="assets/img/icon.png" alt="icon-img" />
                    </div>
                  </div>
                  <div className="counter-main-area">
                    <div className="counter-area">
                      <div className="counter-items">
                        <h2>
                          <Counter end={500} />+
                        </h2>
                        <h3>Awesome clients</h3>
                      </div>
                      <div className="counter-items">
                        <h2>
                          <Counter end={5} />
                          k+
                        </h2>
                        <h3>Awesome clients</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 mt-5 mt-xl-0">
                <div className="trusted-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      5m+ Trusted Our Clients
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      We Prominent Truly trusted <br />
                      IT business solutions
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Transmds is the world’s driving worldwide coordinations
                    supplier — we <br /> uphold industry and exchange the
                    worldwide trade of merchandi
                  </p>
                  <Tab.Container defaultActiveKey={"mission"}>
                    <div className="single-tab-items">
                      <Nav as={"ul"} className="nav mb-4" role="tablist">
                        <Nav.Item
                          as={"li"}
                          className="nav-item wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <Nav.Link as={"a"} href="#mission" eventKey="mission">
                            Our Mission
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                          as={"li"}
                          className="nav-item wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <Nav.Link
                            as={"a"}
                            href="#strategy"
                            eventKey="strategy"
                          >
                            Our Strategy
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                          as={"li"}
                          className="nav-item wow fadeInUp"
                          data-wow-delay=".7s"
                        >
                          <Nav.Link as={"a"} href="#vision" eventKey="vision">
                            our vision
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content className="tab-content">
                        <Tab.Pane eventKey="mission" className="tab-pane fade">
                          <div className="tab-content-items">
                            <ul className="wow fadeInUp" data-wow-delay=".3s">
                              <li>
                                <i className="fas fa-check" />
                                Preaching Worship An Online Family
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Preaching Worship An Online Family
                              </li>
                            </ul>
                            <div className="icon-area">
                              <div
                                className="icon-items d-flex align-items-center gap-3 wow fadeInUp"
                                data-wow-delay=".5s"
                              >
                                <div className="icon">
                                  <i className="flaticon-microchip" />
                                </div>
                                <h6>Artificial intelligence</h6>
                              </div>
                              <div
                                className="icon-items d-flex align-items-center gap-3 wow fadeInUp"
                                data-wow-delay=".7s"
                              >
                                <div className="icon">
                                  <i className="flaticon-microchip" />
                                </div>
                                <h6>Clouds Backup Services</h6>
                              </div>
                            </div>
                            <div
                              className="pro-items wow fadeInUp"
                              data-wow-delay=".9s"
                            >
                              <div className="pro-head">
                                <h6 className="title">
                                  Real Technology Solution
                                </h6>
                                <span className="point">75%</span>
                              </div>
                              <div className="progress">
                                <div className="progress-value" />
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="strategy" className="tab-pane fade">
                          <div className="tab-content-items">
                            <ul>
                              <li>
                                <i className="fas fa-check" />
                                Preaching Worship An Online Family
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Preaching Worship An Online Family
                              </li>
                            </ul>
                            <div className="icon-area">
                              <div className="icon-items d-flex align-items-center gap-3">
                                <div className="icon">
                                  <i className="flaticon-microchip" />
                                </div>
                                <h6>Artificial intelligence</h6>
                              </div>
                              <div className="icon-items d-flex align-items-center gap-3">
                                <div className="icon">
                                  <i className="flaticon-microchip" />
                                </div>
                                <h6>Clouds Backup Services</h6>
                              </div>
                            </div>
                            <div className="pro-items">
                              <div className="pro-head">
                                <h6 className="title">
                                  Real Technology Solution
                                </h6>
                                <span className="point">75%</span>
                              </div>
                              <div className="progress">
                                <div className="progress-value" />
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="vision" className="tab-pane fade">
                          <div className="tab-content-items">
                            <ul>
                              <li>
                                <i className="fas fa-check" />
                                Preaching Worship An Online Family
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Preaching Worship An Online Family
                              </li>
                            </ul>
                            <div className="icon-area">
                              <div className="icon-items d-flex align-items-center gap-3">
                                <div className="icon">
                                  <i className="flaticon-microchip" />
                                </div>
                                <h6>Artificial intelligence</h6>
                              </div>
                              <div className="icon-items d-flex align-items-center gap-3">
                                <div className="icon">
                                  <i className="flaticon-microchip" />
                                </div>
                                <h6>Clouds Backup Services</h6>
                              </div>
                            </div>
                            <div className="pro-items">
                              <div className="pro-head">
                                <h6 className="title">
                                  Real Technology Solution
                                </h6>
                                <span className="point">75%</span>
                              </div>
                              <div className="progress">
                                <div className="progress-value" />
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Tab.Container>
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
      {/*<< Cta Banner Section Start >>*/}
      <CtaBanner />
      {/*<< Feature Icon Box Section Start >>*/}
      <FeatureIconBoxSection />
      {/*<< Team Section Start >>*/}
      <TeamSection2 />
      {/*<< Case Studies Start >>*/}
      <div className="marque-section section-padding pt-0">
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">arketing</span>
                <span className="text-slider">Eit</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Co</span>
                <span className="text-slider">advisor</span>
                <span className="text-slider style-border" />
                <span className="text-slider">it</span>
                <span className="text-slider">consultancy</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Data</span>
                <span className="text-slider">recover</span>
                <span className="text-slider">arketing</span>
                <span className="text-slider">Eit</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Co</span>
                <span className="text-slider">advisor</span>
                <span className="text-slider style-border" />
                <span className="text-slider">it</span>
                <span className="text-slider">consultancy</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Data</span>
                <span className="text-slider">recover</span>
                <span className="text-slider">arketing</span>
                <span className="text-slider">Eit</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Co</span>
                <span className="text-slider">advisor</span>
                <span className="text-slider style-border" />
                <span className="text-slider">it</span>
                <span className="text-slider">consultancy</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Data</span>
                <span className="text-slider">recover</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*<< Case Studies Start >>*/}
      <section className="case-studies-1 section-padding fix pt-0">
        <div className="container">
          <div className="case-studies-wrapper">
            <div className="row g-0">
              <div className="col-xl-7">
                <div className="case-studies-content-area">
                  <div className="section-title">
                    <span className="wow fadeInUp">our case studies</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Awesome projects created <br />
                      by our team
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Transmds is the world’s driving worldwide coordinations
                    supplier — we <br /> uphold industry and exchange the
                    worldwide trade of merchandi
                  </p>
                  <div className="case-studies-items">
                    <div className="case-studies-content">
                      <div
                        className="content wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <h5 className="mb-2 wow fadeInUp" data-wow-delay=".3s">
                          branding/
                        </h5>
                        <h3>
                          <Link
                            href="project-details"
                            className="changeImage2 wow fadeInUp pt-0 clicked"
                            data-image="assets/img/project/01.jpg"
                          >
                            Coors Banquet Brand design
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="content wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <h5 className="mb-2">App Design/</h5>
                        <h3>
                          <Link
                            href="project-details"
                            className="changeImage2 wow fadeInUp pt-0 clicked"
                            data-image="assets/img/project/02.jpg"
                          >
                            Complete Project Marketing
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="case-studies-content">
                      <div
                        className="content wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <h5 className="mb-2">Market/</h5>
                        <h3>
                          <Link
                            href="project-details"
                            className="changeImage2 wow fadeInUp pt-0 clicked"
                            data-image="assets/img/project/03.jpg"
                          >
                            Digital Marketing 2024
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="content wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <h5 className="mb-2">UI Design/</h5>
                        <h3>
                          <Link
                            href="project-details"
                            className="changeImage2 wow fadeInUp pt-0 clicked"
                            data-image="assets/img/project/04.jpg"
                          >
                            Coors Banquet Brand design
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="case-studies-content">
                      <div
                        className="content wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <h5 className="mb-2">development/</h5>
                        <h3>
                          <Link
                            href="project-details"
                            className="changeImage2 wow fadeInUp pt-0 clicked"
                            data-image="assets/img/project/05.jpg"
                          >
                            web development Brand design
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="content wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <h5 className="mb-2">branding/</h5>
                        <h3>
                          <Link
                            href="project-details"
                            className="changeImage2 wow fadeInUp pt-0 clicked"
                            data-image="assets/img/project/06.jpg"
                          >
                            Coors Banquet Brand design
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 mt-5 mt-xl-0">
                <div className="image case-studies-image">
                  <img
                    id="myImage2"
                    src="assets/img/project/01.jpg"
                    alt="image"
                  />
                  <Link href="project-details" className="icon">
                    <i className="flaticon-up-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Counter Section Start >>*/}
      <section className="counter-section section-padding pt-0 section-bg">
        <div className="line-shape">
          <img src="assets/img/line.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="counter-wrapper">
            <div className="row g-4">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="counter-items text-center">
                  <div className="icon center">
                    <i className="flaticon-earth-globe" />
                  </div>
                  <div className="content">
                    <h2>
                      <Counter end={35} />+
                    </h2>
                    <p>
                      Countries <br />
                      Represented
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="counter-items text-center">
                  <div className="icon center">
                    <i className="flaticon-verified" />
                  </div>
                  <div className="content">
                    <h2>
                      <Counter end={853} />+
                    </h2>
                    <p>
                      Completed <br />
                      Project
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="counter-items text-center">
                  <div className="icon center">
                    <i className="flaticon-financial-profit" />
                  </div>
                  <div className="content">
                    <h2>
                      <Counter end={55} />+
                    </h2>
                    <p>
                      Revenew <br />
                      In per year
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="counter-items text-center">
                  <div className="icon center">
                    <i className="flaticon-infrastructure" />
                  </div>
                  <div className="content">
                    <h2>
                      <Counter end={35} />+
                    </h2>
                    <p>
                      Experience <br />
                      Team Member
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Testimonial Section Start >>*/}
      <section className="testimonial-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">trusted clients feedback</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Why People Say About Our <br />
              Business Services
            </h2>
          </div>
          <Slider
            {...sliderProps.testimonialCarouselActive}
            className="testimonial-carousel-active"
          >
            <div className="testimonial-card-items">
              <div className="author-items">
                <div
                  className="author-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/testimonial/01.png")',
                  }}
                />
                <div className="author-content">
                  <h5>Leslie Alexander</h5>
                  <span>Graphics Design</span>
                </div>
              </div>
              <p>
                creative agency, we believe in the Eid and innovation. We are
                constantly melt of what is possible, and strive to cat only bea
                utiful and effective,but shark inventore veritatis et quasi
                archite cto beatae citae dicta sunt atlantic
              </p>
              <ul>
                <li>January 23, 2024</li>
              </ul>
            </div>
            <div className="testimonial-card-items">
              <div className="author-items">
                <div
                  className="author-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/testimonial/03.png")',
                  }}
                />
                <div className="author-content">
                  <h5>Jhon Dev</h5>
                  <span>UI Designer</span>
                </div>
              </div>
              <p>
                creative agency, we believe in the Eid and innovation. We are
                constantly melt of what is possible, and strive to cat only bea
                utiful and effective,but shark inventore veritatis et quasi
                archite cto beatae citae dicta sunt atlantic
              </p>
              <ul>
                <li>January 23, 2024</li>
              </ul>
            </div>
            <div className="testimonial-card-items">
              <div className="author-items">
                <div
                  className="author-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/testimonial/02.png")',
                  }}
                />
                <div className="author-content">
                  <h5>Salman Ahmed</h5>
                  <span>WordPress Developer</span>
                </div>
              </div>
              <p>
                creative agency, we believe in the Eid and innovation. We are
                constantly melt of what is possible, and strive to cat we pride
                ourselve on delivering
              </p>
              <ul>
                <li>May 15, 2023</li>
              </ul>
            </div>
            <div className="testimonial-card-items">
              <div className="author-items">
                <div
                  className="author-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/testimonial/01.png")',
                  }}
                />
                <div className="author-content">
                  <h5>Shikon Bro</h5>
                  <span>Frontend Engineer</span>
                </div>
              </div>
              <p>
                creative agency, we believe in the Eid and innovation. We are
                constantly melt of what is possible, and strive to cat only bea
                utiful and effective,but shark inventore veritatis et quasi
                archite cto beatae citae dicta sunt atlantic
              </p>
              <ul>
                <li>January 23, 2024</li>
              </ul>
            </div>
          </Slider>
        </div>
      </section>
      {/*<< Cta Chat Section Start >>*/}
      <section className="cta-chat-section section-padding pt-0">
        <div className="container">
          <div className="cta-chat-wrapper">
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
      <section className="news-section fix section-padding pt-0" id="blog">
        <div className="container">
          <div className="section-title">
            <span className="wow fadeInUp">trusted news &amp; blogs</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Read Our News &amp; Blogs
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="single-news-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/01.jpg")' }}
                >
                  <Link href="news-details" className="icon">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="news-content">
                  <ul className="post-date">
                    <li>May 28, 2023</li>
                  </ul>
                  <h3>
                    <Link href="news-details">
                      From Newbie to Ninja: 10 Essential IT Skills You Need
                    </Link>
                  </h3>
                  <div className="news-button mt-4">
                    <Link href="news-details" className="link-btn">
                      <span>read more</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="single-news-items active">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/02.jpg")' }}
                >
                  <Link href="news-details" className="icon">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="news-content">
                  <ul className="post-date">
                    <li>june 28, 2023</li>
                  </ul>
                  <h3>
                    <Link href="news-details">
                      A Complete Guide to Business Insurance perfect
                    </Link>
                  </h3>
                  <div className="news-button mt-4">
                    <Link href="news-details" className="link-btn">
                      <span>read more</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Contact Section Start >>*/}
      <section className="contact-section fix section-padding" id="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="shape-image">
              <img src="assets/img/contact/bg-shape.png" alt="shape-img" />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="contact-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/contact/01.jpg")',
                  }}
                >
                  <div className="shape-image-2">
                    <img
                      src="assets/img/contact/shape-img.png"
                      alt="shape-img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="contact-area">
                  <div className="section-title">
                    <span className="wow fadeInUp">get in touch immidiate</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Let’s Work Together
                    </h2>
                  </div>
                  <div className="contact-form-items mt-5 mt-md-0">
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
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div
                          className="col-lg-6 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="form-clt">
                            <input
                              type="text"
                              name="name"
                              id="name2"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                        <div
                          className="col-lg-6 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="form-clt">
                            <input
                              type="text"
                              name="email"
                              id="email"
                              placeholder="Email Address"
                            />
                          </div>
                        </div>
                        <div
                          className="col-lg-6 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="form-clt">
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                        <div
                          className="col-lg-12 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="form-clt">
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Write Your Message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div
                          className="col-lg-12 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <button type="submit" className="theme-btn">
                            <span>
                              Send Us Messages
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
    </Layout>
  );
};
export default page;
