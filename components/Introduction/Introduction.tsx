import React,{useState} from "react";
import { useRouter } from "next/router";
import { CallToAction } from "../Button/callToAction";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { auth } from "../../firebase";

import ReactPlayer from "react-player";

const Introduction = (props) => {
  const { title, imgSrc, videoUrl } = props;
  const router = useRouter();

  const [isOpenCounselling, setIsOpenCounselling] = useState(false);
  const openCounselling = () =>{
    if(auth.currentUser) {
      setIsOpenCounselling(true);
      router.push("/free-counseling")
    }else{
      router.push("/login");

    }
  }
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    <div className="introduction">
      <img src={imgSrc} alt="..." className="introduction__bannerimg" />
      <div className="introduction__inner section-wrapper">
        <div className="introduction__left">
          <div className="introduction__header">{`You just dream it`}</div>
          <div className="introduction__title">
            We help you achieve your big dream
          </div>
          <div className="introduction__desc">
            Kickstart your career by starting early. Admizz helps you join the
            right course at right university.
          </div>
          <div className="u-align-center">
            <CallToAction
              className="filled"
              onClick={() => 
                
                  openCounselling()
                }
            >
              Book counselling session
            </CallToAction>
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

          <div className="introduction__meta">
            <div className="introduction__meta__title">
              <span>Explore and find latest data on admizz</span>
            </div>
            <div className="u-align-center">
              <div className="introduction__meta__item">
                <div className="introduction__meta__item__icon">
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.2812 18.6875C23.4721 18.6875 24.4375 17.7221 24.4375 16.5312C24.4375 15.3404 23.4721 14.375 22.2812 14.375C21.0904 14.375 20.125 15.3404 20.125 16.5312C20.125 17.7221 21.0904 18.6875 22.2812 18.6875Z"
                      fill="#FFA200"
                    />
                    <path
                      d="M29.4688 24.4375C30.6596 24.4375 31.625 23.4721 31.625 22.2812C31.625 21.0904 30.6596 20.125 29.4688 20.125C28.2779 20.125 27.3125 21.0904 27.3125 22.2812C27.3125 23.4721 28.2779 24.4375 29.4688 24.4375Z"
                      fill="#FFA200"
                    />
                    <path
                      d="M23 24.4375C23.7939 24.4375 24.4375 23.7939 24.4375 23C24.4375 22.2061 23.7939 21.5625 23 21.5625C22.2061 21.5625 21.5625 22.2061 21.5625 23C21.5625 23.7939 22.2061 24.4375 23 24.4375Z"
                      fill="#FFA200"
                    />
                    <path
                      d="M23.7188 31.625C24.9096 31.625 25.875 30.6596 25.875 29.4688C25.875 28.2779 24.9096 27.3125 23.7188 27.3125C22.5279 27.3125 21.5625 28.2779 21.5625 29.4688C21.5625 30.6596 22.5279 31.625 23.7188 31.625Z"
                      fill="#FFA200"
                    />
                    <path
                      d="M16.5312 25.875C17.7221 25.875 18.6875 24.9096 18.6875 23.7188C18.6875 22.5279 17.7221 21.5625 16.5312 21.5625C15.3404 21.5625 14.375 22.5279 14.375 23.7188C14.375 24.9096 15.3404 25.875 16.5312 25.875Z"
                      fill="#FFA200"
                    />
                    <path
                      d="M40.25 18.6875V21.5625H37.3031C37.0198 18.7545 35.9119 16.0932 34.1191 13.9136L36.1847 11.8479L38.2174 13.8819L40.25 11.8493L34.1521 5.75L32.1195 7.78263L34.1521 9.81525L32.0864 11.8809C29.9069 10.0879 27.2455 8.98003 24.4375 8.69688V5.75H27.3125V2.875H18.6875V5.75H21.5625V8.69688C18.755 8.9803 16.0941 10.0882 13.915 11.8809L11.8464 9.81525L13.8791 7.78263L11.8479 5.75L5.75 11.8493L7.78263 13.8819L9.81525 11.8479L11.8809 13.915C10.0888 16.0944 8.98149 18.7552 8.69831 21.5625H5.75V18.6875H2.875V27.3125H5.75V24.4375H8.69688C8.98019 27.2455 10.0881 29.9068 11.8809 32.0864L9.81525 34.1521L7.78263 32.1181L5.75 34.1507L11.8479 40.25L13.8805 38.2174L11.8479 36.1847L13.9136 34.1191C16.0931 35.9121 18.7545 37.02 21.5625 37.3031V40.25H18.6875V43.125H27.3125V40.25H24.4375V37.3031C27.245 37.0197 29.9059 35.9118 32.085 34.1191L34.1521 36.1847L32.1195 38.2174L34.1521 40.25L40.25 34.1507L38.2174 32.1181L36.1847 34.1521L34.1191 32.0864C35.9114 29.9067 37.0188 27.2453 37.3017 24.4375H40.25V27.3125H43.125V18.6875H40.25ZM23 34.5C20.7255 34.5 18.5021 33.8255 16.6109 32.5619C14.7198 31.2983 13.2458 29.5022 12.3754 27.4009C11.505 25.2995 11.2772 22.9872 11.721 20.7565C12.1647 18.5257 13.26 16.4766 14.8683 14.8683C16.4766 13.26 18.5257 12.1647 20.7565 11.721C22.9872 11.2772 25.2995 11.505 27.4009 12.3754C29.5022 13.2458 31.2983 14.7198 32.5619 16.6109C33.8255 18.5021 34.5 20.7255 34.5 23C34.4962 26.0488 33.2834 28.9717 31.1275 31.1275C28.9717 33.2834 26.0488 34.4962 23 34.5Z"
                      fill="#FFA200"
                    />
                  </svg>
                </div>
                <div className="introduction__meta__item__title">
                  <a
                    href="https://covid19.who.int/"
                    target="_blank"
                  >
                    COVID-19 RESPONSE
                  </a>
                </div>
              </div>
              <div className="introduction__meta__item">
                <div className="introduction__meta__item__icon">
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 0L0 7.04L5.49346 8.71728L10.6154 10.2837V14.9741C10.3942 15.2416 10.2279 15.5021 10.097 15.7784C9.77854 16.4454 9.57862 17.1864 9.39816 18.0664C9.062 19.7384 8.88154 21.8962 8.86031 24.2616C8.30352 24.7496 7.85679 25.3492 7.54943 26.021C7.24207 26.6929 7.08105 27.4218 7.07692 28.16C7.07692 30.4075 8.67985 32.032 10.6773 32.787C11.4788 35.0838 12.8128 37.6059 14.7342 39.7443C16.836 42.0746 19.642 44 23 44C26.358 44 29.164 42.0746 31.2659 39.7443C33.1872 37.6059 34.5212 35.0838 35.3227 32.787C37.3202 32.0302 38.9231 30.4075 38.9231 28.16C38.92 27.4171 38.7589 26.6834 38.4503 26.0069C38.1417 25.3304 37.6926 24.7266 37.1326 24.2352C37.1132 21.8768 36.9327 19.7296 36.6018 18.0682C36.4214 17.1882 36.2215 16.4454 35.903 15.7784C35.7643 15.49 35.5902 15.2198 35.3846 14.9741V10.2854L46 7.04L23 0ZM23 3.68544L33.9745 7.04L23 10.3946L12.0255 7.04L23 3.68544ZM14.1538 11.3696L23 14.08L23.5255 13.9216L31.8462 11.3696V15.4546C31.8249 15.4827 31.8462 15.4898 31.763 15.5443C31.487 15.7784 30.9138 16.1146 30.1247 16.4314C28.543 17.0562 26.0908 17.6 23 17.6C19.9109 17.6 17.457 17.0562 15.8753 16.4314C15.0862 16.1146 14.513 15.7784 14.237 15.5443C14.1538 15.4898 14.1751 15.4827 14.1538 15.4563V11.3696ZM12.8552 18.8426C13.3665 19.1523 13.9185 19.441 14.5678 19.6944C16.6485 20.5216 19.504 21.1182 23 21.1182C26.4978 21.1182 29.3515 20.5198 31.4322 19.6944C32.0268 19.4605 32.5999 19.1755 33.1448 18.8426C33.4225 20.2664 33.6154 22.3414 33.6154 24.6382V26.1307L34.5 26.6464C35.0396 26.9491 35.3846 27.4912 35.3846 28.1582C35.3882 28.6007 35.221 29.0277 34.9175 29.3512C34.614 29.6747 34.1974 29.8701 33.7534 29.8971L32.5645 29.9939L32.2124 31.1291C31.625 33.0334 30.3122 35.5221 28.6191 37.3982C26.933 39.2762 24.9621 40.48 23 40.48C21.0362 40.48 19.067 39.2762 17.3809 37.4C15.6878 35.5238 14.375 33.0352 13.7876 31.1291L13.4338 29.9957L12.2466 29.8989C11.8026 29.8719 11.386 29.6765 11.0825 29.353C10.779 29.0295 10.6118 28.6025 10.6154 28.16C10.6154 27.5 10.9692 26.9562 11.5142 26.6464L12.42 26.1254L12.3846 24.64V24.6189C12.3846 22.3362 12.5792 20.2682 12.8552 18.8443V18.8426ZM9.15046 24.64H10.6225L9.13631 24.6752L9.15046 24.64ZM17.6923 26.4C16.7192 26.4 15.9231 27.192 15.9231 28.16C15.9231 29.128 16.7192 29.92 17.6923 29.92C18.6654 29.92 19.4615 29.128 19.4615 28.16C19.4615 27.192 18.6654 26.4 17.6923 26.4ZM28.3077 26.4C27.3346 26.4 26.5385 27.192 26.5385 28.16C26.5385 29.128 27.3346 29.92 28.3077 29.92C29.2808 29.92 30.0769 29.128 30.0769 28.16C30.0769 27.192 29.2808 26.4 28.3077 26.4Z"
                      fill="#FFA200"
                    />
                  </svg>
                </div>
                <div className="introduction__meta__item__title">
                  STORIES OF ADMIZZ
                </div>
              </div>
              <div className="introduction__meta__item">
                {/* <div className="introduction__meta__item__icon">
                  <svg
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.3344 2.66021C22.6894 2.45743 23.0911 2.35077 23.5 2.35077C23.9088 2.35077 24.3106 2.45743 24.6656 2.66021L28.7781 5.01021C29.0537 5.15916 29.2967 5.36172 29.4929 5.60597C29.6891 5.85023 29.8345 6.13124 29.9205 6.43249C30.0065 6.73374 30.0314 7.04915 29.9937 7.36016C29.956 7.67118 29.8566 7.97152 29.7011 8.24353C29.5457 8.51554 29.3374 8.75372 29.0886 8.94408C28.8398 9.13443 28.5554 9.27311 28.2522 9.35196C27.949 9.4308 27.6331 9.44823 27.3231 9.40321C27.013 9.35819 26.7151 9.25164 26.4469 9.08981L23.5 7.40721L20.5531 9.08981C20.2848 9.25164 19.9869 9.35819 19.6769 9.40321C19.3668 9.44823 19.0509 9.4308 18.7477 9.35196C18.4445 9.27311 18.1601 9.13443 17.9113 8.94408C17.6625 8.75372 17.4542 8.51554 17.2988 8.24353C17.1434 7.97152 17.0439 7.67118 17.0062 7.36016C16.9686 7.04915 16.9935 6.73374 17.0795 6.43249C17.1655 6.13124 17.3108 5.85023 17.507 5.60597C17.7032 5.36172 17.9463 5.15916 18.2219 5.01021L22.3344 2.66021ZM13.2023 10.5844C13.5112 11.1254 13.5927 11.767 13.4288 12.3681C13.2648 12.9692 12.8689 13.4806 12.3281 13.7898L11.7876 14.1L12.3281 14.4102C12.6037 14.5592 12.8467 14.7617 13.0429 15.006C13.2391 15.2502 13.3845 15.5312 13.4705 15.8325C13.5565 16.1337 13.5814 16.4492 13.5437 16.7602C13.506 17.0712 13.4066 17.3715 13.2511 17.6435C13.0957 17.9155 12.8874 18.1537 12.6386 18.3441C12.3898 18.5344 12.1054 18.6731 11.8022 18.752C11.499 18.8308 11.1831 18.8482 10.8731 18.8032C10.563 18.7582 10.2651 18.6516 9.99686 18.4898L9.39996 18.1491V18.8C9.39996 19.4233 9.15237 20.021 8.71166 20.4617C8.27095 20.9024 7.67322 21.15 7.04996 21.15C6.4267 21.15 5.82897 20.9024 5.38826 20.4617C4.94755 20.021 4.69996 19.4233 4.69996 18.8V14.1C4.69865 13.6779 4.81153 13.2632 5.02665 12.9C5.24178 12.5367 5.55114 12.2385 5.92196 12.0367L9.99686 9.71021C10.5379 9.40125 11.1795 9.31978 11.7805 9.48372C12.3816 9.64764 12.893 10.0436 13.2023 10.5844ZM33.7977 10.5844C34.1069 10.0436 34.6183 9.64764 35.2194 9.48372C35.8205 9.31978 36.462 9.40125 37.0031 9.71021L41.0756 12.0367C41.4459 12.2393 41.7549 12.5377 41.9703 12.9007C42.1857 13.2637 42.2995 13.6779 42.3 14.1V18.8C42.3 19.4233 42.0524 20.021 41.6117 20.4617C41.171 20.9024 40.5732 21.15 39.95 21.15C39.3267 21.15 38.729 20.9024 38.2883 20.4617C37.8475 20.021 37.6 19.4233 37.6 18.8V18.1491L37.0031 18.4898C36.7348 18.6516 36.4369 18.7582 36.1269 18.8032C35.8168 18.8482 35.5009 18.8308 35.1977 18.752C34.8945 18.6731 34.6101 18.5344 34.3613 18.3441C34.1125 18.1537 33.9042 17.9155 33.7488 17.6435C33.5934 17.3715 33.4939 17.0712 33.4562 16.7602C33.4186 16.4492 33.4435 16.1337 33.5295 15.8325C33.6155 15.5312 33.7608 15.2502 33.957 15.006C34.1532 14.7617 34.3962 14.5592 34.6719 14.4102L35.2124 14.1L34.6719 13.7898C34.131 13.4806 33.7351 12.9692 33.5712 12.3681C33.4072 11.767 33.4887 11.1254 33.7977 10.5844ZM17.3477 19.9844C17.6569 19.4436 18.1683 19.0476 18.7694 18.8837C19.3705 18.7198 20.012 18.8013 20.5531 19.1102L23.5 20.7928L26.4469 19.1102C26.7151 18.9484 27.013 18.8418 27.3231 18.7968C27.6331 18.7518 27.949 18.7692 28.2522 18.8481C28.5554 18.9269 28.8398 19.0656 29.0886 19.2559C29.3374 19.4463 29.5457 19.6845 29.7011 19.9565C29.8566 20.2285 29.956 20.5288 29.9937 20.8399C30.0314 21.1509 30.0065 21.4663 29.9205 21.7675C29.8345 22.0688 29.6891 22.3498 29.4929 22.594C29.2967 22.8383 29.0537 23.0409 28.7781 23.1898L25.85 24.863V28.2C25.85 28.8233 25.6024 29.421 25.1617 29.8617C24.721 30.3024 24.1232 30.55 23.5 30.55C22.8767 30.55 22.279 30.3024 21.8383 29.8617C21.3976 29.421 21.15 28.8233 21.15 28.2V24.863L18.2219 23.1898C17.681 22.8806 17.2851 22.3692 17.1212 21.7681C16.9572 21.167 17.0387 20.5254 17.3477 19.9844ZM7.04996 25.85C7.67322 25.85 8.27095 26.0976 8.71166 26.5383C9.15237 26.979 9.39996 27.5768 9.39996 28.2V31.537L12.3281 33.2102C12.6037 33.3592 12.8467 33.5617 13.0429 33.806C13.2391 34.0502 13.3845 34.3312 13.4705 34.6325C13.5565 34.9337 13.5814 35.2492 13.5437 35.5602C13.506 35.8712 13.4066 36.1715 13.2511 36.4435C13.0957 36.7155 12.8874 36.9537 12.6386 37.1441C12.3898 37.3344 12.1054 37.4731 11.8022 37.552C11.499 37.6308 11.1831 37.6482 10.8731 37.6032C10.563 37.5582 10.2651 37.4516 9.99686 37.2898L5.88436 34.9398C5.52469 34.7344 5.2257 34.4375 5.01771 34.0793C4.80971 33.7211 4.7001 33.3142 4.69996 32.9V28.2C4.69996 27.5768 4.94755 26.979 5.38826 26.5383C5.82897 26.0976 6.4267 25.85 7.04996 25.85ZM39.95 25.85C40.5732 25.85 41.171 26.0976 41.6117 26.5383C42.0524 26.979 42.3 27.5768 42.3 28.2V32.9C42.2998 33.3142 42.1902 33.7211 41.9822 34.0793C41.7742 34.4375 41.4752 34.7344 41.1156 34.9398L37.0031 37.2898C36.7348 37.4516 36.4369 37.5582 36.1269 37.6032C35.8168 37.6482 35.5009 37.6308 35.1977 37.552C34.8945 37.4731 34.6101 37.3344 34.3613 37.1441C34.1125 36.9537 33.9042 36.7155 33.7488 36.4435C33.5934 36.1715 33.4939 35.8712 33.4562 35.5602C33.4186 35.2492 33.4435 34.9337 33.5295 34.6325C33.6155 34.3312 33.7608 34.0502 33.957 33.806C34.1532 33.5617 34.3962 33.3592 34.6719 33.2102L37.6 31.537V28.2C37.6 27.5768 37.8475 26.979 38.2883 26.5383C38.729 26.0976 39.3267 25.85 39.95 25.85ZM17.3477 38.7844C17.6569 38.2436 18.1683 37.8476 18.7694 37.6837C19.3705 37.5198 20.012 37.6013 20.5531 37.9102L21.15 38.251V37.6C21.15 36.9768 21.3976 36.379 21.8383 35.9383C22.279 35.4976 22.8767 35.25 23.5 35.25C24.1232 35.25 24.721 35.4976 25.1617 35.9383C25.6024 36.379 25.85 36.9768 25.85 37.6V38.251L26.4469 37.9102C26.7151 37.7484 27.013 37.6418 27.3231 37.5968C27.6331 37.5518 27.949 37.5692 28.2522 37.6481C28.5554 37.7269 28.8398 37.8656 29.0886 38.056C29.3374 38.2463 29.5457 38.4845 29.7011 38.7565C29.8566 39.0285 29.956 39.3288 29.9937 39.6399C30.0314 39.9509 30.0065 40.2663 29.9205 40.5675C29.8345 40.8688 29.6891 41.1498 29.4929 41.394C29.2967 41.6383 29.0537 41.8409 28.7781 41.9898L24.7008 44.321C24.3379 44.5382 23.9229 44.6529 23.5 44.6529C23.077 44.6529 22.662 44.5382 22.2991 44.321L18.2219 41.9898C17.681 41.6806 17.2851 41.1692 17.1212 40.5681C16.9572 39.967 17.0387 39.3254 17.3477 38.7844Z"
                      fill="#FFA200"
                    />
                  </svg>
                </div> */}
                {/* <div className="introduction__meta__item__title">
                  VIRTUAL TOUR
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="introduction__right"> */}
          {/* <div className="introduction__right__background"></div> */}
          {/* <div className="introduction__right__thumbnail"></div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export { Introduction };
