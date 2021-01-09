import React from "react";
import news from "../../public/news.png";
import news1 from "../../public/news1.png";
import news2 from "../../public/news2.png";
import news3 from "../../public/news3.png";
import ThumbnailText from "./thumnaiil-text";

const NewsOnCollege = () => {
  return (
    <div className="news-o-c">
      <div className="news-o-c__inner">
        <div className="sidebar__title">College Covered on News</div>
        <div className="news-o-c__list">
          <ThumbnailText
            title="IIT Bombay Campus to be Opened to a Few UG IIT Bombay Campus"
            image={news}
            data="December 18, 2020"
          />
          <ThumbnailText
            title="IIT Bombay Campus to be Opened to a Few UG IIT Bombay Campus"
            image={news1}
            data="December 18, 2020"
          />
          <ThumbnailText
            title="IIT Bombay Campus to be Opened to a Few UG IIT Bombay Campus"
            image={news2}
            data="December 18, 2020"
          />
          <ThumbnailText
            title="IIT Bombay Campus to be Opened to a Few UG IIT Bombay Campus"
            image={news3}
            data="December 18, 2020"
          />
        </div>
        <a href="#" className="news-o-c__cta">
          View All News
        </a>
      </div>
    </div>
  );
};

export default NewsOnCollege;
