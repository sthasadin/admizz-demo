import React from "react";
import Link from "next/link";
import { CallToAction } from "../Button/callToAction";
import { BlogCard } from "./blogListCard";
import { useRouter } from "next/router";
import Carousel from "../../components/Carousel";

const BlogList = () => {
  const [windowSize, setWindowSize] = React.useState({ width: undefined });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const router = useRouter();
  return (
    <div className="blog-list">
      <div className="blog-list__inner">
        <div className="blog-list__titlebar">
          <div className="blog-list__left">
            <div className="blog-list__heading block-heading">
              Blog/article/news
            </div>
            <div className="blog-list__title block-title">
              Our Latest News/Article/Blog
            </div>
          </div>
          {windowSize.width > 450 && (
            <div className="blog-list__right">
              <Link href="/blogs">
                <CallToAction onClick={() => router.push("/blogs")}>
                  view all blogs
                </CallToAction>
              </Link>
            </div>
          )}
        </div>
        <div className="blog-list__list">
          {windowSize.width > 450 ? (
            <>
              <BlogCard />
              <BlogCard />
            </>
          ) : (
            <Carousel bulletdot={false}>
              <BlogCard />
              <BlogCard />
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
};

export { BlogList };
