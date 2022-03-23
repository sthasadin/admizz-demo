import React, { useContext, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  getFavourites,
} from "@/store/Action/collegefavourite.action";
import { AuthContext } from "pages/AuthContext";
import { auth } from "../../firebase";
import { useRouter } from "next/router";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CollegeHeader = ({
  college_id,
  collageLogo,
  name,
  estblished,
  collegeBanner,
  reviews,
  state,
  city,
  institution_type,
  college_board,
  affliated_by,
  video_360,
  isFavourite,
}) => {

  const [click, setClick] = React.useState(isFavourite);
  const [snackOpen, setSnackOpen] = React.useState(false as boolean);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const favorites = useSelector((state:any) => state.favourites.userFavorite);
  const college = useSelector((state:any) => state.college.college);
  const router = useRouter();

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(()=>{
    setClick(isFavourite)
  }, [isFavourite])

  const handleClose = () => {
    setOpen(false);
  };

  // const handleClick = () => {
  //   setClick((click) => !click);
  //   let data = { college: college_id, user: user.uid };
  //   dispatch(addToFavourites(data));
  //   setSnackOpen(true);
  // };

  const handleClick = () => {
    if (auth.currentUser) {
      let data = { college: college._id, user: user.uid };
      dispatch(addToFavourites(data));
      setClick((click) => !click);
      setSnackOpen(true);
    } else {
      router.push("/login");
    }
  };

  return (
    <div
      className="college-header"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)),url(${collegeBanner})`,
      }}
    >
      <div className="college-header__inner">
        <div className="college-header__rating-wrap">
          <div className="rating-block">
            <div className="rating-block__title">
              {" "}
              {reviews?.averageRating !== "NaN"
                ? "Reviews rating"
                : "No review yet"}
            </div>
            {reviews?.averageRating && reviews?.averageRating !== "NaN" && (
              <div className="rating-block__rating-wrap">
                <div className="rating-block__rating">
                  {reviews?.averageRating}
                </div>
                <div className="rating-block__total">/10</div>
              </div>
            )}
          </div>
        </div>
        <div className="college-header__college">
          <div className="college-header__left">
            <div className="college-header__logo">
              <img src={collageLogo} alt="college" />
            </div>
            <div className="college-header__info">
              <div className="college-header__info-top">
                <div className="college-header__estd">ESTD : {estblished}</div>
                {affliated_by && (
                  <div className="college-header__affiliated-by-container">
                    <div className="college-header__affliated-by">
                      Affiliated By :{" "}
                    </div>
                    <div className="college-header__affliated-content">
                      {affliated_by}
                    </div>
                  </div>
                )}
              </div>
              <div className="college-header__name">{name}</div>

              <div className="college-header__meta">
                <div className="college-header__meta__item">
                  <div className="college-header__meta__logo">
                    <img src="/location4.png" alt="..." />
                  </div>
                  <div className="college-header__meta__title">
                    {city},&nbsp;{state}
                  </div>
                </div>
                <div className="college-header__meta__item">
                  <div className="college-header__meta__logo">
                    <img src="/star.png" alt="..." />
                  </div>
                  <div className="college-header__meta__title">
                    {institution_type}
                  </div>
                </div>
                <div className="college-header__meta__item">
                  <div className="college-header__meta__logo">
                    <img src="/shield-tick.png" alt="..." />
                  </div>
                  <div className="college-header__meta__title">
                    {college_board &&
                      college_board?.map((item, i) => {
                        return (
                          <div
                            className="college-header__college_board"
                            key={i}
                          >
                            {item}
                          </div>
                        );
                      })}
                    {!college_board && <div>No Board</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="college-header__right">
            <div className="college-header__task">
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
                    fill={click? "white" : ""}
                    stroke="white"
                    strokeWidth="2px"
                  />
                </svg>
              </div>
              <div className="task__title" onClick={handleClick}>
                
                {click? "Remove from Favourite " : "Add to Favourites"}
              </div>
            </div>
            <div className="college-header__task">
              <div className="task__logo" onClick={handleOpen}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M7.2 8.80001L7.84 9.28001C7.92914 9.16115 7.98343 9.01982 7.99677 8.87185C8.01011 8.72388 7.98198 8.57512 7.91554 8.44224C7.8491 8.30935 7.74697 8.19759 7.62058 8.11949C7.4942 8.04138 7.34857 8.00001 7.2 8.00001V8.80001ZM4.8 12L4.16 11.52C4.07086 11.6389 4.01657 11.7802 4.00323 11.9282C3.98989 12.0761 4.01802 12.2249 4.08446 12.3578C4.1509 12.4907 4.25303 12.6024 4.37942 12.6805C4.5058 12.7586 4.65143 12.8 4.8 12.8V12ZM20.3776 4.56641L20.9888 5.08321L20.3776 4.56641ZM3.2 9.60001H7.2V8.00001H3.2V9.60001ZM6.56 8.32001L4.16 11.52L5.44 12.48L7.84 9.28001L6.56 8.32001ZM4.8 12.8H5.6V11.2H4.8V12.8ZM5.6 14.4H3.2V16H5.6V14.4ZM6.4 13.6C6.4 13.8122 6.31571 14.0157 6.16569 14.1657C6.01566 14.3157 5.81217 14.4 5.6 14.4V16C6.23652 16 6.84697 15.7472 7.29706 15.2971C7.74714 14.847 8 14.2365 8 13.6H6.4ZM5.6 12.8C5.81217 12.8 6.01566 12.8843 6.16569 13.0343C6.31571 13.1843 6.4 13.3878 6.4 13.6H8C8 12.9635 7.74714 12.353 7.29706 11.903C6.84697 11.4529 6.23652 11.2 5.6 11.2V12.8ZM12.8 8.00001H12V9.60001H12.8V8.00001ZM9.6 10.4V12H11.2V10.4H9.6ZM9.6 12V13.6H11.2V12H9.6ZM12 11.2H10.4V12.8H12V11.2ZM14.4 13.6C14.4 12.9635 14.1471 12.353 13.6971 11.903C13.247 11.4529 12.6365 11.2 12 11.2V12.8C12.2122 12.8 12.4157 12.8843 12.5657 13.0343C12.7157 13.1843 12.8 13.3878 12.8 13.6H14.4ZM12 16C12.6365 16 13.247 15.7472 13.6971 15.2971C14.1471 14.847 14.4 14.2365 14.4 13.6H12.8C12.8 13.8122 12.7157 14.0157 12.5657 14.1657C12.4157 14.3157 12.2122 14.4 12 14.4V16ZM12 14.4C11.7878 14.4 11.5843 14.3157 11.4343 14.1657C11.2843 14.0157 11.2 13.8122 11.2 13.6H9.6C9.6 14.2365 9.85286 14.847 10.3029 15.2971C10.753 15.7472 11.3635 16 12 16V14.4ZM12 8.00001C11.3635 8.00001 10.753 8.25286 10.3029 8.70295C9.85286 9.15304 9.6 9.76349 9.6 10.4H11.2C11.2 10.1878 11.2843 9.98435 11.4343 9.83432C11.5843 9.68429 11.7878 9.60001 12 9.60001V8.00001ZM19.2 10.4V13.6H20.8V10.4H19.2ZM17.6 13.6V10.4H16V13.6H17.6ZM18.4 14.4C18.1878 14.4 17.9843 14.3157 17.8343 14.1657C17.6843 14.0157 17.6 13.8122 17.6 13.6H16C16 14.2365 16.2529 14.847 16.7029 15.2971C17.153 15.7472 17.7635 16 18.4 16V14.4ZM19.2 13.6C19.2 13.8122 19.1157 14.0157 18.9657 14.1657C18.8157 14.3157 18.6122 14.4 18.4 14.4V16C19.0365 16 19.647 15.7472 20.0971 15.2971C20.5471 14.847 20.8 14.2365 20.8 13.6H19.2ZM18.4 9.60001C18.6122 9.60001 18.8157 9.68429 18.9657 9.83432C19.1157 9.98435 19.2 10.1878 19.2 10.4H20.8C20.8 9.76349 20.5471 9.15304 20.0971 8.70295C19.647 8.25286 19.0365 8.00001 18.4 8.00001V9.60001ZM18.4 8.00001C17.7635 8.00001 17.153 8.25286 16.7029 8.70295C16.2529 9.15304 16 9.76349 16 10.4H17.6C17.6 10.1878 17.6843 9.98435 17.8343 9.83432C17.9843 9.68429 18.1878 9.60001 18.4 9.60001V8.00001ZM12 22.4C9.24175 22.4 6.59647 21.3043 4.64609 19.3539C2.69571 17.4035 1.6 14.7583 1.6 12H0C0 15.1826 1.26428 18.2349 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24V22.4ZM22.4 12C22.4 13.3658 22.131 14.7181 21.6083 15.9799C21.0857 17.2417 20.3196 18.3882 19.3539 19.3539C18.3882 20.3196 17.2417 21.0857 15.9799 21.6084C14.7181 22.131 13.3657 22.4 12 22.4V24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2349 24 15.1826 24 12H22.4ZM12 6.63016e-06C8.8174 6.63016e-06 5.76516 1.26429 3.51472 3.51473C1.26428 5.76516 0 8.81741 0 12H1.6C1.6 9.24176 2.69571 6.59647 4.64609 4.6461C6.59647 2.69572 9.24175 1.60001 12 1.60001V6.63016e-06ZM21.6 4.80001C21.8122 4.80001 22.0157 4.88429 22.1657 5.03432C22.3157 5.18435 22.4 5.38783 22.4 5.60001H24C24 4.96349 23.7471 4.35304 23.2971 3.90295C22.847 3.45286 22.2365 3.20001 21.6 3.20001V4.80001ZM21.6 6.40001C21.3878 6.40001 21.1843 6.31572 21.0343 6.16569C20.8843 6.01566 20.8 5.81218 20.8 5.60001H19.2C19.2 6.23653 19.4529 6.84698 19.9029 7.29706C20.353 7.74715 20.9635 8.00001 21.6 8.00001V6.40001ZM20.8 5.60001C20.8 5.40321 20.8704 5.22401 20.9888 5.08321L19.768 4.04961C19.4144 4.46721 19.2 5.00961 19.2 5.60001H20.8ZM20.9888 5.08321C21.0638 4.99423 21.1574 4.92277 21.263 4.87384C21.3686 4.82491 21.4836 4.79971 21.6 4.80001V3.20001C20.864 3.20001 20.2064 3.53121 19.768 4.04961L20.9888 5.08321ZM12 1.60001C15.0944 1.60001 17.8736 2.95041 19.7792 5.09761L20.976 4.03521C19.8512 2.76502 18.4692 1.7484 16.9218 1.05273C15.3743 0.357055 13.6966 -0.0017788 12 6.63016e-06V1.60001ZM21.3664 7.47201C22.0288 8.84161 22.4 10.376 22.4 12H24C24 10.128 23.5712 8.35681 22.8064 6.77601L21.3664 7.47361V7.47201ZM22.4 5.60001C22.4002 5.76985 22.3464 5.93536 22.2463 6.07257C22.1462 6.20978 22.005 6.31157 21.8432 6.36321L22.3296 7.88641C22.8145 7.73167 23.2376 7.42679 23.5379 7.0158C23.8382 6.60481 24 6.109 24 5.60001H22.4ZM21.8432 6.36321C21.7645 6.38794 21.6825 6.40035 21.6 6.40001V8.00001C21.8475 8.00052 22.0936 7.96274 22.3296 7.88801L21.8432 6.36321Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="task__title">College 360 Tour</div>
            </div>
          </div>
        </div>
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
            <ReactPlayer url={video_360} className="react-player" controls />
          </div>
        </Fade>
      </Modal>
      <Snackbar
        open={snackOpen}
        autoHideDuration={1000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert onClose={() => setSnackOpen(false)} severity="success">
          {click
            ? `${name} has been added to your favourite list.`
            : `${name} Removed from your favourite list`}
        </Alert>
      </Snackbar>
    </div>
  );
};

export { CollegeHeader };
