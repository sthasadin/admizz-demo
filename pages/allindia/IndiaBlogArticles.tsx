import React from "react";
import Link from "next/link";
import { CallToAction } from "../../components/Button/callToAction";
import { useRouter } from "next/router";
import Carousel from "../../components/BlogCarousel";

const IndiaBlogArticles = () => {
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
              Here are some blogs about India
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
        </div>
      </div>
    </div>
  );
};

export default IndiaBlogArticles;
