import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { Value } from "@material-ui/lab";

const BBox: any = Box;
const FacultyInformation = (props: any) => {
  const faculty = useSelector((state: any) => state.college.college.faculty);
  const getValue = (value) => {
    const splitText = value.split("%");
    if (splitText?.length == 2) {
      return parseInt(splitText);
    }
    const splitByColon = value.split(":");
    if (splitByColon?.length == 2) {
      const splitByColon = value.split(":");
      return (parseInt(splitByColon[0]) * 100) / parseInt(splitByColon[1]);
    }
    return parseInt(value);
  };

  function CircularProgressWithLabel(props) {
    return (
      <BBox className="circle-container">
        <CircularProgress
          variant="determinate"
          value={getValue(props.value)}
          style={{
            width: "65px",
            height: "65px",
            color: "#FFA200",
            zIndex: 1,
          }}
        />
        <BBox className="circle">{props.value}</BBox>
      </BBox>
    );
  }
  return faculty ? (
    <div className="faculty-information">
      {faculty &&
        faculty?.major_faculty &&
        faculty?.major_faculty?.length > 0 && (
          <div className="faculty-information__inner">
            <div className="sidebar__title">Faculty Information</div>
            <div className="faculty-information__shapes">
              <div className="faculty-information__semi-circle">
                <div className="faculty-information__semi-circle-text">
                  {faculty && faculty?.total_faculty}
                  <span>Total Faculty</span>
                </div>
              </div>

              <div className="faculty-information__circle-wrap">
                {faculty?.major_faculty.map((c) => {
                  return (
                    <div className="faculty-information__circle">
                      <div className="dashboard-welcome-card__percentContainer information-circle">
                        <CircularProgressWithLabel value={c.percentage} />
                      </div>
                      <div className="faculty-information__circle__label">
                        {c.name}
                      </div>
                      {/* <div className="faculty-information__circle__desc">
                    Description
                  </div> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
    </div>
  ) : null;
};

export default FacultyInformation;
