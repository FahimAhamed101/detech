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
                <span className="wow fadeInUp">Frequently Asked Questions</span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Questions buyers ask before <br />
                  starting a software project
                </h2>
              </div>
              <p className=" mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                These answers cover project scope, delivery models, mobile app
                stacks, web app architecture, and how AI automation work is
                handled through the TomTech workflow.
              </p>
              <div className="circle-progress-bar-wrapper style-2">
                <div
                  className="single-circle-bar wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <ProgressBar value={88} color={chartColor} />
                  <div className="content">
                    <h6>
                      Discovery <br />
                      clarity
                    </h6>
                  </div>
                </div>
                <div
                  className="single-circle-bar wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <ProgressBar value={94} color={chartColor} />
                  <div className="content">
                    <h6>
                      Delivery and <br />
                      communication
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
