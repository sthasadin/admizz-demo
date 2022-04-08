import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import Snackbar from "@material-ui/core/Snackbar";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { useDispatch } from "react-redux";
import { addToFavourites } from "@/store/Action/collegefavourite.action";
import { AuthContext } from "pages/AuthContext";
import videologo from "public/play-btn.png";
import Backdrop from "@material-ui/core/Backdrop";
import ReactPlayer from "react-player";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { auth } from "../../firebase";
import { useRouter } from "next/router";
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Submenu = (props: any) => {
  const [collegeBarSticky, setCollegeBarSticky] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [click, setClick] = React.useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false as boolean);
  const [snackOpenLogin, setSnackOpenLogin] = React.useState(false as boolean);

  const college = useSelector((state: any) => state.college.college);
  const { user } = useContext(AuthContext);
  const users = useSelector((state: any) => state.user.authUser);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClick = () => {
    if (auth.currentUser) {
      let data = { college: college._id, user: user.uid };
      dispatch(addToFavourites(data));
      setClick((click) => !click);
      setSnackOpen(true);
    } else {
      setSnackOpenLogin(true);
      router.push("/login");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 390) {
      setCollegeBarSticky(true);
    } else {
      setCollegeBarSticky(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`submenu-bars  ${
        collegeBarSticky ? "active-college-sticky" : ""
      }`}
    >
      {collegeBarSticky && (
        <div className="college-navbar-sticky-container">
          <div className="section-wrapper">
            <div className="college_container ">
              <div className="college_content">
                <div className="college-img">
                  <img src={college?.college_logo} alt="..." />
                </div>
                <div className="college-name">{college?.name}</div>
              </div>
              <div className="college_content__right">
                <div className="college-right-content">
                  <div className="task__logo" onClick={handleClick}>
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8401 2.61C19.3294 2.09901 18.7229 1.69365 18.0555 1.41709C17.388 1.14052 16.6726 0.998177 15.9501 0.998177C15.2276 0.998177 14.5122 1.14052 13.8448 1.41709C13.1773 1.69365 12.5709 2.09901 12.0601 2.61L11.0001 3.67L9.94012 2.61C8.90843 1.57831 7.50915 0.998711 6.05012 0.998711C4.59109 0.998711 3.19181 1.57831 2.16012 2.61C1.12843 3.64169 0.548828 5.04097 0.548828 6.5C0.548828 7.95903 1.12843 9.35831 2.16012 10.39L3.22012 11.45L11.0001 19.23L18.7801 11.45L19.8401 10.39C20.3511 9.87925 20.7565 9.27282 21.033 8.60536C21.3096 7.9379 21.4519 7.22249 21.4519 6.5C21.4519 5.77751 21.3096 5.06211 21.033 4.39465C20.7565 3.72719 20.3511 3.12076 19.8401 2.61V2.61Z"
                        fill={`${click ? "#4F4F4F" : ""}`}
                        stroke="#4F4F4F"
                        strokeWidth="2px"
                      />
                    </svg>
                  </div>
                  <div
                    className="task__title"
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    Add to Favourite
                  </div>
                </div>
                <div className="college-right-content">
                  <div className="task__logo" onClick={handleOpen}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76515 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76515 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76515 3.51472 3.51472C5.76515 1.26428 8.8174 0 12 0ZM12 22.2857C14.7279 22.2857 17.3442 21.202 19.2731 19.2731C21.202 17.3442 22.2857 14.7279 22.2857 12C22.2857 9.27206 21.202 6.65585 19.2731 4.7269C17.3442 2.79796 14.7279 1.71429 12 1.71429C9.27206 1.71429 6.65585 2.79796 4.7269 4.7269C2.79796 6.65585 1.71429 9.27206 1.71429 12C1.71429 14.7279 2.79796 17.3442 4.7269 19.2731C6.65585 21.202 9.27206 22.2857 12 22.2857ZM10.7143 15.6531L16.1949 12L10.7143 8.34686V15.6531ZM10.9989 6.47486L17.6811 10.9303C17.8572 11.0477 18.0016 11.2068 18.1015 11.3934C18.2013 11.58 18.2536 11.7884 18.2536 12C18.2536 12.2116 18.2013 12.42 18.1015 12.6066C18.0016 12.7932 17.8572 12.9523 17.6811 13.0697L10.9989 17.5251C10.8052 17.6542 10.5802 17.7283 10.3478 17.7396C10.1153 17.7508 9.88423 17.6987 9.67906 17.5889C9.47389 17.4791 9.30237 17.3157 9.18278 17.1161C9.06319 16.9165 9.00002 16.6881 9 16.4554V7.54286C9.00002 7.31016 9.06319 7.08182 9.18278 6.8822C9.30237 6.68258 9.47389 6.51916 9.67906 6.40936C9.88423 6.29956 10.1153 6.2475 10.3478 6.25874C10.5802 6.26997 10.8052 6.34407 10.9989 6.47314V6.47486Z"
                        fill="#4F4F4F"
                      />
                    </svg>

                  
                  </div>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    className="introduction__modalContainer"
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <div className="react-player-container ">
                        <div className="cross-icon" onClick={handleClose}>
                          X
                        </div>
                        <ReactPlayer
                          url={college?.video_360}
                          className="react-player"
                          controls
                        />
                      </div>
                    </Fade>
                  </Modal>
                  <div className="task__title">Campus Tour</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="submenu-bar">
        <div className="submenu-bar__inner section-wrapper">
          <ul className="submenu">
            <li>
              <Link
                to="overview"
                offset={-140}
                spy={true}
                className="submenu__item"
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                to="course_fee"
                offset={-140}
                spy={true}
                className="submenu__item"
              >
                Courses & Fee
              </Link>
            </li>

            <li>
              <Link
                to="rating"
                offset={-140}
                spy={true}
                className="submenu__item"
              >
                Rating & Reviews
              </Link>
            </li>
            <li>
              <Link
                to="gallery"
                offset={-140}
                spy={true}
                className="submenu__item "
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="admission"
                offset={-140}
                spy={true}
                className="submenu__item"
              >
                Admission Process
              </Link>
            </li>
            <li>
              <Link
                to="placement"
                offset={-140}
                spy={true}
                className="submenu__item "
              >
                Placements
              </Link>
            </li>
            {/* <li
              className={`submenu__item ${state === "qa" ? "active" : ""} `}
              onClick={() => setState("qa")}
            >
              <a to="qna">Q&A</a>
            </li> */}
          </ul>
        </div>
      </div>
      <Snackbar
        open={snackOpen}
        autoHideDuration={1000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert onClose={() => setSnackOpen(false)} severity="success">
          {click
            ? `${college?.name} has been added to your favourite list.`
            : `${college?.name} Removed from your favourite list`}
        </Alert>
      </Snackbar>

      <Snackbar
        open={snackOpenLogin}
        autoHideDuration={4000}
        onClose={() => setSnackOpenLogin(false)}
      >
        <Alert onClose={() => setSnackOpenLogin(false)} severity="warning">
          Please Login into your account
        </Alert>
      </Snackbar>
    </div>
  );
};

export { Submenu };
