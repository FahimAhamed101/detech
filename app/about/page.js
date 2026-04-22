"use client";
import AboutSection from "@/components/AboutSection";
import Breadcrumb from "@/components/Breadcrumb";
import Marque from "@/components/Marque";
import NewsSection from "@/components/NewsSection";
import ServiceCounterSection from "@/components/ServiceCounterSection";
import ServiceSection from "@/components/ServiceSection";
import TeamSection from "@/components/TeamSection";
import BrandSlider from "@/components/sliders/BrandSlider";
import Testimonial4Slider from "@/components/sliders/Testimonial4Slider";
import Layout from "@/layouts/Layout";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
const page = () => {
  return (
    <Layout>
      <Breadcrumb />
      <section className="about-section fix section-padding">
        <AboutSection />
      </section>
      <ServiceSection />
      <section className="manage-it-section fix section-padding">
        <div className="container">
          <div className="manage-it-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <div className="manage-it-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">How to Manage</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Our Managed IT Services let you Concentrate on What
                      Matters
                    </h2>
                  </div>
                  <Tab.Container defaultActiveKey={"approach"}>
                    <div className="single-tab-items mt-4 mt-md-0">
                      <Nav as={"ul"} className="nav mb-4" role="tablist">
                        <Nav.Item
                          as={"li"}
                          className="nav-item wow fadeInUp"
                          data-wow-delay=".3s"
                          role="presentation"
                        >
                          <Nav.Link
                            as={"a"}
                            eventKey={"approach"}
                            href="#approach"
                            data-bs-toggle="tab"
                            className="nav-link"
                            aria-selected="true"
                            role="tab"
                          >
                            Our Approach
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                          as={"li"}
                          className="nav-item wow fadeInUp"
                          data-wow-delay=".5s"
                          role="presentation"
                        >
                          <Nav.Link
                            as={"a"}
                            eventKey={"project"}
                            href="#project"
                            data-bs-toggle="tab"
                            className="nav-link"
                            aria-selected="false"
                            role="tab"
                            tabIndex={-1}
                          >
                            Project Goals
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                          as={"li"}
                          className="nav-item wow fadeInUp"
                          data-wow-delay=".7s"
                          role="presentation"
                        >
                          <Nav.Link
                            as={"a"}
                            eventKey={"advisory"}
                            href="#advisory"
                            data-bs-toggle="tab"
                            className="nav-link"
                            aria-selected="false"
                            role="tab"
                            tabIndex={-1}
                          >
                            Advisory
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content className="tab-content">
                        <Tab.Pane
                          eventKey="approach"
                          className="tab-pane fade"
                          role="tabpanel"
                        >
                          <div className="tab-content-items">
                            <p className="wow fadeInUp" data-wow-delay=".3s">
                              At veroeos accusamus dignissimos ducimus
                              blanditiis volupta delenite atque <br />
                              corrupti quos dolores et quas molestias excepturi
                              sint occaecatie
                            </p>
                            <div className="list-area">
                              <ul className="wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                  <i className="fas fa-check" />
                                  Efficient Sprint Planning
                                </li>
                                <li>
                                  <i className="fas fa-check" />
                                  Standups and Demos
                                </li>
                              </ul>
                              <ul className="wow fadeInUp" data-wow-delay=".7s">
                                <li>
                                  <i className="fas fa-check" />
                                  Iterative Delivery Approach
                                </li>
                                <li>
                                  <i className="fas fa-check" />
                                  Problem-solving
                                </li>
                              </ul>
                            </div>
                            <Link
                              href="about"
                              className="theme-btn wow fadeInUp"
                              data-wow-delay=".9s"
                            >
                              <span>
                                Learn More
                                <i className="fas fa-chevron-right" />
                              </span>
                            </Link>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="project"
                          className="tab-pane fade"
                          role="tabpanel"
                        >
                          <div className="tab-content-items">
                            <p>
                              At veroeos accusamus dignissimos ducimus
                              blanditiis volupta delenite atque <br />
                              corrupti quos dolores et quas molestias excepturi
                              sint occaecatie
                            </p>
                            <div className="list-area">
                              <ul>
                                <li>
                                  <i className="fas fa-check" />
                                  Efficient Sprint Planning
                                </li>
                                <li>
                                  <i className="fas fa-check" />
                                  Standups and Demos
                                </li>
                              </ul>
                              <ul>
                                <li>
                                  <i className="fas fa-check" />
                                  Iterative Delivery Approach
                                </li>
                                <li>
                                  <i className="fas fa-check" />
                                  Problem-solving
                                </li>
                              </ul>
                            </div>
                            <Link href="about" className="theme-btn">
                              <span>
                                Learn More
                                <i className="fas fa-chevron-right" />
                              </span>
                            </Link>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="advisory"
                          className="tab-pane fade"
                          role="tabpanel"
                        >
                          <div className="tab-content-items">
                            <p>
                              At veroeos accusamus dignissimos ducimus
                              blanditiis volupta delenite atque <br />
                              corrupti quos dolores et quas molestias excepturi
                              sint occaecatie
                            </p>
                            <div className="list-area">
                              <ul>
                                <li>
                                  <i className="fas fa-check" />
                                  Efficient Sprint Planning
                                </li>
                                <li>
                                  <i className="fas fa-check" />
                                  Standups and Demos
                                </li>
                              </ul>
                              <ul>
                                <li>
                                  <i className="fas fa-check" />
                                  Iterative Delivery Approach
                                </li>
                                <li>
                                  <i className="fas fa-check" />
                                  Problem-solving
                                </li>
                              </ul>
                            </div>
                            <Link href="about" className="theme-btn">
                              <span>
                                Learn More
                                <i className="fas fa-chevron-right" />
                              </span>
                            </Link>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Tab.Container>
                </div>
              </div>
              <div
                className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div
                  className="manage-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/about/about-7.jpg")',
                  }}
                >
                  <div className="counting-shape">
                    <img src="assets/img/counting.png" alt="shape-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Service Counter Section Start >>*/}
      <ServiceCounterSection />
      {/*<< Team Section Start >>*/}
      <TeamSection />
      <Marque />
      <Testimonial4Slider />
      <div className="brand-section-3 fix section-padding pt-0">
        <div className="container">
          <div className="brand-wrapper">
            <BrandSlider />
          </div>
        </div>
      </div>
      <NewsSection sectionClass="news-section-2" />
    </Layout>
  );
};
export default page;
