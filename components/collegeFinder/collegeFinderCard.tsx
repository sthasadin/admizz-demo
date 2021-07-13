import React from "react";
import { useRouter } from "next/router";

const CollegeFinderCard = (props: any) => {
  const router = useRouter();
  return (
    <>
      <div
        className={`course-card ${props.className ? props.className : ""}`}
        onClick={() =>
          router.push({
            pathname: `/colleges`,
            query: { query: props.stream },
          })
        }
      >
        <div className="course-card__inner">
          <div className="course-card__icon">
            <img src={props.imgSrc} alt={props.alt} />
          </div>
          <div className="course-card__title">{props.name}</div>
          <div className="course-card__count">{props.count} Colleges</div>
        </div>
      </div>
    </>
  );
};

export { CollegeFinderCard };
