"use client";
import DalTechSelect from "@/components/DalTechSelect";
import { daltechutility } from "@/utility";
import useClickOutside from "@/utility/useClickOutside";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
const Header = ({ header, single }) => {
  useEffect(() => {
    daltechutility.stickyNav();
  }, []);

  switch (header) {
    case 1:
      return <Header1 single={single} />;
    case 2:
      return <Header2 single={single} />;
    case 3:
      return <Header3 single={single} />;
    case 4:
      return <Header4 single={single} />;
    default:
      return <DefaultHeader single={single} />;
  }
};
export default Header;

const Nav = ({ single, menu }) => {
  const singleMenu = menu
    ? menu
    : [
        { id: 1, href: "about", title: "About" },
        { id: 2, href: "service", title: "Service" },
        { id: 3, href: "team", title: "Team" },
        { id: 4, href: "blog", title: "Blog" },
        { id: 5, href: "contact", title: "Contact" },
      ];
  return (
    <Fragment>
      {single ? (
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link href="/">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu has-home-menu">
              <li className="border-none">
                <div className="row g-4">
                  <div className="col-lg-3 home-menu">
                    <div className="home-menu-thumb">
                      <img src="assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-one-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="home-menu-content text-center">
                      <h4 className="home-menu-title">Home 01</h4>
                    </div>
                  </div>
                  <div className="col-lg-3  home-menu">
                    <div className="home-menu-thumb mb-15">
                      <img src="assets/img/header/home-2.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-2" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-two-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="home-menu-content text-center">
                      <h4 className="home-menu-title">Home 02</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 home-menu">
                    <div className="home-menu-thumb mb-15">
                      <img src="assets/img/header/home-3.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-3" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-three-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="home-menu-content text-center">
                      <h4 className="home-menu-title">Home 03</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 home-menu">
                    <div className="home-menu-thumb mb-15">
                      <img src="assets/img/header/home-4.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-4" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-four-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="home-menu-content text-center">
                      <h4 className="home-menu-title">Home 04</h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="has-dropdown active d-lg-none">
            <a href="team" className="border-none">
              Home
              <i className="fas fa-angle-down" />
            </a>
            <ul className="submenu">
              <li>
                <Link href="index">Home 01</Link>
              </li>
              <li>
                <Link href="index-2">Home 02</Link>
              </li>
              <li>
                <Link href="index-3">Home 03</Link>
              </li>
            </ul>
          </li>
          {singleMenu.map((menu) => (
            <li key={menu.id}>
              <a href={`#${menu.href}`}>{menu.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link href="/">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu has-home-menu">
              <li className="border-none">
                <div className="row g-4">
                  <div className="col-lg-3 home-menu">
                    <div className="home-menu-thumb">
                      <img src="assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-one-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="home-menu-content text-center">
                      <h4 className="home-menu-title">Home 01</h4>
                    </div>
                  </div>
                  <div className="col-lg-3  home-menu">
                    <div className="home-menu-thumb mb-15">
                      <img src="assets/img/header/home-2.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-2" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-two-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="home-menu-content text-center">
                      <h4 className="home-menu-title">Home 02</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 home-menu">
                    <div className="home-menu-thumb mb-15">
                      <img src="assets/img/header/home-3.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-3" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-three-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="home-menu-content text-center">
                      <h4 className="home-menu-title">Home 03</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 home-menu">
                    <div className="home-menu-thumb mb-15">
                      <img src="assets/img/header/home-4.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-4" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-four-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="home-menu-content text-center">
                      <h4 className="home-menu-title">Home 04</h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="has-dropdown active d-lg-none">
            <Link href="team" className="border-none">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/">Home 01</Link>
              </li>
              <li>
                <Link href="index-2">Home 02</Link>
              </li>
              <li>
                <Link href="index-3">Home 03</Link>
              </li>
              <li>
                <Link href="index-4">Home 04</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="service">
              Services <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="service">Services</Link>
              </li>
              <li>
                <Link href="service-details">Service Details</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link href="news">
              Pages
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li className="has-dropdown">
                <Link href="project">
                  Projects
                  <i className="fas fa-angle-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="project">Projects One</Link>
                  </li>
                  <li>
                    <Link href="project-2">Projects Two</Link>
                  </li>
                  <li>
                    <Link href="project-details">Project Details</Link>
                  </li>
                </ul>
              </li>
              <li className="has-dropdown">
                <Link href="team">
                  Team
                  <i className="fas fa-angle-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="team">Team</Link>
                  </li>
                  <li>
                    <Link href="team-details">Team Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="faq">Faq's</Link>
              </li>
              <li>
                <Link href="404">404 Page</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="news">
              Blog
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="news">Blog</Link>
              </li>
              <li>
                <Link href="news-details">Blog Details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      )}
    </Fragment>
  );
};

const MobileMenu = ({ single, menu }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  const singleMenu = menu
    ? menu
    : [
        { id: 1, href: "about", title: "About" },
        { id: 2, href: "service", title: "Service" },
        { id: 3, href: "team", title: "Team" },
        { id: 4, href: "blog", title: "Blog" },
        { id: 5, href: "contact", title: "Contact" },
      ];
  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-xl-none">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span />
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            <li className="has-dropdown active d-lg-none">
              <a
                href="#"
                className="border-none"
                onClick={() => activeMenuSet("home")}
              >
                Home
                <i className="fas fa-angle-down" />
              </a>
              <ul className="submenu" style={activeLi("home")}>
                <li>
                  <Link href="/">Home 01</Link>
                </li>
                <li>
                  <Link href="index-2">Home 02</Link>
                </li>
                <li>
                  <Link href="index-3">Home 03</Link>
                </li>
                <li>
                  <Link href="index-4">Home 04</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("home")}
              >
                <i className="far fa-plus" />
              </a>
            </li>
            {single ? (
              <Fragment>
                {singleMenu.map((menu) => (
                  <li key={menu.id}>
                    <a href={`#${menu.href}`}>{menu.title}</a>
                  </li>
                ))}
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <Link href="about">About</Link>
                </li>
                <li>
                  <a href="#" onClick={() => activeMenuSet("Services")}>
                    Services <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={activeLi("Services")}>
                    <li>
                      <Link href="service">Services</Link>
                    </li>
                    <li>
                      <Link href="service-details">Service Details</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Services")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li className="has-dropdown">
                  <a href="#" onClick={() => activeMenuSet("Pages")}>
                    Pages
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={activeLi("Pages")}>
                    <li className="has-dropdown">
                      <a href="#" onClick={() => multiMenuSet("Projects")}>
                        Projects
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul
                        className="submenu"
                        style={multiMenuActiveLi("Projects")}
                      >
                        <li>
                          <Link href="project">Projects One</Link>
                        </li>
                        <li>
                          <Link href="project-2">Projects Two</Link>
                        </li>
                        <li>
                          <Link href="project-details">Project Details</Link>
                        </li>
                      </ul>
                      <a
                        className="mean-expand"
                        href="#"
                        onClick={() => multiMenuSet("Projects")}
                      >
                        <i className="far fa-plus" />
                      </a>
                    </li>
                    <li className="has-dropdown">
                      <a href="#" onClick={() => multiMenuSet("Team")}>
                        Team
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul className="submenu" style={multiMenuActiveLi("Team")}>
                        <li>
                          <Link href="team">Team</Link>
                        </li>
                        <li>
                          <Link href="team-details">Team Details</Link>
                        </li>
                      </ul>
                      <a
                        className="mean-expand"
                        href="#"
                        onClick={() => multiMenuSet("Team")}
                      >
                        <i className="far fa-plus" />
                      </a>
                    </li>
                    <li>
                      <Link href="faq">Faq's</Link>
                    </li>
                    <li>
                      <Link href="404">404 Page</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Pages")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => activeMenuSet("Blog")}>
                    Blog
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={activeLi("Blog")}>
                    <li>
                      <Link href="news">Blog</Link>
                    </li>
                    <li>
                      <Link href="news-details">Blog Details</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Blog")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li className="mean-last">
                  <Link href="contact">Contact</Link>
                </li>
              </Fragment>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Search = ({ seachToggle, setSeachToggle }) => {
  return (
    <div
      className="search-wrap"
      style={{ display: seachToggle ? "block" : "none" }}
    >
      <div className="search-inner">
        <i
          className="fas fa-times search-close"
          onClick={() => setSeachToggle(false)}
          id="search-close"
        />
        <div className="search-cell">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSeachToggle(false);
            }}
          >
            <div className="search-field-holder">
              <input
                type="search"
                className="main-search-input"
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
const SearchBtn = ({ setSeachToggle }) => {
  return (
    <a
      href="#0"
      className="search-trigger search-icon"
      onClick={() => setSeachToggle(true)}
    >
      <i className="fal fa-search" />
    </a>
  );
};

const Offcanvas = ({
  open,
  close,
  logo = "assets/img/logo/logo.svg",
  style = "",
  single,
  menu,
}) => {
  let domNode = useClickOutside(() => {
    close(false);
  });
  return (
    <Fragment>
      <div className={`fix-area `}>
        <div
          className={`offcanvas__info ${style} ${open ? "info-open" : ""}`}
          ref={domNode}
        >
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src={logo} alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => close(false)}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="d-none d-lg-block">
                Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case
                regione signiferumque vim te. Ex mea quem munere lobortis. Duis
                aute irure dolor in reprehenderit in voluptate velit esse
                cillum.
              </p>
              <MobileMenu single={single} menu={menu} />

              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Main Street, Melbourne, Australia
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@azent.com">
                        <span className="mailto:info@azent.com">
                          info@azent.com
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Mod-friday, 09am -05pm
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">+11002345909</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="contact" className="theme-btn text-center">
                    <span>
                      Contact Us
                      <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`offcanvas__overlay ${open ? "overlay-open" : ""}`} />
    </Fragment>
  );
};

const Header1 = ({ single }) => {
  const [seachToggle, setSeachToggle] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <Offcanvas
        single={single}
        open={sidebarToggle}
        close={setSidebarToggle}
      />
      {/* Offcanvas Area Start */}
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="assets/img/logo/logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3" />
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Main Street, Melbourne, Australia
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@azent.com">
                        <span className="mailto:info@azent.com">
                          info@azent.com
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Mod-friday, 09am -05pm
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">+11002345909</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="contact" className="theme-btn text-center">
                    <span>
                      Contact Us
                      <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay" />
      {/* Header Top Start */}
      <div className="header-top-section fix">
        <div className="container">
          <div className="header-top-wrapper">
            <ul className="contact-list">
              <li>
                <i className="far fa-envelope" />
                <a href="mailto:info@example.com" className="link">
                  info@example.com
                </a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt" />
                55 Main Street, 2nd block, Malborne ,Australia
              </li>
            </ul>
            <div className="top-right">
              <div className="social-icon d-flex align-items-center">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-vimeo-v" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
              </div>
              <ul className="header-menu">
                <li>
                  <Link href="contact">Help</Link>
                </li>
                <li>
                  <Link href="contact">Support</Link>
                </li>
                <li>
                  <Link href="faq">Faqs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Header Area Start */}
      <header className="header-section-1">
        <div id="header-sticky" className="header-1">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      <img src="assets/img/logo/logo.svg" alt="logo-img" />
                    </Link>
                  </div>
                  <div className="mean__menu-wrapper">
                    <div className="main-menu d-none d-xl-block">
                      <nav id="mobile-menu">
                        <Nav single={single} />
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="contact-info">
                    <div className="icon">
                      <img src="assets/img/call.png" alt="img" />
                    </div>
                    <div className="content">
                      <p>Phone:</p>
                      <h6>
                        <a href="tel:+23645689622">+236 (456) 896 22</a>
                      </h6>
                    </div>
                  </div>
                  <div className="header-button">
                    <Link href="news-details" className="link-btn">
                      <span>read more</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                  <SearchBtn setSeachToggle={setSeachToggle} />
                  <div className="header__hamburger d-lg-none my-auto">
                    <div
                      className="sidebar__toggle"
                      onClick={() => setSidebarToggle(true)}
                    >
                      <i className="far fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Search Area Start */}
      <Search seachToggle={seachToggle} setSeachToggle={setSeachToggle} />
    </Fragment>
  );
};
const Header2 = ({ single }) => {
  const [seachToggle, setSeachToggle] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const singleMenu = [
    { id: 1, href: "about", title: "About" },
    { id: 2, href: "service", title: "Service" },
    { id: 3, href: "team", title: "Team" },
    { id: 4, href: "blog", title: "Blog" },
  ];
  return (
    <Fragment>
      <Offcanvas
        single={single}
        open={sidebarToggle}
        close={setSidebarToggle}
        menu={singleMenu}
      />
      <Search seachToggle={seachToggle} setSeachToggle={setSeachToggle} />
      <div className="header-top-section-2">
        <div className="container">
          <div className="header-top-wrapper style-2">
            <div className="top-left">
              <ul className="contact-list">
                <li>
                  <i className="fas fa-map-marker-alt" />
                  55 Main Street, 2nd block, Malborne ,Australia
                </li>
              </ul>
              <div className="flag-wrap">
                <div className="flag">
                  <img src="assets/img/flag.png" alt="flag" />
                </div>
                <DalTechSelect
                  items={[
                    { id: 1, title: "English" },
                    { id: 2, title: "Bangla" },
                    { id: 3, title: "Hindi" },
                  ]}
                />
              </div>
            </div>
            <div className="top-right">
              <ul className="header-menu">
                <li>
                  <Link href="contact">Help</Link>
                </li>
                <li>
                  <Link href="contact">Support</Link>
                </li>
                <li>
                  <Link href="faq">Faqs</Link>
                </li>
              </ul>
              <div className="social-icon d-flex align-items-center">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-vimeo-v" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="middle-header">
        <div className="container">
          <div className="middle-header-wrapper">
            <div className="header-logo">
              <Link href="/">
                <img src="assets/img/logo/logo.svg" alt="logo-img" />
              </Link>
            </div>
            <div className="header-contact-items">
              <div className="contact-info-items">
                <div className="icon">
                  <i className="fas fa-clock" />
                </div>
                <div className="content">
                  <h6>Opening Houres</h6>
                  <p>Mon _ Sat: 9.00 to 18.00</p>
                </div>
              </div>
              <div className="contact-info-items">
                <div className="icon">
                  <i className="fas fa-envelope" />
                </div>
                <div className="content">
                  <h6>Opening Houres</h6>
                  <a href="mailto:info@example.com">info@example.com</a>
                </div>
              </div>
              <div className="contact-info-items">
                <div className="icon">
                  <i className="fas fa-phone-plus" />
                </div>
                <div className="content">
                  <h6>Opening Houres</h6>
                  <a href="tel:+23645689622">+236 (456) 896 22</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <header className="header-section-2">
        <div id="header-sticky" className="header-2">
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img src="assets/img/logo/white-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="header-left">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu d-none d-xl-block">
                      <nav id="mobile-menu">
                        <Nav single={single} menu={singleMenu} />
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <SearchBtn setSeachToggle={setSeachToggle} />
                  <div className="header__hamburger d-xl-block my-auto">
                    <div
                      className="sidebar__toggle"
                      onClick={() => setSidebarToggle(true)}
                    >
                      <div className="header-bar">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
const Header3 = ({ single }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      {/* Offcanvas Area Start */}
      <Offcanvas
        single={single}
        open={sidebarToggle}
        close={setSidebarToggle}
        logo="assets/img/logo/logo-2.svg"
        style="style-2"
      />
      {/* Header Top Start */}
      <div className="header-top-section-3">
        <div className="container-fluid">
          <div className="header-top-wrapper style-2 style-3">
            <div className="top-left">
              <ul className="contact-list">
                <li>
                  <span>Call</span>Consult With It Advisor?{" "}
                  <Link href="contact">Click Now</Link>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt" />
                  734 H, Bryan Burlington, NC 27215
                </li>
                <li>
                  <i className="fas fa-envelope" />
                  <a href="mailto:info@example.com" className="line-none">
                    info@example.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="top-right">
              <DalTechSelect
                style="style-2"
                items={[
                  { id: 1, title: "USD" },
                  { id: 2, title: "BSD" },
                  { id: 3, title: "NSD" },
                ]}
              />
              <div className="flag-wrap">
                <div className="flag">
                  <img src="assets/img/flag.png" alt="flag" />
                </div>
                <DalTechSelect
                  items={[
                    { id: 1, title: "English" },
                    { id: 2, title: "Bangla" },
                    { id: 3, title: "Hindi" },
                  ]}
                />
              </div>
              <div className="social-icon d-flex align-items-center">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-vimeo-v" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header Area Start */}
      <header className="header-section-3">
        <div id="header-sticky" className="header-3">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img src="assets/img/logo/logo-2.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="header-left">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu d-none d-xl-block">
                      <nav id="mobile-menu">
                        <Nav single={single} />
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="header-button">
                    <Link href="contact" className="theme-btn theme-btn-2">
                      <span>
                        contact us
                        <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                  </div>
                  <div className="header__hamburger d-xl-block my-auto">
                    <div
                      className="sidebar__toggle"
                      onClick={() => setSidebarToggle(true)}
                    >
                      <div className="header-bar">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
const Header4 = ({ single }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const singleMenu = [
    { id: 1, href: "about", title: "About" },
    { id: 2, href: "service", title: "Service" },
    { id: 3, href: "team", title: "Team" },
    { id: 4, href: "blog", title: "Blog" },
  ];
  return (
    <Fragment>
      <Offcanvas
        single={single}
        open={sidebarToggle}
        close={setSidebarToggle}
        menu={singleMenu}
      />
      {/* Header Top Start */}
      {/* Header Area Start */}
      <header className="header-section-4">
        <div className="top-header-2">
          <div className="container-fluid">
            <div className="top-header-items">
              <ul className="contact-list">
                <li>
                  <i className="far fa-map-marker-alt" /> 55 Main Street,2nd
                  block, New York
                </li>
                <li>
                  <i className="far fa-envelope" />
                  <a href="mailto:info@example.com" className="link">
                    info@example.com
                  </a>
                </li>
              </ul>
              <div className="header-right">
                <ul className="contact-list">
                  <li>
                    <i className="fal fa-clock" />
                    Mod-friday, 09am -05pm
                  </li>
                </ul>
                <ul className="social-icon">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" className="header-4">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo-1">
                      <img
                        src="assets/img/logo/white-logo.svg"
                        alt="logo-img"
                      />
                    </Link>
                    <Link href="/" className="header-logo-2">
                      <img src="assets/img/logo/logo.svg" alt="logo-img" />
                    </Link>
                  </div>
                  <div className="mean__menu-wrapper">
                    <div className="main-menu d-none d-xl-block">
                      <nav id="mobile-menu">
                        <Nav single={single} menu={singleMenu} />
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="contact-info-items">
                    <div className="icon">
                      <i className="far fa-phone-volume" />
                    </div>
                    <div className="content">
                      <p>Urgent Call</p>
                      <h6>
                        <a href="tel:+29635870088">+296 358 700 88</a>
                      </h6>
                    </div>
                  </div>
                  <div className="header-button">
                    <Link href="contact" className="theme-btn">
                      <span>Get A Quote</span>
                    </Link>
                  </div>
                  <div className="header__hamburger d-lg-none my-auto">
                    <div
                      className="sidebar__toggle"
                      onClick={() => setSidebarToggle(true)}
                    >
                      <i className="far fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Search Area Start */}
      <Search />
    </Fragment>
  );
};

const DefaultHeader = ({ single }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <Offcanvas
        single={single}
        open={sidebarToggle}
        close={setSidebarToggle}
      />
      {/* Header Top Start */}
      <div className="header-top-section-3">
        <div className="container-fluid">
          <div className="header-top-wrapper style-2 style-3 color-style">
            <div className="top-left">
              <ul className="contact-list">
                <li>
                  <span>Call</span>Consult With It Advisor?{" "}
                  <Link href="contact">Click Now</Link>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt" />
                  734 H, Bryan Burlington, NC 27215
                </li>
                <li>
                  <i className="fas fa-envelope" />
                  <a href="mailto:info@example.com" className="line-none">
                    info@example.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="top-right">
              <DalTechSelect
                style="style-2"
                items={[
                  { id: 1, title: "USD" },
                  { id: 2, title: "BSD" },
                  { id: 3, title: "NSD" },
                ]}
              />
              <div className="flag-wrap">
                <div className="flag">
                  <img src="assets/img/flag.png" alt="flag" />
                </div>
                <DalTechSelect
                  items={[
                    { id: 1, title: "English" },
                    { id: 2, title: "Bangla" },
                    { id: 3, title: "Hindi" },
                  ]}
                />
              </div>
              <div className="social-icon d-flex align-items-center">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-vimeo-v" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header Area Start */}
      <header className="header-section-3">
        <div id="header-sticky" className="header-3">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main style-2">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img src="assets/img/logo/logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="header-left">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu d-none d-xl-block">
                      <nav id="mobile-menu">
                        <Nav single={single} />
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="header-button">
                    <Link href="contact" className="theme-btn">
                      <span>
                        contact us
                        <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                  </div>
                  <div className="header__hamburger d-xl-block my-auto">
                    <div
                      className="sidebar__toggle"
                      onClick={() => setSidebarToggle(true)}
                    >
                      <div className="header-bar">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
