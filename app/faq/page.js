"use client";
import BrandSection from "@/components/BrandSection";
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import FaqSection from "@/components/FaqSection";
import Layout from "@/layouts/Layout";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
const page = () => {
  return (
    <Layout>
      <Breadcrumb pageName="Faq" />
      <section className="faq-section fix section-padding">
        <div className="container">
          <div className="faq-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title">
                  <span className="wow fadeInUp">FAQ</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Frequently Asked <br /> Questions
                  </h2>
                </div>
                <p
                  className="mt-3 mt-md-0 mb-2 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  Sed ut perspiciatis unde omniste natus voluptatem <br />{" "}
                  accusantiume rem aperia eaque quae abillo inventore <br />{" "}
                  veritatis quasi architecto beatae vitae
                </p>
                <Link
                  href="faq"
                  className="theme-btn mt-4 wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <span>
                    {" "}
                    Read More <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <Tab.Container defaultActiveKey={"general"}>
                  <div className="single-tab-items">
                    <Nav as={"ul"} className="nav mb-4">
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <Nav.Link as={"a"} eventKey="general" href="#general">
                          General
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <Nav.Link as={"a"} eventKey="service" href="#service">
                          Service
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <Nav.Link as={"a"} eventKey="product" href="#product">
                          Product
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".8s"
                      >
                        <Nav.Link as={"a"} eventKey="team" href="#team">
                          Team
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".9s"
                      >
                        <Nav.Link as={"a"} eventKey="pricing" href="#pricing">
                          Pricing
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane eventKey="general" className="tab-pane fade">
                        <div className="faq-content">
                          <Faq />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="service" className="tab-pane fade">
                        <div className="faq-content">
                          <Faq />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="product" className="tab-pane fade">
                        <div className="faq-content">
                          <Faq />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="team" className="tab-pane fade">
                        <div className="faq-content">
                          <Faq />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="pricing" className="tab-pane fade">
                        <div className="faq-content">
                          <Faq />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Project Details Image Start >>*/}
      <div className="project-details-wrapper fix section-padding pt-0">
        <div className="container">
          <div className="project-details-image mt-0">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="details-image">
                  <img src="assets/img/project/details.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="details-image">
                  <img src="assets/img/project/details-2.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="faq-section section-padding pt-0">
        <FaqSection
          extraClass="style-color"
          chartColor="#166FD3"
          titleStyle=""
        />
      </section>
      <BrandSection />
    </Layout>
  );
};
export default page;
