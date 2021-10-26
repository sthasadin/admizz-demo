import React from "react";
import { useSelector } from "react-redux";

import ReactPlayer from "react-player";

import gallery from "../../public/gallery.png";
import gallery1 from "../../public/gallery1.png";
import gallery2 from "../../public/gallery2.png";
import gallery3 from "../../public/gallery3.png";
import gallery4 from "../../public/gallery4.png";
import gallery5 from "../../public/gallery5.png";
import gallery6 from "../../public/gallery6.png";
import gallery7 from "../../public/gallery7.png";
import gallery8 from "../../public/gallery8.png";

const CollegeGallery = (props) => {
  const photos = useSelector((state) => state.college.college?.college_photos);
  const videos = useSelector((state) => state.college.college?.college_videos);

  return photos?.length || videos?.length ? (
    <div id="gallery" className="college-gallery">
      <div className="college-gallery__inner">
        <div className="college-gallery__title-wrap">
          <div className="college-gallery__title">PHOTOS & VIDEOS</div>
          {/* <div className="college-gallery__title__cta">Explore Gallery</div> */}
        </div>
        <div className="college-gallery__heading">
          Photos <span>{photos?.length}</span>
        </div>
        <div className="college-gallery__list">
          <div className="college-gallery__left">
            <div className="college-gallery__left__t">
              <div className="college-gallery__left__t__l">
                <div className="college-gallery__item">
                  <img src={photos?.[0] || gallery} alt="" />
                </div>
                <div className="college-gallery__item">
                  <img src={photos?.[1] || gallery1} alt="" />
                </div>
              </div>
              <div className="college-gallery__left__t__r">
                <div className="college-gallery__item">
                  <img src={photos?.[2] || gallery2} alt="" />
                </div>
              </div>
            </div>
            <div className="college-gallery__left__b">
              <div className="college-gallery__item">
                <img src={photos?.[3] || gallery3} alt="" />
              </div>
              <div className="college-gallery__item">
                <img src={photos?.[4] || gallery4} alt="" />
              </div>
            </div>
          </div>
          <div className="college-gallery__right">
            <div className="college-gallery__right__t">
              <div className="college-gallery__item left">
                <img src={photos?.[5] || gallery5} alt="" />
              </div>
              <div className="college-gallery__item right">
                <img src={photos?.[6] || gallery6} alt="" />
              </div>
            </div>
            <div className="college-gallery__right__b">
              <div className="college-gallery__item">
                <img src={photos?.[7] || gallery7} alt="" />
              </div>
              <div className="college-gallery__item">
                <img src={photos?.[8] || gallery8} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="college-gallery__heading">
          Videos <span>({videos?.length})</span>
        </div>
        <div className="college-gallery__video">
          <div className="college-gallery__video__left">
            <div className="college-gallery__video__thumbnail">
              {videos?.length && (
                <ReactPlayer
                  url={videos[0]}
                  light={true}
                  width="100%"
                  height="100%"
                  controls
                  playing
                  playIcon={
                    <div className="college-gallery__video__icon">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M47 24C47 36.718 36.8608 47 24.3876 47C11.9144 47 1.77515 36.718 1.77515 24C1.77515 11.282 11.9144 1 24.3876 1C36.8608 1 47 11.282 47 24Z"
                          stroke="#FFA200"
                          stroke-width="2"
                        />
                        <path
                          d="M16.9447 10.9406L39.0966 23.94L16.9447 36.9393L16.9447 10.9406Z"
                          fill="#FFA200"
                        />
                      </svg>
                    </div>
                  }
                />
              )}
            </div>
          </div>
          <div className="college-gallery__video__right">
            <div className="college-gallery__video__thumbnail">
              {videos?.length && (
                <ReactPlayer
                  url={videos[1]}
                  light={true}
                  width="100%"
                  height="100%"
                  controls
                  playing
                  playIcon={
                    <div className="college-gallery__video__icon">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M47 24C47 36.718 36.8608 47 24.3876 47C11.9144 47 1.77515 36.718 1.77515 24C1.77515 11.282 11.9144 1 24.3876 1C36.8608 1 47 11.282 47 24Z"
                          stroke="#FFA200"
                          stroke-width="2"
                        />
                        <path
                          d="M16.9447 10.9406L39.0966 23.94L16.9447 36.9393L16.9447 10.9406Z"
                          fill="#FFA200"
                        />
                      </svg>
                    </div>
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export { CollegeGallery };
