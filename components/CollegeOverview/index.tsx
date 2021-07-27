import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import moment from "moment";
import ReactPlayer from "react-player";

const CollegeOverview = () => {
  const [open, setOpen] = useState(false);

  const college = useSelector((state) => state.college.college);

  return (
    <div id="overview" className="overview">
      <div className="overview__title-wrap">
        <div className="overview__title">OVERVIEW</div>
        <time className="overview__date">
          Update On: {moment(college?.updateAt).format("YYYY MMM DD")}
        </time>
      </div>
      {college.overview && (
        <div className="overview__desc">{college?.overview}</div>
      )}
      <div className="overview__collegesubtitle">Profile</div>

      <div className="overview__desc">{college?.college_profile}</div>

      <div className="overview__collegesubtitle">Description</div>

      <div className="overview__desc">{college?.description}</div>

      <div className="overview__block-wrap">
        {college.QS_ranking && (
          <div className="overview__block">
            <div className="overview__block__icon">
              <img src="/college-overview.png" alt="" />
            </div>
            <div className="overview__block__title">{college.QS_ranking}</div>
            <div className="overview__block__subheading">QS Ranking</div>
          </div>
        )}
        {college.nirf && (
          <div className="overview__block">
            <div className="overview__block__icon">
              <img src="/college-overview.png" alt="" />
            </div>
            <div className="overview__block__title">{college.nirf}</div>
            <div className="overview__block__subheading">NIRF Ranking</div>
          </div>
        )}
        {college.university_ranking && (
          <div className="overview__block">
            <div className="overview__block__icon">
              <img src="/college-overview.png" alt="" />
            </div>
            <div className="overview__block__title">
              {college.university_ranking}
            </div>
            <div className="overview__block__subheading">
              University Ranking
            </div>
          </div>
        )}
        {college.highest_package && (
          <div className="overview__block">
            <div className="overview__block__icon">
              <img src="/college-overview.png" alt="" />
            </div>
            <div className="overview__block__title">
              {college.highest_package}
            </div>
            <div className="overview__block__subheading">Highest Package</div>
          </div>
        )}
        {college.mim_cost_living && (
          <div className="overview__block">
            <div className="overview__block__icon">
              <img src="/college-overview.png" alt="" />
            </div>
            <div className="overview__block__title">
              {college.mim_cost_living}
            </div>
            <div className="overview__block__subheading">
              Min. Cost of Living
            </div>
          </div>
        )}
      </div>
      {college.video_360 && (
        <div className="overview__thumbnail" onClick={() => setOpen(!open)}>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={() => setOpen(false)}
            className="introduction__modalContainer"
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div>
                <ReactPlayer url={`https://youtu.be/${college.video_360}`} />
              </div>
            </Fade>
          </Modal>
          <img
            src={
              college.video_360
                ? `https://img.youtube.com/vi/${college.video_360}/mqdefault.jpg`
                : "/college-background.png"
            }
            alt="college_360 video "
          />

          <div className="overview__thumbnail__text">
            <div className="overview__thumbnail__icon">
              <svg
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M12.9 15.7667L14.0467 16.6267C14.2064 16.4137 14.3036 16.1605 14.3275 15.8954C14.3514 15.6303 14.3011 15.3638 14.182 15.1257C14.063 14.8876 13.88 14.6874 13.6535 14.5474C13.4271 14.4075 13.1662 14.3333 12.9 14.3333V15.7667ZM8.6 21.5L7.45333 20.64C7.29362 20.853 7.19636 21.1062 7.17246 21.3713C7.14855 21.6364 7.19894 21.9029 7.31799 22.141C7.43703 22.3791 7.62002 22.5793 7.84645 22.7193C8.07288 22.8592 8.33381 22.9333 8.6 22.9333V21.5ZM36.5099 8.18148L37.6049 9.10741L36.5099 8.18148ZM5.73333 17.2H12.9V14.3333H5.73333V17.2ZM11.7533 14.9067L7.45333 20.64L9.74667 22.36L14.0467 16.6267L11.7533 14.9067ZM8.6 22.9333H10.0333V20.0667H8.6V22.9333ZM10.0333 25.8H5.73333V28.6667H10.0333V25.8ZM11.4667 24.3667C11.4667 24.7468 11.3157 25.1114 11.0469 25.3802C10.7781 25.649 10.4135 25.8 10.0333 25.8V28.6667C11.1738 28.6667 12.2675 28.2136 13.0739 27.4072C13.8803 26.6008 14.3333 25.5071 14.3333 24.3667H11.4667ZM10.0333 22.9333C10.4135 22.9333 10.7781 23.0844 11.0469 23.3532C11.3157 23.622 11.4667 23.9865 11.4667 24.3667H14.3333C14.3333 23.2262 13.8803 22.1325 13.0739 21.3261C12.2675 20.5197 11.1738 20.0667 10.0333 20.0667V22.9333ZM22.9333 14.3333H21.5V17.2H22.9333V14.3333ZM17.2 18.6333V21.5H20.0667V18.6333H17.2ZM17.2 21.5V24.3667H20.0667V21.5H17.2ZM21.5 20.0667H18.6333V22.9333H21.5V20.0667ZM25.8 24.3667C25.8 23.2262 25.347 22.1325 24.5406 21.3261C23.7342 20.5197 22.6404 20.0667 21.5 20.0667V22.9333C21.8801 22.9333 22.2447 23.0844 22.5135 23.3532C22.7823 23.622 22.9333 23.9865 22.9333 24.3667H25.8ZM21.5 28.6667C22.6404 28.6667 23.7342 28.2136 24.5406 27.4072C25.347 26.6008 25.8 25.5071 25.8 24.3667H22.9333C22.9333 24.7468 22.7823 25.1114 22.5135 25.3802C22.2447 25.649 21.8801 25.8 21.5 25.8V28.6667ZM21.5 25.8C21.1199 25.8 20.7553 25.649 20.4865 25.3802C20.2177 25.1114 20.0667 24.7468 20.0667 24.3667H17.2C17.2 25.5071 17.653 26.6008 18.4594 27.4072C19.2658 28.2136 20.3596 28.6667 21.5 28.6667V25.8ZM21.5 14.3333C20.3596 14.3333 19.2658 14.7864 18.4594 15.5928C17.653 16.3992 17.2 17.4929 17.2 18.6333H20.0667C20.0667 18.2532 20.2177 17.8886 20.4865 17.6198C20.7553 17.351 21.1199 17.2 21.5 17.2V14.3333ZM34.4 18.6333V24.3667H37.2667V18.6333H34.4ZM31.5333 24.3667V18.6333H28.6667V24.3667H31.5333ZM32.9667 25.8C32.5865 25.8 32.2219 25.649 31.9531 25.3802C31.6843 25.1114 31.5333 24.7468 31.5333 24.3667H28.6667C28.6667 25.5071 29.1197 26.6008 29.9261 27.4072C30.7325 28.2136 31.8262 28.6667 32.9667 28.6667V25.8ZM34.4 24.3667C34.4 24.7468 34.249 25.1114 33.9802 25.3802C33.7114 25.649 33.3468 25.8 32.9667 25.8V28.6667C34.1071 28.6667 35.2008 28.2136 36.0072 27.4072C36.8136 26.6008 37.2667 25.5071 37.2667 24.3667H34.4ZM32.9667 17.2C33.3468 17.2 33.7114 17.351 33.9802 17.6198C34.249 17.8886 34.4 18.2532 34.4 18.6333H37.2667C37.2667 17.4929 36.8136 16.3992 36.0072 15.5928C35.2008 14.7864 34.1071 14.3333 32.9667 14.3333V17.2ZM32.9667 14.3333C31.8262 14.3333 30.7325 14.7864 29.9261 15.5928C29.1197 16.3992 28.6667 17.4929 28.6667 18.6333H31.5333C31.5333 18.2532 31.6843 17.8886 31.9531 17.6198C32.2219 17.351 32.5865 17.2 32.9667 17.2V14.3333ZM21.5 40.1333C16.5581 40.1333 11.8187 38.1702 8.32424 34.6758C4.82982 31.1813 2.86667 26.4419 2.86667 21.5H0C0 27.2022 2.26517 32.6708 6.2972 36.7028C10.3292 40.7348 15.7978 43 21.5 43V40.1333ZM40.1333 21.5C40.1333 23.947 39.6514 26.37 38.715 28.6307C37.7785 30.8914 36.406 32.9455 34.6758 34.6758C32.9455 36.406 30.8914 37.7786 28.6307 38.715C26.37 39.6514 23.947 40.1333 21.5 40.1333V43C27.2022 43 32.6708 40.7348 36.7028 36.7028C40.7348 32.6708 43 27.2022 43 21.5H40.1333ZM21.5 1.1879e-05C15.7978 1.1879e-05 10.3292 2.26518 6.2972 6.29722C2.26517 10.3292 0 15.7979 0 21.5H2.86667C2.86667 16.5581 4.82982 11.8187 8.32424 8.32426C11.8187 4.82983 16.5581 2.86668 21.5 2.86668V1.1879e-05ZM38.7 8.60001C39.0801 8.60001 39.4447 8.75102 39.7135 9.01983C39.9823 9.28863 40.1333 9.6532 40.1333 10.0333H43C43 8.89291 42.547 7.79919 41.7406 6.99279C40.9342 6.18638 39.8404 5.73335 38.7 5.73335V8.60001ZM38.7 11.4667C38.3199 11.4667 37.9553 11.3157 37.6865 11.0469C37.4177 10.7781 37.2667 10.4135 37.2667 10.0333H34.4C34.4 11.1738 34.853 12.2675 35.6594 13.0739C36.4658 13.8803 37.5596 14.3333 38.7 14.3333V11.4667ZM37.2667 10.0333C37.2667 9.68075 37.3928 9.35968 37.6049 9.10741L35.4177 7.25555C34.7841 8.00375 34.4 8.97554 34.4 10.0333H37.2667ZM37.6049 9.10741C37.7393 8.948 37.907 8.81996 38.0962 8.7323C38.2854 8.64464 38.4915 8.59949 38.7 8.60001V5.73335C37.3813 5.73335 36.2031 6.32675 35.4177 7.25555L37.6049 9.10741ZM21.5 2.86668C27.0441 2.86668 32.0235 5.28615 35.4377 9.13321L37.582 7.22975C35.5667 4.95399 33.0907 3.13254 30.3182 1.88613C27.5456 0.639724 24.5398 -0.00318702 21.5 1.1879e-05V2.86668ZM38.2815 13.3873C39.4683 15.8412 40.1333 18.5903 40.1333 21.5H43C43 18.146 42.2317 14.9726 40.8615 12.1403L38.2815 13.3902V13.3873ZM40.1333 10.0333C40.1337 10.3377 40.0373 10.6342 39.8579 10.88C39.6786 11.1259 39.4256 11.3082 39.1357 11.4007L40.0072 14.1298C40.876 13.8526 41.6341 13.3063 42.1721 12.57C42.7101 11.8336 43 10.9453 43 10.0333H40.1333ZM39.1357 11.4007C38.9948 11.4451 38.8478 11.4673 38.7 11.4667V14.3333C39.1435 14.3343 39.5844 14.2666 40.0072 14.1327L39.1357 11.4007Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="43" height="43" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="overview__thumbnail__title">
              TAKE A 360 DEGREE VIRTUAL TOUR
            </div>
          </div>
        </div>
      )}
      {/* <a href="#" className="overview__cta">
        Read More
      </a> */}
    </div>
  );
};

export { CollegeOverview };
