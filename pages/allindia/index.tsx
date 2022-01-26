import React, { FC, useEffect } from "react";

import { BsFillPlayFill } from "react-icons/bs";
import Layout from "../../layouts";
import { useRouter } from "next/router";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ReactPlayer from "react-player";
import StudyDetail from "./StudyDetail";
// import { TopUniversities } from "./TopUniversities";

import { CollegesBlock } from "@/components/collegesBlock";
import collegeList from "pages/colleges";
import { useDispatch, useSelector } from "react-redux";
import { getAllCollegeList } from "@/store/Action/allCollage.action";
import IndiaBlogArticles from "./IndiaBlogArticles";

const index = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { collegeList } = useSelector((state:any) => state.allCollege);
  console.log({ collegeList });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCollegeList());
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Layout title="Contact Us" stickyBar={true}>
        <div className="allindia-page" style={{ position: "relative" }}>
          <div className="all-india-container">
            <div className="allindiapage-intro-header">About India</div>
            <div className="allindiapage-intro-title">
              Learn Something About INDIA
            </div>
            <div className="allindiapage-intro-desc">
              India has traditionally been seen as a country that sends rather
              than receives international students, but a large number of
              students from elsewhere are now choosing to study in India, with
              the country welcoming more than 30,000 international students
              every year.
            </div>
            <div className="all-india-watch-video" style={{ display: "flex" }}>
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
                      <ReactPlayer
                        url="https://youtu.be/CDknjC9aFmg"
                        className="react-player"
                      />
                    </div>
                  </Fade>
                </Modal>

                <div className="introduction__watch__label">
                  <a href="https://youtu.be/CDknjC9aFmg" target="_blank">
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img className="imageone image" src="icon/image1.svg" />
          <img className="imagetwo image" src="icon/image2.svg" />
          <img className="imagethree image" src="icon/imagethree.svg" />
          <img className="imagefour image" src="icon/image4.svg" />
          <img className="imagefive image" src="icon/image5.svg" />
          <img className="imagesix image" src="icon/image6.svg" />
          <img className="imageEight image" src="icon/image8.svg" />
          <img className="imageNine image" src="icon/image9.svg" />
          <img className="imageten image" src="icon/imageten.svg" />
        </div>
        <StudyDetail />
     {/* <TopUniversities collegeList={collegeList} /> */}
        <div className="quotes-container">
          <div className="quotes-container-content">
            <div
              style={{
                fontSize: "84px",
                fontStyle: "italic",
                display: "flex",
                justifyContent: "flex-start",
                lineHeight: "0px",
              }}
            >
              "
            </div>
            <span>
              We own a lot to the Indians,who taught us how to count without
              which no worthwhile scientific discovery could have been made
            </span>
            <span className="invertedcomma">"</span>
          </div>
          <div className="quotes-container-writername">-ALBERT EINSTEIN</div>
        </div>
        {/* <CollegesBlock /> */}
        <IndiaBlogArticles />
      </Layout>
    </>
  );
};

export default index;
