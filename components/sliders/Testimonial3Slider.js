"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Component, Fragment } from "react";
import Slider from "react-slick";

export default class Testimonial3Slider extends Component {
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
      <Fragment>
        <Slider
          ref={(c) => (this.slider = c)}
          {...sliderProps.testimonialCarouselActive3}
          className="testimonial-carousel-active-3"
        >
          <div>
            <div className="testimonial-items">
              <div className="testimonial-image-area">
                <div
                  className="testimonial-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/testimonial/06.jpg")',
                  }}
                >
                  <div className="icon">
                    <i className="flaticon-double-quotes" />
                  </div>
                </div>
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                </div>
              </div>
              <div className="testimonial-content">
                <h3>
                  Climb the mountain not to plant your flag but to embrace the
                  ways challenge, enjoy the air, and behold the. Climb it see
                  the world, not so the world can see you. This is due to their
                  excellent service competitive pricing
                </h3>
                <div className="athor-name">
                  <h4>Robert J. Hare/</h4>
                  <p>Graphics Designer</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-items">
              <div className="testimonial-image-area">
                <div
                  className="testimonial-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/testimonial/07.jpg")',
                  }}
                >
                  <div className="icon">
                    <i className="flaticon-double-quotes" />
                  </div>
                </div>
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                </div>
              </div>
              <div className="testimonial-content">
                <h3>
                  Climb the mountain not to plant your flag but to embrace the
                  ways challenge, enjoy the air, and behold the. Climb it see
                  the world, not so the world can see you. This is due to their
                  excellent service competitive pricing
                </h3>
                <div className="athor-name">
                  <h4>Robert J. Hare/</h4>
                  <p>Graphics Designer</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-items">
              <div className="testimonial-image-area">
                <div
                  className="testimonial-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/testimonial/08.jpg")',
                  }}
                >
                  <div className="icon">
                    <i className="flaticon-double-quotes" />
                  </div>
                </div>
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                </div>
              </div>
              <div className="testimonial-content">
                <h3>
                  Climb the mountain not to plant your flag but to embrace the
                  ways challenge, enjoy the air, and behold the. Climb it see
                  the world, not so the world can see you. This is due to their
                  excellent service competitive pricing
                </h3>
                <div className="athor-name">
                  <h4>Robert J. Hare/</h4>
                  <p>Graphics Designer</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-items">
              <div className="testimonial-image-area">
                <div
                  className="testimonial-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/testimonial/09.jpg")',
                  }}
                >
                  <div className="icon">
                    <i className="flaticon-double-quotes" />
                  </div>
                </div>
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                </div>
              </div>
              <div className="testimonial-content">
                <h3>
                  Climb the mountain not to plant your flag but to embrace the
                  ways challenge, enjoy the air, and behold the. Climb it see
                  the world, not so the world can see you. This is due to their
                  excellent service competitive pricing
                </h3>
                <div className="athor-name">
                  <h4>Robert J. Hare/</h4>
                  <p>Graphics Designer</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="slider-button">
          <div className="testimonial-nav-prev me-1" onClick={this.previous}>
            <i className="fas fa-long-arrow-left" />
          </div>
          <div className="testimonial-nav-next" onClick={this.next}>
            <i className="fas fa-long-arrow-right" />
          </div>
        </div>
      </Fragment>
    );
  }
}
