"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

const BrandSlider = () => {
  return (
    <Slider
      {...sliderProps.brandCarouselActive2}
      className="brand-carousel-active-2"
    >
      <div className="brand-image">
        <img src="assets/img/brand/01.png" alt="brand-img" />
      </div>
      <div className="brand-image">
        <img src="assets/img/brand/01.png" alt="brand-img" />
      </div>
      <div className="brand-image">
        <img src="assets/img/brand/01.png" alt="brand-img" />
      </div>
      <div className="brand-image">
        <img src="assets/img/brand/01.png" alt="brand-img" />
      </div>
      <div className="brand-image">
        <img src="assets/img/brand/01.png" alt="brand-img" />
      </div>
      <div className="brand-image">
        <img src="assets/img/brand/01.png" alt="brand-img" />
      </div>
      <div className="brand-image">
        <img src="assets/img/brand/01.png" alt="brand-img" />
      </div>
    </Slider>
  );
};
export default BrandSlider;
