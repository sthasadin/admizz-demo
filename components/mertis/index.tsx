import React from "react";
import { CallToAction } from "../Button/callToAction";
import Fade from "@material-ui/core/Fade";
import ReactPlayer from "react-player";
import Modal from "@material-ui/core/Modal";
import Link from "next/link";
import Backdrop from "@material-ui/core/Backdrop";

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
            Why to Study In <span>india</span>
          </div>
          <div className="merit__desc">
            We continuously strive towards facilitating campus-drives where
            eminent companies offer the most worth-while career opportunities.
          </div>
          <div className="list-item-wrap">
            <div className="list-item">
              <div className="list-item__icon">
                {" "}
                <img src="/peopleIcon.png" alt="people_logo" />
              </div>
              <div className="list-item__text">
                <div className="list-item__title">
                  15,000+ Placements in 1,500+ Companies
                </div>
                <div className="list-item__desc">
                  We continuously strive towards facilitating campus-drives
                  where eminent companies offer the most worth-while career
                  opportunities.
                </div>
              </div>
            </div>
            <div className="list-item">
              <div className="list-item__icon">
                <img src="/packageIcon.png" alt="people_logo" />
              </div>
              <div className="list-item__text">
                <div className="list-item__title">
                  15,000+ Placements in 1,500+ Companies
                </div>
                <div className="list-item__desc">
                  We continuously strive towards facilitating campus-drives
                  where eminent companies offer the most worth-while career
                  opportunities.
                </div>
              </div>
            </div>
          </div>

          <CallToAction className="learnmore__btn hideofmobile">
            <Link href="/blogs">Learn More</Link>
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
              <CallToAction className="learnmore__btn">Learn More</CallToAction>
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
          <div className="react-player-container">
            <div className="cross-icon" onClick={handleClose}>
              X
            </div>
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=_xMXR5_CnQM"
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export { Merits };
