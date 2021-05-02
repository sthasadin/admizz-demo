import React from "react";
import Link from "next/link";
import { CollegeCourse } from "./collegeCourse";
import { useRouter } from "next/router";

const CollegesCard = (college) => {
  const router = useRouter();
  return (
    <div
      className="colleges-card"
      onClick={() => router.push(`colleges/${college?.college_slug}`)}
    >
      <div className="colleges-card__inner">
        <div className="colleges-card__thumbnail">
          <img
            src={college?.banner ? college?.banner : "/colleges.png"}
            alt="college"
          />
          <div className="colleges-card__title-wrap">
            <div className="colleges-card__title">
              <Link href={`colleges/${college?.college_slug}`}>
                <a>{college?.name}</a>
              </Link>
            </div>
            <div className="colleges-card__location">{college?.address}</div>
          </div>
        </div>
        <div className="colleges-card__details" style={{ height: "auto" }}>
          <div className="colleges-card__top">
            <div className="colleges-card__key-value-wrap">
              <div className="colleges-card__key-value">
                <div className="colleges-card__key">ESTD:</div>
                <div className="colleges-card__value">{college?.estd_year}</div>
              </div>
              <div className="colleges-card__key-value">
                <div className="colleges-card__key">Type:</div>
                <div className="colleges-card__value">Private</div>
              </div>
            </div>
            <div className="colleges-card__logo">
              <img src={college?.college_logo} alt="" />
            </div>
          </div>
          <div className="colleges-card__bottom">
            <div className="colleges-card__key-value-wrap lg">
              <div className="colleges-card__key-value lg">
                <div className="colleges-card__key lg">Total Course:</div>
                <div className="colleges-card__value lg">
                  {college?.total_course}+
                </div>
              </div>
              {college?.total_students && (
                <div className="colleges-card__key-value lg">
                  <div className="colleges-card__key lg">Total students:</div>
                  <div className="colleges-card__value lg">
                    {college?.total_students}+
                  </div>
                </div>
              )}
            </div>
            {college?.top_courses && (
              <div className="colleges-card__course">
                <CollegeCourse courses={college?.top_courses} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CollegesCard };
