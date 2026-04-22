"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";

export default class Testimonial4Slider extends Component {
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
      <section className="testimonial-section-4 fix section-padding">
        <div className="client-1">
          <img src="assets/img/testimonial/08.png" alt="img" />
        </div>
        <div className="client-2">
          <img src="assets/img/testimonial/09.png" alt="img" />
        </div>
        <div className="container">
          <Slider
            ref={(c) => (this.slider = c)}
            {...sliderProps.testimonialCarouselActive4}
            className="testimonial-carousel-active-4"
          >
            <div className="testimonial-wrapper-4">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="testimonial-items">
                    <div
                      className="testimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/07.png")',
                      }}
                    />
                    <div className="client-info">
                      <h5>Mathias Herasen</h5>
                      <h6>
                        Founder of <span>GamerPay</span>
                      </h6>
                    </div>
                    <div className="testimonial-content">
                      <h3>
                        “ The other hand we denounce with righteou indg ation
                        and dislike men who are so beguiled and demorali ed by
                        the of pleasure of the moment.Dislike men who are so
                        beguiled and demoraliz worlds ed by the charms of
                        pleasure “
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-wrapper-4">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="testimonial-items">
                    <div
                      className="testimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/07.png")',
                      }}
                    />
                    <div className="client-info">
                      <h5>Mathias Herasen</h5>
                      <h6>
                        Founder of <span>GamerPay</span>
                      </h6>
                    </div>
                    <div className="testimonial-content">
                      <h3>
                        “ The other hand we denounce with righteou indg ation
                        and dislike men who are so beguiled and demorali ed by
                        the of pleasure of the moment.Dislike men who are so
                        beguiled and demoraliz worlds ed by the charms of
                        pleasure “
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-wrapper-4">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="testimonial-items">
                    <div
                      className="testimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/07.png")',
                      }}
                    />
                    <div className="client-info">
                      <h5>Mathias Herasen</h5>
                      <h6>
                        Founder of <span>GamerPay</span>
                      </h6>
                    </div>
                    <div className="testimonial-content">
                      <h3>
                        “ The other hand we denounce with righteou indg ation
                        and dislike men who are so beguiled and demorali ed by
                        the of pleasure of the moment.Dislike men who are so
                        beguiled and demoraliz worlds ed by the charms of
                        pleasure “
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-wrapper-4">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="testimonial-items">
                    <div
                      className="testimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/07.png")',
                      }}
                    />
                    <div className="client-info">
                      <h5>Mathias Herasen</h5>
                      <h6>
                        Founder of <span>GamerPay</span>
                      </h6>
                    </div>
                    <div className="testimonial-content">
                      <h3>
                        “ The other hand we denounce with righteou indg ation
                        and dislike men who are so beguiled and demorali ed by
                        the of pleasure of the moment.Dislike men who are so
                        beguiled and demoraliz worlds ed by the charms of
                        pleasure “
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="slider-button">
          <div className="testimonial-nav-prev" onClick={this.previous}>
            <i className="fas fa-chevron-left" />
          </div>
          <div className="testimonial-nav-next" onClick={this.next}>
            <i className="fas fa-chevron-right" />
          </div>
        </div>
      </section>
    );
  }
}
