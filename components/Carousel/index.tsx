import React, { ReactChildren, ReactChild, ReactNode, Children } from "react";
import { useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface Carousel {
  children: ReactNode | ReactChild | ReactChildren;
}
function Carousel({ children, bulletdot }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Children.count(children);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const inactivestyle = {
    width: "10px",
    height: "9px",
    background: "#5f1802",
    borderRadius: "50%",
    outline: "none",
  };
  const activestyle = {
    width: "14px",
    height: "14px",
    background: "#ffa200",
    borderRadius: "50%",
    outline: "none",
  };

  return (
    <div className="carousel">
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {children}
      </AutoPlaySwipeableViews>
      <div className="carousel__lines">
        {Array(maxSteps)
          .fill(0)
          .map((data, index) => (
            <hr
              className="carousel__line"
              style={activeStep === index ? activestyle : inactivestyle}
            ></hr>
          ))}
      </div>
    </div>
  );
}

export default Carousel;
