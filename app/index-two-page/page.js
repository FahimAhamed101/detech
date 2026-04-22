"use client";
import Counter from "@/components/Counter";
import Faq from "@/components/Faq";
import Marque from "@/components/Marque";
import NewsSection from "@/components/NewsSection";
import ProgressBar from "@/components/ProgressBar";
import ServiceCounterSection from "@/components/ServiceCounterSection";
import { ServiceSection2 } from "@/components/ServiceSection";
import TeamSection from "@/components/TeamSection";
import BrandSlider from "@/components/sliders/BrandSlider";
import Layout from "@/layouts/Layout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const page = () => {
  return (
    <Layout header={2} footer={2} single={true}>
      {/*<< Hero Section Start >>*/}
      <section className="hero-section hero-2 fix">
        <div className="text-transparent">
          <h2>business</h2>
        </div>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-8">
              <div className="hero-content">
                <h5 className="wow fadeInUp">5m+ Trusted Our Clients</h5>
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Startup Business of <br />
                  Vigilance in the World of Digital <span>Tricks</span>
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  themexrider vibranting is the world’s driving worldwide
                  coordinations <br /> supplier — we uphold industry and
                  exchange the worldwide trade
                </p>
                <div className="hero-button">
                  <Link
                    href="service-details"
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <span>
                      Explore Our Service
                      <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                  <Link
                    href="news-details"
                    className="link-btn wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <span>read more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-image">
                <div className="frame-shape">
                  <img src="assets/img/hero/frame-1.png" alt="shape-img" />
                </div>
                <div className="frame-shape-2">
                  <img src="assets/img/hero/frame-2.png" alt="shape-img" />
                </div>
                <div className="frame-shape-3">
                  <img src="assets/img/hero/frame-3.png" alt="shape-img" />
                </div>
                <img
                  src="assets/img/hero/hero-4.jpg"
                  alt="hero-img"
                  className="wow fadeInUp"
                  data-wow-delay=".4s"
                />
                <div className="circle-shape">
                  <img src="assets/img/hero/circle-shape.png" alt="shape-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Cta Discuss Section Start >>*/}
      <section className="cta-discuss-section">
        <div className="container">
          <div className="cta-discuss-wrapper">
            <div
              className="cta-discuss-image wow fadeInUp"
              data-wow-delay=".3s"
            >
              <img src="assets/img/discuss.jpg" alt="img" />
              <div className="icon">
                <i className="flaticon-chat" />
              </div>
            </div>
            <div className="cta-discuss-content">
              <div className="section-title mb-0">
                <span className="wow fadeInUp" data-wow-delay=".5s">
                  <i className="far fa-arrow-right" />
                  consult with our team
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".7s">
                  Let’s <span>Discuss &amp; Start</span> IT Consultations
                </h2>
              </div>
              <div className="cta-button wow fadeInUp" data-wow-delay=".9s">
                <Link href="contact" className="link-btn">
                  <span>Get quate now</span>
                  <i className="fas fa-chevron-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Service Section Start >>*/}
      <section className="service-section-2 fix section-padding" id="service">
        <ServiceSection2 showItem={4} />
      </section>
      {/*<< About Section Start >>*/}
      <section
        className="about-section section-padding section-bg-2 pt-0"
        id="about"
      >
        <div className="left-shape">
          <img src="assets/img/about/shape-image.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div className="border-shape">
                    <img
                      src="assets/img/about/border-shape-2.png"
                      alt="shape-img"
                    />
                  </div>
                  <div
                    className="about-image bg-cover wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      backgroundImage: 'url("assets/img/about/about-3.jpg")',
                    }}
                  >
                    <div
                      className="about-image-2 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <img src="assets/img/about/about-4.jpg" alt="about-img" />
                    </div>
                    <div
                      className="experience-text-area wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h2>
                        <Counter end={25} />+
                      </h2>
                      <h6>Years Of Experience</h6>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star me-2" />
                        <span>Trustpoint</span>
                      </div>
                      <div className="ratting">
                        <span>4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      5m+ Trusted Our Clients
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      professional business startup Journey with Expertise
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
                  <div className="icon-area">
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <div className="icon">
                        <i className="flaticon-devops" />
                      </div>
                      <div className="content">
                        <h5>Startup Consulting</h5>
                        <p>
                          We are a dynamic and forward-thinking startup
                          dedicated to revolution
                        </p>
                      </div>
                    </div>
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <div className="icon">
                        <i className="flaticon-microchip" />
                      </div>
                      <div className="content">
                        <h5>Smart AI &amp; chatbots</h5>
                        <p>
                          We are a dynamic and forward-thinking startup
                          dedicated to revolution
                        </p>
                      </div>
                    </div>
                  </div>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".4s">
                    <li>
                      <i className="far fa-check me-2" />
                      We approached WiaTech with complex project deliver
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Awards Winning IT Solutions Company
                    </li>
                  </ul>
                  <div
                    className="about-author wow fadeInUp"
                    data-wow-delay=".6s"
                  >
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
                        <div className="client-img">
                          <img
                            src="assets/img/about/client-6.png"
                            alt="client-img"
                          />
                        </div>
                      </div>
                      <div className="content">
                        <p>10m+ Trusted Global Customers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Case Studies Start >>*/}
      <div className="marque-section section-padding section-bg-2 pt-0">
        <div className="container-fluid">
          <div className="marquee-wrapper text-slider style-height">
            <div className="marquee-inner to-left">
              <ul className="marqee-list d-flex">
                <li className="marquee-item style-2">
                  <span className="text-slider">
                    <img src="assets/img/asterisk.svg" alt="img" />
                  </span>
                  <span className="text-slider text-style">IT Services</span>
                  <span className="text-slider">
                    <img src="assets/img/asterisk.svg" alt="img" />
                  </span>
                  <span className="text-slider text-style">Cyber Security</span>
                  <span className="text-slider">
                    <img src="assets/img/asterisk.svg" alt="img" />
                  </span>
                  <span className="text-slider text-style">Data Security</span>
                  <span className="text-slider">
                    <img src="assets/img/asterisk.svg" alt="img" />
                  </span>
                  <span className="text-slider text-style">IT Services</span>
                  <span className="text-slider">
                    <img src="assets/img/asterisk.svg" alt="img" />
                  </span>
                  <span className="text-slider text-style">Cyber Security</span>
                  <span className="text-slider">
                    <img src="assets/img/asterisk.svg" alt="img" />
                  </span>
                  <span className="text-slider text-style">Data Security</span>
                  <span className="text-slider">
                    <img src="assets/img/asterisk.svg" alt="img" />
                  </span>
                  <span className="text-slider text-style">IT Services</span>
                  <span className="text-slider">
                    <img src="assets/img/asterisk.svg" alt="img" />
                  </span>
                  <span className="text-slider text-style">Cyber Security</span>
                  <span className="text-slider">
                    <img src="assets/img/asterisk.svg" alt="img" />
                  </span>
                  <span className="text-slider text-style">Data Security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*<< Working Process Section Start >>*/}
      <section className="woeking-process fix section-padding section-bg-3">
        <div className="left-shape">
          <img src="assets/img/shape-left.jpg" alt="img" />
        </div>
        <div className="right-shape">
          <img src="assets/img/shape-right.jpg" alt="img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="color-style wow fadeInUp">
              how we process our work
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              See Our Working Process <br />
              How We Manage
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="process-items">
                <span className="process-number">01</span>
                <div className="content">
                  <div className="icon">
                    <i className="flaticon-service" />
                  </div>
                  <h3>Select Services</h3>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="process-items">
                <span className="process-number">02</span>
                <div className="content">
                  <div className="icon">
                    <i className="flaticon-talk" />
                  </div>
                  <h3>Schedule Meeting</h3>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="process-items">
                <span className="process-number">03</span>
                <div className="content">
                  <div className="icon">
                    <i className="flaticon-brainstorming" />
                  </div>
                  <h3>Contact With Team</h3>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="process-items">
                <span className="process-number">04</span>
                <div className="content">
                  <div className="icon">
                    <i className="flaticon-gear" />
                  </div>
                  <h3>Select Services</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="cta-banner-2 mb-0 wow fadeInUp" data-wow-delay=".4s">
            <div className="cta-items">
              <img src="assets/img/client.png" alt="img" />
              <div className="content">
                <p>Ready to Get</p>
                <h6>Consultations to Our Expertise</h6>
              </div>
            </div>
            <Link href="contact" className="theme-btn bg-white">
              <span>
                Read More
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/*<< Service Section Start >>*/}
      <section className="service-section fix section-padding section-bg-2">
        <div className="left-shape">
          <img src="assets/img/service/left-shape.png" alt="shape-img" />
        </div>
        <div className="right-shape">
          <img src="assets/img/service/right-shape.png" alt="shape-img" />
        </div>
        <div className="line-shape-2">
          <img src="assets/img/service/line-shape-2.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="service-wrapper-2">
            <div className="row justify-content-between">
              <div className="col-lg-4">
                <div className="service-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">experienced services</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Most experienced our services
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Transmds is the world’s driving worldwide exchange the
                    worldwide trade of
                  </p>
                  <div
                    className="service-button wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <Link href="contact" className="theme-btn">
                      <span>
                        Explore Our Service
                        <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0">
                <div className="row g-4">
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="service-box-items-2">
                      <div className="icon">
                        <i className="flaticon-blueprint" />
                      </div>
                      <div className="content">
                        <h3>
                          <Link href="service-details">Project management</Link>
                        </h3>
                        <p>
                          Our service offerings enhance experience throughout
                          highly
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="service-box-items-2 active">
                      <div className="icon">
                        <i className="flaticon-hiring" />
                      </div>
                      <div className="content">
                        <h3>
                          <Link href="service-details">Human Resources</Link>
                        </h3>
                        <p>
                          Our service offerings enhance experience throughout
                          highly
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div className="service-box-items-2">
                      <div className="icon">
                        <i className="flaticon-infrastructure" />
                      </div>
                      <div className="content">
                        <h3>
                          <Link href="service-details">
                            Infrastructure Plan
                          </Link>
                        </h3>
                        <p>
                          Our service offerings enhance experience throughout
                          highly
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <div className="service-box-items-2">
                      <div className="icon">
                        <i className="flaticon-analytics" />
                      </div>
                      <div className="content">
                        <h3>
                          <Link href="service-details">Data and analytics</Link>
                        </h3>
                        <p>
                          Our service offerings enhance experience throughout
                          highly
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Case Studies Section Start >>*/}
      <section className="case-studies fix section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">our case studies</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              we share our recent work <br /> case studies for clients
            </h2>
          </div>
        </div>
        <div className="case-studies-wrapper-2">
          <Slider
            {...sliderProps.caseStudiesCarouselActive}
            className="case-studies-carousel-active"
          >
            <div className="case-studies-items">
              <div className="case-studies-image">
                <img src="assets/img/case-studies/01.jpg" alt="case-img" />
                <Link href="project-details" className="icon">
                  <i className="flaticon-next-1" />
                </Link>
                <div className="case-studies-content">
                  <p>it solution</p>
                  <h4>
                    <Link href="project-details">
                      Technology and artificial Maintenance
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="case-studies-items">
              <div className="case-studies-image">
                <img src="assets/img/case-studies/02.jpg" alt="case-img" />
                <Link href="project-details" className="icon">
                  <i className="flaticon-next-1" />
                </Link>
                <div className="case-studies-content">
                  <p>it solution</p>
                  <h4>
                    <Link href="project-details">
                      Technology and artificial Maintenance
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="case-studies-items">
              <div className="case-studies-image">
                <img src="assets/img/case-studies/03.jpg" alt="case-img" />
                <Link href="project-details" className="icon">
                  <i className="flaticon-next-1" />
                </Link>
                <div className="case-studies-content">
                  <p>Cyber Security</p>
                  <h4>
                    <Link href="project-details">
                      Transforming Businesses with Technology Solutions
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="case-studies-items">
              <div className="case-studies-image">
                <img src="assets/img/case-studies/04.jpg" alt="case-img" />
                <Link href="project-details" className="icon">
                  <i className="flaticon-next-1" />
                </Link>
                <div className="case-studies-content">
                  <p>Cyber Security</p>
                  <h4>
                    <Link href="project-details">
                      Transforming Businesses with Technology Solutions
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="case-studies-items">
              <div className="case-studies-image">
                <img src="assets/img/case-studies/01.jpg" alt="case-img" />
                <Link href="project-details" className="icon">
                  <i className="flaticon-next-1" />
                </Link>
                <div className="case-studies-content">
                  <p>it solution</p>
                  <h4>
                    <Link href="project-details">
                      Technology and artificial Maintenance
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*<< Service Counter Section Start >>*/}
      <ServiceCounterSection />
      {/*<< Team Section Start >>*/}
      <TeamSection />
      {/*<< Marque Section Start >>*/}
      <Marque />
      {/*<< Faq Section Start >>*/}
      <section className="faq-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
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
                  </ul>
                  <div className="circle-progress-bar-wrapper mbm-10">
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".8s"
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
                      data-wow-delay=".9s"
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
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="faq-content">
                  <Faq />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Testimonial Section Start >>*/}
      <section className="testimonial-section-2 section-bg-2 fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">IT Support Help</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Why People Say About Our <br /> Business Services
            </h2>
          </div>
        </div>
        <div className="testimonial-wrapper">
          <Slider
            {...sliderProps.testimonialCarouselActive2}
            className="testimonial-carousel-active-2"
          >
            <div className="testimonial-card-items-2">
              <div
                className="testimonial-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/testimonial/03.png")',
                }}
              />
              <div className="testimonial-content">
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star color-2" />
                </div>
                <p>
                  “Good Time is very good in what they're doing and more than
                  happy to challenge and push you to think about your decisions
                  both from usability and design standpoints.”
                </p>
                <div className="author-name">
                  <h6>Cameron Williamson</h6>
                  <p>CEO, Business Co</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card-items-2">
              <div
                className="testimonial-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/testimonial/04.png")',
                }}
              />
              <div className="testimonial-content">
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star color-2" />
                </div>
                <p>
                  “Good Time is very good in what they're doing and more than
                  happy to challenge and push you to think about your decisions
                  both from usability and design standpoints.”
                </p>
                <div className="author-name">
                  <h6>Salman Ahmed</h6>
                  <p>Full Stack Developer</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card-items-2">
              <div
                className="testimonial-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/testimonial/05.png")',
                }}
              />
              <div className="testimonial-content">
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star color-2" />
                </div>
                <p>
                  “Good Time is very good in what they're doing and more than
                  happy to challenge and push you to think about your decisions
                  both from usability and design standpoints.”
                </p>
                <div className="author-name">
                  <h6>William Thomas Brown</h6>
                  <p>UI Designer</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card-items-2">
              <div
                className="testimonial-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/testimonial/03.png")',
                }}
              />
              <div className="testimonial-content">
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star color-2" />
                </div>
                <p>
                  “Good Time is very good in what they're doing and more than
                  happy to challenge and push you to think about your decisions
                  both from usability and design standpoints.”
                </p>
                <div className="author-name">
                  <h6>Amelia Rose Wilson</h6>
                  <p>Business Co</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card-items-2">
              <div
                className="testimonial-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/testimonial/04.png")',
                }}
              />
              <div className="testimonial-content">
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star color-2" />
                </div>
                <p>
                  "Standpoints Time is very good in what they're doing and more
                  than happy to challenge and push you to think about your
                  decisions both from usability and design standpoints.”
                </p>
                <div className="author-name">
                  <h6>Ethan James Miller</h6>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*<< News Section Start >>*/}
      <NewsSection />
      {/*<< Brand Section Start >>*/}
      <div className="brand-section-2 fix section-bg-2">
        <div className="container">
          <div className="brand-wrapper style-2">
            <BrandSlider />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default page;
