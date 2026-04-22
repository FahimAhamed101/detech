"use client";
import BrandSection from "@/components/BrandSection";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/layouts/Layout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const page = () => {
  return (
    <Layout>
      <Breadcrumb pageName="Project Two" />
      <section className="case-study-2 fix section-padding">
        <div className="container">
          <div className="section-title style-2 text-center">
            <span className="wow fadeInUp">Our Recent case study</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              WHAT WE’RE <span>OFFERING</span> TO <br />
              OUR CUSTOMERS
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
                  src="assets/img/case-studies/07.jpg"
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
          </Slider>
        </div>
      </section>
      <BrandSection />
    </Layout>
  );
};
export default page;
