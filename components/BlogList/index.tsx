import React from "react";
import Link from 'next/link'
import { CallToAction } from "../Button/callToAction";
import { BlogCard } from "./blogListCard";
import { useRouter } from 'next/router'

const BlogList = () => {
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
          <div className="blog-list__right">
            <Link href="/blogs">
              <CallToAction onClick={() => router.push('/blogs')}>view all blogs</CallToAction>
            </Link>
          </div>
        </div>
        <div className="blog-list__list">
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export { BlogList };
