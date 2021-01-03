import React from "react";
import { SingleBlogCard } from "../SingleBlogCard";

const BlogListMember = () => {
  return (
    <div className="blog-list-member">
      <div className="blog-list-member__highlightPost">
        <div className="blog-list-member__topPost">
          <SingleBlogCard
            type="Technology"
            auther="Stecy James"
            time="5 min read"
            title="How I got my job in Google with the help of Admizz"
            desc="Get the right career advice for you and earn your best career certificates."
          />
        </div>
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
        PostList
      </div>
    </div>
  );
};

export { BlogListMember };
