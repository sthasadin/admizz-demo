import React from "react";

const WhyStudyAbroad = () => {
  return (
    <div className="content-wrapper">
      <div
        className="howAhelp__content"
        style={{ textAlign: "center", color: "#5f1802" }}
      >
        <div>
          {/* <div className="howAhelp__about_title" >About Admizz</div> */}
          <div className="howAhelp__title_sub">Top Study Destinations</div>
          <div className="howAhelp__title">
            Expand your horizons:{" "}
            <span style={{ color: "#ffa200" }}> Where to study?</span>{" "}
          </div>
          {/* <div className="howAhelp__helpertext" >
                                  Whether you're selecting a college, pursuing new career opportunities, or looking to broaden your horizons, our expert team is here to empower your journey.
                                  </div> */}
          <div
            className="howAhelp__helpertext"
            style={{ marginTop: "20px", marginBottom: "30px" }}
          >
            Let us help you find the perfect destination for your academic
            journey, whether it's studying at prestigious institutions in
            Europe, exploring diverse cultural landscapes in Asia, or unlocking
            emerging opportunities in the Americas.
          </div>
        </div>
        {/* <div className="us__rightcontent">
                                <Link href="/aboutus">
                                  <CallToAction className="white-outline" style="background-color:yellow">
                                    Know Admizz Better
                                  </CallToAction>
                                </Link>
                              </div> */}
      </div>

      <div className="country-wrapper">
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img
            src="/about-india/India-new-1.png"
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">INDIA</h2>

            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Experience the hustle and bustle of a unique culture and
                emerging tech industry.
              </p>
              <a href="#" className="news-card__read-more">
                Explore <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img src="/about-india/USA-new-1.png" className="news-card__image" />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">USA</h2>

            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Choose from world-class education and diverse job opportunities.
              </p>
              <a href="#" className="news-card__read-more">
                Explore <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img src="/about-india/Aus-new-1.jpg" className="news-card__image" />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">AUSTRALIA</h2>

            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Experience a high quality of life supported by a strong job
                market.
              </p>
              <a href="#" className="news-card__read-more">
                Explore
                <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img src="/about-india/Uk-new-2.jpg" className="news-card__image" />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">UK</h2>

            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Grow at prestigious universities surrounded by rich cultural
                heritage.
              </p>
              <a href="#" className="news-card__read-more">
                Explore
                <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img
            src="/about-india/Canada-new-1.jpg"
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">CANADA</h2>

            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Enlist at world-renowned universities with growing job demand.
              </p>
              <a href="#" className="news-card__read-more">
                Explore <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img
            src="/about-india/france-new-1.jpg"
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">FRANCE</h2>

            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Explore France's rich culture and study the city of lights.
              </p>
              <a href="#" className="news-card__read-more">
                Explore <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { WhyStudyAbroad };
