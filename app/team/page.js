import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";
import FeatureIconBoxSection from "@/components/FeatureIconBoxSection";
import { TeamSection2 } from "@/components/TeamSection";
import Testimonial3Slider from "@/components/sliders/Testimonial3Slider";
import Layout from "@/layouts/Layout";
const page = () => {
  return (
    <Layout>
      <Breadcrumb pageName="Team" />
      <TeamSection2 />
      <CtaBanner textColor="theme-color-1" />
      <FeatureIconBoxSection />
      <section className="testimonial-section-2 fix section-padding">
        <div className="container-fluid">
          <div className="testimonial-wrapper-3 pt-0 pb-0 style-2">
            <Testimonial3Slider />
          </div>
        </div>
      </section>
      <ContactSection style="style-2" btnStyle="" titleStyle="" />
    </Layout>
  );
};
export default page;
