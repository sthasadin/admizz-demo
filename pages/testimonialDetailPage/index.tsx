import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Dropdown } from "antd";
import Layout from "../../layouts";
import { CaretDownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import ReactPlayer from "react-player";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  getStudentTestimonials,
  getYearList,
} from "../../store/Action/testimonial.actions";

const index = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const { studentTestimonial, universityYear, totalDocument } = useSelector(
    (state: any) => state.testimonial
  );

  const [setYears, setIsYears] = React.useState("");
  const [setDefault, setIsDefault] = React.useState("asc");
  const [setpagination, setIsPagination] = React.useState(10);

  useEffect(() => {
    dispatch(getStudentTestimonials(setYears, setDefault, setpagination));
  }, [setYears, setDefault, setpagination]);

  useEffect(() => {
    dispatch(getYearList());
  }, []);

  const handleYearChange = (e) => {
    setIsYears(universityYear[e.key]);
  };
  const handleDefaultChange = (e) => {
    setIsDefault(e.key);
  };

  const handlePaginationChange = (e) => {
    setIsPagination(e.key);
  };

  const yearsMenu = (
    <Menu onClick={handleYearChange}>
      {universityYear?.map((data, i) => {
        return (
          <Menu.Item key={i}>
            <a>{data}</a>
          </Menu.Item>
        );
      })}
    </Menu>
  );
  const sortMenu = (
    <Menu onClick={handleDefaultChange}>
      <Menu.Item key={"asc"}>
        <a>Latest</a>
      </Menu.Item>
      <Menu.Item key={"desc"}>
        <a>Oldest</a>
      </Menu.Item>
    </Menu>
  );

  let pgData = [];

  for (let x = 0; x < totalDocument; x++) {
    pgData.push(x);
  }

  const PaginationMenu = (
    <Menu onClick={handlePaginationChange}>
      {pgData.map((item: any, i: number) => {
        if(i>0){

          return (
            <Menu.Item key={i}>
              <a>{item}</a>
            </Menu.Item>
          );
        }
      })}
    </Menu>
  );
  return (
    <>
      <Layout title="StudentTestimonials" stickyBar={true}>
        <div className="testimonial-detail-page">
          <div className="testimonial-detail-page-title">
            Student Testimonials
          </div>
          <div className="testimonial-detail-top">
            <h4>Showing Result</h4>
            <div className="showing-result-content">
              <div className="showing-result-content-col">
                <h6>Year: </h6>
                <Dropdown overlay={yearsMenu}>
                  <a className="ant-dropdown-link" onClick={handleYearChange}>
                    Select Batch <CaretDownOutlined className="dropdown-icon" />
                  </a>
                </Dropdown>
              </div>
              <div className="showing-result-content-col">
                <h6>Sort By: </h6>
                <Dropdown overlay={sortMenu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={handleDefaultChange}
                  >
                    Default <CaretDownOutlined className="dropdown-icon" />
                  </a>
                </Dropdown>
              </div>
              <div className="showing-result-content-col">
                <h6>Show </h6>
                <Dropdown overlay={PaginationMenu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={handlePaginationChange}
                  >
                    Pages <CaretDownOutlined className="dropdown-icon" />
                  </a>
                </Dropdown>
              </div>
              <div className="showing-result-content-col">
                <h6>Results</h6>
              </div>
            </div>
          </div>

          <div className="testimonial-array">
            {studentTestimonial?.map((data, i) => {
              return (
                <div className="testimonial-detail-page__detailContainer">
                  <div className="detailContainer__imagebox">
                    <img src={data?.image} />
                  </div>
                  <div className="detailContainer__info">
                    <div className="detailContainer__name">{data?.name}</div>
                    <div className="detailContainer__placebox">
                      <div className="detailContainer__place">
                        {data?.testimonial_type}
                      </div>
                      <div className="detailContainer__batch">
                        Batch: {data.year}
                      </div>
                    </div>
                    <div className="detailContainer__coursebox">
                      <div className="detailContainer__course">
                        {data?.course}
                      </div>
                      <div className="detailContainer__batch_part">
                        {data?.subject}
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
                          <ReactPlayer url={data?.video_url} />
                        </div>
                      </Fade>
                    </Modal>

                    <div className="introduction__watch__label">
                      <a href={data?.video_url} target="_blank">
                        Watch Video
                      </a>
                    </div>
                  </div>

                  <div className="detail_container_content_box">
                    <div className="detail_container_content-arrow">"</div>
                    <div className="detail_container_content">
                      {data?.description}
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
