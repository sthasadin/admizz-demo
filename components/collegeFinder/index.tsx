import React from "react";
import { CallToAction } from "../Button/callToAction";
import { CollegeFinderCard } from "./collegeFinderCard";
import { useRouter } from "next/router";

const CollegeFinder = () => {
  const [showMore, setShowMore] = React.useState(true);

  const router = useRouter();
  return (
    <div className="collegeFinder">
      <div className="collegeFinder__inner section-wrapper">
        <div className="collegeFinder__titlebar">
          <div className="collegeFinder__left">
            <div className="collegeFinder__heading block-heading">
              college finder
            </div>
            <div className="collegeFinder__title block-title">
              Explore and Find College By Courses
            </div>
          </div>

          <div className="collegeFinder__right hideformobile">
            <CallToAction onClick={() => router.push("/colleges")}>
              explore all categories
            </CallToAction>
          </div>
        </div>
        <div className="collegeFinder__list">
          <CollegeFinderCard
            name="Engineering"
            count="1259"
            imgSrc="/college-finder/engineering.png"
            alt="engineering_logo"
          />
          <CollegeFinderCard
            name="Science"
            count="1259"
            imgSrc="/college-finder/science.png"
            alt="science_logo"
          />
          <CollegeFinderCard
            name="Multimedia and Video"
            count="1259"
            imgSrc="/college-finder/multimedia.png"
            alt="multimedia_logo"
          />
          <CollegeFinderCard
            name="Medical Science"
            count="1259"
            imgSrc="/college-finder/medical-science.png"
            alt="medical-science_logo"
          />
          <CollegeFinderCard
            name="Art and Architecture"
            count="1259"
            imgSrc="/college-finder/arts.png"
            alt="art_logo"
          />
          <CollegeFinderCard
            name="Computers"
            count="1259"
            imgSrc="/college-finder/computer.png"
            alt="computer_logo"
          />
          <CollegeFinderCard
            name="Management"
            count="1259"
            imgSrc="/college-finder/management.png"
            alt="management_logo"
          />
          <CollegeFinderCard
            name="Commerce"
            count="1259"
            imgSrc="/college-finder/commerce.png"
            alt="commerce_logo"
          />
          <CollegeFinderCard
            name="Law"
            count="1259"
            imgSrc="/college-finder/law.png"
            alt="law_logo"
          />
          <CollegeFinderCard
            name="Engineering"
            count="1259"
            imgSrc="/college-finder/science.png"
            alt="science_logo"
          />
          {showMore && (
            <>
              <CollegeFinderCard
                name="Travel & Tourism"
                count="1259"
                imgSrc="/college-finder/travel.png"
                alt="travel_logo"
              />

              <CollegeFinderCard
                name="Law Enforcement"
                count="1259"
                imgSrc="/college-finder/law-enforcement.png"
                alt="law-enforcement_logo"
              />
              <CollegeFinderCard
                name="Social Psychology"
                count="1259"
                imgSrc="/college-finder/social-psychology.png"
                alt="social-psychology_logo"
              />
              <CollegeFinderCard
                name="Education"
                count="1259"
                imgSrc="/college-finder/education.png"
                alt="education_logo"
              />
              <CollegeFinderCard
                name="Art & Music"
                count="1259"
                imgSrc="/college-finder/arts-music.png"
                alt="arts-music_logo"
              />
            </>
          )}
        </div>
        <div className="collegeFinder__middle">
          <CallToAction
            onClick={() => setShowMore((showMore) => !showMore)}
            className="collegeFinder__middle__btn"
          >
            {showMore ? "Hide categories" : "explore all categories"}
          </CallToAction>
        </div>
      </div>
    </div>
  );
};

export { CollegeFinder };
