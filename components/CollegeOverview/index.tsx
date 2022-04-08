import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import moment from "moment";
import ReactPlayer from "react-player";
import renderHTML from "react-render-html";

const CollegeOverview = () => {
  const [open, setOpen] = useState(false);

  const college = useSelector((state: any) => state.college.college);

  return (
    <div id="overview" className="overview">
      <div className="overview__title-wrap">
        <div className="overview__title"> HIGHLIGHTS</div>
        <time className="overview__date">
          Update On: {moment(college?.updateAt).format("YYYY MMM DD")}
        </time>
      </div>
      {college.overview && (
        <div className="overview__desc">{renderHTML(college?.overview)}</div>
      )}
      {college?.college_profile && (
        <>
          <div className="overview__collegesubtitle">Profile</div>
          <div className="overview__desc">
            {renderHTML(college?.college_profile)}
          </div>
        </>
      )}

      {college?.description && (
        <>
          <div className="overview__collegesubtitle">Description</div>

          <div className="overview__desc">
            {renderHTML(college?.description)}
          </div>
        </>
      )}

      <div className="overview__block-wrap">
        {college?.QS_ranking && (
          <div className="overview__block">
            <div className="overview__block__icon">
              <img src="/college-overview.png" alt="" />
            </div>
            <div className="overview__block__title">{college.QS_ranking}</div>
            <div className="overview__block__subheading">QS Ranking</div>
          </div>
        )}
        {college?.nirf && (
          <div className="overview__block">
            <div className="overview__block__icon">
              <img src="/college-overview.png" alt="" />
            </div>
            <div className="overview__block__title">{college.nirf}</div>
            <div className="overview__block__subheading">NIRF Ranking</div>
          </div>
        )}
        {college?.university_ranking && (
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
        {college?.highest_package && (
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
        {college?.mim_cost_living && (
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
        {college?.rankings?.map((item: any) => {
          {
          }

          return (
            <div className="overview__block">
              <div className="overview__block__icon">
                <div className="college_content">
                  <div className="college-img">
                    <img src={item.rank?.logo} alt="" />
                  </div>
                </div>
              </div>
              <div className="overview__block__title">{item.rank?.values}</div>
              <div className="overview__block__subheading">
                {item.rank?.title}
              </div>
            </div>
          );
        })}
      </div>
      {college?.video_360 && (
        <div className="overview__thumbnail">
          <ReactPlayer
            url={college?.video_360}
            width="100%"
            height="100%"
            light={true}
            controls
            playing
            playIcon={
              <div className="overview__thumbnail__container">
                <div className="overview__thumbnail__text">
                  <div className="overview__thumbnail__icon">
                    <svg
                      width="54"
                      height="54"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76515 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76515 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76515 3.51472 3.51472C5.76515 1.26428 8.8174 0 12 0ZM12 22.2857C14.7279 22.2857 17.3442 21.202 19.2731 19.2731C21.202 17.3442 22.2857 14.7279 22.2857 12C22.2857 9.27206 21.202 6.65585 19.2731 4.7269C17.3442 2.79796 14.7279 1.71429 12 1.71429C9.27206 1.71429 6.65585 2.79796 4.7269 4.7269C2.79796 6.65585 1.71429 9.27206 1.71429 12C1.71429 14.7279 2.79796 17.3442 4.7269 19.2731C6.65585 21.202 9.27206 22.2857 12 22.2857ZM10.7143 15.6531L16.1949 12L10.7143 8.34686V15.6531ZM10.9989 6.47486L17.6811 10.9303C17.8572 11.0477 18.0016 11.2068 18.1015 11.3934C18.2013 11.58 18.2536 11.7884 18.2536 12C18.2536 12.2116 18.2013 12.42 18.1015 12.6066C18.0016 12.7932 17.8572 12.9523 17.6811 13.0697L10.9989 17.5251C10.8052 17.6542 10.5802 17.7283 10.3478 17.7396C10.1153 17.7508 9.88423 17.6987 9.67906 17.5889C9.47389 17.4791 9.30237 17.3157 9.18278 17.1161C9.06319 16.9165 9.00002 16.6881 9 16.4554V7.54286C9.00002 7.31016 9.06319 7.08182 9.18278 6.8822C9.30237 6.68258 9.47389 6.51916 9.67906 6.40936C9.88423 6.29956 10.1153 6.2475 10.3478 6.25874C10.5802 6.26997 10.8052 6.34407 10.9989 6.47314V6.47486Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  {/* <div className="overview__thumbnail__title">
                    TAKE A 360 DEGREE VIRTUAL TOUR
                  </div> */}
                </div>
              </div>
            }
          />
        </div>
      )}
    </div>
  );
};

export { CollegeOverview };
