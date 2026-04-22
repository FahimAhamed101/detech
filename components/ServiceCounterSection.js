"use client";
import Link from "next/link";
import Counter from "./Counter";
const ServiceCounterSection = () => {
  return (
    <section className="service-counter-section fix">
      <div className="container">
        <div className="service-counter-wrapper">
          <div className="row">
            <div className="col-lg-5">
              <div className="service-counter-content">
                <div className="section-title">
                  <span className="text-white wow fadeInUp">
                    5m+ Trusted Our Clients
                  </span>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                    Most experienced <br />
                    our services
                  </h2>
                </div>
                <p
                  className="mt-4 mt-md-0 text-white wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  Transmds is the world’s driving worldwide <br />
                  exchange the worldwide trade of
                </p>
                <Link
                  href="service-details"
                  className="theme-btn bg-white mt-4 wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <span>
                    Explore Our Service
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0">
              <div className="row g-4">
                <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                  <div className="service-counter-items">
                    <div className="icon">
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
                <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
                  <div className="service-counter-items active">
                    <div className="icon">
                      <i className="flaticon-document-management" />
                    </div>
                    <div className="content">
                      <h2>
                        <Counter end={853} />+
                      </h2>
                      <p>
                        Countries <br />
                        Represented
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 wow fadeInUp" data-wow-delay=".7s">
                  <div className="service-counter-items">
                    <div className="icon">
                      <i className="flaticon-financial-profit" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceCounterSection;
