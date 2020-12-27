import React from "react";
import { CollegeFinderCard } from "./collegeFinderCard";

const CollegeFinder = () => {
  return (
    <div className="collegeFinder">
      <div className="collegeFinder__inner">
        <div className="collegeFinder__titlebar">
          <div className="collegeFinder__left">
            <div className="collegeFinder__heading block-heading">
              college finder
            </div>
            <div className="collegeFinder__title block-title">
              Explore and Find College By Categories
            </div>
          </div>
          <div className="collegeFinder__right">
            <div className="cta"></div>
          </div>
        </div>
        <div className="collegeFinder__list">
          <CollegeFinderCard name="Engineering" count="1259" />
          <CollegeFinderCard name="Science" count="1259" />
          <CollegeFinderCard name="Multimedia and Video" count="1259" />
          <CollegeFinderCard name="Medical Science" count="1259" />
          <CollegeFinderCard name="Art, Design and Architecture" count="1259" />
          <CollegeFinderCard name="Computers" count="1259" />
          <CollegeFinderCard name="Management" count="1259" />
          <CollegeFinderCard name="Commerce" count="1259" />
          <CollegeFinderCard name="Law" count="1259" />
          <CollegeFinderCard name="Engineering" count="1259" />
          <CollegeFinderCard name="Travel & Tourism" count="1259" />
          <CollegeFinderCard name="Law Enforcement" count="1259" />
          <CollegeFinderCard name="Scoail Psychology" count="1259" />
          <CollegeFinderCard name="Education" count="1259" />
          <CollegeFinderCard name="Engineering" count="1259" />
        </div>
      </div>
    </div>
  );
};

export { CollegeFinder };
