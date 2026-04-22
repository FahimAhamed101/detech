"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const NewsSection = ({
  sectionClass = "news-section",
  sectionPadding = true,
}) => {
  return (
    <section
      className={`${
        sectionPadding ? "section-padding" : ""
      } fix ${sectionClass}`}
      id="blog"
    >
      <div className="container">
        <div className="title-section-area">
          <div className="section-title">
            <span className="wow fadeInUp">Our Recent News</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Read Our News &amp; Blogs
            </h2>
          </div>
          <Link
            href="news-details"
            className="theme-btn wow fadeInUp"
            data-wow-delay=".5s"
          >
            <span>
              Explore Our news
              <i className="fas fa-chevron-right" />
            </span>
          </Link>
        </div>
        <Slider
          {...sliderProps.newsCarouselActive}
          className="news-carousel-active"
        >
          <div className="news-card-items">
            <div
              className="news-image bg-cover"
              style={{ backgroundImage: 'url("assets/img/news/03.jpg")' }}
            />
            <div className="news-content">
              <ul className="post-area">
                <li>
                  <i className="far fa-user-circle" />
                  Shikhon .H
                </li>
                <li>
                  <i className="fal fa-comments" />
                  Comments (03)
                </li>
              </ul>
              <h5>
                <Link href="news-details">
                  Unlocking Efficiency: the Power of Automation in IT
                </Link>
              </h5>
              <Link href="news-details" className="link-btn">
                <span>read more</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
          <div className="news-card-items">
            <div
              className="news-image bg-cover"
              style={{ backgroundImage: 'url("assets/img/news/04.jpg")' }}
            />
            <div className="news-content">
              <ul className="post-area">
                <li>
                  <i className="far fa-user-circle" />
                  Shikhon .H
                </li>
                <li>
                  <i className="fal fa-comments" />
                  Comments (03)
                </li>
              </ul>
              <h5>
                <Link href="news-details">
                  5 IT Solutions to Streamline Your Workflow
                </Link>
              </h5>
              <Link href="news-details" className="link-btn">
                <span>read more</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
          <div className="news-card-items">
            <div
              className="news-image bg-cover"
              style={{ backgroundImage: 'url("assets/img/news/05.jpg")' }}
            />
            <div className="news-content">
              <ul className="post-area">
                <li>
                  <i className="far fa-user-circle" />
                  Shikhon .H
                </li>
                <li>
                  <i className="fal fa-comments" />
                  Comments (03)
                </li>
              </ul>
              <h5>
                <Link href="news-details">
                  Complete Guide to Business Insurance perfect
                </Link>
              </h5>
              <Link href="news-details" className="link-btn">
                <span>read more</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
          <div className="news-card-items">
            <div
              className="news-image bg-cover"
              style={{ backgroundImage: 'url("assets/img/news/03.jpg")' }}
            />
            <div className="news-content">
              <ul className="post-area">
                <li>
                  <i className="far fa-user-circle" />
                  Shikhon .H
                </li>
                <li>
                  <i className="fal fa-comments" />
                  Comments (09)
                </li>
              </ul>
              <h5>
                <Link href="news-details">
                  Mastering the Art of Data Analysis and Visualization
                </Link>
              </h5>
              <Link href="news-details" className="link-btn">
                <span>read more</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default NewsSection;
