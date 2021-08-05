import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const TrendingCourses = () => {
  const trending_courses = useSelector(
    (state) => state.college.college.trending_courses
  );

  console.log(trending_courses);

  // const collegeSlug = useSelector(
  //   (state) => state.college.college.college_slug
  // );

  return trending_courses?.length ? (
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
                      {course?.courseprogram?.name}
                    </div>
                  </Link>

                  <div className="trending-courses__level">
                    {course?.courselevel?.name}
                  </div>
                </div>
                <div className="trending-courses__info">
                  <div className="trending-courses__info__item">
                    Fee: {course?.fee_per_sem} per{" "}
                    {course?.courseprogram?.exam_type}
                  </div>
                  <div className="trending-courses__info__item">
                    {course?.courseprogram?.duration}
                  </div>
                  {/* <div className="trending-courses__info__item">50 Reviews</div> */}
                </div>
              </div>
            ))}
        </div>
        {/* </Link> */}
        {/* <a href="#" className="trending-courses__cta">
          Explore All Courses
        </a> */}
      </div>
    </div>
  ) : null;
};

export { TrendingCourses };
