import React, { useEffect, useState } from "react";
import news from "../../public/news.png";
import news1 from "../../public/news1.png";
import news2 from "../../public/news2.png";
import news3 from "../../public/news3.png";
import ThumbnailText from "./thumnaiil-text";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getNewsOfCollege } from "../../store/Action/blog.action";

const NewsOnCollege = () => {
  const dispatch = useDispatch();
  const college = useSelector((state: any) => state.college.college);
  const collegeNews = useSelector((state: any) => state.blog.collegeNews);
  console.log('collegeNews',collegeNews)

  const getCoverNewsLetter = (college_slug) => {
    dispatch(getNewsOfCollege(college_slug));
  };
  useEffect(() => {
    college && getCoverNewsLetter(college.college_slug);
  }, [college]);

  return Array.isArray(collegeNews) ? (
    <div className="news-o-c">
      <div className="news-o-c__inner">
          <div className="sidebar__title">Subjects covered</div>
      
        <div className="news-o-c__list">
          {collegeNews.map((news) => (
            <ThumbnailText
              key={Math.random().toString(36).slice(1)}
              title={`${news.blog_title.substring(0, 20)}...`}
              image={news.blog_imageURL}
              data={moment(news.createdAt).format("MMMM Do YYYY")}
              slug={news.blog_slug}
            />
          ))}
        </div>

        {/* <a href="#" className="news-o-c__cta">
          View All News
        </a> */}
      </div>
    </div>
  ) : null;
};

export default NewsOnCollege;
