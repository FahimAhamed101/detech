const FeatureIconBoxSection = () => {
  return (
    <section className="feature-icon-box-area">
      <div className="container">
        <div className="feature-icon-box-wrapper">
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="icon-box-items">
                <div className="icon">
                  <i className="flaticon-microchip" />
                </div>
                <div className="content">
                  <h3>Voice Over Protocol</h3>
                  <p>Average time to resolve a cyber attack.</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="icon-box-items active">
                <div className="icon">
                  <i className="flaticon-cloud-storage" />
                </div>
                <div className="content">
                  <h3>Data Backup</h3>
                  <p>Average time to resolve a cyber attack.</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="icon-box-items">
                <div className="icon">
                  <i className="flaticon-gear" />
                </div>
                <div className="content">
                  <h3>It Consultancy</h3>
                  <p>Average time to resolve a cyber attack.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeatureIconBoxSection;
