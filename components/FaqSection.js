import Faq from "./Faq";
import ProgressBar from "./ProgressBar";
const FaqSection = ({
  faqStyle = "style-2",
  extraClass = "",
  chartColor = "#4E29B7",
  titleStyle = "style-2",
}) => {
  return (
    <div className="container">
      <div className="about-wrapper pb-0">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content">
              <div className={`section-title ${titleStyle}`}>
                <span className="wow fadeInUp">freequently Ask Questions</span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  have a question in <br />
                  your mind?
                </h2>
              </div>
              <p className=" mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                Transmds is the world’s driving worldwide coordinations <br />
                supplier — we uphold industry and exchange the
              </p>
              <div className="circle-progress-bar-wrapper style-2">
                <div
                  className="single-circle-bar wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <ProgressBar value={68} color={chartColor} />
                  <div className="content">
                    <h6>
                      Organizations <br />
                      work support
                    </h6>
                  </div>
                </div>
                <div
                  className="single-circle-bar wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <ProgressBar value={93} color={chartColor} />
                  <div className="content">
                    <h6>
                      Management &amp; <br />
                      Support Services
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className={`faq-content ${faqStyle} ${extraClass}`}>
              <Faq />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FaqSection;
