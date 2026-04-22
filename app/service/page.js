import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";
import FaqSection from "@/components/FaqSection";
import FeatureIconBoxSection from "@/components/FeatureIconBoxSection";
import NewsSection from "@/components/NewsSection";
import { ServiceSection2 } from "@/components/ServiceSection";
import Testimonial3Slider from "@/components/sliders/Testimonial3Slider";
import Layout from "@/layouts/Layout";
const page = () => {
  return (
    <Layout>
      <Breadcrumb pageName="Our Services" />

      <section className="service-section fix section-padding">
        <ServiceSection2 />
      </section>
      <CtaBanner textColor="theme-color-1" />
      <FeatureIconBoxSection />
      <section className="faq-section section-padding section-bg-2">
        <FaqSection
          extraClass="style-color"
          chartColor="#166FD3"
          titleStyle=""
        />
      </section>
      <section className="testimonial-section-2 fix section-padding">
        <div className="container-fluid">
          <div className="testimonial-wrapper-3 pt-0 pb-0 style-2">
            <Testimonial3Slider />
          </div>
        </div>
      </section>
      <NewsSection sectionPadding={false} />
      <ContactSection style="style-2" btnStyle="" titleStyle="" />
    </Layout>
  );
};
export default page;
