import React from "react";
import { SingleBlogCard } from "../SingleBlogCard";
import { SingleListPost } from "../SingleListPost";
import { SingleListPostWithImage } from "../SingleListPostWithImage";

const BlogListLatestPost = () => {
  return (
    <div className="blog-list-latest-post">
      <div className="blog-list-latest-post__highlightPost">
        <div className="blog-list-latest-post__secondaryPostContainer">
          <div className="blog-list-latest-post__secondaryPost">
            <SingleBlogCard
              type="Business"
              auther="David Hoffman"
              time="5 min read"
              title="How I got my job in Google with the help of Admizz"
              desc="Get the right career advice for you and earn your best career certificates."
            />
          </div>
          <div className="blog-list-latest-post__secondaryPost">
            <SingleBlogCard
              type="Colleges"
              auther="Quicy Sean"
              time="5 min read"
              title="How I got my job in Google with the help of Admizz"
              desc="Get the right career advice for you and earn your best career certificates."
            />
          </div>
        </div>
        <div className="blog-list-latest-post__secondaryPostContainer">
          <div className="blog-list-latest-post__secondaryPost">
            <SingleListPostWithImage
              type="Business"
              auther="David Hoffman"
              time="5 min read"
              title="How I got my job in Google with the help of Admizz"
              desc="Get the right career advice for you and earn your best career certificates."
            />
          </div>
          <div className="blog-list-latest-post__secondaryPost">
            <SingleListPostWithImage
              type="Colleges"
              auther="Quicy Sean"
              time="5 min read"
              title="How I got my job in Google with the help of Admizz"
              desc="Get the right career advice for you and earn your best career certificates."
            />
          </div>
        </div>
        <div className="blog-list-latest-post__secondaryPostContainer">
          <div className="blog-list-latest-post__secondaryPost">
            <SingleListPostWithImage
              type="Business"
              auther="David Hoffman"
              time="5 min read"
              title="How I got my job in Google with the help of Admizz"
              desc="Get the right career advice for you and earn your best career certificates."
            />
          </div>
          <div className="blog-list-latest-post__secondaryPost">
            <SingleListPostWithImage
              type="Colleges"
              auther="Quicy Sean"
              time="5 min read"
              title="How I got my job in Google with the help of Admizz"
              desc="Get the right career advice for you and earn your best career certificates."
            />
          </div>
        </div>
      </div>
      <div className="blog-list-latest-post__postList">
        <SingleListPost
          author="Stacy james"
          time="5 min read"
          title="IIT Bombay Campus to be Opened to a Few UG, apply fast to get your admission early"
          desc="Get the right career advice for you and earn your best..."
        />
        <SingleListPost
          author="Jimmy Stews"
          time="5 min read"
          title="IIT Bombay Campus to be Opened to a Few UG, apply fast to get your admission early"
          desc="Get the right career advice for you and earn your best..."
        />
        <SingleListPost
          author="Robert Brown"
          time="5 min read"
          title="IIT Bombay Campus to be Opened to a Few UG, apply fast to get your admission early"
          desc="Get the right career advice for you and earn your best..."
        />
      </div>
    </div>
  );
};

export { BlogListLatestPost };
