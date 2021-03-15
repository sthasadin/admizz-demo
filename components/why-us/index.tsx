import React from "react";
import { Feature } from "../feature";
import leftArrow from "../../public/leftArrow.png";
import rightArrow from "../../public/rightArrow.png";
import chatIcon from "../../public/chatIcon.png";
import awardIcon from "../../public/awardIcon.png";
import collegeIcon from "../../public/collegeIcon.png";
import supportIcon from "../../public/supportIcon.png";

const Us = () => {
  const [counter, setCounter] = React.useState(0);
  const [showData, setShowData] = React.useState({});

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

  console.log(showData);
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
              <Feature data={showData} />
            </div>
            <div className="us__btncontainer">
              <button className="btn__left" onClick={handleDescrease}>
                <img src={leftArrow} />
              </button>
              <button className="btn__right">
                <img src={rightArrow} onClick={handleIncrease} />
              </button>
            </div>
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
              <div className="us__info__logo">
                <img src="/us-logo.png" alt="logo" />
              </div>
              <div className="us__info__text">
                <div className="us__info__cat-wrap">
                  <div className="us__info__estd">
                    Estd:
                    <span>1995</span>
                  </div>
                  <div className="us__info__cat">
                    DCI, INC, MCI, AICTE, UGC, NBA, NAAC-A
                  </div>
                </div>
                <div className="us__info__name">
                  kalinga Institute of Industrial Technology
                </div>
                <div className="us__info__details-wrap">
                  <div className="us__info__details">
                    Some of the detail about KIIT here.
                  </div>
                  <div className="us__cta">View Details</div>
                </div>
              </div>
            </div>
          </div>
          <div className="us__right__bottom">
            <div className="us__read">
              <div className="us__read__title">We are now International</div>
              <div className="us__read__desc">
                We accept and register students from all over the world
              </div>
              <div className="us__cta">Learn More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Us };
