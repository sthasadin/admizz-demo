import React from "react";

const CollegeFinderCard = (props: any) => {
  return (
    <div className={`course-card ${props.className ? props.className : ""}`}>
      <div className="course-card__inner">
        <div className="course-card__icon">
          <svg
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2612 26.25C11.6076 26.25 2.31787 28.595 2.31787 33.25V36.75H30.2045V33.25C30.2045 28.595 20.9148 26.25 16.2612 26.25ZM5.8037 33.25C6.18714 31.99 11.5728 29.75 16.2612 29.75C20.9671 29.75 26.3701 32.0075 26.7187 33.25H5.8037ZM8.83637 15.75H9.28953C9.28953 19.6175 12.4093 22.75 16.2612 22.75C20.113 22.75 23.2329 19.6175 23.2329 15.75H23.686C24.1566 15.75 24.54 15.365 24.54 14.8925V14.8575C24.54 14.6301 24.4501 14.412 24.2899 14.2512C24.1297 14.0903 23.9125 14 23.686 14H23.2329C23.2329 11.41 21.8211 9.1875 19.747 7.9625V9.625C19.747 10.115 19.3636 10.5 18.8756 10.5C18.3875 10.5 18.0041 10.115 18.0041 9.625V7.245C17.4464 7.105 16.8712 7 16.2612 7C15.6512 7 15.076 7.105 14.5183 7.245V9.625C14.5183 10.115 14.1348 10.5 13.6468 10.5C13.1588 10.5 12.7754 10.115 12.7754 9.625V7.9625C10.7013 9.1875 9.28953 11.41 9.28953 14H8.83637C8.72422 14 8.61317 14.0222 8.50955 14.0653C8.40594 14.1084 8.31179 14.1715 8.23248 14.2512C8.15318 14.3308 8.09027 14.4253 8.04735 14.5293C8.00444 14.6334 7.98235 14.7449 7.98235 14.8575V14.91C7.98235 15.365 8.36579 15.75 8.83637 15.75ZM19.747 15.75C19.747 17.675 18.1784 19.25 16.2612 19.25C14.344 19.25 12.7754 17.675 12.7754 15.75H19.747ZM38.8842 10.9025L40.5051 9.45L39.198 7.175L37.1239 7.8575C36.8799 7.665 36.601 7.5075 36.3047 7.385L35.869 5.25H33.2546L32.8189 7.385C32.5226 7.5075 32.2437 7.665 31.9823 7.8575L29.9256 7.175L28.6185 9.45L30.2394 10.9025C30.2045 11.2 30.2045 11.515 30.2394 11.8125L28.6185 13.3L29.9256 15.575L32.0171 14.91C32.2437 15.085 32.5052 15.225 32.7666 15.3475L33.2546 17.5H35.869L36.3396 15.365C36.6184 15.2425 36.8624 15.1025 37.1065 14.9275L39.1805 15.5925L40.4877 13.3175L38.8668 11.83C38.9191 11.4975 38.9017 11.2 38.8842 10.9025ZM34.5618 13.5625C33.984 13.5625 33.4298 13.332 33.0213 12.9218C32.6127 12.5116 32.3832 11.9552 32.3832 11.375C32.3832 10.7948 32.6127 10.2384 33.0213 9.8282C33.4298 9.41797 33.984 9.1875 34.5618 9.1875C35.1396 9.1875 35.6938 9.41797 36.1023 9.8282C36.5109 10.2384 36.7404 10.7948 36.7404 11.375C36.7404 11.9552 36.5109 12.5116 36.1023 12.9218C35.6938 13.332 35.1396 13.5625 34.5618 13.5625ZM34.3875 18.8825L32.906 19.3725C32.7317 19.2325 32.54 19.1275 32.3309 19.04L32.0171 17.5H30.1522L29.8385 19.0225C29.6294 19.11 29.4202 19.2325 29.2459 19.355L27.7819 18.865L26.8407 20.4925L27.991 21.525C27.9736 21.7525 27.9736 21.9625 27.991 22.1725L26.8407 23.24L27.7819 24.8675L29.2808 24.395C29.4551 24.5175 29.6294 24.6225 29.8211 24.71L30.1348 26.25H31.9997L32.3309 24.7275C32.5226 24.64 32.7143 24.535 32.8886 24.4125L34.3701 24.885L35.3113 23.2575L34.1609 22.19C34.1784 21.9625 34.1784 21.7525 34.1609 21.5425L35.3113 20.51L34.3875 18.8825ZM31.076 23.4325C30.2219 23.4325 29.5248 22.7325 29.5248 21.875C29.5248 21.0175 30.2219 20.3175 31.076 20.3175C31.93 20.3175 32.6272 21.0175 32.6272 21.875C32.6272 22.7325 31.93 23.4325 31.076 23.4325Z"
              fill="#FFA200"
            />
          </svg>
        </div>
        <div className="course-card__title">{props.name}</div>
        <div className="course-card__count">{props.count} Colleges</div>
      </div>
    </div>
  );
};

export { CollegeFinderCard };