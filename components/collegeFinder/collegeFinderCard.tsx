import React from "react";
import Link from "next/link";

const CollegeFinderCard = (props: any) => {
  return (
    <Link href="/colleges">
      <div className={`course-card ${props.className ? props.className : ""}`}>
        <div className="course-card__inner">
          <div className="course-card__icon">
            <img src={props.imgSrc} alt={props.alt} />
          </div>
          <div className="course-card__title">{props.name}</div>
          <div className="course-card__count">{props.count} Colleges</div>
        </div>
      </div>
    </Link>
  );
};

export { CollegeFinderCard };
