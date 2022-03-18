import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getTestimonial } from "../../store/Action/testimonial.actions";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ReactPlayer from "react-player";
import { CallToAction } from "../Button/callToAction";
import { useRouter } from "next/router";

const Testimonial = (props: any) => {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [testimonialList, setTestimonialList] = React.useState([]);

  const [selectedIndex, setSelectedIndex] = React.useState(3);
  const [selectedTestimonial, setselectedTestimonial] = useState({
    description: "",
    designation: "",
    image_url: "",
    name: "",
    video_url: "",
    selectedIndex: selectedIndex,
  });

  const dispatch = useDispatch();

  const getAllTestimonal = async () => {
    const fetchTestimonal = await dispatch<any>(getTestimonial());
    setTestimonialList(fetchTestimonal);
  };

  React.useEffect(() => {
    getAllTestimonal();
  }, []);

  React.useEffect(() => {
    if (testimonialList.length > 0) {
      testimonialList.map(function (test: any, index: any) {
        if (index === selectedIndex) {
          setselectedTestimonial(test);
        }
      });
    }
  }, [testimonialList]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (
    description,
    designation,
    image_url,
    video_url,
    name,
    index
  ) => {
    setselectedTestimonial({
      description: description,
      designation: designation,
      image_url: image_url,
      name: name,
      video_url: video_url,
      selectedIndex: index,
    });
    setSelectedIndex(index);
  };

  return (
    <div className="collegeFinder">
      <div className="collegeFinder__inner section-wrapper">
       <div className="collegeFinder__titlebar">
          <div className="collegeFinder__left">
            <div className="collegeFinder__heading block-heading">
            Testimonial
            </div>
            <div className="collegeFinder__title block-title">
              Explore and Read Testimonial
            </div>
          </div>

          <div className="collegeFinder__right hideformobile">
            <CallToAction onClick={() => router.push("/testimonialDetailPage")}>
              Explore all testimonial
            </CallToAction>
          </div>
        </div>
    <div className="testimonial">
      <div className="testimonial__inner">
      
        <div className="testimonial__item-wrap">
          <div className="testimonial__left">
            {testimonialList?.map((item, index) => {
              var midepointIndex = testimonialList.length / 2;
              if (index < midepointIndex) {
                if (index == 3) {
                  return (
                    <div className="testimonial__center">
                      <div className={`testimonial__center__thumbnail${index}`}>
                        <img
                          src={selectedTestimonial?.image_url}
                          alt="testimonial"
                          style={{
                            // height: "304px",
                            // width: "303px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="testimonial__quote">
                        <svg
                          width="45"
                          height="40"
                          viewBox="0 0 45 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.6585 28.8536C18.4299 30.3586 18.064 31.7931 17.561 33.157C17.0579 34.4738 16.4405 35.6496 15.7088 36.6843C14.9771 37.719 14.1768 38.542 13.3079 39.1534C12.4848 39.7178 11.6387 40 10.7698 40C9.12348 40 7.4314 39.7413 5.6936 39.224C4.00152 38.7066 2.6753 37.8366 1.71494 36.6138C1.44055 36.1905 1.16616 35.6967 0.891768 35.1323C0.617378 34.5679 0.411585 33.886 0.27439 33.0864C0.137195 32.2869 0.0457317 31.3228 0 30.194C0 29.0653 0.114329 27.7484 0.342988 26.2434C0.617378 24.08 1.05183 21.9871 1.64634 19.9647C2.24085 17.9424 3.15549 15.873 4.39024 13.7566C5.67073 11.6402 7.33994 9.47678 9.39787 7.26631C11.5015 5.00882 14.1768 2.58671 17.4238 0L20.9909 5.14991C16.9665 8.25397 14.0854 11.0053 12.3476 13.4039C10.6555 15.7554 9.69512 17.8248 9.46646 19.612C9.375 20.4586 9.62652 21.117 10.221 21.5873C10.8155 22.0576 11.593 22.4339 12.5534 22.7161C14.5655 23.2334 16.1204 24.0564 17.218 25.1852C18.3613 26.2669 18.8415 27.4897 18.6585 28.8536ZM42.6677 28.8536C42.439 30.3586 42.0732 31.7931 41.5701 33.157C41.0671 34.4738 40.4497 35.6496 39.718 36.6843C38.9863 37.719 38.186 38.542 37.3171 39.1534C36.4939 39.7178 35.6479 40 34.779 40C33.1326 40 31.4405 39.7413 29.7027 39.224C28.0107 38.7066 26.6845 37.8366 25.7241 36.6138C25.4497 36.1905 25.1753 35.6967 24.9009 35.1323C24.6265 34.5679 24.4207 33.886 24.2835 33.0864C24.1463 32.2869 24.0549 31.3228 24.0091 30.194C24.0091 29.0653 24.1235 27.7484 24.3521 26.2434C24.6265 24.08 25.061 21.9871 25.6555 19.9647C26.25 17.9424 27.1646 15.873 28.3994 13.7566C29.6799 11.6402 31.3491 9.47678 33.407 7.26631C35.5107 5.00882 38.186 2.58671 41.4329 0L45 5.14991C40.9756 8.25397 38.0945 11.0053 36.3567 13.4039C34.6646 15.7554 33.7043 17.8248 33.4756 19.612C33.3841 20.4586 33.6357 21.117 34.2302 21.5873C34.8247 22.0576 35.6021 22.4339 36.5625 22.7161C38.5747 23.2334 40.1296 24.0564 41.2271 25.1852C42.3704 26.2669 42.8506 27.4897 42.6677 28.8536Z"
                            fill="#5F1802"
                          />
                        </svg>
                      </div>
                      <div
                        className="testimonial__play-icon"
                        onClick={handleOpen}
                      >
                        <svg
                          width="99"
                          height="99"
                          viewBox="0 0 99 99"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            opacity="0.2"
                            cx="49.5"
                            cy="49.5"
                            r="49.5"
                            fill="#5F1802"
                          />
                          <circle
                            opacity="0.5"
                            cx="49.5"
                            cy="49.5"
                            r="42.5"
                            fill="#5F1802"
                          />
                          <circle cx="49.5" cy="49.5" r="34.5" fill="#5F1802" />
                          <path
                            d="M41.3348 38.6761C41.3348 37.1365 43.0014 36.1743 44.3348 36.9441L63.4257 47.9662C64.759 48.736 64.759 50.6605 63.4257 51.4303L44.3348 62.4525C43.0014 63.2223 41.3348 62.26 41.3348 60.7204L41.3348 38.6761Z"
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
                          <div>
                            <ReactPlayer
                              url={
                                selectedTestimonial?.video_url
                                  ? selectedTestimonial?.video_url
                                  : "#"
                              }
                            />
                          </div>
                        </Fade>
                      </Modal>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className={"testimonial__left__thumbnail"}
                      onClick={() => {
                        handleClick(
                          item.description,
                          item.designation,
                          item.image_url,
                          item.video_url,
                          item.name,
                          index
                        );
                      }}
                    >
                      <img
                        src={item?.image_url}
                        style={{
                          borderRadius: "300px",
                        }}
                        alt="testimonial1"
                      />
                    </div>
                  );
                }
              }
            })}
          </div>

          <div className="testimonial__right">
            {testimonialList?.map((item, index) => {
              var midepointIndex = testimonialList.length / 2;
              if (index >= midepointIndex) {
                if (index == 3) {
                  return (
                    <div className="testimonial__center">
                      <div className="testimonial__center__thumbnail">
                        <img
                          style={{
                            height: "304px",
                            width: "303px",
                            objectFit: "cover",
                          }}
                          src={selectedTestimonial?.image_url}
                          alt="testimonial"
                        />
                      </div>
                      <div className="testimonial__quote">
                        <svg
                          width="45"
                          height="40"
                          viewBox="0 0 45 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.6585 28.8536C18.4299 30.3586 18.064 31.7931 17.561 33.157C17.0579 34.4738 16.4405 35.6496 15.7088 36.6843C14.9771 37.719 14.1768 38.542 13.3079 39.1534C12.4848 39.7178 11.6387 40 10.7698 40C9.12348 40 7.4314 39.7413 5.6936 39.224C4.00152 38.7066 2.6753 37.8366 1.71494 36.6138C1.44055 36.1905 1.16616 35.6967 0.891768 35.1323C0.617378 34.5679 0.411585 33.886 0.27439 33.0864C0.137195 32.2869 0.0457317 31.3228 0 30.194C0 29.0653 0.114329 27.7484 0.342988 26.2434C0.617378 24.08 1.05183 21.9871 1.64634 19.9647C2.24085 17.9424 3.15549 15.873 4.39024 13.7566C5.67073 11.6402 7.33994 9.47678 9.39787 7.26631C11.5015 5.00882 14.1768 2.58671 17.4238 0L20.9909 5.14991C16.9665 8.25397 14.0854 11.0053 12.3476 13.4039C10.6555 15.7554 9.69512 17.8248 9.46646 19.612C9.375 20.4586 9.62652 21.117 10.221 21.5873C10.8155 22.0576 11.593 22.4339 12.5534 22.7161C14.5655 23.2334 16.1204 24.0564 17.218 25.1852C18.3613 26.2669 18.8415 27.4897 18.6585 28.8536ZM42.6677 28.8536C42.439 30.3586 42.0732 31.7931 41.5701 33.157C41.0671 34.4738 40.4497 35.6496 39.718 36.6843C38.9863 37.719 38.186 38.542 37.3171 39.1534C36.4939 39.7178 35.6479 40 34.779 40C33.1326 40 31.4405 39.7413 29.7027 39.224C28.0107 38.7066 26.6845 37.8366 25.7241 36.6138C25.4497 36.1905 25.1753 35.6967 24.9009 35.1323C24.6265 34.5679 24.4207 33.886 24.2835 33.0864C24.1463 32.2869 24.0549 31.3228 24.0091 30.194C24.0091 29.0653 24.1235 27.7484 24.3521 26.2434C24.6265 24.08 25.061 21.9871 25.6555 19.9647C26.25 17.9424 27.1646 15.873 28.3994 13.7566C29.6799 11.6402 31.3491 9.47678 33.407 7.26631C35.5107 5.00882 38.186 2.58671 41.4329 0L45 5.14991C40.9756 8.25397 38.0945 11.0053 36.3567 13.4039C34.6646 15.7554 33.7043 17.8248 33.4756 19.612C33.3841 20.4586 33.6357 21.117 34.2302 21.5873C34.8247 22.0576 35.6021 22.4339 36.5625 22.7161C38.5747 23.2334 40.1296 24.0564 41.2271 25.1852C42.3704 26.2669 42.8506 27.4897 42.6677 28.8536Z"
                            fill="#5F1802"
                          />
                        </svg>
                      </div>
                      <div
                        className="testimonial__play-icon"
                        onClick={handleOpen}
                      >
                        <svg
                          width="99"
                          height="99"
                          viewBox="0 0 99 99"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            opacity="0.2"
                            cx="49.5"
                            cy="49.5"
                            r="49.5"
                            fill="#5F1802"
                          />
                          <circle
                            opacity="0.5"
                            cx="49.5"
                            cy="49.5"
                            r="42.5"
                            fill="#5F1802"
                          />
                          <circle cx="49.5" cy="49.5" r="34.5" fill="#5F1802" />
                          <path
                            d="M41.3348 38.6761C41.3348 37.1365 43.0014 36.1743 44.3348 36.9441L63.4257 47.9662C64.759 48.736 64.759 50.6605 63.4257 51.4303L44.3348 62.4525C43.0014 63.2223 41.3348 62.26 41.3348 60.7204L41.3348 38.6761Z"
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
                          <div>
                            <ReactPlayer
                              url={
                                selectedTestimonial?.video_url
                                  ? selectedTestimonial?.video_url
                                  : "#"
                              }
                            />
                          </div>
                        </Fade>
                      </Modal>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className={"testimonial__right__thumbnail"}
                      onClick={() => {
                        handleClick(
                          item.description,
                          item.designation,
                          item.image_url,
                          item.video_url,
                          item.name,
                          index
                        );
                      }}
                    >
                      <img
                        src={item?.image_url}
                        style={{ borderRadius: "300px" }}
                        alt="testimonial1"
                      />
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>

        <div className="testimonial__text">
          <span className="textDescription">
            {selectedTestimonial?.description}
          </span>
        </div>
        <div className="testimonial__author">
          <span style={{ color: "#5F1802", fontWeight: 800 }}>
            {selectedTestimonial?.name}
          </span>{" "}
          - {selectedTestimonial?.designation}
        </div>
    

      </div>
          
      {/* <div className="testimonial__formobile">
        <Carousel bulletdot="true">
          {testimonialList &&
            testimonialList.map((data) => {
              return <TestimonialCarousel key={data.id} data={data} />;
            })}
        </Carousel>
      </div> */}
    </div>
    </div>
    </div>
  );
};

export { Testimonial };
