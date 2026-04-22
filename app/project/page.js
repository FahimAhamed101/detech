import BrandSection from "@/components/BrandSection";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/layouts/Layout";
import Link from "next/link";
const page = () => {
  return (
    <Layout>
      <Breadcrumb pageName="Project One" />
      <section className="project-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
              <div className="project-image">
                <img src="assets/img/project/07.jpg" alt="project-img" />
                <a href="assets/img/project/07.jpg" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
                <div className="project-content">
                  <h3>
                    <Link href="project-details">
                      Professional Website Design
                    </Link>
                  </h3>
                  <p>Web Design &amp; Development</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".5s">
              <div className="project-image">
                <img src="assets/img/project/08.jpg" alt="project-img" />
                <a href="assets/img/project/08.jpg" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
                <div className="project-content">
                  <h3>
                    <Link href="project-details">
                      Professional Website Design
                    </Link>
                  </h3>
                  <p>Web Design &amp; Development</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".3s">
              <div className="project-image">
                <img src="assets/img/project/09.jpg" alt="project-img" />
                <a href="assets/img/project/09.jpg" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
                <div className="project-content">
                  <h3>
                    <Link href="project-details">
                      Professional Website Design
                    </Link>
                  </h3>
                  <p>Web Design &amp; Development</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 wow fadeInUp" data-wow-delay=".5s">
              <div className="project-image">
                <img src="assets/img/project/10.jpg" alt="project-img" />
                <a href="assets/img/project/10.jpg" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
                <div className="project-content">
                  <h3>
                    <Link href="project-details">
                      Professional Website Design
                    </Link>
                  </h3>
                  <p>Web Design &amp; Development</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
              <div className="project-image">
                <img src="assets/img/project/11.jpg" alt="project-img" />
                <a href="assets/img/project/11.jpg" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
                <div className="project-content">
                  <h3>
                    <Link href="project-details">
                      Professional Website Design
                    </Link>
                  </h3>
                  <p>Web Design &amp; Development</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".5s">
              <div className="project-image">
                <img src="assets/img/project/12.jpg" alt="project-img" />
                <a href="assets/img/project/12.jpg" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
                <div className="project-content">
                  <h3>
                    <Link href="project-details">
                      Professional Website Design
                    </Link>
                  </h3>
                  <p>Web Design &amp; Development</p>
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
