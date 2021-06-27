import React from "react";
import Link from "next/link";
import { CallToAction } from "../Button/callToAction";
import { BlogCard } from "./blogListCard";
import { useRouter } from "next/router";
import Carousel from "../BlogCarousel";

const BlogList = () => {
  const router = useRouter();
  return (
    <div className="blog-list">
      <div className="blog-list__inner section-wrapper">
        <div className="blog-list__titlebar">
          <div className="blog-list__left">
            <div className="blog-list__heading block-heading">
              Blog/article/news
            </div>
            <div className="blog-list__title block-title">
              Our Latest News/Article/Blog
            </div>
          </div>

          <div className="blog-list__right hideformobile">
            <Link href="/blogs">
              <CallToAction onClick={() => router.push("/blogs")}>
                view all blogs
              </CallToAction>
            </Link>
          </div>
        </div>
        {/* <div className="blog-list__list hideformobile"> */}
        <div>
          <Carousel />

          {/* <BlogCard />
          <BlogCard /> */}
        </div>

        {/* <div className="formobile">



          <Carousel bulletdot={false}>
            <BlogCard />
            <BlogCard />
          </Carousel>
        </div> */}
      </div>
    </div>
  );
};

export { BlogList };
