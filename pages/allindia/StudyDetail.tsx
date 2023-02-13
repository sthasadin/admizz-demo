import React from "react";

import Fade from "@material-ui/core/Fade";
import ReactPlayer from "react-player";
import Modal from "@material-ui/core/Modal";
import Link from "next/link";
import Backdrop from "@material-ui/core/Backdrop";
import { TiTick } from "react-icons/ti";
const StudyDetail = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="study-detail">
        <div className="study-detail-header">Study In India</div>
        <div className="study-detail-title">
          Why Study In <span>INDIA?</span>
        </div>
        <div className="para-box">
          <div className="parabox-one">
            <div className="study-detail-title-para ">
              We continuously strive towards facilitating universities where the
              most worth-while career opportunities awaits for you.
            </div>
            <div className="study-detail-title-para ">
              A millennia-old civilization, the birthplace of four world
              religions, a dazzling diversity of cultures, languages, and
              traditions, and breathtaking natural beauty – from the soaring
              Himalayas to the deserts of Rajasthan. The real question is not
              “why study in India?”, but “why wouldn't you?” While India has
              much to offer the traveler, it also has much to offer students.
              With access both to such rich history and diversity as well as a
              rapidly growing country on the cutting edge of the technological
              revolution, studying in India has much to offer, whether your
              interests are in Classics or Computers, Philosophy or Politics.
            </div>
            <div className="study-detail-title-para ">
              India's educational system is as encompassing and as diverse as
              its history, making studying in India unlike anywhere else.
            </div>
          </div>

          <div className="studydetail-video__thumbnail">
            <img src="dimdot.svg" className="studydetail-dot-img" />
            <img
              className="studydetail-video__thumbnail_img"
              src="/why-study-in-india.png"
              alt="why-study-in-india"
            />
            <img
              src="/playvideoIcon.png"
              alt="playicon_logo"
              className="playicon-study-detail"
              onClick={handleOpen}
            />
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
          <div className="parabox-two">
            <div className="study-detail-title-para">
              India is the home of the world's largest university by enrollment,
              Indira Gandhi National Open University, with 3.5 million students.
              India's higher education system has 575 university-level
              institutions, including:
            </div>
            <div className="study-detail-title-para">
              <li className="para-list">
                <div className="para-list-type">
                  <TiTick />
                </div>
                42 central universities, which are controlled by National
                Department of Higher Education.
              </li>
              <li className="para-list">
                <div className="para-list-type">
                  <TiTick />
                </div>
                243 state universities, which are run by state governments
              </li>
              <li className="para-list">
                <div className="para-list-type">
                  <TiTick />
                </div>
                130 deemed universities, which are autonomously run
              </li>
              <li>
                <div className="para-list-type">
                  <TiTick />
                </div>
                53 private universities
              </li>
              <li className="para-list">
                <div className="para-list-type">
                  <TiTick />
                </div>
                33 institutes of national importance, which are deemed to be of
                special importance and typically focus on science and technology
              </li>
            </div>
            <div className="study-detail-title-para">
              Admizz helps students choose the best course and university fit
              for a student.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyDetail;
