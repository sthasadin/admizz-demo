import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Menu, Dropdown } from "antd";
import Layout from "../../layouts";
import { CaretDownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import ReactPlayer from "react-player";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { getTestimonial } from "../../store/Action/testimonial.actions";
import TestimonialArray from "./TestimonialArray";

const index = () => {
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
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  // const getAllTestimonal = async () => {
  //   const fetchTestimonal = await dispatch(getTestimonial());
  //   setTestimonialList(fetchTestimonal);
  // };

  // React.useEffect(() => {
  //   getAllTestimonal();
  // }, []);

  React.useEffect(() => {
    if (testimonialList.length > 0) {
      testimonialList.map(function (test: any, index: any) {
        if (index === selectedIndex) {
          setselectedTestimonial(test);
        }
      });
    }
  }, [testimonialList]);

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
  const menu = (
    <Menu>
      <Menu.Item className="menu-item-dropdown">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          2022
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          2023
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          2024
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Layout title="Contact Us" stickyBar={true}>
        <div className="testimonial-detail-page">
          <div className="testimonial-detail-page-title">Testimonials</div>
          <div className="testimonial-detail-top">
            <h4>Showing Result</h4>
            <div className="showing-result-content">
              <div className="showing-result-content-col">
                <h6>Year: </h6>
                <Dropdown overlay={menu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    2021 <CaretDownOutlined className="dropdown-icon" />
                  </a>
                </Dropdown>
              </div>
              <div className="showing-result-content-col">
                <h6>Sort By: </h6>
                <Dropdown overlay={menu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Default <CaretDownOutlined className="dropdown-icon" />
                  </a>
                </Dropdown>
              </div>
              <div className="showing-result-content-col">
                <h6>Show </h6>
                <Dropdown overlay={menu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    12 <CaretDownOutlined className="dropdown-icon" />
                  </a>
                </Dropdown>
              </div>
              <div className="showing-result-content-col">
                <h6>Results</h6>
              </div>
            </div>
          </div>
          <div className="testimonial-array">
            {testimonialList?.map((item, index) => {
              return (
                <div className="testimonial-detail-page__detailContainer">
                  <div className="detailContainer__imagebox">
                    <img src={selectedTestimonial?.image_url} />
                  </div>
                  <div className="detailContainer__info">
                    <div className="detailContainer__name">
                      {selectedTestimonial?.name}
                    </div>
                    <div className="detailContainer__placebox">
                      <div className="detailContainer__place">
                        {selectedTestimonial?.designation}
                      </div>
                      <div className="detailContainer__batch">Batch: 2019</div>
                    </div>
                    <div className="detailContainer__coursebox">
                      <div className="detailContainer__course">
                        {/* {selectedTestimonial?.course} */}
                        course
                      </div>
                      <div className="detailContainer__batch_part">
                        {/* {selectedTestimonial?.subject} */}
                        subject
                      </div>
                    </div>
                  </div>
                  <div className="introduction__watch">
                    <div
                      className="introduction__watch__icon"
                      onClick={handleOpen}
                    >
                      <svg
                        width="28"
                        height="28"
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
                        <circle
                          cx="37.5"
                          cy="37.5"
                          r="26.1364"
                          fill="#5F1802"
                        />
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
                        <div>
                          <ReactPlayer url="https://youtu.be/CDknjC9aFmg" />
                        </div>
                      </Fade>
                    </Modal>

                    <div className="introduction__watch__label">
                      <a href="https://youtu.be/CDknjC9aFmg" target="_blank">
                        Watch Video
                      </a>
                    </div>
                  </div>

                  <div className="detail_container_content_box">
                    <div className="detail_container_content-arrow">"</div>
                    <div className="detail_container_content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed eu turpis pulvinar justo dictum blandit eget vel diam.
                      Morbi ornare vulputate nulla, non vestibulum nisi. Sed eu
                      turpis pulvinar justo dictum blandit eget vel diam. Morbi
                      ornare vulputate nulla, non vestibulum nisi.
                    </div>
                    <div className="detail_container_content-arrow-next">"</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default index;