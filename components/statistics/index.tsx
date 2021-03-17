import React from "react";

const Statistics = () => {
  const [windowSize, setWindowSize] = React.useState({ width: undefined });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="stat">
      <div className="stat__inner">
        <div className="stat__heading block-heading">Our statistics</div>
        <div className="stat__title block-title">
          What we do more than you can imangine, belive us.
        </div>
        <div className="stat__info">
          <div className="stat__info__top">
            <div className="stat__item">
              <div className="stat__item__count">500+</div>
              <div className="stat__item__title">Graduate Students</div>
            </div>
            <div className="stat__item">
              <div className="stat__item__count">30</div>
              <div className="stat__item__title">aFFiliated universities</div>
            </div>
            <div className="stat__item">
              <div className="stat__item__count secondary">20</div>
              <div className="stat__item__title">countries connected</div>
            </div>
            {windowSize.width < 450 ? (
              <div className="stat__item">
                <div className="stat__item__count blue2">200+</div>
                <div className="stat__item__title">SCHOLARSHIP DELIVERED</div>
              </div>
            ) : null}
          </div>
          <div className="stat__info__bottom">
            {windowSize.width > 450 ? (
              <div className="stat__item">
                <div className="stat__item__count blue2">200+</div>
                <div className="stat__item__title">SCHOLARSHIP DELIVERED</div>
              </div>
            ) : null}
            <div className="stat__item">
              <div className="stat__item__count green2">10000+</div>
              <div className="stat__item__title">REGISTERED STUDNTS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Statistics };
