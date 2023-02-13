import React from "react";
import { CallToAction } from "../Button/callToAction";
import Fade from "@material-ui/core/Fade";
import ReactPlayer from "react-player";
import Modal from "@material-ui/core/Modal";
import Link from "next/link";
import Backdrop from "@material-ui/core/Backdrop";
const MTModal: any = Modal;
const RTReactPlayer: any = ReactPlayer;
const Merits = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="merit">
      <div className="merit__inner section-wrapper">
        <div className="merit__left">
          <div className="merit__heading block-heading">study in india</div>
          <div className="merit__title block-title">
            Why Study In <span>INDIA?</span>
          </div>
          <div className="merit__desc">
            We continuously strive towards facilitating universities where the
            most worth-while career opportunities awaits for you.
          </div>
          <div className="list-item-wrap">
            <div className="list-item">
              <div className="list-item__icon">
                {" "}
                <img src="/peopleIcon.png" alt="people_logo" />
              </div>
              <div className="list-item__text">
                <div className="list-item__title">
                  40+ Central Universities, which are controlled by National
                  Department of Higher Education.
                </div>
                <div className="list-item__desc">
                  India is the home of the world's largest universities by
                  enrollment, Indira Gandhi National Open University, with 3.5
                  million students.
                </div>
              </div>
            </div>
            <div className="list-item">
              <div className="list-item__icon">
                <img src="/packageIcon.png" alt="people_logo" />
              </div>
              <div className="list-item__text">
                <div className="list-item__title">
                  243 state universities, which are run by state governments
                </div>
                <div className="list-item__desc">
                  Admizz helps students choose the best course and university
                  fit for a student.
                </div>
              </div>
            </div>
          </div>

          <CallToAction className="learnmore__btn hideofmobile">
            <Link href="/allindia">Learn More</Link>
          </CallToAction>
        </div>
        <div className="merit__right">
          <div className="merti__right__inner">
            <div className="merit__thumbnail">
              <img src="/why-study-in-india.png" alt="why-study-in-india" />
              <img
                src="/playvideoIcon.png"
                alt="playicon_logo"
                className="playicon-formobileversion"
                onClick={handleOpen}
              />
            </div>
            <div className="merit__thumbnail__text">
              <div className="merit__thumbnail__title">
                Some Facts about India That you should know
              </div>
              <div className="merit__thumbnail__cta">
                <a
                  href="https://www.youtube.com/watch?v=_xMXR5_CnQM"
                  target="_blank"
                >
                  watch video
                </a>
              </div>
            </div>

            <div className="formobile">
              <CallToAction className="learnmore__btn">
                <Link href="/allindia">Learn More</Link>
              </CallToAction>
            </div>
          </div>
        </div>
      </div>
      <MTModal
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
          <div className="react-player-container">
            <div className="cross-icon" onClick={handleClose}>
              X
            </div>
            <RTReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=_xMXR5_CnQM"
            />
          </div>
        </Fade>
      </MTModal>
    </div>
  );
};

export { Merits };
