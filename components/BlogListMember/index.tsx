import React from "react";

const BlogListMember = () => {
  return (
    <div className="blog-list-member">
      <div className="blog-list-member__highlightPost">
        <div className="blog-list-member__topPost">
          Top Post
        </div>
        <div className="blog-list-member__secondaryPostContainer">
          <div className="blog-list-member__secondaryPost">
            SecondaryPost One
          </div>
          <div className="blog-list-member__secondaryPost">
            SecondaryPost Two
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
