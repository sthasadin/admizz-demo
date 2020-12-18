import React from "react";
import { Card1 } from "../card/card1";

const About = () => {
  return (
    <div className="about-country">
      <div className="about-country__heading block-heading">about india</div>
      <div className="about-country__title block-title">
        learn something about india
      </div>
      <div className="about-country__desc">
        <p>
          India has traditionally been seen as a country that sends rather than
          receives international students, but a large number of students from
          elsewhere are now choosing to study in India, with the country
          welcoming more than 30,000 international students every year.
        </p>
      </div>
      <div className="about-country__info">
        India has over <span>300,000 mosques</span> and over{" "}
        <span>2 million Hindu temples</span>
      </div>
      <div className="about-country__thumbnail-wrap">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </div>
  );
};

export { About };
