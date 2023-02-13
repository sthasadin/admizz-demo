import React from "react";
import { SingleBlogCard } from "../SingleBlogCard";
import calculateReadingTime from "../../utils/calculateReadingTime";

const BlogListRandomBlog = ({ blogArray }) => {
  // const blogs = useSelector(state => state.allBlog.allBlog)

  const removeHtmlChar = (text) => {
    return text?.replace(/<[^>]+>/g, "");
  };

  const text_truncate = (str) => {
    return str.substring(0, 70 - 3) + "...";
  };
  const suffleArray = blogArray.sort((a, b) => 0.5 - Math.random());

  return (
    <div className="blog-list-random-blog">
      <div className="blog-list-random-blog__highlightPost">
        <div className="blog-list-random-blog__secondaryPostContainer">
          {suffleArray &&
            suffleArray.slice(0, 6).map((blog, i) => {
              return (
                <div className="blog-list-member__secondaryPost" key={i}>
                  <SingleBlogCard
                    id={blog?._id}
                    slug={blog?.blog_slug}
                    type={blog?.category}
                    auther={blog?.author}
                    time={`${calculateReadingTime(
                      blog?.blog_desc ? removeHtmlChar(blog?.blog_desc) : ""
                    )} min read`}
                    title={blog?.blog_title}
                    desc={text_truncate(removeHtmlChar(blog?.blog_desc))}
                    backgroundImg={blog?.blog_imageURL}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export { BlogListRandomBlog };
