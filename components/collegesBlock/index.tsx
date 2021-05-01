import React, { FC } from "react";
import { CollegesCard } from "./collegesCard";
import Carousel from "../../components/Carousel";

interface CollegeProps {
  collegeList: Array<any>;
}

const CollegesBlock: FC<CollegeProps> = ({ collegeList }) => {
  const [windowSize, setWindowSize] = React.useState({ width: undefined });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="collegesBlock">
      <div className="collegesBlock__inner">
        <div className="collegesBlock__heading block-heading">
          featured college
        </div>
        <div className="collegesBlock__title block-title">
          Find The Best College in <span>INDIA</span> for Study
        </div>
        <div className="collegesBlock__list hideformobile">
          {collegeList &&
            collegeList.slice(0, 4).map((college: object, index) => {
              return <CollegesCard {...college} key={index} />;
            })}
        </div>
      </div>
      <div className="formobile">
        <Carousel bulletdot={true}>
          {collegeList &&
            collegeList.slice(0, 4).map((college: object, index) => {
              return <CollegesCard {...college} key={index} />;
            })}
        </Carousel>
      </div>
    </div>
  );
};

export { CollegesBlock };
