import { fiverrProfile } from "@/utility/fiverrContent";

const CtaBanner = ({ textColor = "text-white" }) => {
  return (
    <section
      className="cta-banner-section bg-cover section-padding"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80")',
      }}
    >
      <div className="container">
        <div className="cta-banner-wrapper section-padding pt-0">
          <div className="section-title mb-0">
            <span className={`${textColor} wow fadeInUp`}>
              Fiverr-ready web services
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Need a website or landing page for your brand? <br />
              Call or message now:{" "}
              <a href={`tel:${fiverrProfile.phone}`} className={textColor}>
                {fiverrProfile.phone}
              </a>
            </h2>
          </div>
          <a
            href={fiverrProfile.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="theme-btn hover-white wow fadeInUp"
            data-wow-delay=".5s"
          >
            <span>
              Order on Fiverr
              <i className="fas fa-chevron-right" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default CtaBanner;
