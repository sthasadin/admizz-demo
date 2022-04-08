import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGallery } from "@/store/Action/gallery.action";
import ReactPlayer from "react-player";

const CollegeGallery = (props) => {
  const college = useSelector((state: any) => state.college.college);
  const videos = useSelector((state: any) => state.college.videos);

  const gallery = useSelector((state: any) => state.gallery.gallery);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getGallery(college._id));
  }, [college]);

  const { images } = gallery;
  return images?.length || videos?.length ? (
    <div id="gallery" className="college-gallery">
      <div className="college-gallery__inner">
        <div className="college-gallery__title-wrap">
          <div className="college-gallery__title">PHOTOS & VIDEOS</div>
        </div>
        <div className="college-gallery__heading">
          Photos <span>{images?.length}</span>
        </div>
      
        <div className="college-gallery__list">
          {images?.map((image: any) => {
            return (
              <div className="college-gallery__left">
                <div className="college-gallery__left__t">
                  <div className="college-gallery__left__t__l">
                    <div className="college-gallery__item">
                      <img src={image} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {videos && videos.length > 0 && (
          <div className="college-gallery__heading">
            Videos <span>({videos?.length})</span>
          </div>
        )}
        {videos && videos.length > 0 && (
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
        )}
      </div>
    </div>
  ) : null;
};

export { CollegeGallery };
