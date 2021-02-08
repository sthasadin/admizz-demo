import React from "react";

const CollegeHeader = ({ collageLogo, name, address, estblished }) => {
  return (
    <div className="college-header">
      <div className="college-header__inner">
        <div className="college-header__rating-wrap">
          <div className="rating-block">
            <div className="rating-block__title">REVIEWS RATING</div>
            <div className="rating-block__rating-wrap">
              <div className="rating-block__rating">8.5</div>
              <div className="rating-block__total">/10</div>
            </div>
          </div>
        </div>
        <div className="college-header__college">
          <div className="college-header__left">
            <div className="college-header__logo">
              <img src={collageLogo} alt="college" />
            </div>
            <div className="college-header__info">
              <div className="college-header__estd">ESTD: {estblished}</div>
              <div className="college-header__name">
                {name}
              </div>
              <div className="college-header__meta">
                <div className="college-header__meta__item">
                  <div className="college-header__meta__logo"></div>
                  <div className="college-header__meta__title">
                    {address}
                  </div>
                </div>
                <div className="college-header__meta__item">
                  <div className="college-header__meta__logo"></div>
                  <div className="college-header__meta__title">
                    Central University
                  </div>
                </div>
                <div className="college-header__meta__item">
                  <div className="college-header__meta__logo"></div>
                  <div className="college-header__meta__title">
                    AICTE | UGC | NBA | NAAA-A
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="college-header__right">
            <div className="college-header__task">
              <div className="task__logo">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0669 3.52C16.6388 3.51953 17.2051 3.62954 17.7326 3.84357C18.26 4.05759 18.738 4.37134 19.1384 4.7664C19.9636 5.57685 20.4261 6.6688 20.4261 7.8064C20.4261 8.944 19.9636 10.036 19.1384 10.8464L11 18.8188L2.86157 10.8464C2.0364 10.036 1.57387 8.944 1.57387 7.8064C1.57387 6.6688 2.0364 5.57685 2.86157 4.7664C3.26228 4.37162 3.74028 4.05804 4.26766 3.84398C4.79504 3.62992 5.36121 3.51968 5.93312 3.51968C6.50503 3.51968 7.07121 3.62992 7.59858 3.84398C8.12596 4.05804 8.60396 4.37162 9.00467 4.7664L11 6.7424L12.9875 4.7816C13.3867 4.38183 13.8652 4.06406 14.3943 3.84729C14.9234 3.63052 15.4923 3.5192 16.0669 3.52ZM16.0669 2C15.2857 1.99936 14.5123 2.14961 13.792 2.44194C13.0716 2.73427 12.4189 3.1628 11.872 3.7024L11 4.5536L10.128 3.7024C9.58045 3.16378 8.92753 2.73599 8.20732 2.44399C7.48711 2.15198 6.71402 2.00159 5.93312 2.00159C5.15222 2.00159 4.37914 2.15198 3.65893 2.44399C2.93872 2.73599 2.28579 3.16378 1.73822 3.7024C0.624195 4.79956 0 6.27603 0 7.814C0 9.35197 0.624195 10.8284 1.73822 11.9256L11 21L20.2618 11.9256C21.3758 10.8284 22 9.35197 22 7.814C22 6.27603 21.3758 4.79956 20.2618 3.7024C19.7143 3.16349 19.0615 2.73541 18.3413 2.44313C17.621 2.15085 16.8479 2.00021 16.0669 2Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="task__title">Add to Favourite</div>
            </div>
            <div className="college-header__task">
              <div className="task__logo">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M7.2 8.80001L7.84 9.28001C7.92914 9.16115 7.98343 9.01982 7.99677 8.87185C8.01011 8.72388 7.98198 8.57512 7.91554 8.44224C7.8491 8.30935 7.74697 8.19759 7.62058 8.11949C7.4942 8.04138 7.34857 8.00001 7.2 8.00001V8.80001ZM4.8 12L4.16 11.52C4.07086 11.6389 4.01657 11.7802 4.00323 11.9282C3.98989 12.0761 4.01802 12.2249 4.08446 12.3578C4.1509 12.4907 4.25303 12.6024 4.37942 12.6805C4.5058 12.7586 4.65143 12.8 4.8 12.8V12ZM20.3776 4.56641L20.9888 5.08321L20.3776 4.56641ZM3.2 9.60001H7.2V8.00001H3.2V9.60001ZM6.56 8.32001L4.16 11.52L5.44 12.48L7.84 9.28001L6.56 8.32001ZM4.8 12.8H5.6V11.2H4.8V12.8ZM5.6 14.4H3.2V16H5.6V14.4ZM6.4 13.6C6.4 13.8122 6.31571 14.0157 6.16569 14.1657C6.01566 14.3157 5.81217 14.4 5.6 14.4V16C6.23652 16 6.84697 15.7472 7.29706 15.2971C7.74714 14.847 8 14.2365 8 13.6H6.4ZM5.6 12.8C5.81217 12.8 6.01566 12.8843 6.16569 13.0343C6.31571 13.1843 6.4 13.3878 6.4 13.6H8C8 12.9635 7.74714 12.353 7.29706 11.903C6.84697 11.4529 6.23652 11.2 5.6 11.2V12.8ZM12.8 8.00001H12V9.60001H12.8V8.00001ZM9.6 10.4V12H11.2V10.4H9.6ZM9.6 12V13.6H11.2V12H9.6ZM12 11.2H10.4V12.8H12V11.2ZM14.4 13.6C14.4 12.9635 14.1471 12.353 13.6971 11.903C13.247 11.4529 12.6365 11.2 12 11.2V12.8C12.2122 12.8 12.4157 12.8843 12.5657 13.0343C12.7157 13.1843 12.8 13.3878 12.8 13.6H14.4ZM12 16C12.6365 16 13.247 15.7472 13.6971 15.2971C14.1471 14.847 14.4 14.2365 14.4 13.6H12.8C12.8 13.8122 12.7157 14.0157 12.5657 14.1657C12.4157 14.3157 12.2122 14.4 12 14.4V16ZM12 14.4C11.7878 14.4 11.5843 14.3157 11.4343 14.1657C11.2843 14.0157 11.2 13.8122 11.2 13.6H9.6C9.6 14.2365 9.85286 14.847 10.3029 15.2971C10.753 15.7472 11.3635 16 12 16V14.4ZM12 8.00001C11.3635 8.00001 10.753 8.25286 10.3029 8.70295C9.85286 9.15304 9.6 9.76349 9.6 10.4H11.2C11.2 10.1878 11.2843 9.98435 11.4343 9.83432C11.5843 9.68429 11.7878 9.60001 12 9.60001V8.00001ZM19.2 10.4V13.6H20.8V10.4H19.2ZM17.6 13.6V10.4H16V13.6H17.6ZM18.4 14.4C18.1878 14.4 17.9843 14.3157 17.8343 14.1657C17.6843 14.0157 17.6 13.8122 17.6 13.6H16C16 14.2365 16.2529 14.847 16.7029 15.2971C17.153 15.7472 17.7635 16 18.4 16V14.4ZM19.2 13.6C19.2 13.8122 19.1157 14.0157 18.9657 14.1657C18.8157 14.3157 18.6122 14.4 18.4 14.4V16C19.0365 16 19.647 15.7472 20.0971 15.2971C20.5471 14.847 20.8 14.2365 20.8 13.6H19.2ZM18.4 9.60001C18.6122 9.60001 18.8157 9.68429 18.9657 9.83432C19.1157 9.98435 19.2 10.1878 19.2 10.4H20.8C20.8 9.76349 20.5471 9.15304 20.0971 8.70295C19.647 8.25286 19.0365 8.00001 18.4 8.00001V9.60001ZM18.4 8.00001C17.7635 8.00001 17.153 8.25286 16.7029 8.70295C16.2529 9.15304 16 9.76349 16 10.4H17.6C17.6 10.1878 17.6843 9.98435 17.8343 9.83432C17.9843 9.68429 18.1878 9.60001 18.4 9.60001V8.00001ZM12 22.4C9.24175 22.4 6.59647 21.3043 4.64609 19.3539C2.69571 17.4035 1.6 14.7583 1.6 12H0C0 15.1826 1.26428 18.2349 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24V22.4ZM22.4 12C22.4 13.3658 22.131 14.7181 21.6083 15.9799C21.0857 17.2417 20.3196 18.3882 19.3539 19.3539C18.3882 20.3196 17.2417 21.0857 15.9799 21.6084C14.7181 22.131 13.3657 22.4 12 22.4V24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2349 24 15.1826 24 12H22.4ZM12 6.63016e-06C8.8174 6.63016e-06 5.76516 1.26429 3.51472 3.51473C1.26428 5.76516 0 8.81741 0 12H1.6C1.6 9.24176 2.69571 6.59647 4.64609 4.6461C6.59647 2.69572 9.24175 1.60001 12 1.60001V6.63016e-06ZM21.6 4.80001C21.8122 4.80001 22.0157 4.88429 22.1657 5.03432C22.3157 5.18435 22.4 5.38783 22.4 5.60001H24C24 4.96349 23.7471 4.35304 23.2971 3.90295C22.847 3.45286 22.2365 3.20001 21.6 3.20001V4.80001ZM21.6 6.40001C21.3878 6.40001 21.1843 6.31572 21.0343 6.16569C20.8843 6.01566 20.8 5.81218 20.8 5.60001H19.2C19.2 6.23653 19.4529 6.84698 19.9029 7.29706C20.353 7.74715 20.9635 8.00001 21.6 8.00001V6.40001ZM20.8 5.60001C20.8 5.40321 20.8704 5.22401 20.9888 5.08321L19.768 4.04961C19.4144 4.46721 19.2 5.00961 19.2 5.60001H20.8ZM20.9888 5.08321C21.0638 4.99423 21.1574 4.92277 21.263 4.87384C21.3686 4.82491 21.4836 4.79971 21.6 4.80001V3.20001C20.864 3.20001 20.2064 3.53121 19.768 4.04961L20.9888 5.08321ZM12 1.60001C15.0944 1.60001 17.8736 2.95041 19.7792 5.09761L20.976 4.03521C19.8512 2.76502 18.4692 1.7484 16.9218 1.05273C15.3743 0.357055 13.6966 -0.0017788 12 6.63016e-06V1.60001ZM21.3664 7.47201C22.0288 8.84161 22.4 10.376 22.4 12H24C24 10.128 23.5712 8.35681 22.8064 6.77601L21.3664 7.47361V7.47201ZM22.4 5.60001C22.4002 5.76985 22.3464 5.93536 22.2463 6.07257C22.1462 6.20978 22.005 6.31157 21.8432 6.36321L22.3296 7.88641C22.8145 7.73167 23.2376 7.42679 23.5379 7.0158C23.8382 6.60481 24 6.109 24 5.60001H22.4ZM21.8432 6.36321C21.7645 6.38794 21.6825 6.40035 21.6 6.40001V8.00001C21.8475 8.00052 22.0936 7.96274 22.3296 7.88801L21.8432 6.36321Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="task__title">College 360 Tour</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CollegeHeader };
