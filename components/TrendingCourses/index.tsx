import React from "react";
import { useSelector } from 'react-redux';

const TrendingCourses = () => {
  const trending_courses = useSelector(state => state.college.college.trending_courses)

  console.log(trending_courses)
  return (
    <div className="trending-courses">
      <div className="trending-courses__inner">
        <div className="sidebar__title">Trending Courses</div>
        <div className="trending-courses__list">
          {
            trending_courses && trending_courses.map((course,i) => (
              <div key={i} className="trending-courses__item">
                <div className="trending-courses__title-wrap">
                  <div className="trending-courses__title">
                    {course.title}
                  </div>
                  <div className="trending-courses__level">{course.level}</div>
                </div>
                <div className="trending-courses__info">
                  <div className="trending-courses__info__item">Fee: {course.fee}</div>
                  <div className="trending-courses__info__item">{course.time}</div>
                  {/* <div className="trending-courses__info__item">50 Reviews</div> */}
                </div>
              </div>
            ))
          }
        </div>
        <a href="#" className="trending-courses__cta">
          Explore All Courses
        </a>
      </div>
    </div>
  );
};

export { TrendingCourses };
