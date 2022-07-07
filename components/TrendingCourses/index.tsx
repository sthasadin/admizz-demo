import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const TrendingCourses = () => {
  const { college } = useSelector((state: any) => state.college);
  const trending_courses = useSelector(
    (state: any) => state.college.college.trending_courses
  );
  return (
    <div className="trending-courses">
      <div className="trending-courses__inner">
        <div className="sidebar__title">Trending Courses</div>

        <div className="trending-courses__list">
          {trending_courses &&
            trending_courses?.map((course, i) => (
              <div key={i} className="trending-courses__item">
                <div className="trending-courses__title-wrap">
                  <Link
                    href={`/colleges/program/${course?.courseprogram?.slug}`}
                  >
                    <div className="trending-courses__title">
                      {course?.name}
                    </div>
                  </Link>

                  {/* <div className="trending-courses__level">
                    {course?.name === "undergraduate"
                      ? "under graduate"
                      : course?.name === "postgraduate"
                      ? "post graduate"
                      : course?.name}
                  </div> */}
                  <div className="trending-courses__level">
                    {course?.duration}
                  </div>
                </div>
                <div className="trending-courses__info">
                  {/* <div className="trending-courses__info__item">
                    Fee: {course?.fee_per_sem} per{" "}
                    {course?.exam_type}
                  </div> */}
                  
                  {/* <div className="trending-courses__info__item">50 Reviews</div> */}
                </div>
              </div>
            ))}
        </div>
        {/* </Link> */}
        {/* <a href={`/colleges/program/`} className="trending-courses__cta">
          Explore All Courses
        </a> */}
      </div>
    </div>
  );
};

export { TrendingCourses };
