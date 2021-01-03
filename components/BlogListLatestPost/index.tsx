import React from "react";
import { SingleBlogCard } from "../SingleBlogCard";
import { SingleListPost } from "../SingleListPost";

const BlogListLatestPost = () => {
  return (
    <div className="blog-list-member">
      <div className="blog-list-member__highlightPost">
        <div className="blog-list-member__secondaryPostContainer">
          <div className="blog-list-member__secondaryPost">
            <SingleBlogCard
              type="Business"
              auther="David Hoffman"
              time="5 min read"
              title="How I got my job in Google with the help of Admizz"
              desc="Get the right career advice for you and earn your best career certificates."
            />
          </div>
          <div className="blog-list-member__secondaryPost">
            <SingleBlogCard
              type="Colleges"
              auther="Quicy Sean"
              time="5 min read"
              title="How I got my job in Google with the help of Admizz"
              desc="Get the right career advice for you and earn your best career certificates."
            />
          </div>
        </div>
      </div>
      <div className="blog-list-member__postList">
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
