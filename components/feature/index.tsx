import React from "react";
import Link from "next/link";

const Feature = ({ data, handleDescrease, handleIncrease }) => {
  return (
    <div className="feature">
      <div className="feature__heading">Our Features:</div>

      <div className="feature__listcontainer">
        <div className="feature__details">
          <img src={data.icon} />
          <div className="feature__title">{data.title}</div>
        </div>
        <div className="feature__descrition">{data.description}</div>
      </div>

      <div className="feature__btn">
        <button
          className="cta-button white-border"
          style={{ backgroundColor: "transparent" }}
        >
          <Link href="/blogs">Learn More</Link>
        </button>
        <div className="us__btncontainer">
          <button className="btn__left" onClick={handleDescrease}>
            <img src="/leftArrow.png" alt=".." />
          </button>
          <button className="btn__right" onClick={handleIncrease}>
            <img src="/rightArrow.png" alt="..." />
          </button>
        </div>
      </div>
    </div>
  );
};

export { Feature };
