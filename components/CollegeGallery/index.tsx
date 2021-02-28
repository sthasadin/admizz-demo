import React from "react";
import gallery from "../../public/gallery.png";
import gallery1 from "../../public/gallery1.png";
import gallery2 from "../../public/gallery2.png";
import gallery3 from "../../public/gallery3.png";
import gallery4 from "../../public/gallery4.png";
import gallery5 from "../../public/gallery5.png";
import gallery6 from "../../public/gallery6.png";
import gallery7 from "../../public/gallery7.png";
import gallery8 from "../../public/gallery8.png";
import video from "../../public/video.png";
import video1 from "../../public/video1.png";
import { useDispatch, useSelector } from 'react-redux';

const CollegeGallery = (props) => {
   const dispatch = useDispatch()
  const photos = useSelector(state => state.college.college.college?.college_photos)
  console.log(photos)
  const videos = useSelector(state => state.college.college.college?.college_videos)
  return (
    <div id="gallery" className="college-gallery">
      <div className="college-gallery__inner">
        <div className="college-gallery__title-wrap">
          <div className="college-gallery__title">PHOTOS & VIDEOS</div>
          <div className="college-gallery__title__cta">Explore Gallery</div>
        </div>
        <div className="college-gallery__heading">
          Photos <span>({photos && photos.length})</span>
        </div>
        <div className="college-gallery__list">
          <div className="college-gallery__left">
            <div className="college-gallery__left__t">
              <div className="college-gallery__left__t__l">
                <div className="college-gallery__item">
                  <img src={gallery} alt="" />
                </div>
                <div className="college-gallery__item">
                  <img src={gallery1} alt="" />
                </div>
              </div>
              <div className="college-gallery__left__t__r">
                <div className="college-gallery__item">
                  <img src={gallery2} alt="" />
                </div>
              </div>
            </div>
            <div className="college-gallery__left__b">
              <div className="college-gallery__item">
                <img src={gallery3} alt="" />
              </div>
              <div className="college-gallery__item">
                <img src={gallery4} alt="" />
              </div>
            </div>
          </div>
          <div className="college-gallery__right">
            <div className="college-gallery__right__t">
              <div className="college-gallery__item left">
                <img src={gallery5} alt="" />
              </div>
              <div className="college-gallery__item right">
                <img src={gallery6} alt="" />
              </div>
            </div>
            <div className="college-gallery__right__b">
              <div className="college-gallery__item">
                <img src={gallery7} alt="" />
              </div>
              <div className="college-gallery__item">
                <img src={gallery8} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="college-gallery__heading">
          Videos <span>(5)</span>
        </div>
        <div className="college-gallery__video">
          <div className="college-gallery__video__left">
            <div className="college-gallery__video__thumbnail">
              <img src={video} alt="" />
            </div>
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
          </div>
          <div className="college-gallery__video__right">
            <div className="college-gallery__video__thumbnail">
              <img src={video1} alt="" />
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export { CollegeGallery };
