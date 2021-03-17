import React from "react";
import { CallToAction } from "../Button/callToAction";
import { CollegeFinderCard } from "./collegeFinderCard";
import { useRouter } from "next/router";

const CollegeFinder = () => {
  const [showMore, setShowMore] = React.useState(false);
  const [windowSize, setWindowSize] = React.useState({ width: undefined });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (windowSize.width < 450) {
      setShowMore(true);
    }
  }, []);

  const router = useRouter();
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
          {windowSize.width > 450 && (
            <div className="collegeFinder__right">
              <CallToAction onClick={() => router.push("/colleges")}>
                explore all categories
              </CallToAction>
            </div>
          )}
        </div>
        <div className="collegeFinder__list">
          <CollegeFinderCard name="Engineering" count="1259" />
          <CollegeFinderCard name="Science" count="1259" />
          <CollegeFinderCard name="Multimedia and Video" count="1259" />
          <CollegeFinderCard name="Medical Science" count="1259" />
          <CollegeFinderCard name="Art and Architecture" count="1259" />
          <CollegeFinderCard name="Computers" count="1259" />
          <CollegeFinderCard name="Management" count="1259" />
          <CollegeFinderCard name="Commerce" count="1259" className="active" />
          <CollegeFinderCard name="Law" count="1259" />
          <CollegeFinderCard name="Engineering" count="1259" />
          {showMore && (
            <>
              <CollegeFinderCard name="Travel & Tourism" count="1259" />
              <CollegeFinderCard name="Law Enforcement" count="1259" />
              <CollegeFinderCard name="Scoail Psychology" count="1259" />
              <CollegeFinderCard name="Education" count="1259" />
              <CollegeFinderCard name="Engineering" count="1259" />
            </>
          )}
        </div>
        <div className="collegeFinder__middle">
          {windowSize.width < 450 && (
            <CallToAction
              onClick={() => setShowMore((showMore) => !showMore)}
              className="collegeFinder__middle__btn"
            >
              {showMore ? "Hide categories" : "explore all categories"}
            </CallToAction>
          )}
        </div>
      </div>
    </div>
  );
};

export { CollegeFinder };
