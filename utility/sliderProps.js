import { Fragment } from "react";

function Arrow({ className, onClick, icon, extraClass, children }) {
  return (
    <div className={`${className} ${extraClass}`} onClick={onClick}>
      {children}
    </div>
  );
}
export const sliderProps = {
  heroSliderActive: {
    autoplay: true,
    speed: 1500,
    lazyLoad: "progressive",
    arrows: true,
    dots: false,
    prevArrow: (
      <Arrow extraClass={"slick-nav prev-arrow"}>
        <Fragment>
          <div>
            <i />
            <svg>
              <use xlinkHref="#circle" />
            </svg>
          </div>
        </Fragment>
      </Arrow>
    ),
    nextArrow: (
      <Arrow extraClass={"slick-nav next-arrow"}>
        <Fragment>
          <div>
            <i />
            <svg>
              <use xlinkHref="#circle" />
            </svg>
          </div>
        </Fragment>
      </Arrow>
    ),
  },
  heroSliderActive2: {
    autoplay: true,
    speed: 1500,
    lazyLoad: "progressive",
    arrows: false,
    fade: true,
    dots: false,
    // prevArrow: (
    //   <Arrow extraClass={"slick-nav prev-arrow"}>
    //     <Fragment>
    //       <div>
    //         <i />
    //         <svg>
    //           <use xlinkHref="#circle" />
    //         </svg>
    //       </div>
    //     </Fragment>
    //   </Arrow>
    // ),
    // nextArrow: (
    //   <Arrow extraClass={"slick-nav next-arrow"}>
    //     <Fragment>
    //       <div>
    //         <i />
    //         <svg>
    //           <use xlinkHref="#circle" />
    //         </svg>
    //       </div>
    //     </Fragment>
    //   </Arrow>
    // ),
  },
  serviceCarouselActive: {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slide-dots",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          center: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  brandCarouselActive: {
    autoplay: true,
    autoplaySpeed: 2000,
    //centerMode: true,
    speed: 500,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    dotsClass: "slide-dots",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          center: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  },
  brandCarouselActive2: {
    autoplay: true,
    autoplaySpeed: 2000,
    //centerMode: true,
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    dotsClass: "slide-dots",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          center: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  },
  testimonialCarouselActive: {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slide-dots",
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1191,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          center: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  testimonialCarouselActive2: {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slide-dots",
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1191,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          center: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  testimonialCarouselActive3: {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  },
  testimonialCarouselActive4: {
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  },
  testimonialCarouselActive5: {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slide-dots",
    responsive: [
      {
        breakpoint: 1191,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          center: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  caseStudiesCarouselActive: {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    dotsClass: "slide-dots",
    responsive: [
      {
        breakpoint: 1699,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1191,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          center: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  caseStudiesCarouselActive2: {
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    dotsClass: "slide-dots",
    responsive: [
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          center: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  newsCarouselActive: {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slide-dots",
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1191,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          center: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  itCaseStudyCarouselActive: {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slide-dots",
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1191,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          center: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
};
