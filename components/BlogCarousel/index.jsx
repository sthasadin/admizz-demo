import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../store/Action/blog.action";
import moment from "moment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BlogCard } from "../BlogList/blogListCard";

const index = () => {
  const blogs = useSelector((state) => state.blog.blogs);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBlogs("All"));
  }, []);

  const latestBlog = Array.isArray(blogs)?blogs?.sort(
    (a, b) => moment(b.createdAt) - moment(a.createdAt)
  ):[]

  const settings = {
    dots: true,
    dotsClass: "slick-custom-scroll slick-thumb",
    infinite: false,
    speed: 500,
    className: "blog-carousel",
    slidesToShow: 1.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {latestBlog &&
          latestBlog.slice(0, 4).map((blog, i) => {
            return <BlogCard key={i} data={blog} />;
          })}
      </Slider>
    </div>
  );
};

export default index;
