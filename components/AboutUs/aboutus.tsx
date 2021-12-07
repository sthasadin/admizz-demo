import React from "react";
import { useRouter } from "next/router";
// import { CallToAction } from "../../Button/callToAction";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ReactPlayer from "react-player";


const ABOUTUS = (props) => {
  const { title, imgSrc, videoUrl } = props;
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        
        <div className="introduction">
        <img src={imgSrc} alt="..." className="introduction__bannerimg"/>
        <div className="introduction__inner section-wrapper">
        <div className="introduction__left">
          <div className="introduction__title">
            We help you achieve your big dream
          </div>
          <div className="introduction__desc">
            Kickstart your career by starting early. Admizz helps you join the
            right diploma course right after 10th grade so you're always a step ahead of others
          </div>
          <div className="u-align-center">
            {videoUrl && (
              <div className="introduction__watch">
                <div className="introduction__watch__icon" onClick={handleOpen}>
                  <svg
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.05"
                      cx="37.5"
                      cy="37.5"
                      r="37.5"
                      fill="#5F1802"
                    />
                    <circle
                      opacity="0.3"
                      cx="37.4999"
                      cy="37.5"
                      r="32.197"
                      fill="#5F1802"
                    />
                    <circle cx="37.5" cy="37.5" r="26.1364" fill="#5F1802" />
                    <path
                      d="M31.3141 30.1399C31.3141 28.6003 32.9808 27.638 34.3141 28.4078L47.3224 35.9182C48.6557 36.688 48.6557 38.6125 47.3224 39.3823L34.3141 46.8926C32.9808 47.6624 31.3141 46.7001 31.3141 45.1605L31.3141 30.1399Z"
                      fill="#FFA200"
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
                      <ReactPlayer url={videoUrl} className="react-player" />
                    </div>
                  </Fade>
                </Modal>

                <div className="introduction__watch__label">
                  <a href={videoUrl} target="_blank">
                    Watch Video
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="introduction__right">
          {/* <div className="introduction__right__background"></div> */}
          <div className="introduction__right__thumbnail">
            
          </div>
        </div>
      </div>
    </div>
    )
}

export default ABOUTUS;