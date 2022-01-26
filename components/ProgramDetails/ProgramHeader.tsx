import React, {useContext} from "react";
import { useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import bgImage from "../../public/course-bgimage.png";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { useDispatch } from "react-redux";
import { addToFavourites } from "@/store/Action/collegefavourite.action";
import { AuthContext } from "pages/AuthContext";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ProgramHeader = ({ data }) => {
  const [click, setClick] = React.useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false as boolean);
  const dispatch = useDispatch();
  const college = useSelector((state:any) => state.college.college);

  const { user } = useContext(AuthContext);

  const handleClick = () => {
    let data = {"college":college._id,"user":user.uid}
    dispatch(addToFavourites(data))
    setClick((click) => !click);
    setSnackOpen(true);
  }

  return (
    <div
      className="program-header"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="section-wrapper">
        <div className="program-header__program">
          <div className="program-header__left">
            <div className="program-title">{data?.name}</div>
            <div className="detail-container">
              <div className="course-update-container">
                <div className="course-text">Last updated:</div>
                <div className="course-date">21 june 2021</div>
              </div>
              <div className="course-update-container">
                <div className="course-text">Level:</div>
                <div className="course-date">{data?.courselevel?.name}</div>
              </div>
            </div>
          </div>
          <div className="program-header__right">
            <div className="program-header__task">
              <div
                className="task__logo"
                onClick={() => {
                  setClick((click) => !click);
                  setSnackOpen(true);
                }}
              >
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8401 2.61C19.3294 2.09901 18.7229 1.69365 18.0555 1.41709C17.388 1.14052 16.6726 0.998177 15.9501 0.998177C15.2276 0.998177 14.5122 1.14052 13.8448 1.41709C13.1773 1.69365 12.5709 2.09901 12.0601 2.61L11.0001 3.67L9.94012 2.61C8.90843 1.57831 7.50915 0.998711 6.05012 0.998711C4.59109 0.998711 3.19181 1.57831 2.16012 2.61C1.12843 3.64169 0.548828 5.04097 0.548828 6.5C0.548828 7.95903 1.12843 9.35831 2.16012 10.39L3.22012 11.45L11.0001 19.23L18.7801 11.45L19.8401 10.39C20.3511 9.87925 20.7565 9.27282 21.033 8.60536C21.3096 7.9379 21.4519 7.22249 21.4519 6.5C21.4519 5.77751 21.3096 5.06211 21.033 4.39465C20.7565 3.72719 20.3511 3.12076 19.8401 2.61V2.61Z"
                    fill={`${click ? "white" : ""}`}
                    stroke="white"
                    strokeWidth="2px"
                  />
                </svg>
              </div>
              <div className="task__title" onClick={handleClick}>Add to Favourite</div>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackOpen}
        autoHideDuration={1000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert onClose={() => setSnackOpen(false)} severity="success">
          {click
            ? `${data?.name} has been added to your favourite list.`
            : `${data?.name} Removed from your favourite list`}
        </Alert>
      </Snackbar>
    </div>
  );
};

export { ProgramHeader };
