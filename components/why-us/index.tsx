import React from "react";
import { Feature } from "../feature";

import Link from "next/link";
import chatIcon from "../../public/chatIcon.png";
import awardIcon from "../../public/awardIcon.png";
import collegeIcon from "../../public/collegeIcon.png";
import supportIcon from "../../public/supportIcon.png";

const Us = ({ college, blog }) => {
  const [counter, setCounter] = React.useState(0);
  const [showData, setShowData] = React.useState({});

  const removeHtmlChar = (text) => {
    return text?.replace(/<[^>]+>/g, "");
  };

  const text_truncate = (str) => {
    return str?.substring(0, 70 - 3) + "...";
  };

  const array = [
    {
      title: "One on One Counselling session",
      description:
        "Get the right career advice for you and earn your best carer certificates.",
      icon: chatIcon,
    },
    {
      title: "End to End Assistance Support",
      description:
        "Get the right career advice for you and earn your best carer certificates.",
      icon: supportIcon,
    },
    {
      title: "Get Best Scholarships Facility",
      description:
        "Get the right career advice for you and earn your best carer certificates.",
      icon: collegeIcon,
    },
    {
      title: "Be Assured About Your Admission",
      description:
        "Get the right career advice for you and earn your best carer certificates.",
      icon: awardIcon,
    },
  ];

  React.useEffect(() => {
    setShowData(array[counter]);
  }, [counter]);

  const handleDescrease = () => {
    if (counter === 0) {
      setCounter(3);
    } else {
      setCounter((counter) => counter - 1);
    }
  };

  const handleIncrease = () => {
    if (counter === 3) {
      setCounter(0);
    } else {
      setCounter((counter) => counter + 1);
    }
  };

  return (
    <div className="us">
      <div className="us__inner">
        <div className="us__left">
          <div className="us__left__inner">
            <div className="us__title">Why Choose Admizz?</div>
            <div className="us__desc">
              Kickstart your career by starting early. Admizz helps you join the
              right diploma course right after 10th grade so you’re always a
              step ahead of others.
            </div>
            <div className="us__feature">
              <Feature
                data={showData}
                handleIncrease={handleIncrease}
                handleDescrease={handleDescrease}
              />
            </div>
            {/* <div className="us__btncontainer">
              <button className="btn__left" onClick={handleDescrease}>
                <img src={leftArrow} />
              </button>
              <button className="btn__right" onClick={handleIncrease}>
                <img src={rightArrow} />
              </button>
            </div> */}
          </div>
        </div>
        <div className="us__right">
          <div className="us__right__top">
            <div className="us__title-wrap">
              <div className="us__title us__title--medium">
                Our Exclusive Tie-ups
              </div>
            </div>
            <div className="us__info">
              {/* <div className="hexagon-border"></div> */}
              {/* <svg viewBox="0 0 100 100">
                <path d="M5,30 L50,0 95,30 95,70 50,100 5,70z" />
              </svg> */}
              <div className="us__info__logo">
                <img src={college?.college_profile_image} alt="logo" />
              </div>

              <div className="us__info__text">
                <div className="us__info__cat-wrap">
                  <div className="us__info__estd">
                    Estd:
                    <span>{college?.estd_year}</span>
                  </div>
                  <div className="us__info__cat">
                    {college &&
                      college?.top_courses?.map((course, i) => {
                        return (
                          <span key={i}>
                            {course}
                            {i < college?.top_courses.length - 1 && ","}{" "}
                          </span>
                        );
                      })}
                  </div>
                </div>
                <div className="us__info__name">{college?.name}</div>
                <div className="us__info__details-wrap">
                  <div className="us__info__details">
                    Some of the detail about this university here.
                  </div>

                  <div className="us__cta">
                    <Link href={`/colleges/${college?.college_slug}`}>
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="us__right__bottom">
            <div className="us__read">
              <div className="us__read__title">
                {text_truncate(blog?.blog_title)}
              </div>
              <div className="us__read__desc">
                {text_truncate(removeHtmlChar(blog?.blog_desc))}
              </div>
              <div className="us__cta">
                <Link href={`/blogs/${blog?.blog_slug}`}>Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Us };
