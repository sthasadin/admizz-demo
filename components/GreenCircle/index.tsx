import React from "react";

const index = () => {
  const [state, setState] = React.useState(false);

  setTimeout(() => {
    setState(true);
  }, 1000);

  return (
    <>
      {state && (
        <svg
          width="38"
          height="39"
          viewBox="0 0 38 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginLeft: "20px" }}
        >
          <path
            d="M37.2295 19.4448C36.7992 30.1318 28.2907 38.8013 18.2252 38.8087C8.15982 38.8161 0.34904 30.1586 0.779385 19.4716C1.20973 8.78461 9.71823 0.115094 19.7837 0.107693C29.8491 0.100292 37.6599 8.75781 37.2295 19.4448ZM4.4244 19.4689C4.08012 28.0185 10.3287 34.9445 18.3811 34.9386C26.4334 34.9327 33.2402 27.9971 33.5845 19.4475C33.9288 10.8979 27.6802 3.97187 19.6278 3.97779C11.5755 3.98372 4.76867 10.9193 4.4244 19.4689Z"
            fill="#27AE60"
          />
        </svg>
      )}
    </>
  );
};

export default index;
