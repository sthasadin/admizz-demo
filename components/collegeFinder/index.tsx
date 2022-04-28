import React from "react";
import { CallToAction } from "../Button/callToAction";
import { CollegeFinderCard } from "./collegeFinderCard";
import { useRouter } from "next/router";

const CollegeFinder = () => {
  const [showMore, setShowMore] = React.useState(false);

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
            name="Agriculture"
            //count="1259"
            imgSrc="/college-finder/agriculture.png"
            alt="engineering_logo"
            stream="agriculture"
          />
          <CollegeFinderCard
            name="Architecture"
            //count="1259"
            imgSrc="/college-finder/architecture.png"
            alt="art_logo"
            stream="architecture"

          />
          <CollegeFinderCard
            name="Art & Music"
            //count="1259"
            imgSrc="/college-finder/music.png"
            alt="arts-music_logo"
            stream="art&music"

          />
          <CollegeFinderCard
            name="Commerce"
            //count="1259"
            imgSrc="/college-finder/commerce.png"
            alt="commerce_logo"
            stream="commerce"

          />
          <CollegeFinderCard
            name="Computer Application"
            //count="1259"
            imgSrc="/college-finder/computer.png"
            alt="computer_logo"
            stream="computerapplication"

          />
          <CollegeFinderCard
            name="Dental"
           // count="1259"
            imgSrc="/college-finder/Dental.png"
            alt="science_logo"
            stream="dental"

          />
          <CollegeFinderCard
            name="Design"
           // count="1259"
            imgSrc="/college-finder/design.png"
            alt="multimedia_logo"
            stream="design"

          />
          <CollegeFinderCard
            name="Engineering"
            //count="1259"
            imgSrc="/college-finder/engineering.png"
            alt="science_logo"
            stream="engineering"

          />
          <CollegeFinderCard
            name="Education"
            //count="1259"
            imgSrc="/college-finder/education.png"
            alt="education_logo"
            stream="education"

          />

          <CollegeFinderCard
            name="Law"
            //count="1259"
            imgSrc="/college-finder/law.png"
            alt="law_logo"
            stream="law"

          />
          {/* {showMore && (
            <> */}
          <CollegeFinderCard
            name="Management"
            //count="1259"
            imgSrc="/college-finder/management.png"
            alt="management_logo"
            stream="management"

          />

          <CollegeFinderCard
            name="Medical Science"
           // count="1259"
            imgSrc="/college-finder/medical-science.png"
            alt="medical-science_logo"
            stream="medicalscience"

          />

          <CollegeFinderCard
            name="Paramedical"
           // count="1259"
            imgSrc="/college-finder/paramedical.png"
            alt="social-psychology_logo"
            stream="paramedical"

          />

          <CollegeFinderCard
            name="Pharmacy"
           // count="1259"
            imgSrc="/college-finder/pharmacy.png"
            alt="travel_logo"
            stream="pharmacy"

          />
          <CollegeFinderCard
            name="Science"
           // count="1259"
            imgSrc="/college-finder/science.png"
            alt="social-psychology_logo"
            stream="science"

          />

        
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
