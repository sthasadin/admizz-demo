import React from "react";
import { Card1 } from "../card/card1";

const About = () => {
  return (
    <div className="about-country" id="about-us">
      <div className="inner__about section-wrapper">
        <div className="about-country__heading block-heading">Top Study Destinations</div>
        <div className="about-country__title block-title">
          Expand your horizons: Where to study?
        </div>
        <div className="about-country__desc">
          {/* <p>
            India has traditionally been seen as a country that sends rather
            than receives international students, but a large number of students
            from elsewhere are now choosing to study in India, with the country
            welcoming more than 30,000 international students every year.
          </p> */}
          <br/>
        </div>
        <div className="about-country__info">
          India has over
          <span> 45,000 Degree </span>
          Colleges, and around 1018 Universities,
          <span>1500 top Institution.</span>
        </div>
        <div className="about-country__thumbnail-wrap">
          <Card1
            bgImage="card-4"
            title="INDIA"
            subText="All About India"
            href="#"
            // href="blogs/learn-about-geography"
          />
          <Card1
            bgImage="card-3"
            title="USA"
            subText="History of India"
            href="#"
            // href="blogs/history-of-india-in-a-minute"
          />
          <Card1
            href="#"
            // href="blogs/education-system-in-india"
            bgImage="card-3"
            title="AUSTRILIA"
            subText="Efficient Education"
          />
          <Card1
            href="#"
            // href="blogs/learn-about-indian-culture"
            bgImage="card-4"
            title="UK"
            subText="Culture of Indian"
          />
          <Card1
            href="blogs/life-style-of-indian-people"
            bgImage="card-5"
            title="CANADA"
            subText="Daily Lifestyle"
          />
          <Card1
            href="blogs/life-style-of-indian-people"
            bgImage="card-5"
            title="FRANCE"
            subText="Daily Lifestyle"
          />
          <Card1
            href="blogs/life-style-of-indian-people"
            bgImage="card-5"
            title="DUBAI"
            subText="Daily Lifestyle"
          />
        </div>
       
      </div>
    </div>
  );
};

export { About };
