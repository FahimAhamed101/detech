"use client";
import { fiverrGigs, fiverrProfile } from "@/utility/fiverrContent";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

const serviceSlides = [
  {
    number: "01",
    title: "Fiverr Business Website",
    icon: "flaticon-blueprint",
    description:
      "Professional company websites for agencies, personal brands, and growing businesses.",
    image:
      'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80")',
    link: fiverrGigs[0].link,
  },
  {
    number: "02",
    title: "Next.js Landing Page Gig",
    icon: "flaticon-service",
    description:
      "Fast, conversion-focused landing pages for startups, SaaS launches, and product campaigns.",
    image:
      'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80")',
    link: fiverrGigs[1].link,
  },
  {
    number: "03",
    title: "Website Redesign Gig",
    icon: "flaticon-cloud-storage",
    description:
      "Upgrade outdated layouts into polished, modern, and mobile-friendly experiences.",
    image:
      'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80")',
    link: fiverrGigs[2].link,
  },
];

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
              Fiverr-based web services <br />
              built to convert
            </h2>
          </div>
          <a
            href={fiverrProfile.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="theme-btn wow fadeInUp"
            data-wow-delay=".5s"
          >
            <span>
              View Fiverr Profile
              <i className="fas fa-chevron-right" />
            </span>
          </a>
        </div>
      </div>
      <div className="service-wrapper">
        <Slider
          {...sliderProps.serviceCarouselActive}
          className="service-carousel-active"
        >
          {[...serviceSlides, ...serviceSlides].map((service, index) => (
            <div key={`${service.number}-${index}`}>
              <div className="service-card-items">
                <div className="service-content">
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                  <div className="content">
                    <h4>{service.number}</h4>
                    <h3>
                      <a href={service.link} target="_blank" rel="noreferrer">
                        {service.title}
                      </a>
                    </h3>
                    <p>{service.description}</p>
                  </div>
                </div>
                <div
                  className="service-image bg-cover"
                  style={{ backgroundImage: service.image }}
                >
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noreferrer"
                    className="arrow-icon"
                  >
                    <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
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
      title: "Business Website on Fiverr",
      icon: "flaticon-coding",
      desc: "Responsive business website packages with clear scope and delivery.",
      link: fiverrGigs[0].link,
    },
    {
      id: 2,
      title: "Landing Page Design",
      icon: "flaticon-server",
      desc: "Conversion-oriented landing pages designed for offers and launches.",
      link: fiverrGigs[1].link,
    },
    {
      id: 3,
      title: "Website Redesign",
      icon: "flaticon-service",
      desc: "Refresh old websites with a cleaner brand look and better UX.",
      link: fiverrGigs[2].link,
    },
    {
      id: 4,
      title: "Custom Quote Request",
      icon: "flaticon-data-science",
      desc: "Message on Fiverr for custom pages, edits, or multi-page projects.",
      link: fiverrProfile.profileUrl,
    },
    {
      id: 5,
      title: "Frontend Fixes",
      icon: "flaticon-technology-1",
      desc: "Clean bug fixes, responsiveness, and visual polishing for existing pages.",
      link: fiverrProfile.profileUrl,
    },
    {
      id: 6,
      title: "Portfolio Website Build",
      icon: "flaticon-server",
      desc: "Personal and portfolio websites for freelancers, creators, and agencies.",
      link: fiverrProfile.profileUrl,
    },
    {
      id: 7,
      title: "Figma to Website",
      icon: "flaticon-service",
      desc: "Turn approved layouts into responsive pages ready for launch.",
      link: fiverrProfile.profileUrl,
    },
    {
      id: 8,
      title: "Ongoing Site Support",
      icon: "flaticon-data-science",
      desc: "Keep your website updated with small tasks and ongoing monthly help.",
      link: fiverrProfile.profileUrl,
    },
  ];
  return (
    <div className="container">
      <div className="section-title text-center">
        <span className="wow fadeInUp">our fucusable services</span>
        <h2 className="wow fadeInUp" data-wow-delay=".3s">
          Fiverr services for startups, <br />
          agencies, and growing brands
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
                      <a href={service.link} target="_blank" rel="noreferrer">
                        {service.title}
                      </a>
                    </h3>
                    <p>{service.desc}</p>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noreferrer"
                      className="arrow-icon"
                    >
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
