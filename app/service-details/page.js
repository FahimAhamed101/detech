import BrandSection from "@/components/BrandSection";
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import Layout from "@/layouts/Layout";
import Link from "next/link";
const page = () => {
  return (
    <Layout>
      <Breadcrumb pageName="Service Details" />
      <section className="service-details fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5">
              <div className="col-12 col-lg-8">
                <div className="service-details-items">
                  <div className="details-image">
                    <img src="assets/img/service/details-1.jpg" alt="img" />
                  </div>
                  <div className="details-content">
                    <h3>Digital Marketing</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Placeat qui ducimus illum modi? perspiciatis accusamus
                      soluta perferendis, ad illum, nesciunt, reiciendis iusto
                      et cupidit Repudiandae provident to consectetur, sapiente,
                      libero iure necessitatibus corporis nulla voluptate,
                      quisquam aut perspiciatis? Fugiat labore aspernatur eius,
                      perspiciatis ut molestiae, delectus rem.
                    </p>
                    <h4>Sed ut perspiciatis unde omnis iste natus et</h4>
                    <p>
                      Need something changed or is there something not quite
                      working the way you envisaged? Is your van a little old
                      and tired and need refreshing? Lorem Ipsum is simply dummy
                      text of the printing and typesetting industry. Lorem Ipsum
                      has been the industry’s standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>
                    <div className="service-details-video">
                      <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                          <div className="details-video-content">
                            <h3>Why Marketing Important ?</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisici
                              sed do eiusmod tempor incididunt ut labore et
                            </p>
                            <ul>
                              <li>
                                <i className="far fa-check" />
                                Research beyond the business plan
                              </li>
                              <li>
                                <i className="far fa-check" />
                                Marketing options and rates
                              </li>
                              <li>
                                <i className="far fa-check" />
                                The ability to turnaround consulting
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="video-image">
                            <img
                              src="assets/img/service/details-2.jpg"
                              alt="img"
                            />
                            <div className="video-box">
                              <a
                                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                                className="video-btn ripple video-popup"
                              >
                                <i className="fas fa-play" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Placeat qui ducimus illum modi? perspiciatis accusamus
                      soluta perferendis, ad illum, nesciunt, reiciendis iusto
                      et cupidit Repudiandae provident to consectetur, sapiente,
                      libero iure necessitatibus corporis nulla voluptate,
                      quisquam aut perspiciatis? Fugiat labore aspernatur eius,
                      perspiciatis ut molestiae, delectus rem.
                    </p>
                    <div className="details-image-2">
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <img
                            src="assets/img/service/details-3.jpg"
                            alt="img"
                          />
                        </div>
                        <div className="col-lg-6">
                          <img
                            src="assets/img/service/details-4.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-content">
                    <div className="faq-accordion">
                      <Faq />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="main-sidebar">
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="service-category">
                      <Link href="service-details" className="active">
                        Cloud Service
                        <i className="fal fa-long-arrow-right" />
                      </Link>
                      <Link href="service-details">
                        Web Development
                        <i className="fal fa-long-arrow-right" />
                      </Link>
                      <Link href="service-details">
                        Ui/Ux Designing
                        <i className="fal fa-long-arrow-right" />
                      </Link>
                      <Link href="service-details">
                        IT Management
                        <i className="fal fa-long-arrow-right" />
                      </Link>
                      <Link href="service-details">
                        Data Visualization
                        <i className="fal fa-long-arrow-right" />
                      </Link>
                      <Link href="service-details">
                        Security System
                        <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Any Question For Us</h3>
                    </div>
                    <form action="#" id="contact-form" className="message-form">
                      <div className="row g-3">
                        <div className="col-lg-12">
                          <div className="single-form-input">
                            <input type="text" placeholder="your name" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="single-form-input">
                            <input type="email" placeholder="email address" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="single-form-input">
                            <textarea
                              placeholder="Enter Message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button className="theme-btn" type="submit">
                            <span>
                              Get a Free Quate
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
      <BrandSection />
    </Layout>
  );
};
export default page;
