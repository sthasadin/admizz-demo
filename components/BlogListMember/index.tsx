import React from "react";
import { SingleBlogCard } from "../SingleBlogCard";

const BlogListMember = () => {
  return (
    <div className="blog-list-member">
      <div className="blog-list-member__highlightPost">
        <div className="blog-list-member__topPost">
          <SingleBlogCard />
        </div>
        <div className="blog-list-member__secondaryPostContainer">
          <div className="blog-list-member__secondaryPost">
          <SingleBlogCard />
          </div>
          <div className="blog-list-member__secondaryPost">
          <SingleBlogCard />
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
