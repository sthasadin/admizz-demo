import React from "react";

const TrendingCourses = () => {
  return (
    <div className="trending-courses">
      <div className="trending-courses__inner">
        <div className="sidebar__title">Trending Courses</div>
        <div className="trending-courses__list">
          <div className="trending-courses__item">
            <div className="trending-courses__title-wrap">
              <div className="trending-courses__title">
                Chemical Engineering
              </div>
              <div className="trending-courses__level">UG</div>
            </div>
            <div className="trending-courses__info">
              <div className="trending-courses__info__item">Fee: Rs. 200k</div>
              <div className="trending-courses__info__item">2 years</div>
              <div className="trending-courses__info__item">50 Reviews</div>
            </div>
          </div>
          <div className="trending-courses__item">
            <div className="trending-courses__title-wrap">
              <div className="trending-courses__title">M.Tech</div>
              <div className="trending-courses__level">UG</div>
            </div>
            <div className="trending-courses__info">
              <div className="trending-courses__info__item">Fee: Rs. 200k</div>
              <div className="trending-courses__info__item">2 years</div>
              <div className="trending-courses__info__item">50 Reviews</div>
            </div>
          </div>
          <div className="trending-courses__item">
            <div className="trending-courses__title-wrap">
              <div className="trending-courses__title">MBA</div>
              <div className="trending-courses__level">UG</div>
            </div>
            <div className="trending-courses__info">
              <div className="trending-courses__info__item">Fee: Rs. 200k</div>
              <div className="trending-courses__info__item">2 years</div>
              <div className="trending-courses__info__item">50 Reviews</div>
            </div>
          </div>
          <div className="trending-courses__item">
            <div className="trending-courses__title-wrap">
              <div className="trending-courses__title">PHD Programs</div>
              <div className="trending-courses__level">UG</div>
            </div>
            <div className="trending-courses__info">
              <div className="trending-courses__info__item">Fee: Rs. 200k</div>
              <div className="trending-courses__info__item">2 years</div>
              <div className="trending-courses__info__item">50 Reviews</div>
            </div>
          </div>
        </div>
        <a href="#" className="trending-courses__cta">
          Explore All Courses
        </a>
      </div>
    </div>
  );
};

export { TrendingCourses };
