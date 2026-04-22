import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Component } from "react";
import Slider from "react-slick";

export default class Home3Slider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section className="hero-section hero-3">
        <div className="slider-button">
          <div className="hero-nav-prev" onClick={this.previous}>
            <i className="fal fa-long-arrow-left" />
          </div>
          <div className="hero-nav-next" onClick={this.next}>
            <i className="fal fa-long-arrow-right" />
          </div>
        </div>
        <Slider
          ref={(c) => (this.slider = c)}
          {...sliderProps.heroSliderActive2}
          className="hero-slider-active-2"
        >
          <div>
            <div className="single-slide">
              <div
                className="slide-bg bg-cover"
                style={{ backgroundImage: 'url("assets/img/hero/hero-5.jpg")' }}
              >
                <div className="container">
                  <div className="hero-content">
                    <h4
                      className="fs-lg animated"
                      data-animation-in="fadeInUp"
                      data-delay-in="0.3"
                    >
                      5m+ Trusted Our Clients
                    </h4>
                    <h1
                      className="fs-lg animated"
                      data-animation-in="fadeInUp"
                      data-delay-in="0.5"
                    >
                      Empower Your <br />
                      business Journey <br />
                      with it Expertise
                    </h1>
                    <div
                      className="hero-button fs-lg animated"
                      data-animation-in="fadeInUp"
                      data-delay-in="0.7"
                    >
                      <Link
                        href="service-details"
                        className="theme-btn theme-btn-2 hover-white"
                      >
                        <span>
                          Explore Our Service
                          <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="single-slide">
              <div
                className="slide-bg bg-cover"
                style={{ backgroundImage: 'url("assets/img/hero/hero-6.jpg")' }}
              >
                <div className="container">
                  <div className="hero-content">
                    <h4
                      className="fs-lg animated"
                      data-animation-in="fadeInUp"
                      data-delay-in="0.3"
                    >
                      5m+ Trusted Our Clients
                    </h4>
                    <h1
                      className="fs-lg animated"
                      data-animation-in="fadeInUp"
                      data-delay-in="0.5"
                    >
                      Empower Your <br />
                      business Journey <br />
                      with it Expertise
                    </h1>
                    <div
                      className="hero-button fs-lg animated"
                      data-animation-in="fadeInUp"
                      data-delay-in="0.7"
                    >
                      <Link
                        href="service-details"
                        className="theme-btn theme-btn-2 hover-white"
                      >
                        <span>
                          Explore Our Service
                          <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="single-slide">
              <div
                className="slide-bg bg-cover"
                style={{ backgroundImage: 'url("assets/img/hero/hero-7.jpg")' }}
              >
                <div className="container">
                  <div className="hero-content">
                    <h4
                      className="fs-lg animated"
                      data-animation-in="fadeInUp"
                      data-delay-in="0.3"
                    >
                      5m+ Trusted Our Clients
                    </h4>
                    <h1
                      className="fs-lg animated"
                      data-animation-in="fadeInUp"
                      data-delay-in="0.5"
                    >
                      Empower Your <br />
                      business Journey <br />
                      with it Expertise
                    </h1>
                    <div
                      className="hero-button fs-lg animated"
                      data-animation-in="fadeInUp"
                      data-delay-in="0.7"
                    >
                      <Link
                        href="service-details"
                        className="theme-btn theme-btn-2 hover-white"
                      >
                        <span>
                          Explore Our Service
                          <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="single-slide">
              <div
                className="slide-bg bg-cover"
                style={{ backgroundImage: 'url("assets/img/hero/hero-8.jpg")' }}
              >
                <div className="container">
                  <div className="hero-content">
                    <h4
                      className="fs-lg animated"
                      data-animation-in="fadeInUp"
                      data-delay-in="0.3"
                    >
                      5m+ Trusted Our Clients
                    </h4>
                    <h1
                      className="fs-lg animated"
                      data-animation-in="fadeInUp"
                      data-delay-in="0.5"
                    >
                      Empower Your <br />
                      business Journey <br />
                      with it Expertise
                    </h1>
                    <div
                      className="hero-button fs-lg animated"
                      data-animation-in="fadeInUp"
                      data-delay-in="0.7"
                    >
                      <Link
                        href="service-details"
                        className="theme-btn theme-btn-2 hover-white"
                      >
                        <span>
                          Explore Our Service
                          <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    );
  }
}
