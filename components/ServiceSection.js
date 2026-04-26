"use client";
import { fiverrGigs, fiverrProfile } from "@/utility/fiverrContent";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

const serviceSlides = [
  {
    number: "01",
    title: "Custom Web App Development",
    icon: "flaticon-blueprint",
    description:
      "Build secure SaaS platforms, dashboards, portals, and business tools with scalable web architecture.",
    image:
      'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80")',
    link: fiverrGigs[0].link,
  },
  {
    number: "02",
    title: "Mobile App Development",
    icon: "flaticon-service",
    description:
      "Launch Flutter, React Native, Kotlin, or Swift apps for customer-facing products and internal operations.",
    image:
      'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80")',
    link: fiverrGigs[1].link,
  },
  {
    number: "03",
    title: "AI Automation Systems",
    icon: "flaticon-cloud-storage",
    description:
      "Reduce manual work with Python automation, AI-assisted workflows, and custom internal tooling.",
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
            <span className="wow fadeInUp">Core Agency Services</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Web, mobile, and AI delivery <br />
              built for business outcomes
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
      title: "Custom Web App Development",
      icon: "flaticon-coding",
      desc: "SaaS platforms, CRMs, portals, dashboards, and internal tools.",
      link: fiverrGigs[0].link,
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: "flaticon-server",
      desc: "Flutter, React Native, Kotlin, and Swift builds for iOS and Android.",
      link: fiverrGigs[1].link,
    },
    {
      id: 3,
      title: "AI Automation Services",
      icon: "flaticon-service",
      desc: "Python automation, workflow systems, lead handling, and reporting pipelines.",
      link: fiverrGigs[2].link,
    },
    {
      id: 4,
      title: "MVP and SaaS Delivery",
      icon: "flaticon-data-science",
      desc: "Launch-first product development for startups validating and scaling new ideas.",
      link: fiverrProfile.profileUrl,
    },
    {
      id: 5,
      title: "Dedicated Development Support",
      icon: "flaticon-technology-1",
      desc: "Ongoing feature delivery, bug fixing, modernization, and technical support.",
      link: fiverrProfile.profileUrl,
    },
    {
      id: 6,
      title: "API and Backend Engineering",
      icon: "flaticon-server",
      desc: "Authentication, business logic, integrations, admin workflows, and scalable APIs.",
      link: fiverrProfile.profileUrl,
    },
    {
      id: 7,
      title: "Product UI Implementation",
      icon: "flaticon-service",
      desc: "Turn approved designs into responsive interfaces across web and mobile products.",
      link: fiverrProfile.profileUrl,
    },
    {
      id: 8,
      title: "Product Maintenance and Upgrades",
      icon: "flaticon-data-science",
      desc: "Stabilize existing products with upgrades, performance work, and post-launch support.",
      link: fiverrProfile.profileUrl,
    },
  ];
  return (
    <div className="container">
      <div className="section-title text-center">
        <span className="wow fadeInUp">Service Coverage</span>
        <h2 className="wow fadeInUp" data-wow-delay=".3s">
          Services for startups, agencies, <br />
          and growth-stage teams
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
