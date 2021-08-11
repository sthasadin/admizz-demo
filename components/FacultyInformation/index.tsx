import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const FacultyInformation = (props: any) => {
  const faculty = useSelector((state) => state.college.college.faculty);

  function CircularProgressWithLabel(props) {
    return (
      <Box className="circle-container">
        <CircularProgress
          variant="determinate"
          {...props}
          style={{
            width: "65px",
            height: "65px",
            color: "#FFA200",
            zIndex: "1",
          }}
        />
        <Box className="circle">{props.value}</Box>
      </Box>
    );
  }
  return faculty ? (
    <div className="faculty-information">
      <div className="faculty-information__inner">
        <div className="sidebar__title">Faculty Information</div>
        <div className="faculty-information__shapes">
          <div className="faculty-information__semi-circle">
            <div className="faculty-information__semi-circle-text">
              {faculty && faculty?.total_faculity}
              <span>Faculty</span>
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
                  <div className="faculty-information__circle__desc">
                    Description
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default FacultyInformation;
