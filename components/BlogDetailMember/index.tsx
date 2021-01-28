import React from "react";
import BlogImage from "../../public/blog.png";
import { useRouter } from 'next/router'

const SingleBlog = () => {
  const router = useRouter();
  return (
    <div className="blog-detail-member__memberPost" onClick={() => router.push('/blogdetail')}>
      <div className="blog-detail-member__inner">
        <div className="blog-detail-member__catagoryContainer">
          <div className="blog-detail-member__category">technology</div>
        </div>
        <div className="blog-detail-member__details">
          <div className="blogCard__meta">
            <div className="blogCard__author">Stecy James</div>
            <div className="blogCard__time">5 min read</div>
          </div>
          <div className="blogCard__title">
            How I got my job in Google with the help of Admizz
        </div>
          <div className="blogCard__desc">
            Get the right career advice for you and earn your best career
            certificates.
        </div>
        </div>
      </div>
    </div>
  )
}

const BlogDetailMember = () => {
  return (
    <div className="blog-detail-member">
      <div className="blog-detail-member__memberTitle">
        <div className="blog-detail-member__memberTitleText">
          Featured for Members
        </div>
      </div>
      <hr />
      <div className="blog-detail-member__memberList">
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
      </div>
    </div>
  );
};

export { BlogDetailMember };
