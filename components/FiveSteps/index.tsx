import React from "react";
import { CallToAction } from "../Button/callToAction";
import Link from "next/link";

const FiveSteps = (props: any) => {
  return (
    <div className="five-steps">
      <div className="five-steps__inner">
        <div className="five-steps__circle-wrap">
          <div className="five-steps__outer-circle">
            <div className="five-steps__circle">
              <div className="five-steps__circle__inner">
                <div className="five-steps__circle__heading">
                  5 STEP PROCESS
                </div>
                <div className="five-steps__circle__title">
                  Your 5 Step to Success With Us
                </div>
                <div className="five-steps__circle__cta">
                  <Link href="/colleges">
                    <CallToAction className="filled">
                      Find Universities
                    </CallToAction>
                  </Link>
                </div>
              </div>
            </div>
            <div className="five-steps__list">
              <div className="five-steps__list__inner">
                <div className="five-steps__item">
                  <div className="five-steps__item__text">
                    <div className="five-steps__item__title">
                      Research Your Options
                    </div>
                    <div className="five-steps__item__desc">
                      Get the right career advice for you and earn your best
                      career certificates.
                    </div>
                  </div>
                  <div className="five-steps__item__icon active">
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.125 6.3125V5.1875C13.125 5.08437 13.0406 5 12.9375 5H3.9375C3.83437 5 3.75 5.08437 3.75 5.1875V6.3125C3.75 6.41563 3.83437 6.5 3.9375 6.5H12.9375C13.0406 6.5 13.125 6.41563 13.125 6.3125ZM3.9375 8.375C3.83437 8.375 3.75 8.45937 3.75 8.5625V9.6875C3.75 9.79062 3.83437 9.875 3.9375 9.875H8.25C8.35312 9.875 8.4375 9.79062 8.4375 9.6875V8.5625C8.4375 8.45937 8.35312 8.375 8.25 8.375H3.9375ZM7.3125 18.9688H1.875V2.46875H15V10.5312C15 10.6344 15.0844 10.7188 15.1875 10.7188H16.5C16.6031 10.7188 16.6875 10.6344 16.6875 10.5312V1.53125C16.6875 1.11641 16.3523 0.78125 15.9375 0.78125H0.9375C0.522656 0.78125 0.1875 1.11641 0.1875 1.53125V19.9062C0.1875 20.3211 0.522656 20.6562 0.9375 20.6562H7.3125C7.41563 20.6562 7.5 20.5719 7.5 20.4688V19.1562C7.5 19.0531 7.41563 18.9688 7.3125 18.9688ZM17.7586 20.1758L15.5719 17.9891C16.0945 17.2977 16.4062 16.4352 16.4062 15.5C16.4062 13.2219 14.5594 11.375 12.2812 11.375C10.0031 11.375 8.15625 13.2219 8.15625 15.5C8.15625 17.7781 10.0031 19.625 12.2812 19.625C13.1203 19.625 13.8984 19.3742 14.55 18.9453L16.7695 21.1648C16.807 21.2023 16.8539 21.2188 16.9008 21.2188C16.9477 21.2188 16.9969 21.2 17.032 21.1648L17.7586 20.4383C17.7759 20.4211 17.7896 20.4006 17.799 20.3781C17.8083 20.3556 17.8132 20.3314 17.8132 20.307C17.8132 20.2826 17.8083 20.2585 17.799 20.236C17.7896 20.2134 17.7759 20.193 17.7586 20.1758ZM12.2812 18.125C10.8305 18.125 9.65625 16.9508 9.65625 15.5C9.65625 14.0492 10.8305 12.875 12.2812 12.875C13.732 12.875 14.9062 14.0492 14.9062 15.5C14.9062 16.9508 13.732 18.125 12.2812 18.125Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>

                <div className="five-steps__item">
                  <div className="five-steps__item__text">
                    <div className="five-steps__item__title">
                      Register Yourself - Online/Offline
                    </div>
                    <div className="five-steps__item__desc">
                      Get the right career advice for you and earn your best
                      career certificates.
                    </div>
                  </div>
                  <div className="five-steps__item__icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 8H4.66667C4.48986 8 4.32029 7.92976 4.19526 7.80474C4.07024 7.67971 4 7.51014 4 7.33333V4.66667C4 4.48986 4.07024 4.32029 4.19526 4.19526C4.32029 4.07024 4.48986 4 4.66667 4H14C14.1768 4 14.3464 4.07024 14.4714 4.19526C14.5964 4.32029 14.6667 4.48986 14.6667 4.66667V7.33333C14.6667 7.51014 14.5964 7.67971 14.4714 7.80474C14.3464 7.92976 14.1768 8 14 8ZM5.33333 6.66667H13.3333V5.29333H5.33333V6.66667Z"
                        fill="#FFA200"
                      />
                      <path
                        d="M14 9.38672H4.66667C4.48986 9.38672 4.32029 9.45696 4.19526 9.58198C4.07024 9.70701 4 9.87657 4 10.0534V12.6667C4 12.8435 4.07024 13.0131 4.19526 13.1381C4.32029 13.2631 4.48986 13.3334 4.66667 13.3334H12.24L14.6667 10.8667V10.0534C14.6667 9.87657 14.5964 9.70701 14.4714 9.58198C14.3464 9.45696 14.1768 9.38672 14 9.38672ZM13.3333 12.0001H5.33333V10.6667H13.3333V12.0001Z"
                        fill="#FFA200"
                      />
                      <path
                        d="M7.37337 21.0066V20.9666L7.58671 20.0399H2.66671V2.66659H16V9.49992L17.3334 8.23992V1.99992C17.3334 1.82311 17.2631 1.65354 17.1381 1.52851C17.0131 1.40349 16.8435 1.33325 16.6667 1.33325H2.00004C1.82323 1.33325 1.65366 1.40349 1.52864 1.52851C1.40361 1.65354 1.33337 1.82311 1.33337 1.99992V20.6666C1.33337 20.8434 1.40361 21.013 1.52864 21.138C1.65366 21.263 1.82323 21.3333 2.00004 21.3333H7.33337C7.33887 21.2235 7.35223 21.1144 7.37337 21.0066Z"
                        fill="#FFA200"
                      />
                      <path
                        d="M14.6666 12.78L14.1466 13.3067C14.2756 13.2801 14.3939 13.2159 14.4864 13.1222C14.579 13.0284 14.6417 12.9094 14.6666 12.78Z"
                        fill="#FFA200"
                      />
                      <path
                        d="M4 17.9601C4 18.1369 4.07024 18.3065 4.19526 18.4315C4.32029 18.5565 4.48986 18.6267 4.66667 18.6267H7.89333L8.09333 17.7601L8.18 17.3934V17.3601H5.33333V16.0001H9.56L10.8933 14.6667H4.66667C4.48986 14.6667 4.32029 14.737 4.19526 14.862C4.07024 14.987 4 15.1566 4 15.3334V17.9601Z"
                        fill="#FFA200"
                      />
                      <path
                        d="M22.3267 11.1133L20.08 8.86668C19.9803 8.7667 19.8618 8.68738 19.7314 8.63325C19.601 8.57913 19.4612 8.55127 19.32 8.55127C19.1788 8.55127 19.039 8.57913 18.9086 8.63325C18.7781 8.68738 18.6597 8.7667 18.56 8.86668L9.41999 18.06L8.66665 21.2667C8.63845 21.405 8.63782 21.5476 8.66479 21.6862C8.69176 21.8247 8.74581 21.9566 8.82384 22.0743C8.90187 22.192 9.00235 22.2931 9.11952 22.3719C9.23668 22.4506 9.36824 22.5055 9.50665 22.5333C9.57537 22.5403 9.64461 22.5403 9.71332 22.5333C9.795 22.5467 9.8783 22.5467 9.95999 22.5333L13.1933 21.82L22.3267 12.6667C22.4264 12.5675 22.5056 12.4497 22.5596 12.3198C22.6137 12.1899 22.6415 12.0507 22.6415 11.91C22.6415 11.7694 22.6137 11.6301 22.5596 11.5002C22.5056 11.3704 22.4264 11.2525 22.3267 11.1533V11.1133ZM12.5133 20.6067L10.0733 21.1467L10.6667 18.7267L17.52 11.8L19.4 13.68L12.5133 20.6067ZM20.1533 12.9267L18.2733 11.0467L19.3333 10L21.2267 11.8933L20.1533 12.9267Z"
                        fill="#FFA200"
                      />
                    </svg>
                  </div>
                </div>
                <div className="five-steps__item">
                  <div className="five-steps__item__text">
                    <div className="five-steps__item__title">
                      Submit Your Application
                    </div>
                    <div className="five-steps__item__desc">
                      Get the right career advice for you and earn your best
                      career certificates.
                    </div>
                  </div>
                  <div className="five-steps__item__icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M8.13513 4.35397e-05C7.92128 0.0407166 7.72869 0.155658 7.59137 0.324563C7.45405 0.493469 7.38084 0.705471 7.38467 0.92312V1.8462H4.06713C3.32867 1.8462 2.76929 2.40558 2.76929 3.14404V22.6154C2.76929 23.4462 3.32867 24 4.06713 24H19.8462C20.5847 24 21.1441 23.4407 21.1441 22.7022V3.14404C21.2364 2.40558 20.6714 1.8462 19.933 1.8462H16.6154V0.92312C16.6154 0.678305 16.5182 0.443517 16.3451 0.270407C16.172 0.097296 15.9372 4.35397e-05 15.6924 4.35397e-05H8.30775C8.27884 -0.0013166 8.24989 -0.0013166 8.22098 4.35397e-05C8.19207 -0.0013166 8.16312 -0.0013166 8.13421 4.35397e-05H8.13513ZM9.23083 1.8462H14.7693V3.69235H9.23083V1.8462ZM4.61544 3.69235H7.38467V4.61543C7.38467 4.86024 7.48192 5.09503 7.65503 5.26814C7.82815 5.44125 8.06293 5.53851 8.30775 5.53851H15.6924C15.9372 5.53851 16.172 5.44125 16.3451 5.26814C16.5182 5.09503 16.6154 4.86024 16.6154 4.61543V3.69235H19.3847V22.1539H4.61544V3.69235ZM6.46159 8.30774V12H10.1539V8.30774H6.46159ZM7.38467 9.23081H9.23083V11.077H7.38467V9.23081ZM12.0001 9.23081V11.077H17.5385V9.23081H12.0001ZM6.46159 13.8462V17.5385H10.1539V13.8462H6.46159ZM12.0001 14.7693V16.6154H17.5385V14.7693H12.0001Z"
                          fill="#FFA200"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="five-steps__item">
                  <div className="five-steps__item__text">
                    <div className="five-steps__item__title">
                      Download The Offer Letter
                    </div>
                    <div className="five-steps__item__desc">
                      Get the right career advice for you and earn your best
                      career certificates.
                    </div>
                  </div>
                  <div className="five-steps__item__icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 22.5V21C9 21 9 20.1 9 19.5H2.25L1.5 18.75V3.75L2.25 3H21.75L22.5 3.75V17.61L21 16.11V4.5H3V18H11.595L10.845 18.75L14.595 22.5H6ZM17.79 22.5L21.54 18.75L20.475 17.7L18 20.175V10.5H16.5V20.16L14.04 17.685L12.975 18.75L16.725 22.5H17.79Z"
                        fill="#FFA200"
                      />
                    </svg>
                  </div>
                </div>
                <div className="five-steps__item">
                  <div className="five-steps__item__text">
                    <div className="five-steps__item__title">
                      Prepare For Departure
                    </div>
                    <div className="five-steps__item__desc">
                      Get the right career advice for you and earn your best
                      career certificates.
                    </div>
                  </div>
                  <div className="five-steps__item__icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.8467 5.43997C23.7956 5.11552 23.6471 4.81426 23.4209 4.57614C23.1947 4.33801 22.9014 4.17427 22.58 4.10663L18.6667 3.24663C18.247 3.15511 17.8126 3.15477 17.3928 3.24563C16.973 3.33649 16.5776 3.51644 16.2334 3.7733L4.66669 12.2L1.42669 12.0666C1.16624 12.0573 0.909463 12.1303 0.692844 12.2752C0.476225 12.4201 0.310775 12.6296 0.219992 12.8739C0.12921 13.1182 0.117711 13.3849 0.187128 13.6361C0.256546 13.8873 0.403351 14.1103 0.606692 14.2733L3.94003 16.8933C4.34002 17.38 4.60669 17.2866 11.2267 13.68L11.8467 19.96C11.857 20.1313 11.9157 20.2961 12.016 20.4354C12.1164 20.5747 12.2541 20.6826 12.4134 20.7466C12.5279 20.7919 12.6502 20.8145 12.7734 20.8133C13.0213 20.8057 13.2581 20.7086 13.44 20.54L15.0334 19.0866C15.192 18.9396 15.2995 18.7457 15.34 18.5333L16.8 10.6C19.18 9.26663 21.4334 8.0133 23.04 7.09997C23.3275 6.93828 23.5587 6.69271 23.7029 6.39607C23.847 6.09944 23.8972 5.76588 23.8467 5.43997ZM22.38 5.93997C20.7134 6.88663 18.38 8.2133 15.8734 9.58663L15.6 9.73997L14.0467 18.1866L13.0667 19.08L12.3334 11.5466L11.4467 12C6.66669 14.6666 5.07336 15.44 4.52669 15.68L1.66003 13.4066L5.04669 13.5533L17.0467 4.84663C17.2353 4.70562 17.4516 4.606 17.6813 4.55431C17.9111 4.50261 18.1492 4.5 18.38 4.54663L22.28 5.38663C22.3401 5.39753 22.3952 5.42734 22.4371 5.47171C22.4791 5.51608 22.5058 5.57269 22.5134 5.6333C22.5271 5.69196 22.5215 5.75348 22.4975 5.80872C22.4735 5.86397 22.4323 5.91 22.38 5.93997Z"
                        fill="#FFA200"
                      />
                      <path
                        d="M4.66673 8.35993L7.04006 9.02659L8.13339 8.23326L5.46673 7.45992L6.66673 6.72659L10.3134 6.61993L11.8467 5.50659L6.66673 5.66659C6.50342 5.65776 6.34112 5.69717 6.20006 5.77993L4.44673 6.79992C4.30177 6.8858 4.18548 7.01266 4.11251 7.16451C4.03954 7.31637 4.01315 7.48643 4.03668 7.65326C4.06021 7.82009 4.1326 7.97623 4.24472 8.10198C4.35684 8.22774 4.50368 8.31749 4.66673 8.35993Z"
                        fill="#FFA200"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FiveSteps };
