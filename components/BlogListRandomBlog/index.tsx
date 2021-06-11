import React from "react";
import { SingleBlogCard } from "../SingleBlogCard";
import { SingleListPost } from "../SingleListPost";
import { SingleListPostWithImage } from "../SingleListPostWithImage";
import { useSelector } from "react-redux";
import calculateReadingTime from "../../utils/calculateReadingTime";

const BlogListRandomBlog = () => {
  // const blogs = useSelector(state => state.allBlog.allBlog)
  const blogs = useSelector((state) =>
    state.blog.blogs.sort(() => Math.random() - 0.5)
  ); //shuffling

  // const len = blogs.length > 12 ? 12 : blogs.length
  const text_truncate = (str) => {
    return str.substring(0, 70 - 3) + "...";
  };
  return (
    <div className="blog-list-random-blog">
      <div className="blog-list-random-blog__highlightPost">
        <div className="blog-list-random-blog__secondaryPostContainer">
          {blogs.length
            ? blogs
                .slice(1, 5)
                .map(
                  ({
                    _id,
                    blog_title,
                    blog_desc,
                    blog_imageURL,
                    author,
                    category,
                  }) => (
                    <div
                      className="blog-list-random-blog__secondaryPost"
                      key={_id}
                    >
                      <SingleBlogCard
                        type={category}
                        auther={author}
                        time={`${calculateReadingTime(blog_desc)} min read`}
                        title={blog_title}
                        desc={text_truncate(blog_desc)}
                        id={_id}
                      />
                    </div>
                  )
                )
            : ""}
          {/* <div className="blog-list-random-blog__secondaryPost">
            <SingleBlogCard
              type="Colleges"
              auther="Quicy Sean"
              time="5 min read"
              title="How I got my job in Google with the help of Admizz"
              desc="Get the right career advice for you and earn your best career certificates."
            />
          </div>
        </div>
        <div className="blog-list-random-blog__secondaryPostContainer">
          <div className="blog-list-random-blog__secondaryPost">
            <SingleBlogCard
              type="Business"
              auther="David Hoffman"
              time="5 min read"
              title="How I got my job in Google with the help of Admizz"
              desc="Get the right career advice for you and earn your best career certificates."
            />
          </div>
          <div className="blog-list-random-blog__secondaryPost">
            <SingleBlogCard
              type="Colleges"
              auther="Quicy Sean"
              time="5 min read"
              title="How I got my job in Google with the help of Admizz"
              desc="Get the right career advice for you and earn your best career certificates."
            />
          </div> */}
        </div>
      </div>
      <div className="blog-list-random-blog__postList"></div>
    </div>
  );
};

export { BlogListRandomBlog };
