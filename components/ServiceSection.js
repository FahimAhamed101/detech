"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const ServiceSection = () => {
  return (
    <section
      className="service-section fix section-padding section-bg"
      id="service"
    >
      <div className="shape-image">
        <img src="assets/img/service/shape.png" alt="shape-img" />
      </div>
      <div className="bottom-shape">
        <img src="assets/img/service/bottom-shape.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="title-section-area">
          <div className="section-title">
            <span className="wow fadeInUp">our most premium services</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Most experienced <br />
              our services
            </h2>
          </div>
          <Link
            href="service-details"
            className="theme-btn wow fadeInUp"
            data-wow-delay=".5s"
          >
            <span>
              Explore Our Service
              <i className="fas fa-chevron-right" />
            </span>
          </Link>
        </div>
      </div>
      <div className="service-wrapper">
        <Slider
          {...sliderProps.serviceCarouselActive}
          className="service-carousel-active"
        >
          <div>
            <div className="service-card-items">
              <div className="service-content">
                <div className="icon">
                  <i className="flaticon-blueprint" />
                </div>
                <div className="content">
                  <h4>01</h4>
                  <h3>
                    <Link href="service-details">UX/UI Design</Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde is <br />
                    voluptatem accusant
                  </p>
                </div>
              </div>
              <div
                className="service-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/service/01.jpg")',
                }}
              >
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="service-card-items">
              <div className="service-content">
                <div className="icon">
                  <i className="flaticon-service" />
                </div>
                <div className="content">
                  <h4>02</h4>
                  <h3>
                    <Link href="service-details">it managment</Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde is <br />
                    voluptatem accusant
                  </p>
                </div>
              </div>
              <div
                className="service-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/service/02.jpg")',
                }}
              >
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="service-card-items">
              <div className="service-content">
                <div className="icon">
                  <i className="flaticon-cloud-storage" />
                </div>
                <div className="content">
                  <h4>03</h4>
                  <h3>
                    <Link href="service-details">desktop computing</Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde is <br />
                    voluptatem accusant
                  </p>
                </div>
              </div>
              <div
                className="service-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/service/03.jpg")',
                }}
              >
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="service-card-items">
              <div className="service-content">
                <div className="icon">
                  <i className="flaticon-blueprint" />
                </div>
                <div className="content">
                  <h4>01</h4>
                  <h3>
                    <Link href="service-details">UX/UI Design</Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde is <br />
                    voluptatem accusant
                  </p>
                </div>
              </div>
              <div
                className="service-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/service/01.jpg")',
                }}
              >
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="service-card-items">
              <div className="service-content">
                <div className="icon">
                  <i className="flaticon-service" />
                </div>
                <div className="content">
                  <h4>02</h4>
                  <h3>
                    <Link href="service-details">it managment</Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde is <br />
                    voluptatem accusant
                  </p>
                </div>
              </div>
              <div
                className="service-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/service/02.jpg")',
                }}
              >
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="service-card-items">
              <div className="service-content">
                <div className="icon">
                  <i className="flaticon-blueprint" />
                </div>
                <div className="content">
                  <h4>01</h4>
                  <h3>
                    <Link href="service-details">UX/UI Design</Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde is <br />
                    voluptatem accusant
                  </p>
                </div>
              </div>
              <div
                className="service-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/service/01.jpg")',
                }}
              >
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default ServiceSection;

export const ServiceSection2 = ({ showItem = 100 }) => {
  const services = [
    {
      id: 1,
      title: "Customer Software Development",
      icon: "flaticon-coding",
      desc: "We approached WiaTech with complex project deliver",
    },
    {
      id: 2,
      title: "Desktop Computing Services",
      icon: "flaticon-server",
      desc: "We approached WiaTech with complex project deliver",
    },
    {
      id: 3,
      title: "Infrastructure Plan & Business Reform",
      icon: "flaticon-service",
      desc: "We approached WiaTech with complex project deliver",
    },
    {
      id: 4,
      title: "Backup & Recovery Data Services",
      icon: "flaticon-data-science",
      desc: "We approached WiaTech with complex project deliver",
    },
    {
      id: 5,
      title: "Data & Cyber Security Managment",
      icon: "flaticon-technology-1",
      desc: "We approached WiaTech with complex project deliver",
    },
    {
      id: 6,
      title: "Firewall Advancement & Defender System",
      icon: "flaticon-server",
      desc: "We approached WiaTech with complex project deliver",
    },
    {
      id: 7,
      title: "Apps Development & UI/UX Project",
      icon: "flaticon-service",
      desc: "We approached WiaTech with complex project deliver",
    },
    {
      id: 8,
      title: "Data & Cyber Security Managment",
      icon: "flaticon-data-science",
      desc: "We approached WiaTech with complex project deliver",
    },
  ];
  return (
    <div className="container">
      <div className="section-title text-center">
        <span className="wow fadeInUp">our fucusable services</span>
        <h2 className="wow fadeInUp" data-wow-delay=".3s">
          How do we work to help you <br />
          in Startup Business
        </h2>
      </div>
      <div className="row">
        {services.map(
          (service, index) =>
            index < showItem && (
              <div
                key={service.id}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="service-box-items">
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="service-details">{service.title}</Link>
                    </h3>
                    <p>{service.desc}</p>
                    <Link href="service-details" className="arrow-icon">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
