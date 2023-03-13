import React from "react";
import { Card1 } from "../card/card1";

const About = () => {
  return (
    <div className="about-country" id="about-us">
      <div className="inner__about section-wrapper">
        <div className="about-country__heading block-heading"></div>
        <div className="about-country__title block-title">
        Why Study Abroad?
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
        {/* <div className="about-country__info">
          India has over
          <span> 45,000 Degree </span>
          Colleges, and around 1018 Universities,
          <span>1500 top Institution.</span>
        </div> */}
        <div className="about-country__thumbnail-wrap">
          <Card1
            bgImage="card-india"
            title="Cultural Immersion"
            subText="Immerse yourself in a new culture and broaden your perspective."
            href="#"
            // href="blogs/learn-about-geography"
          />
          <Card1
            bgImage="card-usa"
            title=" Language Mastery"
            subText="Enhance your fluency with immersive, real-world language practice."
            href="#"
            // href="blogs/history-of-india-in-a-minute"
          />
          <Card1
            href="#"
            // href="blogs/education-system-in-india"
            bgImage="card-aus"
            title="Career Advancement"
            subText="Learn valuable skills such as adaptability, independence, and navigating situations."
          />
          <Card1
            href="#"
            // href="blogs/learn-about-indian-culture"
            bgImage="card-uk"
            title="UK"
            subText="Explore colleges in UK"
          />
          <Card1
            href="#"
            bgImage="card-canada"
            title="Global Connections"
            subText="Meet people from all over the world and build a global network of friends and colleagues."
          />
          {/* <Card1
            href="blogs/life-style-of-indian-people"
            bgImage="card-france"
            title="Personal Growth and Development"
            subText="Learn to operate out of your comfort zone and develop self-confidence through new experiences."
          /> */}
          {/* <Card1
            href="blogs/life-style-of-indian-people"
            bgImage="card-dubai"
            title="DUBAI"
            subText="Explore colleges in Dubai"
          /> */}
        </div>
       
      </div>
    </div>
  );
};

export { About };
