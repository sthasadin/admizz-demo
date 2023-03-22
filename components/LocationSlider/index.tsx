import React from "react";
import { Carousel } from "react-bootstrap";

interface SliderProps {
  bgImage: string;
  location: string;
  description: string;
}

const SliderCard: React.FC<SliderProps> = ({
  bgImage,
  location,
  description,
}) => {
  return (
    <Carousel.Item>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "500px",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Carousel.Caption>
          <h3>{location}</h3>
          <p>{description}</p>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
  );
};

const Slider: React.FC = () => {
  return (
    <Carousel>
      <SliderCard
        bgImage="https://example.com/image1.jpg"
        location="Location 1"
        description="Description for Location 1"
      />
      <SliderCard
        bgImage="https://example.com/image2.jpg"
        location="Location 2"
        description="Description for Location 2"
      />
      <SliderCard
        bgImage="https://example.com/image3.jpg"
        location="Location 3"
        description="Description for Location 3"
      />
      <SliderCard
        bgImage="https://example.com/image4.jpg"
        location="Location 4"
        description="Description for Location 4"
      />
      <SliderCard
        bgImage="https://example.com/image5.jpg"
        location="Location 5"
        description="Description for Location 5"
      />
      <SliderCard
        bgImage="https://example.com/image6.jpg"
        location="Location 6"
        description="Description for Location 6"
      />
    </Carousel>
  );
};

export default Slider;
