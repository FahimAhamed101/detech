import Link from "next/link";

const CtaBanner = ({ textColor = "text-white" }) => {
  return (
    <section
      className="cta-banner-section bg-cover section-padding"
      style={{ backgroundImage: 'url("assets/img/banner/01.jpg")' }}
    >
      <div className="container">
        <div className="cta-banner-wrapper section-padding pt-0">
          <div className="section-title mb-0">
            <span className={`${textColor} wow fadeInUp`}>
              5m+ Trusted Our Clients
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Need It advisor For your business ? <br />
              Please Call :{" "}
              <a href="tel:123884400" className={textColor}>
                (123) 884400
              </a>
            </h2>
          </div>
          <Link
            href="contact"
            className="theme-btn hover-white wow fadeInUp"
            data-wow-delay=".5s"
          >
            <span>
              Get a Free Quate
              <i className="fas fa-chevron-right" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CtaBanner;
