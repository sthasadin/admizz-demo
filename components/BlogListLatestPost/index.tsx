import React from "react";
import moment from "moment";
import { SingleBlogCard } from "../SingleBlogCard";
import { SingleListPost } from "../SingleListPost";
import { SingleListPostWithImage } from "../SingleListPostWithImage";
import { useSelector } from "react-redux";
import calculateReadingTime from "../../utils/calculateReadingTime";
// import { truncate } from "fs";
import {RootState} from "../../store/store";

const BlogListLatestPost = ({ blogArray }) => {
  // const blogs = useSelector(state => state.allBlog.allBlog)
  let blogs = useSelector((state:any) =>
    state.blog.blogs.sort((a, b) =>
      moment(a.createdAt).diff(moment(b.createdAt))
    )
  );
  const removeHtmlChar = (text) => {
    return text?.replace(/<[^>]+>/g, "");
  };
  const len = blogs.length > 7 ? 7 : blogs.length;
  const text_truncate = (str) => {
    return str.substring(0, 150 - 3) + "...";
  };
  return (
    <div className="blog-list-latest-post">
      <div className="blog-list-latest-post__highlightPost">
        <div className="blog-list-latest-post__secondaryPostContainer">
          {blogArray &&
            blogArray
              .sort(
                (a, b) =>
                  (moment(b.createdAt) as any) - (moment(a.createdAt) as any)
              )
              .slice(0, 2)
              .map((blog, i) => {
                return (
                  <div className="blog-list-member__secondaryPost" key={i}>
                    <SingleBlogCard
                      slug={blog?.blog_slug}
                      
                      type={blog?.category}
                      auther={blog?.author}
                      time={`${calculateReadingTime(
                        blog?.blog_desc ? removeHtmlChar(blog?.blog_desc) : ""
                      )} min read`}
                      title={blog?.blog_title}
                      desc={removeHtmlChar(blog?.blog_desc)}
                      backgroundImg={blog?.blog_imageURL}
                    />
                   {/* { console.log("slug",blog?.blog_slug)} */}
                  </div>
                );
              })}
        </div>
        <div className="blog-list-latest-post__smallSecondaryPostContainer">
          {blogArray &&
            blogArray
              .sort(
                (a: any, b: any) =>
                  (moment(b.createdAt) as any) - (moment(a.createdAt) as any)
              )
              .slice(2, 6)
              .map((blog, i) => {
                return (
                  <div className="blog-list-latest-post__secondaryPost" key={i}>
                    <SingleListPostWithImage
                      type={blog?.category}
                      auther={blog?.author}
                      time={`${calculateReadingTime(blog?.blog_desc)} min read`}
                      title={blog?.blog_title}
                      desc={text_truncate(removeHtmlChar(blog?.blog_desc))}
                      backgroundImg={blog?.blog_imageURL}
                      // id={_id}
                      slug={blog?.blog_slug}
                      createdAt={blog?.createdAt}
                    />
                  </div>
                );
              })}
        </div>
      </div>
      <div className="blog-list-latest-post__postList">
        {blogArray &&
          blogArray
            .sort(
              (a: any, b: any) =>
                (moment(b.createdAt) as any) - (moment(a.createdAt) as any)
            )
            .slice(6, 11)
            .map((blog, i) => {
              return (
                <SingleListPost
                  author={blog?.author}
                  time={`${calculateReadingTime(blog?.blog_desc)} min read`}
                  title={blog?.blog_title}
                  desc={text_truncate(removeHtmlChar(blog?.blog_desc))}
                  id={blog?._id}
                  slug={blog?.blog_slug}
                  key={i}
                  createdAt={blog?.createdAt}
                />
              );
            })}
      </div>
    </div>
  );
};

export { BlogListLatestPost };
