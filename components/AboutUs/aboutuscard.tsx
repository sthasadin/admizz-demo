import React from "react";
import Image from "next/image";

const AboutusCard = ({ data }) => {
  return (
    <div>
      {data?.map((item) => {
        return (
          <div>
            <div className="about-us__card">
              <blockquote>
                <p>{item?.designation}</p>{" "}
              </blockquote>
            </div>
            <div className="about-us__cardImage">
              <Image
                width={70}
                height={70}
                alt="College Logo"
                src="/colleges-logo.png"
              />
              <p>Kalinga Institute of Industrial Technology</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { AboutusCard };
