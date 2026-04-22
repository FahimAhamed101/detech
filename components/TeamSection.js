import Link from "next/link";

const TeamSection = () => {
  return (
    <section className="team-section section-padding section-bg-3" id="team">
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp">our hounrable team</span>
          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
            We’ve Exclusive Team member <br />
            Meet our Professionals
          </h2>
        </div>
        <div className="row align-items-center">
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="single-team-items style-2">
              <div className="team-image">
                <img src="assets/img/team/01.jpg" alt="team-img" />
                <div className="social-profile">
                  <span className="plus-btn">
                    <i className="fas fa-share-alt" />
                  </span>
                  <ul>
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
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content text-center">
                <h5>
                  <Link href="team-detaills">Leslie Alexander</Link>
                </h5>
                <p>CEO &amp; Founder</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="single-team-items style-2">
              <div className="team-image">
                <img src="assets/img/team/02.jpg" alt="team-img" />
                <div className="social-profile">
                  <span className="plus-btn">
                    <i className="fas fa-share-alt" />
                  </span>
                  <ul>
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
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content text-center">
                <h5>
                  <Link href="team-detaills">Rodney J. Sabo</Link>
                </h5>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="single-team-items style-2">
              <div className="team-image">
                <img src="assets/img/team/03.jpg" alt="team-img" />
                <div className="social-profile">
                  <span className="plus-btn">
                    <i className="fas fa-share-alt" />
                  </span>
                  <ul>
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
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content text-center">
                <h5>
                  <Link href="team-detaills">Shikhon David</Link>
                </h5>
                <p>UI &amp; UX DESIGNER</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".9s"
          >
            <div className="single-team-items style-2">
              <div className="team-image">
                <img src="assets/img/team/04.jpg" alt="team-img" />
                <div className="social-profile">
                  <span className="plus-btn">
                    <i className="fas fa-share-alt" />
                  </span>
                  <ul>
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
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content text-center">
                <h5>
                  <Link href="team-detaills">Salman Ahmed</Link>
                </h5>
                <p>GRAPHIC DESIGNER</p>
              </div>
            </div>
          </div>
        </div>
        <div className="team-button wow fadeInUp" data-wow-delay=".4s">
          <Link href="team" className="theme-btn mt-5 hover-white">
            <span>
              Explore more team
              <i className="fas fa-chevron-right" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

export const TeamSection2 = () => {
  return (
    <section className="team-section section-padding" id="team">
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp">our honurable team member</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            We’ve Exclusive Team member <br />
            Meet our Professionals
          </h2>
        </div>
        <div className="team-wrapper">
          <div className="row align-items-center">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-team-items">
                <div className="team-image">
                  <img src="assets/img/team/01.jpg" alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
                    <ul>
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
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h4>
                    <Link href="team-detaills">Leslie Alexander</Link>
                  </h4>
                  <p>CEO &amp; Founder</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-team-items">
                <div className="team-image">
                  <img src="assets/img/team/02.jpg" alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
                    <ul>
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
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h4>
                    <Link href="team-detaills">Rodney J. Sabo</Link>
                  </h4>
                  <p>Full Stack Developer</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-team-items">
                <div className="team-image">
                  <img src="assets/img/team/03.jpg" alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
                    <ul>
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
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h4>
                    <Link href="team-detaills">Hobilar David</Link>
                  </h4>
                  <p>UI &amp; UX DESIGNER</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="single-team-items">
                <div className="team-image">
                  <img src="assets/img/team/04.jpg" alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
                    <ul>
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
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h4>
                    <Link href="team-detaills">Craig Hoffman</Link>
                  </h4>
                  <p>Digital Marketer</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-7 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-team-items">
                <div className="team-join-content text-center">
                  <div className="circle-shape">
                    <img
                      src="assets/img/team/circle-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="dot-shape">
                    <img src="assets/img/team/dot-shape.png" alt="shape-img" />
                  </div>
                  <h2>
                    JOIN OUR <span>TEAM</span>
                  </h2>
                  <h3>98+ Member</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-1" />
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-team-items">
                <div className="team-image">
                  <img src="assets/img/team/04.jpg" alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
                    <ul>
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
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h4>
                    <Link href="team-detaills">Claire Divas</Link>
                  </h4>
                  <p>Video Editor</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-team-items">
                <div className="team-image">
                  <img src="assets/img/team/05.jpg" alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
                    <ul>
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
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h4>
                    <Link href="team-detaills">Makhaia Antitni</Link>
                  </h4>
                  <p>GRAPHIC DESIGNER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
